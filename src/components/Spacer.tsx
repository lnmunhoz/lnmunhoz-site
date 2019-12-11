import React from "react";
import { Box } from "@chakra-ui/core";

export interface SpacerProps {
  size: number;
}

export const Spacer = (props: SpacerProps) => <Box p={props.size} />;

Spacer.defaultProps = {
  size: 4
};
