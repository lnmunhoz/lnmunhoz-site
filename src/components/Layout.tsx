import { Box, BoxProps } from "@chakra-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Spacer } from "./Spacer";

export const SiteWrapper: React.FC<BoxProps> = props => (
  <Box pt={"80px"} {...props}>
    {props.children}
  </Box>
);

export const SiteSection: React.FC<BoxProps> = props => (
  <Box p={5} py={5} display={"flex"} {...props}>
    {props.children}
  </Box>
);

export const Layout: React.FC = props => {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter key={router.route}>
      <Box minHeight="100%">
        <Nav />
        <SiteWrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {props.children}
          </motion.div>
        </SiteWrapper>

        <Footer />
        <Spacer />
      </Box>
    </AnimatePresence>
  );
};
