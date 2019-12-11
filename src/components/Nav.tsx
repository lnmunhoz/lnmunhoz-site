import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/core";

export const Nav = () => {
  return (
    <>
      <Flex alignItems="center">
        <Heading size="lg">lnmunhoz.dev</Heading>
      </Flex>
      <Box as="nav">Home, About, Experience, Contact</Box>
    </>
  );
};
