import { TUserValues } from '@/models/user';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const createUser = async (params: TUserValues) => {
  const userResponse = await axiosInstance.post(API_ROUTES.create, params);
  return userResponse;
};

const getUserList = async () => {
  const userResponse = await axiosInstance.post(API_ROUTES.list);
  return userResponse;
};

export { createUser, getUserList };
