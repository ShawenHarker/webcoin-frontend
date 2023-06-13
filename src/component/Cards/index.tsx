import * as React from 'react';
import { Card, Text } from '@chakra-ui/react';

interface CardsProps {
  coin: any; 
}

const Cards: React.FC<CardsProps> = ({ coin }) => {
  return (
    <Card>
      <Text>{coin.symbol}</Text>
      <Text>Rank: {coin.rank}</Text>
      <Text>{coin.name}</Text>
      <div>
        <div>
          <Text>Percent change 1h:</Text>
          <Text>{coin.percent_change_1h}</Text>
        </div>
        <div>
          <Text>Percent change 24h:</Text>
          <Text>{coin.percent_change_24h}</Text>
        </div>
        <div>
          <Text>Percent change 7d:</Text>
          <Text>{coin.percent_change_7d}</Text>
        </div>
      </div>
      <div>
        <Text>{coin.price_usd}</Text>
        <Text>{coin.price_btc}</Text>
        <Text>{coin.market_cap_usd}</Text>
      </div>
      <div>
        <Text>{coin.volume24}</Text>
        <Text>{coin.volume24a}</Text>
      </div>
      <div>
        <Text>{coin.csupply}</Text>
        <Text>{coin.tsupply}</Text>
        <Text>{coin.msupply}</Text>
      </div>
    </Card>
  );
};

export default Cards;