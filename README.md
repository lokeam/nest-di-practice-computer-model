## Nest.js Dependency Injection Practice - Modeling a Basic Computer

Micro demo app that models the inner workings of a computer.

Compute Module contains Controller that depends upon CPU and Disk Module Services. Both of these Services depend upon the Power Module.

This code doesn't do anything save illustrate the workings of Modules and Dependency Injection in Nest.js. Built for the sake of understanding DI within Nest.js.

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```