import { IBaseResponse } from './baseResponse';

export interface ICategory {
  _id: string;
  name: string;
  description: string;
}

export type TResponse = IBaseResponse<ICategory>;
