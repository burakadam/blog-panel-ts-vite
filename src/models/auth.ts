import { IBaseResponse } from './baseResponse';

export interface IUser {
  email: string;
  password: string;
  permissions: [string];
  token: string;
}

export type TResponse = IBaseResponse<IUser>;
