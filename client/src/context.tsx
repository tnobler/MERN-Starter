import React from 'react';

// create context
export const Context = React.createContext<any>(undefined);

// create the context provider, we are using use state to ensure that we get reactive values from the context...

export const AuthProvider: React.FC = ({ children }) => {
  // the reactive values
  const [authValue, setAuthValue] = React.useState<any>({
    authenticated: false,
    user: null
  });

  const login = ({ user, password }: { user: string; password: string }) => {
    return new Promise(resolve => {
      if (user === 'aaron' && password === 'aaron') {
        setAuthValue({
          authenticated: true,
          user: { user: user, id: 'aaron-100' }
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };

  const logout = () => {
    setAuthValue({
      authenticated: false,
      user: null
    });
    return Promise.resolve(true);
  };

  //  the store object
  let state = {
    authValue,
    login,
    logout
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default Context;
