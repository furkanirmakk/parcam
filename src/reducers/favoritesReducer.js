// reducers/favoritesReducer.js
const initialState = {
    favorites: [],
  };
  
  const favoritesReducer = (state = initialState, action) => {
    console.log("state.favorites");
    console.log(state.favorites);
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(item => item !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  