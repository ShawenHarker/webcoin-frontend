import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { Flex, Text } from "@chakra-ui/react";
import Cards from "../../component/Cards";

const Get_Coins = gql`
  {
    data {
      id
      symbol
      name
      rank
      price_usd
      percent_change_1h
      percent_change_24h
      percent_change_7d
      price_btc
      market_cap_usd
    }
  }
`;

export default function CardWrapper() {
  const { loading, error, data } = useQuery(Get_Coins);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <Flex flexWrap="wrap" justifyContent="space-evenly">
      {data ? data.data.map((coin: any) => {
        return <Cards coin={coin} key={coin.id} />
      }): null}
    </Flex>
  )
}
