import { errorHandler } from '@/handlers/errorHandler';
import { requestHandler } from '@/handlers/requestHandler';
import { responseHandler } from '@/handlers/responseHandler';
import axios from 'axios';

const axiosFormInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosFormInstance.interceptors.response.use(responseHandler, errorHandler);

axiosFormInstance.interceptors.request.use(requestHandler);

export default axiosFormInstance;
