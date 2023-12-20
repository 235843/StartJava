import React from 'react'
import { Box} from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


function CodeSampleComponent({ code }) {
    if (!code || code === "") {
      return null;
    }

    return (
      <Box bg="gray.100" p="4" borderRadius="md">
        <SyntaxHighlighter language="java" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </Box>
    );
}

export default CodeSampleComponent