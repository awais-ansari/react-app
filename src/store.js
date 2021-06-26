import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';

export const initializeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export default initializeStore;
