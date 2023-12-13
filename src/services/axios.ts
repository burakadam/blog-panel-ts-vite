import { errorHandler } from '@/handlers/errorHandler';
import { requestHandler } from '@/handlers/requestHandler';
import { responseHandler } from '@/handlers/responseHandler';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_URL,
  timeout: 30000,
});

axiosInstance.interceptors.response.use(responseHandler, errorHandler);

axiosInstance.interceptors.request.use(requestHandler);

export default axiosInstance;
