import { Text, Grid } from "@geist-ui/react";

const Header = () => {
  return (
    <Grid>
      <Grid.Container gap={1} alignItems="center" direction="column">
        <Grid>
          <Text h1>presence</Text>
        </Grid>
        <Grid>
          <p>Beautifully simple images for your social media.</p>
        </Grid>
      </Grid.Container>
    </Grid>
  );
};

export default Header;
