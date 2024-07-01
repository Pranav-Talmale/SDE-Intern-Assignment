"use client";
import React, { useState } from "react";
import "./tree.css";
import hugeTree from "./examples/hugeTree";

// Disable SSR for library react-d3-tree, causes issues
import dynamic from "next/dynamic";
const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });
import CustomNode from "./customNode";

const TreeDisplay = () => {
  const [treeData, setTreeData] = useState(hugeTree);

  const countNodes = (count = 0, n) => {
    count += 1;
    if (!n.children) return count;
    return n.children.reduce((sum, child) => countNodes(sum, child), count);
  };

  const totalNodeCount = countNodes(
    0,
    Array.isArray(treeData) ? treeData[0] : treeData
  );

  const handleNodeClick = (nodeData) => {
    const newTreeData = JSON.parse(JSON.stringify(treeData)); // Deep copy
    const findAndUpdateNode = (n) => {
      if (n.name === nodeData.name) {
        n.name = prompt("Enter new name:", n.name) || n.name;
      } else if (n.children) {
        n.children.forEach(findAndUpdateNode);
      }
    };
    findAndUpdateNode(
      Array.isArray(newTreeData) ? newTreeData[0] : newTreeData
    );
    setTreeData(newTreeData);
  };

  const renderCustomNode = (rd3tProps) => (
    <CustomNode {...rd3tProps} handleRename={handleNodeClick} />
  );

  return (
    <div id="treeWrapper">
      <h1 className="text-2xl font-bold mb-4">
        Total Node Count: {totalNodeCount}
      </h1>
      <Tree
        hasInteractiveNodes
        data={treeData}
        orientation="vertical"
        centeringTransitionDuration={800}
        pathFunc={"diagonal"}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "#52e2c5",
              },
              attributes: {
                stroke: "#000",
              },
            },
            leafNode: {
              circle: {
                fill: "transparent",
              },
              attributes: {
                stroke: "#000",
              },
            },
          },
        }}
        collapsible={true}
        initialDepth={1}
        zoomable={true}
        draggable={true}
        zoom={0.5}
        scaleExtent={{ min: 0.1, max: 1 }}
        nodeSize={{ x: 200, y: 200 }}
        separation={{ siblings: 2, nonSiblings: 2 }}
        enableLegacyTransitions={false}
        transitionDuration={500}
        shouldCollapseNeighborNodes={false}
        renderCustomNodeElement={renderCustomNode}
        onNodeClick={(node, evt) => {
          node.data.__rd3t.toggleNode(); // Toggle node function
        }}
        onNodeMouseOver={(...args) => {
          console.log("onNodeMouseOver", args);
        }}
        onNodeMouseOut={(...args) => {
          console.log("onNodeMouseOut", args);
        }}
        onLinkClick={(...args) => {
          console.log("onLinkClick");
          console.log(args);
        }}
        onLinkMouseOver={(...args) => {
          console.log("onLinkMouseOver", args);
        }}
        onLinkMouseOut={(...args) => {
          console.log("onLinkMouseOut", args);
        }}
      />
    </div>
  );
};

export default TreeDisplay;
