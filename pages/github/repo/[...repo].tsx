import { RepoImage } from "@github/repo/image";

export async function getServerSideProps(x: {
  params: { repo: string | string[] };
  query: {
    bg: string;
    text: string;
    desc: string;
    stats: string;
    stats_text: string;
    icon: string;
    theme: string;
    language: string;
    rounded: string;
  };
}) {
  const { repo } = x.params;

  const {
    bg,
    text,
    desc,
    stats,
    stats_text,
    icon,
    theme,
    language,
    rounded,
  } = x.query;

  return {
    props: {
      username: repo.length > 1 ? repo[0] : repo[0].split(":")[0],
      repo: repo.length > 1 ? repo[1] : repo[0].split(":")[1],
      bg: bg ? bg : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      stats: stats ? stats : null,
      statsText: stats_text ? stats_text : null,
      icon: icon ? icon : null,
      theme: theme ? theme : null,
      showLanguage: language ? language.toLowerCase() === "true" : null,
      rounded: rounded ? rounded.toLowerCase() === "true" : null,
    },
  };
}

export default function Repo(props: {
  username: string;
  repo: string;
  bg: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  statsText: string | null;
  icon: string | null;
  theme: string | null;
  showLanguage: boolean | null;
  rounded: boolean | null;
}) {
  return (
    <RepoImage
      username={props.username}
      repo={props.repo}
      bg={props.bg}
      text={props.text}
      description={props.desc}
      stats={props.stats}
      statsText={props.statsText}
      icon={props.icon}
      theme={props.theme}
      showLanguage={props.showLanguage}
      rounded={props.rounded}
    />
  );
}
