import { SpotifyArtistImage } from "@lib/assets/spotify/artist/image";

import { base } from "@lib/components/base";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { URLSearchParams } from "url";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  text?: string;
  desc?: string;
  stats?: string;
  stats_text?: string;
  theme?: string;
  icon?: string;
  rounded?: string;
  type?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query as Query,
    id = req.query.id;

  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");

  const request = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  });

  const token = await request.json();

  axios
    .get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token.access_token}`,
      },
    })
    .then(async (r: AxiosResponse) =>
      res.send(
        query.type?.toLowerCase() === "base64"
          ? { data: await base(await SpotifyArtistImage(r.data, query)) }
          : await SpotifyArtistImage(r.data, query)
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({ error: "Sorry, that song doesn't exist." });
    });

  query.type?.toLowerCase() !== "base64"
    ? res.setHeader("Content-Type", "image/svg+xml; charset=utf-8")
    : null;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "content-security-policy",
    "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
  );
}
