import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from '@effect/platform';
import { Product } from '../domain';
import { Schema } from '@effect/schema';

export const fetchProductsJson = HttpClientRequest.get(
  'http://localhost:8080/products'
).pipe(HttpClient.fetchOk, HttpClientResponse.json);

export const fetchProducts = HttpClientRequest.get(
  'http://localhost:8080/products'
).pipe(
  HttpClient.fetchOk,
  HttpClientResponse.schemaBodyJsonScoped(Schema.Array(Product))
);
