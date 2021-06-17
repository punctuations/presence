export interface Artists {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SpotifySongResponse {
  album: {
    album_type: string;
    artists: Array<Artists>;
    available_markets: [string];
    external_urls: {
      spotify: string;
    };
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
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: Array<Artists>;
  available_markets: [string];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: 9;
  type: string;
  uri: string;
}
