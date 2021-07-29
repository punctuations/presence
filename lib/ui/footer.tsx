import NextLink from "next/link";

import { Divider, Grid, Link, Spacer } from "@geist-ui/react";
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
              <NextLink href="/">
                <Link>
                  <img
                    style={{ width: "12rem" }}
                    src="/presence.svg"
                    alt="logo"
                  />
                </Link>
              </NextLink>
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
          <NextLink href="/privacy">
            <Link icon color>
              Privacy Policy
            </Link>
          </NextLink>
        </Grid>
        <Grid xs={6}>
          <NextLink href="/terms">
            <Link icon color>
              Terms of Service
            </Link>
          </NextLink>
        </Grid>
      </Grid.Container>
    </Grid>
  );
}
