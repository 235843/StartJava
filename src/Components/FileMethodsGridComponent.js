import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import data from '../utils/fileMethods.json'

export default function FileMethodsGridComponent({id}) {
    if(id!==0){
        return null;
    }

    const body = JSON.parse(JSON.stringify(data))

    return (
        <Table variant="striped" colorScheme="gray" borderWidth="1px" borderColor="gray.300">
      <Thead>
        <Tr>
          <Th>Metoda</Th>
          <Th>Typ zwracany</Th>
          <Th>Opis</Th>
        </Tr>
      </Thead>
      <Tbody>
        {body.map((item, index) => (
          <Tr key={index}>
            <Td>{item.method}</Td>
            <Td>{item.type}</Td>
            <Td>{item.description}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    );
    
}