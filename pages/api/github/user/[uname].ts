import { GithubUserImage } from "@github/user/image";

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
    uname = req.query.uname;

  axios
    .get(`https://api.github.com/users/${uname}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_USER_TOKEN}`,
      },
    })
    .then(async (r: AxiosResponse) =>
      res.send(
        query.type?.toLowerCase() === "base64"
          ? {
              data: await base(await GithubUserImage(r.data, query)),
            }
          : await GithubUserImage(r.data, query)
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({ error: "Sorry, that user doesn't exist." });
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
