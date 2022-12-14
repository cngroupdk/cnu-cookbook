import { useMemo, useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Divider,
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
  Tooltip,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

import { api } from '../api';

const DEFAULT_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

const DUMMY_RECIPE = {
  title: 'Skvělá pochoutka',
  preparationTime: 2,
  servingCount: 10,
  sideDish: 'nic',
  directions:
    'Otevřete sáček brambůrků a vysypejte do misky. Tadá a je hotovo!',
  ingredients: [
    {
      name: 'Sáček brambůrků',
      amount: 1,
      amountUnit: 'ks',
      isGroup: false,
    },
  ],
};

function RestEndpoint({ path, method, handlers, children, parameterName }) {
  const [parameterValue, setParameterValue] = useState('');

  const colorSchemes = {
    GET: 'twitter',
    POST: 'green',
    DELETE: 'red',
  };

  const colorScheme = colorSchemes[method];
  const handler = handlers[method];

  return (
    <HStack spacing={1}>
      <Code>
        {path}
        {parameterName && (
          <Input
            border="none"
            size="xs"
            type="text"
            placeholder={parameterName}
            value={parameterValue}
            onChange={(e) => setParameterValue(e.target.value)}
            width="16rem"
          />
        )}
      </Code>
      <Code
        as="button"
        type="button"
        colorScheme={parameterName && !parameterValue ? 'gray' : colorScheme}
        variant={parameterName && !parameterValue ? 'outline' : undefined}
        disabled={parameterName && !parameterValue}
        onClick={() =>
          handler(parameterName ? `${path}${parameterValue}` : path)
        }
      >
        {method}
      </Code>
      {children}
    </HStack>
  );
}

export function ApiTestPage() {
  const [{ data, isLoading, error }, setState] = useState(DEFAULT_STATE);

  const shouldShowData = !isLoading && data;
  const shouldShowError = !isLoading && error;

  const sessionRecipe = useMemo(() => {
    const sessionSeed = new Date().getTime().toString();
    return {
      ...DUMMY_RECIPE,
      title: `${DUMMY_RECIPE.title}-${sessionSeed}`,
    };
  }, []);

  function setLoading() {
    setState({
      isLoading: true,
      data: null,
      error: null,
    });
  }

  function onRequestSuccess({ data }) {
    setState({
      isLoading: false,
      data,
      error: null,
    });
  }

  function onRequestFailure({ message }) {
    setState({
      isLoading: false,
      data: null,
      error: message,
    });
  }

  const handleRequest = (method) => (path) => {
    setLoading();
    const payload = method === 'post' ? sessionRecipe : undefined;
    api[method](path, payload).then(onRequestSuccess).catch(onRequestFailure);
  };

  const handlers = {
    GET: handleRequest('get'),
    POST: handleRequest('post'),
    DELETE: handleRequest('delete'),
  };

  function handleReset() {
    setState(DEFAULT_STATE);
  }

  const tooltip = (
    <Tooltip label={'Data: ' + JSON.stringify(sessionRecipe)}>
      <InfoIcon />
    </Tooltip>
  );

  return (
    <>
      <form>
        <Heading my={4} color="dodgerblue">
          API Test
        </Heading>
        <UnorderedList mb={4}>
          <ListItem>
            <RestEndpoint path="/recipes" method="GET" handlers={handlers} />
          </ListItem>
          <ListItem>
            <RestEndpoint
              path="/recipes/"
              method="GET"
              handlers={handlers}
              parameterName="id-or-slug"
            />
          </ListItem>
          <ListItem>
            <RestEndpoint path="/recipes" method="POST" handlers={handlers}>
              {tooltip}
            </RestEndpoint>
          </ListItem>
          <ListItem>
            <RestEndpoint
              path="/recipes/"
              method="POST"
              handlers={handlers}
              parameterName="id"
            >
              {tooltip}
            </RestEndpoint>
          </ListItem>
          <ListItem>
            <RestEndpoint
              path="/recipes/"
              method="DELETE"
              handlers={handlers}
              parameterName="id"
            />
          </ListItem>
          <ListItem>
            <RestEndpoint
              path="/recipes/ingredients"
              method="GET"
              handlers={handlers}
            />
          </ListItem>
          <ListItem>
            <RestEndpoint
              path="/recipes/side-dishes"
              method="GET"
              handlers={handlers}
            />
          </ListItem>
        </UnorderedList>
        <Button onClick={handleReset}>Reset</Button>
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
          <Divider mb={4} />
          {JSON.stringify(data, null, 2)}
        </Box>
      )}
    </>
  );
}
