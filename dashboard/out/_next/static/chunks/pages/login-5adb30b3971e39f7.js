(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    3236: function (n, i, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return t(9694);
        },
      ]);
    },
    9694: function (n, i, t) {
      "use strict";
      t.r(i);
      var o = t(5893),
        e = t(9008),
        c = t.n(e),
        r = t(7294);
      i.default = function (n) {
        return (
          (0, r.useEffect)(function () {
            window.location.href = "/api/login";
          }),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(c(), {
                children: (0, o.jsx)("title", {
                  children: "Logging In | Discord Music Bot",
                }),
              }),
              (0, o.jsx)("p", { children: "Redirecting you to login..." }),
            ],
          })
        );
      };
    },
    9008: function (n, i, t) {
      n.exports = t(3121);
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (i = 3236), n((n.s = i));
      var i;
    });
    var i = n.O();
    _N_E = i;
  },
]);
