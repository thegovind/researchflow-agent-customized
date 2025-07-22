# ResearchFlow Agent Frontend

A modern web interface for the ResearchFlow Agent system that orchestrates complex, multi-step research workflows using AI agents.

## Features

- **Intuitive Research Interface**: Simple form to submit research tasks
- **Real-time Progress Tracking**: Live updates on agent workflow execution
- **Agent Workflow Visualization**: Visual representation of the agent orchestration process
- **Progress Timeline**: Detailed timeline of each step in the research process
- **Session Management**: View and manage multiple research sessions
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface suitable for Lumen integration

## Setup

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application**
   ```bash
   python app.py
   ```

3. **Access the Frontend**
   Open your browser and navigate to: `http://localhost:5000`

## Usage

### Starting a Research Session

1. Click on the research task textarea
2. Enter a detailed description of your research request
3. Click "Start Research" to begin the workflow
4. Monitor progress in real-time as agents work through the task

### Example Research Tasks

- "Generate a competitive landscape analysis on cloud-native agent orchestration tools"
- "Analyze market trends in AI automation for SMB adoption"
- "Create a technical literature review on machine learning frameworks"
- "Extract insights from customer feedback on our new product features"

### Monitoring Progress

The interface provides multiple views of your research progress:

- **Agent Workflow**: Visual steps showing which agents are active
- **Progress Timeline**: Chronological list of all agent activities
- **Research Facts**: Collected facts organized by category
- **Research Plan**: The planned steps for completing the task
- **Results**: Final summary and recommendations when complete

### Session Management

- View all previous research sessions
- Review completed research results
- Delete old sessions to keep your workspace clean

## Architecture

### Backend (`app.py`)

- Flask-based REST API server
- Simulates the Azure AI Agent Service workflow
- Provides endpoints for starting research, tracking progress, and managing sessions
- In-memory storage for demo purposes (can be extended with persistent storage)

### Frontend (`frontend/`)

- Modern HTML5/CSS3/JavaScript application
- Responsive design with gradient backgrounds and modern UI elements
- Real-time updates using polling mechanism
- Modular JavaScript architecture for easy maintenance

### Agent Integration

The system simulates the following agent workflow:

1. **LedgerFacts** - Gathers and organizes factual information
2. **LedgerPlanner** - Creates research plans and strategies
3. **ProgressLedger** - Manages workflow progress and coordination
4. **ActionRouterAgent** - Routes tasks to appropriate agents
5. **Research Agents** - Execute specific research tasks
6. **FinalStepAgent** - Synthesizes and summarizes final results

## API Endpoints

- `POST /api/research/start` - Start a new research session
- `GET /api/research/<session_id>/status` - Get session status and progress
- `GET /api/research/sessions` - List all research sessions
- `DELETE /api/research/<session_id>` - Delete a research session
- `GET /api/agents/info` - Get information about available agents

## Customization

### Styling

The interface uses a modern gradient design with:
- Primary colors: Blues and purples (#667eea, #764ba2)
- Clean typography using system fonts
- Responsive grid layouts
- Smooth animations and transitions

### Integration with Lumen

The frontend is designed to be compatible with Lumen design systems:
- Clean, professional appearance
- Consistent spacing and typography
- Accessible color schemes
- Modular CSS that can be easily themed

### Extending Functionality

To extend the frontend:

1. **Add New Agents**: Update the `agents` array in `renderAgentWorkflow()`
2. **Customize Results Display**: Modify the `renderResults()` function
3. **Add Real-time Features**: Implement WebSocket connections for instant updates
4. **Integrate with Azure**: Replace the simulation with actual Azure AI Agent Service calls

## Development

### File Structure

```
researchflow-agent-customized/
├── app.py                 # Flask backend server
├── requirements.txt       # Python dependencies
├── frontend/
│   ├── index.html        # Main HTML template
│   ├── styles.css        # CSS styles
│   └── app.js           # JavaScript application logic
├── Core/                 # Agent definitions
│   ├── *.agent          # Individual agent configuration files
└── workflow/
    └── DeepResearchAgent.fdl  # Workflow orchestration definition
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Microsoft Agent Samples and follows the same licensing terms.