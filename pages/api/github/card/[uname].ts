import { GithubCardImage } from "@github/card/image";

import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import {
  GithubAllReposResponse,
  GithubColorResponse,
} from "@types/GithubResponse";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  text?: string;
  desc?: string;
  stats?: string;
  stats_text?: string;
  accent?: string;
  show_language?: string;
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

    const repoResponse = await fetch(
      `https://api.github.com/users/${uname}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_CARD_TOKEN}`,
        },
      }
    );
    const colorResponse = await fetch(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );

    const body: GithubAllReposResponse.RootObject = await repoResponse.json();
    const colors: GithubColorResponse = await colorResponse.json();

    axios
      .get(`https://api.github.com/users/${uname}`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_CARD_TOKEN}`,
        },
      })
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? {
                data: await base(
                  await GithubCardImage(r.data, body, colors, query)
                ),
              }
            : query.type?.toLowerCase() === "png"
            ? await convert(
                await GithubCardImage(r.data, body, colors, query),
                938,
                460
              )
            : await GithubCardImage(r.data, body, colors, query)
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
