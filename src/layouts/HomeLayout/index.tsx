import * as React from "react";
import { Container } from "@chakra-ui/react";
import Header from "../../container/Header";
import CardWrapper from "../../container/CardWrapper/index";
import Footer from "../../component/Footer";

export default function Home() {
  return (
    <Container p={2} maxW="full" textAlign="center" >
        <Header />
        <CardWrapper />
        <Footer />
    </Container>
  );
}
