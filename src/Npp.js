
import React, { useReducer} from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server'; 
import Routes from './routes'

const Npp = ({location, store}) => {;
  // const [cssList, setCssList] = useState([]);
  
  return (
    <Provider store={store} > 
      <StaticRouter location={location} >
        <Routes />
      </StaticRouter>
    </Provider>
  );
}

export default Npp;