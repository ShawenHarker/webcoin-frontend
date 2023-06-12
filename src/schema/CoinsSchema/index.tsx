import React from "react";
import { Text } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

const Get_Coins = gql`
  {
    data {
      id
      nameid
      symbol
      name
      rank
      price_usd
      percent_change_1h
      percent_change_24h
      percent_change_7d
      price_btc
      market_cap_usd
      csupply
      tsupply
      msupply
    }
  }
`;

export default function Coins() {
  const { loading, error, data } = useQuery(Get_Coins);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return data;
}
