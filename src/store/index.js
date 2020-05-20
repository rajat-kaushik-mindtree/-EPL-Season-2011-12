import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { rootSaga } from './sagas';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  duration: true,
  timestamp: true,
  level: 'log',
  logErrors: true, // should the logger catch, log, and re-throw errors?
  diff: false, // (alpha) show diff between states?
});

const reduxSaga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [reduxSaga, logger],
});

reduxSaga.run(rootSaga);
