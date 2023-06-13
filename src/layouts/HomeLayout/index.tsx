import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../../container/Header';
import CardWrapper from '../../container/CardWrapper/index';

export default function Home (){
    return (
      <Box>
        <Header />
        <CardWrapper />
      </Box>
    );
}