import { TwitterImage } from "@twitter/user/image";

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
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query as Query,
    uname = req.query.uname;

  console.log(req.query);

  axios
    .get(
      `https://api.twitter.com/2/users/by/username/${uname}?user.fields=description,url,location,created_at,profile_image_url,public_metrics,verified,protected&expansions=pinned_tweet_id&tweet.fields=created_at`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
        },
      }
    )
    .then((r: AxiosResponse<any>) => res.send(TwitterImage(r.data, query)))
    .catch((err) => {
      console.log(err);
      res.send({ error: "Please use a proper twitter username." });
    });

  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
}
