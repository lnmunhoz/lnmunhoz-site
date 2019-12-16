import { Flex, PseudoBox, Text, useColorMode } from "@chakra-ui/core";
import Link from "next/link";
import * as React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  const { colorMode } = useColorMode();
  const bg = { light: "#ffffff", dark: "#1A202C" };

  return (
    <Flex
      as="nav"
      width="100%"
      justifyContent="center"
      position="fixed"
      bg={bg[colorMode]}
    >
      <Flex
        alignItems="center"
        maxWidth={624}
        width={"100%"}
        px={[4, 4, 0]}
        mx={[0, -4]}
        py={3}
        justifyContent="space-between"
        fontFamily="Menlo"
      >
        <Link href="/">
          <PseudoBox _hover={{ cursor: "pointer" }}>
            <Text fontFamily="inherit">lnmunhoz.dev</Text>
            <Text opacity={0.8} fontSize={12} fontFamily="inherit">
              > fullStackDeveloper()
            </Text>
          </PseudoBox>
        </Link>

        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
};
