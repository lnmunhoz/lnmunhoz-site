import * as React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <Flex as="nav" width="100%" justifyContent="center" position="fixed">
      <Flex
        alignItems="center"
        // bg={"rgb(25, 31, 44)"}
        maxWidth={624}
        width={"100%"}
        px={[4, 4, 0]}
        mx={[0, -4]}
        py={3}
        justifyContent="space-between"
        fontFamily="Menlo"
      >
        <Box>
          <Text fontFamily="inherit">lnmunhoz.dev</Text>
          <Text opacity={0.8} fontSize={12} fontFamily="inherit">
            > fullStackDeveloper()
          </Text>
        </Box>

        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
};
