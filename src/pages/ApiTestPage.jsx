import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Spinner,
  Center,
  Box,
  Code,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import { api } from '../api';

const DEFAULT_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

export function ApiTestPage() {
  const [{ data, isLoading, error }, setState] = useState(DEFAULT_STATE);
  const [id, setId] = useState('');
  const shouldShowData = !isLoading && data;
  const shouldShowError = !isLoading && error;

  function setFetchingState() {
    setState({
      isLoading: true,
      data: null,
      error: null,
    });
  }

  function onFetchSuccess({ data }) {
    setState({
      isLoading: false,
      data,
      error: null,
    });
  }

  function onFetchFailure({ message }) {
    setState({
      isLoading: false,
      data: null,
      error: message,
    });
  }

  function onLoadList() {
    setFetchingState();
    api.get('/recipes').then(onFetchSuccess).catch(onFetchFailure);
  }

  function onLoadDetail() {
    setFetchingState();
    api.get(`/recipes/${id}`).then(onFetchSuccess).catch(onFetchFailure);
  }

  function onReset() {
    setState(DEFAULT_STATE);
    setId('');
  }

  return (
    <>
      <form>
        <Heading my={4} color="dodgerblue">
          API Test
        </Heading>
        <UnorderedList mb={4}>
          <ListItem>
            <Code>/recipes</Code>
          </ListItem>
          {(data || isLoading) && (
            <ListItem>
              <Code>/recipes/{`{id-or-slug}`}</Code>
            </ListItem>
          )}
        </UnorderedList>
        <HStack spacing={2}>
          <Button onClick={onLoadList}>Load List</Button>
          <Button onClick={onReset}>Reset</Button>
        </HStack>
        {shouldShowData && (
          <VStack mt={4}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Enter Recipe ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={onLoadDetail}
                  disabled={!id}
                >
                  Load
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        )}
      </form>
      {isLoading && (
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
      )}
      {shouldShowError && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <AlertTitle mr={2}>{error}</AlertTitle>
        </Alert>
      )}
      {shouldShowData && (
        <Box as="pre" mt={4}>
          {JSON.stringify(data, null, 2)}
        </Box>
      )}
    </>
  );
}
