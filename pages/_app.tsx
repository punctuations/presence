import { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
