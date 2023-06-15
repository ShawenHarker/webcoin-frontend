import { Container, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer () {
  return (
    <Container as="footer" maxW="full" py={5}>
      <Text>
        All data supplied is by{" "}
        <Link
          fontWeight={700}
          target='_blank'
          color="primary.400"
          href="https://www.coinlore.com/cryptocurrency-data-api"
        >
          Coinlore
        </Link>{" "} and is only used as mock data for training purposes.
      </Text>
    </Container>
  );
}
