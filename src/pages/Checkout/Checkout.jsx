import Layout from '../../Layout/Layout';
import { useAuth } from '../../providers/Auth/AuthProvider';
import { useCart } from '../../providers/Cart/CartProvider';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './Checkout.module.css';

const $ = modularClassNamer(styles);

const Checkout = () => {
  const shoppingCart = useCart();
  const auth = useAuth();
  return (
    <Layout>
      {' '}
      <section className={$`checkout-section container`}>
        <ul className={$`factor`}>
          {shoppingCart.cart.map((prod) => {
            return (
              <li className={$`factor__item`} key={prod.id}>
                <p>{prod.name}:</p>
                <p>{prod.quantity}X</p>
                <p>{prod.quantity * prod.offPrice}</p>
              </li>
            );
          })}
          <li key="factor-sum" className={$`factor__sum factor__item`}>
            <p>Total: </p>
            <p></p>
            <p>{shoppingCart.offPrice}</p>
          </li>
        </ul>
        <div className={$`user-info`}>
          <p>{auth.name}</p>
          <p>{auth.email}</p>
          <p>{auth.phoneNumber}</p>
          <button className={$`btn btn--primary btn--icon`} >pay with credit card --> </button>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
