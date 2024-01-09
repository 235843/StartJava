import React, { useState } from 'react'
import {
    Flex,
    IconButton,
    Select
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiLayers,
    FiFile,
    FiBook,
    FiHash
} from 'react-icons/fi'
import NavItem from './NavItem'
import { paths } from '../utils/paths'
import data from '../utils/chapters.json'
import ChapterComponent from './ChapterComponent'
import NavTestComponent from './NavTestComponent'


export default function Sidebar() {
    const body = JSON.parse(JSON.stringify(data))
    return (
      <Flex
        pos="sticky"
        top="10"
        left="5"
        h="85vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius= "5px"
        w= "25%"
        flexDir="column"
        background= '#ff416c'
        background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
        background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
        overflowY="auto" // Set overflow to auto for vertical scrolling
        maxHeight="85vh" // Set a maximum height to enable scrolling
        sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '5px',
              backgroundColor: `#ff416c`,
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '5px',
              backgroundColor: `#d13e60`,
            },
          }}
      >
        <Flex
            flexDir="column"
            w="100%"
            alignItems= "flex-start"
        >
                <ChapterComponent title="Podstawy Javy" data={body.basics} path={paths.basics} />
                <ChapterComponent title="Metody w Javie" data={body.methods} path={paths.methods} />
                <ChapterComponent title="Klasy w Javie" data={body.classes} path={paths.classes} />
                <ChapterComponent title="Obsługa plików" data={body.files} path={paths.files} />
                <NavTestComponent />
                
        </Flex>

            
      </Flex>
    )
}