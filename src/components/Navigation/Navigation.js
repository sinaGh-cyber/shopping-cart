import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={`${styles['nav']}`}>
      <ul className={`${styles['nav__list']}`}>
        <li className={`${styles['nav__item']}`}>
          {' '}
          <NavLink
            to={'/cart'}
            className={({ isActive }) =>
              isActive ? `${styles['nav__item--active']}` : undefined
            }
            exact
          >
            <button>Cart</button>
          </NavLink>{' '}
        </li>
        <li className={`${styles['nav__item']}`}>
          {' '}
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? `${styles['nav__item--active']}` : undefined
            }
            exact
          >
            <button>Home</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
