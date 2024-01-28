import { Flex, Table, Thead, Tr, Tbody,Th, Td } from '@chakra-ui/react'
import React from 'react'

export default function GridComponent({data}) {
  return (
    <Table variant="striped" colorScheme="gray" borderWidth="1px" borderColor="gray.300" marginTop="10px">
      <Thead>
        <Tr>
          {data.headers.map((header, index) => (
            <Th>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.body.map((row, index) => (
          <Tr key={index}>
            <Td>{row.col1}</Td>
            <Td>{row.col2}</Td>
            <Td>{row.col3}</Td>
            {row.col4 ? (
              <Td>{row.col4}</Td>
            ) : (
              <Flex h="0vh" w="0%" />
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
