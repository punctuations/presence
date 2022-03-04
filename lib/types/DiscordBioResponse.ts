export interface DiscordBioResponse {
  user: User;
  connected_accounts: ConnectedAccount[];
  premium_since: string;
  cached: boolean;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  banner_color: any;
  accent_color: any;
  bio: string;
}

export interface ConnectedAccount {
  type: string;
  id: string;
  name: string;
  verified: boolean;
}
