import * as React from "react";
import Logo from "../../component/Logo";
import { Container } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container as="header" maxW='4xl' py={7}>
      <Logo />
    </Container>
  );
}
