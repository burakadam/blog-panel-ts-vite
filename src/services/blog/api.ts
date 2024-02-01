import { TBlogSearchParams, TBlogValues } from '@/models/blog';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const createBlog = async (params: TBlogValues | FormData) => {
  const blogResponse = await axiosInstance.post(API_ROUTES.create, params);
  return blogResponse;
};

const getBlogList = async (params: TBlogSearchParams) => {
  const blogResponse = await axiosInstance.post(API_ROUTES.list, params);
  return blogResponse;
};

const getBlogDetail = async (_id: string) => {
  const blogResponse = await axiosInstance.post(API_ROUTES.detail, { _id });
  return blogResponse;
};

export { createBlog, getBlogDetail, getBlogList };
