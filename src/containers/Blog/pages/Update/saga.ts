import * as BlogModel from '@/models/blog';

import { getBlogDetail as getBlogDetailItem } from '@/services/blog/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { blogUpdateActions } from './slice';

function* getBlogDetail({ payload }: PayloadAction<BlogModel.TBlogId>) {
  try {
    const blogResult: { data: BlogModel.TResponse } = yield call(
      getBlogDetailItem,
      payload._id
    );

    console.log(blogResult);

    yield put(blogUpdateActions.getDetailSuccess(blogResult.data?.payload));
  } catch (error) {
    yield put(blogUpdateActions.getDetailError(error));
  }
}

function* updateBlog({
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
  yield takeLatest(blogUpdateActions.postBlogUpdateRequest, updateBlog);
  yield takeLatest(blogUpdateActions.getDetailRequest, getBlogDetail);
}
