import { RepoImage } from "@github/repo/image";

export async function getServerSideProps(x: {
  params: { repo: string | string[] };
  query: { bg: string; accent: string; text: string };
}) {
  const { repo } = x.params;

  const { bg, accent, text } = x.query;

  if (repo.length > 1) {
    return {
      props: {
        username: repo[0],
        repo: repo[1],
        bg: bg ? bg : null,
        accent: accent ? accent : null,
        text: text ? text : null,
      },
    };
  } else {
    return {
      props: {
        username: repo[0].split(":")[0],
        repo: repo[0].split(":")[1],
        bg: bg ? bg : null,
        accent: accent ? accent : null,
        text: text ? text : null,
      },
    };
  }
}

export default function Username(props: {
  username: string;
  repo: string;
  bg: string | null;
  accent: string | null;
  text: string | null;
}) {
  return (
    <RepoImage
      username={props.username}
      repo={props.repo}
      bg={props.bg}
      accent={props.accent}
      text={props.text}
    />
  );
}
