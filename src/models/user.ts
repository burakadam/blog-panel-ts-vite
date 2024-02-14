import { IBaseResponse } from './baseResponse';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  fullName: string;
  profileImage: string;
  role: string;
  isActive: boolean;
}

export type TUserValues = Omit<IUser, 'proileImage'>;

export interface IToggleValues {
  id: string;
  isActive: boolean;
}

export type TResponse = IBaseResponse<IUser>;
