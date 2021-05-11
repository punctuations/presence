import { useRouter } from "next/router";

import { Image } from "../../../lib/assets/image";

export async function getServerSideProps(x: { params: { uname: any } }) {
  const { uname } = x.params;

  return {
    props: { username: uname },
  };
}

export default function Username(props: { username: any }) {
  return <Image username={props.username} type={"github/user"} />;
}
