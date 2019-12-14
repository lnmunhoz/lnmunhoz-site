import * as React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <>
      <Flex
        fontFamily="Menlo"
        alignItems="center"
        bg={"rgb(25, 31, 44)"}
        position="fixed"
        top={0}
        width={"100%"}
        px={4}
        py={{ small: 3 }}
        justifyContent="space-between"
      >
        <Box>
          <Text color="white">lnmunhoz.dev</Text>
          <Text opacity={0.8} fontSize={12} color="white">
            > fullStackDeveloper()
          </Text>
        </Box>

        <ThemeSwitcher />
      </Flex>
      {/* <Box as="nav">Home, About, Experience, Contact</Box> */}
    </>
  );
};
