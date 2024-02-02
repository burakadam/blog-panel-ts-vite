/* eslint-disable @typescript-eslint/no-unused-vars */
import { REDUCERS } from '@/constants/reducers';
import { TBlogId, TBlogList, TBlogSearchParams } from '@/models/blog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IBlogListInitialState {
  loading: boolean;
  error: string | null;
  blogs: TBlogList[];
}

const initialState: IBlogListInitialState = {
  loading: false,
  error: null,
  blogs: [],
};

const blogListSlice = createSlice({
  name: REDUCERS.BLOG_LIST,
  initialState,
  reducers: {
    getBlogsRequest(state, _action: PayloadAction<TBlogSearchParams>) {
      state.loading = true;
      state.error = null;
    },
    getBlogsSuccess(state, action) {
      state.loading = false;
      state.blogs = action.payload;
    },
    getBlogsError(state, action) {
      state.loading = false;
      state.blogs = initialState.blogs;
      state.error = action.payload;
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
  },
});

const blogListActions = blogListSlice.actions;

export { blogListActions };
export default blogListSlice.reducer;
