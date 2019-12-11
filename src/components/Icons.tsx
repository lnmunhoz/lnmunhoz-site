import React from "react";
import { Box, BoxProps } from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export interface SocialIconProps {
  name: "github" | "twitter" | "linkedin";
  size?: number;
}

export const TwitterIcon = (props: BoxProps) => (
  <Box as={FaTwitter} {...props} />
);

export const GithubIcon = (props: BoxProps) => <Box as={FaGithub} {...props} />;

export const LinkedinIcon = (props: BoxProps) => (
  <Box as={FaLinkedin} {...props} />
);

export const SocialIcon: React.FC<SocialIconProps> = ({ name, ...props }) => {
  switch (name) {
    case "github":
      return <GithubIcon {...props} />;
    case "twitter":
      return <TwitterIcon {...props} />;
    case "linkedin":
      return <LinkedinIcon {...props} />;
    default:
      throw new Error(`Invalid name for social icon: ${name}`);
  }
};

SocialIcon.defaultProps = {
  size: 4
};
