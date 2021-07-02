import { Grid, Image } from "@geist-ui/react";

const Images = (props: { [index: string]: string }) => {
  const images: string[] = [];

  for (const obj in props) {
    images.push(props[obj]);
  }

  return (
    <Grid>
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
