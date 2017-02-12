import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';
import currentCocktail from './currentc_reducer';

const rootReducer = combineReducers({
    cocktails: cocktailsReducer,
    currentCocktail: currentCocktail
})

export default rootReducer
