import { Grid, Image } from "@geist-ui/react";

const Images = (props: { twitter?: string; tweet?: string }) => {
  const images = [
    "https://picsum.photos/940/285?a",
    "https://picsum.photos/940/285?b",
    "https://picsum.photos/940/285?c",
    "https://picsum.photos/940/285?d",
  ];

  return (
    <Grid>
      <Grid.Container gap={1} alignItems="center" justify="center">
        {images.map((url, i) => {
          return (
            <Grid xs={12}>
              <Image
                alt="example image"
                src={url}
                key={i}
                className="rounded-md shadow-sm 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-1/2 w-1/3 place-self-center"
              />
            </Grid>
          );
        })}
        <Grid xs={12}>
          <Image
            alt="example tweet image"
            src={props?.tweet as string}
            className="rounded-md 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-1/2 w-1/3 place-self-center"
          />
        </Grid>
        <Grid xs={12}>
          <Image
            alt="example twitter image"
            src={props?.twitter as string}
            className="rounded-md shadow-lg 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-1/2 w-1/3 place-self-center"
          />
        </Grid>
      </Grid.Container>
    </Grid>
  );
};

export default Images;
