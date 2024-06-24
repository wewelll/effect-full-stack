import {
  HttpMiddleware,
  HttpRouter,
  HttpServer,
  HttpServerResponse,
} from '@effect/platform';
import { Effect, pipe } from 'effect';
import { getProducts, Product } from '../domain';
import { Schema } from '@effect/schema';

const router = pipe(
  HttpRouter.empty,
  HttpRouter.get('/', HttpServerResponse.text('Hello World')),
  HttpRouter.get(
    '/products',
    pipe(
      getProducts,
      Effect.andThen(HttpServerResponse.schemaJson(Schema.Array(Product)))
    )
  )
);

export const server = pipe(
  router,
  HttpMiddleware.logger,
  HttpServer.serve(),
  HttpServer.withLogAddress
);
