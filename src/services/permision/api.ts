import axiosInstance from '../axios';
import API_ROUTES from './routes';

const getPermissionList = async (): Promise<unknown> => {
  const categoryResponse = await axiosInstance.get(API_ROUTES.list);
  return categoryResponse;
};

export { getPermissionList };
