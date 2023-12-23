import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICategoryCreateInitialState } from './slice';

const selectCategoryCreate = (state: RootState): ICategoryCreateInitialState =>
  state[REDUCERS.CATEGORY_CREATE];

const isLoading = (state: RootState) => selectCategoryCreate(state).loading;
const isSuccess = (state: RootState) => selectCategoryCreate(state).success;

export const categoryCreateSelectors = {
  isLoading,
  isSuccess,
};
