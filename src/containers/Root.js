/* @flow */
import React from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore';
import App from './App';

const store = configureStore();


/**
 * Root Container
 */
export default class Root extends (React.Component: typeof ReactComponent) {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    /* eslint-disable react/display-name, react/jsx-key */
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );

    /* eslint-enable */
  }
}
