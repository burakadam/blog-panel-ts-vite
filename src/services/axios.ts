import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_URL,
  timeout: 30000,
});

axiosInstance.interceptors.response.use(
  function (response) {
    const res = response.data;

    if (!res.success) {
      console.log(res.error.code);

      return Promise.reject(res.error);
    }

    return response;
  },
  function (respErrObj) {
    const errCode = respErrObj.response.data.error.code;

    // UNSUCCESSFULL_AUTHORIZATION
    if (errCode === 1002) {
      //   store.dispatch(authActions.logout());
      console.log('auth');
    } else {
      console.log('error-code', errCode);
    }
  }
);

axiosInstance.interceptors.request.use(function (request) {
  //   const authState = store.getState().auth;
  //   const zoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;

  //   request.data = removeEmptyParams(request.data);

  //   if (authState.token)
  //     request.headers.Authorization = `Bearer ${authState.token}`;
  //   request.headers['X-Request-Id'] = uuidv4();
  //   request.headers['X-Zone-Id'] = zoneId;
  //   request.headers['X-Device-Id'] =
  //     navigator?.userAgentData?.platform || navigator?.platform || '';

  return request;
});

export default axiosInstance;
