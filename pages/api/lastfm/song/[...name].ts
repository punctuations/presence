import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { LastfmImage } from "@lib/assets/lastfm/song/image";

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
  return new Promise(async (resolve) => {
    const query = req.query as Query,
      artist =
        req.query.name.length > 1
          ? req.query.name[0]
          : req.query.name[0].split(":")[0],
      song =
        req.query.name.length > 1
          ? req.query.name[1]
          : req.query.name[0].split(":")[1];

    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.LASTFM_API_KEY}&artist=${artist}&track=${song}&format=json`
      )
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? { data: await base(await LastfmImage(r.data, query)) }
            : query.type?.toLowerCase() === "png"
            ? await convert(await LastfmImage(r.data, query), 938, 460)
            : await LastfmImage(r.data, query)
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
