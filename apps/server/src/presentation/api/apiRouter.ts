import { Effect, pipe } from 'effect';
import { RouterBuilder, HttpError } from 'effect-http';
import { api } from './api';
import { getProductById, getProducts } from '../../domain';

export const apiRouter = pipe(
  RouterBuilder.make(api),
  RouterBuilder.handle('getProducts', () => getProducts),
  RouterBuilder.handle('getProduct', ({ path: { productId } }) =>
    getProductById(productId).pipe(
      Effect.flatten,
      Effect.catchTag('NoSuchElementException', () => HttpError.notFoundError())
    )
  ),
  RouterBuilder.build
);
