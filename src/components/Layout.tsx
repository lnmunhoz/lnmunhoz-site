import { Box, BoxProps, useColorMode } from "@chakra-ui/core";
import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Spacer } from "./Spacer";

export const SiteWrapper: React.FC<BoxProps> = props => (
  <Box {...props} pt={"80px"}>
    {props.children}
  </Box>
);

export const SiteSection: React.FC<BoxProps> = props => (
  <Box p={5} py={5} {...props} display={"flex"} {...props}>
    {props.children}
  </Box>
);

export const Layout: React.FC = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "gray.200", dark: "rgb(17, 21, 31)" };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true" && colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <Box bg={bg[colorMode]} minHeight="100%">
      <Nav />

      <SiteWrapper>{props.children}</SiteWrapper>
    </Box>
  );
};
