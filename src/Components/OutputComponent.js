import React from 'react'
import { Box, Heading, Text, Code, Link } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, console } from 'react-syntax-highlighter/dist/esm/styles/prism';


function OutputComponent({ output }) {
    if(!output || output===""){
      return null;
    }

    const consoleStyle = {
        backgroundColor: '#333b3c',
        color: '#E1D9D1',
        fontFamily: 'monospace',
        padding: '10px',
        borderRadius: '5px',
        lineHeight: '1.5',
        fontSize: '14px',
        overflowX: 'auto',
      };
    
    return (
        <>
          <Text size="lg">Wynik z konsoli</Text>
          <pre style={consoleStyle}>{output}</pre>
        </>
    );
    
}

export default OutputComponent