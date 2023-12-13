import { IBaseResponse } from './baseResponse';

export interface IUser {
  user: {
    email: string;
    password: string;
    permissions: [string];
    token: string;
  };
}

export type TResponse = IBaseResponse<IUser>;
