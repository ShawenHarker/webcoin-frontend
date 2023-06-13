import * as React from 'react';
import { Box, Card, Flex, Text } from '@chakra-ui/react';

interface CardsProps {
  coin: any; 
}

const Cards: React.FC<CardsProps> = ({ coin }) => {
  return (
    <Card
      style={{
        margin: 15,
        padding: 5,
      }}
    >
      <Flex
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 900,
            fontFamily: "serif",
            color: "#ff9100",
          }}
        >
          {coin.symbol}
        </Text>
        <Box
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>{coin.name}</Text>
          <Text>Rank: {coin.rank}</Text>
        </Box>
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
      </Flex>
    </Card>
  );
};

export default Cards;