import { URLSearchParams } from "url";
import { SpotifySong } from "@lib/assets/spotify/song/image";

import { SpotifySongResponse } from "@lib/types/SpotifySongResponse";
import { SpotifyArtistResponse } from "@lib/types/SpotifyArtistResponse";

export async function getServerSideProps(x: {
  params: { id: string | string[] };
  query: {
    bg: string;
    text: string;
    desc: string;
    theme: string;
    icon: string;
    rounded: string;
  };
}) {
  const { id } = x.params;

  const { bg, text, desc, theme, icon, rounded } = x.query;

  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");

  const req = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  });

  const token = await req.json();

  const res = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  const body: SpotifySongResponse = await res.json();

  const artistRes = await fetch(body.album.artists[0].href, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  const artistBody = await artistRes.json();

  return {
    props: {
      song: body,
      artist: artistBody,
      bg: bg ? bg : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      theme: theme ? theme : null,
      icon: icon ? icon : null,
      rounded: rounded ? rounded.toLowerCase() === "true" : null,
    },
  };
}

export default function Username(props: {
  song: SpotifySongResponse;
  artist: SpotifyArtistResponse;
  bg: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  statsText: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
}) {
  return (
    <SpotifySong
      song={props.song}
      artist={props.artist}
      bg={props.bg}
      text={props.text}
      description={props.desc}
      theme={props.theme}
      icon={props.icon}
      rounded={props.rounded}
    />
    // <pre>{JSON.stringify(props.artist, null, 2)}</pre>
  );
}
