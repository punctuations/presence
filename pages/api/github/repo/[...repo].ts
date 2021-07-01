import { RepoImage } from "@github/repo/image";

import { base } from "@lib/assets/base";

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
    `https://api.github.com/repos/${username}/${repo}/contributors`
  );
  const colorResponse = await fetch(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
  );

  const body: GithubContributors.RootObject = await contributorsResponse.json();
  const colors: GithubColorResponse = await colorResponse.json();

  axios
    .get(`https://api.github.com/repos/${username}/${repo}`)
    .then(async (r: AxiosResponse) =>
      res.send(
        query.type?.toLowerCase() === "base64"
          ? { data: await base(await RepoImage(r.data, body, colors, query)) }
          : await RepoImage(r.data, body, colors, query)
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({ error: "Sorry, that repo doesn't exist." });
    });

  query.type?.toLowerCase() !== "base64"
    ? res.setHeader("Content-Type", "image/svg+xml; charset=utf-8")
    : null;

  res.setHeader(
    "content-security-policy",
    "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
  );
}
