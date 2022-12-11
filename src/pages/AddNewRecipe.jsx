import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { NewRecipe } from '../components/NewRecipe';
import { api } from '../api';
import { Box, Heading } from '@chakra-ui/react';

export function AddNewRecipe() {
  const [newRecipe, setNewRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    function getNewRecipe() {
      setIsLoading(true);
      api
        .get('/components/newRecipe')
        .then((response) => setNewRecipe(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
    getNewRecipe();
  }, []);

  return (
    <Box px={4}>
      <Heading as="h1" style={{ textAlign: 'left' }}>
        Nový recept
      </Heading>

      <div className="mt-4">
        <NewRecipe newRecipe />
      </div>
    </Box>
  );
}
