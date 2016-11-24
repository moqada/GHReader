/* @flow */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App';

type Props = {
  store: Object
};


// stateless component does not work hot module reloading.
/* eslint-disable react/prefer-stateless-function */
/**
 * Root Container
 *
 * @return {React.Component}
 */
export default class Root extends Component {

  props: Props;

  /**
   * render
   */
  render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    );
  }
}
