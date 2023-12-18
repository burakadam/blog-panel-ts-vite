import axiosInstance from '../axios';
import API_ROUTES from './routes';

const getCategoryList = async (): Promise<unknown> => {
  const categoryResponse = await axiosInstance.get(API_ROUTES.list);
  return categoryResponse;
};

export { getCategoryList };
