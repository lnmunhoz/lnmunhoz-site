import React from "react";
import {
  Flex,
  Heading,
  ListItem,
  Box,
  Text,
  Badge,
  Button
} from "@chakra-ui/core";
import Head from "next/head";
import metadata from "../metadata";
import { Layout, SiteSection } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import Link from "next/link";

const getVariantColorByTag = (tag: string) => {
  switch (tag) {
    case "Development":
      return "blue";
    case "Productivity":
      return "teal";
    case "Apps":
      return "gray";
    case "Communication":
      return "purple";
    case "Music":
      return "yellow";
    case "Design":
      return "orange";
    case "Database Management":
      return "green";
    case "Version Control":
      return "cyan";
    case "CI/CD":
      return "pink";
    default:
      return undefined;
  }
};

const UsesPage = () => (
  <Layout>
    <SiteSection justifyContent="center">
      <Box maxWidth={624} width="100%">
        <Heading>Uses:</Heading>
        <Text>These are the tools I use daily to get things done.</Text>

        <Spacer />

        {metadata.uses.map(tool => (
          <ListItem fontFamily="Menlo" lineHeight={1.8}>
            {tool.name}{" "}
            <Badge variantColor={getVariantColorByTag(tool.tag)}>
              {tool.tag}
            </Badge>
          </ListItem>
        ))}

        <Spacer size={2} />
        <Link href={metadata.routes.index}>
          <Button variantColor="blue" variant="ghost" fontFamily="Menlo">
            {"<"} Back
          </Button>
        </Link>
      </Box>
    </SiteSection>
  </Layout>
);

export default UsesPage;
