import { Flex, Text } from "@chakra-ui/core";
import React from "react";
import metadata from "../metadata";
import { SocialIcon, SocialIconProps } from "./Icons";
import { Link } from "./Link";

export const Footer = () => (
  <>
    <Flex width={"100%"} height={12} fontSize={12} justifyContent="center">
      {Object.keys(metadata.socialLinks).map(key => (
        <Link
          href={metadata.socialLinks[key]}
          prefetch={false}
          external
          p={3}
          height={"48px"}
          key={key}
        >
          <SocialIcon name={key as SocialIconProps["name"]} />
        </Link>
      ))}
    </Flex>
    <Text textAlign="center" fontFamily="Menlo" fontSize={12}>
      Lucas Munhoz {new Date().getFullYear()}
    </Text>
  </>
);
