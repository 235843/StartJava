import React from 'react'
import { paths } from '../utils/paths';
import { Navigate } from "react-router-dom";
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function ResultComponent({category, result, time}) {
  const [redirectTo, setRedirectTo] = React.useState(null);

  

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  const testTime = formatTime(Math.round((Date.now() - time) / 1000));

  const handleTryAgain = () => {
    window.location.reload();
  };

  const handleBack = async () => {
    setRedirectTo('/');
    return <Navigate replace to={paths.landingPage} />
  };

  if (redirectTo) {
    window.location.href = redirectTo;
    return null; // Prevent rendering LoginComponent after redirection
  }

  return (
    <>
      <Stack spacing={6} textAlign="center">
        <Heading as="h2" fontSize="48px" textAlign="left">
          {category}
        </Heading>
        <Heading fontSize="32px">
          Rezultat
        </Heading>
        <Text fontSize="20px">
          Liczba poprawnych odpowiedzi: <strong>{result.score.split('/')[0]}</strong> spośród <strong>{result.score.split('/')[1]}</strong> pytań
        </Text>
        <Text fontSize="20px">
          Ostateczny wynik: <strong>{result.percentScore}</strong>
        </Text>
        <Text fontSize="20px">
         <strong>Czas: {testTime}</strong>
        </Text>
        
        <Text />
          <Flex  w="100%" justify="center" >
            <Button  onClick={handleTryAgain}
              marginRight="2.5%"
              alignContent="center" 
              background= '#ff416c'
              background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
              background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
              textColor= 'white'
              _hover={{ textDecor: 'none',  background: '#d13e60',
                background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                background: 'linear-gradient(to right, #d13600, #d13e60)', 
              }} >
              Powtórz test
            </Button>
            <Button  onClick={handleBack}
              marginLeft="2.5%" 
              background= '#ff416c'
              background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
              background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
              textColor= 'white'
              _hover={{ textDecor: 'none',  background: '#d13e60',
                background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                background: 'linear-gradient(to right, #d13600, #d13e60)', 
              }} >
              Powrót
            </Button>
          </Flex>
          
      </Stack>
    </>
  )
}
