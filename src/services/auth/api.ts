export interface ILogin {
  email: string;
  password: string;
}

const login = async (params: ILogin): Promise<boolean> => {
  console.log('login params', params);
  return new Promise((resolve) => {
    resolve(true);
  });
};

export { login };
