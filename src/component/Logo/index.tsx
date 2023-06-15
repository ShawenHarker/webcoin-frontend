import * as React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Container >
      <Box width={{ base: "200px", md: "350px", lg: "456px" }} mb={0}>
        <Image src={require("../../assets/images/WebCoin.png")} alt="Logo" />
      </Box>
      <Text
        fontSize={{ base: "7.5px", md: "10px", lg: "12px" }}
        fontWeight={700}
        mt={0}
      >
        THE WORLD'S LEADING CYPTOCURRENCY UPDATER
      </Text>
    </Container>
  );
}
