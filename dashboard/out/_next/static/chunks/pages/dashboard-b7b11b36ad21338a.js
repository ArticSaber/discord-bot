(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [26],
  {
    528: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dashboard",
        function () {
          return r(8510);
        },
      ]);
    },
    7529: function (n, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return p;
        },
      });
      var t = r(5893),
        s = r(5208),
        i = r(1160),
        o = r(7294),
        c = r(88),
        a = r(6772);
      const l = (0, r(6212).zo)("span", {
          size: "1px",
          variants: {
            inline: {
              true: { display: "inline-block" },
              false: { display: "block" },
            },
          },
          defaultVariants: { inline: !1 },
        }),
        d = ({ x: n, y: e, inline: r, css: s, ...i }) => {
          const o = (0, a.m)(n),
            c = (0, a.m)(e);
          return (0, t.jsx)(l, {
            css: {
              marginLeft: `${o} !important`,
              marginTop: `${c} !important`,
              ...s,
            },
            "aria-hidden": "true",
            ...i,
          });
        };
      d.toString = () => ".nextui-spacer";
      const u = o.memo(d);
      var h = (0, c.Z)(u, { x: 1, y: 1 }),
        x = r(1163);
      function f() {
        var n = (0, x.useRouter)();
        return (0, t.jsxs)("div", {
          style: {
            height: "100%",
            width: "250px",
            backgroundColor: "#16181A",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "50px",
            marginRight: "50px",
          },
          children: [
            (0, t.jsx)(s.ZP, {
              css: {
                fontSize: "$xl2",
                fontWeight: "bold",
                marginBottom: "30px",
                color: "#fff",
              },
              children: "Discord Music Bot",
            }),
            (0, t.jsx)(i.ZP, {
              css: {
                background:
                  "/dashboard" == n.pathname ? "$primary" : "$gray100",
              },
              onClick: function () {
                return n.push("/dashboard");
              },
              style: { marginBottom: "10px" },
              children: "Dashboard",
            }),
            (0, t.jsx)(i.ZP, {
              css: {
                background: "/servers" == n.pathname ? "$primary" : "$gray100",
              },
              color: "default",
              onClick: function () {
                return n.push("/servers");
              },
              style: { marginBottom: "10px" },
              children: "Servers",
            }),
            (0, t.jsx)(h, {}),
            (0, t.jsx)(i.ZP, {
              color: "error",
              flat: !0,
              onClick: function () {
                return n.push("/logout");
              },
              style: { marginBottom: "10px" },
              children: "Logout",
            }),
          ],
        });
      }
      function p(n) {
        return (0, t.jsxs)("div", {
          style: { width: "100vw", height: "100vh", display: "flex" },
          children: [
            (0, t.jsx)(f, {}),
            (0, t.jsx)("div", {
              style: { marginTop: "30px" },
              children: n.children,
            }),
          ],
        });
      }
    },
    8510: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return y;
          },
        });
      var t = r(5893),
        s = r(9008),
        i = r.n(s),
        o = r(9666),
        c = (0, o.Z)(
          (0, t.jsx)("path", {
            d: "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89l-2.26-.97c-.65-.28-.81-1.13-.31-1.63l3.01-3.01c.47-.47 1.15-.68 1.81-.55l1.32.27zm1.49 10.16c.3.3.74.38 1.12.2 1.16-.54 3.65-1.81 5.26-3.42 4.59-4.59 4.63-8.33 4.36-9.93-.07-.4-.39-.72-.79-.79-1.6-.27-5.34-.23-9.93 4.36-1.61 1.61-2.87 4.1-3.42 5.26-.18.38-.09.83.2 1.12l3.2 3.2zm6.97-1.7c-2.29 2.04-5.58 3.44-5.89 3.57l.97 2.26c.28.65 1.13.81 1.63.31l3.01-3.01c.47-.47.68-1.15.55-1.81l-.27-1.32zm-8.71 2.6c.2 1.06-.15 2.04-.82 2.71-.77.77-3.16 1.34-4.71 1.64-.69.13-1.3-.48-1.17-1.17.3-1.55.86-3.94 1.64-4.71.67-.67 1.65-1.02 2.71-.82 1.17.22 2.13 1.18 2.35 2.35zM13 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z",
          }),
          "RocketLaunchRounded"
        ),
        a = (0, o.Z)(
          (0, t.jsx)("path", {
            d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z",
          }),
          "PersonRounded"
        ),
        l = (0, o.Z)(
          (0, t.jsx)("path", {
            d: "M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
          }),
          "DnsRounded"
        ),
        d = r(5446),
        u = r(7529),
        h = r(7370),
        x = r(6979);
      function f(n) {
        return (0, t.jsx)(h.ZP, {
          variant: "flat",
          isHoverable: !0,
          css: { margin: "10px", width: "200px", padding: "15px" },
          children: (0, t.jsxs)(h.ZP.Body, {
            css: {
              display: "flex",
              padding: "0",
              alignItems: "center",
              flexDirection: "row",
            },
            children: [
              (0, t.jsxs)("div", {
                style: { marginRight: "auto" },
                children: [
                  (0, t.jsx)(x.Z, {
                    h4: !0,
                    css: { color: "GrayText" },
                    children: n.title,
                  }),
                  (0, t.jsx)(x.Z, { h3: !0, children: n.amount }),
                ],
              }),
              n.icon,
            ],
          }),
        });
      }
      var p = r(7294),
        m = r(4051),
        v = r.n(m);
      function g(n, e, r, t, s, i, o) {
        try {
          var c = n[i](o),
            a = c.value;
        } catch (l) {
          return void r(l);
        }
        c.done ? e(a) : Promise.resolve(a).then(t, s);
      }
      var j = function () {
          return new Promise(
            (function () {
              var n,
                e =
                  ((n = v().mark(function n(e, r) {
                    var t, s;
                    return v().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              fetch("/api/dashboard", { method: "GET" })
                            );
                          case 2:
                            return (t = n.sent), (n.next = 5), t.json();
                          case 5:
                            (s = n.sent), e(s);
                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })),
                  function () {
                    var e = this,
                      r = arguments;
                    return new Promise(function (t, s) {
                      var i = n.apply(e, r);
                      function o(n) {
                        g(i, t, s, o, c, "next", n);
                      }
                      function c(n) {
                        g(i, t, s, o, c, "throw", n);
                      }
                      o(void 0);
                    });
                  });
              return function (n, r) {
                return e.apply(this, arguments);
              };
            })()
          );
        },
        y = function (n) {
          var e = (0, p.useState)(null),
            r = e[0],
            s = e[1];
          return (
            (0, p.useEffect)(function () {
              j().then(s);
            }),
            (0, t.jsxs)(u.Z, {
              children: [
                (0, t.jsx)(i(), {
                  children: (0, t.jsx)("title", {
                    children: "Dashboard | Discord Music Bot",
                  }),
                }),
                (0, t.jsx)("h1", { children: "Dashboard" }),
                (0, t.jsxs)("div", {
                  style: { display: "flex" },
                  children: [
                    (0, t.jsx)(f, {
                      title: "Commands Ran",
                      amount: r ? r.commandsRan : "Loading",
                      icon: (0, t.jsx)(c, { fontSize: "large" }),
                    }),
                    (0, t.jsx)(f, {
                      title: "Users",
                      amount: r ? r.users : "Loading",
                      icon: (0, t.jsx)(a, { fontSize: "large" }),
                    }),
                    (0, t.jsx)(f, {
                      title: "Servers",
                      amount: r ? r.servers : "Loading",
                      icon: (0, t.jsx)(l, { fontSize: "large" }),
                    }),
                    (0, t.jsx)(f, {
                      title: "Songs Played",
                      amount: r ? r.songsPlayed : "Loading",
                      icon: (0, t.jsx)(d.Z, { fontSize: "large" }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
  },
  function (n) {
    n.O(0, [470, 204, 774, 888, 179], function () {
      return (e = 528), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
