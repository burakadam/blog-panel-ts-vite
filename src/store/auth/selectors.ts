import { REDUCERS } from '@/constants/reducers';
import { IAuthInitialState } from '.';
import { RootState } from '../store';

const selectAuth = (state: RootState): IAuthInitialState =>
  state[REDUCERS.AUTH];

const userToken = (state: RootState) => selectAuth(state).token;
const loading = (state: RootState) => selectAuth(state).loading;

export const authSelectors = {
  userToken,
  loading,
};
