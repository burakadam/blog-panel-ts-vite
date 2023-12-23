/* eslint-disable @typescript-eslint/no-unused-vars */
import { REDUCERS } from '@/constants/reducers';
import { ICategory, TCategoryId, TCategoryValues } from '@/models/category';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICategoryUpdateInitialState {
  category: TCategoryValues;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ICategoryUpdateInitialState = {
  category: { name: '', description: '' },
  error: null,
  loading: false,
  success: false,
};

const categoryUpdateSlice = createSlice({
  name: REDUCERS.CATEGORY_UPDATE,
  initialState,
  reducers: {
    getDetailRequest(state, _action: PayloadAction<TCategoryId>) {
      state.loading = true;
      state.error = null;
    },
    getDetailSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.category = action.payload;
    },
    getDetailError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.category = { name: '', description: '' };
    },
    postCategoryRequest(state, _action: PayloadAction<ICategory>) {
      state.loading = true;
      state.error = null;
    },
    postCategorySuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    postCategoryError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetState() {
      return { ...initialState };
    },
  },
});

const categoryUpdateActions = categoryUpdateSlice.actions;

export { categoryUpdateActions };
export default categoryUpdateSlice.reducer;
