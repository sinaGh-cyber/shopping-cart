import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CartProvider from './providers/Cart/CartProvider';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './providers/Auth/AuthProvider';

function App() {
  return (
    <div className="App">
      {' '}
      <Router>
        <AuthProvider>
          <CartProvider>
            <ToastContainer theme="colored" style={{ fontSize: '2rem' }} />
            <Routes>
              {routes.map((route) => {
                return <Route {...route} />;
              })}
            </Routes>
          </CartProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
