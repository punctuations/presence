import { Main } from "../lib/assets/main";

import Header from "../lib/ui/header";
import Images from "../lib/ui/images";
import Button from "../lib/ui/button";

export default function Home() {
  return (
    <>
      <Main>
        <Header />
        <Images />
        <Button text="🎉 Docs" url="/docs" />
      </Main>
    </>
  );
}
