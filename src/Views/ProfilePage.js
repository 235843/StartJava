import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { paths } from '../utils/paths';
import { Box, Divider, Flex } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import ProfileComponent from '../Components/ProfileComponent';

export default function ProfilePage(){
    const authorization = localStorage.getItem('authorization');
    const role = localStorage.getItem('role');
    const [redirectTo, setRedirectTo] = React.useState(null);
  
    React.useEffect(() => {
      if (!authorization || !role) {
        setRedirectTo(paths.signIn);
      }
    }, [authorization, role]);
  
    if (redirectTo) {
      return <Navigate to={redirectTo} replace />;
    }


  return (
    <React.StrictMode>
      <Navbar/>
      <Flex w='95%'  position= 'absolute' marginLeft="20px" >
        <Sidebar/>
        <Box borderWidth="1px" borderRadius="lg" p="6" m="4" minWidth="80%" >
          <ProfileComponent />
        </Box>
      </Flex>
    </React.StrictMode>
  )
}