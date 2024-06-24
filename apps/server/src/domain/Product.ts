import { Schema } from '@effect/schema';
import { productsData } from './productsData';
import { Array, Effect } from 'effect';

export const ProductId = Schema.UUID.pipe(Schema.brand('ProductId'));
export type ProductId = typeof ProductId.Type;

export enum MusicGenre {
  electronic = 'electronic',
  jazz = 'jazz',
  reggae = 'reggae',
}

export const Product = Schema.Struct({
  id: ProductId,
  title: Schema.String.pipe(Schema.nonEmpty(), Schema.maxLength(100)),
  artist: Schema.String,
  genre: Schema.Enums(MusicGenre),
  tracks: Schema.Array(Schema.String),
  createdAt: Schema.Date,
  deletedAt: Schema.NullOr(Schema.Date),
});

export const getProducts = Schema.decodeUnknown(Schema.Array(Product))(
  productsData
);

export const getProductById = (id: ProductId) =>
  getProducts.pipe(
    Effect.andThen(Array.findFirst((product) => product.id === id))
  );
