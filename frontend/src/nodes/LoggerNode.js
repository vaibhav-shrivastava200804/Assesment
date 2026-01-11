import BaseNode from "./BaseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div>Log pipeline data</div>
    </BaseNode>
  );
};
