import { Button, ButtonProps } from "@chakra-ui/core";
import React from "react";

export const LinkButton = (props: ButtonProps) => {
  return (
    <Button variantColor="blue" variant="ghost" fontFamily="Menlo" {...props}>
      {props.children}
    </Button>
  );
};
