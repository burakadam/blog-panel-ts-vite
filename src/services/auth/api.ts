export interface ILogin {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token: string;
}

const login = async (params: ILogin): Promise<LoginResponse> => {
  console.log('login params', params);
  return new Promise((resolve) => {
    resolve({
      success: true,
      token: '123',
    });
  });
};

export { login };
