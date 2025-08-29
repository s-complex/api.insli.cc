// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "2025-08-29",
  srcDir: "server",
  routeRules: {
    "/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    },
    "/photos/alice": {
      proxy: "https://avatars.githubusercontent.com/u/81961962",
    }
  },
});
