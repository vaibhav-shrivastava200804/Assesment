import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
      style={{ width: 200 }}
    >
      <div>This is a LLM.</div>
    </BaseNode>
  );
};
