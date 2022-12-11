import { useState, useEffect } from 'react';

import { EditRecipe } from '../components/EditRecipe';
import { api } from '../api';
import { Box, Heading } from '@chakra-ui/react';

export function EditRecipePage() {
  const [editRecipe, setEditRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    function getEditRecipe() {
      setIsLoading(true);
      api
        .get('/components/editRecipe')
        .then((response) => setEditRecipe(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
    getEditRecipe();
  }, []);

  return (
    <Box px={4}>
      <Heading as="h1" style={{ textAlign: 'left' }}>
        Editace receptu
      </Heading>

      <div className="mt-4">
        <EditRecipe editRecipe />
      </div>
    </Box>
  );
}
