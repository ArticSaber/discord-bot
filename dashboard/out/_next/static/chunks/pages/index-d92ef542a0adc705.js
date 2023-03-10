(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(3264);
        },
      ]);
    },
    3264: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return w;
          },
        });
      var s = t(5893),
        i = t(7294),
        r = t(9666),
        o = (0, r.Z)(
          (0, s.jsx)("path", {
            d: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
          }),
          "YouTube"
        ),
        l = (0, r.Z)(
          (0, s.jsx)("path", {
            d: "M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23c-.25-.44-.79-.62-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41c-.02.22-.03.44-.03.67s.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
          }),
          "SettingsRounded"
        ),
        c = t(5446);
      var a = (0, t(6212).zo)("div", {
        w: "100%",
        mr: "auto",
        ml: "auto",
        variants: {
          fluid: { true: { maxWidth: "100%" } },
          responsive: {
            true: {
              "@xs": { maxWidth: "$breakpoints$xs" },
              "@sm": { maxWidth: "$breakpoints$sm" },
              "@md": { maxWidth: "$breakpoints$md" },
              "@lg": { maxWidth: "$breakpoints$lg" },
              "@xl": { maxWidth: "$breakpoints$xl" },
            },
          },
        },
        defaultVariants: { fluid: !1, responsive: !0 },
      });
      const d = ({
        xs: e,
        sm: n,
        md: t,
        lg: r,
        xl: o,
        wrap: l,
        gap: c,
        as: d,
        display: u,
        justify: x,
        direction: p,
        alignItems: h,
        alignContent: f,
        children: m,
        responsive: g,
        fluid: y,
        css: j,
        ...v
      }) => {
        const $ = (0, i.useMemo)(() => `calc(${c} * $space$sm)`, [c]);
        return (0, s.jsx)(a, {
          css: {
            px: $,
            maxWidth: e
              ? "$breakpoints$xs"
              : n
              ? "$breakpoints$sm"
              : t
              ? "$breakpoints$md"
              : r
              ? "$breakpoints$lg"
              : o
              ? "$breakpoints$xl"
              : "",
            alignItems: h,
            alignContent: f,
            flexWrap: l,
            display: u,
            justifyContent: x,
            flexDirection: p,
            ...j,
          },
          responsive: g,
          fluid: y,
          as: d,
          ...v,
          children: m,
        });
      };
      (d.toString = () => ".nextui-container"),
        (d.defaultProps = {
          gap: 2,
          xs: !1,
          sm: !1,
          md: !1,
          lg: !1,
          xl: !1,
          responsive: !0,
          fluid: !1,
          wrap: "wrap",
          as: "div",
          display: "block",
        });
      var u = i.memo(d),
        x = t(5208),
        p = t(1160),
        h = t(6979),
        f = t(7370),
        m = t(9008),
        g = t.n(m),
        y = t(1163),
        j = t(4051),
        v = t.n(j);
      function $(e, n, t, s, i, r, o) {
        try {
          var l = e[r](o),
            c = l.value;
        } catch (a) {
          return void t(a);
        }
        l.done ? n(c) : Promise.resolve(c).then(s, i);
      }
      var b = function () {
          return new Promise(
            (function () {
              var e,
                n =
                  ((e = v().mark(function e(n, t) {
                    var s;
                    return v().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch("/api/data", { method: "GET" })
                            );
                          case 2:
                            return (
                              (s = e.sent), (e.t0 = n), (e.next = 6), s.json()
                            );
                          case 6:
                            (e.t1 = e.sent), (0, e.t0)(e.t1);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var n = this,
                      t = arguments;
                    return new Promise(function (s, i) {
                      var r = e.apply(n, t);
                      function o(e) {
                        $(r, s, i, o, l, "next", e);
                      }
                      function l(e) {
                        $(r, s, i, o, l, "throw", e);
                      }
                      o(void 0);
                    });
                  });
              return function (e, t) {
                return n.apply(this, arguments);
              };
            })()
          );
        },
        w = function (e) {
          var n = (0, y.useRouter)(),
            t = (0, i.useState)(null),
            r = t[0],
            a = t[1];
          return (
            (0, i.useEffect)(function () {
              b().then(a);
            }, []),
            (0, s.jsxs)(u, {
              children: [
                (0, s.jsx)(g(), {
                  children: (0, s.jsx)("title", {
                    children: "Discord Music Bot",
                  }),
                }),
                (0, s.jsxs)(u, {
                  css: {
                    display: "flex",
                    alignItems: "center",
                    background: "$gray50",
                    position: "fixed",
                    padding: "20px",
                    minWidth: "100%",
                    left: "0",
                    top: "0",
                    zIndex: "$5",
                  },
                  children: [
                    (0, s.jsx)(x.ZP, {
                      css: { fontSize: "$xl", fontWeight: "$semibold" },
                      href: "#",
                      children: r ? r.name : "Discord Music Bot",
                    }),
                    (0, s.jsx)(x.ZP, {
                      color: "text",
                      css: {
                        fontSize: "$lg",
                        fontWeight: "$medium",
                        marginLeft: "20px",
                      },
                      href: "#",
                      children: "Home",
                    }),
                    (0, s.jsx)(x.ZP, {
                      color: "text",
                      css: {
                        fontSize: "$lg",
                        fontWeight: "$medium",
                        marginLeft: "20px",
                      },
                      href: "#features",
                      children: "Features",
                    }),
                    (0, s.jsx)(p.ZP, {
                      onClick: function () {
                        return n.push("/dashboard");
                      },
                      css: { marginLeft: "auto" },
                      auto: !0,
                      shadow: !0,
                      children: "Dashboard",
                    }),
                  ],
                }),
                (0, s.jsxs)(u, {
                  style: {
                    textAlign: "center",
                    marginTop: "1rem",
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  },
                  children: [
                    (0, s.jsx)(h.Z, {
                      h1: !0,
                      css: {
                        textGradient: "180deg, $blue600 -20%, $blue800 100%",
                      },
                      children: "Discord Music Bot",
                    }),
                    (0, s.jsx)(h.Z, {
                      h3: !0,
                      css: { color: "$gray800" },
                      children:
                        "An advanced discord music bot, supports Spotify, SoundCloud, YouTube with Shuffling, Volume Control and Web Dashboard!",
                    }),
                    (0, s.jsxs)(u, {
                      css: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: [
                        (0, s.jsx)(p.ZP, {
                          color: "primary",
                          onClick: function () {
                            return n.push("/login");
                          },
                          shadow: !0,
                          style: { marginTop: "1rem" },
                          children: "Login",
                        }),
                        (0, s.jsx)(p.ZP, {
                          color: "primary",
                          flat: !0,
                          onClick: function () {
                            return window.open(
                              "https://github.com/SudhanPlayz/Discord-MusicBot"
                            );
                          },
                          style: { marginTop: "1rem", marginLeft: "20px" },
                          children: "Github",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(u, {
                  css: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "60vh",
                  },
                  children: [
                    (0, s.jsx)(h.Z, { h2: !0, children: "Features" }),
                    (0, s.jsxs)(u, {
                      css: {
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      },
                      children: [
                        (0, s.jsxs)(f.ZP, {
                          isHoverable: !0,
                          css: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "10px",
                            width: "300px",
                            padding: "20px",
                            textAlign: "center",
                          },
                          children: [
                            (0, s.jsx)(o, {
                              style: { fontSize: "150px", color: "#3694FF" },
                            }),
                            (0, s.jsx)(h.Z, {
                              h3: !0,
                              children:
                                "Spotify, Soundcloud, and Youtube support",
                            }),
                            (0, s.jsx)(h.Z, {
                              css: { color: "$gray800" },
                              children:
                                "Use your spotify playlist, youtube videos, youtube playlists and much more using this bot",
                            }),
                          ],
                        }),
                        (0, s.jsxs)(f.ZP, {
                          isHoverable: !0,
                          css: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "10px",
                            width: "300px",
                            padding: "20px",
                            textAlign: "center",
                          },
                          children: [
                            (0, s.jsx)(c.Z, {
                              style: { fontSize: "150px", color: "#3694FF" },
                            }),
                            (0, s.jsx)(h.Z, {
                              h3: !0,
                              children: "Lag-free Music",
                            }),
                            (0, s.jsx)(h.Z, {
                              css: { color: "$gray800" },
                              children:
                                "This bot will never lag when playing any song in a voice channel",
                            }),
                          ],
                        }),
                        (0, s.jsxs)(f.ZP, {
                          isHoverable: !0,
                          css: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "10px",
                            width: "300px",
                            padding: "20px",
                            textAlign: "center",
                          },
                          children: [
                            (0, s.jsx)(l, {
                              style: { fontSize: "150px", color: "#3694FF" },
                            }),
                            (0, s.jsx)(h.Z, {
                              h3: !0,
                              children: "Server Settings",
                            }),
                            (0, s.jsx)(h.Z, {
                              css: { color: "$gray800" },
                              children:
                                "Control your song looping song or queue, play or pause your song easily, or stop the bot completely.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(u, {
                  css: {
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "60vh",
                  },
                  children: [
                    (0, s.jsx)(h.Z, {
                      h2: !0,
                      children: "What are you waiting for?",
                    }),
                    (0, s.jsx)(p.ZP, {
                      shadow: !0,
                      size: "md",
                      css: { marginTop: "5em" },
                      children: "Start Now",
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(0, [470, 204, 774, 888, 179], function () {
      return (n = 8312), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
