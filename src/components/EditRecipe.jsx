import {
  FormControl,
  FormLabel,
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
} from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { api } from '../api';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

export function EditRecipe({
  title,
  preparationTime,
  sideDish,
  directions,
  ingredients,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [detail, setDetail] = useState('');
  const { slug } = useParams();
  const [inputName, setInputName] = useState('');

  const handleInputName = (e) => setInputName(e.target.value);

  const [inputTime, setInputTime] = useState('');

  const [inputDish, setInputDish] = useState('');
  const handleInputDish = (e) => setInputDish(e.target.value);

  const [inputDirections, setInputDirections] = useState('');
  const handleInputDirections = (e) => setInputDirections(e.target.value);

  const [inputIngredients, setInputIngredients] = useState('');
  const handleInputIngredients = (e) => setInputIngredients(e.target.value);

  const isError = inputName === '';

  const handler = () => {
    if (isError) {
      return;
    }
  };

  /*axios({
    method: 'post',
    url: 'https://exercise.cngroup.dk/api/recipes',
    data: {
      title: inputName,
      preparationTime: inputTime,
      directions: inputDirections,
      sideDish: inputDish,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
*/

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

  return (
    <FormControl onSubmit={handler}>
      <VStack marginBottom={5}>
        <HStack>
          <Button>Uložit</Button>

          <Button spacing={10} onClick={() => navigate('/')} type={'submit'}>
            Zpět
          </Button>
        </HStack>
      </VStack>
      <HStack spacing={3} marginBottom={5}>
        <Input
          isInvalid={isError}
          onChange={handleInputName}
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
            onChange={setInputTime}
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
            onChange={handleInputDish}
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
            onChange={handleInputIngredients}
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
            onChange={handleInputDirections}
            height={'500px'}
            placeholder="Napiš postup:"
          />
        </VStack>
      </HStack>
    </FormControl>
  );
}
