export interface LoginResponse {
  msg: string;
  data: LoginData;
}

interface LoginData {
  access_token: string;
  token_type: string;
  expires_at: number;
}

