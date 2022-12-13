import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'; 
import createStoreInstance from './store';


const App = () => { 
  const store = createStoreInstance(window?.__PRELOAD_STATE__);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
  
};

export default App;
