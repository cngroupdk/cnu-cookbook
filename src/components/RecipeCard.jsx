import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import PlaceholderImage from '../images/food-placeholder.png';

export function RecipeCard({ slug, title, preparationTime, sideDish }) {
  return (
    <Link to={`/recept/${slug}`}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={PlaceholderImage}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <HStack>
            <Text color="blue.600" fontSize="2xl">
              {preparationTime}
            </Text>

            <Text color="black" fontSize="xl" fontStyle="italic">
              {sideDish}
            </Text>
          </HStack>
        </CardFooter>
      </Card>
    </Link>
  );
}
