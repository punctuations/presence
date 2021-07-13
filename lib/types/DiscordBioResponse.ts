export interface DiscordBioResponse {
  payload: Payload | null;
  message: string | null;
}

export interface Payload {
  user: User;
  discord: Discord;
}

export interface User {
  details: Details;
  discordConnections: DiscordConnection[];
  userConnections: UserConnections;
}

export interface Details {
  slug: string;
  user_id: string;
  flags: number;
  verified: boolean;
  premium_type: number;
  created_at: string;
  description: string | null;
  location: string;
  gender: number;
  birthday: string;
  email: string;
  occupation: any;
  banner: string;
  premium: boolean;
  staff: boolean;
  likes: number;
}

export interface DiscordConnection {
  github?: Github;
  twitter?: Twitter;
}

export interface Github {
  name: string;
  id: string;
}

export interface Twitter {
  name: string;
  id: string;
}

export interface UserConnections {
  website: string;
}

export interface Discord {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
}
