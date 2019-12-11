import React from "react";
import { List, ListItem, Heading } from "@chakra-ui/core";
import { Spacer } from "./Spacer";
import metadata from "../metadata";

export const TechnologiesSection = () => {
  return (
    <>
      <Heading size="md">Technologies:</Heading>
      <Spacer size={1} />
      <List styleType="disc">
        {metadata.technologies.map(item => (
          <ListItem key={item}> {item}</ListItem>
        ))}
      </List>
    </>
  );
};
