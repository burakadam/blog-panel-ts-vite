import { TBlogValues } from '@/models/blog';
import axiosInstance from '../axios';
import API_ROUTES from './routes';

const createBlog = async (params: TBlogValues | FormData) => {
  const blogResponse = await axiosInstance.post(API_ROUTES.create, params);
  return blogResponse;
};

export { createBlog };
