import Head from "next/head";
import { NextSeo } from "next-seo";

import { Main } from "@lib/components/main";

import Header from "@lib/ui/header";
import Images from "@lib/ui/images";
import Docs from "@lib/ui/docs";
import { Spacer } from "@geist-ui/react";
import { Footer } from "@lib/ui/footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2f3136" />
      </Head>
      <NextSeo
        title="presence"
        description="A simple and elegant solution to images for socials media!"
        openGraph={{
          type: "website",
          url: "https://presence.im",
          title: "presence",
          description:
            "A simple and elegant solution to images for socials media!",
          images: [
            {
              url: "/presence.png",
              width: 400,
              height: 200,
            },
          ],
        }}
        twitter={{
          handle: "@atmattt",
          site: "@atmattt",
          cardType: "summary_large_image",
        }}
      />

      <Main>
        <Header />
        <Images />
        <Spacer y={1} />
        <Docs text="🎉 Docs" url="/docs" />
        <Footer />
      </Main>
    </>
  );
}
