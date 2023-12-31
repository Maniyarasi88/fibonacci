import { Module } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { FibonacciController } from './fibonacci.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExcludeNullInterceptor} from 'src/interceptors/custom.interceptor';
import { HttpExceptionFilter } from 'src/interceptors/exception.filter';
@Module({
  controllers: [FibonacciController],
  providers: [FibonacciService, {
    provide: APP_INTERCEPTOR,
    useClass: ExcludeNullInterceptor
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: HttpExceptionFilter
  },],
})
export class FibonacciModule {}
