import React from 'react'
import { Link } from '@chakra-ui/react';

export default function UrlComponent({url}) {
  if (url === ""){
    return null;
  }  
  return (
    <Link href={url} isExternal>
      {url}
    </Link>
  );
}