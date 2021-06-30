import { useRouter } from "next/router";
import { Button, Grid } from "@geist-ui/react";

const Docs = (props: { text: string; url: string }) => {
  const router = useRouter();

  return (
    <Grid>
      <Button onClick={() => router.push(props.url)} size="large">
        {props.text} &rarr;
      </Button>
    </Grid>
  );
};

export default Docs;
