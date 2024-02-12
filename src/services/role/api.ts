import { TRoleValues } from '@/models/role';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const createRole = async (params: TRoleValues) => {
  const roleResponse = await axiosInstance.post(API_ROUTES.create, params);
  return roleResponse;
};

const getRoleList = async () => {
  const roleResponese = await axiosInstance.get(API_ROUTES.list);
  return roleResponese;
};

export { createRole, getRoleList };
