import Navigation from '../components/Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Navigation />
      </header>
      <main className='page-wrapper' >{children}</main>
    </div>
  );
};

export default Layout;
