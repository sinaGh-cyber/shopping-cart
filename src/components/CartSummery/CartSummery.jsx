import { Link } from 'react-router-dom';
import { useCart } from '../../providers/Cart/CartProvider';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './CartSummery.module.css';

const CartSummery = () => {
  const shoppingCart = useCart();
  const $ = modularClassNamer(styles);

  return (
    <section className={$`cart-summery`}>
      <div className={$`cart-summery__coupon-box`}>
        <h2>Have a coupon ?</h2>
        <input type="text" />
      </div>

      <div className={$`cart-summery__payment`}>
        {shoppingCart.offPrice !== shoppingCart.total && (
          <>
            <div className={$`price price--rale`}>
              <h3 className={$`price__title`}>Rale price: </h3>
              <p className={$`price__amount`}>{shoppingCart.total} $</p>
            </div>
            <div className={$`price price--discounted`}>
              <h3 className={$`price__title`}>Discount: </h3>
              <p className={$`price__amount`}>
                {shoppingCart.total - shoppingCart.offPrice} $
              </p>
            </div>
          </>
        )}
        <div className={$`price price--total`}>
          <h3 className={$`price__title`}>Total: </h3>
          <p className={$`price__amount`}>{shoppingCart.offPrice} $</p>
        </div>
      </div>

      <Link to="/signup?redirect=checkout">
        {' '}
        <button className={$`btn btn--primary cart-summery__checkout-btn`}>
          Checkout
        </button>
      </Link>
    </section>
  );
};

export default CartSummery;
