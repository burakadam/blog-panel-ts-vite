import { REDUCERS } from '@/constants/reducers';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  loading: boolean;
  error: string | null;
  categories: []; // CATEGORY MODEL WILL BE ADDED
}

const initialState: IInitialState = {
  error: null,
  loading: false,
  categories: [],
};

const blogCreateSlice = createSlice({
  name: REDUCERS.BLOGCREATE,
  initialState,
  reducers: {
    getCategories(state) {
      state.loading = true;
    },
  },
});

const blogCreateActions = blogCreateSlice.actions;

export { blogCreateActions };

export default blogCreateSlice.reducer;
