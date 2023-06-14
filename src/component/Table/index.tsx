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
import { theme } from "../../theme";

interface PopUpProps {
  setTrigger: any;
  markets: any;
  coin: any
}

const MarketsModal: React.FC<PopUpProps> = ({ markets, coin }) => {
  return (
    <TableContainer pb={5}>
      <Table size="sm" variant="striped" colorScheme="purple">
        <Thead>
          <Tr>
            <Th color="primary.500" fontSize={16}>
              Name
            </Th>
            <Th color="primary.500" fontSize={16}>
              Base
            </Th>
            <Th color="primary.500" fontSize={16}>
              Quote
            </Th>
            <Th color="primary.500" fontSize={16}>
              Price
            </Th>
            <Th color="primary.500" fontSize={16}>
              Price USD
            </Th>
            <Th color="primary.500" fontSize={16}>
              Volume
            </Th>
            <Th color="primary.500" fontSize={16}>
              Volume USD
            </Th>
            <Th color="primary.500" fontSize={16}>
              Time
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {markets.map((market: any) => (
            <Tr key={coin.id}>
              <Td fontSize={10}>{market.name}</Td>
              <Td fontSize={10}>{market.base}</Td>
              <Td fontSize={10}>{market.quote}</Td>
              <Td fontSize={10}>{market.price}</Td>
              <Td fontSize={10}>{market.price_usd}</Td>
              <Td fontSize={10}>{market.volume}</Td>
              <Td fontSize={10}>{market.volume_usd}</Td>
              <Td fontSize={10}>{market.time}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MarketsModal;
