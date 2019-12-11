import { IconButton, useColorMode } from "@chakra-ui/core";
import React from "react";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      bg="transparent"
      aria-label={`Toggle ${colorMode === "dark" ? "light" : "dark"} mode`}
      icon={colorMode === "dark" ? "sun" : "moon"}
      onClick={() => toggleColorMode()}
    />
  );
};
