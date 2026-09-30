export type ExecutionStatus = "queued" | "running" | "completed" | "failed" | "cancelled";

export interface NodeExecutionResult {
  node_id: string;
  agent_id: string | null;
  status: ExecutionStatus;
  input: Record<string, unknown>;
  output: Record<string, unknown> | null;
  error: string | null;
  started_at: string;
  finished_at: string | null;
  duration_ms: number | null;
}

export interface Execution {
  id: string;
  workflow_id: string;
  workflow_run_id: string;
  status: ExecutionStatus;
  node_results: NodeExecutionResult[];
  triggered_by: string | null;
  started_at: string;
  finished_at: string | null;
  error: string | null;
}
