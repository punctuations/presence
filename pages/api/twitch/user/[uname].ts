import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { TwitchUserImage } from "@lib/assets/twitch/user/image";
import { Channel, TwitchChannelResponse } from "@lib/types/TwitchResponse";

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
      uname = req.query.uname as string;

    const request = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
      {
        method: "POST",
      }
    );

    const auth = await request.json();

    const channel = await fetch(
      `https://api.twitch.tv/helix/search/channels?query=${uname}`,
      {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
          "Client-Id": `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
        },
      }
    );
    const twitch: TwitchChannelResponse = await channel.json();

    const user: Channel[] = twitch.data.filter((user) => {
      return user.broadcaster_login.toLowerCase() === uname.toLowerCase();
    });

    axios
      .get(`https://api.twitch.tv/helix/users?login=${uname}`, {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
          "Client-Id": `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
        },
      })
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? {
                data: await base(await TwitchUserImage(user[0], r.data, query)),
              }
            : query.type?.toLowerCase() === "png"
            ? await convert(
                await TwitchUserImage(user[0], r.data, query),
                938,
                285
              )
            : await TwitchUserImage(user[0], r.data, query)
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
