import { RepoImage } from "@github/repo/image";

export async function getServerSideProps(x: {
  params: { repo: string | string[] };
  query: {
    bg: string;
    text: string;
    desc: string;
    stats: string;
    icon: string;
    language: string;
    rounded: string;
  };
}) {
  const { repo } = x.params;

  const { bg, text, desc, stats, icon, language, rounded } = x.query;

  return {
    props: {
      username: repo.length > 1 ? repo[0] : repo[0].split(":")[0],
      repo: repo.length > 1 ? repo[1] : repo[0].split(":")[1],
      bg: bg ? bg : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      stats: stats ? stats : null,
      icon: icon ? icon : null,
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
  icon: string | null;
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
      icon={props.icon}
      showLanguage={props.showLanguage}
      rounded={props.rounded}
    />
  );
}
