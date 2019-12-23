import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/core";

export interface PageHeadingProps extends HeadingProps {
  title: string;
}

export const PageHeading = (props: PageHeadingProps) => (
  <Heading as="h1" fontSize={[28, 30]} fontFamily="Menlo" mb={5} {...props}>
    > {props.title}
  </Heading>
);
