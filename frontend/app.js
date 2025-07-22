// ResearchFlow Agent Frontend
class ResearchFlowApp {
    constructor() {
        this.currentSessionId = null;
        this.progressInterval = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.showWelcomeSection();
    }

    bindEvents() {
        // Form submission
        document.getElementById('newResearchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.startResearch();
        });

        // Navigation buttons
        document.getElementById('viewSessionsBtn').addEventListener('click', () => {
            this.showSessionsSection();
        });

        document.getElementById('backToMain').addEventListener('click', () => {
            this.showWelcomeSection();
        });

        document.getElementById('newResearchBtn').addEventListener('click', () => {
            this.showWelcomeSection();
            this.resetForm();
        });

        document.getElementById('cancelResearch').addEventListener('click', () => {
            this.cancelResearch();
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the specified section
        document.getElementById(sectionId).classList.remove('hidden');
    }

    showWelcomeSection() {
        this.showSection('welcomeSection');
        this.showSection('researchForm');
    }

    showProgressSection() {
        this.showSection('researchProgress');
    }

    showSessionsSection() {
        this.showSection('sessionsSection');
        this.loadSessions();
    }

    showLoading(show = true) {
        const overlay = document.getElementById('loadingOverlay');
        if (show) {
            overlay.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
        }
    }

    async startResearch() {
        const taskInput = document.getElementById('researchTask');
        const task = taskInput.value.trim();

        if (!task) {
            this.showError('Please enter a research task description.');
            return;
        }

        try {
            this.showLoading(true);

            const response = await fetch('/api/research/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to start research');
            }

            this.currentSessionId = data.session_id;
            this.showProgressSection();
            this.setupProgressTracking();

        } catch (error) {
            this.showError(error.message);
        } finally {
            this.showLoading(false);
        }
    }

    setupProgressTracking() {
        // Clear any existing interval
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }

        // Start polling for progress updates
        this.progressInterval = setInterval(() => {
            this.updateProgress();
        }, 2000);

        // Initial update
        this.updateProgress();
    }

    async updateProgress() {
        if (!this.currentSessionId) return;

        try {
            const response = await fetch(`/api/research/${this.currentSessionId}/status`);
            const session = await response.json();

            if (!response.ok) {
                throw new Error(session.error || 'Failed to get session status');
            }

            this.renderProgress(session);

            // Stop polling if completed or error
            if (session.status === 'completed' || session.status === 'error') {
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }

        } catch (error) {
            console.error('Error updating progress:', error);
        }
    }

    renderProgress(session) {
        // Update basic info
        document.getElementById('currentTask').textContent = session.task;
        document.getElementById('sessionId').textContent = session.id.substring(0, 8) + '...';
        document.getElementById('sessionTime').textContent = new Date(session.created_at).toLocaleString();

        // Update status
        const statusElement = document.getElementById('currentStatus');
        statusElement.textContent = session.status;
        statusElement.className = `status-badge ${session.status}`;

        // Update agent workflow
        this.renderAgentWorkflow(session);

        // Update timeline
        this.renderTimeline(session.progress);

        // Update facts, plan, and results
        this.renderFacts(session.facts);
        this.renderPlan(session.plan);
        this.renderResults(session.result);

        // Show/hide completion buttons
        if (session.status === 'completed') {
            document.getElementById('cancelResearch').classList.add('hidden');
            document.getElementById('newResearchBtn').classList.remove('hidden');
        }
    }

    renderAgentWorkflow(session) {
        const workflowContainer = document.getElementById('agentWorkflow');
        const agents = [
            { name: 'LedgerFacts', icon: 'fas fa-database' },
            { name: 'LedgerPlanner', icon: 'fas fa-sitemap' },
            { name: 'ProgressLedger', icon: 'fas fa-tasks' },
            { name: 'ActionRouterAgent', icon: 'fas fa-route' },
            { name: 'Research Agents', icon: 'fas fa-search' },
            { name: 'FinalStepAgent', icon: 'fas fa-flag-checkered' }
        ];

        workflowContainer.innerHTML = agents.map((agent, index) => {
            let stepClass = '';
            const isCurrentAgent = session.current_agent && session.current_agent.includes(agent.name.split(' ')[0]);
            const hasPassedAgent = session.progress.some(p => p.agent.includes(agent.name.split(' ')[0]));

            if (isCurrentAgent) {
                stepClass = 'active';
            } else if (hasPassedAgent || session.status === 'completed') {
                stepClass = 'completed';
            }

            return `
                <div class="agent-step ${stepClass}">
                    <i class="${agent.icon}"></i>
                    <span>${agent.name}</span>
                </div>
            `;
        }).join('');
    }

    renderTimeline(progress) {
        const timelineContainer = document.getElementById('progressTimeline');
        
        if (!progress || progress.length === 0) {
            timelineContainer.innerHTML = '<p>No progress updates yet...</p>';
            return;
        }

        timelineContainer.innerHTML = progress.map(item => {
            const time = new Date(item.timestamp).toLocaleTimeString();
            const statusClass = item.status || 'running';

            return `
                <div class="timeline-item ${statusClass}">
                    <div class="timeline-content">
                        <div class="timeline-agent">${item.agent}</div>
                        <div class="timeline-message">${item.message}</div>
                        <div class="timeline-time">${time}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderFacts(facts) {
        const factsSection = document.getElementById('factsSection');
        const factsContent = document.getElementById('factsContent');

        if (!facts || Object.keys(facts).length === 0) {
            factsSection.classList.add('hidden');
            return;
        }

        factsSection.classList.remove('hidden');
        
        let html = '';
        if (facts.given_facts && facts.given_facts.length > 0) {
            html += `
                <h4>Given or Verified Facts</h4>
                <ul>${facts.given_facts.map(fact => `<li>${fact}</li>`).join('')}</ul>
            `;
        }
        
        if (facts.facts_to_lookup && facts.facts_to_lookup.length > 0) {
            html += `
                <h4>Facts to Look Up</h4>
                <ul>${facts.facts_to_lookup.map(fact => `<li>${fact}</li>`).join('')}</ul>
            `;
        }

        if (facts.facts_to_derive && facts.facts_to_derive.length > 0) {
            html += `
                <h4>Facts to Derive</h4>
                <ul>${facts.facts_to_derive.map(fact => `<li>${fact}</li>`).join('')}</ul>
            `;
        }

        if (facts.educated_guesses && facts.educated_guesses.length > 0) {
            html += `
                <h4>Educated Guesses</h4>
                <ul>${facts.educated_guesses.map(fact => `<li>${fact}</li>`).join('')}</ul>
            `;
        }

        factsContent.innerHTML = html;
    }

    renderPlan(plan) {
        const planSection = document.getElementById('planSection');
        const planContent = document.getElementById('planContent');

        if (!plan || plan.length === 0) {
            planSection.classList.add('hidden');
            return;
        }

        planSection.classList.remove('hidden');
        planContent.innerHTML = `
            <h4>Research Plan</h4>
            <ul>${plan.map(step => `<li>${step}</li>`).join('')}</ul>
        `;
    }

    renderResults(result) {
        const resultsSection = document.getElementById('resultsSection');
        const resultsContent = document.getElementById('resultsContent');

        if (!result) {
            resultsSection.classList.add('hidden');
            return;
        }

        resultsSection.classList.remove('hidden');
        
        let html = `<h4>${result.summary}</h4>`;
        
        if (result.key_findings && result.key_findings.length > 0) {
            html += `
                <h4>Key Findings</h4>
                <ul>${result.key_findings.map(finding => `<li>${finding}</li>`).join('')}</ul>
            `;
        }

        if (result.recommendations && result.recommendations.length > 0) {
            html += `
                <h4>Recommendations</h4>
                <ul>${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}</ul>
            `;
        }

        if (result.confidence_score) {
            const percentage = Math.round(result.confidence_score * 100);
            html += `
                <div style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                    <strong>Confidence Score: ${percentage}%</strong>
                </div>
            `;
        }

        resultsContent.innerHTML = html;
    }

    async loadSessions() {
        try {
            const response = await fetch('/api/research/sessions');
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to load sessions');
            }

            this.renderSessions(data.sessions);

        } catch (error) {
            this.showError(error.message);
        }
    }

    renderSessions(sessions) {
        const sessionsContainer = document.getElementById('sessionsList');

        if (!sessions || sessions.length === 0) {
            sessionsContainer.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #5a6c7d;">
                    <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>No research sessions found. Start your first research!</p>
                </div>
            `;
            return;
        }

        sessionsContainer.innerHTML = sessions
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(session => {
                const createdAt = new Date(session.created_at).toLocaleString();
                const statusClass = session.status || 'running';

                return `
                    <div class="session-item">
                        <div class="session-header">
                            <div class="session-task">${session.task}</div>
                            <span class="status-badge ${statusClass}">${session.status}</span>
                        </div>
                        <div class="session-info-inline">
                            <strong>ID:</strong> ${session.id.substring(0, 8)}... | 
                            <strong>Created:</strong> ${createdAt} |
                            <strong>Progress:</strong> ${session.progress ? session.progress.length : 0} steps
                        </div>
                        <div style="margin-top: 1rem;">
                            <button class="btn btn-secondary" onclick="app.viewSession('${session.id}')">
                                <i class="fas fa-eye"></i> View Details
                            </button>
                            <button class="btn btn-secondary" onclick="app.deleteSession('${session.id}')" style="margin-left: 0.5rem;">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
    }

    async viewSession(sessionId) {
        this.currentSessionId = sessionId;
        this.showProgressSection();
        await this.updateProgress();
    }

    async deleteSession(sessionId) {
        if (!confirm('Are you sure you want to delete this session?')) {
            return;
        }

        try {
            const response = await fetch(`/api/research/${sessionId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to delete session');
            }

            // Reload sessions list
            this.loadSessions();
            this.showMessage('Session deleted successfully.', 'success');

        } catch (error) {
            this.showError(error.message);
        }
    }

    cancelResearch() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
        this.currentSessionId = null;
        this.showWelcomeSection();
        this.resetForm();
    }

    resetForm() {
        document.getElementById('researchTask').value = '';
        document.getElementById('newResearchBtn').classList.add('hidden');
        document.getElementById('cancelResearch').classList.remove('hidden');
    }

    showError(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type = 'info') {
        // Create a simple toast notification
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Add toast styles if not already present
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                .toast {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    color: white;
                    font-weight: 600;
                    z-index: 1001;
                    animation: slideIn 0.3s ease;
                }
                .toast-error { background: #c62828; }
                .toast-success { background: #2e7d32; }
                .toast-info { background: #1976d2; }
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        // Remove toast after 5 seconds
        setTimeout(() => {
            toast.remove();
        }, 5000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ResearchFlowApp();
});