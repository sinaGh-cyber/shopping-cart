import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      {' '}
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => {
              return <Route {...route} />;
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
