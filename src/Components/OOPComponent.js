import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react';

export default function OOPComponent({id}) {
    if(id!==0){
        return null;
    }

    return (
      <Flex justifyContent="space-between" width="300px">
        <Box width="45%" border="2px solid black" padding="10px">
          <Text fontSize="20px" fontWeight="bold" mb="10px">
            Klasa
          </Text>
          <Text>Owoc</Text>
        </Box>
        <Box width="45%" border="2px solid black" padding="10px">
          <Text fontSize="20px" fontWeight="bold" mb="10px">
            Obiekty
          </Text>
          <Text>Jabłko</Text>
          <Text>Banan</Text>
          <Text>Mango</Text>
        </Box>
      </Flex>
    )
}
