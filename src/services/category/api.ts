import { ICategory, TCategoryValues } from '@/models/category';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const getCategoryList = async (): Promise<unknown> => {
  const categoryResponse = await axiosInstance.get(API_ROUTES.list);
  return categoryResponse;
};

const createCategory = async (params: TCategoryValues) => {
  const categoryResponse = await axiosInstance.post(API_ROUTES.create, params);
  return categoryResponse;
};

const updateCategory = async (params: ICategory) => {
  const categoryResponse = await axiosInstance.post(API_ROUTES.update, params);
  return categoryResponse;
};

const getCategoryDetail = async (_id: string) => {
  const categoryResponse = await axiosInstance.post(API_ROUTES.detail, { _id });
  return categoryResponse;
};

export { createCategory, getCategoryDetail, getCategoryList, updateCategory };
