import { IBaseResponse } from './baseResponse';

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  tags: [string];
  category: string;
  viewCount: number;
  poster: [File | Blob];
}

export type TBlogValues = Omit<IBlog, '_id' | 'viewCount'>;

export type TBlogList = Pick<
  IBlog,
  '_id' | 'title' | 'viewCount' | 'createdAt' | 'category' | 'updatedAt'
>;

export type TBlogId = {
  _id: string;
};

export type TBlogSearchParams = {
  page: number;
  pageSize: number;
  search: string | undefined;
};

export type TResponse = IBaseResponse<IBlog>;
export type TListResponse = IBaseResponse<TBlogList>;
