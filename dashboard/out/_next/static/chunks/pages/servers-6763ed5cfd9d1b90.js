(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [745],
  {
    6693: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      var o = r(7294),
        n = (t, e = !0) => {
          (0, o.useEffect)(() => {
            const r = () => t();
            return (
              e && r(),
              window.addEventListener("resize", r),
              () => window.removeEventListener("resize", r)
            );
          }, []);
        };
    },
    8485: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/servers",
        function () {
          return r(6795);
        },
      ]);
    },
    7529: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return $;
        },
      });
      var o = r(5893),
        n = r(5208),
        a = r(1160),
        i = r(7294),
        l = r(88),
        s = r(6772);
      const c = (0, r(6212).zo)("span", {
          size: "1px",
          variants: {
            inline: {
              true: { display: "inline-block" },
              false: { display: "block" },
            },
          },
          defaultVariants: { inline: !1 },
        }),
        u = ({ x: t, y: e, inline: r, css: n, ...a }) => {
          const i = (0, s.m)(t),
            l = (0, s.m)(e);
          return (0, o.jsx)(c, {
            css: {
              marginLeft: `${i} !important`,
              marginTop: `${l} !important`,
              ...n,
            },
            "aria-hidden": "true",
            ...a,
          });
        };
      u.toString = () => ".nextui-spacer";
      const d = i.memo(u);
      var f = (0, l.Z)(d, { x: 1, y: 1 }),
        p = r(1163);
      function m() {
        var t = (0, p.useRouter)();
        return (0, o.jsxs)("div", {
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
            (0, o.jsx)(n.ZP, {
              css: {
                fontSize: "$xl2",
                fontWeight: "bold",
                marginBottom: "30px",
                color: "#fff",
              },
              children: "Discord Music Bot",
            }),
            (0, o.jsx)(a.ZP, {
              css: {
                background:
                  "/dashboard" == t.pathname ? "$primary" : "$gray100",
              },
              onClick: function () {
                return t.push("/dashboard");
              },
              style: { marginBottom: "10px" },
              children: "Dashboard",
            }),
            (0, o.jsx)(a.ZP, {
              css: {
                background: "/servers" == t.pathname ? "$primary" : "$gray100",
              },
              color: "default",
              onClick: function () {
                return t.push("/servers");
              },
              style: { marginBottom: "10px" },
              children: "Servers",
            }),
            (0, o.jsx)(f, {}),
            (0, o.jsx)(a.ZP, {
              color: "error",
              flat: !0,
              onClick: function () {
                return t.push("/logout");
              },
              style: { marginBottom: "10px" },
              children: "Logout",
            }),
          ],
        });
      }
      function $(t) {
        return (0, o.jsxs)("div", {
          style: { width: "100vw", height: "100vh", display: "flex" },
          children: [
            (0, o.jsx)(m, {}),
            (0, o.jsx)("div", {
              style: { marginTop: "30px" },
              children: t.children,
            }),
          ],
        });
      }
    },
    1551: function (t, e, r) {
      "use strict";
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
        return o;
      }
      function n(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var o,
                n,
                a = [],
                i = !0,
                l = !1;
              try {
                for (
                  r = r.call(t);
                  !(i = (o = r.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  i = !0
                );
              } catch (s) {
                (l = !0), (n = s);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (l) throw n;
                }
              }
              return a;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return o(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return o(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a,
        i = (a = r(7294)) && a.__esModule ? a : { default: a },
        l = r(1003),
        s = r(880),
        c = r(9246);
      function u(t, e) {
        if (null == t) return {};
        var r,
          o,
          n = (function (t, e) {
            if (null == t) return {};
            var r,
              o,
              n = {},
              a = Object.keys(t);
            for (o = 0; o < a.length; o++)
              (r = a[o]), e.indexOf(r) >= 0 || (n[r] = t[r]);
            return n;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (n[r] = t[r]));
        }
        return n;
      }
      var d = {};
      function f(t, e, r, o) {
        if (t && l.isLocalURL(e)) {
          t.prefetch(e, r, o).catch(function (t) {
            0;
          });
          var n =
            o && "undefined" !== typeof o.locale ? o.locale : t && t.locale;
          d[e + "%" + r + (n ? "%" + n : "")] = !0;
        }
      }
      var p = i.default.forwardRef(function (t, e) {
        var r,
          o = t.legacyBehavior,
          a = void 0 === o ? !0 !== Boolean(!1) : o,
          p = t.href,
          m = t.as,
          $ = t.children,
          x = t.prefetch,
          g = t.passHref,
          h = t.replace,
          v = t.shallow,
          b = t.scroll,
          y = t.locale,
          w = t.onClick,
          C = t.onMouseEnter,
          j = u(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
          ]);
        (r = $),
          a &&
            "string" === typeof r &&
            (r = i.default.createElement("a", null, r));
        var E,
          S = !1 !== x,
          T = s.useRouter(),
          k = i.default.useMemo(
            function () {
              var t = n(l.resolveHref(T, p, !0), 2),
                e = t[0],
                r = t[1];
              return { href: e, as: m ? l.resolveHref(T, m) : r || e };
            },
            [T, p, m]
          ),
          z = k.href,
          M = k.as,
          N = i.default.useRef(z),
          L = i.default.useRef(M);
        a && (E = i.default.Children.only(r));
        var I = a ? E && "object" === typeof E && E.ref : e,
          R = n(c.useIntersection({ rootMargin: "200px" }), 3),
          A = R[0],
          O = R[1],
          Z = R[2],
          _ = i.default.useCallback(
            function (t) {
              (L.current === M && N.current === z) ||
                (Z(), (L.current = M), (N.current = z)),
                A(t),
                I &&
                  ("function" === typeof I
                    ? I(t)
                    : "object" === typeof I && (I.current = t));
            },
            [M, I, z, Z, A]
          );
        i.default.useEffect(
          function () {
            var t = O && S && l.isLocalURL(z),
              e = "undefined" !== typeof y ? y : T && T.locale,
              r = d[z + "%" + M + (e ? "%" + e : "")];
            t && !r && f(T, z, M, { locale: e });
          },
          [M, z, O, y, S, T]
        );
        var P = {
          ref: _,
          onClick: function (t) {
            a || "function" !== typeof w || w(t),
              a &&
                E.props &&
                "function" === typeof E.props.onClick &&
                E.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, r, o, n, a, i, s) {
                  ("A" !== t.currentTarget.nodeName.toUpperCase() ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      l.isLocalURL(r))) &&
                    (t.preventDefault(),
                    e[n ? "replace" : "push"](r, o, {
                      shallow: a,
                      locale: s,
                      scroll: i,
                    }));
                })(t, T, z, M, h, v, b, y);
          },
          onMouseEnter: function (t) {
            a || "function" !== typeof C || C(t),
              a &&
                E.props &&
                "function" === typeof E.props.onMouseEnter &&
                E.props.onMouseEnter(t),
              l.isLocalURL(z) && f(T, z, M, { priority: !0 });
          },
        };
        if (!a || g || ("a" === E.type && !("href" in E.props))) {
          var W = "undefined" !== typeof y ? y : T && T.locale,
            B =
              T &&
              T.isLocaleDomain &&
              l.getDomainLocale(M, W, T && T.locales, T && T.domainLocales);
          P.href = B || l.addBasePath(l.addLocale(M, W, T && T.defaultLocale));
        }
        return a
          ? i.default.cloneElement(E, P)
          : i.default.createElement("a", Object.assign({}, j, P), r);
      });
      (e.default = p),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          (Object.assign(e.default, e), (t.exports = e.default));
    },
    9246: function (t, e, r) {
      "use strict";
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
        return o;
      }
      function n(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var o,
                n,
                a = [],
                i = !0,
                l = !1;
              try {
                for (
                  r = r.call(t);
                  !(i = (o = r.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  i = !0
                );
              } catch (s) {
                (l = !0), (n = s);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (l) throw n;
                }
              }
              return a;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return o(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return o(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e = t.rootRef,
            r = t.rootMargin,
            o = t.disabled || !l,
            u = a.useRef(),
            d = n(a.useState(!1), 2),
            f = d[0],
            p = d[1],
            m = n(a.useState(e ? e.current : null), 2),
            $ = m[0],
            x = m[1],
            g = a.useCallback(
              function (t) {
                u.current && (u.current(), (u.current = void 0)),
                  o ||
                    f ||
                    (t &&
                      t.tagName &&
                      (u.current = (function (t, e, r) {
                        var o = (function (t) {
                            var e,
                              r = {
                                root: t.root || null,
                                margin: t.rootMargin || "",
                              },
                              o = c.find(function (t) {
                                return (
                                  t.root === r.root && t.margin === r.margin
                                );
                              });
                            o ? (e = s.get(o)) : ((e = s.get(r)), c.push(r));
                            if (e) return e;
                            var n = new Map(),
                              a = new IntersectionObserver(function (t) {
                                t.forEach(function (t) {
                                  var e = n.get(t.target),
                                    r =
                                      t.isIntersecting ||
                                      t.intersectionRatio > 0;
                                  e && r && e(r);
                                });
                              }, t);
                            return (
                              s.set(
                                r,
                                (e = { id: r, observer: a, elements: n })
                              ),
                              e
                            );
                          })(r),
                          n = o.id,
                          a = o.observer,
                          i = o.elements;
                        return (
                          i.set(t, e),
                          a.observe(t),
                          function () {
                            if ((i.delete(t), a.unobserve(t), 0 === i.size)) {
                              a.disconnect(), s.delete(n);
                              var e = c.findIndex(function (t) {
                                return (
                                  t.root === n.root && t.margin === n.margin
                                );
                              });
                              e > -1 && c.splice(e, 1);
                            }
                          }
                        );
                      })(
                        t,
                        function (t) {
                          return t && p(t);
                        },
                        { root: $, rootMargin: r }
                      )));
              },
              [o, $, r, f]
            ),
            h = a.useCallback(function () {
              p(!1);
            }, []);
          return (
            a.useEffect(
              function () {
                if (!l && !f) {
                  var t = i.requestIdleCallback(function () {
                    return p(!0);
                  });
                  return function () {
                    return i.cancelIdleCallback(t);
                  };
                }
              },
              [f]
            ),
            a.useEffect(
              function () {
                e && x(e.current);
              },
              [e]
            ),
            [g, f, h]
          );
        });
      var a = r(7294),
        i = r(4686),
        l = "undefined" !== typeof IntersectionObserver;
      var s = new Map(),
        c = [];
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        (Object.assign(e.default, e), (t.exports = e.default));
    },
    6795: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return G;
          },
        });
      var o = r(5893),
        n = r(9008),
        a = r.n(n),
        i = r(7529),
        l = r(7294),
        s = r(88),
        c = r(3935),
        u = r(2532);
      const d = (t) => {
        const e = document.createElement("div");
        return e.setAttribute("id", t), e;
      };
      var f = (t = (() => Math.random().toString(32).slice(2, 10))(), e) => {
          const r = `nextui-${t}`,
            { isBrowser: o } = (0, u.Z)(),
            [n, a] = (0, l.useState)(o ? d(r) : null);
          return (
            (0, l.useEffect)(() => {
              const t = (e ? e() : null) || document.body,
                o = t.querySelector(`#${r}`),
                n = o || d(r);
              o || t.appendChild(n), a(n);
            }, []),
            n
          );
        },
        p = r(6693),
        m = r(1309),
        $ = (0, s.Z)(
          ({
            children: t,
            childrenRef: e,
            className: r,
            visible: o,
            enterTime: n,
            leaveTime: a,
            clearTime: i,
            name: s,
            onExited: c,
            onEntered: u,
            ...d
          }) => {
            const [f, p] = (0, l.useState)(""),
              [$, x] = (0, l.useState)(o);
            return (
              (0, l.useEffect)(() => {
                const t = o ? "enter" : "leave",
                  e = o ? n : a;
                o && !$ && x(!0), p(`${s}-${t}`);
                const r = setTimeout(() => {
                    p(`${s}-${t} ${s}-${t}-active`),
                      "leave" === t ? null == c || c() : null == u || u(),
                      clearTimeout(r);
                  }, e),
                  l = setTimeout(() => {
                    o || (p(""), x(!1)), clearTimeout(l);
                  }, e + i);
                return () => {
                  clearTimeout(r), clearTimeout(l);
                };
              }, [o, $]),
              (0, l.useEffect)(() => {
                if (null == e || !e.current) return;
                const t = f.split(" "),
                  r = e.current.className
                    .split(" ")
                    .filter((t) => !t.includes(s));
                e.current.className = (0, m.Z)(r, t);
              }, [e, f]),
              l.isValidElement(t) && $
                ? l.cloneElement(t, {
                    ...d,
                    className: (0, m.Z)(
                      t.props.className,
                      r,
                      null != e && e.current ? "" : f
                    ),
                  })
                : null
            );
          },
          {
            visible: !1,
            enterTime: 60,
            leaveTime: 60,
            clearTime: 60,
            className: "",
            name: "transition",
          }
        ),
        x = (t) => {
          (0, l.useEffect)(() => {
            const e = (e) => t(e);
            return (
              document.addEventListener("click", e),
              () => document.removeEventListener("click", e)
            );
          }, [t]);
        };
      const g = {
          top: -1e3,
          left: -1e3,
          right: -1e3,
          bottom: -1e3,
          width: 0,
          height: 0,
        },
        h = (t) => {
          if (!t || !t.current) return g;
          const e = t.current.getBoundingClientRect();
          return {
            ...e,
            width: e.width || e.right - e.left,
            height: e.height || e.bottom - e.top,
            top: e.top + document.documentElement.scrollTop,
            bottom: e.bottom + document.documentElement.scrollTop,
            left: e.left + document.documentElement.scrollLeft,
            right: e.right + document.documentElement.scrollLeft,
          };
        },
        v = { top: "-1000px", left: "-1000px", transform: "none" };
      var b = r(6212);
      const y = (0, b.zo)("div", { width: "max-content", display: "inherit" }),
        w = (0, b.zo)("span", {
          display: "none",
          content: "",
          size: "$5",
          zIndex: "-2",
          background: "$$tooltipColor",
          br: "0px 0px 2px 0px",
          position: "absolute",
        }),
        C = (0, b.zo)("div", {
          position: "relative",
          fs: "$sm",
          padding: 0,
          variants: {
            hideArrow: { false: { [`& ${w}`]: { display: "block" } } },
          },
        }),
        j = (0, b.zo)("div", {
          position: "absolute",
          width: "auto",
          padding: "$3 $sm",
          opacity: 0,
          zIndex: "$10",
          br: "$lg",
          "@motion": { transition: "none" },
          variants: {
            color: {
              default: {
                $$tooltipColor: "$colors$background",
                bg: "$$tooltipColor",
              },
              primary: {
                $$tooltipColor: "$colors$primary",
                bg: "$$tooltipColor",
              },
              secondary: {
                $$tooltipColor: "$colors$secondary",
                bg: "$$tooltipColor",
              },
              success: {
                $$tooltipColor: "$colors$success",
                bg: "$$tooltipColor",
              },
              warning: {
                $$tooltipColor: "$colors$warning",
                bg: "$$tooltipColor",
              },
              error: { $$tooltipColor: "$colors$error", bg: "$$tooltipColor" },
              invert: {
                $$tooltipColor: "$colors$foreground",
                bg: "$$tooltipColor",
              },
            },
            contentColor: {
              default: {
                $$tooltipTextColor: "$colors$text",
                color: "$$tooltipTextColor",
              },
              primary: {
                $$tooltipTextColor: "$colors$primary",
                color: "$$tooltipTextColor",
              },
              secondary: {
                $$tooltipTextColor: "$colors$secondary",
                color: "$$tooltipTextColor",
              },
              success: {
                $$tooltipTextColor: "$colors$success",
                color: "$$tooltipTextColor",
              },
              warning: {
                $$tooltipTextColor: "$colors$warning",
                color: "$$tooltipTextColor",
              },
              error: {
                $$tooltipTextColor: "$colors$error",
                color: "$$tooltipTextColor",
              },
              invert: {
                $$tooltipTextColor: "$colors$invert",
                color: "$$tooltipTextColor",
              },
            },
            rounded: { true: { br: "$pill" } },
            shadow: { true: { bs: "$md" } },
            animated: {
              true: { transition: "opacity 0.25s ease 0s, top 0.25s ease 0s" },
              false: { transition: "none" },
            },
          },
          compoundVariants: [
            {
              color: "primary",
              contentColor: "default",
              css: { $$tooltipTextColor: "$colors$white" },
            },
            {
              color: "secondary",
              contentColor: "default",
              css: { $$tooltipTextColor: "$colors$white" },
            },
            {
              color: "success",
              contentColor: "default",
              css: { $$tooltipTextColor: "$colors$white" },
            },
            {
              color: "error",
              contentColor: "default",
              css: { $$tooltipTextColor: "$colors$white" },
            },
            {
              color: "invert",
              contentColor: "default",
              css: { $$tooltipTextColor: "$colors$background" },
            },
          ],
          defaultVariants: { color: "default", contentColor: "default" },
        }),
        E = "nextui-tooltip",
        S = ({
          children: t,
          parent: e,
          visible: r,
          offset: n,
          placement: a,
          rounded: i,
          animated: s,
          className: u,
          hideArrow: d,
          css: g,
          ...b
        }) => {
          const y = f("tooltip"),
            S = (0, l.useRef)(null),
            [T, k] = (0, l.useState)(v);
          if (!e) return null;
          const z = () => {
              const t = ((t, e, r) => {
                const o = {
                  top: {
                    top: e.top - r + "px",
                    left: `${e.left + e.width / 2}px`,
                    transform: "translate(-50%, -100%)",
                  },
                  topStart: {
                    top: e.top - r + "px",
                    left: `${e.left}px`,
                    transform: "translate(0, -100%)",
                  },
                  topEnd: {
                    top: e.top - r + "px",
                    left: `${e.left + e.width}px`,
                    transform: "translate(-100%, -100%)",
                  },
                  bottom: {
                    top: `${e.bottom + r}px`,
                    left: `${e.left + e.width / 2}px`,
                    transform: "translate(-50%, 0)",
                  },
                  bottomStart: {
                    top: `${e.bottom + r}px`,
                    left: `${e.left}px`,
                    transform: "translate(0, 0)",
                  },
                  bottomEnd: {
                    top: `${e.bottom + r}px`,
                    left: `${e.left + e.width}px`,
                    transform: "translate(-100%, 0)",
                  },
                  left: {
                    top: `${e.top + e.height / 2}px`,
                    left: e.left - r + "px",
                    transform: "translate(-100%, -50%)",
                  },
                  leftStart: {
                    top: `${e.top}px`,
                    left: e.left - r + "px",
                    transform: "translate(-100%, 0)",
                  },
                  leftEnd: {
                    top: `${e.top + e.height}px`,
                    left: e.left - r + "px",
                    transform: "translate(-100%, -100%)",
                  },
                  right: {
                    top: `${e.top + e.height / 2}px`,
                    left: `${e.right + r}px`,
                    transform: "translate(0, -50%)",
                  },
                  rightStart: {
                    top: `${e.top}px`,
                    left: `${e.right + r}px`,
                    transform: "translate(0, 0)",
                  },
                  rightEnd: {
                    top: `${e.top + e.height}px`,
                    left: `${e.right + r}px`,
                    transform: "translate(0, -100%)",
                  },
                };
                return o[t] || o.top;
              })(a, h(e), n);
              k(t);
            },
            {
              transform: M,
              top: N,
              left: L,
              right: I,
              bottom: R,
            } = (0, l.useMemo)(
              () =>
                ((t, e) => {
                  const r = {
                    top: {
                      top: "auto",
                      right: "auto",
                      left: "50%",
                      bottom: "0px",
                      transform: "translate(-50%, 100%) rotate(45deg)",
                    },
                    topStart: {
                      top: "auto",
                      right: "auto",
                      left: "8%",
                      bottom: "0px",
                      transform: "translate(8%, 100%) rotate(45deg)",
                    },
                    topEnd: {
                      top: "auto",
                      right: "8%",
                      left: "auto",
                      bottom: "0px",
                      transform: "translate(8%, 100%) rotate(45deg)",
                    },
                    bottom: {
                      top: "0px",
                      right: "auto",
                      left: "50%",
                      bottom: "auto",
                      transform: "translate(-50%, -100%) rotate(225deg)",
                    },
                    bottomStart: {
                      top: "0px",
                      right: "auto",
                      left: "8%",
                      bottom: "auto",
                      transform: "translate(8%, -100%) rotate(225deg)",
                    },
                    bottomEnd: {
                      top: "0px",
                      right: "8%",
                      left: "auto",
                      bottom: "auto",
                      transform: "translate(8%, -100%) rotate(225deg)",
                    },
                    left: {
                      top: "50%",
                      right: `-${e - 1}px`,
                      left: "auto",
                      bottom: "auto",
                      transform: "translate(100%, -50%) rotate(-45deg)",
                    },
                    leftStart: {
                      top: "calc(15% + 1px)",
                      right: `-${e - 1}px`,
                      left: "auto",
                      bottom: "auto",
                      transform: "translate(100%, 0) rotate(-45deg)",
                    },
                    leftEnd: {
                      top: "auto",
                      right: `-${e - 1}px`,
                      left: "auto",
                      bottom: "calc(15% + 1px)",
                      transform: "translate(100%, 0) rotate(-45deg)",
                    },
                    right: {
                      top: "50%",
                      right: "auto",
                      left: `-${e - 1}px`,
                      bottom: "auto",
                      transform: "translate(-100%, -50%) rotate(135deg)",
                    },
                    rightStart: {
                      top: "calc(15% + 1px)",
                      right: "auto",
                      left: `-${e - 1}px`,
                      bottom: "auto",
                      transform: "translate(-100%, 0) rotate(135deg)",
                    },
                    rightEnd: {
                      top: "auto",
                      right: "auto",
                      left: `-${e - 1}px`,
                      bottom: "calc(15% + 1px)",
                      transform: "translate(-100%, 0) rotate(135deg)",
                    },
                  };
                  return r[t] || r.top;
                })(a, 5),
              [a]
            );
          (0, p.Z)(z),
            x(() => z()),
            (0, l.useEffect)(() => {
              z();
            }, [r]);
          const A = (0, l.useMemo)(() => (r ? "open" : "closed"), [r]);
          return y
            ? (0, c.createPortal)(
                (0, o.jsx)($, {
                  name: `${E}-wrapper`,
                  visible: r,
                  enterTime: 20,
                  leaveTime: 20,
                  children: (0, o.jsx)(j, {
                    className: (0, m.Z)(`${E}-content`, `${E}--${A}`, u),
                    "data-state": A,
                    ref: S,
                    onClick: (t) => {
                      t.stopPropagation(),
                        t.nativeEvent.stopImmediatePropagation();
                    },
                    animated: s,
                    css: {
                      left: T.left,
                      top: `calc(${T.top} + 6px)`,
                      transform: T.transform,
                      [`&.${E}-wrapper-enter-active`]: {
                        opacity: 1,
                        top: T.top,
                      },
                      ...g,
                    },
                    ...b,
                    children: (0, o.jsxs)(C, {
                      role: "tooltip",
                      "data-state": A,
                      hideArrow: d,
                      className: (0, m.Z)(E, { [`${E}--with-arrow`]: !d }),
                      children: [
                        (0, o.jsx)(w, {
                          className: `${E}-arrow`,
                          css: {
                            left: L,
                            top: N,
                            right: I,
                            bottom: R,
                            transform: M,
                          },
                        }),
                        t,
                      ],
                    }),
                  }),
                }),
                y
              )
            : null;
        };
      S.toString = () => ".nextui-tooltip-content";
      var T = (0, s.Z)(S, { placement: "top", offset: 12, className: "" }),
        k = (t, e) => {
          (0, l.useEffect)(() => {
            const r = (r) => {
              const o = t.current;
              r && o && !o.contains(r.target) && e(r);
            };
            return (
              document.addEventListener("click", r),
              () => document.removeEventListener("click", r)
            );
          }, [t, e]);
        };
      const z = ({
        children: t,
        initialVisible: e,
        content: r,
        offset: n,
        placement: a,
        portalClassName: i,
        enterDelay: s,
        leaveDelay: c,
        trigger: u,
        rounded: d,
        animated: f,
        shadow: p,
        className: m,
        color: $,
        contentColor: x,
        onVisibleChange: g,
        hideArrow: h,
        css: v,
        triggerCss: b,
        onClick: w,
        keepMounted: C,
        visible: j,
        ...E
      }) => {
        const S = (0, l.useRef)(),
          z = (0, l.useRef)(null),
          [M, N] = (0, l.useState)(e),
          L = {
            animated: f,
            visible: M,
            css: v,
            shadow: p,
            offset: n,
            placement: a,
            rounded: d,
            color: $,
            contentColor: x,
            hideArrow: h,
            parent: z,
            className: i,
          },
          I = (t) => {
            const e = () => {
                clearTimeout(S.current), (S.current = void 0);
              },
              r = (t) => {
                N(t), g(t), e();
              };
            e(),
              (S.current = t
                ? window.setTimeout(() => r(!0), s)
                : window.setTimeout(() => r(!1), c));
          },
          R = (t) => {
            "hover" === u && I(t);
          };
        return (
          k(z, () => "click" === u && !C && I(!1)),
          (0, l.useEffect)(() => {
            void 0 !== j && I(j);
          }, [j]),
          (0, o.jsxs)(y, {
            ref: z,
            role: "button",
            tabIndex: -1,
            className: `nextui-tooltip-button ${m}`,
            onClick: () => {
              "click" === u && I(!M), null == w || w();
            },
            onKeyUp: () => R(!0),
            onMouseEnter: () => R(!0),
            onMouseLeave: () => R(!1),
            onFocus: () => R(!0),
            onBlur: () => R(!1),
            css: { ...b },
            ...E,
            children: [t, r && (0, o.jsx)(T, { ...L, children: r })],
          })
        );
      };
      z.toString = () => ".nextui-tooltip";
      var M = (0, s.Z)(z, {
          initialVisible: !1,
          hideArrow: !1,
          animated: !0,
          shadow: !0,
          rounded: !1,
          keepMounted: !1,
          trigger: "hover",
          enterDelay: 0,
          leaveDelay: 0,
          className: "",
          portalClassName: "",
          onVisibleChange: () => {},
        }),
        N = r(9641),
        L = r(4213),
        I = r(2903),
        R = r(3569),
        A = r(9975);
      var O = (0, b.zo)(
        "span",
        {
          dflex: "center",
          position: "relative",
          zIndex: "$1",
          boxSizing: "border-box",
          overflow: "hidden",
          verticalAlign: "top",
          cursor: "auto",
          transition: "transform 250ms ease 0ms, box-shadow 0.25s ease 0s",
          ".nextui-avatar-bg": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: "$2",
            transition: "$avatar",
            size: "100%",
          },
          "&:hover .nextui-avatar-bg": {
            boxShadow: " inset 0 0 40px 0 rgb(0 0 0 / 14%)",
          },
          ".nextui-avatar-img": {
            opacity: 0,
            zIndex: "$3",
            display: "flex",
            bg: "$background",
            transition: "transform 250ms ease 0ms, opacity 200ms ease-in 0ms",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
          '&[data-state="ready"] .nextui-avatar-img': { opacity: 1 },
          ".nextui-avatar-icon": {
            display: "flex",
            position: "absolute",
            left: "50%",
            top: "50%",
            ta: "center",
            zIndex: "$2",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            us: "none",
          },
          ".nextui-avatar-text": {
            position: "absolute",
            zIndex: "$2",
            left: "50%",
            top: "50%",
            ta: "center",
            color: "$text",
            fontWeight: "$medium",
            transform: "translate(-50%, -50%) scale(0.65)",
            whiteSpace: "nowrap",
            us: "none",
          },
          "@motion": {
            transition: "none",
            ".nextui-avatar-bg, .nextui-avatar-img": { transition: "none" },
          },
          variants: {
            color: {
              default: { ".nextui-avatar-bg": { bg: "$accents2" } },
              primary: { ".nextui-avatar-bg": { bg: "$primary" } },
              secondary: { ".nextui-avatar-bg": { bg: "$secondary" } },
              success: { ".nextui-avatar-bg": { bg: "$success" } },
              warning: { ".nextui-avatar-bg": { bg: "$warning" } },
              error: { ".nextui-avatar-bg": { bg: "$error" } },
              gradient: { ".nextui-avatar-bg": { bg: "$gradient" } },
            },
            textColor: {
              default: { ".nextui-avatar-text": { color: "$text" } },
              white: { ".nextui-avatar-text": { color: "$white" } },
              primary: { ".nextui-avatar-text": { color: "$primary" } },
              secondary: { ".nextui-avatar-text": { color: "$secondary" } },
              success: { ".nextui-avatar-text": { color: "$success" } },
              warning: { ".nextui-avatar-text": { color: "$warning" } },
              error: { ".nextui-avatar-text": { color: "$error" } },
            },
            size: {
              xs: {
                $$avatarXs: "$space$9",
                sizeMin: "$$avatarXs",
                ".nextui-avatar-text": { fontSize: "$sm" },
              },
              sm: {
                $$avatarSm: "$space$11",
                sizeMin: "$$avatarSm",
                ".nextui-avatar-text": { fontSize: "$md" },
              },
              md: {
                $$avatarMd: "$space$14",
                sizeMin: "$$avatarMd",
                ".nextui-avatar-text": { fontSize: "$lg" },
              },
              lg: {
                $$avatarLg: "$space$16",
                sizeMin: "$$avatarLg",
                ".nextui-avatar-text": { fontSize: "$xl" },
              },
              xl: {
                $$avatarXl: "$space$18",
                sizeMin: "$$avatarXl",
                ".nextui-avatar-text": { fontSize: "$xl2" },
              },
            },
            borderWeight: {
              light: { ".nextui-avatar-img": { borderWidth: "$light" } },
              normal: { ".nextui-avatar-img": { borderWidth: "$normal" } },
              bold: { ".nextui-avatar-img": { borderWidth: "$normal" } },
              extrabold: { ".nextui-avatar-img": { borderWidth: "$normal" } },
              black: { ".nextui-avatar-img": { borderWidth: "$normal" } },
            },
            bordered: {
              true: {
                "&:hover:not(.only-text-avatar) .nextui-avatar-bg": {
                  opacity: "0.6",
                },
                ".nextui-avatar-img": {
                  borderStyle: "solid",
                  borderColor: "$background",
                },
              },
            },
            stacked: { true: { ml: "-$5" } },
            pointer: { true: { cursor: "pointer" } },
            rounded: {
              true: {
                borderRadius: "$rounded",
                ".nextui-avatar-img": { borderRadius: "$rounded" },
              },
            },
            squared: {
              true: {
                borderRadius: "$squared",
                ".nextui-avatar-img": { borderRadius: "$squared" },
              },
            },
            zoomed: {
              true: {
                "&:hover .nextui-avatar-img": { transform: "scale(1.125)" },
              },
            },
          },
          compoundVariants: [
            {
              bordered: !0,
              borderWeight: "light",
              css: { padding: "calc($1/2)" },
            },
            { bordered: !0, borderWeight: "normal", css: { padding: "$1" } },
            {
              bordered: !0,
              borderWeight: "bold",
              css: { padding: "calc($2/1.5)" },
            },
            { bordered: !0, borderWeight: "extrabold", css: { padding: "$2" } },
            {
              bordered: !0,
              borderWeight: "black",
              css: { padding: "calc($3/1.5)" },
            },
            {
              rounded: !0,
              squared: !0,
              css: {
                borderRadius: "$squared",
                ".nextui-avatar-img": { borderRadius: "$squared" },
              },
            },
          ],
          defaultVariants: {
            size: "md",
            rounded: !0,
            color: "default",
            textColor: "default",
            borderWeight: "normal",
          },
        },
        A.BM,
        A.Oe
      );
      const Z = (t) =>
          (null == t ? void 0 : t.length) <= 4
            ? t
            : null == t
            ? void 0
            : t.slice(0, 3),
        _ = l.forwardRef((t, e) => {
          const {
              as: r,
              src: n,
              css: a,
              text: i,
              icon: s,
              alt: c,
              className: u,
              ...d
            } = t,
            f = (0, I.gy)(e),
            p = !n,
            [$, x] = (0, l.useState)(!1),
            g = (0, l.useRef)(null),
            { isFocusVisible: h, focusProps: v } = (0, N.Fx)();
          (0, l.useEffect)(() => {
            var t;
            (null == g || null == (t = g.current) ? void 0 : t.complete) &&
              x(!0);
          }, []);
          const b = (0, l.useMemo)(
            () => (!$ && n ? "loading" : "ready"),
            [n, $]
          );
          return (0, o.jsxs)(O, {
            ref: f,
            as: r,
            ...(0, L.dG)(d, v),
            className: (0, m.Z)({ "only-text-avatar": p }, u),
            "data-state": b,
            isFocusVisible: h,
            css: (0, L.dG)(
              "button" === r
                ? {
                    appearance: "none",
                    outline: "none",
                    border: "none",
                    cursor: "pointer",
                  }
                : {},
              a
            ),
            children: [
              (0, o.jsx)("span", { className: "nextui-avatar-bg" }),
              !p &&
                (0, o.jsx)("img", {
                  ref: g,
                  className: (0, m.Z)(
                    "nextui-avatar-img",
                    `nextui-avatar--${b}`,
                    { "nextui-avatar-ready": $ }
                  ),
                  src: n,
                  alt: c,
                  "data-state": b,
                  onLoad: () => x(!0),
                }),
              p &&
                !s &&
                i &&
                (0, o.jsx)("span", {
                  className: "nextui-avatar-text",
                  children: Z(i),
                }),
              s &&
                (0, o.jsx)("span", {
                  className: "nextui-avatar-icon",
                  children: s,
                }),
            ],
          });
        });
      R.Ts && (_.displayName = "NextUI.Avatar"),
        (_.toString = () => ".nextui-avatar");
      var P = _;
      const W = (0, b.zo)("span", {
        fontSize: "$xs",
        display: "inline-flex",
        alignItems: "center",
        marginLeft: "$3",
        color: "$text",
      });
      var B = (0, b.zo)("div", {
        dflex: "center",
        height: "auto",
        width: "max-content",
        "@motion": { transition: "none" },
        [`& ${O}`]: {
          marginLeft: "-$space$5",
          transition: "$default",
          ".only-text-avatar": { boxShadow: "$xs" },
        },
        ".only-text-avatar": { boxShadow: "$xs" },
        variants: {
          animated: {
            true: { [`& ${O}:hover`]: { transform: "translate(-$space$5)" } },
          },
        },
        defaultVariants: { animated: !0 },
      });
      const V = l.forwardRef((t, e) => {
        const { count: r, children: n, ...a } = t,
          i = (0, I.gy)(e);
        return (0, o.jsxs)(B, {
          ref: i,
          ...a,
          children: [
            n,
            r &&
              (0, o.jsxs)(W, {
                className: "nextui-avatar-group-count",
                children: ["+", r],
              }),
          ],
        });
      });
      R.Ts && (V.displayName = "NextUI.AvatarGroup"),
        (V.toString = () => ".nextui-avatar-group");
      var D = V;
      P.Group = D;
      var U = P,
        q = r(1664),
        X = r.n(q),
        F = function () {
          var t = ["gradient", "primary", "secondary", "error", "warning"];
          return t[Math.floor(Math.random() * t.length)];
        };
      function K(t) {
        return (0, o.jsx)(
          "div",
          {
            style: { margin: "10px" },
            children: (0, o.jsx)(X(), {
              href: "/servers/" + t.id,
              children: (0, o.jsx)("a", {
                children: (0, o.jsx)(M, {
                  content: t.name,
                  color: "secondary",
                  children: (0, o.jsx)(U, {
                    src: t.icon,
                    size: "xl",
                    color: F(),
                    bordered: !0,
                    pointer: !0,
                  }),
                }),
              }),
            }),
          },
          t.id
        );
      }
      function G(t) {
        return (0, o.jsxs)(i.Z, {
          children: [
            (0, o.jsx)(a(), {
              children: (0, o.jsx)("title", {
                children: "Servers | Discord Music Bot",
              }),
            }),
            (0, o.jsx)("h1", { children: "Select a server" }),
            (0, o.jsxs)("div", {
              style: { display: "flex" },
              children: [
                (0, o.jsx)(K, {
                  icon: "https://cdn.discordapp.com/icons/855346696258060338/93317b7b5c163ecaa21ed16db455066f.png?size=4096",
                  name: "Coding with amogus",
                  id: ";-;",
                }),
                (0, o.jsx)(K, {
                  icon: "https://cdn.discordapp.com/icons/855346696258060338/93317b7b5c163ecaa21ed16db455066f.png?size=4096",
                  name: "Coding with amogus",
                  id: ";-;",
                }),
                (0, o.jsx)(K, {
                  icon: "https://cdn.discordapp.com/icons/855346696258060338/93317b7b5c163ecaa21ed16db455066f.png?size=4096",
                  name: "Coding with amogus",
                  id: ";-;",
                }),
              ],
            }),
          ],
        });
      }
    },
    1664: function (t, e, r) {
      t.exports = r(1551);
    },
  },
  function (t) {
    t.O(0, [470, 774, 888, 179], function () {
      return (e = 8485), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
