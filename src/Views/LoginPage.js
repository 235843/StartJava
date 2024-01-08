import React from 'react'
import Sidebar from '../Components/Sidebar'
import LoginComponent from '../Components/LoginComponent'
import { Flex } from '@chakra-ui/react'
import BackButtonComponent from '../Components/BackButtonComponent'

export default function LoginPage() {
  return (
    <React.StrictMode>
        <BackButtonComponent/>
      <Flex h="85vh" >
      
        <LoginComponent/>
      </Flex>
    </React.StrictMode>
  )
}
