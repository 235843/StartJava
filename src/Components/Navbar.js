import {  Image, Flex, Button,  HStack , chakra, Text, useToast } from '@chakra-ui/react';


import React from "react";
import { NavLink } from 'react-router-dom';
import { paths } from '../utils/paths';

const CTA = "Logowanie"
const title = "StartJava"
const logout = "Wyloguj"


export default function Navbar() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const toast = useToast();
  const toastIdRef = React.useRef();

  
  React.useEffect(() => {
    const authorization = localStorage.getItem('authorization');
    const role = localStorage.getItem('role');
    if (authorization && role) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
        background= '#ff416c'
        background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
        background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
      >
        
        <Text ml="4" as="h2" fontSize="24px" color='white'>
            {title}
        </Text>
		
        <HStack>
          <Button>
            {authenticated ? 
              <button onClick={() => {
                localStorage.removeItem("authorization");
                setAuthenticated(false);
                toastIdRef.current = toast({ 
                  title: 'Wylogowano',
                  description: "Wylogowano pomyślnie",
                  status: 'info',
                  duration: 9000,
                  isClosable: true
              })
              }}>{logout}</button> :
              <NavLink to={paths.signIn}>{CTA}</NavLink> 
            }
          </Button>
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}