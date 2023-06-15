import * as React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Container m="auto">
      <Box width={450} mb={0}>
        <Image src={require("../../assets/images/WebCoin.png")} alt="Logo" />
      </Box>
      <Text fontSize={12} fontWeight={700} mr={50} mt={0}>
        THE WORLD'S LEADING CYPTOCURRENCY UPDATER
      </Text>
    </Container>
  );
}
