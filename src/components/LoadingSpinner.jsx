import { Center, VStack, Text, Spinner } from '@chakra-ui/react';

export function LoadingSpinner() {
  return (
    <Center h="300px">
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text>Loading</Text>
      </VStack>
    </Center>
  );
}
