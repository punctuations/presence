import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "@lib/ui/header";
import { PrivacyPolicy } from "@lib/ui/privacy";
import { Main } from "@lib/components/main";
import { Footer } from "@lib/ui/footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2f3136" />
      </Head>
      <NextSeo
        title="presence - privacy"
        description="A simple and elegant solution to images for socials media!"
        openGraph={{
          type: "website",
          url: "https://presence.im/privacy",
          title: "presence - privacy",
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
        <PrivacyPolicy />
        <Footer />
      </Main>
    </>
  );
}
