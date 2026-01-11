import BaseNode from "./BaseNode";

export const PromptNode = ({ id }) => {
  return (
    <BaseNode
      title="Prompt"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div>Reusable prompt template</div>
    </BaseNode>
  );
};
