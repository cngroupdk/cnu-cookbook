import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Heading, VStack, Button } from '@chakra-ui/react';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Center h="calc(100vh - 200px)">
      <VStack>
        <Heading as="h1">🔍 Nenalezeno!</Heading>
        <Heading as="h2" size="md">
          Toto není stránka, kterou hledáš.
        </Heading>
        <div className="mt-4">
          <Button onClick={() => navigate('/')}>
            Přejít na domovskou stránku
          </Button>
        </div>
      </VStack>
    </Center>
  );
}
