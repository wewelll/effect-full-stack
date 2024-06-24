import { pipe } from 'effect';
import { Api } from 'effect-http';
import { Product, ProductId } from '@effect-full-stack/domain';
import { Schema } from '@effect/schema';

export const api = pipe(
  Api.make({ title: 'Products API' }),
  Api.addEndpoint(
    pipe(
      Api.get('getProducts', '/products'),
      Api.setResponseBody(Schema.Array(Product))
    )
  ),
  Api.addEndpoint(
    pipe(
      Api.get('getProduct', '/products/:productId'),
      Api.setRequestPath(Schema.Struct({ productId: ProductId })),
      Api.setResponseBody(Product)
    )
  )
);
