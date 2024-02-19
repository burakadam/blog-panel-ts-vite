import { REDUCERS } from '@/constants/reducers';
import { IAuthInitialState } from '.';
import { RootState } from '../store';

const selectAuth = (state: RootState): IAuthInitialState =>
  state[REDUCERS.AUTH];

const userToken = (state: RootState) => selectAuth(state).token;
const loadingLogin = (state: RootState) => selectAuth(state).loadings.login;
const loadingUserData = (state: RootState) =>
  selectAuth(state).loadings.userData;
const loadingUserProfile = (state: RootState) =>
  selectAuth(state).loadings.profile;
const user = (state: RootState) => selectAuth(state).user;

export const authSelectors = {
  userToken,
  loadingLogin,
  loadingUserData,
  user,
  loadingUserProfile,
};
