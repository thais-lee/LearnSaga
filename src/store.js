import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import todoReducer from './reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  todo: todoReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;