import * as BlogModel from '@/models/blog';
import { getBlogList } from '@/services/blog/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { blogListActions } from './slice';

function* getBlogs({ payload }: PayloadAction<BlogModel.TBlogSearchParams>) {
  try {
    console.log('getBlogs');
    const blogList: { data: BlogModel.TListResponse } = yield call(
      getBlogList,
      payload
    );

    const blogs = blogList?.data?.payload || [];
    yield put(blogListActions.getBlogsSuccess(blogs));
    yield;
  } catch (error) {
    yield put(blogListActions.getBlogsError(error));
  }
}

export default function* blogListWatcher() {
  yield takeLatest(blogListActions.getBlogsRequest, getBlogs);
}
