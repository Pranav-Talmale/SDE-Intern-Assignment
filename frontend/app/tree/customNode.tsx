import React from "react";

const CustomNode = ({ nodeDatum, toggleNode, handleRename }) => {
  return (
    <g>
      <circle r="15" onClick={toggleNode}></circle>
      <text
        fill="black"
        x="20"
        dy=".35em"
        onClick={() => handleRename(nodeDatum)}
        style={{ cursor: "pointer" }}
      >
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default CustomNode;
