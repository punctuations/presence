export interface DiscordUserResponse {
  id: string;
  username: string;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
}

export interface DiscordGuildResponse {
  id: string;
  name: string;
  icon: string;
  description: string;
  splash: string;
  discovery_splash: string;
  features: string[];
  approximate_member_count: number;
  approximate_presence_count: number;
  emojis: Emoji[];
}

export interface Emoji {
  name: string;
  roles: any[];
  id: string;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
}
