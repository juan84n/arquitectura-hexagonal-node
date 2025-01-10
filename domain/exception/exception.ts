interface IException {
  code: string
  status: number
  data: {
    error: string
    message: string
  }
}

export class BusinessException extends Error {
  public error: IException;
  constructor (error: any) {
    super();
    this.error = {
      code: error?.code,
      status: error?.response?.status,
      data: {
        error: error?.response?.data?.error,
        message: error?.response?.data?.message
      }
    };
  }

  public getError (): IException {
    return this.error;
  }
}
