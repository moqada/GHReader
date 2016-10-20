/* @flow */
import React from 'react';
import {Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/app';
import type {AppState, Store} from '../flowtypes';


type Props = {
  actions: typeof actionCreators,
  app: AppState
};
type DefaultProps = Props;


/**
 * App Container
 */
class App extends (React.Component: typeof ReactComponent) {

  static defaultProps: DefaultProps;
  props: Props;

  /**
   * componentDidMount
   */
  componentDidMount() {
    this.props.actions.init();
  }

  /**
   * Render
   *
   * @return {ReactElement}
   */
  render() {
    const label = this.props.app.initialized ? 'Hello GHReader!' : 'Waiting...';
    const style = {alignItems: 'center', flex: 1, justifyContent: 'center'};
    return (
      <View style={style}>
        <Text>{label}</Text>
      </View>
    );
  }
}

/**
 * map State to Props
 *
 * @param state - store
 */
function mapStateToProps(state: Store): {app: AppState} {
  return {
    app: state.app
  };
}

/**
 * map Dispatch to Props
 *
 * @param dispatch - dispatch
 */
function mapDispachToProps(dispatch: Function): {actions: Object} {
  return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default (connect(mapStateToProps, mapDispachToProps)(App): Class<App>);
