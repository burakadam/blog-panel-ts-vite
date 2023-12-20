import { REDUCERS } from '@/constants/reducers';
import { TCategoryValues } from '@/models/category';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICategoryCreateInitialState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ICategoryCreateInitialState = {
  error: null,
  loading: false,
  success: false,
};

const categoryCreateSlice = createSlice({
  name: REDUCERS.CATEGORYCREATE,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postCategoryRequest(state, _action: PayloadAction<TCategoryValues>) {
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

const categoryCreateActions = categoryCreateSlice.actions;

export { categoryCreateActions };
export default categoryCreateSlice.reducer;
