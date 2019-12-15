import App from "next/app";
import Head from "next/head";
import React from "react";
import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  Box
} from "@chakra-ui/core";

import { Global, css } from "@emotion/core";

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Global
          styles={css`
            html,
            body,
            #__next {
              min-height: 100%;
              height: 100%;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
            }
          `}
        />
        <Head>
          <title>lnmunhoz.dev</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset />
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default NextApp;
