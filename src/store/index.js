import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

export default function createStoreInstance(preloadedState = {}) {
  return createStore(reducer, preloadedState, applyMiddleware(thunk)); 
}
