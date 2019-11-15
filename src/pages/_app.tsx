import App from "next/app";
import React from "react";
import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  theme,
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
              height: 100%;
              font-family: Menlo, -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
            }
          `}
        />
        <ThemeProvider theme={theme}>
          <ColorModeProvider value="dark">
            <CSSReset />
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default NextApp;
