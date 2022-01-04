require("esbuild")
  .build({
    entryPoints: ["./src/server/server.ts"],
    bundle: true,
    platform: "node",
    outdir: "./build/",
  })
  .catch(() => process.exit(1));
