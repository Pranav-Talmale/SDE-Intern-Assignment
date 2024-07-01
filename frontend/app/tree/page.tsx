"use client";
import React from "react";
import "./tree.css";

// Disable SSR for library react-d3-tree, causes issues
import dynamic from "next/dynamic";
const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

const TreeDisplay = () => {
  return (
    <div id="treeWrapper">
      <Tree
        hasInteractiveNodes
        data={orgChart}
        orientation="vertical"
        centeringTransitionDuration={800}
        pathFunc={"diagonal"}
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
      />
    </div>
  );
};

export default TreeDisplay;
