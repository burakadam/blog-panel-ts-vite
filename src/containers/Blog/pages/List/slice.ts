import { REDUCERS } from '@/constants/reducers';
import { TBlogList } from '@/models/blog';
import { createSlice } from '@reduxjs/toolkit';

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
    getBlogsRequest(state) {
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
  },
});

const blogListActions = blogListSlice.actions;

export { blogListActions };
export default blogListSlice.reducer;
