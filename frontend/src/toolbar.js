import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ margin: '0 0 10px 0', color: 'black', fontSize: '32px', fontWeight: '600' }}>Nodes</h3>
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="prompt" label="Prompt" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="delay" label="Delay" />
      </div>
    </div>
  );
};
