import { SpotifyImage } from "@lib/assets/spotify/song/image";

import { base } from "@lib/components/base";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { URLSearchParams } from "url";
import { SpotifySongResponse } from "@lib/types/SpotifySongResponse";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  icon?: string;
  text?: string;
  desc?: string;
  index?: string;
  theme?: string;
  rounded?: string;
  show_icon?: string;
  bottom?: string;
  top?: string;
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

  const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  const body: SpotifySongResponse = await response.json();

  axios
    .get(body.album.artists[0].href, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token.access_token}`,
      },
    })
    .then(async (r: AxiosResponse) =>
      res.send(
        query.type?.toLowerCase() === "base64"
          ? { data: await base(await SpotifyImage(body, r.data, query)) }
          : await SpotifyImage(body, r.data, query)
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({ error: "Sorry, that song doesn't exist." });
    });

  query.type?.toLowerCase() !== "base64"
    ? res.setHeader("Content-Type", "image/svg+xml; charset=utf-8")
    : null;

  res.setHeader(
    "content-security-policy",
    "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
  );
}
