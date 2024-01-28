import { Button, Table, Thead, Tbody, Tr, Th, Td  } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { baseUrl } from '../utils/paths';
import { useToast } from '@chakra-ui/react';

export default function AdminComponent() {
  const [userData, setUserData] = React.useState({});
  const toast = useToast();
  const toastIdRef = React.useRef();

  const toggleUser = async (email, status) => {
    try {
      const authStr = localStorage.getItem('authorization');
      const response = await fetch(baseUrl + '/admin/toggleUser', {
          method: 'PATCH',
          headers: {
            Authorization: authStr,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            blocked: status
          })
      });

      if (response.ok) {
          const responseData = await response.json();
          toastIdRef.current = toast({ 
            title: 'Sukces',
            description: "Pomyślnie zmieniono status użytkownika: " + email,
            status: 'success',
            duration: 2000,
            isClosable: true
        })
          console.log(responseData);
      } else {
          
      }
    } catch (error) {
      console.error('Error fetching question:', error);
    }
    const newUserData = {
      users: [
        ...userData.users
      ]
    }
    newUserData.users.find(u => u.email === email).blocked = !status;
    setUserData(newUserData);
  }

  React.useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const authStr = localStorage.getItem('authorization');
        const response = await fetch(baseUrl + '/admin/getUsers', {
            method: 'GET',
            headers: {
            Authorization: authStr,
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const responseData = await response.json();
            setUserData(responseData);
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
      { userData && userData.users && userData.users[0] ? (
         <Table variant="striped" colorScheme="gray" borderWidth="1px" borderColor="gray.300">
         <Thead>
           <Tr>
             <Th>Email</Th>
             <Th>Status</Th>
             <Th></Th>
           </Tr>
         </Thead>
         <Tbody>
           {userData.users.map((item, index) => (
             <Tr key={index}>
               <Td>{item.email}</Td>
               <Td w="45%">{item.blocked ? (
                  "Zablokowane konto"
                ) : (
                  "Aktywne konto"
                )}
                </Td>
               <Td>
                <Button colorScheme='red' onClick={() => {
                  toggleUser(item.email, item.blocked)
                }}>{item.blocked ? ( 
                    "Odblokuj"
                  ) : ( 
                    "Zablokuj"
                  )}
                </Button>
              </Td>
            </Tr>
           ))}
         </Tbody>
       </Table>
      ) : (
        <></>
      )}
    </>
  )
}
