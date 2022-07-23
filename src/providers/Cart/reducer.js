import {
  ADD_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from './actionTypes';
import { toast } from 'react-toastify';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const cartColone = [...state.cart];
      const currentProductIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (currentProductIndex > -1)
        throw Error(
          `this product already exist in cart. \n product: ${payload}`
        );

      cartColone.push({ ...payload, quantity: 1 });

      toast.success(` ${payload.name} added to cart.`, {
        toastId: `${payload.id}success`,
      });
      return {
        ...state,
        cart: cartColone,
        total: state.total + payload.price,
        offPrice: state.offPrice + payload.offPrice,
      };
    }

    case INCREMENT_PRODUCT_QUANTITY: {
      const cartColone = [...state.cart];
      const currentProductIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (currentProductIndex < 0)
        throw Error(
          `this product doesn't exist in cart. \n product: ${payload}`
        );

      let currentProduct = cartColone[currentProductIndex];
      cartColone[currentProductIndex] = {
        ...currentProduct,
        quantity: currentProduct.quantity + 1,
      };

      return {
        ...state,
        cart: cartColone,
        total: state.total + payload.price,
        offPrice: state.offPrice + payload.offPrice,
      };
    }

    case REMOVE_FROM_CART: {
      const cartColone = [...state.cart];
      let willBeRemovedProductData;

      const filteredCartArray = cartColone.filter((prod) => {
        if (prod.id !== payload.id) {
          return true;
        }
        willBeRemovedProductData = { ...prod };
        return false;
      });

      toast.info(`${payload.name} removed from cart.`, {
        toastId: `${payload.id}remove`,
      });

      return {
        ...state,
        cart: filteredCartArray,
        total:
          state.total -
          willBeRemovedProductData.price * willBeRemovedProductData.quantity,
        offPrice:
          state.offPrice -
          willBeRemovedProductData.offPrice * willBeRemovedProductData.quantity,
      };
    }

    case DECREMENT_PRODUCT_QUANTITY: {
      const cartColone = [...state.cart];
      const currentProductIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (currentProductIndex < 0)
        throw Error(
          `this product doesn't exist in cart. \n product: ${payload}`
        );
      const productItemColon = { ...cartColone[currentProductIndex] };
      productItemColon.quantity--;
      cartColone[currentProductIndex] = productItemColon;

      return {
        ...state,
        cart: cartColone,
        total: state.total - payload.price,
        offPrice: state.offPrice - payload.offPrice,
      };
    }

    default:
      throw Error(
        `action type "${type}" is  unknown, this error occurred in cart reducer`
      );
  }
};
