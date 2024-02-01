/* eslint-disable @typescript-eslint/no-unused-vars */
import { REDUCERS } from '@/constants/reducers';
import { TBlogId, TBlogValues } from '@/models/blog';
import { ICategory } from '@/models/category';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IBlogUpdateInitialState {
  blog: TBlogValues | null;
  categories: ICategory[];
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IBlogUpdateInitialState = {
  blog: null,
  categories: [],
  error: null,
  loading: false,
  success: false,
};

const blogUpdateSlice = createSlice({
  name: REDUCERS.BLOG_UPDATE,
  initialState,
  reducers: {
    getDetailRequest(state, _action: PayloadAction<TBlogId>) {
      state.loading = true;
      state.error = null;
    },
    getDetailSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.blog = action.payload.blog;
      state.categories = action.payload.categories;
    },
    getDetailError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.blog = null;
    },
    postBlogUpdateRequest(
      state,
      _action: PayloadAction<TBlogValues | FormData>
    ) {
      state.loading = true;
      state.error = null;
    },
    postBlogUpdateSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    postBlogUpdateError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetState() {
      return { ...initialState };
    },
  },
});

const blogUpdateActions = blogUpdateSlice.actions;

export { blogUpdateActions };
export default blogUpdateSlice.reducer;
