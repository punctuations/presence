import { Divider, Grid, Spacer } from "@geist-ui/react";
import * as Icon from "@geist-ui/react-icons";

export function Footer() {
  return (
    <Grid style={{ width: "100%" }}>
      <Spacer y={3} />
      <Divider />
      <Grid.Container gap={2} justify="space-around" alignItems="center">
        <Grid xs={10}>
          <Grid.Container gap={2} justify="space-evenly" direction="column">
            <Grid>
              <a href="/">
                <img
                  style={{ width: "12rem" }}
                  src="/presence.svg"
                  alt="logo"
                />
              </a>
            </Grid>

            <Grid xs={9}>
              <Grid.Container gap={0.75} justify="space-evenly" direction="row">
                <Grid>
                  <a href="https://github.com/punctuations/presence">
                    <Icon.Github />
                  </a>
                </Grid>
                <Grid>
                  <a href="https://twitter.com/atmattt">
                    <Icon.Twitter />
                  </a>
                </Grid>
                <Grid>
                  <a href="https://discord.gg/R3QtA68Cbf">
                    <Icon.MessageCircle />
                  </a>
                </Grid>
                <Grid>
                  <a href="mailto:matt@dont-ping.me">
                    <Icon.Mail />
                  </a>
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
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
