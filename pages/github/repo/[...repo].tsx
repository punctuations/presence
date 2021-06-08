import { RepoImage } from "@github/repo/image";

export async function getServerSideProps(x: {
  params: { repo: string | string[] };
  query: {
    bg: string;
    accent: string;
    text: string;
    desc: string;
    stats: string;
    language: string;
    rounded: string;
  };
}) {
  const { repo } = x.params;

  const { bg, accent, text, desc, stats, language, rounded } = x.query;

  return {
    props: {
      username: repo.length > 1 ? repo[0] : repo[0].split(":")[0],
      repo: repo.length > 1 ? repo[1] : repo[0].split(":")[1],
      bg: bg ? bg : null,
      accent: accent ? accent : null,
      text: text ? text : null,
      desc: desc ? desc : null,
      stats: stats ? stats : null,
      showLanguage: language ? language.toLowerCase() === "true" : null,
      rounded: rounded ? rounded.toLowerCase() === "true" : null,
    },
  };
}

export default function Username(props: {
  username: string;
  repo: string;
  bg: string | null;
  accent: string | null;
  text: string | null;
  desc: string | null;
  stats: string | null;
  showLanguage: boolean | null;
  rounded: boolean | null;
}) {
  return (
    <RepoImage
      username={props.username}
      repo={props.repo}
      bg={props.bg}
      accent={props.accent}
      text={props.text}
      description={props.desc}
      stats={props.stats}
      showLanguage={props.showLanguage}
      rounded={props.rounded}
    />
  );
}
