import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function InformationComponent({info}) {
  if(!info || info===""){
    return null;
  }
  const infoBoxStyle = {
    backgroundColor: '#FFFFCC',
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid #FFD700',
    
  };

  const lines = info.split('\n')

  return (
    <>
        <Box sx={infoBoxStyle}>
        <ul >
          {lines.map((line, index) => {
            const parts = line.split(/(\{.*?\})/).map((part, idx) => {
              if (part.startsWith('{') && part.endsWith('}')) {
                return <strong key={idx}>{part.slice(1, -1)}</strong>;
              }
              return part;
            });

            return <li key={index}>{parts}</li>;
          })}
        </ul>
        </Box>
    </>
  );
}

export default InformationComponent;