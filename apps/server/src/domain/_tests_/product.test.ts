import { getProducts } from '../Product';
import { Effect } from 'effect';

it('should decode a Product', () => {
  const products = Effect.runSync(getProducts);

  expect(products).toBeTruthy();
  expect(products.length).toBe(3);
});
