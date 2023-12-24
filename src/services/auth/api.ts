import axiosInstance from '../axios';
import API_ROUTES from './routes';

export interface ILogin {
  email: string;
  password: string;
}

const login = async (params: ILogin): Promise<unknown> => {
  const loginResponse = await axiosInstance.post(API_ROUTES.login, params);

  return loginResponse;
};

const getUserData = async (): Promise<unknown> => {
  const userDataResponse = await axiosInstance.get(API_ROUTES.me);
  return userDataResponse;
};

export { getUserData, login };
