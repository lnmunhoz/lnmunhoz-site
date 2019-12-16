import { Box, Text, Heading, Button } from "@chakra-ui/core";
import React from "react";
import { GithubAvatar } from "../components/GithubAvatar";
import { Layout, SiteSection } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import { Strong } from "../components/Strong";
import Link from "next/link";
import metadata from "../metadata";

const Index = () => {
  return (
    <Layout>
      <SiteSection justifyContent="center">
        <Box width={[120, 160]} height={[120, 160]}>
          <GithubAvatar
            borderRadius={"50%"}
            boxShadow={"3px 2px 5px 0px rgba(0,0,0,0.3)"}
          />
        </Box>
      </SiteSection>
      <SiteSection justifyContent="center">
        <Box maxWidth={624}>
          <Text fontSize={20}>
            I'm a passionate <Strong>full stack developer</Strong>, currently
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
      <SiteSection justifyContent="center">
        <Box maxWidth={624} width="100%">
          <Heading size="md">More about me:</Heading>
          <Spacer size={1} />

          <Link href={metadata.routes.uses}>
            <Button variantColor="blue" variant="ghost" fontFamily="Menlo">
              > Uses
            </Button>
          </Link>
        </Box>
      </SiteSection>
    </Layout>
  );
};

export default Index;
