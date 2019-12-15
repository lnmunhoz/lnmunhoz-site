import { Box, Heading, Text, Flex } from "@chakra-ui/core";
import React from "react";
import { SocialIcons } from "../components/Footer";
import { GithubAvatar } from "../components/GithubAvatar";
import { Layout, SiteSection } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import { Strong } from "../components/Strong";

const Index = () => {
  return (
    <Layout>
      <SiteSection justifyContent="center">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width={{ default: "100%", small: "100%" }}
          maxWidth={[312, 424]}
        >
          <Heading fontSize={[22, 32]}>
            Whats up! I'm
            <br />
            Lucas Munhoz
          </Heading>

          <Box width={[120, 160]} height={120}>
            <GithubAvatar
              borderRadius={"50%"}
              boxShadow={"3px 2px 5px 0px rgba(0,0,0,0.3)"}
            />
          </Box>
        </Flex>
      </SiteSection>
      <Spacer size={2} />

      <SiteSection justifyContent="center">
        <Box maxWidth={624}>
          <Text fontSize={20}>
            I am passionate <Strong>full stack developer</Strong>, currently
            living in beautiful Bangkok, Thailand.
          </Text>
          <Spacer size={2} />
          <Text fontSize={20}>
            For the past 8 years, I've had the opportunity to work with a
            variety of technolgies including .NET, Python, Ruby, and most
            recently, a ton of{" "}
            <Box as="span" textDecoration="line-through">
              JavaScript
            </Box>{" "}
            <Strong>TypeScript</Strong>.
          </Text>
          <Spacer size={2} />

          <Text fontSize={20}>
            On a daily basis, my goal is to create{" "}
            <Strong>software that matters</Strong> for end users while writing
            elegant and maintainable code, and always finding the balance
            between quality and time.
          </Text>
        </Box>
      </SiteSection>

      <SocialIcons />
    </Layout>
  );
};

export default Index;
