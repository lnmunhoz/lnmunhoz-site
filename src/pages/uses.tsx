import { Badge, Button, Heading, ListItem, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import { Layout, SiteSection } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import metadata from "../metadata";
import { getVariantColorByTag } from "../theming";
import { PageHeading } from "../components/PageHeading";
import { BackButton } from "../components/BackButton";

const UsesPage = () => (
  <Layout>
    <SiteSection justifyContent="center">
      <ContentWrapper>
        <PageHeading title="Uses" />
        <Text>These are the tools I use daily to get things done.</Text>

        <Spacer />

        {metadata.uses.map(tool => (
          <ListItem fontFamily="Menlo" lineHeight={1.8} key={tool.name}>
            {tool.name}{" "}
            <Badge variantColor={getVariantColorByTag(tool.tag)}>
              {tool.tag}
            </Badge>
          </ListItem>
        ))}

        <Spacer size={2} />
        <BackButton />
      </ContentWrapper>
    </SiteSection>
  </Layout>
);

export default UsesPage;
