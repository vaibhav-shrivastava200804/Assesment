import { useEffect, useMemo, useState } from "react";
import { useUpdateNodeInternals } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const updateNodeInternals = useUpdateNodeInternals();

  // Extract variables
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(currText)) !== null) {
      found.add(match[1]);
    }

    return Array.from(found);
  }, [currText]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables.length, id, updateNodeInternals]);

  const inputHandles = variables.map((v) => ({
    id: `${id}-${v}`,
  }));

  const dynamicWidth = Math.min(
    400,
    Math.max(220, currText.length * 8)
  );

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[{ id: `${id}-output` }]}
      style={{ width: dynamicWidth }}
    >
      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
