import React, { useState } from 'react'
import {
    Flex,
    IconButton,
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

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="85vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            background='#FFF0F5'
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Strona Główna" path={paths.landingPage} />
                <NavItem navSize={navSize} icon={FiBook} title="Java Podstawy"  path={paths.basics}/>
                <NavItem navSize={navSize} icon={FiHash} title="Java Metody" path={paths.methods}/>
                <NavItem navSize={navSize} icon={FiLayers} title="Java Klasy" path={paths.classes}/>
                <NavItem navSize={navSize} icon={FiFile} title="Obsługa plików" path={paths.files}/>
                
            </Flex>

            
        </Flex>
    )
}