import {
  ADD_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from './actionTypes';

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const incrementProductQuantity = (payload) => {
  return { type: INCREMENT_PRODUCT_QUANTITY, payload };
};

export const removeFromCart = (payload) => {
  return { type: REMOVE_FROM_CART, payload };
};

export const decrementProductQuantity = (payload) => {
  return { type: DECREMENT_PRODUCT_QUANTITY, payload };
};
