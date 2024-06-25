import { pipe } from 'effect';
import { RouterBuilder } from 'effect-http';
import { api } from '@effect-full-stack/api';

export const apiRouter = pipe(RouterBuilder.make(api), RouterBuilder.build);
