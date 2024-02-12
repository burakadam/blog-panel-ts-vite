import { IBaseResponse } from './baseResponse';

export interface IRole {
  _id: string;
  name: string;
  permissions: [{ name: string; id: string }];
}

export type TResponse = IBaseResponse<IRole>;
