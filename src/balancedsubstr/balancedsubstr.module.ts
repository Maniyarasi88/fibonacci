import { Module } from '@nestjs/common';
import { BalancedsubstrService } from './balancedsubstr.service';
import { BalancedsubstrController } from './balancedsubstr.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExcludeNullInterceptor} from 'src/interceptors/custom.interceptor';
import { HttpExceptionFilter } from 'src/interceptors/exception.filter';
@Module({
  controllers: [BalancedsubstrController],
  providers: [BalancedsubstrService, {
    provide: APP_INTERCEPTOR,
    useClass: ExcludeNullInterceptor
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: HttpExceptionFilter
  },],
})
export class BalancedsubstrModule {}
