import * as CategoryModel from '@/models/category';
import { getCategoryList } from '@/services/category/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { categoryListActions } from './slice';

function* getCategories() {
  try {
    const listResult: { data: CategoryModel.TResponse } = yield call(
      getCategoryList
    );

    const categories = listResult?.data?.payload || [];

    yield put(categoryListActions.getCategoriesSuccess(categories));
  } catch (error) {
    yield put(categoryListActions.getCategoriesError(error));
  }
}

export default function* categoryListWatcher() {
  yield takeLatest(categoryListActions.getCategoriesRequest, getCategories);
}
