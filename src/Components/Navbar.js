import {  Image, Flex, Button,  HStack , chakra, Text, useToast, Icon } from '@chakra-ui/react';

import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider} from '@chakra-ui/react'
import {FiUser} from 'react-icons/fi'
import React from "react";
import { NavLink } from 'react-router-dom';
import { paths } from '../utils/paths';

const CTA = "Logowanie"
const title = "StartJava"
const logout = "Wyloguj"


export default function Navbar() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [redirectTo, setRedirectTo] = React.useState("/");
  const role = localStorage.getItem('role');
  const toast = useToast();
  const toastIdRef = React.useRef();

  
  React.useEffect(() => {
    const authorization = localStorage.getItem('authorization');
    console.log(role);
    if (authorization && role) {
      setAuthenticated(true);
    }
  }, []);
  
  const logout = () => {
    localStorage.removeItem("authorization");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    setAuthenticated(false);
    toastIdRef.current = toast({ 
      title: 'Wylogowano',
      description: "Wylogowano pomyślnie",
      status: 'info',
      duration: 9000,
      isClosable: true
    })
  }

  return (
    <chakra.header  id="header"
      position="sticky"
      top="0"
      zIndex={10}
      
    >
      <Flex
        position="sticky"
        top="5"
        zIndex={10}
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
        background= '#ff416c'
        background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
        background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
      >
        
        <NavLink to={paths.landingPage}>
          <Text fontSize="28px" color="white" fontStyle="bold" >
            {title}
          </Text>
        </NavLink>
		
        <HStack>

          {authenticated && role === "ROLE_ADMIN" ? (
            <Button colorScheme='gray' as={NavLink} to={paths.adminPanel}>Admin panel</Button> 
          ) : (
            <Flex h="0vh"/>
          )}

          <Menu>
            <MenuButton as={Button} color='white' textColor='dark'>
              <Icon  as={FiUser} fontSize="xl" color={"#82AAAD"} />
            </MenuButton>
            <MenuList>
              {authenticated ? 
                <MenuGroup title='Profil'>
                  <MenuItem as={NavLink} to={paths.profile}> Mój profil</MenuItem>
                  <MenuItem onClick={logout} as={NavLink} to={paths.landingPage}> Wyloguj </MenuItem>
                </MenuGroup> 
                :
                <MenuGroup title='Profil'>
                  <MenuItem as={NavLink} to={paths.signIn}> Zaloguj </MenuItem>
                </MenuGroup>
            }
              
              <MenuDivider />
              <MenuGroup title='Pomoc'>
                <MenuItem as={NavLink} to={paths.help}> Przydatne linki</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}