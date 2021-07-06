export interface DiscordUserResponse {
  id: string;
  username: string;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
}
