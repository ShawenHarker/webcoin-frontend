import * as React from "react";
import { Container } from "@chakra-ui/react";
import Header from "../../container/Header";
import CardWrapper from "../../container/CardWrapper/index";

export default function Home() {
  return (
    <Container p={2} m="auto" maxW="4xl" textAlign="center">
        <Header />
        <CardWrapper />
    </Container>
  );
}
