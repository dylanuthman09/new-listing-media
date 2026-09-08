import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("build output is deployable by Cloudflare Pages advanced mode", async () => {
  await assert.doesNotReject(
    access(new URL("dist/_worker.js", projectRoot)),
    "dist/_worker.js must exist so Pages can route requests through the Vinext worker",
  );
  await assert.doesNotReject(
    access(new URL("dist/assets", projectRoot)),
    "client assets must be copied to the Pages output root",
  );
  await assert.doesNotReject(
    access(new URL("dist/_routes.json", projectRoot)),
    "Pages must bypass the worker when serving static assets",
  );
  await assert.rejects(
    access(new URL("dist/server", projectRoot)),
    "the Workers-format server directory must be converted to Pages advanced mode",
  );
});
