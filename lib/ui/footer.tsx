import { Divider, Grid, Spacer } from "@geist-ui/react";

export function Footer() {
  return (
    <Grid style={{ width: "100%" }}>
      <Spacer y={3} />
      <Divider />
      <Grid.Container gap={2} justify="space-around" alignItems="center">
        <Grid xs={10}>
          <a href="/">
            <img style={{ width: "12rem" }} src="/presence.svg" alt="logo" />
          </a>
        </Grid>
        <Grid xs={6}>
          <a href="/privacy">Privacy Policy</a>
        </Grid>
        <Grid xs={6}>
          <a href="/terms">Terms of Service</a>
        </Grid>
      </Grid.Container>
    </Grid>
  );
}
