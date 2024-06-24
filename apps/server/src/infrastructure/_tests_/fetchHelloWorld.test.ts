import { Effect } from 'effect';
import { fetchHelloWorld } from '../fetchHelloWorld';

describe('fetchHelloWorld', () => {
  it('should fetch hello world', async () => {
    const response = await Effect.runPromise(fetchHelloWorld);
    expect(response).toStrictEqual('Hello World');
  });
});
