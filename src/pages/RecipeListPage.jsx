import React, { useState, useEffect } from 'react';
import { Heading, Input, SimpleGrid } from '@chakra-ui/react';
import { RecipeCard } from '../components/RecipeCard';

import '../style.css';

import { api } from '../api';
import { Loader } from '../components/Loader';
import Error from '../components/Error';

const DEFAULT_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export function RecipeListPage() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [searchTerm, setSearchTerm] = useState('');

  const onFetchSuccess = ({ data }) => {
    setState({
      data: data,
      isLoading: false,
      isError: false,
    });
  };

  const onFetchError = (error) => {
    setState({
      data: null,
      isLoading: false,
      isError: true,
    });
  };

  const fetchData = () => {
    setState({
      data: null,
      isLoading: true,
      isError: false,
    });

    api.get('recipes').then(onFetchSuccess).catch(onFetchError);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Heading my={4} color="dodgerblue">
        Recepty Hello world
      </Heading>

      {state.isLoading && <Loader />}
      {state.isError && <Error>Upss chyba ...</Error>}

      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {state.data
          ?.filter(
            (item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              searchTerm === '',
          )
          .map((item) => (
            <RecipeCard key={item._id} item={item} />
          ))}
      </SimpleGrid>
    </>
  );
}
