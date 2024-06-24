import {
  HttpMiddleware,
  HttpRouter,
  HttpServer,
  HttpServerResponse,
} from '@effect/platform';
import { Effect, pipe } from 'effect';
import { getProductById, getProducts, Product, ProductId } from '../domain';
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
  ),
  HttpRouter.get(
    '/products/:productId',
    pipe(
      HttpRouter.schemaPathParams(Schema.Struct({ productId: ProductId })),
      Effect.andThen(({ productId }) => getProductById(productId)),
      Effect.andThen(HttpServerResponse.schemaJson(Product))
    )
  )
);

export const server = pipe(
  router,
  HttpMiddleware.logger,
  HttpServer.serve(),
  HttpServer.withLogAddress
);
