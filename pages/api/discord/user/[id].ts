import { DiscordImage } from "@discord/user/image";

import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { LanyardResponse } from "@types/LanyardResponse";
import { DiscordBioResponse } from "@types/DiscordBioResponse";

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
  return new Promise(async (resolve) => {
    const query = req.query as Query,
      id = req.query.id;

    const response = await fetch(`https://api.lanyard.rest/v1/users/${id}`);

    const body: LanyardResponse = await response.json();

    const dotbio = await fetch(
      `https://discords.com/api-bio/user/details/${id}`
    );

    const bio: DiscordBioResponse = await dotbio.json();

    axios
      .get(`https://discord.com/api/users/${id}`, {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      })
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? { data: await base(await DiscordImage(r.data, body, bio, query)) }
            : query.type?.toLowerCase() === "png"
            ? await convert(
                await DiscordImage(r.data, body, bio, query),
                938,
                285
              )
            : await DiscordImage(r.data, body, bio, query)
        );
        return resolve("Created Image!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.send({ error: "Sorry, that user doesn't exist." });
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
