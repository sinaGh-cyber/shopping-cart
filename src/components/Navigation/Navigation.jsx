import { NavLink } from 'react-router-dom';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './Navigation.module.css';

const $ = modularClassNamer(styles);

const Navigation = () => {
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
            <button>Cart</button>
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
            <button>Home</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
