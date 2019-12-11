import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/core";

export interface LinkProps
  extends Omit<NextLinkProps, "as">,
    Omit<ChakraLinkProps, "as" | "href"> {
  children: React.ReactNode;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  prefetch,
  preload,
  replace,
  scroll,
  shallow,
  passHref,
  external,
  ref,
  ...props
}: LinkProps) => {
  return (
    <NextLink href={href}>
      <ChakraLink
        ref={ref}
        href={external && String(href)}
        target={external && "_blank"}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
