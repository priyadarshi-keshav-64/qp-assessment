import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorMessage } from '../constants/error.message';

interface customException {
  timestamp: string;
  message: string;
  httpStatus: number;
  customErrorNumber: number;
  query?: string;
}
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

  catch(err: customException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const tag = request.url;
    console.log({ err })
    if (!err) err = ErrorMessage.systemError.SOMETHING_WENT_WRONG;
    if (err.query) err = ErrorMessage.systemError.SOMETHING_WENT_WRONG;

    const errorObj = err;
    void response.status(err?.httpStatus || 400).send(errorObj);
  }
}
