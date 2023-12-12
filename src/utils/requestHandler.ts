import { store } from '@/store/store';
import { InternalAxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { getBrowserName } from './getBrowserName';

const requestHandler = (request: InternalAxiosRequestConfig) => {
  const authState = store.getState().auth;
  const zoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (authState.token) {
    request.headers.Authorization = `Bearer ${authState.token}`;
    request.headers['X-Request-Id'] = uuidv4();
  }

  request.headers['X-Zone-Id'] = zoneId;
  request.headers['X-Device-Id'] = getBrowserName(navigator?.userAgent);

  return request;
};

export { requestHandler };
