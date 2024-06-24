import {
  HttpMiddleware,
  HttpRouter,
  HttpServer,
  HttpServerResponse,
} from '@effect/platform';
import { pipe } from 'effect';

const router = pipe(
  HttpRouter.empty,
  HttpRouter.get('/', HttpServerResponse.text('Hello World'))
);

export const server = pipe(
  router,
  HttpMiddleware.logger,
  HttpServer.serve(),
  HttpServer.withLogAddress
);
