// reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  // Diğer reducer'ları buraya ekleyin
});

export default rootReducer;
