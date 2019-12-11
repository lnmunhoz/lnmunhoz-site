import React from "react";
import { Box, Flex, useColorMode, IconButton } from "@chakra-ui/core";
import { Nav } from "./Nav";
import { Spacer } from "./Spacer";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Footer } from "./Footer";

export const Layout: React.FC = props => {
  return (
    <Box height="100%">
      <Flex height="inherit" p={12}>
        <Box width={[22 / 24]} position="relative">
          <Nav />
          <Spacer />

          {props.children}

          <Box position="absolute" right={0} top={0}>
            <ThemeSwitcher />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};
