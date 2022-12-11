import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Spacer,
  HStack,
  VStack,
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Textarea,
  Text,
  Box,
} from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { api } from '../api';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

export function EditRecipe({ title, preparationTime, sideDish }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [inputName, setInputName] = useState(title);
  const inputTime = preparationTime;
  const inputDish = sideDish;
  const [detail, setDetail] = useState('');

  const isError = inputName === '';

  const handler = () => {
    if (isError) {
      return;
    }
  };

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

  console.log('location state', location.state);

  return (
    <FormControl onSubmit={handler}>
      <VStack marginBottom={5}>
        <HStack>
          <Button>Uložit</Button>

          <Button spacing={10} onClick={() => navigate('/')}>
            Zpět
          </Button>
        </HStack>
      </VStack>
      <HStack spacing={3} marginBottom={5}>
        <Input
          isInvalid={isError}
          defaultValue={location.state.title}
          placeholder="Název"
        />
        {!isError ? (
          <FormHelperText>Pojmenuj pokrm pro lehčí vyhledávání.</FormHelperText>
        ) : (
          <FormHelperText>Název je požadován.</FormHelperText>
        )}
      </HStack>

      <Spacer />
      <HStack width={'1000px'}>
        <VStack spacing={3} alignContent={'space-between'}>
          <Heading as="h2" size="md">
            Základní údaje
          </Heading>

          <FormLabel>Doba přípravy v minutách</FormLabel>
          <NumberInput
            value={preparationTime}
            defaultValue={location.state.preparationTime}
            width={300}
            max={99999999}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <FormLabel>Počet porcí</FormLabel>
          <NumberInput width={300} max={99999999} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Text>Příloha</Text>
          <Input
            htmlSize={5}
            width={'300px'}
            defaultValue={location.state.sideDish}
            placeholder="Název"
          />
        </VStack>

        <VStack spacing={3}>
          <Heading as="h2" size="md">
            Ingredience
          </Heading>
          <FormLabel>Množství</FormLabel>
          <NumberInput width={300} max={99999999} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Input htmlSize={5} width={'300px'} placeholder="Jednotka" />
          <Input
            htmlSize={5}
            width={'300px'}
            placeholder="Název ingredience"
            defaultValue={location.state.ingredients}
          />
        </VStack>

        <VStack>
          <Heading as="h2" size="md">
            Postup
          </Heading>
          <Textarea
            width={500}
            defaultValue={location.state.directions}
            height={'500px'}
            placeholder="Napiš postup:"
          />
        </VStack>
      </HStack>
    </FormControl>
  );
}
