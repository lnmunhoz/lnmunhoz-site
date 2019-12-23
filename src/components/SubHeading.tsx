import { Heading, HeadingProps } from "@chakra-ui/core";
import React from "react";
import { FONT_MENLO } from "../constants";

export interface SubHeadingProps extends HeadingProps {
  title: string;
}

export const SubHeading = (props: HeadingProps) => {
  const { title, ...rest } = props;

  return (
    <Heading
      size="lg"
      as="h2"
      fontSize={[22, 24]}
      fontFamily={FONT_MENLO}
      pb={5}
      {...rest}
    >
      {title}
    </Heading>
  );
};
