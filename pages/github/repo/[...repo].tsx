import { RepoImage } from "@github/repo/image";

export async function getServerSideProps(x: {
  params: { repo: string | string[] };
}) {
  const { repo } = x.params;

  if (repo.length > 1) {
    return {
      props: { username: repo[0], repo: repo[1] },
    };
  } else {
    return {
      props: { username: repo[0].split(":")[0], repo: repo[0].split(":")[1] },
    };
  }
}

export default function Username(props: { username: string; repo: string }) {
  return <RepoImage username={props.username} repo={props.repo} />;
}
