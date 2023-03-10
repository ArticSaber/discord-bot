(self.__BUILD_MANIFEST = (function (s, e) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [s, e, "static/chunks/pages/index-d92ef542a0adc705.js"],
    "/_error": ["static/chunks/pages/_error-0a004b8b8498208d.js"],
    "/dashboard": [s, e, "static/chunks/pages/dashboard-b7b11b36ad21338a.js"],
    "/login": ["static/chunks/pages/login-5adb30b3971e39f7.js"],
    "/logout": ["static/chunks/pages/logout-d6478f918d6c9e75.js"],
    "/servers": [s, "static/chunks/pages/servers-6763ed5cfd9d1b90.js"],
    "/servers/[id]": [
      s,
      "static/chunks/pages/servers/[id]-9dbd9ebbbb10dff9.js",
    ],
    sortedPages: [
      "/",
      "/_app",
      "/_error",
      "/dashboard",
      "/login",
      "/logout",
      "/servers",
      "/servers/[id]",
    ],
  };
})(
  "static/chunks/470-351dc976d74fe66a.js",
  "static/chunks/204-cf80f7b59eff8ee9.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
