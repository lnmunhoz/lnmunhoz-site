import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  useColorMode,
  Button,
  Icon,
  IconButton
} from "@chakra-ui/core";
import { TwitterIcon } from "../components/Icon/TwitterIcon";

const socialLinks = {
  github: "https://github.com/lnmunhoz",
  twitter: "http://twitter.com/lnmunhoz",
  linkedin: "https://www.linkedin.com/in/lucasnmunhoz/"
};

const SocialLinks = () => {
  return <Box></Box>;
};

const MyPicture = () => (
  <Image src="/static/images/me.jpg" borderRadius="10%" width={"98px"} />
);

const Me = () => (
  <Flex alignItems="center">
    <Heading size="lg">lnmunhoz.dev</Heading>
  </Flex>
);

const Nav = () => {
  return <Box as="nav">Home, About, Experience, Contact</Box>;
};

const Spacer = () => <Box p={4} />;

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box height="100%">
      <Flex height="inherit" p={12}>
        <Box width={[22 / 24]} position="relative">
          <Me />
          <Nav />
          <Spacer />
          <Text>Welcome to my website!</Text>

          <Box position="absolute" right={0} top={0}>
            <IconButton
              bg="transparent"
              aria-label={`Toggle ${
                colorMode === "dark" ? "light" : "dark"
              } mode`}
              icon={colorMode === "dark" ? "sun" : "moon"}
              onClick={() => toggleColorMode()}
            />
          </Box>
        </Box>

        <Flex
          width={"100%"}
          as="footer"
          position="absolute"
          bottom={0}
          p={12}
          fontSize={12}
          justifyContent="center"
        >
          made with love in Thailand
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
