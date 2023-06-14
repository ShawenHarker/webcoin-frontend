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
    fetch(`https://api.coinlore.net/api/coin/markets/?id=${coin_id}`)
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
      <Flex
        flexDirection='column'
      >
        <Text
          fontSize={22}
          fontWeight={900}
          fontFamily="serif"
          color="secondary.600"
        >
          {coin.symbol}
        </Text>
        <Flex
          justifyContent='space-evenly'
        >
          <Text>{coin.name}</Text>
          <Text>Rank: {coin.rank}</Text>
        </Flex>
        <Box style={{ flexDirection: "row" }}>
          <Box>
            <Text>Percent change 1h:</Text>
            <Text>{coin.percent_change_1h}</Text>
          </Box>
          <Box>
            <Text>Percent change 24h:</Text>
            <Text>{coin.percent_change_24h}</Text>
          </Box>
          <Box>
            <Text>Percent change 7d:</Text>
            <Text>{coin.percent_change_7d}</Text>
          </Box>
        </Box>
        <Box style={{ flexDirection: "row" }}>
          <Text>{coin.price_usd}</Text>
          <Text>{coin.price_btc}</Text>
          <Text>{coin.market_cap_usd}</Text>
        </Box>
        <Box style={{ flexDirection: "row" }}>
          <Text>{coin.volume24}</Text>
          <Text>{coin.volume24a}</Text>
        </Box>
        <Box style={{ flexDirection: "row" }}>
          <Text>{coin.csupply}</Text>
          <Text>{coin.tsupply}</Text>
          <Text>{coin.msupply}</Text>
        </Box>
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
          <MarketsModal setTrigger={setMarketPopUp} markets={markets} coin={coin}/>
        </Modal>
      </Flex>
    </Card>
  );
};

export default Cards;
