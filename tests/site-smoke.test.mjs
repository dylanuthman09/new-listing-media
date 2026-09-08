import assert from "node:assert/strict";
import test from "node:test";

const routes = [
  "/",
  "/about",
  "/contact",
  "/gallery",
  "/insights",
  "/order",
  "/photography",
  "/services",
  "/services/aerial-photography-film",
  "/services/real-estate-photography",
  "/videography",
];

const workerUrl = new URL("../dist/_worker.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("all primary site routes render HTML successfully", async () => {
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, `${route} returned ${response.status}`);
    assert.match(
      response.headers.get("content-type") ?? "",
      /^text\/html\b/i,
      `${route} did not return HTML`,
    );

    const html = await response.text();
    assert.match(html, /<title>[^<]+<\/title>/i, `${route} is missing a title`);
    assert.match(html, /New Listing Media/i, `${route} is missing site content`);
  }
});
