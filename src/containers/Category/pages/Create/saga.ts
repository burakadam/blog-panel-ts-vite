import * as CategoryModel from '@/models/category';

import { createCategory as createCategoryItem } from '@/services/category/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { categoryCreateActions } from './slice';

function* createCategory({
  payload,
}: PayloadAction<CategoryModel.TCategoryValues>) {
  try {
    const createResult: { data: CategoryModel.TResponse } = yield call(
      createCategoryItem,
      payload
    );

    yield put(categoryCreateActions.postCategorySuccess());

    notification.success({
      message: createResult.data.statusCode,
      description: createResult.data.message,
    });
  } catch (error) {
    yield put(categoryCreateActions.postCategoryError(error));
  }
}

export default function* categoryCreateWatcher() {
  yield takeLatest(categoryCreateActions.postCategoryRequest, createCategory);
}
