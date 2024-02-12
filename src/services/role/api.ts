import { TRoleValues } from '@/models/role';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const createRole = async (params: TRoleValues) => {
  const roleResponse = await axiosInstance.post(API_ROUTES.create, params);
  return roleResponse;
};

export { createRole };
