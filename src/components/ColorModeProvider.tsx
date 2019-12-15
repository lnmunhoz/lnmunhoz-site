import { ColorModeProvider as ChakraColorProvider } from "@chakra-ui/core";
import React from "react";

export const ColorProvider: React.FC = props => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // prevents ssr flash for mismatched dark mode
  if (!mounted) return null;

  return <ChakraColorProvider>{props.children}</ChakraColorProvider>;
};
