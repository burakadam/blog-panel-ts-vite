import { IBaseResponse } from './baseResponse';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  fullName: string;
  profilePicture: [File | Blob] | string;
  role: string;
  isActive: boolean;
  token?: string;
}

export type TUserValues = Omit<IUser, 'proileImage'>;

export type TUserProfileValues = Pick<
  IUser,
  '_id' | 'profilePicture' | 'fullName'
>;

export interface IToggleValues {
  id: string;
  isActive: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export type TResponse = IBaseResponse<IUser>;
