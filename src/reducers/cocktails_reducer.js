function cocktailsReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_COCKTAILS':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default cocktailsReducer
