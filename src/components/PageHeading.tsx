import { Heading, HeadingProps } from "@chakra-ui/core";
import React from "react";
import Typed from "react-typed";

export interface PageHeadingProps extends HeadingProps {
  title: string;
}

export const PageHeading = (props: PageHeadingProps) => {
  return (
    <Heading as="h1" fontSize={[28, 30]} fontFamily="Menlo" mb={5} {...props}>
      > <Typed strings={["", props.title]} typeSpeed={80} />
    </Heading>
  );
};
