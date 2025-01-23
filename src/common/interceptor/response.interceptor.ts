import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  result: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        console.log({ data })
        return {
          status: context.switchToHttp().getResponse().statusCode,
          message: data?.message ? data?.message : true,
          result: data && data?.res ? data.res : data ? data : {},
        }
      })
    );
  }
}
