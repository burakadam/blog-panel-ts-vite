import { IBaseResponse } from './baseResponse';

export interface IRole {
  _id: string;
  name: string;
  permissions: [{ name: string; id: string }];
}

export type TRoleValues = Pick<IRole, 'name' | 'permissions'>;

export type TRoleId = Pick<IRole, '_id'>;

export type TResponse = IBaseResponse<IRole>;
