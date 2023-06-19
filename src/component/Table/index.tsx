import * as React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { theme } from "../../theme";
import { styles } from "../../styles/index";

interface PopUpProps {
  markets: {
    name: string;
    base: string;
    quote: string;
    price: number;
    price_usd: number;
    volume: number;
    volume_usd: number;
    time: number;
  }[];
  coin: {
    id: string;
  };
}

const TableLayout: React.FC<PopUpProps> = ({ markets, coin }) => {
  return (
    <TableContainer pb={5}>
      <Table size="sm" variant="striped" colorScheme="purple">
        <Thead>
          <Tr>
            <Th sx={styles.tableHeaderStyle}>Name</Th>
            <Th sx={styles.tableHeaderStyle}>Base</Th>
            <Th sx={styles.tableHeaderStyle}>Quote</Th>
            <Th sx={styles.tableHeaderStyle}>Price</Th>
            <Th sx={styles.tableHeaderStyle}>Price USD</Th>
            <Th sx={styles.tableHeaderStyle}>Volume</Th>
            <Th sx={styles.tableHeaderStyle}>Volume USD</Th>
            <Th sx={styles.tableHeaderStyle}>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {markets.map((market) => (
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

export default TableLayout;
