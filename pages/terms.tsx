import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "@lib/ui/header";
import { TOS } from "@lib/ui/tos";
import { Main } from "@lib/components/main";
import { Footer } from "@lib/ui/footer";

export default function Terms() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2f3136" />
      </Head>
      <NextSeo
        title="presence - terms"
        description="A simple and elegant solution to images of your socials media!"
        openGraph={{
          type: "website",
          url: "https://presence.im/terms",
          title: "presence - terms",
          description:
            "A simple and elegant solution to images of your socials media!",
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
        <TOS />
        <Footer />
      </Main>
    </>
  );
}
