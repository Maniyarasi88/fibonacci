import { Inject, Injectable, Logger } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
@Injectable()
export class FibonacciService {
  logger: Logger;
  constructor(
    @Inject(CACHE_MANAGER) private cachemanager: Cache) {
    this.logger = new Logger(FibonacciService.name);
  }

  async getFibonacciNum(n) {
    try {
      // check if data is in cache:
      const cachedData = await this.cachemanager.get(n);
      if (cachedData) {
        return cachedData;
      }
      // if not, call API and set the cache:
      function do_fibo(a, b, n, resolve) {
        if (n < 1) {
          return resolve(b);
        }

        setImmediate(() => {
          do_fibo(b, a + b, n - 1, resolve);
        });
      }
      const result = await new Promise((resolve) => {
        do_fibo(BigInt(0), BigInt(1), n - 1, resolve);
      });
      await this.cachemanager.set(n, result, 30000);
      return await result;
    } catch (error) {
      return error;
    }
  }
}
