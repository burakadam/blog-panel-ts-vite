import { REDUCERS } from '@/constants/reducers';
import { blogCreateReducer } from '@/containers/Blog/pages/Create';
import { categoryCreateReducer } from '@/containers/Category/pages/Create';
import { categoryListeReducer } from '@/containers/Category/pages/List';
import { categoryUpdateReducer } from '@/containers/Category/pages/Update';
import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  [REDUCERS.AUTH]: authReducer,
  [REDUCERS.BLOG_CREATE]: blogCreateReducer,
  [REDUCERS.CATEGORY_LIST]: categoryListeReducer,
  [REDUCERS.CATEGORY_CREATE]: categoryCreateReducer,
  [REDUCERS.CATEGORY_UPDATE]: categoryUpdateReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
