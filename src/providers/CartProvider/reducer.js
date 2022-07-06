import { ADD_TO_CART } from './actionTypes';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const cartColone = [...state.cart];
      const currentProductIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );
      let currentProduct = cartColone[currentProductIndex];
      currentProductIndex >= 0
        ? (currentProduct = {
            ...currentProduct,
            quantity: currentProduct.quantity + 1,
          })
        : cartColone.push({ ...payload, quantity: 1 });

      return {
        ...state,
        cart: cartColone,
        total: state.total + payload.price,
      };
    }

    default:
      throw Error(
        `action type "${type}" is  unknown, this error occurred in cart reducer`
      );
  }
};
