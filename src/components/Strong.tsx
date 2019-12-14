import { Box, BoxProps, useColorMode } from "@chakra-ui/core";
import React from "react";

export const Strong: React.FC<BoxProps> = props => {
  const { colorMode } = useColorMode();
  const color = { light: "purple.700", dark: "purple.400" };

  return (
    <Box as="strong" display="inline" color={color[colorMode]}>
      {props.children}
    </Box>
  );
};
