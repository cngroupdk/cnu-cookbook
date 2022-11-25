import { Card, CardFooter, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function RecipeCard({ item }) {
  const { title, preparationTime, slug } = item;

  return (
    <Link to={`/recept/${slug}`}>
      <Card backgroundColor={preparationTime > 100 ? 'yellow' : undefined}>
        <Image src="/images/food-placeholder.png" />
        <CardFooter>
          <div>{title}</div>
          <div>{preparationTime}</div>
        </CardFooter>
      </Card>
    </Link>
  );
}
