import Head from "next/head";
import { NextSeo } from "next-seo";

import { Main } from "@lib/components/main";

import Header from "@lib/ui/header";
import Images from "@lib/ui/images";
import Docs from "@lib/ui/docs";
import { Spacer } from "@geist-ui/react";

export async function getServerSideProps() {
  const twitterResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/twitter/user/atmattt?type=base64&rounded=true"
      : "https://presence.vercel.app/api/twitter/user/atmattt?type=base64&rounded=true"
  );
  const tweetResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/twitter/tweet/1394507872017403904?type=base64&theme=dark&rounded=true"
      : "https://presence.vercel.app/api/twitter/tweet/1394507872017403904?type=base64&theme=dark&rounded=true"
  );
  const twitterCardResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/twitter/card/atmattt?type=base64&rounded=true"
      : "https://presence.vercel.app/api/twitter/card/atmattt?type=base64&rounded=true"
  );
  const githubCardResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/github/card/punctuations?type=base64&theme=dark&rounded=true"
      : "https://presence.vercel.app/api/github/card/punctuations?type=base64&theme=dark&rounded=true"
  );
  const githubRepoResponse = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/github/repo/punctuations:presence?type=base64&rounded=true"
      : "https://presence.vercel.app/api/github/repo/punctuations:presence?type=base64&rounded=true"
  );

  const twitterBody = await twitterResponse.json(),
    tweetBody = await tweetResponse.json(),
    twitterCard = await twitterCardResponse.json(),
    githubCard = await githubCardResponse.json(),
    repoBody = await githubRepoResponse.json();

  return {
    props: {
      twitter: twitterBody.data,
      tweet: tweetBody.data,
      twitterCard: twitterCard.data,
      githubCard: githubCard.data,
      repo: repoBody.data,
    },
  };
}

export default function Home(props: {
  twitter?: string;
  tweet?: string;
  twitterCard?: string;
  githubCard?: string;
  repo?: string;
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
          twitter={props?.twitter as string}
          tweet={props?.tweet as string}
          twitterCard={props?.twitterCard as string}
          githubCard={props?.githubCard as string}
          repo={props?.repo as string}
        />
        <Spacer y={1} />
        <Docs text="🎉 Docs" url="/docs" />
      </Main>
    </>
  );
}
