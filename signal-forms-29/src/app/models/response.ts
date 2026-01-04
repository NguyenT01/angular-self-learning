export default interface TResponse<T> {
  success: boolean;
  data: T;
  errorCode?: number;
  errorMessage?: string;
}
