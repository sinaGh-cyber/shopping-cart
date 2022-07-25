import { createContext, useContext, useEffect, useState } from 'react';
const LOCAL_STORAGE_AUTH_KEY = 'authState';

const AuthContext = createContext();
const SetAuthContext = createContext();

const initState = { notHasAuthData: true };

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initState);
  useEffect(() => {
    let userData;
    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY))) {
      userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    } else {
      userData = initState;
    }
    setAuth(userData);
  }, []);

  useEffect(() => {
    if (!auth.notHasAuthData) {
      const userData = JSON.stringify(auth);
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, userData);
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={auth}>
      <SetAuthContext.Provider value={setAuth}>
        {children}
      </SetAuthContext.Provider>
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth) {
    return auth;
  }
  throw Error("AuthContext doesn't provided !");
};

const useSetAuth = () => {
  const setAuth = useContext(SetAuthContext);
  if (setAuth) {
    return setAuth;
  }
  throw Error("CartActionContext doesn't provided !");
};

export { useAuth, useSetAuth };
export default AuthProvider;
