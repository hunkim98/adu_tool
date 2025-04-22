import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { createTheme, MantineProvider } from "@mantine/core";
import { MobileViewContextProvider } from "@/context/MobileViewContext";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <MobileViewContextProvider>
        <Component {...pageProps} />
      </MobileViewContextProvider>
    </MantineProvider>
  );
}
