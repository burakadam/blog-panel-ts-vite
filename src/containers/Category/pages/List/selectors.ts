import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICategoryListInitialState } from './slice';

const selectCategoryList = (state: RootState): ICategoryListInitialState =>
  state[REDUCERS.CATEGORY_LIST];

const categoryList = (state: RootState) => selectCategoryList(state).categories;
const isLoading = (state: RootState) => selectCategoryList(state).loading;

export const categoryListSelectors = {
  categoryList,
  isLoading,
};
