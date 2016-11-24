/* @flow */
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/root';
import type {Store} from '../flowtypes';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createStore);

/**
 * Create Store
 *
 * @return {Store} store
 */
export default function configureStore(): Store {
  const store = createStoreWithMiddleware(rootReducer);
  if (module.hot && typeof module.hot.accept === 'function') {
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
