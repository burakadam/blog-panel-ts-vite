import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICreateBlogInitialState } from '.';

const selectBlogCreate = (state: RootState): ICreateBlogInitialState =>
  state[REDUCERS.BLOG_CREATE];

const categoryList = (state: RootState) => selectBlogCreate(state).categories;
const isLoading = (state: RootState) => selectBlogCreate(state).loading;
const isSuccess = (state: RootState) => selectBlogCreate(state).success;

export const blogCreateSelectors = { categoryList, isLoading, isSuccess };
