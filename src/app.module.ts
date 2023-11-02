import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { BalancedsubstrModule } from './balancedsubstr/balancedsubstr.module';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    FibonacciModule, BalancedsubstrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

