import { Inject, Injectable, Logger } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class BalancedsubstrService {
  logger: Logger;
  constructor(
    @Inject(CACHE_MANAGER) private cachemanager: Cache) {
    this.logger = new Logger(BalancedsubstrService.name);
  }

  async getlongestbalancedstring(String) {
    // check if data is in cache:
    const cachedData = await this.cachemanager.get(String);
    if (cachedData) {
      return cachedData;
    }
    // if not, call method and set the cache:
    let allsubstrings = [];
    for (let i = 0; i < String.length; i++) {
      for (let j = i + 2; j <= String.length; j++) {
        const substring = String.substring(i, j);
        if (this.isBalancedSubstring(substring)) {
          allsubstrings.push(substring);
        }
      }
    }
    // Removing duplicates
    allsubstrings = allsubstrings.filter((arr, index, item) => index == item.indexOf(arr));
    //sorting array and finding length of longest string
    var longestbalancedarray = [];
    if (allsubstrings && allsubstrings.length > 0) {
      const sortedarray = allsubstrings.sort((a, b) => a.length - b.length);
      const length = sortedarray[sortedarray.length - 1].length;
      for (const i of sortedarray) {
        if (i.length == length) {
          longestbalancedarray.push(i);
        }
      }
    }
    await this.cachemanager.set(String, longestbalancedarray, 30000);
    return await longestbalancedarray;
  }

  isBalancedSubstring(substring) {
    const charCount = new Map();
    for (const char of substring) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    const counts = Array.from(charCount.values());
    return counts.length === 2 && counts[0] === counts[1];
  }
}
