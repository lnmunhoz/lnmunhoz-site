import { Box, BoxProps } from "@chakra-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Spacer } from "./Spacer";
import { trackPageView } from "../analytics";

export const SiteWrapper: React.FC<BoxProps> = props => (
  <Box pt={"80px"} {...props}>
    {props.children}
  </Box>
);

export const SiteSection: React.FC<BoxProps> = props => (
  <Box px={[3, 4, 0]} py={[3, 4, 5]} {...props}>
    {props.children}
  </Box>
);

export const Layout: React.FC = props => {
  const router = useRouter();

  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter key={router.route}>
        <Box minHeight="100%">
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
    </>
  );
};
