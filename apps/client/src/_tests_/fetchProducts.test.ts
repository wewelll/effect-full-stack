import { Effect } from 'effect';
import { fetchProductsJson } from '../fetchProducts';

describe('fetchProductsJson', () => {
  it('should fetch products as json', async () => {
    const response = await Effect.runPromise(fetchProductsJson);
    expect(response).toBeInstanceOf(Array);
  });
});
