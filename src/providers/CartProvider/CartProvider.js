import { createContext, useContext, useReducer } from 'react';
import { initState } from './initState';
import { reducer } from './reducer';

const CartContext = createContext();
const CartActionContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initState);

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
