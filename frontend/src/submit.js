export const submitPipeline = async (nodes, edges) => {
  const pipeline = {
    nodes,
    edges,
  };

  const formData = new FormData();
  formData.append("pipeline", JSON.stringify(pipeline));

  const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  alert(
    `Pipeline Analysis:
Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes" : "No"}`
  );
};
