import React from 'react'
import { json, useParams } from 'react-router-dom'
import data from '../utils/home.json'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box, Divider, Flex } from '@chakra-ui/react';
import HeaderComponent from '../Components/HeaderComponent';
import CodeSampleComponent from '../Components/CodeSampleComponent';
import OutputComponent from '../Components/OutputComponent';
import InformationComponent from '../Components/InformationComponent';

export default function HomePage() {
  const body = JSON.parse(JSON.stringify(data))

  return (
    <React.StrictMode>
      <Navbar/>
        
      <Flex w='95%'  position= 'absolute' marginLeft="20px" >
        <Sidebar/>
        <Box borderWidth="1px" borderRadius="lg" p="6" m="4" minWidth="85%" >
            {body.page.map(elem  => 
              <>
                <HeaderComponent title={elem.header} description={elem.description} />
                <CodeSampleComponent code={elem.code} />
                <OutputComponent output={elem.output} />
                <InformationComponent info={elem.codeDescription} />

                <Divider mb="8"/>
              </>
            )}
        </Box>
      </Flex>
    </React.StrictMode>
  )
  
}
