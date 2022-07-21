import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import CartProvider from './providers/CartProvider/CartProvider';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {' '}
      <Router>
        <CartProvider>
          <ToastContainer theme="colored" style={{ fontSize: '2rem' }} />
          <Routes>
            {routes.map((route) => {
              return <Route {...route} />;
            })}
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
