import * as BlogModel from '@/models/blog';

import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { blogUpdateActions } from './slice';

function* getBlogDetail({ payload }: PayloadAction<BlogModel.TBlogId>) {
  try {
    console.log('getBlogDetail', payload);
    // const categoryResult: { data: CategoryModel.TResponse } = yield call(
    //   getCategoryDetailItem,
    //   payload._id
    // );

    // console.log(categoryResult);

    // yield put(
    //   categoryUpdateActions.getDetailSuccess({
    //     name: categoryResult.data?.payload?.name,
    //     description: categoryResult.data?.payload?.description,
    //   })
    // );
  } catch (error) {
    yield put(blogUpdateActions.getDetailError(error));
  }
}

function* updateCategory({
  payload,
}: PayloadAction<BlogModel.TBlogValues | FormData>) {
  try {
    console.log('updateCategory', payload);
    // const updateResult: { data: CategoryModel.TResponse } = yield call(
    //   updateCategoryItem,
    //   payload
    // );

    // yield put(categoryUpdateActions.postCategorySuccess());

    // notification.success({
    //   message: updateResult.data.statusCode,
    //   description: updateResult.data.message,
    // });
  } catch (error) {
    yield put(blogUpdateActions.postBlogUpdateError(error));
  }
}

export default function* categoryUpdateWatcher() {
  yield takeLatest(blogUpdateActions.postBlogUpdateRequest, updateCategory);
  yield takeLatest(blogUpdateActions.getDetailRequest, getBlogDetail);
}
