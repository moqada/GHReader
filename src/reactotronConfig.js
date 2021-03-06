/* @flow */
import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
import {createStore, reactotronRedux} from 'reactotron-redux';

if (__DEV__) {
  Reactotron
    .configure({name: 'GHReader'})
    .use(trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/react-natve/') >= 0
    }))
    .use(reactotronRedux())
    .connect();

  // $FlowFixMe: ignore this
  console.tron = Reactotron;
  Reactotron.clear();
}
