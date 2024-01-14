import { IBaseResponse } from './baseResponse';

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  tags: [string];
  category: string;
  viewCount: number;
  poster: [File | Blob];
}

export type TBlogValues = Omit<IBlog, '_id' | 'viewCount'>;

export type TResponse = IBaseResponse<IBlog>;
