export interface SaveRequestBody {
    code: string;
    name: string;
  }
  
  export interface SaveResponse {
    message: string;
    data: {
      code: string;
      name: string;
    };
  }