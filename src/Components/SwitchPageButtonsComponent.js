import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SwitchPageButtonsComponent({path, id, pageCount}) {
  const prevPage = "Poprzednia strona";
  const nextPage = "Następna strona";
  console.log(pageCount)
  return (
    <Flex justifyContent="space-between">
        {id!==0 && 
            <Button w="13%" as={NavLink} to={path+"?id="+(id-1)}
                background= '#ff416c'
                background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
                background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
                textColor= 'white'
                
                _hover={{ textDecor: 'none',  background: '#d13e60',
                    background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                    background: 'linear-gradient(to right, #d13600, #d13e60)', 
                }} 
            >
                <Text>{prevPage}</Text>
               
            </Button>
        }
        
        {id<(pageCount-1) && 
            <Button w="13%" as={NavLink} to={path+"?id="+(id+1)}
                marginLeft="auto"
                background= '#ff416c'
                background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
                background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
                textColor= 'white'
                _hover={{ textDecor: 'none',  background: '#d13e60',
                    background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                    background: 'linear-gradient(to right, #d13600, #d13e60)', 
                }} 
            >
                <Text>{nextPage}</Text>
               
            </Button>
        }
    </Flex>
  )
}
