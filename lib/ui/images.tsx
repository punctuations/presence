import { Grid, Image } from "@geist-ui/react";

const Images = () => {
  const images: string[] = [
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/twitter/tweet/1394507872017403904?type=png&theme=dark&rounded=true"
      : "https://presence.vercel.app/api/twitter/tweet/1394507872017403904?type=png&theme=dark&rounded=true",
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/github/repo/punctuations:presence?type=png&rounded=true"
      : "https://presence.vercel.app/api/github/repo/punctuations:presence?type=png&rounded=true",
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?type=png&index=1&rounded=true"
      : "https://presence.vercel.app/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?type=png&index=1&rounded=true",
  ];

  return (
    <Grid xs={24}>
      <Grid.Container gap={1} alignItems="center" justify="center">
        {images.map((url, i) => {
          return (
            <Grid xs={12} key={i}>
              <Image width={540} height={160} alt="example image" src={url} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Grid>
  );
};

export default Images;
