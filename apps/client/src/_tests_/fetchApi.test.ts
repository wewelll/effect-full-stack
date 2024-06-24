import { Effect } from 'effect';
import { fetchApiProducts, fetchApiProduct } from '../fetchApi';
import { ProductId } from '@effect-full-stack/domain';

describe('fetchApiProducts', () => {
  it('should fetch products as json', async () => {
    const response = await Effect.runPromise(fetchApiProducts);
    expect(response.length).toBe(3);
  });
});

describe('fetchProduct', () => {
  it('should fetch products as json', async () => {
    const id = ProductId.make('5ea9097e-c5f8-41de-b0a2-8e1a03df8b2d');
    const response = await Effect.runPromise(fetchApiProduct(id));
    expect(response.id).toBe(id);
  });
});
