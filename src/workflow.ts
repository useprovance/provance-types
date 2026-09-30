import type { Agent } from "./agent";

export type WorkflowStatus = "idle" | "running" | "completed" | "failed" | "paused";
export type NodeType = "agent" | "trigger" | "condition" | "output";

export interface WorkflowNodeData {
  label: string;
  agentId?: string;
  nodeType: NodeType;
  config?: Record<string, unknown>;
}

export interface WorkflowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: WorkflowNodeData;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
}

export interface WorkflowViewport {
  x: number;
  y: number;
  zoom: number;
}

export interface Workflow {
  id: string;
  name: string;
  description: string | null;
  org_id: string;
  owner_id: string;
  status: WorkflowStatus;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  viewport: WorkflowViewport | null;
  created_at: string;
  updated_at: string;
}

export interface WorkflowRun {
  id: string;
  workflow_id: string;
  status: WorkflowStatus;
  triggered_by: string | null;
  started_at: string;
  finished_at: string | null;
  error: string | null;
  output: Record<string, unknown> | null;
}
