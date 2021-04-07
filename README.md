
<p align="center"><b>Context explained</b></p>
<p align="center">
  <img src="https://i.imgur.com/GcPOLvO.png" width="100%" alt="Arquitetura API" /></a>
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Swagger API docs

This  repo uses the NestJS swagger module for API documentation. NestJS Swagger - https://app-immobile-api.herokuapp.com/immobile/api/

## Running with Docker and Docker Compose
```bash
$ docker-compose up -d --build
```

## Installation

```bash
$ npm install
```
## Environment Variables
```
END_POINT = 'http://localhost'
PORT = 3001 [PORT OF APP]

ROUTE_PREFIX = 'immobile' [PREFIX OF ROUTES]

MIN_METER_ALLOWED = 10 [MIN OF METER ALLOWED]
MAX_METER_ALLOWED = 10000 [MAX OF METER ALLOWED]

END_POINT_SQUARE_METER_API = 'http://localhost:3000/square-meter' [END POINT OF SQUARE METER API]

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

  Nest is [MIT licensed](LICENSE).
