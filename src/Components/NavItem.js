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



export default function NavItem({ icon, title, active, navSize, path }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={2}
                    
                    borderRadius={8}
                    _hover={{ textDecor: 'none' }}
                    w={navSize == "large" && "100%"}
                >
                  <HStack>
                    <Button w="100%" as={NavLink} to={path}
                     _hover={{ textDecor: 'none',  background: '#ff416c',
                     background: '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)',
                     background: 'linear-gradient(to right, #ff4b2b, #ff416c)', 
                     textColor: 'white'}} 
                     >
                        <NavLink to="signIn"></NavLink>
                        <Flex >
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} >{title}</Text>
                        </Flex>
                    </Button>
                  </HStack>
                </Link>
                <MenuList
                    
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                >
                    
                </MenuList>
            </Menu>
        </Flex>
    )
}