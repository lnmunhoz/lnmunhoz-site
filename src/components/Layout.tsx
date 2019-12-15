import { Box, BoxProps, useColorMode } from "@chakra-ui/core";
import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Spacer } from "./Spacer";
import { Footer } from "./Footer";

export const SiteWrapper: React.FC<BoxProps> = props => (
  <Box pt={"80px"} {...props}>
    {props.children}
  </Box>
);

export const SiteSection: React.FC<BoxProps> = props => (
  <Box p={5} py={5} display={"flex"} {...props}>
    {props.children}
  </Box>
);

export const Layout: React.FC = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "gray.200", dark: "rgb(17, 21, 31)" };

  return (
    <Box minHeight="100%">
      <Nav />
      <SiteWrapper>{props.children}</SiteWrapper>

      <Footer />
      <Spacer />
    </Box>
  );
};
