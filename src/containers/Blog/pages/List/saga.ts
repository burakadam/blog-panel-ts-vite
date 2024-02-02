import * as BlogModel from '@/models/blog';
import { blogServices } from '@/services/blog';
import { getBlogList } from '@/services/blog/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { blogListSelectors } from '.';
import { blogListActions } from './slice';

function* getBlogs() {
  try {
    const page: number = yield select(blogListSelectors.activePage);
    const pageSize: number = yield select(blogListSelectors.pageSize);
    const search = undefined;

    const blogList: { data: BlogModel.TListResponse } = yield call(
      getBlogList,
      { page, pageSize, search }
    );

    const blogs = blogList?.data?.payload || {};
    yield put(blogListActions.getBlogsSuccess(blogs));
  } catch (error) {
    yield put(blogListActions.getBlogsError(error));
  }
}

function* deleteBlog({ payload }: PayloadAction<BlogModel.TBlogId>) {
  try {
    const deleted: { data: BlogModel.TListResponse } = yield call(
      blogServices.deleteBlog,
      payload
    );

    const blogs = deleted?.data?.payload || [];
    yield put(blogListActions.deleteBlogSuccess(blogs));
  } catch (error) {
    yield put(blogListActions.deleteBlogError(error));
  }
}

export default function* blogListWatcher() {
  yield takeLatest(
    [blogListActions.getBlogsRequest, blogListActions.setActivePage],
    getBlogs
  );
  yield takeLatest(blogListActions.deleteBlogRequest, deleteBlog);
}
