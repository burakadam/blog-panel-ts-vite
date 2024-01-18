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

export { createBlog, getBlogList };
