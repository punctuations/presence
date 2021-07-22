import { GithubUserImage } from "@github/user/image";

import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { URLSearchParams } from "url";
import { ProductHuntAllImage } from "@lib/assets/producthunt/posts/all";

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
    const query = req.query as Query;

    const data = new URLSearchParams();
    data.append("client_id", `${process.env.PRODUCTHUNT_CLIENT_ID}`);
    data.append("client_secret", `${process.env.PRODUCTHUNT_CLIENT_SECRET}`);
    data.append("grant_type", "client_credentials");

    const request = await fetch("https://api.producthunt.com/v1/oauth/token", {
      method: "POST",
      body: data,
    });

    const body = await request.json();

    axios
      .get(`https://api.producthunt.com/v1/posts/all?sort_by=votes_count`, {
        headers: {
          Authorization: `Bearer ${body.access_token}`,
        },
      })
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? {
                data: await base(await GithubUserImage(r.data, query)),
              }
            : query.type?.toLowerCase() === "png"
            ? await convert(await GithubUserImage(r.data, query), 938, 285)
            : await ProductHuntAllImage(r.data, query)
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
