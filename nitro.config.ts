// https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2024-11-01",
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
    },
    "/photos/yecdn/**": {
      proxy: "https://i.yecdn.com/images/**",
    },
  },
});
