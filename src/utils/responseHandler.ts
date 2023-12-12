import { notification } from 'antd';
import { AxiosResponse } from 'axios';

const responseHandler = (response: AxiosResponse) => {
  const res = response.data;

  if (!res.success) {
    console.log('%%%responseHandler%%', res.error.statusCode);

    notification.error({
      message: res.statusCode,
      description: res.errorMessage,
    });

    return Promise.reject(res.error);
  }

  return response;
};

export { responseHandler };
