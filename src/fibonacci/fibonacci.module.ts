import { Module } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { FibonacciController } from './fibonacci.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExcludeNullInterceptor, TransformationInterceptor } from 'src/interceptors/custom.interceptor';
import { HttpExceptionFilter } from 'src/interceptors/exception.filter';
@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
  ],
  controllers: [FibonacciController],
  providers: [FibonacciService, {
    provide: APP_INTERCEPTOR,
    useClass: ExcludeNullInterceptor
  },
  // {
  //   provide: APP_INTERCEPTOR,
  //   useClass: TransformationInterceptor
  // },
  {
    provide: APP_INTERCEPTOR,
    useClass: HttpExceptionFilter
  },],
})
export class FibonacciModule {}
