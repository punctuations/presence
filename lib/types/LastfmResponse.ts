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

export interface LastfmArtistResponse {
  bio: Bio;
  ontour: number;
  stats: Stats;
  mbid: string;
  image: Image[];
  similar: Similar;
  url: string;
  tags: Tags;
  name: string;
  streamable: string;
}

export interface Bio {
  links: Links;
  content: string;
  published: string;
  summary: string;
}

export interface Links {
  link: Link;
}

export interface Link {
  rel: string;
  href: string;
}

export interface Stats {
  playcount: number;
  listeners: number;
}

export interface Similar {
  artist: Artist2[];
}

export interface Artist2 {
  url: string;
  name: string;
  image: Image[];
}

export interface Tags {
  tag: Tag[];
}

export interface Tag {
  name: string;
  url: string;
}
