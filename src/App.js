import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import CartProvider from './providers/CartProvider/CartProvider';
import routes from './routes';

function App() {
  return (
    <div className="App">
      {' '}
      <Router>
        <CartProvider>
          <Layout>
            <Routes>
              {routes.map((route) => {
                return <Route {...route} />;
              })}
            </Routes>
          </Layout>{' '}
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
