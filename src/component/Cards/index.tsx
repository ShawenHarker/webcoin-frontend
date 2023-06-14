import React, { useState, useEffect } from "react";
import { Box, Button, Card, Flex, Text, useDisclosure } from "@chakra-ui/react";
import MarketsModal from "../Table";
import { log } from "console";
import Modal from "../Modal";
interface CardsProps {
  coin: any;
}

const Cards: React.FC<CardsProps> = ({ coin }) => {
  const [marketPopUp, setMarketPopUp] = useState(false);
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
    <Card
      style={{
        margin: 15,
        padding: 5,
      }}
    >
      <Flex flexDirection="column">
        <Text
          alignSelf="center"
          fontSize={22}
          fontWeight={900}
          fontFamily="serif"
          color="secondary.500"
        >
          {coin.symbol}
        </Text>
        <Flex justifyContent="space-evenly" fontSize={20} fontWeight={500}>
          <Text>{coin.name}</Text>
          <Text>Rank: {coin.rank}</Text>
        </Flex>
        <Flex fontSize={10} justifyContent="space-evenly">
          <Flex flexDirection="column">
            <Text fontWeight={600}>Percent change 1h:</Text>
            <Text>{coin.percent_change_1h}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontWeight={600}>Percent change 24h:</Text>
            <Text>{coin.percent_change_24h}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontWeight={600}>Percent change 7d:</Text>
            <Text>{coin.percent_change_7d}</Text>
          </Flex>
        </Flex>
        <Flex fontSize={10} justifyContent="space-evenly">
          <Flex flexDirection="column">
            <Text fontWeight={600}>Price USD</Text>
            <Text>{coin.price_usd}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontWeight={600}>Price BTC</Text>
            <Text>{coin.price_btc}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontWeight={600}>Market Cap USD</Text>
            <Text>{coin.market_cap_usd}</Text>
          </Flex>
        </Flex>
        <Button
          onClick={() => {
            setCoin_id(coin.id);
            onOpen();
          }}
          style={{
            backgroundColor: "#6258de",
            color: "#ff9100",
          }}
        >
          Markets
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <MarketsModal
            setTrigger={setMarketPopUp}
            markets={markets}
            coin={coin}
          />
        </Modal>
      </Flex>
    </Card>
  );
};

export default Cards;
