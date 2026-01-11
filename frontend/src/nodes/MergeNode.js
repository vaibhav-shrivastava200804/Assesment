import BaseNode from "./BaseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      inputs={[
        { id: `${id}-a` },
        { id: `${id}-b` },
      ]}
      outputs={[{ id: `${id}-out` }]}
    >
      <div>Merge inputs</div>
    </BaseNode>
  );
};
