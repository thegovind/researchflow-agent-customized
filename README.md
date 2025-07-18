# 🧠 Qualcomm ResearchFlow Agent

This customized agent template helps Qualcomm create specialized research workflows for semiconductor industry analysis, competitive intelligence, and manufacturing insights. Designed specifically for SemiAnalysis-like research capabilities in the manufacturing sector.

**IMPORTANT NOTE:** Starter templates, instructions, code samples and resources in this msft-agent-samples file (“samples”) are designed to assist in accelerating development of agents for specific scenarios. It is important that you review all provided resources and carefully test Agent behavior in the context of your use case: ([Learn More](https://learn.microsoft.com/en-us/legal/cognitive-services/agents/transparency-note?context=%2Fazure%2Fai-services%2Fagents%2Fcontext%2Fcontext)). 

Certain Agent offerings may be subject to legal and regulatory requirements, may require licenses, or may not be suitable for all industries, scenarios, or use cases. By using any sample, you are acknowledging that Agents or other output created using that sample are solely your responsibility, and that you will comply with all applicable laws, regulations, and relevant safety standards, terms of service, and codes of conduct.  

---

## 💼 Qualcomm Use Cases

- **Semiconductor Market Analysis**: Automate collection and analysis of semiconductor industry trends, competitive positioning, and technology roadmaps.
- **Manufacturing Intelligence**: Extract insights from manufacturing process documentation, supply chain data, and production metrics.
- **Technology Competitive Research**: Analyze competitor chip architectures, performance benchmarks, and patent landscapes.
- **Executive Briefing Packs**: Generate leadership-ready summaries of semiconductor market dynamics, manufacturing opportunities, and strategic recommendations.

---

- ## 🧩 Tools & Capabilities

Built with **Azure AI Agent Service**, the Qualcomm ResearchFlow agent coordinates specialized agents optimized for semiconductor industry research and manufacturing intelligence:

- **Planner Agent (`LedgerPlanner.agent`)** breaks down complex prompts into logical subtasks for targeted execution.
- **Summarizer Agent (`Summarizer.agent`)** condenses technical or lengthy content into clear summaries tailored to user intent.
- **File Search Tool** (used within the agent graph) allows agents to locate relevant content from uploaded documents, PDFs, or markdown.
- **Progress Manager Agent (`progressManager.agent`)** tracks task progression and orchestrates tool execution in multi-step workflows.
- **User Agent (`user.agent`)** and **Router logic** enable custom routing and user-specific personalization.
- **Fact Agents (`LedgerFacts.agent`, `LedgerFactsUpdate.agent`)** store and retrieve structured knowledge or annotations.
- **Plan Update Agent (`LedgerPlanUpdate.agent`)** refines or extends subtask chains as the plan evolves.

All tools and agents are declaratively configured in `.agent` and `.fdl` files.

---

## Setup Instructions

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
6. Project files for: `ResearchFlow.agent`, `Summarizer.agent`, `LedgerPlanner.agent`, etc.

---

## 💬 Example Agent Interactions

**User**: Can you generate a competitive landscape analysis on 5G chipset manufacturers and their market positioning?  
**📥 Agent Response**: Planner routes task to semiconductor-focused research agents, returning comprehensive analysis of market share, technology differentiation, and manufacturing capabilities.

---

**User**: I uploaded three semiconductor industry reports—can you extract manufacturing trends and create an executive summary for Qualcomm leadership?  
**📄 Agent Response**: Manufacturing Intelligence → Industry Analysis → Executive summary with key manufacturing insights, market opportunities, and strategic recommendations.

---

**User**: What's the technology gap analysis between Qualcomm's latest Snapdragon and competitor offerings?  
**📊 Agent Response**: Competitive Research identifies technical specifications; Analysis creates detailed performance comparison tables and strategic positioning insights.

---

**User**: I need a 5-minute briefing on emerging semiconductor manufacturing technologies—summarize these technical papers into key talking points.  
**🧠 Agent Response**: Technical analysis and synthesis into 4 key manufacturing innovation themes with supporting data and industry implications.

---

## 🛠 Qualcomm Customization Features

- **Semiconductor Industry Focus**: All agents optimized for semiconductor research, manufacturing analysis, and competitive intelligence.
- **SemiAnalysis-Style Insights**: Specialized prompts for deep technical analysis and market intelligence similar to leading semiconductor research firms.
- **Manufacturing Intelligence**: Enhanced capabilities for supply chain analysis, production metrics, and manufacturing process insights.
- **Qualcomm Branding**: Template configured with Qualcomm brand theme and primary color (#3b82f6) for future UI integration.

## 🔧 Deployment Configuration

- **Mode**: Configured for oneshot execution
- **MCP Tools**: Disabled as per Qualcomm requirements
- **A2A (Agent-to-Agent)**: Disabled for simplified workflow
- **Industry**: Manufacturing sector optimization

---

## 📁 Files Included

- `ResearchFlow.agent` — main orchestration agent
- `Summarizer.agent` — task-specific summarizer
- `LedgerPlanner.agent` — planner for prompt decomposition
- 'LedgerFacts.agent' —
- 'LedgerFactsUpdate.agent' —
- 'LedgerPlanUpdate.agent' —
- `progressManager.agent` — optional tool for managing intermediate steps
- 'user.agent' —
- `DeepResearchAgent.fdl` — agent graph and tool configuration

---


