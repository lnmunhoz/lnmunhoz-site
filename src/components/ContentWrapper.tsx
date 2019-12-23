import { Box, BoxProps } from "@chakra-ui/core";
import { CONTAINER_WIDTH } from "../constants";

export const ContentWrapper: React.FC<BoxProps> = props => (
  <Box maxWidth={CONTAINER_WIDTH} width="100%" margin="0 auto" {...props} />
);
