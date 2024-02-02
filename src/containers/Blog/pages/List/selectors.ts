import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { IBlogListInitialState } from './slice';

const selectBlogList = (state: RootState): IBlogListInitialState =>
  state[REDUCERS.BLOG_LIST];
const blogList = (state: RootState) => selectBlogList(state).blogs;
const isLoading = (state: RootState) => selectBlogList(state).loading;
const totalCount = (state: RootState) => selectBlogList(state).totalCount;
const activePage = (state: RootState) => selectBlogList(state).activePage;
const pageSize = (state: RootState) => selectBlogList(state).pageSize;

export const blogListSelectors = {
  blogList,
  isLoading,
  totalCount,
  activePage,
  pageSize,
};
