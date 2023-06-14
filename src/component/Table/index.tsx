import * as React from "react";
import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface PopUpProps {
  setTrigger: any;
  markets: any;
  coin: any
}

const MarketsModal: React.FC<PopUpProps> = ({ markets, coin }) => {
  return (
    <Box
    //   style={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     backgroundColor: "#ccc",
    //     overflow: "scroll",

    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    >
      <Box
      // style={{
      //   position: "relative",
      //   padding: 30,
      //   borderRadius: 5,
      //   backgroundColor: "#fff",
      // }}
      >
        {/* <Button
          onClick={() => setTrigger(false)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          close
        </Button> */}
        <TableContainer>
          <Table variant="stripe" size="sm">
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
            <Tbody>
              {markets.map((market: any) => (
                <Tr key={coin.id}>
                  <Td>{market.name}</Td>
                  <Td>{market.base}</Td>
                  <Td>{market.quote}</Td>
                  <Td>{market.price}</Td>
                  <Td>{market.price_usd}</Td>
                  <Td>{market.volume}</Td>
                  <Td>{market.volume_usd}</Td>
                  <Td>{market.time}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MarketsModal;
