export default function currentCocktail(state={}, action) {
  switch (action.type) {
    case 'GET_COCKTAIL':
    console.log('reducer')
    console.log(action.payload.name);
      return action.payload
    default:
      return state
  }
}
