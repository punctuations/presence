import { RepoImage } from "@github/repo/image";

export async function getServerSideProps(x: {
  params: { repo: string | string[] };
}) {
  const { repo } = x.params;

  return {
    props: { username: repo[0], repo: repo[1] },
  };
}

export default function Username(props: { username: string; repo: string }) {
  return <RepoImage username={props.username} repo={props.repo} />;
}
