import { NodeHttpServer, NodeRuntime } from '@effect/platform-node';
import { Layer, pipe } from 'effect';
import { router } from './router';
import { createServer } from 'http';
import { HttpMiddleware, HttpServer } from '@effect/platform';

export const server = pipe(
  router,
  HttpMiddleware.logger,
  HttpServer.serve(),
  HttpServer.withLogAddress
);

const program = pipe(
  server,
  Layer.provide(NodeHttpServer.layer(() => createServer(), { port: 8080 })),
  Layer.launch
);

NodeRuntime.runMain(program);
