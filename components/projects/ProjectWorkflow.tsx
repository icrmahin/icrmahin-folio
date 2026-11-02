"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import type { WorkflowStep } from "@/lib/projects";

type WorkflowNode = Node<WorkflowStep, "workflow">;

function WorkflowStepNode({ data }: NodeProps<WorkflowNode>) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center rounded-md border border-border bg-surface px-3 py-2 shadow-sm">
      {data.input ? (
        <Handle
          className="!size-2 !border-0 !bg-accent"
          id={`${data.id}-input`}
          position={Position.Top}
          type="target"
        />
      ) : null}
      <p className="text-[9px] uppercase text-accent">{data.title}</p>
      <p className="mt-1 text-[10px] leading-tight text-text-muted">
        {data.description}
      </p>
      {data.output ? (
        <Handle
          className="!size-2 !border-0 !bg-accent"
          id={`${data.id}-output`}
          position={Position.Bottom}
          type="source"
        />
      ) : null}
    </div>
  );
}

const nodeTypes: NodeTypes = { workflow: WorkflowStepNode };

export default function ProjectWorkflow({
  title,
  steps,
}: {
  title: string;
  steps: readonly WorkflowStep[];
}) {
  const nodes: WorkflowNode[] = steps.map((step, index) => ({
    id: step.id,
    type: "workflow",
    position: { x: 48, y: index * 100 },
    data: step,
    width: 224,
    height: 76,
    handles: [
      ...(step.input
        ? [
            {
              id: `${step.id}-input`,
              type: "target" as const,
              position: Position.Top,
              x: 112,
              y: 0,
            },
          ]
        : []),
      ...(step.output
        ? [
            {
              id: `${step.id}-output`,
              type: "source" as const,
              position: Position.Bottom,
              x: 112,
              y: 76,
            },
          ]
        : []),
    ],
  }));

  const edges: Edge[] = steps.slice(0, -1).map((step, index) => ({
    id: `${step.id}-${steps[index + 1].id}`,
    source: step.id,
    sourceHandle: `${step.id}-output`,
    target: steps[index + 1].id,
    targetHandle: `${steps[index + 1].id}-input`,
    type: "smoothstep",
    animated: true,
    style: { stroke: "var(--accent)", strokeWidth: 1.5 },
  }));

  return (
    <div
      aria-label={`${title} project workflow; drag to pan and use controls to zoom`}
      className="h-[24rem] overflow-hidden rounded-md border border-border bg-page"
      role="region"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.14 }}
        nodesConnectable={false}
        nodesDraggable={false}
        elementsSelectable={false}
        minZoom={0.45}
        maxZoom={1.5}
      >
        <Background
          color="var(--border)"
          gap={18}
          size={1}
          variant={BackgroundVariant.Dots}
        />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
