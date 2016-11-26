/* @flow */
import {createStore as reduxCreateStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root';
import type {Store} from '../flowtypes';

let createStore = reduxCreateStore;
if (__DEV__) {
  // eslint-disable-next-line global-require
  createStore = require('reactotron-react-native').default.createStore;
}

/**
 * Create Store
 *
 * @return {Store} store
 */
export default function configureStore(): Store {
  const middlewares = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  );
  const store = createStore(rootReducer, middlewares);
  if (module.hot && typeof module.hot.accept === 'function') {
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
