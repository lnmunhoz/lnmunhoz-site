import { IconButton, useColorMode } from "@chakra-ui/core";
import React from "react";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant={"outline"}
      variantColor={"none"}
      border={"none"}
      aria-label={`Toggle ${colorMode === "dark" ? "light" : "dark"} mode`}
      icon={colorMode === "dark" ? "sun" : "moon"}
      color="white"
      onClick={() => toggleColorMode()}
    />
  );
};
