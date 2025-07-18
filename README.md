# 🧠 Qualcomm ResearchFlow Agent

This specialized research agent is customized for Qualcomm's semiconductor manufacturing research needs. It orchestrates complex, multi-step research workflows to gather, synthesize, and structure knowledge from technical sources, market intelligence, and competitive analysis. Designed specifically for semiconductor industry analysts, product strategy teams, and technical research professionals.

**IMPORTANT NOTE:** Starter templates, instructions, code samples and resources in this msft-agent-samples file (“samples”) are designed to assist in accelerating development of agents for specific scenarios. It is important that you review all provided resources and carefully test Agent behavior in the context of your use case: ([Learn More](https://learn.microsoft.com/en-us/legal/cognitive-services/agents/transparency-note?context=%2Fazure%2Fai-services%2Fagents%2Fcontext%2Fcontext)). 

Certain Agent offerings may be subject to legal and regulatory requirements, may require licenses, or may not be suitable for all industries, scenarios, or use cases. By using any sample, you are acknowledging that Agents or other output created using that sample are solely your responsibility, and that you will comply with all applicable laws, regulations, and relevant safety standards, terms of service, and codes of conduct.  

---

## 💼 Semiconductor Industry Use Cases

- **Competitive Chip Analysis**: Deep technical analysis of competitor processors, SoCs, and semiconductor architectures - similar to SemiAnalysis research depth.
- **Manufacturing Technology Assessment**: Evaluate new process nodes, fab technologies, and manufacturing capabilities across the industry.
- **Market Intelligence & Trends**: Track semiconductor market dynamics, supply chain developments, and technology roadmaps.
- **Patent & IP Landscape**: Analyze patent filings, IP strategies, and technological innovations in the semiconductor space.
- **Technical Literature Review**: Extract structured insights from academic papers, technical specifications, and industry whitepapers.
- **Strategic Technology Planning**: Generate comprehensive analysis for Qualcomm's technology roadmap and strategic decisions.

---

- ## 🧩 Tools & Capabilities

Built with **Azure AI Agent Service**, the ResearchFlow agent coordinates a graph of specialized agents to conduct structured research and synthesis tasks:

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

## 💬 Semiconductor Research Examples

**User**: Can you analyze TSMC's 3nm process technology and compare it with Samsung's competing node?  
**📥 Agent Response**: Comprehensive technical analysis covering process specifications, yield data, transistor density, power efficiency, and competitive positioning.

---

**User**: I need a deep dive on Apple's M3 chip architecture - analyze the CPU, GPU, and NPU design choices.  
**📄 Agent Response**: SemiAnalysis-style technical breakdown including die analysis, performance benchmarks, and architectural innovations.

---

**User**: What are the key trends in automotive semiconductor market for 2024-2025?  
**📊 Agent Response**: Market intelligence report covering supply chain, technology transitions, key players, and growth opportunities.

---

**User**: Analyze the competitive landscape for high-performance computing GPUs.  
**🧠 Agent Response**: Detailed comparison of NVIDIA, AMD, and Intel architectures with performance analysis and market positioning.

---

## 🛠 Qualcomm Customization Features

- **Semiconductor Domain Expertise**: All agents are fine-tuned with deep knowledge of chip architectures, process technologies, and manufacturing.
- **SemiAnalysis-Style Research**: Configured to provide technical depth and analytical rigor similar to industry-leading semiconductor analysis.
- **Manufacturing Intelligence**: Specialized knowledge of fab operations, supply chains, and process technology developments.
- **Competitive Intelligence**: Advanced analysis capabilities for tracking competitor technologies, products, and strategies.
- **Technical Documentation**: Optimized for parsing complex technical specifications, patents, and academic research.
- **Qualcomm Brand Integration**: Custom styling and branding elements using Qualcomm's signature blue (#1c19c8).

---


## 📁 Qualcomm-Customized Agent Files

- `LedgerFacts.agent` — semiconductor domain fact collection with manufacturing expertise
- `LedgerPlanner.agent` — strategic planning optimized for technical research workflows  
- `Summarizer.agent` — SemiAnalysis-style technical summarization and analysis
- `LedgerFactsUpdate.agent` — dynamic fact updating for evolving semiconductor research
- `LedgerPlanUpdate.agent` — adaptive planning for complex technical investigations
- `progressManager.agent` — workflow orchestration for deep research projects
- `agentRouter.agent` — intelligent routing optimized for semiconductor research tasks
- `DeepResearchAgent.fdl` — Qualcomm-customized agent workflow configuration

---

## 🔷 Qualcomm Customization

This ResearchFlow agent has been specifically customized for Qualcomm's semiconductor research needs, incorporating:

- **Industry Focus**: Deep expertise in semiconductor manufacturing, chip architectures, and process technologies
- **Research Depth**: SemiAnalysis-level technical analysis capabilities for competitive intelligence
- **Brand Integration**: Qualcomm visual identity with signature blue color (#1c19c8)
- **Manufacturing Context**: Specialized knowledge of fab operations, supply chains, and technology roadmaps

*Customized for Qualcomm | Manufacturing Excellence in Semiconductor Innovation*
