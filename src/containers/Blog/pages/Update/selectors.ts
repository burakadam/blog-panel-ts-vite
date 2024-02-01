import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { IBlogUpdateInitialState } from './slice';

const selectBlogUpdate = (state: RootState): IBlogUpdateInitialState =>
  state[REDUCERS.BLOG_UPDATE];

const isLoading = (state: RootState) => selectBlogUpdate(state).loading;
const isSuccess = (state: RootState) => selectBlogUpdate(state).success;
const blog = (state: RootState) => selectBlogUpdate(state).blog;
const categories = (state: RootState) => selectBlogUpdate(state).categories;
const error = (state: RootState) => selectBlogUpdate(state).error;

export const blogUpdateSelectors = {
  isLoading,
  isSuccess,
  blog,
  categories,
  error,
};
