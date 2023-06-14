import * as React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <Box>
      <Box width={80}>
        <Image
          src={require("../../assets/images/WebCoin.png")}
          alt="Logo"
          position="relative"
        />
      </Box>
      <Text 
        position="absolute" 
        top={90}
        left={115}
        fontSize='7.5px'
        fontWeight={600}
        
      >
        THE WORLD'S LEADING CYPTOCURRENCY UPDATER 
      </Text>
    </Box>
  );
}
