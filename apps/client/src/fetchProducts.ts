import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from '@effect/platform';
import { Product, ProductId } from '@effect-full-stack/domain';
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
export const fetchProduct = (id: ProductId) =>
  HttpClientRequest.get(`http://localhost:8080/products/${id}`).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Product)
  );
