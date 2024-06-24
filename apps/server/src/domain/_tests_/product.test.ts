import { Schema } from '@effect/schema';
import { Product } from '../Product';
import productsJson from '../products.json';

it('should decode a Product', () => {
  const products = Schema.decodeUnknownSync(Schema.Array(Product))(
    productsJson
  );
  expect(products).toBeTruthy();
});
