import React from "react";
import { Box } from "@chakra-ui/core";

export const Pegasus = () => (
  <Box
    backgroundImage="url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F10%2F15%2F16%2F24%2Funicorn-2854337_960_720.png&f=1&nofb=1)"
    backgroundRepeat="no-repeat"
    backgroundPosition={["center"]}
    backgroundSize={["contain", "cover"]}
    maxWidth={["20%", "1500px"]}
    position="fixed"
    margin="0 auto"
    width="100%"
    opacity={0.05}
    top={0}
    left={0}
    right={0}
    bottom={0}
    zIndex={10}
    pointerEvents="none"
  />
);
