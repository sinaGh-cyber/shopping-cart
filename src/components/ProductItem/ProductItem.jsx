import {
  addToCart,
  removeFromCart,
} from '../../providers/CartProvider/actionCreator';
import {
  useCart,
  useCartAction,
} from '../../providers/CartProvider/CartProvider';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
import styles from './ProductItem.module.css';

const $ = modularClassNamer(styles);
const ProductItem = ({ product }) => {
  const dispatch = useCartAction();
  const { cart } = useCart();

  const addToCartBtnHandler = () => {
    console.log('dispatch');
    dispatch(addToCart(product));
  };

  return (
    <li className={$`Product-item`} key={product.id}>
      <div className={$`Product-item__image`}>
        <img src={product.image} alt={product.name}></img>
      </div>

      <div className={$`info`}>
        <p className={$`info__name`}>{product.name}</p>
        <p className={$`info__price`}>{`${product.price} $`}</p>
        {cart.some((item) => item.id === product.id) ? (
          <button
            onClick={() => {
              dispatch(removeFromCart(product));
            }}
            className={'btn  btn--green btn--icon'}
          >
            <BsCartCheck />
          </button>
        ) : (
          <button
            onClick={addToCartBtnHandler}
            className={'btn  btn--primary btn--icon'}
          >
            <BsCartPlus />
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
