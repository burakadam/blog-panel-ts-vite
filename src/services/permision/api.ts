import axiosInstance from '../axios';
import API_ROUTES from './routes';

const getPermissionList = async (): Promise<unknown> => {
  const permissionResponse = await axiosInstance.get(API_ROUTES.list);
  return permissionResponse;
};

export { getPermissionList };
