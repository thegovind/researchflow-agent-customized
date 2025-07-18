# Qualcomm Manufacturing ResearchFlow Agent Customization

## Overview
This document outlines the customizations made to the ResearchFlow Agent template specifically for Qualcomm's manufacturing industry research needs. The agent has been configured for deep research capabilities similar to SemiAnalysis, with a focus on semiconductor and manufacturing industry analysis.

## Customizations Applied

### 1. Brand Theme and Identity
- **Primary Color**: #1c19c8 (Qualcomm brand color)
- **Brand Focus**: Manufacturing industry and semiconductor research
- **Target Audience**: Qualcomm manufacturing analysts, competitive intelligence teams, and technical research professionals

### 2. Agent Instruction Customizations

#### LedgerFacts.agent
- **Focus**: Manufacturing industry facts, semiconductor data, and competitive intelligence
- **Specialization**: Process technologies, production capacities, market positions, technology nodes, equipment specifications, supply chain relationships
- **Survey Categories**: Manufacturing facts, industry knowledge, competitive assessments

#### LedgerPlanner.agent
- **Methodology**: SemiAnalysis-style deep research planning
- **Approach**: Multi-layered analytical perspectives, quantitative + qualitative insights
- **Focus Areas**: Competitive intelligence, market positioning, technical depth, supply chain implications, technology roadmaps

#### Summarizer.agent (FinalStepAgent)
- **Output Style**: SemiAnalysis-style reporting with technical depth
- **Content Focus**: Manufacturing expertise, competitive intelligence, supply chain implications, strategic manufacturing insights
- **Target Audience**: Qualcomm's manufacturing research team

#### agentRouter.agent
- **Description**: Manufacturing research routing specialist
- **Function**: Directs workflow based on manufacturing industry research progress

#### progressManager.agent
- **Specialization**: Manufacturing research progress tracking
- **Focus**: Manufacturing industry analysis patterns and expertise

#### LedgerFactsUpdate.agent
- **Updates**: Manufacturing processes, semiconductor technology, competitive positioning, supply chain dynamics
- **Industry Focus**: Technology roadmaps, market dynamics, competitive analysis patterns

#### LedgerPlanupdate.agent
- **Planning Style**: Manufacturing research methodologies
- **Approach**: Deep industry expertise, multi-layered analysis, technical depth in semiconductor processes

### 3. Workflow Configuration

#### DeepResearchAgent.fdl
- **Workflow Name**: Changed from "deepresearch" to "qualcomm-manufacturing-research"
- **Mode**: Configured for oneshot operation without MCP Tools or A2A features
- **Focus**: Manufacturing industry research workflow optimization

### 4. Documentation Updates

#### README.md
- **Title**: Updated to "Qualcomm Manufacturing ResearchFlow Agent"
- **Use Cases**: Focused on semiconductor competitive analysis, manufacturing process intelligence, supply chain research, technology landscape mapping
- **Brand Reference**: Includes Qualcomm brand color (#1c19c8) for future UI implementations
- **Methodology**: Emphasizes SemiAnalysis-style deep research capabilities

## Technical Configuration

### Oneshot Mode
- **Status**: ✅ Enabled (default configuration)
- **MCP Tools**: ❌ Disabled (not present in template)
- **A2A Features**: ❌ Disabled (not present in template)

### Agent Workflow
The workflow maintains the original structure while focusing on manufacturing industry research:
1. **GatherFacts**: Manufacturing industry fact collection
2. **Plan**: Deep research planning with SemiAnalysis methodology
3. **ProcessProgress**: Manufacturing research progress tracking
4. **actionRouter**: Manufacturing-focused agent routing
5. **dynamicStepAgent**: Specialized manufacturing research execution
6. **UpdateLedgerFact**: Manufacturing fact updates
7. **LedgerPlanUpdate**: Manufacturing research plan refinement
8. **Summarizer**: Manufacturing industry insights synthesis

## Setup Instructions for Qualcomm

### Prerequisites
1. Azure subscription with AI Services and AI Project setup
2. Azure AI Agent SDK and required packages
3. All agent files (.agent) and workflow file (.fdl) properly configured

### Deployment
1. Deploy using Azure AI Agent Service
2. Configure with manufacturing industry data sources
3. Set up competitive intelligence data feeds
4. Apply Qualcomm branding (#1c19c8) in any future UI implementations

### Usage Examples
- **Semiconductor Competitive Analysis**: "Analyze the competitive landscape for 3nm process technology capabilities across major foundries"
- **Manufacturing Process Intelligence**: "Extract insights from recent semiconductor manufacturing equipment reports and technology roadmaps"
- **Supply Chain Research**: "Assess supply chain resilience for advanced packaging technologies in the current market"

## Future UI Implementation Notes
When implementing user interfaces for this agent:
- Use Qualcomm primary color: #1c19c8
- Apply Qualcomm brand guidelines and visual identity
- Focus on manufacturing industry user experience patterns
- Emphasize technical depth and competitive intelligence presentation

## Verification
All customizations have been applied while maintaining the original agent workflow structure and ensuring compatibility with Azure AI Agent Service requirements.
