import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PlaceholderImage from '../images/food-placeholder.png';

export function RecipeCard({ slug, title, preparationTime }) {
  return (
    <Link to={`/recept/${slug}`}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={PlaceholderImage}
            alt="Food placeholder"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Text color="blue.600" fontSize="2xl">
            {preparationTime}
          </Text>
        </CardFooter>
      </Card>
    </Link>
  );
}
