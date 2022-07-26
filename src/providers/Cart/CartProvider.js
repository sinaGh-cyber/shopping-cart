import { createContext, useContext, useEffect, useReducer } from 'react';
import { GET_CART_DATA_FROM_LOCAL_STORAGE } from './actionTypes';
import { initState } from './initState';
import { reducer } from './reducer';

const cartKey = 'CART_KEY';
const CartContext = createContext();
const CartActionContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem(cartKey));
    if (cartData) {
      dispatch({ type: GET_CART_DATA_FROM_LOCAL_STORAGE, payload: cartData });
    }
  }, []);

  useEffect(() => {
    if (cart.cart.length) {
      localStorage.setItem(cartKey, JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartActionContext.Provider value={dispatch}>
        {children}
      </CartActionContext.Provider>
    </CartContext.Provider>
  );
};

const useCart = () => {
  const cart = useContext(CartContext);
  if (cart) {
    return cart;
  }
  throw Error("CartContext doesn't provided !");
};

const useCartAction = () => {
  const cartAction = useContext(CartActionContext);
  if (cartAction) {
    return cartAction;
  }
  throw Error("CartActionContext doesn't provided !");
};

export { useCart, useCartAction };
export default CartProvider;
