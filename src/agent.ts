export type AgentProtocol = "MCP" | "A2A" | "OASF" | "Web" | "Email";
export type AgentTrustModel = "reputation" | "crypto-economic" | "tee-attestation";
export type AgentStatus = "active" | "inactive" | "pending";

export interface AgentService {
  name: string;
  endpoint: string;
  version?: string;
  method?: string;
  description?: string;
  payment_required?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  icon: string | null;
  url: string;
  repository: string | null;
  protocol: string;
  authentication: string;
  category: string | null;
  version: string | null;
  identifier: string | null;
  node_type: string;
  status: AgentStatus;

  // 8004scan aligned fields
  tags: string[];
  categories: string[];
  supported_protocols: AgentProtocol[];
  services: Record<string, AgentService> | null;
  x402_supported: boolean;
  agent_wallet: string | null;
  supported_trust_models: AgentTrustModel[];

  // on-chain identity
  chain_id: number | null;
  contract_address: string | null;
  token_id: string | null;
  owner_address: string | null;

  actions: { key: string; label: string; description?: string }[] | null;
  outputs: { key: string; label: string }[] | null;
  features: string[] | null;

  created_at: string;
  updated_at: string;
}
