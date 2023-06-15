import React, { useState, useEffect } from "react";
import { Button, Card, Flex, Text, useDisclosure } from "@chakra-ui/react";
import TableLayout from "../Table";
import Modal from "../Modal";
import { styles } from "../../styles";
interface CardsProps {
  coin: any;
}

const Cards: React.FC<CardsProps> = ({ coin }) => {
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
          fontWeight={500}
          mt="0px"
        >
          <Text color="primary.500" fontFamily="serif">
            {coin.symbol}
          </Text>
          <Text color="primary.500" fontFamily="serif">
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
      </Flex>
    </Card>
  );
};

export default Cards;
