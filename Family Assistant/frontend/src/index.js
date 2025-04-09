import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';

export const Context = createContext()

const Root = ReactDOM.createRoot(document.getElementById('root'));

const RootComponent = () => {

  return (
    <Context.Provider value={{
      user: new UserStore()
    }}>
      <App />
    </Context.Provider>
  );
};

Root.render(<RootComponent />);