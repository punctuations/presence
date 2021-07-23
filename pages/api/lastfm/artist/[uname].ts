import { LastfmArtistImage } from "@lastfm/artist/image";

import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

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
  return new Promise(async (resolve) => {
    const query = req.query as Query,
      uname = req.query.uname;

    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${uname}&api_key=${process.env.LASTFM_API_KEY}&format=json`
      )
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? {
                data: await base(await LastfmArtistImage(r.data.artist, query)),
              }
            : query.type?.toLowerCase() === "png"
            ? await convert(
                await LastfmArtistImage(r.data.artist, query),
                938,
                285
              )
            : await LastfmArtistImage(r.data.artist, query)
        );
        return resolve("Created Image!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.send({ error: "Sorry, that song doesn't exist." });
      });

    query.type?.toLowerCase() !== "base64"
      ? res.setHeader(
          "Content-Type",
          `image/${
            query.type?.toLowerCase() === "png" ? "png" : "svg+xml"
          }; charset=utf-8`
        )
      : null;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader(
      "content-security-policy",
      "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
    );
  });
}
