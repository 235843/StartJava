import React from 'react'
import data from '../utils/help.json'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box, Divider, Flex } from '@chakra-ui/react';
import HeaderComponent from '../Components/HeaderComponent';
import UrlComponent from '../Components/UrlComponent'

export default function HelpPage() {
  const body = JSON.parse(JSON.stringify(data))

  return (
    <React.StrictMode>
      <Navbar/>
        
      <Flex w='95%'  position= 'absolute' marginLeft="20px" >
        <Sidebar/>
        <Box borderWidth="1px" borderRadius="lg" p="6" m="4" minWidth="80%" >
            {body.page.map(elem  => 
              <>
                <HeaderComponent title={elem.header} description={elem.description} />
                <UrlComponent url={elem.link} />

                <Divider mb="8"/>
              </>
            )}
        </Box>
      </Flex>
    </React.StrictMode>
  )
  
}
