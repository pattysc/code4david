const defaultCocktails = [{id: 1, name: 'Gin and Tonic'}, {id: 2, name: 'Old Fashioned'}, {id: 3, name: 'Negroni'}, {id: 4, name: 'Roy Rogers'}];

export function fetchCocktails(){
  return {
      type: 'FETCH_COCKTAILS',
      payload: defaultCocktails
  }
}

export function currentCocktail(cocktail) {
  return {
      type: 'GET_COCKTAIL',
      payload: cocktail
  }
}
