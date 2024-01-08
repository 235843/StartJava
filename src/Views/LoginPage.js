import React from 'react'
import Sidebar from '../Components/Sidebar'
import LoginComponent from '../Components/LoginComponent'
import { Flex } from '@chakra-ui/react'

export default function LoginPage() {
  return (
    <React.StrictMode>
      <Flex w="61%" >
        <Sidebar/>
      </Flex>
        <LoginComponent/>
      
    </React.StrictMode>
  )
}
