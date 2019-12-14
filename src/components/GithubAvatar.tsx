import React from "react";
import { Image, ImageProps } from "@chakra-ui/core";

export const GithubAvatar: React.FC<ImageProps> = props => (
  <Image
    src={"https://avatars2.githubusercontent.com/u/4376835?s=460&v=4"}
    {...props}
  />
);
