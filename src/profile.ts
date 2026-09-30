export interface Profile {
  id: string;
  name: string;
  email: string | null;
  avatar_url: string | null;
  provider: "google" | "email" | "wallet";
  privy_id: string;
  created_at: string;
  updated_at: string;
}

export interface Wallet {
  id: string;
  profile_id: string;
  address: string;
  chain: string;
  label: string;
  created_at: string;
}

export interface Org {
  id: string;
  name: string;
  owner_id: string;
  created_at: string;
}
