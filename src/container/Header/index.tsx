import * as React from "react";
import Logo from "../../component/Logo";
import { Container } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container as="header" maxW='full' pt={7} pb={4} mb={0}>
      <Logo />
    </Container>
  );
}
