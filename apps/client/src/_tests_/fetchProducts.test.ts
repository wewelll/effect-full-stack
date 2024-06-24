import { Effect } from 'effect';
import {
  fetchProductsJson,
  fetchProducts,
  fetchProduct,
} from '../fetchProducts';
import { ProductId } from '@effect-full-stack/domain';

describe('fetchProductsJson', () => {
  it('should fetch products as json', async () => {
    const response = await Effect.runPromise(fetchProductsJson);
    expect(response).toBeInstanceOf(Array);
  });
});

describe('fetchProducts', () => {
  it('should fetch products as json', async () => {
    const response = await Effect.runPromise(fetchProducts);
    expect(response.length).toBe(3);
  });
});

describe('fetchProduct', () => {
  it('should fetch products as json', async () => {
    const id = ProductId.make('5ea9097e-c5f8-41de-b0a2-8e1a03df8b2d');
    const response = await Effect.runPromise(fetchProduct(id));
    expect(response.id).toBe(id);
  });
});
