import { TwitterImage } from "@twitter/card/image";
import { PinnedTweet } from "@twitter/card/pinned";

import { TwitterResponse } from "@lib/types/TwitterResponse";
import { TweetResponse } from "@lib/types/TweetResponse";

export async function getServerSideProps(x: {
  params: { uname: string | string[] };
  query: {
    bg: string;
    text: string;
    desc: string;
    stats: string;
    stats_text: string;
    accent: string;
    theme: string;
    icon: string;
    rounded: string;
  };
}) {
  const { uname } = x.params;

  const {
    bg,
    text,
    desc,
    stats,
    stats_text,
    accent,
    theme,
    icon,
    rounded,
  } = x.query;

  const res = await fetch(
    `https://api.twitter.com/2/users/by/username/${uname}?user.fields=description,url,location,created_at,profile_image_url,public_metrics,verified,protected&expansions=pinned_tweet_id&tweet.fields=created_at,public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
      },
    }
  );

  const body = await res.json();

  return {
    props: {
      twitter: body,
      username: uname ? uname : null,
      bg: bg ? bg : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      stats: stats ? stats : null,
      statsText: stats_text ? stats_text : null,
      accent: accent ? accent : null,
      theme: theme ? theme : null,
      icon: icon ? icon : null,
      rounded: rounded ? rounded.toLowerCase() === "true" : null,
    },
  };
}

export default function Username(props: {
  twitter: TwitterResponse;
  bg: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  statsText: string | null;
  accent: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
}) {
  return (
    <TwitterImage
      twitter={props.twitter}
      bg={props.bg}
      text={props.text}
      description={props.desc}
      stats={props.stats}
      statsText={props.statsText}
      theme={props.theme}
      icon={props.icon}
      rounded={props.rounded}
    >
      <PinnedTweet
        twitter={props.twitter}
        bg={props.bg}
        text={props.text}
        description={props.desc}
        stats={props.stats}
        statsText={props.statsText}
        accent={props.accent}
        theme={props.theme}
      />
    </TwitterImage>
    // <pre>{JSON.stringify(props.twitter, null, 2)}</pre>
  );
}
