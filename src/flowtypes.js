/* @flow */

export type Action = {
  error?: boolean,
  meta?: Object,
  payload?: any,
  type: string
};

export type AppState = {
  initialized: boolean
};

export type Store = {
  app: AppState
};
