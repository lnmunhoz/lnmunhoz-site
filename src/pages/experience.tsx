import {
  Badge,
  Button,
  Heading,
  ListItem,
  Text,
  Box,
  Flex
} from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import { Layout, SiteSection } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import metadata from "../metadata";
import { getVariantColorByTag } from "../theming";
import { FaRegBuilding, FaLaptopCode } from "react-icons/fa";

const UsesPage = () => (
  <Layout>
    <SiteSection justifyContent="center">
      <ContentWrapper>
        <Heading>Experience:</Heading>
        <Spacer />

        {metadata.experience.reverse().map(exp => (
          <Box pb={4} display="flex" alignItems="center">
            <Box mr={5}>
              {exp.location === "Location" ? (
                <FaRegBuilding size={24} opacity={0.8} />
              ) : (
                <FaLaptopCode size={24} opacity={0.8} />
              )}
            </Box>
            <Box>
              <Flex alignItems="center">
                <Heading size={"sm"}>{exp.role}</Heading>
                {exp.current && <Badge ml={2}>Current</Badge>}
                {exp.location === "Remote" && <Badge ml={2}>Remote</Badge>}
              </Flex>

              <Text>{exp.company}</Text>
            </Box>
          </Box>
        ))}

        <Spacer size={2} />
        <Link href={metadata.routes.index}>
          <Button variantColor="blue" variant="ghost" fontFamily="Menlo">
            {"<"} Back
          </Button>
        </Link>
      </ContentWrapper>
    </SiteSection>
  </Layout>
);

export default UsesPage;
