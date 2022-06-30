import CartPage from './pages/CartPage/CartPage';
import HomePage from './pages/HomePage/HomePage';

const routes = [
  { path: '/cart', element: <CartPage />, key: 1 },
  { path: '/', element: <HomePage />, key: 2 },
];
export default routes;
