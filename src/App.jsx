import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AppLayout } from './components/AppLayout';
import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { AddNewRecipe } from './pages/AddNewRecipe';
import { EditRecipePage } from './pages/EditRecipePage';

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<RecipeListPage />} />
            <Route path="/recept/:slug" element={<RecipeDetailPage />} />
            <Route path="/api-test" element={<ApiTestPage />} />
            <Route path="/new" element={<AddNewRecipe />} />
            <Route path="/edit" element={<EditRecipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </ChakraProvider>
    </BrowserRouter>
  );
}
