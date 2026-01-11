# VectorShift Pipeline Builder

A visual drag-and-drop editor for building AI/LLM pipelines. This application allows you to create complex workflows by connecting different types of nodes together, simulating how data flows through an AI pipeline.

## What is this?

This is a frontend technical assessment project that demonstrates a node-based pipeline editor similar to VectorShift's workflow builder. The application lets you:

- Drag and drop nodes onto a canvas
- Connect nodes to create data flow pipelines
- Configure node inputs and outputs
- Analyze pipeline structure (detect cycles, count nodes/edges)
- Build reusable workflow templates

## Tech Stack

### Frontend
- **React 18** - UI framework
- **ReactFlow** - Drag-and-drop node editor
- **Zustand** - State management
- **CSS Modules** - Styling

### Backend
- **FastAPI** - Python web framework
- **CORS** - Cross-origin resource sharing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn

### Installation

1. **Install frontend dependencies:**
```bash
cd frontend
npm install
```

2. **Install backend dependencies:**
```bash
cd backend
pip install fastapi uvicorn
```

### Running the Application

1. **Start the backend server:**
```bash
cd backend
uvicorn main:app --reload
```
The API will be available at `http://127.0.0.1:8000`

2. **Start the frontend development server:**
```bash
cd frontend
npm start
```
The app will open at `http://localhost:3000`

## Node Types

| Node | Description |
|------|-------------|
| **Input** | Accepts user input (Text or File) |
| **Output** | Delivers final results |
| **LLM** | Connects to language model for processing |
| **Text** | Text templates with variable interpolation like `{{variable}}` |
| **Prompt** | Reusable prompt templates |
| **Condition** | Conditional logic with true/false branches |
| **Merge** | Merges two inputs into one output |
| **Logger** | Logs data passing through the pipeline |
| **Delay** | Simulates processing delay |

## How to Use

1. **Add nodes:** Click and drag nodes from the toolbar onto the canvas
2. **Connect nodes:** Click the dot on the right side of a node and drag to the left side of another node
3. **Configure nodes:** Some nodes allow you to edit their properties (like Input/Output names)
4. **Delete nodes:** Select a node and press delete, or use the context menu
5. **Submit pipeline:** Click the "Submit" button to analyze your pipeline structure

The backend will return:
- Number of nodes in the pipeline
- Number of connections (edges)
- Whether the pipeline is a DAG (Directed Acyclic Graph) - meaning no circular dependencies

## API Endpoint

### POST /pipelines/parse

Analyzes a pipeline structure.

**Request:**
- Content-Type: `multipart/form-data`
- Body: `pipeline` (JSON string containing nodes and edges)

**Response:**
```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

## Project Structure

```
frontend/
├── src/
│   ├── nodes/
│   │   ├── BaseNode.jsx       # Base component for all nodes
│   │   ├── inputNode.js       # Input node implementation
│   │   ├── outputNode.js      # Output node implementation
│   │   ├── llmNode.js         # LLM node implementation
│   │   ├── textNode.js        # Text template node
│   │   ├── PromptNode.js      # Prompt template node
│   │   ├── ConditionNode.js   # Conditional logic node
│   │   ├── MergeNode.js       # Merge two inputs node
│   │   ├── LoggerNode.js      # Logging node
│   │   ├── DelayNode.js       # Delay simulation node
│   │   └── nodeStyles.css     # Node styling
│   ├── App.js                 # Main application component
│   ├── toolbar.js             # Node selection toolbar
│   ├── ui.js                  # Main canvas area
│   ├── store.js               # Zustand state management
│   ├── submit.js              # Pipeline submission logic
│   └── draggableNode.js       # Draggable node wrapper
├── public/
└── package.json

backend/
└── main.py                    # FastAPI server with pipeline analysis
```

## Features

- **Drag and drop interface** - Intuitive node placement
- **Dynamic handles** - Text nodes automatically create input handles based on variables
- **Cycle detection** - Backend analyzes if the pipeline has circular dependencies
- **State persistence** - Uses Zustand for clean state management
- **Visual feedback** - Smooth animations and connection lines

## License

This project is for educational and assessment purposes.

