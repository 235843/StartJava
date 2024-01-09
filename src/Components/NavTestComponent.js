import React from 'react'
import NavItem from './NavItem'
import { paths } from '../utils/paths'
import { Divider, Text } from '@chakra-ui/react'

export default function NavTestComponent() {
  return (
    <div style={{width: "100%", background: '#d13e60',
      background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
      background: 'linear-gradient(to right, #d13600, #d13e60)'}}
    >
      <Text fontSize="22px" textColor="white" marginLeft="8px" >Testy</Text>
      <NavItem title="Podstawy Javy" path={paths.basicsTest}/>
      <Divider />
      <NavItem title="Metody w Javie" path={paths.methodsTest}/>
      <Divider />
      <NavItem title="Klasy w Javie" path={paths.classesTest}/>
      <Divider />
      <NavItem title="Obsługa plików w Javie" path={paths.fileTest}/>
      <Divider />
      <NavItem title="Test końcowy" path={paths.endTest}/>
      <Divider />
    </div>
  )
}
