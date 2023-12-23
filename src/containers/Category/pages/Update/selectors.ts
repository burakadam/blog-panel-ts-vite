import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICategoryUpdateInitialState } from './slice';

const selectCategoryUpdate = (state: RootState): ICategoryUpdateInitialState =>
  state[REDUCERS.CATEGORY_UPDATE];

const isLoading = (state: RootState) => selectCategoryUpdate(state).loading;
const isSuccess = (state: RootState) => selectCategoryUpdate(state).success;
const category = (state: RootState) => selectCategoryUpdate(state).category;
const error = (state: RootState) => selectCategoryUpdate(state).error;

export const categoryUpdateSelectors = {
  isLoading,
  isSuccess,
  category,
  error,
};
