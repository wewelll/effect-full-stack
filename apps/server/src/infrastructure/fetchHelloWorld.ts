import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from '@effect/platform';
import { pipe } from 'effect';

export const fetchHelloWorld = pipe(
  HttpClientRequest.get('http://localhost:8080/'),
  HttpClient.fetchOk,
  HttpClientResponse.text
);
