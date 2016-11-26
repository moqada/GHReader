/* @flow */
/**
 * GHReader for iOS
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import './src/reactotronConfig';
import Root from './src/containers/Root';
import configureStore from './src/stores/configureStore';

const store = configureStore();
const GHReader = () => <Root store={store} />;
export default GHReader;

AppRegistry.registerComponent('GHReader', () => GHReader);
