import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';

const DEFAULT_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [state, setState] = useState(DEFAULT_STATE);

  const onFetchSuccess = ({ data }) => {
    setState({
      data, // same as data: data
      isLoading: false,
      isError: false,
    });
  };

  const onFetchError = () => {};

  const fetchData = () => {
    setState({
      data: null,
      isLoading: true,
      isError: false,
    });

    api
      .get('recipes/' + slug)
      .then(onFetchSuccess)
      .catch(onFetchError);
  };

  useEffect(fetchData, []);

  console.log('Params', slug);

  if (!state.data) {
    return null;
  }

  return (
    <>
      <div>Nadpis</div>
      <div>Detail receptu {state.data.title}</div>
      <div>Time {state.data.preparationTime}</div>
      {state.data.ingredients.map((ingredient) => (
        <div>
          {ingredient.amount || 'N/A'} {ingredient.amountUnit} {ingredient.name}
        </div>
      ))}
    </>
  );
}
