import { IBaseResponse } from '@/models/baseResponse';
import { authActions } from '@/store/auth';
import { store } from '@/store/store';
import { notification } from 'antd';

const errorHandler = (response: { response: { data: IBaseResponse } }) => {
  const {
    response: {
      data: { errorMessage, statusCode },
    },
  } = response;

  if (statusCode === 401) store.dispatch(authActions.logout());

  notification.error({
    message: statusCode,
    description: errorMessage,
  });
};

export { errorHandler };
