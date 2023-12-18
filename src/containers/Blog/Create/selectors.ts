import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICreateBlogInitialState } from '.';

const selectBlogCreate = (state: RootState): ICreateBlogInitialState =>
  state[REDUCERS.BLOGCREATE];

const categoryList = (state: RootState) => selectBlogCreate(state).categories;

export const blogCreateSelectors = { categoryList };