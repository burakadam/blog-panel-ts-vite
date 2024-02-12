import { IBaseResponse } from './baseResponse';

export interface IPermission {
  name: string;
  id: string;
}

export type TResponse = IBaseResponse<IPermission>;
