/* eslint-disable @typescript-eslint/no-unused-vars */
import { REDUCERS } from '@/constants/reducers';
import { TBlogId, TBlogList } from '@/models/blog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IBlogListInitialState {
  loading: boolean;
  error: string | null;
  blogs: TBlogList[];
  totalCount: number;
  activePage: number;
  pageSize: number;
  search: string | undefined;
}

const initialState: IBlogListInitialState = {
  loading: false,
  error: null,
  blogs: [],
  totalCount: 0,
  activePage: 1,
  pageSize: 2,
  search: undefined,
};

const blogListSlice = createSlice({
  name: REDUCERS.BLOG_LIST,
  initialState,
  reducers: {
    getBlogsRequest(state) {
      state.loading = true;
      state.error = null;
      state.totalCount = 0;
    },
    getBlogsSuccess(state, action) {
      state.loading = false;
      state.blogs = action.payload.blogs;
      state.totalCount = action.payload.totalCount;
    },
    getBlogsError(state, action) {
      state.loading = false;
      state.blogs = initialState.blogs;
      state.error = action.payload;
      state.totalCount = 0;
    },
    deleteBlogRequest(state, _action: PayloadAction<TBlogId>) {
      state.loading = true;
      state.error = null;
    },
    deleteBlogSuccess(state, action) {
      state.loading = false;
      state.blogs = action.payload;
    },
    deleteBlogError(state, action) {
      state.loading = true;
      state.error = action.payload;
    },
    setActivePage(state, action) {
      state.loading = true;
      state.activePage = action.payload;
    },
    setSearch(state, action) {
      state.loading = true;
      state.activePage = 1;
      state.search = action.payload.search;
    },
  },
});

const blogListActions = blogListSlice.actions;

export { blogListActions };
export default blogListSlice.reducer;
