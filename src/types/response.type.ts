export interface Response {
    success?: boolean;
    message?: string;
    status?: number;
    data?: unknown;
    [key: string]: unknown;
  }

  export  interface AuthResponse extends Response {
    data?: {
      token?: string;
      info?: {
        _id: string;
        name: string;
        email: string;
        role: string;
        [key: string]: unknown;
      };
    };
  }