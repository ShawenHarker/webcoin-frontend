import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import Cards from "../../component/Cards";
import { theme } from "../../theme";
import { styles } from "../../styles/index";

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
  const [hiddenCoins, setHiddenCoins] = useState<string[]>([]);
  React.useEffect(() => {
    console.log("hidden", hiddenCoins);
  }, [hiddenCoins]);

  const hiddenCoinsHandler = (coin: string) => {
    setHiddenCoins((prevCoins: string[]) => {
      if (!prevCoins.includes(coin)) {
        return [...prevCoins, coin];
      }
      return prevCoins;
    });
  };

  if (loading) return <Spinner color="primary.400" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const visibleCoins = data?.data.filter(
    (coin: any) => !hiddenCoins.includes(coin.id)
  );

  return (
    <Flex flexDir="column">
      <Button
        onClick={() => setHiddenCoins([])}
        sx={styles.button}
        width={["100px", "10%"]}
        p={5}
        alignSelf="flex-end"
        right={["30px", "55px"]}
      >
        Unhide all
      </Button>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {visibleCoins
          ? visibleCoins.map((coin: any) => (
              <Cards
                coin={coin}
                key={coin.id}
                hiddenCoinsHandler={hiddenCoinsHandler}
              />
            ))
          : null}
      </Flex>
    </Flex>
  );
}
