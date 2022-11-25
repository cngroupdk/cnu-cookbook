import { useState, useEffect } from 'react';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function RecipeDetailPage() {
  const { slug } = useParams();

  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getRecipeDetail() {
      setIsLoading(true);

      api
        .get(`/recipes/${slug}`)
        .then((response) => setDetail(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }

    getRecipeDetail();
  }, [slug]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <>
      {detail && (
        <Box px={5}>
          <Heading>{detail.title}</Heading>
          <Box display="flex" justifyContent="space-between" mt={10}>
            <Box>
              <Text mb={2}>{detail.preparationTime} min</Text>
              {detail.ingredients && (
                <List mb={2}>
                  {detail.ingredients.map((ingredient) => (
                    <ListItem
                      key={ingredient._id}
                    >{`${ingredient.amount} ${ingredient.amountUnit}   ${ingredient.name}`}</ListItem>
                  ))}
                </List>
              )}
              <Text>{detail.lastModifiedDate}</Text>
            </Box>
            {detail.directions && <Text ml={20}>{detail.directions}</Text>}
          </Box>
        </Box>
      )}
    </>
  );
}
