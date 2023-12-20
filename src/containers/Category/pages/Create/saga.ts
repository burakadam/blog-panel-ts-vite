import { TCategoryValues } from '@/models/category';

import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { categoryCreateActions } from './slice';

function* createCategory({ payload }: PayloadAction<TCategoryValues>) {
  try {
    yield console.log('values', payload);
    yield put(categoryCreateActions.postCategorySuccess());
  } catch (error) {
    console.log('error', error);
  }
}

export default function* categoryCreateWatcher() {
  yield takeLatest(categoryCreateActions.postCategoryRequest, createCategory);
}
