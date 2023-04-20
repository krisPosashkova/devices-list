export interface ErrorResponse {
  error: Error
}

interface ErrorResponseData {
  msg: string;
  code: number;
}

interface Error {
  error: ErrorResponseData
}