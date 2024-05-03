import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./testing/msw/node";


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
