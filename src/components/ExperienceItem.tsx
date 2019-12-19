import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";
import { FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import { FONT_MENLO } from "../constants";
import { IExperience } from "../metadata";

export const ExperienceItem = (props: IExperience) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={5}>
        {props.location === "Location" ? (
          <FaRegBuilding size={24} opacity={0.8} />
        ) : (
          <FaLaptopCode size={24} opacity={0.8} />
        )}
      </Box>
      <Box>
        <Flex alignItems="center">
          <Heading size={"sm"} fontFamily="Menlo">
            {props.role}
          </Heading>
          {props.location === "Remote" && (
            <Badge ml={2} fontFamily={FONT_MENLO}>
              Remote
            </Badge>
          )}
        </Flex>

        <Text fontSize={14} fontFamily={FONT_MENLO}>
          {props.company}
        </Text>
        <Text fontFamily={FONT_MENLO} fontWeight={200} fontSize={12}>
          {props.from} {props.to && ` ~ ${props.to}`}
        </Text>
      </Box>
    </Box>
  );
};
