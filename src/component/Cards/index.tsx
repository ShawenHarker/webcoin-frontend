import React, { useState, useEffect } from "react";
import { Box, Button, Card, Flex, Text, useDisclosure } from "@chakra-ui/react";
import TableLayout from "../Table";
import Modal from "../Modal";
import { styles } from "../../styles";
interface CardsProps {
  coin: {
    id: string;
    nameid: string;
    symbol: string;
    name: string;
    rank: number;
    price_usd: string;
    percent_change_1h: string;
    percent_change_24h: string;
    percent_change_7d: string;
    price_btc: string;
    market_cap_usd: string;
  };
  hiddenCoinsHandler: (coin: string) => void;
}

const Cards: React.FC<CardsProps> = ({ coin, hiddenCoinsHandler }) => {
  const [markets, setMarkets] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState({});
  const [coin_id, setCoin_id] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MARKET_URL}${coin_id}`)
      .then((response) => response.json())
      .then((data) => setMarkets(data))
      .catch((error) => setError(error));
  }, [coin_id]);

  return (
    <Card sx={styles.cardStyle}>
      <Flex flexDirection="column">
        <Text
          alignSelf="center"
          fontSize={26}
          fontWeight={900}
          fontFamily="serif"
          color="secondary.500"
        >
          {coin.name}
        </Text>
        <Flex
          justifyContent="space-evenly"
          fontSize={20}
          fontWeight={600}
          mt="0px"
        >
          <Text color="primary.400" fontFamily="serif">
            {coin.symbol}
          </Text>
          <Text color="primary.400" fontFamily="serif">
            Rank: {coin.rank}
          </Text>
        </Flex>
        <Flex sx={styles.flexRowStyle}>
          <Flex flexDirection="column">
            <Text sx={styles.fontStyle}>Percent change 1h:</Text>
            <Text>{coin.percent_change_1h}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text sx={styles.fontStyle}>Percent change 24h:</Text>
            <Text>{coin.percent_change_24h}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text sx={styles.fontStyle}>Percent change 7d:</Text>
            <Text>{coin.percent_change_7d}</Text>
          </Flex>
        </Flex>
        <Flex sx={styles.flexRowStyle} alignContent="space-between">
          <Flex flexDirection="column">
            <Text sx={styles.fontStyle}>Price USD</Text>
            <Text>{coin.price_usd}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text sx={styles.fontStyle}>Price BTC</Text>
            <Text>{coin.price_btc}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text sx={styles.fontStyle}>Market Cap USD</Text>
            <Text>{coin.market_cap_usd}</Text>
          </Flex>
        </Flex>
        <Button
          onClick={() => {
            setCoin_id(coin.id);
            onOpen();
          }}
          sx={styles.button}
        >
          Markets
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <TableLayout markets={markets} coin={coin} />
        </Modal>
        <Box
          onClick={() => hiddenCoinsHandler(coin.id)}
          mt={2}
          width={8}
          alignSelf="center"
          cursor="pointer"
        >
          <Text fontSize={10} color="red">
            Hide
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default Cards;
