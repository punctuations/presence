import { DiscordImage } from "@lib/assets/discord/user/image";

import { base } from "@lib/components/base";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { LanyardResponse } from "@lib/types/LanyardResponse";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  text?: string;
  desc?: string;
  stats?: string;
  stats_text?: string;
  accent?: string;
  theme?: string;
  icon?: string;
  rounded?: string;
  type?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise(async (resolve, reject) => {
    const query = req.query as Query,
      id = req.query.id;

    const response = await fetch(`https://api.lanyard.rest/v1/users/${id}`);

    const body: LanyardResponse = await response.json();

    axios
      .get(`https://discord.com/api/users/${id}`, {
        headers: {
          Authorization: `Bot ${process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN}`,
        },
      })
      .then(async (r: AxiosResponse) => {
        res.send(
          query.type?.toLowerCase() === "base64"
            ? { data: await base(await DiscordImage(r.data, body, query)) }
            : await DiscordImage(r.data, body, query)
        );
        return resolve("Created Image!");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: "Sorry, that user doesn't exist." });
        return reject(err);
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
  });
}
