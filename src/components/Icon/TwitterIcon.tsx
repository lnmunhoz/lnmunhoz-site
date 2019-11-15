import React from "react";
import { Box, BoxProps } from "@chakra-ui/core";
import { FaTwitter } from "react-icons/fa";

export const TwitterIcon = (props: BoxProps) => (
  <Box as={FaTwitter} color="twitter.500" {...props} />
);
