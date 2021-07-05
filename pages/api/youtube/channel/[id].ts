import { YoutubeChannelImage } from "@lib/assets/youtube/channel/image";

import { base } from "@lib/components/base";

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
  const query = req.query as Query,
    id = req.query.id;

  axios
    .get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_TOKEN}`
    )
    .then(async (r: AxiosResponse) =>
      res.send(
        query.type?.toLowerCase() === "base64"
          ? { data: await base(await YoutubeChannelImage(r.data, query)) }
          : await YoutubeChannelImage(r.data, query)
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({ error: "Sorry, that channel doesn't exist." });
    });

  query.type?.toLowerCase() !== "base64"
    ? res.setHeader("Content-Type", "image/svg+xml; charset=utf-8")
    : null;

  res.setHeader(
    "content-security-policy",
    "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
  );
}
