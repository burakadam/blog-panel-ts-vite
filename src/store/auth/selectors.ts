import { REDUCERS } from '@/constants/reducers';
import { IAuthInitialState } from '.';
import { RootState } from '../store';

const selectAuth = (state: RootState): IAuthInitialState =>
  state[REDUCERS.AUTH];

const userToken = (state: RootState) => selectAuth(state).token;
const loadingLogin = (state: RootState) => selectAuth(state).loadings.login;
const loadingUserData = (state: RootState) =>
  selectAuth(state).loadings.userData;

export const authSelectors = {
  userToken,
  loadingLogin,
  loadingUserData,
};
