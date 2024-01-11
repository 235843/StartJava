import React from 'react'
import LoginComponent from '../Components/LoginComponent'
import { Flex } from '@chakra-ui/react'
import BackButtonComponent from '../Components/BackButtonComponent'
import { Navigate } from 'react-router-dom';
import { paths } from '../utils/paths';

export default function LoginPage() {
  const authorization = localStorage.getItem('authorization');
  const role = localStorage.getItem('role');
  const [redirectTo, setRedirectTo] = React.useState(null);

  React.useEffect(() => {
    if (authorization && role) {
      setRedirectTo(paths.landingPage);
    }
  }, [authorization, role]);

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <React.StrictMode>
        <BackButtonComponent/>
      <Flex h="85vh" >
      
        <LoginComponent/>
      </Flex>
    </React.StrictMode>
  )
}
