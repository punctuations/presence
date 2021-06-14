import { UserImage } from "@github/user/image";
import Repo from "@github/user/repo";

export async function getServerSideProps(x: {
  params: { uname: string | string[] };
  query: {
    bg: string;
    accent: string;
    text: string;
    desc: string;
    stats: string;
    stats_text: string;
    theme: string;
    icon: string;
    rounded: string;
  };
}) {
  const { uname } = x.params;

  const {
    bg,
    accent,
    text,
    desc,
    stats,
    stats_text,
    theme,
    icon,
    rounded,
  } = x.query;

  return {
    props: {
      username: uname ? uname : null,
      bg: bg ? bg : null,
      accent: accent ? accent : null,
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
  username: string | null;
  bg: string | null;
  accent: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  statsText: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
}) {
  return (
    <UserImage
      username={props.username}
      type={"github/user"}
      bg={props.bg}
      text={props.text}
      description={props.desc}
      stats={props.stats}
      statsText={props.statsText}
      theme={props.theme}
      icon={props.icon}
      rounded={props.rounded}
    >
      <Repo
        username={props.username}
        accent={props.accent}
        bg={props.bg}
        text={props.text}
        description={props.desc}
        stats={props.stats}
        statsText={props.statsText}
        theme={props.theme}
      />
    </UserImage>
  );
}
