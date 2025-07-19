# 🏭 Qualcomm Manufacturing ResearchFlow Agent

This customized ResearchFlow Agent template is built using Azure AI Foundry Agent Service, specifically tailored for Qualcomm's manufacturing data analysis needs. The agent provides deep research capabilities similar to Semi Analysis methodology for semiconductor manufacturing intelligence.

**IMPORTANT NOTE:** This specialized agent template has been customized for Qualcomm's manufacturing operations and semiconductor industry analysis. It is important that you review all provided resources and carefully test Agent behavior in the context of your manufacturing use case: ([Learn More](https://learn.microsoft.com/en-us/legal/cognitive-services/agents/transparency-note?context=%2Fazure%2Fai-services%2Fagents%2Fcontext%2Fcontext)).t)). 

Certain Agent offerings may be subject to legal and regulatory requirements, may require licenses, or may not be suitable for all industries, scenarios, or use cases. By using any sample, you are acknowledging that Agents or other output created using that sample are solely your responsibility, and that you will comply with all applicable laws, regulations, and relevant safety standards, terms of service, and codes of conduct.  

---

## 🏭 Manufacturing Use Cases

- **Production Analysis**: Automate the collection and analysis of manufacturing metrics, yield data, and production efficiency indicators.
- **Supply Chain Intelligence**: Extract structured insights from supplier data, inventory levels, and logistics performance.
- **Quality Assessment**: Combine quality metrics, defect analysis, and compliance data into comprehensive quality reports.
- **Competitive Manufacturing Intelligence**: Generate polished summaries and strategic insights for semiconductor industry leadership.

---

## 🧩 Qualcomm Manufacturing Tools & Capabilities

Built with **Azure AI Agent Service**, the Qualcomm Manufacturing ResearchFlow agent coordinates a graph of specialized manufacturing agents to conduct structured research and synthesis tasks:

- **Manufacturing Planner Agent (`LedgerPlanner.agent`)** breaks down complex manufacturing research prompts into logical subtasks focused on production, quality, and supply chain analysis.
- **Manufacturing Summarizer Agent (`Summarizer.agent`)** condenses technical manufacturing data into executive-level summaries tailored for Qualcomm leadership.
- **MCP Manufacturing Tools** enable enhanced data analysis capabilities for production metrics, quality assessment, and supply chain optimization.
- **Manufacturing Progress Manager Agent (`progressManager.agent`)** tracks manufacturing research progression in oneshot mode for comprehensive single-pass analysis.
- **Manufacturing Router Agent** enables direct routing to specialized manufacturing analysts (A2A disabled for Qualcomm configuration).
- **Manufacturing Fact Agents (`LedgerFacts.agent`, `LedgerFactsUpdate.agent`)** store and retrieve structured manufacturing knowledge and semiconductor industry intelligence.
- **Manufacturing Plan Update Agent (`LedgerPlanUpdate.agent`)** refines manufacturing research strategies based on Semi Analysis methodology.

All tools and agents are declaratively configured in `.agent` and `.fdl` files.

---

## Setup Instructions for Qualcomm Manufacturing

### Prerequisites

1. Azure subscription with the following permissions
   - Contributor or Cognitive Services Contributor role (for resource deployment)
   - Azure AI Developer and Cognitive Services user role (for agent creation)
2. Agent setup: deploy the latest agent setup using this ([custom deployment](https://www.aka.ms/basic-agent-deployment)).
   - The above creates:
      - AI Services resource
      - AI Project
      - Model deployment
3. Python 3.8+
4. Azure CLI
5. Azure AI Agent SDK and required packages (see `requirements.txt`)
6. Manufacturing-specific project files: `LedgerPlanner.agent`, `Summarizer.agent`, `LedgerFacts.agent`, etc.

---

## 🏭 Example Manufacturing Agent Interactions

**User**: Can you analyze our Q3 production efficiency metrics and identify optimization opportunities?  
**📊 Agent Response**: Manufacturing planner routes task to production analyst + MCP tools, returning comprehensive efficiency analysis with actionable recommendations.

---

**User**: I uploaded three supplier performance reports—can you extract quality trends and create an executive summary?  
**📄 Agent Response**: Manufacturing Facts Gatherer → Quality Specialist → Executive summary with key quality metrics, supplier rankings, and strategic recommendations.

---

**User**: What's the competitive positioning of our 5nm process technology compared to TSMC and Samsung?  
**🔬 Agent Response**: Semiconductor research specialist analyzes competitive data and creates detailed technology comparison with market implications.

---

**User**: Prepare a manufacturing readiness assessment for our new facility launch.  
**🏭 Agent Response**: Comprehensive analysis covering production capacity, supply chain readiness, quality systems, and risk mitigation strategies.

---

## 🛠 Qualcomm Customization Features

- **Manufacturing MCP Tools**: Specialized tools for production metrics, quality analysis, and supply chain optimization.
- **Oneshot Mode**: Configured for comprehensive single-pass analysis rather than iterative refinement.
- **A2A Disabled**: Direct agent routing without agent-to-agent communication for streamlined execution.
- **Semi Analysis Methodology**: Deep research approach tailored for semiconductor manufacturing intelligence.
- **Qualcomm Branding**: Primary color #6e57a2 integrated throughout the agent system.

---

## 📁 Manufacturing-Specialized Files

- `LedgerPlanner.agent` — manufacturing research planner with semiconductor focus
- `Summarizer.agent` — executive-level manufacturing insights generator
- `LedgerFacts.agent` — manufacturing facts gatherer with production metrics expertise
- `LedgerFactsUpdate.agent` — continuous manufacturing intelligence updater
- `LedgerPlanUpdate.agent` — adaptive manufacturing research strategy refinement
- `progressManager.agent` — manufacturing research workflow manager (oneshot mode)
- `agentRouter.agent` — manufacturing specialist routing (A2A disabled)
- `DeepResearchAgent.fdl` — Qualcomm manufacturing agent graph and workflow configuration

## Technical Configuration

- **MCP Tools**: Enabled (True) for enhanced manufacturing data analysis
- **A2A (Agent-to-Agent)**: Disabled (False) for direct execution
- **Mode**: Oneshot for comprehensive single-pass analysis
- **Primary Color**: #6e57a2 (Qualcomm brand)
- **Industry**: Manufacturing (Semiconductor focus)
- **Research Style**: Semi Analysis methodology

---


