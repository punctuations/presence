import { useRouter } from "next/router";
import { Button, Grid, useToasts } from "@geist-ui/react";

const Docs = (props: { text: string; url: string }) => {
  const router = useRouter();

  const [, setToast] = useToasts();
  const action = {
    name: "Github",
    handler: () => router.push("https://github.com/punctuations/presence"),
  };
  const click = () =>
    setToast({
      text: "Sorry but the docs aren't done yet!",
      actions: [action],
    });

  return (
    <Grid>
      <Button
        onClick={click}
        // onClick={() => router.push(props.url)}
        size="large"
      >
        {props.text} &rarr;
      </Button>
    </Grid>
  );
};

export default Docs;
