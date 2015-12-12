/* @flow */

export type Action = {
  type: string,
  payload?: any,
  meta?: Object,
  error?: boolean
};

export type AppState = {
  initialized: boolean
};

export type Store = {
  app: AppState
};
