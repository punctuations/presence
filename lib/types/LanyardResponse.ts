export interface LanyardResponse {
  success: boolean;
  data: Data;
}

export interface Data {
  spotify: any;
  listening_to_spotify: boolean;
  discord_user: DiscordUser;
  discord_status: string;
  activities: Activity[];
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface DiscordUser {
  username: string;
  public_flags: number;
  id: string;
  discriminator: string;
  avatar: string;
}

export interface Activity {
  type: number;
  state: string;
  name: string;
  id: string;
  emoji?: Emoji;
  created_at: number;
  application_id?: string;
  timestamps?: Timestamps;
  party?: Party;
  details?: string;
  assets?: Assets;
}

export interface Emoji {
  name: string;
  id: string;
  animated: boolean;
}

export interface Timestamps {
  start: number;
}

export interface Party {
  id: string;
}

export interface Assets {
  small_text: string;
  small_image: string;
  large_text: string;
  large_image: string;
}
