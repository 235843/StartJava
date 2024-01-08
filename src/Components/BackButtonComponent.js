import React from 'react'
import { IconButton, Flex } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { paths } from '../utils/paths';



export default function BackButtonComponent() {
  return (
    <Flex 
      position="sticky"
      top = "5"
      left="5"
      marginTop="5vh"
      marginLeft="5vh"
    >
        <IconButton as={NavLink} to={paths.landingPage}
        aria-label="Left Arrow"
        icon={<FiArrowLeft />}
        borderRadius="50%"
        background= '#ff416c'
        background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
        background= 'linear-gradient(to right, #ff4b2b, #ff416c)' // Change color as needed
        color="white" // Change color as needed
        size="100px"
        w="50px"
        h="50px" // Change size as needed
        _hover={{ textDecor: 'none', borderRadius: "50%",  background: '#d13e60',
                background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                background: 'linear-gradient(to right, #d13600, #d13e60)', 
                textColor: 'white'
            }} // Change hover color as needed
        />
    </Flex>
  )
}
