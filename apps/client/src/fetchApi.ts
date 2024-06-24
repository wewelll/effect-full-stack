import { api } from '@effect-full-stack/api';
import { ProductId } from '@effect-full-stack/domain';
import { Client } from 'effect-http';

const apiClient = Client.make(api, { baseUrl: 'http://localhost:8080/api' });

export const fetchApiProducts = apiClient.getProducts({});

export const fetchApiProduct = (productId: ProductId) =>
  apiClient.getProduct({ path: { productId } });
