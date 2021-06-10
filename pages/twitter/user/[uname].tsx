import { TwitterImage } from "@twitter/user/image";

import { TwitterResponse } from "@twitter/TwitterResponse";

export async function getServerSideProps(x: {
  params: { uname: string | string[] };
  query: {
    bg: string;
    accent: string;
    text: string;
    desc: string;
    stats: string;
    icon: string;
    language: string;
    rounded: string;
  };
}) {
  const { uname } = x.params;

  const { bg, accent, text, desc, stats, icon, rounded } = x.query;

  const res = await fetch(
    `https://api.twitter.com/2/users/by/username/${uname}?user.fields=description,url,location,created_at,public_metrics,verified,protected&expansions=pinned_tweet_id&tweet.fields=created_at`,
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
      accent: accent ? accent : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      stats: stats ? stats : null,
      icon: icon ? icon : null,
      rounded: rounded ? rounded.toLowerCase() === "true" : null,
    },
  };
}

export default function Username(props: {
  twitter: TwitterResponse;
  bg: string | null;
  accent: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  icon: string | null;
  showLanguage: boolean | null;
  rounded: boolean | null;
}) {
  return (
    <TwitterImage
      twitter={props.twitter}
      bg={props.bg}
      text={props.text}
      description={props.desc}
      stats={props.stats}
      icon={props.icon}
      rounded={props.rounded}
    />
    // <pre>{JSON.stringify(props.twitter, null, 2)}</pre>
  );
}
