export interface IBaseResponse<T> {
  message?: string | null;
  payload?: T | null;
  errorMessage: string | null;
  statusCode: number;
  success: boolean;
}
