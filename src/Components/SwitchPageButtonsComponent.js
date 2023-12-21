import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SwitchPageButtonsComponent({path, id}) {
  const [isFirstPage, setIsFirstPage] = React.useState(true);
  const prevPage = "Poprzednia strona";
  const nextPage = "Następna strona";

  React.useEffect(() => {
    if (id!==0) {
        setIsFirstPage(false);
    }
  }, []);

  return (
    <Flex justifyContent="space-between">
        {!isFirstPage && 
            <Button w="13%" as={NavLink} to={path}
                background= '#ff416c'
                background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
                background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
                textColor= 'white'
                
                _hover={{ textDecor: 'none',  background: '#d13e60',
                    background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                    background: 'linear-gradient(to right, #d13600, #d13e60)', 
                }} 
            >
                <NavLink to={path+"?id="+(id-1)}>{prevPage}</NavLink>
               
            </Button>
        }

        {true && 
          
            <Button w="13%" as={NavLink} to={path}
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
                <NavLink to={path+"?id="+(id+1)}>{nextPage}</NavLink>
               
            </Button>
        }
    </Flex>
  )
}
