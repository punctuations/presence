export interface SpotifyArtistResponse {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: [string | null];
  href: string;
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    }
  ];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
