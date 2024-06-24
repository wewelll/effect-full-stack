import { HttpRouter, HttpServerResponse } from '@effect/platform';
import { Effect, Option, pipe } from 'effect';
import { getProductById, getProducts, Product, ProductId } from '../domain';
import { Schema } from '@effect/schema';

export const router = pipe(
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
      Effect.andThen(
        Option.match({
          onNone: () => HttpServerResponse.empty({ status: 404 }),
          onSome: HttpServerResponse.schemaJson(Product),
        })
      )
    )
  )
);
