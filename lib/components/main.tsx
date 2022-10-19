import { ReactNode } from "react";

import { Page, Grid } from "@geist-ui/react";

export const Main = (props: { children: ReactNode }) => {
  return (
    <Page dotBackdrop>
      <Grid.Container gap={1} justify="center" alignItems="center">
        {props.children}
      </Grid.Container>
    </Page>
  );
};
