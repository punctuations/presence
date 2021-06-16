import { TweetImage } from "@twitter/tweet/image";

import { TweetResponse } from "@lib/types/TweetResponse";

export async function getServerSideProps(x: {
  params: { id: string | string[] };
  query: {
    bg: string;
    text: string;
    desc: string;
    stats: string;
    stats_text: string;
    theme: string;
    icon: string;
    rounded: string;
  };
}) {
  const { id } = x.params;

  const { bg, text, desc, stats, stats_text, theme, icon, rounded } = x.query;

  const res = await fetch(
    `https://api.twitter.com/2/tweets/${id}?tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
      },
    }
  );

  const body = await res.json();

  return {
    props: {
      tweet: body,
      bg: bg ? bg : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      stats: stats ? stats : null,
      statsText: stats_text ? stats_text : null,
      theme: theme ? theme : null,
      icon: icon ? icon : null,
      rounded: rounded ? rounded.toLowerCase() === "true" : null,
    },
  };
}

export default function Username(props: {
  tweet: TweetResponse;
  bg: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  statsText: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
}) {
  return (
    <TweetImage
      tweet={props.tweet}
      bg={props.bg}
      text={props.text}
      description={props.desc}
      statsText={props.statsText}
      stats={props.stats}
      theme={props.theme}
      icon={props.icon}
      rounded={props.rounded}
    />
    // <pre>{JSON.stringify(props.tweet, null, 2)}</pre>
  );
}
