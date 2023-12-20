import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Router from "./Routing/Router";

function App() {

  const [client] = useState();

  return (
    <ChakraProvider>
      <Router/>
    </ChakraProvider>
  )
}
  

export default App;