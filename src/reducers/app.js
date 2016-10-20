/* @flow */
import actionTypes from '../constants/appActionTypes';
import type {Action, AppState} from '../flowtypes';


/**
 * App Reducer
 *
 * @param state - AppState
 * @param action - action
 */
export function app(state: AppState = {
  initialized: false
}, action: Action): AppState {
  switch (action.type) {
  case actionTypes.INITIALIZED: {
    return Object.assign({}, state, {initialized: true});
  }
  default:
    break;
  }
  return state;
}
