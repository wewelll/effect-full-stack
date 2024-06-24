import { Schema } from '@effect/schema';

export const ProductId = Schema.UUID.pipe(Schema.brand('ProductId'));

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
