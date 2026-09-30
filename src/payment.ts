export type PaymentCurrency = "USDC" | "XLM" | "ETH" | "cUSD";
export type PaymentNetwork = "stellar" | "base" | "ethereum" | "celo" | "goat";
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";
export type PaymentModel = "free" | "per_request" | "per_token" | "fixed" | "subscription";

export interface Payment {
  id: string;
  workflow_run_id: string | null;
  agent_id: string;
  payer_id: string;
  recipient_wallet: string;
  amount: number;
  currency: PaymentCurrency;
  network: PaymentNetwork;
  status: PaymentStatus;
  tx_hash: string | null;
  created_at: string;
}

export interface AgentPricing {
  model: PaymentModel;
  amount: number | null;
  currency: PaymentCurrency | null;
  network: PaymentNetwork | null;
  recipient_wallet: string | null;
}
