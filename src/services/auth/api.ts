import axiosInstance from '../axios';
import API_ROUTES from './routes';

export interface ILogin {
  email: string;
  password: string;
}

const login = async (params: ILogin): Promise<unknown> => {
  console.log('login params', params);

  const loginResponse = await axiosInstance.post(API_ROUTES.login, params);

  return loginResponse;
};

export { login };