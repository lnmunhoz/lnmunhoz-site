import { Flex } from "@chakra-ui/core";
import React from "react";
import metadata from "../metadata";
import { SocialIcon, SocialIconProps } from "./Icons";
import { Link } from "./Link";

export const Footer = () => (
  <Flex
    width={"100%"}
    as="footer"
    position="absolute"
    bottom={0}
    height={12}
    fontSize={12}
    justifyContent="center"
  >
    {/* <Box>made with love in Thailand</Box> */}
    {Object.keys(metadata.socialLinks).map(key => (
      <Link
        href={metadata.socialLinks[key]}
        prefetch={false}
        external
        p={2}
        height={"32px"}
        key={key}
      >
        <SocialIcon name={key as SocialIconProps["name"]} />
      </Link>
    ))}
  </Flex>
);
