import { useEffect, useState } from 'react';
import { Box, Heading, Text, Input } from '@chakra-ui/react';
import { api } from '../api.js';
import { LoadingSpinner } from '../components/LoadingSpinner.jsx';
import { RecipeList } from '../components/RecipeList';
import { Button } from '@chakra-ui/react';
import { Routes, useNavigate } from 'react-router-dom';

export function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    function getRecipes() {
      setIsLoading(true);
      api
        .get('/recipes')
        .then((response) => setRecipes(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
    getRecipes();
  }, []);
  function handleInputValueChange(event) {
    setSearchValue(event.currentTarget.value);
  }

  const fillteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Box px={5}>
      <Heading my={2} color="dodgerblue">
        Recepty {''}
        <Button spacing={10} onClick={() => navigate('/new')}>
          Nový recept
        </Button>
        <Routes></Routes>
      </Heading>
      <Input
        placeholder="Hledej"
        value={searchValue}
        onChange={handleInputValueChange}
      />

      {isLoading && <LoadingSpinner />}
      {error && <Text>{error}</Text>}
      <RecipeList recipes={fillteredRecipes} />
    </Box>
  );
}
