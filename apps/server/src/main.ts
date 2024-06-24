import { NodeHttpServer, NodeRuntime } from '@effect/platform-node';
import { Layer, pipe } from 'effect';
import { server } from './presentation/server';
import { createServer } from 'http';

const program = pipe(
  server,
  Layer.provide(NodeHttpServer.layer(() => createServer(), { port: 8080 })),
  Layer.launch
);

NodeRuntime.runMain(program);
