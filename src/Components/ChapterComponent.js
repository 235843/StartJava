import React from 'react'
import { Divider, Text, Flex } from '@chakra-ui/react'
import NavItem from './NavItem'

export default function ChapterComponent({title, data, path}) {
  return (
    <div style={{width: "100%", background: '#d13e60',
      background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
      background: 'linear-gradient(to right, #d13600, #d13e60)'}}
    >
      <Text fontSize="22px" textColor="white" marginLeft="8px" >{title}</Text>
        {data.map((elem, index)  => 
            <>
              <NavItem title={elem} path={path+"?id="+index}/>
              <Divider />
            </>
        )}
    </div>
  )
}
