export interface IBaseResponse {
  message?: string | null;
  payload?: object;
  errorMessage: string | null;
  statusCode: number;
  success: boolean;
}
