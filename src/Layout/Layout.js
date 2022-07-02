import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div color="layout">
      <header>
        <Navigation/>
      </header>
      {children}
    </div>
  );
};

export default Layout;
