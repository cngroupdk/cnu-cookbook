import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react';

export default function Error({ children }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
}
