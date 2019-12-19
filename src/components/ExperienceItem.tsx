import {
  Badge,
  Box,
  Flex,
  Heading,
  PseudoBox,
  Text,
  useColorMode,
  Button
} from "@chakra-ui/core";
import React, { useState } from "react";
import {
  FaInfoCircle,
  FaLaptopCode,
  FaLayerGroup,
  FaRegBuilding,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { FONT_MENLO, CONTAINER_WIDTH } from "../constants";
import { IExperience } from "../metadata";

export const ExperienceItem = (props: IExperience) => {
  const { colorMode } = useColorMode();
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(val => !val);
  const hoveredBg = {
    light: "gray.100",
    dark: "rgb(20, 25, 35)"
  };
  const borderBottomColor = { light: "#00000017", dark: "rgb(20, 25, 35)" };
  const hasExtraContent = props.technologies || props.description;

  return (
    <PseudoBox
      p={5}
      onClick={toggleExpanded}
      transition="background 0.25s ease"
      borderRadius={3}
      bg={isExpanded && hasExtraContent && hoveredBg[colorMode]}
      _hover={
        hasExtraContent && {
          cursor: "pointer",
          bg: hoveredBg[colorMode]
        }
      }
      borderBottom={`1px solid ${borderBottomColor[colorMode]}`}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" userSelect="none">
          <Box>
            {props.location === "Location" ? (
              <FaRegBuilding size={24} opacity={0.8} />
            ) : (
              <FaLaptopCode size={24} opacity={0.8} />
            )}
          </Box>
          <Box px={4}>
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
        </Flex>

        {hasExtraContent && (
          <>
            {!isExpanded ? (
              <FaChevronDown opacity={0.3} />
            ) : (
              <FaChevronUp opacity={0.3} />
            )}
          </>
        )}
      </Flex>
      {isExpanded && (
        <>
          {props.description && (
            <Flex mt={3} alignItems="center">
              <Box>
                <FaInfoCircle size={20} />
              </Box>

              <Box px={4}>
                <Text fontSize={14} fontFamily={FONT_MENLO}>
                  {props.description}
                </Text>
              </Box>
            </Flex>
          )}
          {props.technologies && (
            <Flex mt={3} alignItems="center">
              <Box>
                <FaLayerGroup size={20} />
              </Box>
              <Flex px={4} flexWrap="wrap">
                {props.technologies?.map(tech => (
                  <Box mr={3} display="inline-block">
                    <Badge
                      fontFamily={FONT_MENLO}
                      variantColor="blue"
                      px={2}
                      py={1}
                    >
                      {tech}
                    </Badge>
                  </Box>
                ))}
              </Flex>
            </Flex>
          )}
        </>
      )}
    </PseudoBox>
  );
};
