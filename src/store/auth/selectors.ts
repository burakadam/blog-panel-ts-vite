import { REDUCERS } from '@/constants/reducers';
import { RootState } from '../store';

const selectAuth = (state: RootState) => state[REDUCERS.AUTH];

const userToken = (state: RootState) => selectAuth(state).token;
const loading = (state: RootState) => selectAuth(state).loading;

export const authSelectors = {
  userToken,
  loading,
};
