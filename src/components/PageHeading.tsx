import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/core";

export interface PageHeadingProps extends HeadingProps {
  title: string;
}

export const PageHeading = (props: PageHeadingProps) => (
  <Heading fontFamily="Menlo" pb={10} {...props}>
    > {props.title}
  </Heading>
);
