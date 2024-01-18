import * as BlogModel from '@/models/blog';
import * as CategoryModel from '@/models/category';
import { createBlog as createBlogItem } from '@/services/blog/api';
import { getCategoryList } from '@/services/category/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { blogCreateActions } from './slice';

function* getCategories() {
  try {
    const listResult: { data: CategoryModel.TResponse } = yield call(
      getCategoryList
    );

    const categories = listResult?.data?.payload || [];

    yield put(blogCreateActions.getCategoriesSuccess(categories));
  } catch (error) {
    yield put(blogCreateActions.getCategoriesError(error));
  }
}

function* createBlog({
  payload,
}: PayloadAction<BlogModel.TBlogValues | FormData>) {
  try {
    const createResult: { data: CategoryModel.TResponse } = yield call(
      createBlogItem,
      payload
    );

    yield put(blogCreateActions.postBlogSuccess());

    notification.success({
      message: createResult.data.statusCode,
      description: createResult.data.message,
    });
  } catch (error) {
    yield put(blogCreateActions.postBlogError(error));
  }
}

export default function* blogCreateWatcher() {
  yield takeLatest(blogCreateActions.getCategoriesRequest, getCategories);
  yield takeLatest(blogCreateActions.postBlogRequest, createBlog);
}
