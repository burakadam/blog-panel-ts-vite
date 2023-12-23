import * as CategoryModel from '@/models/category';

import {
  getCategoryDetail as getCategoryDetailItem,
  updateCategory as updateCategoryItem,
} from '@/services/category/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { categoryUpdateActions } from './slice';

function* updateCategory({ payload }: PayloadAction<CategoryModel.ICategory>) {
  try {
    const updateResult: { data: CategoryModel.TResponse } = yield call(
      updateCategoryItem,
      payload
    );

    yield put(categoryUpdateActions.postCategorySuccess());

    notification.success({
      message: updateResult.data.statusCode,
      description: updateResult.data.message,
    });
  } catch (error) {
    yield put(categoryUpdateActions.postCategoryError(error));
  }
}

function* getCategoryDetail({
  payload,
}: PayloadAction<CategoryModel.TCategoryId>) {
  try {
    const categoryResult: { data: CategoryModel.TResponse } = yield call(
      getCategoryDetailItem,
      payload.id
    );

    yield put(
      categoryUpdateActions.getDetailSuccess({
        name: categoryResult.data?.payload?.name,
        description: categoryResult.data?.payload?.description,
      })
    );
  } catch (error) {
    yield put(categoryUpdateActions.getDetailError(error));
  }
}

export default function* categoryUpdateWatcher() {
  yield takeLatest(categoryUpdateActions.postCategoryRequest, updateCategory);
  yield takeLatest(categoryUpdateActions.getDetailRequest, getCategoryDetail);
}
