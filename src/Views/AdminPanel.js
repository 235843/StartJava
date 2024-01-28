import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { paths } from '../utils/paths';
import AdminComponent from '../Components/AdminComponent';


export default function AdminPanel() {
  const authorization = localStorage.getItem('authorization');
  const role = localStorage.getItem('role');
  const [redirectTo, setRedirectTo] = React.useState(null);

  React.useEffect(() => {
    if (!authorization || role !== "ROLE_ADMIN") {
      setRedirectTo(paths.landingPage);
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
            <AdminComponent />
        </Box>
      </Flex>
    </React.StrictMode>
  )
}
