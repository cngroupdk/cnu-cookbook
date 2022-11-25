import { Box } from '@chakra-ui/react';
import { RecipeCard } from './RecipeCard';

export function RecipeList({ recipes }) {
  return (
    <Box display="flex" gap={10} flexWrap="wrap" justifyContent="center">
      {recipes.length !== 0 &&
        recipes.map(({ _id, title, preparationTime, slug }) => (
          <RecipeCard
            key={_id}
            title={title}
            preparationTime={preparationTime}
            slug={slug}
          />
        ))}
    </Box>
  );
}
