import { HttpRouter, HttpServerResponse } from '@effect/platform';
import { pipe } from 'effect';

export const router = pipe(
  HttpRouter.empty,
  HttpRouter.get('/', HttpServerResponse.text('Hello World'))
);
