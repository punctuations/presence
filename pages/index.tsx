import Head from "next/head";
import { NextSeo } from "next-seo";

import { Main } from "@lib/components/main";

import Header from "@lib/ui/header";
import Images from "@lib/ui/images";
import Docs from "@lib/ui/docs";
import { Spacer } from "@geist-ui/react";

export async function getServerSideProps() {
  const tweetResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/twitter/tweet/1394507872017403904?type=base64&theme=dark&rounded=true"
      : "https://presence.vercel.app/api/twitter/tweet/1394507872017403904?type=base64&theme=dark&rounded=true"
  );
  const githubRepoResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/github/repo/punctuations:presence?type=base64&rounded=true"
      : "https://presence.vercel.app/api/github/repo/punctuations:presence?type=base64&rounded=true"
  );
  const songResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?type=base64&index=1&rounded=true"
      : "https://presence.vercel.app/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?type=base64&index=1&rounded=true"
  );

  const tweetBody = await tweetResponse.json(),
    repoBody = await githubRepoResponse.json(),
    songBody = await songResponse.json();

  return {
    props: {
      tweet: tweetBody.data,
      repo: repoBody.data,
      song: songBody.data,
    },
  };
}

export default function Home(props: {
  tweet?: string;
  repo?: string;
  song?: string;
}) {
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
        <Images
          tweet={props?.tweet as string}
          repo={props?.repo as string}
          song={props?.song as string}
        />
        <Spacer y={1} />
        <Docs text="🎉 Docs" url="/docs" />
      </Main>
    </>
  );
}
