import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { URLSearchParams } from "url";
import { ProductHuntAllImage } from "@lib/assets/producthunt/posts/image";

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
  day?: string;
  month?: string;
  year?: string;
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
      .get(
        `https://api.producthunt.com/v1/posts/all?sort_by=votes_count${
          query.day
            ? `&search[featured_day]=${query.day}`
            : `&search[featured_day]=${new Date().getDate()}`
        }${
          query.month
            ? `&search[featured_month]=${query.month}`
            : `&search[featured_month]=${new Date().getMonth() + 1}`
        }${
          query.year
            ? `&search[featured_year]=${query.year}`
            : `&search[featured_year]=${new Date().getFullYear()}`
        }`,
        {
          headers: {
            Authorization: `Bearer ${body.access_token}`,
          },
        }
      )
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? {
                data: await base(
                  await ProductHuntAllImage(r.data.posts[0], query)
                ),
              }
            : query.type?.toLowerCase() === "png"
            ? await convert(
                await ProductHuntAllImage(r.data.posts[0], query),
                938,
                285
              )
            : await ProductHuntAllImage(r.data.posts[0], query)
        );
        return resolve("Created Image!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.send({
          error: "Sorry, no posts were able to be retrieved at this time.",
        });
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
