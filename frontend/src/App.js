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

      <button onClick={() => submitPipeline(nodes, edges)}>
        Submit
      </button>
    </div>
  );
}

export default App;
