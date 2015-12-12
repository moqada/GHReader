/* @flow */
import actionTypes from '../constants/appActionTypes';
import type {Action} from '../flowtypes';


/**
 * initialized action
 *
 * @return {Action}
 */
function initialized(): Action {
  return {
    type: actionTypes.INITIALIZED
  };
}


/**
 * init action
 *
 * @return {Action}
 */
export function init(): Function {
  const wait = 3000;
  return dispatch => {
    dispatch({type: actionTypes.INIT});
    setTimeout(() => dispatch(initialized()), wait);
  };
}
