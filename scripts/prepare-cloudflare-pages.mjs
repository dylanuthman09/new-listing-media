import { access, cp, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist");
const clientRoot = path.join(outputRoot, "client");
const serverRoot = path.join(outputRoot, "server");
const pagesWorkerPath = path.join(outputRoot, "_worker.js");

await access(path.join(serverRoot, "index.js"));
await access(clientRoot);

await rm(pagesWorkerPath, { recursive: true, force: true });
const pagesEntryPath = path.join(serverRoot, "pages-entry.js");
await writeFile(
  pagesEntryPath,
  `import app from "./index.js";

const rootAssets = new Set([
  "/favicon.svg",
  "/file.svg",
  "/globe.svg",
  "/window.svg",
  "/og.png",
  "/og-video-hero.png",
]);

export default {
  fetch(request, env, context) {
    const pathname = new URL(request.url).pathname;
    if (
      pathname.startsWith("/assets/") ||
      pathname.startsWith("/media/") ||
      rootAssets.has(pathname)
    ) {
      return env.ASSETS.fetch(request);
    }
    return app.fetch(request, env, context);
  },
};
`,
  "utf8",
);
await build({
  configFile: false,
  logLevel: "warn",
  build: {
    emptyOutDir: false,
    outDir: outputRoot,
    ssr: true,
    rollupOptions: {
      input: pagesEntryPath,
      external: [/^node:/],
      output: {
        codeSplitting: false,
        entryFileNames: "_worker.js",
        format: "es",
      },
    },
  },
});

for (const entry of await readdir(clientRoot)) {
  await cp(path.join(clientRoot, entry), path.join(outputRoot, entry), {
    recursive: true,
    force: true,
  });
}

await rm(clientRoot, { recursive: true, force: true });
await rm(serverRoot, { recursive: true, force: true });
await rm(path.join(projectRoot, ".wrangler", "deploy"), {
  recursive: true,
  force: true,
});

console.log("Prepared dist for Cloudflare Pages advanced mode.");
