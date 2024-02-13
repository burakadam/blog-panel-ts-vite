import { IBaseResponse } from './baseResponse';

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  profileImage: string;
  role: string;
}

export type TUserValues = Omit<IUser, 'proileImage'>;

export type TResponse = IBaseResponse<IUser>;
