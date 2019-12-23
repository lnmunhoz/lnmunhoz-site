import {
  Box,
  Button,
  Heading,
  Text,
  ListItem,
  List,
  Flex
} from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { GithubAvatar } from "../components/GithubAvatar";
import { Layout, SiteSection } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import { Strong } from "../components/Strong";
import metadata from "../metadata";
import { ContentWrapper } from "../components/ContentWrapper";
import { SubHeading } from "../components/SubHeading";
import { LinkButton } from "../components/LinkButton";

const styles = {
  text: {
    pb: 8,
    fontSize: [18, 19, 20]
  }
};

const Index = () => {
  return (
    <Layout>
      <ContentWrapper>
        <SiteSection justifyContent="center" display="flex">
          <Flex width={[120, 160]} height={[120, 160]}>
            <GithubAvatar
              borderRadius={"50%"}
              boxShadow={"3px 2px 5px 0px rgba(0,0,0,0.3)"}
              margin="0 auto"
            />
          </Flex>
        </SiteSection>
        <SiteSection justifyContent="center">
          <Text {...styles.text}>
            I'm a passionate <Strong>full stack developer</Strong>, currently
            living in beautiful Bangkok, Thailand.
          </Text>
          <Text {...styles.text}>
            For the past 8 years, I've had the opportunity to work with a
            variety of technologies including .NET, Python, Ruby, and most
            recently, a ton of{" "}
            <Box as="span" textDecoration="line-through">
              JavaScript
            </Box>{" "}
            <Strong>TypeScript</Strong>.
          </Text>

          <Text {...styles.text}>
            On a daily basis, my goal is to create{" "}
            <Strong>software that matters</Strong> for end users while writing
            elegant and maintainable code, and always finding the balance
            between quality and time.
          </Text>
        </SiteSection>
        <SiteSection justifyContent="center">
          <SubHeading title="More about me:" />
          <List styleType="none">
            <ListItem>
              <Link href={metadata.routes.uses}>
                <LinkButton>> Uses</LinkButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={metadata.routes.experience}>
                <LinkButton>> Experience</LinkButton>
              </Link>
            </ListItem>
          </List>
        </SiteSection>
      </ContentWrapper>
    </Layout>
  );
};

export default Index;
