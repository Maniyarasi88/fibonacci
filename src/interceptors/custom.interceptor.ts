// import { map, Observable } from 'rxjs';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reflector } from '@nestjs/core'




export interface Response<T> {
    data: T;
}


import { SetMetadata } from '@nestjs/common'

export const ResponseMessageKey = 'ResponseMessageKey'
export const ResponseMessage = (message: string) => SetMetadata(ResponseMessageKey, message)


@Injectable()
export class TransformationInterceptor<T>
    implements NestInterceptor<T, Response<T>>
{
    constructor(private reflector: Reflector) { }

    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<Response<T>> {
        const responseMessage = this.reflector.get<string>(
            ResponseMessageKey,
            context.getHandler()
        ) ?? ''

        return next.handle().pipe(
            map((data) => ({
                data,
                statusCode: context.switchToHttp().getResponse().statusCode,
                message: responseMessage
            }))
        )
    }
}


export class ExcludeNullInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next
        .handle()
        .pipe(map(value => value === null ? '' : value ));
    }

}