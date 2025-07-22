from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import os
import json
import uuid
from datetime import datetime
import threading
import time

app = Flask(__name__, static_folder='frontend', template_folder='frontend')
CORS(app)

# In-memory storage for demo purposes
research_sessions = {}
agent_workflows = {}

class ResearchSession:
    def __init__(self, task, session_id=None):
        self.id = session_id or str(uuid.uuid4())
        self.task = task
        self.status = "initializing"
        self.created_at = datetime.now()
        self.progress = []
        self.current_agent = None
        self.facts = {}
        self.plan = []
        self.result = None
        self.error = None

    def add_progress(self, agent, message, status="running"):
        self.progress.append({
            "timestamp": datetime.now().isoformat(),
            "agent": agent,
            "message": message,
            "status": status
        })
        self.current_agent = agent

    def to_dict(self):
        return {
            "id": self.id,
            "task": self.task,
            "status": self.status,
            "created_at": self.created_at.isoformat(),
            "progress": self.progress,
            "current_agent": self.current_agent,
            "facts": self.facts,
            "plan": self.plan,
            "result": self.result,
            "error": self.error
        }

def simulate_agent_workflow(session_id):
    """Simulate the agent workflow for demo purposes"""
    session = research_sessions[session_id]
    
    try:
        # Step 1: Gather Facts
        session.add_progress("LedgerFacts", "Analyzing the request and gathering initial facts...")
        time.sleep(2)
        session.facts = {
            "given_facts": ["User provided research task"],
            "facts_to_lookup": ["Relevant sources and documents"],
            "facts_to_derive": ["Analysis and synthesis requirements"],
            "educated_guesses": ["Expected outcomes and approaches"]
        }
        
        # Step 2: Plan
        session.add_progress("LedgerPlanner", "Creating a research plan based on available facts...")
        time.sleep(3)
        session.plan = [
            "Identify key research areas and sources",
            "Gather and analyze relevant information", 
            "Synthesize findings into coherent insights",
            "Generate final summary and recommendations"
        ]
        
        # Step 3: Process Progress
        session.add_progress("ProgressLedger", "Managing workflow execution and progress tracking...")
        time.sleep(2)
        
        # Step 4: Execute Research Steps
        research_steps = [
            ("Researcher Agent", "Conducting primary research and data collection..."),
            ("Analysis Agent", "Analyzing collected data and identifying patterns..."),
            ("Synthesis Agent", "Synthesizing findings into actionable insights...")
        ]
        
        for agent, message in research_steps:
            session.add_progress(agent, message)
            time.sleep(3)
        
        # Step 5: Summarize
        session.add_progress("FinalStepAgent", "Generating final summary and recommendations...")
        time.sleep(2)
        
        session.result = {
            "summary": f"Research completed for: {session.task}",
            "key_findings": [
                "Comprehensive analysis of the research topic",
                "Identified key trends and patterns",
                "Generated actionable recommendations"
            ],
            "recommendations": [
                "Continue monitoring relevant developments",
                "Implement suggested strategies",
                "Schedule follow-up research as needed"
            ],
            "confidence_score": 0.85
        }
        
        session.status = "completed"
        session.add_progress("System", "Research workflow completed successfully!", "completed")
        
    except Exception as e:
        session.status = "error"
        session.error = str(e)
        session.add_progress("System", f"Error occurred: {str(e)}", "error")

@app.route('/')
def index():
    """Serve the main frontend page"""
    return render_template('index.html')

@app.route('/styles.css')
def serve_styles():
    """Serve the CSS file"""
    return send_from_directory('frontend', 'styles.css', mimetype='text/css')

@app.route('/app.js')
def serve_js():
    """Serve the JS file"""
    return send_from_directory('frontend', 'app.js', mimetype='application/javascript')

@app.route('/api/research/start', methods=['POST'])
def start_research():
    """Start a new research session"""
    data = request.get_json()
    if not data or 'task' not in data:
        return jsonify({"error": "Task description is required"}), 400
    
    session = ResearchSession(data['task'])
    research_sessions[session.id] = session
    
    # Start the simulated workflow in a background thread
    thread = threading.Thread(target=simulate_agent_workflow, args=(session.id,))
    thread.start()
    
    return jsonify({"session_id": session.id, "status": "started"})

@app.route('/api/research/<session_id>/status', methods=['GET'])
def get_research_status(session_id):
    """Get the current status of a research session"""
    if session_id not in research_sessions:
        return jsonify({"error": "Session not found"}), 404
    
    session = research_sessions[session_id]
    return jsonify(session.to_dict())

@app.route('/api/research/sessions', methods=['GET'])
def list_sessions():
    """List all research sessions"""
    sessions = [session.to_dict() for session in research_sessions.values()]
    return jsonify({"sessions": sessions})

@app.route('/api/research/<session_id>', methods=['DELETE'])
def delete_session(session_id):
    """Delete a research session"""
    if session_id not in research_sessions:
        return jsonify({"error": "Session not found"}), 404
    
    del research_sessions[session_id]
    return jsonify({"message": "Session deleted successfully"})

@app.route('/api/agents/info', methods=['GET'])
def get_agents_info():
    """Get information about available agents"""
    agents = [
        {
            "name": "LedgerFacts",
            "description": "Collects and organizes factual information",
            "role": "fact_gathering"
        },
        {
            "name": "LedgerPlanner", 
            "description": "Creates research plans and strategies",
            "role": "planning"
        },
        {
            "name": "ProgressLedger",
            "description": "Manages workflow progress and coordination",
            "role": "orchestration"
        },
        {
            "name": "ActionRouterAgent",
            "description": "Routes tasks to appropriate agents",
            "role": "routing"
        },
        {
            "name": "FinalStepAgent",
            "description": "Synthesizes and summarizes final results",
            "role": "summarization"
        }
    ]
    return jsonify({"agents": agents})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)