import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from '@effect/platform';

export const fetchHelloWorld = HttpClientRequest.get(
  'http://localhost:8080/'
).pipe(HttpClient.fetchOk, HttpClientResponse.text);
