export interface LastfmSongResponse {
  track: Track;
}

export interface Track {
  duration: string;
  listeners: string;
  playcount: string;
  artist: Artist;
  streamable: Streamable;
  toptags: Toptags;
  wiki: Wiki;
  url: string;
  album: Album;
  name: string;
  mbid: string;
}

export interface Artist {
  url: string;
  name: string;
  mbid: string;
}

export interface Streamable {
  fulltrack: string;
  "#text": string;
}

export interface Toptags {
  tag: Tag[];
}

export interface Tag {
  name: string;
  url: string;
}

export interface Wiki {
  published: string;
  content: string;
  summary: string;
}

export interface Album {
  artist: string;
  "@attr": Attr;
  image: Image[] | null;
  url: string;
  mbid: string;
  title: string;
}

export interface Attr {
  position: number;
}

export interface Image {
  size: string;
  "#text": string;
}
