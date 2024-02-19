import { ILogin } from '@/models/user';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const login = async (params: ILogin): Promise<unknown> => {
  const loginResponse = await axiosInstance.post(API_ROUTES.login, params);

  return loginResponse;
};

const getUserData = async (): Promise<unknown> => {
  const userDataResponse = await axiosInstance.get(API_ROUTES.me);
  return userDataResponse;
};

const updateUser = async (params: FormData) => {
  console.log('updateUser', params);
  const userResponse = await axiosInstance.post(API_ROUTES.update, params);
  return userResponse;
};

export { getUserData, login, updateUser };
