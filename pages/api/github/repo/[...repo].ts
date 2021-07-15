import { RepoImage } from "@github/repo/image";

import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import {
  GithubColorResponse,
  GithubContributors,
} from "@lib/types/GithubResponse";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  text?: string;
  desc?: string;
  stats?: string;
  stats_text?: string;
  theme?: string;
  icon?: string;
  show_language?: string;
  rounded?: string;
  type?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise(async (resolve) => {
    const query = req.query as Query,
      username =
        req.query.repo.length > 1
          ? req.query.repo[0]
          : req.query.repo[0].split(":")[0],
      repo =
        req.query.repo.length > 1
          ? req.query.repo[1]
          : req.query.repo[0].split(":")[1];

    const contributorsResponse = await fetch(
      `https://api.github.com/repos/${username}/${repo}/contributors`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_REPO_TOKEN}`,
        },
      }
    );
    const colorResponse = await fetch(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );

    const body: GithubContributors.RootObject =
      await contributorsResponse.json();
    const colors: GithubColorResponse = await colorResponse.json();

    axios
      .get(`https://api.github.com/repos/${username}/${repo}`, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_REPO_TOKEN}`,
        },
      })
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? { data: await base(await RepoImage(r.data, body, colors, query)) }
            : query.type?.toLowerCase() === "png"
            ? await convert(
                await RepoImage(r.data, body, colors, query),
                938,
                285
              )
            : await RepoImage(r.data, body, colors, query)
        );
        return resolve("Created Image!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.send({ error: "Sorry, that repo doesn't exist." });
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
