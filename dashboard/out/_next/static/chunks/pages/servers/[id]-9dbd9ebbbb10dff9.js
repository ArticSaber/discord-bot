(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [341],
  {
    8974: function (n, r, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/servers/[id]",
        function () {
          return i(6261);
        },
      ]);
    },
    7529: function (n, r, i) {
      "use strict";
      i.d(r, {
        Z: function () {
          return x;
        },
      });
      var t = i(5893),
        e = i(5208),
        s = i(1160),
        o = i(7294),
        a = i(88),
        c = i(6772);
      const l = (0, i(6212).zo)("span", {
          size: "1px",
          variants: {
            inline: {
              true: { display: "inline-block" },
              false: { display: "block" },
            },
          },
          defaultVariants: { inline: !1 },
        }),
        u = ({ x: n, y: r, inline: i, css: e, ...s }) => {
          const o = (0, c.m)(n),
            a = (0, c.m)(r);
          return (0, t.jsx)(l, {
            css: {
              marginLeft: `${o} !important`,
              marginTop: `${a} !important`,
              ...e,
            },
            "aria-hidden": "true",
            ...s,
          });
        };
      u.toString = () => ".nextui-spacer";
      const d = o.memo(u);
      var h = (0, a.Z)(d, { x: 1, y: 1 }),
        p = i(1163);
      function f() {
        var n = (0, p.useRouter)();
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
            (0, t.jsx)(e.ZP, {
              css: {
                fontSize: "$xl2",
                fontWeight: "bold",
                marginBottom: "30px",
                color: "#fff",
              },
              children: "Discord Music Bot",
            }),
            (0, t.jsx)(s.ZP, {
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
            (0, t.jsx)(s.ZP, {
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
            (0, t.jsx)(s.ZP, {
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
      function x(n) {
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
    6261: function (n, r, i) {
      "use strict";
      i.r(r),
        i.d(r, {
          default: function () {
            return a;
          },
        });
      var t = i(5893),
        e = i(9008),
        s = i.n(e),
        o = i(7529);
      function a(n) {
        var r = "Amongus";
        return (0, t.jsxs)(o.Z, {
          children: [
            (0, t.jsx)(s(), { children: (0, t.jsx)("title", { children: r }) }),
            (0, t.jsx)("h1", { children: r }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [470, 774, 888, 179], function () {
      return (r = 8974), n((n.s = r));
      var r;
    });
    var r = n.O();
    _N_E = r;
  },
]);
