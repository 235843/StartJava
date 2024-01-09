import React from 'react'
import { json, useParams } from 'react-router-dom'
import data from '../utils/basics.json'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import HeaderComponent from '../Components/HeaderComponent';
import CodeSampleComponent from '../Components/CodeSampleComponent';
import OutputComponent from '../Components/OutputComponent';
import InformationComponent from '../Components/InformationComponent';
import { baseUrl } from '../utils/paths';
import QuestionComponent from '../Components/QuestionComponent';

export default function TestsPage({category}){
  const loadData = JSON.parse(JSON.stringify(data))

  return (
    <React.StrictMode>
      <Navbar/>
        
      <Flex w='95%'  position= 'absolute' marginLeft="20px" >
        <Sidebar/>
        <Box borderWidth="1px" borderRadius="lg" p="6" m="4" minWidth="80%">
          <QuestionComponent category={category}/>
        </Box>
      </Flex>
    </React.StrictMode>
  )
}