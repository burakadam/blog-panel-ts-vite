import { REDUCERS } from '@/constants/reducers';
import { TBlogValues } from '@/models/blog';
import { ICategory } from '@/models/category';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICreateBlogInitialState {
  loading: boolean;
  error: string | null;
  categories: ICategory[];
  success: boolean;
}

const initialState: ICreateBlogInitialState = {
  error: null,
  loading: false,
  categories: [],
  success: false,
};

const blogCreateSlice = createSlice({
  name: REDUCERS.BLOG_CREATE,
  initialState,
  reducers: {
    getCategoriesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getCategoriesSuccess(state, action) {
      state.loading = false;
      state.categories = action.payload;
    },
    getCategoriesError(state, action) {
      state.loading = false;
      state.categories = initialState.categories;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postBlogRequest(state, _action: PayloadAction<TBlogValues | FormData>) {
      state.loading = true;
      state.error = null;
    },
    postBlogSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    postBlogError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

const blogCreateActions = blogCreateSlice.actions;

export { blogCreateActions };
export default blogCreateSlice.reducer;
