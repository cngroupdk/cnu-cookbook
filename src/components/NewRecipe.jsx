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
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Routes, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

export function NewRecipe() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');

  const handleInputName = (e) => setInputName(e.target.value);

  const [inputTime, setInputTime] = useState('');

  const [inputDish, setInputDish] = useState('');
  const handleInputDish = (e) => setInputDish(e.target.value);

  const [inputDirections, setInputDirections] = useState('');
  const handleInputDirections = (e) => setInputDirections(e.target.value);

  const isError = inputName === '';

  const handler = () => {
    if (isError) {
      return;
    }
    axios({
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
  };

  return (
    <FormControl onSubmit={handler}>
      <VStack marginBottom={5}>
        <HStack>
          <Button onClick={handler} type={'submit'}>
            Uložit
          </Button>
          <Button spacing={10} onClick={() => navigate('/')}>
            Zpět
          </Button>
        </HStack>
      </VStack>
      <HStack spacing={3} marginBottom={5}>
        <Input
          isInvalid={isError}
          value={inputName}
          onChange={handleInputName}
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
            value={inputTime}
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
            value={inputDish}
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
          <Input htmlSize={5} width={'300px'} placeholder="Název ingredience" />
        </VStack>

        <VStack>
          <Heading as="h2" size="md">
            Postup
          </Heading>
          <Textarea
            width={500}
            height={'500px'}
            value={inputDirections}
            onChange={handleInputDirections}
            placeholder="Napiš postup:"
          />
        </VStack>
      </HStack>
    </FormControl>
  );
}
