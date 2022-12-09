import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  HStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import Axios from 'axios';
import { Routes, useNavigate } from 'react-router-dom';
import { format, compareAsc } from 'date-fns';

export function RecipeDetailPage() {
  const { slug } = useParams();

  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  const postDelete = (_id) => {
    Axios.delete(`https://exercise.cngroup.dk/api/recipes/${detail._id}`);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  if (detail?.preparationTime) {
    detail.preparationTime =
      [Math.floor(detail.preparationTime / 60)] +
      ' h ' +
      [detail.preparationTime % 60] +
      ' min';
  }

  return (
    <Box px={5}>
      {detail && (
        <>
          <Heading>{detail.title}</Heading>
          <HStack>
            <Button onClick={() => navigate('/edit')}>Upravit</Button>
            <Button
              onClick={() => {
                postDelete();
                navigate('/');
              }}
            >
              Smazat
            </Button>
          </HStack>
          <Box display="flex" justifyContent="space-between" mt={10}>
            <Box>
              <Text mb={2}>{detail.preparationTime} </Text>
              {detail.ingredients && (
                <List mb={2}>
                  {detail.ingredients.map((ingredient) => (
                    <ListItem
                      key={ingredient._id}
                    >{`${ingredient.amount} ${ingredient.amountUnit}   ${ingredient.name}`}</ListItem>
                  ))}
                </List>
              )}
              <Text>{format(new Date(detail.lastModifiedDate), 'P')}</Text>
            </Box>
            {detail.directions && <Text ml={20}>{detail.directions}</Text>}
          </Box>
        </>
      )}
    </Box>
  );
}
