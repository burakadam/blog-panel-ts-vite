import { REDUCERS } from '@/constants/reducers';
import { ICategory } from '@/models/category';
import { createSlice } from '@reduxjs/toolkit';

export interface ICategoryListInitialState {
  loading: boolean;
  error: string | null;
  categories: ICategory[];
}

const initialState: ICategoryListInitialState = {
  error: null,
  loading: false,
  categories: [],
};

const categoryListSlice = createSlice({
  name: REDUCERS.CATEGORY_LIST,
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

const categoryListActions = categoryListSlice.actions;

export { categoryListActions };
export default categoryListSlice.reducer;
