import Head from "next/head";
import { NextSeo } from "next-seo";

import { Main } from "@lib/assets/main";

import Header from "@lib/ui/header";
import Images from "@lib/ui/images";
import Button from "@lib/ui/button";

export async function getServerSideProps() {
  const twitterResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/twitter/user/atmattt?type=base64"
      : "https://presence.vercel.app/api/twitter/user/atmattt?type=base64"
  );

  const body = await twitterResponse.json();

  return {
    props: {
      twitter: body.data,
    },
  };
}

export default function Home(props: { twitter?: string }) {
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
          url: "https://presence.vercel.app",
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
        <Images twitter={props?.twitter} />
        <Button text="🎉 Docs" url="/docs" />
      </Main>
    </>
  );
}
