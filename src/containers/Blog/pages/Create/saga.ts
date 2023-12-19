import * as CategoryModel from '@/models/category';
import { getCategoryList } from '@/services/category/api';
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

export default function* blogCreateWatcher() {
  yield takeLatest(blogCreateActions.getCategoriesRequest, getCategories);
}
