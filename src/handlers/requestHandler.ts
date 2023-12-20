import { store } from '@/store/store';
import { InternalAxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { IAuthInitialState } from '@/store/auth';
import { getBrowserName } from '../utils/getBrowserName';

const requestHandler = (request: InternalAxiosRequestConfig) => {
  const authState = store.getState().auth as IAuthInitialState;
  const zoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;

  console.log('authState.token', authState.token);

  if (authState.token) {
    request.headers['x-access-token'] = authState.token;
    request.headers['X-Request-Id'] = uuidv4();
  }

  request.headers['X-Zone-Id'] = zoneId;
  request.headers['X-Device-Id'] = getBrowserName(navigator?.userAgent);

  return request;
};

export { requestHandler };
