import { UserImage } from "@github/user/image";
import Repo from "../../../lib/assets/github/user/repo";

export async function getServerSideProps(x: {
  params: { uname: string | string[] };
}) {
  const { uname } = x.params;

  return {
    props: { username: uname },
  };
}

export default function Username(props: { username: any }) {
  return (
    <UserImage username={props.username} type={"github/user"}>
      <Repo username={props.username} />
    </UserImage>
  );
}
