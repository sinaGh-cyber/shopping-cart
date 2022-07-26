import { NavLink } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartSummery from '../../components/CartSummery/CartSummery';
import Layout from '../../Layout/Layout';
import { useCart } from '../../providers/Cart/CartProvider';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './CartPage.module.css';

const $ = modularClassNamer(styles);

const CartPage = () => {
  const shoppingCart = useCart();

  if (!shoppingCart.cart.length) {
    return (
      <Layout>
        <div className={$`cart-page container`}>
          <NavLink to={'/'}>
            <button className="btn btn--primary">
              Cart is empty, go shopping...
            </button>
          </NavLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={$`cart-page container`}>
        <div className={$`cart-wrapper`}>
          <section className={$`product`}>
            {' '}
            <ul className={$`product__list`}>
              {shoppingCart.cart.map((productInfo) => (
                <CartItem key={productInfo.id} productInfo={productInfo} />
              ))}
            </ul>
          </section>
          <CartSummery />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
