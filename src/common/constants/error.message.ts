export class ErrorMessage {
  static errorMessage(message: string, status: number, customErrorNumber: number) {
    return {
      timestamp: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      message: message,
      status: status,
      customErrorNumber: customErrorNumber,
    };
  }

  static systemError: any = {
    INVALID_REQUEST: this.errorMessage('Invalid Request', 403, 400000),
    SOMETHING_WENT_WRONG: this.errorMessage('Something went wrong', 401, 400001)
  };

  static user: any = {
    INORRECT_CRED: this.errorMessage('Email and password mismatched.', 403, 300000),
    UNAUTHORIZED: this.errorMessage('Unauthorized', 403, 300002,),
    NOT_FOUND: this.errorMessage('User not found.', 404, 300001,),
  }
}
