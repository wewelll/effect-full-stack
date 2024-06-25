import {
  NodeContext,
  NodeHttpServer,
  NodeRuntime,
} from '@effect/platform-node';
import { Layer, pipe } from 'effect';
import { router } from './router.example';
import { createServer } from 'http';
import { HttpMiddleware, HttpRouter, HttpServer } from '@effect/platform';
import { apiRouter } from './apiRouter';
import { NodeSwaggerFiles } from 'effect-http-node';

export const server = pipe(
  router,
  HttpRouter.mountApp('/api', apiRouter),
  HttpMiddleware.logger,
  HttpServer.serve(),
  HttpServer.withLogAddress
);

const program = pipe(
  server,
  Layer.provide(NodeHttpServer.layer(() => createServer(), { port: 8080 })),
  Layer.provide(NodeSwaggerFiles.SwaggerFilesLive),
  Layer.provide(NodeContext.layer),
  Layer.launch
);

NodeRuntime.runMain(program);
