import { IBaseResponse } from './baseResponse';

export interface ICategory {
  _id: string;
  name: string;
  description: string;
}

export type TCategoryValues = Pick<ICategory, 'description' | 'name'>;

export type TCategoryId = {
  _id: string;
};

export type TResponse = IBaseResponse<ICategory>;
