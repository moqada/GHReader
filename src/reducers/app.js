/* @flow */
import actionTypes from '../constants/appActionTypes';
import type {Action, AppState} from '../flowtypes';


/**
 * App Reducer
 *
 * @param {AppState} state AppState
 * @param {Action} action action
 * @return {AppState}
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
