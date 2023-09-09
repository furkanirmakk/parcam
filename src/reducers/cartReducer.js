// reducers/cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/cartActions';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        ...action.payload,
        quantity: 1, // Initial quantity
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
