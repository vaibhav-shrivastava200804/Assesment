import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { submitPipeline } from "./submit";
import { useStore } from "./store";

function App() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />

      <button
        onClick={() => submitPipeline(nodes, edges)}
        style={{
          marginTop: '15px',
          marginLeft: '10px',
          padding: '10px 24px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#059669';
          e.target.style.transform = 'translateY(-1px)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#10b981';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
}

export default App;
