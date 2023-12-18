import { REDUCERS } from '@/constants/reducers';
import { ICategory } from '@/models/category';
import { createSlice } from '@reduxjs/toolkit';

export interface ICreateBlogInitialState {
  loading: boolean;
  error: string | null;
  categories: ICategory[];
}

const initialState: ICreateBlogInitialState = {
  error: null,
  loading: false,
  categories: [],
};

const blogCreateSlice = createSlice({
  name: REDUCERS.BLOGCREATE,
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
  },
});

const blogCreateActions = blogCreateSlice.actions;

export { blogCreateActions };

export default blogCreateSlice.reducer;
