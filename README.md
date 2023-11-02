## Description

Swagger link - http://localhost:3001/fibonacci

API end point link for fibonacci  : http://localhost:3001/fibonacci/{number}

API end point link for Longest Balanced Substring  : http://localhost:3001/balancedsubstr/{string}

Example : To find Fibonacci value of 7 
          http://localhost:3001/fibonacci/7

          To find Longest Balanced Substring  of "abababa" 
          http://localhost:3001/fibonacci/abababa

Implentation of API :  Promise with an asynchronous recursive function is used to fetch fibonacci value and BigInt data type is used to fetch fibonacci value for large number. cachemanager NPM module is used to store the value for specific time and return directly from cache . Interceptors like timeout , unhandled exceptions are included.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Maniyarasi]

## License

Nest is [MIT licensed](LICENSE).
