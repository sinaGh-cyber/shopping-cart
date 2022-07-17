import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './CartItem.module.css';
import { BsFillTrashFill, BsDash, BsPlus, BsCartXFill } from 'react-icons/bs';
import { useCartAction } from '../../providers/CartProvider/CartProvider';
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromCart,
} from '../../providers/CartProvider/actionCreator';

const $ = modularClassNamer(styles);

const CartItem = ({ productInfo }) => {
  const dispatch = useCartAction();
  const { id, image, price, name, offPrice, discount, quantity } = productInfo;

  return (
    <li className={$`product__item`}>
      {offPrice !== price && (
        <span className={$`special-offer`}>{discount} %</span>
      )}
      <div className={$`image`}>
        <img src={image} alt={name} />
      </div>

      <div className={$`info`}>
        <p className={$`info__name`}>{name}</p>
        {offPrice === price ? (
          <p className={$`info__price`}>{offPrice * quantity} $ / number</p>
        ) : (
          <p className={$`info__price info__price--off`}>
            off price: {offPrice} $ / number
          </p>
        )}{' '}
        <p className={$`info__total-price`}>total: {offPrice * quantity} $</p>
      </div>

      <div className={$`management`}>
        {' '}
        {quantity > 1 ? (
          <button
            onClick={() => {
              dispatch(decrementProductQuantity(productInfo));
            }}
            className={$`btn btn--icon management__btn management__btn--decrement`}
          >
            <BsDash />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(removeFromCart(productInfo));
            }}
            className={$`btn btn--icon management__btn management__btn--remove`}
          >
            <BsFillTrashFill />
          </button>
        )}
        <p className={$`quantity`}>{quantity}</p>
        <button
          onClick={() => {
            dispatch(incrementProductQuantity(productInfo));
          }}
          className={$`btn btn--icon management__btn management__btn--increment`}
        >
          <BsPlus />
        </button>
      </div>
      <button onClick={()=>{dispatch(removeFromCart(productInfo))}} className={$`Product-item__btn btn btn-icon`}>
        <BsCartXFill />
      </button>
    </li>
  );
};

export default CartItem;
