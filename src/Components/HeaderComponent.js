import React from 'react'
import { Box, Heading, Text, Code, Link, Flex } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, nord } from 'react-syntax-highlighter/dist/esm/styles/prism';


function HeaderComponent({ title, description }) {
  const lines = description.split("\n");

  return (
    <>
      <Heading as="h2" size="lg" mb="4">
        {title}
      </Heading>
      {lines.map((line, index) => {
          const parts = line.split(/(\{.*?\})/).map((part, idx) => {
          if (part.startsWith('{') && part.endsWith('}')) {
            return <strong key={idx}>{part.slice(1, -1)}</strong>;
          }
          return part;
        });

        return <p key={index}>{parts}</p>;
      })}
      
    </>
  );
}

export default HeaderComponent;
