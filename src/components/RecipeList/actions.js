import { Observable } from 'rxjs';

export const recipeListFetch = () => ({
  type: 'RECIPE_LIST.FETCH',
});

export const recipeListFetchSuccess = (recipes) => ({
  type: 'RECIPE_LIST.FETCH.SUCCESS',
  payload: {
    recipes,
  },
});

export const recipeListFetchFailure = (problem) => ({
  type: 'RECIPE_LIST.FETCH.FAILURE',
  payload: {
    problem,
  },
});


export const fetchRecipeListEpic = (action$, { api }) =>
  action$.ofType('RECIPE_LIST.FETCH').mergeMap(() =>

    Observable.fromPromise(api.get('/recipes'))
      .map(({ data, ok, problem }) => {
        if (!ok) {
          return recipeListFetchFailure(problem);
        }
        return recipeListFetchSuccess(data);
      }),
  );

export const epics = [
  fetchRecipeListEpic,
];
