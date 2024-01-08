import React from 'react'
import { useLocation } from 'react-router-dom'
import data from '../utils/files.json'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box, Divider, Flex } from '@chakra-ui/react';
import HeaderComponent from '../Components/HeaderComponent';
import CodeSampleComponent from '../Components/CodeSampleComponent';
import OutputComponent from '../Components/OutputComponent';
import InformationComponent from '../Components/InformationComponent';
import FileMethodsGridComponent from '../Components/FileMethodsGridComponent';
import { paths } from '../utils/paths';
import SwitchPageButtonsComponent from '../Components/SwitchPageButtonsComponent';

export default function FilePage(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let urlId = searchParams.get('id');

  if (!urlId) {
    urlId = '0'
  }
  const id = parseInt(urlId, 10);

  const loadData = JSON.parse(JSON.stringify(data))
  const body = loadData.files[id];

  return (
    <React.StrictMode>
      <Navbar/>
      <Flex w='95%'  position= 'absolute' marginLeft="20px" >
        <Sidebar/>
        <Box borderWidth="1px" borderRadius="lg" p="6" m="4" minWidth="80%" >
          <SwitchPageButtonsComponent path={paths.files} id={id} pageCount={loadData.files.length}/>
            {body.page.map(elem  => 
            <>
                <HeaderComponent title={elem.header} description={elem.description} />
                <CodeSampleComponent code={elem.code} />
                <OutputComponent output={elem.output} />
                <InformationComponent info={elem.codeDescription} />

                <Divider marginTop="10px" mb="8"/>
            </>
            )}
            <FileMethodsGridComponent id={id}/>
        </Box>
      </Flex>
    </React.StrictMode>
  )
}
