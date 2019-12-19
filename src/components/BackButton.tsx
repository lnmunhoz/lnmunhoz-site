import { useRouter } from "next/dist/client/router";
import React from "react";
import { LinkButton } from "./LinkButton";

export const BackButton = () => {
  const router = useRouter();

  return <LinkButton onClick={() => router.back()}>{"<"} Back</LinkButton>;
};
