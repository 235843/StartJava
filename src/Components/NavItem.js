import React from "react"
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    Button,
    MenuList,
    HStack
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import { paths } from "../utils/paths"
import { color } from "framer-motion"



export default function NavItem({  title, active, path }) {
    return (
        <Flex
          flexDir="column"
          w="100%"
          alignItems= "flex-start"
        >
          <HStack  w="100%">
            <Button w="100%" as={NavLink} to={path}
            background= '#ff416c'
            background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
            background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
            textColor= "white"
            borderRadius= "0px"
            
            _hover={{ textDecor: 'none', borderRadius: "0px",  background: '#d13e60',
                background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                background: 'linear-gradient(to right, #d13600, #d13e60)', 
                textColor: 'white'
            }}
                >
                <NavLink to="signIn"></NavLink>
                <Flex >
                    <Text ml={5} display= "flex" >{title}</Text>
                </Flex>
            </Button>
          </HStack>
        </Flex>
    )
}