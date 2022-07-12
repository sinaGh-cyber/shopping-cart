import { NavLink } from 'react-router-dom';
import { useCart } from '../../providers/CartProvider/CartProvider';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './CartPage.module.css';

const $ = modularClassNamer(styles);

const CartPage = () => {
  const shoppingCart = useCart();

  if (!shoppingCart.cart.length) {
    return (
      <div className={$`cart-page container`}>
        <NavLink to={'/'}>
          <button className="btn btn--primary">
            Cart is empty, go shopping...
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className={$`cart-page container`}>
      <div className={$`cart-wrapper`}>
        <section className={$`product`}>
          {' '}
          <ul className={$`product__list`} >
            {shoppingCart.cart.map((product) => (
              <li className={$`product__item`}  key={product.id}>{product.name}</li>
            ))}
          </ul>
        </section>
        <section className={$`cart-summery`}></section>
      </div>
    </div>
  );
};

export default CartPage;
