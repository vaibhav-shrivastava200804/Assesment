import React from "react";
import { Handle, Position } from "reactflow";
import "./nodeStyles.css";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {
  return (
    <div className="base-node" style={style}>
      {/* Header */}
      <div className="base-node-header">{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Custom Content */}
      <div className="base-node-content">{children}</div>
    </div>
  );
};

export default BaseNode;
