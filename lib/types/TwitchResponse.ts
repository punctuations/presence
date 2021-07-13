export interface TwitchChannelResponse {
  data: Channel[];
  pagination: Pagination;
}

export interface Channel {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  tag_ids: string[];
  thumbnail_url: string;
  title: string;
  started_at: string;
}

export interface Pagination {
  cursor: string;
}

export interface TwitchUserResponse {
  data: User[];
}

export interface User {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: string;
}
