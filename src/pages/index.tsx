import { Box, Image, Text, PseudoBox } from "@chakra-ui/core";
import React from "react";
import { Layout } from "../components/Layout";
import { TechnologiesSection } from "../components/TechnologiesSection";
import { Spacer } from "../components/Spacer";

const SocialLinks = () => {
  return <Box></Box>;
};

const MyPicture = () => (
  <Image src="/static/images/me.jpg" borderRadius="10%" width={"98px"} />
);

const TypeScriptBox = () => {
  return (
    <PseudoBox
      as="span"
      transition={"0.3s ease"}
      _hover={{
        background: "rgb(60, 119, 199)",
        fontWeight: "bold",
        px: 4,
        py: 3,
        color: "white",
        boxShadow: "0px 1px 6px 1px rgba(0,0,0, 0.2)",
        userSelect: "none"
      }}
    >
      TypeScript.{" "}
    </PseudoBox>
  );
};

const Index = () => {
  return (
    <Layout>
      <Text textAlign="justify">Hello! Welcome to my website :D</Text>
      <Spacer />
      <Text textAlign="justify">
        I am passionate full stack developer, currently living in Bangkok,
        Thailand.
      </Text>
      <Spacer size={2} />

      <Text textAlign="justify">
        For the past 8 years, I've had the opportunity to work with a variety of
        technolgies including .NET, Python, Ruby, and a lot of{" "}
        <Box as="span" textDecoration="line-through">
          JavaScript
        </Box>{" "}
        <TypeScriptBox />
        <Spacer size={2} />
        <Text textAlign="justify">
          On a daily basis, my goal is to create software that matters for end
          users while writing elegant and maintainable code, and always finding
          the balance between quality and time.
        </Text>
      </Text>
      <Spacer />
      <TechnologiesSection />
    </Layout>
  );
};

export default Index;
