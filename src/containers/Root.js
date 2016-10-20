/* @flow */
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore';
import App from './App';

const store = configureStore();


/**
 * Root Container
 *
 * @return {React.Component}
 */
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
