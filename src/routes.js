import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/Checkout/Checkout';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const routes = [
  { path: '/', element: <HomePage />, key: 1 },
  { path: '/cart', element: <CartPage />, key: 2 },
  { path: '/login', element: <Login />, key: 3 },
  { path: '/signup', element: <SignUp />, key: 4 },
  { path: '/checkout', element: <Checkout />, key: 5 },
];
export default routes;
