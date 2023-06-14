import * as React from "react";
import {
  Box,
  Button,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface PopUpProps {
  trigger: boolean;
  setTrigger: any;
  markets: any;
}

const MarketsModal: React.FC<PopUpProps> = ({
  trigger,
  setTrigger,
  markets,
}) => {
  return trigger ? (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#ccc",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          position: "relative",
          width: "95%",
          padding: 30,
          maxWidth: "800px",
          borderRadius: 5,
          backgroundColor: "#fff",
        }}
      >
        <Button
          onClick={() => setTrigger(false)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          close
        </Button>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Base</Th>
              <Th>Quote</Th>
              <Th>Price</Th>
              <Th>Price USD</Th>
              <Th>Volume</Th>
              <Th>Volume USD</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </Box>
    </Box>
  ) : null;
};

export default MarketsModal;
