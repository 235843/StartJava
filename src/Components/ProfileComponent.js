import React from 'react'
import { baseUrl } from '../utils/paths';
import { Text, Stack, Heading, Button, Flex } from '@chakra-ui/react';
import ChangePasswordComponent from './ChangePasswordComponent';

export default function ProfileComponent() {
  const [resultsData, setResultsData] = React.useState({})
  const [changePassword, setChangePassword] = React.useState(false)

  React.useEffect(() => {
    const fetchQuestion = async () => {
      try {
      const authStr = localStorage.getItem('authorization');
      const response = await fetch(baseUrl + '/results', {
          method: 'GET',
          headers: {
          Authorization: authStr,
          'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          const responseData = await response.json();
          setResultsData(responseData);
          console.log(responseData);
      } else {
          
      }
      } catch (error) {
        console.error('Error fetching question:', error);
      }
  };

  fetchQuestion();
  }, [])

  

  return (
    <>
      { changePassword  ? (
        <ChangePasswordComponent setChangePassword={setChangePassword}/>
      ) : (
        <Flex h="0.001vh"/>
      )}

      <Stack spacing={6} textAlign="center">
        <Flex w="100%" justifyContent="space-between">
          <Heading as="h2" fontSize="48px" textAlign="right">
            Twój profil
          </Heading>
          <Button
            marginRight="2.5%"
            alignContent="center"
            background="#ff416c"
            background="-webkit-linear-gradient(to right, #ff4b2b, #ff416c)"
            background="linear-gradient(to right, #ff4b2b, #ff416c)"
            textColor="white"
            _hover={{
              textDecor: 'none',
              background: '#d13e60',
              background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
              background: 'linear-gradient(to right, #d13600, #d13e60)',
            }}
            onClick={() => {
              setChangePassword(true);
            }}
          >
            Zmiana hasła
          </Button>
        </Flex>
        <Text fontSize="20px">
         <strong>Osiągnięte wyniki</strong>
        </Text>
        { resultsData && resultsData.results ? (
            <Stack direction="column" spacing={4} align="center">
            {resultsData.results.map((result, index) => (
              <Flex  h="2vh">
                <Text>
                  {result.category}: <strong>{result.percScore}</strong>
                </Text>
              </Flex>
            ))}
          </Stack>
        ) : (
          <p>Loading...</p>
        )}          
      </Stack>
    </>
  );
}
