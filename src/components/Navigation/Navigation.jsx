import { NavLink } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/AuthProvider';
import { BsCart4 } from 'react-icons/bs';
import { AiTwotoneAppstore } from 'react-icons/ai';

import { useCart } from '../../providers/Cart/CartProvider';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './Navigation.module.css';

const $ = modularClassNamer(styles);

const Navigation = () => {
  const auth = useAuth();
  const { cart } = useCart();
  return (
    <nav className={$`nav`}>
      <ul className={$`nav__list`}>
        <li className={$`nav__item`}>
          {' '}
          <NavLink
            to={'/cart'}
            className={({ isActive }) =>
              isActive ? $`nav__item--active` : undefined
            }
          >
            <button className={$`cart-navigation-btn`}>
              <BsCart4 />
              <span className={$`cart-counter-badge`}>{cart.length}</span>
            </button>
          </NavLink>{' '}
        </li>
        <li className={$`nav__item`}>
          {' '}
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? $`nav__item--active` : undefined
            }
          >
            <button>
              <AiTwotoneAppstore />
            </button>
          </NavLink>
        </li>
        <li className={$`nav__item`}>
          {auth.notHasAuthData ? 'Enter / Register' : auth.name}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
