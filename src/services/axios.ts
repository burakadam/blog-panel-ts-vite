import { errorHandler } from '@/utils/errorHandler';
import { requestHandler } from '@/utils/requestHandler';
import { responseHandler } from '@/utils/responseHandler';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_URL,
  timeout: 30000,
});

axiosInstance.interceptors.response.use(responseHandler, errorHandler);

axiosInstance.interceptors.request.use(requestHandler);

export default axiosInstance;
