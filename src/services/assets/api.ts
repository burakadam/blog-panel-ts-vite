import axiosInstance from '../axios';
import API_ROUTES from './routes';

const uploadImage = async (e: unknown) => {
  console.log('ui', e);
  const imageResponse = axiosInstance.post(API_ROUTES.post, e, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return imageResponse;
};

export { uploadImage };
