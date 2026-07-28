(self.webpackChunk = self.webpackChunk || []).push([
  ["671"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new F.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function o(e) {
          j.debug && window && window.console.warn(e);
        }
        var c,
          l,
          s,
          u = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(c, l) {
              function s() {
                var e = new u();
                return (i(e.init) && e.init.apply(e, arguments), e);
              }
              function u() {}
              (l === n && ((l = c), (c = Object)), (s.Bare = u));
              var d,
                f = (r[e] = c[e]),
                p = (u[e] = s[e] = new r());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return ((u[e] = s[e] = o(s, t)[e]), s);
                }),
                (s.open = function (e) {
                  if (
                    ((d = {}),
                    i(e) ? (d = e.call(s, p, f, s, c)) : a(e) && (d = e),
                    a(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return (i(p.init) || (p.init = c), s);
                }),
                s.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  r = i * e;
                return (
                  t +
                  n *
                    (-2.75 * r * i + 11 * i * i + -15.5 * r + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  r = i * e;
                return t + n * (-1 * r * i + 3 * i * i + -3 * r + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  r = i * e;
                return (
                  t +
                  n *
                    (0.3 * r * i + -1.6 * i * i + 2.2 * r + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  r = i * e;
                return t + n * (2 * r * i + -5 * i * i + 2 * r + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                    ? t + n
                    : (e /= a / 2) < 1
                      ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          I = /[A-Z]/,
          m = "number",
          y = /^(rgb|#)/,
          T = /(em|cm|mm|in|pt|pc|px)$/,
          h = /(em|cm|mm|in|pt|pc|px|%)$/,
          b = /(deg|rad|turn)$/,
          _ = "unitless",
          O = /(all|none) 0s ease 0s/,
          v = /^(width|height)$/,
          A = document.createElement("a"),
          L = ["Webkit", "Moz", "O", "ms"],
          R = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < L.length; t++)
              if ((n = L[t] + a) in A.style) return { dom: n, css: R[t] + e };
          },
          S = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (S.transition) {
          var C = S.timing.dom;
          if (((A.style[C] = d["ease-in-back"][0]), !A.style[C]))
            for (var w in f) d[w][0] = f[w];
        }
        var P = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && S.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          G = (t.now =
            (s =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && S.bind
              ? s.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          M = u(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = Q[a];
              if (!i) return o("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var r = i[0],
                  c = this.props[a];
                return (
                  c || (c = this.props[a] = new r.Bare()),
                  c.init(this.$el, n, i, t),
                  c
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  (d.call(
                    this,
                    e,
                    function (e, t) {
                      (e.span > f && (f = e.span), e.stop(), e.animate(t));
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    },
                  ),
                    u.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i)));
                  var p = this,
                    E = !1,
                    g = {};
                  P(function () {
                    (d.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g));
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              (this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                u.call(this));
            }
            function l() {
              (c.call(this), (this.el.style.display = "none"));
            }
            function s() {
              this.el.offsetHeight;
            }
            function u() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              ((n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[S.transition.dom] = n)));
            }
            function d(e, t, a) {
              var i,
                r,
                o,
                c,
                l = t !== f,
                s = {};
              for (i in e)
                ((o = e[i]),
                  i in z
                    ? (s.transform || (s.transform = {}), (s.transform[i] = o))
                    : (I.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in Q ? (s[i] = o) : (c || (c = {}), (c[i] = o))));
              for (i in s) {
                if (((o = s[i]), !(r = this.props[i]))) {
                  if (!l) continue;
                  r = n.call(this, i);
                }
                t.call(this, r, o);
              }
              a && c && a.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function m(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            ((t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                j.keepInherited && !j.fallback)
              ) {
                var n = H(this.el, "transition");
                n && !O.test(n) && (this.upstream = n);
              }
              S.backface &&
                j.hideBackface &&
                X(this.el, S.backface.css, "hidden");
            }),
              m("add", n),
              m("start", a),
              m("wait", function (e) {
                ((e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0)));
              }),
              m("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : o(
                      "No active transition timer. Use start() or wait() before then().",
                    );
              }),
              m("next", i),
              m("stop", c),
              m("set", function (e) {
                (c.call(this, e), d.call(this, e, p, g));
              }),
              m("show", function (e) {
                ("string" != typeof e && (e = "block"),
                  (this.el.style.display = e));
              }),
              m("hide", l),
              m("redraw", s),
              m("destroy", function () {
                (c.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null));
              }));
          }),
          F = u(M, function (t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new M.Bare());
              return (a.el || a.init(t), n ? a.start(n) : a);
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var r = [];
              return (
                i.each(function (e, t) {
                  r.push(n(t, a));
                }),
                (this.children = r),
                this
              );
            };
          }),
          k = u(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return (this.update(e), t);
            }
            ((e.init = function (e, t, n, a) {
              ((this.$el = e), (this.el = e[0]));
              var i,
                o,
                c,
                l = t[0];
              (n[2] && (l = n[2]),
                Y[l] && (l = Y[l]),
                (this.name = l),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (o = this.ease),
                  (c = "ease"),
                  void 0 !== o && (c = o),
                  i in d ? i : c)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = v.test(this.name)),
                (this.unit = a.unit || this.unit || j.defaultUnit),
                (this.angle = a.angle || this.angle || j.defaultAngle),
                j.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : ""))));
            }),
              (e.set = function (e) {
                ((e = this.convert(e, this.type)),
                  this.update(e),
                  this.redraw());
              }),
              (e.transition = function (e) {
                ((this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e));
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                ((e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new U({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  })));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                X(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  X(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  r = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case m:
                    if (r) return e;
                    if (c && "" === e.replace(g, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case y:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case T:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case h:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case b:
                    if (r) return e + this.angle;
                    if (c && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case _:
                    if (r || (c && h.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e,
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              }));
          }),
          V = u(k, function (e, t) {
            e.init = function () {
              (t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y)));
            };
          }),
          D = u(k, function (e, t) {
            ((e.init = function () {
              (t.init.apply(this, arguments), (this.animate = this.fallback));
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              }));
          }),
          x = u(k, function (e, t) {
            function n(e, t) {
              var n, a, i, r, o;
              for (n in e)
                ((i = (r = z[n])[0]),
                  (a = r[1] || n),
                  (o = this.convert(e[n], i)),
                  t.call(this, a, o, i));
            }
            ((e.init = function () {
              (t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  z.perspective &&
                    j.perspective &&
                    ((this.current.perspective = j.perspective),
                    X(this.el, this.name, this.style(this.current)),
                    this.redraw())));
            }),
              (e.set = function (e) {
                (n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  X(this.el, this.name, this.style(this.current)),
                  this.redraw());
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new W({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                ((this.active = !0), (this.nextStyle = this.style(a)));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new W({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                X(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    ((a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i))));
                  }),
                  a
                );
              }));
          }),
          U = u(function (t) {
            function r() {
              var e,
                t,
                n,
                a = l.length;
              if (a)
                for (P(r), t = G(), e = a; e--; ) (n = l[e]) && n.render(t);
            }
            var c = { ease: d.ease[1], from: 0, to: 1 };
            ((t.init = function (e) {
              ((this.duration = e.duration || 0), (this.delay = e.delay || 0));
              var t = e.ease || c.ease;
              (d[t] && (t = d[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name));
              var n = e.from,
                a = e.to;
              (void 0 === n && (n = c.from),
                void 0 === a && (a = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = G()),
                !1 !== e.autoplay && this.play());
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = G()),
                  (this.active = !0),
                  1 === l.push(this) && P(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, l)) >= 0 &&
                    ((t = l.slice(n + 1)),
                    (l.length = n),
                    t.length && (l = l.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (r = this.endRGB),
                        a(
                          i[0] + o * (r[0] - i[0]),
                          i[1] + o * (r[1] - i[1]),
                          i[2] + o * (r[2] - i[2]),
                        ))
                      : Math.round((this.begin + o * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                ((t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy());
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(g, "");
                  (a !== e.replace(g, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a));
                }
                ((t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t));
              }),
              (t.destroy = function () {
                (this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i));
              }));
            var l = [],
              s = 1e3;
          }),
          B = u(U, function (e) {
            ((e.init = function (e) {
              ((this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play());
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              }));
          }),
          W = u(U, function (e, t) {
            ((e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                ((n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new U({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      }),
                    ));
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  ((this.tweens = null), (this.current = null));
                }
              }));
          }),
          j = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: [],
          });
        ((t.fallback = function (e) {
          if (!S.transition) return (j.fallback = !0);
          j.agentTests.push("(" + e + ")");
          var t = RegExp(j.agentTests.join("|"), "i");
          j.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new U(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          }));
        var X = e.style,
          H = e.css,
          Y = { transform: S.transform && S.transform.css },
          Q = {
            color: [V, y],
            background: [V, y, "background-color"],
            "outline-color": [V, y],
            "border-color": [V, y],
            "border-top-color": [V, y],
            "border-right-color": [V, y],
            "border-bottom-color": [V, y],
            "border-left-color": [V, y],
            "border-width": [k, T],
            "border-top-width": [k, T],
            "border-right-width": [k, T],
            "border-bottom-width": [k, T],
            "border-left-width": [k, T],
            "border-spacing": [k, T],
            "letter-spacing": [k, T],
            margin: [k, T],
            "margin-top": [k, T],
            "margin-right": [k, T],
            "margin-bottom": [k, T],
            "margin-left": [k, T],
            padding: [k, T],
            "padding-top": [k, T],
            "padding-right": [k, T],
            "padding-bottom": [k, T],
            "padding-left": [k, T],
            "outline-width": [k, T],
            opacity: [k, m],
            top: [k, h],
            right: [k, h],
            bottom: [k, h],
            left: [k, h],
            "font-size": [k, h],
            "text-indent": [k, h],
            "word-spacing": [k, h],
            width: [k, h],
            "min-width": [k, h],
            "max-width": [k, h],
            height: [k, h],
            "min-height": [k, h],
            "max-height": [k, h],
            "line-height": [k, _],
            "scroll-top": [D, m, "scrollTop"],
            "scroll-left": [D, m, "scrollLeft"],
          },
          z = {};
        (S.transform &&
          ((Q.transform = [x]),
          (z = {
            x: [h, "translateX"],
            y: [h, "translateY"],
            rotate: [b],
            rotateX: [b],
            rotateY: [b],
            scale: [m],
            scaleX: [m],
            scaleY: [m],
            skew: [b],
            skewX: [b],
            skewY: [b],
          })),
          S.transform &&
            S.backface &&
            ((z.z = [h, "translateZ"]),
            (z.rotateZ = [b]),
            (z.scaleZ = [m]),
            (z.perspective = [T])));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        r,
        o,
        c,
        l,
        s,
        u,
        d,
        f,
        p,
        E,
        g,
        I,
        m,
        y,
        T,
        h,
        b,
        _,
        O = window.$,
        v = n(5487) && O.tram;
      (((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (c = Function.prototype),
        r.push,
        (l = r.slice),
        r.concat,
        o.toString,
        (s = o.hasOwnProperty),
        (u = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (E = r.indexOf),
        r.lastIndexOf,
        (g = Object.keys),
        c.bind,
        (I =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (u && e.forEach === u) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === i) return;
              } else
                for (var c = a.keys(e), r = 0, o = c.length; r < o; r++)
                  if (t.call(n, e[c[r]], c[r], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : d && e.map === d
                ? e.map(t, n)
                : (I(e, function (e, i, r) {
                    a.push(t.call(n, e, i, r));
                  }),
                  a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              m(e, function (e, i, r) {
                if (t.call(n, e, i, r)) return ((a = e), !0);
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
                ? e.filter(t, n)
                : (I(e, function (e, i, r) {
                    t.call(n, e, i, r) && a.push(e);
                  }),
                  a);
          }),
        (m =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                  ? e.some(t, n)
                  : (I(e, function (e, a, o) {
                      if (r || (r = t.call(n, e, a, o))) return i;
                    }),
                    !!r);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : m(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(l.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              v.frame(function () {
                ((t = !1), e.apply(a, n));
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            r,
            o,
            c,
            l,
            s = function () {
              var u = a.now() - c;
              u < t
                ? (i = setTimeout(s, t - u))
                : ((i = null), n || ((l = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            ((o = this), (r = arguments), (c = a.now()));
            var u = n && !i;
            return (
              i || (i = setTimeout(s, t)),
              u && ((l = e.apply(o, r)), (o = r = null)),
              l
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var r in i) void 0 === e[r] && (e[r] = i[r]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return s.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (T = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (h = /\\|'|\r|\n|\u2028|\u2029/g),
        (b = function (e) {
          return "\\" + T[e];
        }),
        (_ = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            r = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g",
            ),
            o = 0,
            c = "__p+='";
          (e.replace(r, function (t, n, a, i, r) {
            return (
              (c += e.slice(o, r).replace(h, b)),
              (o = r + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                  ? (c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                  : i && (c += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (c += "';\n"));
          var l = t.variable;
          if (l) {
            if (!_.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else ((c = "with(obj||{}){\n" + c + "}\n"), (l = "obj"));
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var s = function (e) {
            return i.call(this, e, a);
          };
          return ((s.source = "function(" + l + "){\n" + c + "}"), s);
        }),
        (e.exports = a));
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            r = e("html"),
            o = e("body"),
            c = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function u() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              i = a.env("editor");
            if (n) {
              i && e.remove();
              return;
            }
            (e.length && e.remove(), i || o.append(t));
          }
          return (
            (n.ready = function () {
              var n,
                a,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              (/\.webflow\.io$/i.test(p) && c.hostname !== p && (f = !0),
                f &&
                  !l &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs",
                    )),
                    (a = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg",
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg",
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(a, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(i).off(s, u).on(s, u)));
            }),
            n
          );
        }),
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            r = e(window),
            o = e(document.documentElement),
            c = document.location,
            l = "hashchange",
            s =
              n.load ||
              function () {
                var t, n, a;
                ((i = !0),
                  (window.WebflowEditor = !0),
                  r.off(l, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data",
                            );
                          ((t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f));
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    (E(n, a), t(!1));
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n));
              },
            u = !1;
          try {
            u =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !i && /\?edit/.test(c.hash) && s();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            (window.removeEventListener("message", t, !1), e.remove());
          }
          return (
            /[?&](update)(?:[=&?]|$)/.test(c.search) || /\?update$/.test(c.href)
              ? (function () {
                  var e = document.documentElement,
                    t = e.getAttribute("data-wf-site"),
                    n = e.getAttribute("data-wf-page"),
                    a = e.getAttribute("data-wf-item-slug"),
                    i = e.getAttribute("data-wf-collection"),
                    r = e.getAttribute("data-wf-domain");
                  if (t && n) {
                    var o = "pageId=" + n;
                    ((o += "&utm_source=legacy_editor"),
                      a &&
                        i &&
                        r &&
                        (o +=
                          "&domain=" +
                          encodeURIComponent(r) +
                          "&itemSlug=" +
                          encodeURIComponent(a) +
                          "&collectionId=" +
                          i),
                      (window.location.href =
                        "https://webflow.com/external/designer/" +
                        t +
                        "?" +
                        o));
                  }
                })()
              : u
                ? s()
                : c.search
                  ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                      /\?edit$/.test(c.href)) &&
                    s()
                  : r.on(l, d).triggerHandler(l),
            {}
          );
        }),
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function l() {
                      (document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s));
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    (document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0,
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), l());
                        },
                        !0,
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, a, c;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0,
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            ((n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible",
                              ) && t.removeAttribute("data-wf-focus-visible"));
                          }
                        },
                        !0,
                      ));
                  })(document);
                }
            },
          };
        }),
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            ((i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0)));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        }),
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var o = a[i];
            o[0](0, o[1]);
          }
          ((a = []), t.extend(n.triggers, r));
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t, n) {
        var a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(a));
      }
      var r = window.jQuery,
        o = {},
        c = ".w-ix";
      ((o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE"));
          },
        }),
        (o.dispatchCustomEvent = i),
        (e.exports = o));
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      (i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          }),
        ));
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        r = {},
        o = {},
        c = [],
        l = window.Webflow || [],
        s = window.jQuery,
        u = s(window),
        d = s(document),
        f = s.isFunction,
        p = (r._ = n(5756)),
        E = (r.tram = n(5487) && s.tram),
        g = !1,
        I = !1;
      function m(e) {
        (r.env() &&
          (f(e.design) && u.on("__wf_design", e.design),
          f(e.preview) && u.on("__wf_preview", e.preview)),
          f(e.destroy) && u.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(c, e.ready) || c.push(e.ready);
            })(e));
      }
      function y(e) {
        var t;
        (f(e.design) && u.off("__wf_design", e.design),
          f(e.preview) && u.off("__wf_preview", e.preview),
          f(e.destroy) && u.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (c = p.filter(c, function (e) {
              return e !== t.ready;
            }))));
      }
      ((E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && y(o[e]);
          var a = (o[e] = t(s, p, n) || {});
          return (m(a), a);
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          l.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
                ? n && !t
                : "slug" === e
                  ? n && window.__wf_slug
                  : "editor" === e
                    ? window.WebflowEditor
                    : "test" === e
                      ? window.__wf_test
                      : "frame" === e
                        ? window !== window.top
                        : void 0
            : n;
        }));
      var T = navigator.userAgent.toLowerCase(),
        h = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        b = (r.env.chrome =
          /chrome/.test(T) &&
          /Google/.test(navigator.vendor) &&
          parseInt(T.match(/chrome\/(\d+)\./)[1], 10)),
        _ = (r.env.ios = /(ipod|iphone|ipad)/.test(T));
      ((r.env.safari = /safari/.test(T) && !b && !_),
        h &&
          d.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (r.validClick = h
          ? function (e) {
              return e === a || s.contains(e, a);
            }
          : function () {
              return !0;
            }));
      var O = "resize.webflow orientationchange.webflow load.webflow",
        v = "scroll.webflow " + O;
      function A(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function L(e) {
        f(e) && e();
      }
      function R() {
        (i && (i.reject(), u.off("load", i.resolve)),
          (i = new s.Deferred()),
          u.on("load", i.resolve));
      }
      ((r.resize = A(u, O)),
        (r.scroll = A(u, v)),
        (r.redraw = A()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          ((g = !0),
            I ? ((I = !1), p.each(o, m)) : p.each(c, L),
            p.each(l, L),
            r.resize.up());
        }),
        (r.load = function (e) {
          i.then(e);
        }),
        (r.destroy = function (e) {
          ((e = e || {}),
            (I = !0),
            u.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(o, y),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (c = []),
            (l = []),
            "pending" === i.state() && R());
        }),
        s(r.ready),
        R(),
        (e.exports = window.Webflow = r));
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            r,
            o = {},
            c = e(window),
            l = a.env(),
            s = window.location,
            u = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  r = i.offset().top,
                  o = i.outerHeight(),
                  c = 0.5 * n,
                  l = i.is(":visible") && r + o - c >= e && r + c <= e + n;
                t.active !== l && ((t.active = l), g(a, d, l));
              }
            });
          }
          function g(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  ((n = l && a.env("design")),
                    (r = a.env("slug") || s.pathname || ""),
                    a.scroll.off(E),
                    (i = []));
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((u.href = a), !(a.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            u.hash.length > 1 &&
                            u.host + u.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                            var c = e(u.hash);
                            c.length && i.push({ link: o, sec: c, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            g(
                              o,
                              d,
                              (!l && u.href === s.href) ||
                                a === r ||
                                (f.test(a) && p.test(r)),
                            );
                        }
                      }
                    })(t[o]);
                  i.length && (a.scroll.on(E), E());
                }),
            o
          );
        }),
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            c = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = a.env("editor") ? ".w-editor-body" : "body",
            u =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
            ),
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function I(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function m(t) {
            var o = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var s =
                E.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== s) {
                var d,
                  f = e(s);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = s),
                  n.hash !== d &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== d &&
                    i.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = r.scrollTop(),
                        i = (function (t) {
                          var n = e(u),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - a,
                              c = t.outerHeight();
                            c < o && (i -= Math.round((o - c) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion",
                                ) ||
                              g.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time"),
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          s = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              c,
                              u,
                              f = Date.now() - s;
                            (window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (r = f) > (c = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((u = r / c) < 0.5
                                      ? 4 * u * u * u
                                      : (u - 1) * (2 * u - 2) * (2 * u - 2) +
                                        1)),
                            ),
                              f <= o ? l(d) : "function" == typeof n && n());
                          };
                        l(d);
                      }
                    })(f, function () {
                      (I(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        I(f, "remove"));
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              (o.on(n, f, m),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild));
            },
          };
        }),
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              r = !1,
              o = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function s(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  (t.preventDefault(), t.stopPropagation());
                  return;
                }
                var a,
                  l,
                  s,
                  u,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - i;
                ((i = p),
                  Math.abs(E) > c &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (l = t),
                    (s = { direction: E > 0 ? "right" : "left" }),
                    (u = e.Event(a, { originalEvent: l })),
                    e(l.target).trigger(u, s),
                    d()));
              }
            }
            function u(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                (e.preventDefault(), e.stopPropagation(), (o = !1));
                return;
              }
            }
            function d() {
              r = !1;
            }
            (t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", u, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", u, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                (t.removeEventListener("touchstart", l, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", u, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", l, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", u, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null));
              }));
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        }),
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      function o(e, t) {
        i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
          component: "navbar",
          state: t,
        });
      }
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            c,
            l,
            s,
            u = {},
            d = e.tram,
            f = e(window),
            p = e(document),
            E = t.debounce,
            g = a.env(),
            I = ".w-nav",
            m = "w--open",
            y = "w--nav-dropdown-open",
            T = "w--nav-dropdown-toggle-open",
            h = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            _ = i.triggers,
            O = e();
          function v() {
            a.resize.off(A);
          }
          function A() {
            c.each(F);
          }
          function L(n, a) {
            var i,
              o,
              c,
              u,
              d,
              E = e(a),
              g = e.data(a, I);
            (g ||
              (g = e.data(a, I, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (g.menu = E.find(".w-nav-menu")),
              (g.links = g.menu.find(".w-nav-link")),
              (g.dropdowns = g.menu.find(".w-dropdown")),
              (g.dropdownToggle = g.menu.find(".w-dropdown-toggle")),
              (g.dropdownList = g.menu.find(".w-dropdown-list")),
              (g.button = E.find(".w-nav-button")),
              (g.container = E.find(".w-container")),
              (g.overlayContainerId = "w-nav-overlay-" + n),
              (g.outside =
                ((i = g).outside && p.off("click" + I, i.outside),
                function (t) {
                  var n = e(t.target);
                  (s && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    M(i, n);
                })));
            var m = E.find(".w-nav-brand");
            (m &&
              "/" === m.attr("href") &&
              null == m.attr("aria-label") &&
              m.attr("aria-label", "home"),
              g.button.attr("style", "-webkit-user-select: text;"),
              null == g.button.attr("aria-label") &&
                g.button.attr("aria-label", "menu"),
              g.button.attr("role", "button"),
              g.button.attr("tabindex", "0"),
              g.button.attr("aria-controls", g.overlayContainerId),
              g.button.attr("aria-haspopup", "menu"),
              g.button.attr("aria-expanded", "false"),
              g.el.off(I),
              g.button.off(I),
              g.menu.off(I),
              S(g),
              l
                ? (N(g),
                  g.el.on(
                    "setting" + I,
                    ((o = g),
                    function (e, n) {
                      n = n || {};
                      var a = f.width();
                      (S(o),
                        !0 === n.open && x(o, !0),
                        !1 === n.open && B(o, !0),
                        o.open &&
                          t.defer(function () {
                            a !== f.width() && w(o);
                          }));
                    }),
                  ))
                : ((c = g).overlay ||
                    ((c.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />',
                    ).appendTo(c.el)),
                    c.overlay.attr("id", c.overlayContainerId),
                    (c.parent = c.menu.parent()),
                    B(c, !0)),
                  g.button.on("click" + I, P(g)),
                  g.menu.on("click" + I, "a", G(g)),
                  g.button.on(
                    "keydown" + I,
                    ((u = g),
                    function (e) {
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return (
                            P(u)(),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case r.ESCAPE:
                          return (
                            B(u),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                        case r.HOME:
                        case r.END:
                          if (!u.open)
                            return (e.preventDefault(), e.stopPropagation());
                          return (
                            e.keyCode === r.END
                              ? (u.selectedIdx = u.links.length - 1)
                              : (u.selectedIdx = 0),
                            C(u),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    }),
                  ),
                  g.el.on(
                    "keydown" + I,
                    ((d = g),
                    function (e) {
                      if (d.open)
                        switch (
                          ((d.selectedIdx = d.links.index(
                            document.activeElement,
                          )),
                          e.keyCode)
                        ) {
                          case r.HOME:
                          case r.END:
                            return (
                              e.keyCode === r.END
                                ? (d.selectedIdx = d.links.length - 1)
                                : (d.selectedIdx = 0),
                              C(d),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              B(d),
                              d.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_LEFT:
                          case r.ARROW_UP:
                            return (
                              (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                              C(d),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                            return (
                              (d.selectedIdx = Math.min(
                                d.links.length - 1,
                                d.selectedIdx + 1,
                              )),
                              C(d),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    }),
                  )),
              F(n, a));
          }
          function R(t, n) {
            var a = e.data(n, I);
            a && (N(a), e.removeData(n, I));
          }
          function N(e) {
            e.overlay && (B(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function S(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            ((n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(w, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease"));
            var r = e.el.attr("data-duration");
            ((n.duration = null != r ? Number(r) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n));
          }
          function C(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              (t.focus(), G(t));
            }
          }
          function w(e) {
            e.open && (B(e, !0), x(e, !0));
          }
          function P(e) {
            return E(function () {
              e.open ? B(e) : x(e);
            });
          }
          function G(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && B(t);
            };
          }
          ((u.ready =
            u.design =
            u.preview =
              function () {
                ((l = g && a.env("design")),
                  (s = a.env("editor")),
                  (n = e(document.body)),
                  (c = p.find(I)).length && (c.each(L), v(), a.resize.on(A)));
              }),
            (u.destroy = function () {
              ((O = e()), v(), c && c.length && c.each(R));
            }));
          var M = E(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || B(e);
            }
          });
          function F(t, n) {
            var a = e.data(n, I),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || l || B(a, !0), a.container.length)) {
              var r,
                o =
                  ("none" === (r = a.container.css(k)) && (r = ""),
                  function (t, n) {
                    ((n = e(n)).css(k, ""), "none" === n.css(k) && n.css(k, r));
                  });
              (a.links.each(o), a.dropdowns.each(o));
            }
            a.open && U(a);
          }
          var k = "max-width";
          function V(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function D(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function x(e, t) {
            if (!e.open) {
              ((e.open = !0),
                e.menu.each(V),
                e.links.addClass(b),
                e.dropdowns.addClass(y),
                e.dropdownToggle.addClass(T),
                e.dropdownList.addClass(h),
                e.button.addClass(m));
              var n = e.config;
              ("none" === n.animation ||
                !d.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = U(e),
                r = e.menu.outerHeight(!0),
                c = e.menu.outerWidth(!0),
                s = e.el.height(),
                u = e.el[0];
              if (
                (F(0, u),
                _.intro(0, u),
                o(u, "open"),
                a.redraw.up(),
                l || p.on("click" + I, e.outside),
                t)
              )
                return void E();
              var f = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((O = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                (d(e.menu)
                  .add(f)
                  .set({ x: n.animDirect * c, height: i })
                  .start({ x: 0 })
                  .then(E),
                  e.overlay && e.overlay.width(c));
                return;
              }
              d(e.menu)
                .add(f)
                .set({ y: -(s + r) })
                .start({ y: 0 })
                .then(E);
            }
            function E() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function U(e) {
            var t = e.config,
              a = t.docHeight ? p.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function B(e, t) {
            if (e.open) {
              ((e.open = !1), e.button.removeClass(m));
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !d.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                _.outro(0, e.el[0]),
                o(e.el[0], "close"),
                p.off("click" + I, e.outside),
                t)
              ) {
                (d(e.menu).stop(), l());
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                c = e.el.height();
              if (n.animOver)
                return void d(e.menu)
                  .add(a)
                  .start({ x: r * n.animDirect })
                  .then(l);
              d(e.menu)
                .add(a)
                .start({ y: -(c + i) })
                .then(l);
            }
            function l() {
              (e.menu.height(""),
                d(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(D),
                e.links.removeClass(b),
                e.dropdowns.removeClass(y),
                e.dropdownToggle.removeClass(T),
                e.dropdownList.removeClass(h),
                e.overlay &&
                  e.overlay.children().length &&
                  (O.length
                    ? e.menu.insertAfter(O)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false"));
            }
          }
          return u;
        }),
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return x;
        },
        clearRequested: function () {
          return F;
        },
        elementStateChanged: function () {
          return X;
        },
        eventListenerAdded: function () {
          return k;
        },
        eventStateChanged: function () {
          return D;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return j;
        },
        instanceStarted: function () {
          return W;
        },
        mediaQueriesDefined: function () {
          return Q;
        },
        parameterChanged: function () {
          return U;
        },
        playbackRequested: function () {
          return G;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return S;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return w;
        },
        stopRequested: function () {
          return M;
        },
        testFrameRendered: function () {
          return V;
        },
        viewportWidthChanged: function () {
          return Y;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: u,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: I,
          IX2_EVENT_STATE_CHANGED: m,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: h,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: _,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: L,
        } = r.IX2EngineActionTypes,
        { reifyState: R } = o.IX2VanillaUtils,
        N = (e) => ({ type: c, payload: { ...R(e) } }),
        S = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: s }),
        w = () => ({ type: u }),
        P = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        G = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: o,
          testManual: c,
          verbose: l,
          rawData: s,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: a,
            allowEvents: i,
            immediate: o,
            verbose: l,
            rawData: s,
          },
        }),
        M = (e) => ({ type: p, payload: { actionListId: e } }),
        F = () => ({ type: E }),
        k = (e, t) => ({ type: g, payload: { target: e, listenerParams: t } }),
        V = (e = 1) => ({ type: I, payload: { step: e } }),
        D = (e, t) => ({ type: m, payload: { stateKey: e, newState: t } }),
        x = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        U = (e, t) => ({ type: T, payload: { key: e, value: t } }),
        B = (e) => ({ type: h, payload: { ...e } }),
        W = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        j = (e) => ({ type: _, payload: { instanceId: e } }),
        X = (e, t, n, a) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: v,
          payload: { actionListId: e, isPlaying: t },
        }),
        Y = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: { width: e, mediaQueries: t },
        }),
        Q = () => ({ type: L });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let o = n(9516),
        c = (a = n(7243)) && a.__esModule ? a : { default: a },
        l = n(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, r, o)
                : (a[r] = e[r]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(3946));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(c.default);
      function f(e) {
        e() && (0, l.observeRequests)(d);
      }
      function p(e) {
        (E(), (0, l.startEngine)({ store: d, rawData: e, allowEvents: !0 }));
      }
      function E() {
        (0, l.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return T;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return I;
        },
        getRefType: function () {
          return v;
        },
        getSiblingElements: function () {
          return _;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return m;
        },
        isSiblingNode: function () {
          return h;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: c } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: u,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[c](e);
      }
      function I({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function m(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function T(e, t) {
        return e.contains(t);
      }
      function h(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function _(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let r = i.firstElementChild;
          for (; null != r; )
            (-1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling));
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function v(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : u
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = y(n(9777)),
        o = y(n(4738)),
        c = y(n(4659)),
        l = y(n(3452)),
        s = y(n(6633)),
        u = y(n(3729)),
        d = y(n(2397)),
        f = y(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        I = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = T(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, r, o)
                : (a[r] = e[r]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(5012)),
        m = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (T = function (e) {
          return e ? n : t;
        })(e);
      }
      let h = Object.keys(p.QuickEffectIds),
        b = (e) => h.includes(e),
        {
          COLON_DELIMITER: _,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: v,
          RENDER_GENERAL: A,
          W_MOD_IX: L,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: R,
          getElementId: N,
          getDestinationValues: S,
          observeStore: C,
          getInstanceId: w,
          renderHTMLElement: P,
          clearAllStyles: G,
          getMaxDurationItemIndex: M,
          getComputedStyle: F,
          getInstanceOrigin: k,
          reduceListToGroup: V,
          shouldNamespaceEventParameter: D,
          getNamespacedParameterId: x,
          shouldAllowMediaQuery: U,
          cleanupHTMLElement: B,
          clearObjectCache: W,
          stringifyTarget: j,
          mediaQueriesEqual: X,
          shallowEqual: H,
        } = E.IX2VanillaUtils,
        {
          isPluginType: Y,
          createPluginInstance: Q,
          getPluginDuration: z,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        (C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en }));
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          (ea({ store: n, rawData: e, allowEvents: !0 }), J());
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: r,
            allowEvents: o,
            immediate: c,
            testManual: l,
            verbose: s = !0,
          } = e,
          { rawData: u } = e;
        if (a && i && u && c) {
          let e = u.actionLists[a];
          e && (u = V({ actionList: e, actionItemId: i, rawData: u }));
        }
        if (
          (ea({ store: t, rawData: u, allowEvents: o, testManual: l }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
        ) {
          (ep({ store: t, actionListId: a }),
            ed({ store: t, actionListId: a, eventId: r }));
          let e = eE({
            store: t,
            eventId: r,
            actionListId: a,
            immediate: c,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !c,
              }),
            );
        }
      }
      function et({ actionListId: e }, t) {
        (e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t));
      }
      function en(e, t) {
        (ei(t), G({ store: t, elementApi: I }));
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(O),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (ec(e),
                (0, d.default)(n, (t, n) => {
                  let a = m.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: r } = e[a],
                          o = I.getQuerySelector(r);
                        t[o] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: s } = l,
                      u = el(n, eu);
                    if (!(0, c.default)(u)) return;
                    (0, d.default)(u, (e, a) => {
                      let i = n[a],
                        {
                          action: c,
                          id: u,
                          mediaQueries: d = l.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = c.config;
                      (X(d, l.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, o.default)(
                                s,
                                `${f}.continuousParameterGroups`,
                                [],
                              ),
                              c = (0, r.default)(i, ({ id: e }) => e === a),
                              l = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: r,
                                  parameterGroup: c,
                                  smoothing: l,
                                  restingValue: s,
                                }) {
                                  let { ixData: u, ixSession: d } =
                                      e.getState(),
                                    { events: f } = u,
                                    E = f[a],
                                    { eventTypeId: g } = E,
                                    m = {},
                                    y = {},
                                    T = [],
                                    { continuousActionGroups: h } = c,
                                    { id: b } = c;
                                  D(g, i) && (b = x(t, b));
                                  let v =
                                    d.hasBoundaryNodes && n
                                      ? I.getClosestElement(n, O)
                                      : null;
                                  (h.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let r = i.boundaryMode ? v : null,
                                        o = j(i) + _ + a;
                                      if (
                                        ((y[o] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0),
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(y[o], t, e)),
                                        !m[o])
                                      ) {
                                        m[o] = !0;
                                        let { config: t } = e;
                                        R({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: I,
                                        }).forEach((e) => {
                                          T.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    T.forEach(({ element: t, key: n }) => {
                                      let i = y[n],
                                        c = (0, o.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: u } = c,
                                        d = (
                                          u === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Y(u)
                                        )
                                          ? Q(u)?.(t, c)
                                          : null,
                                        f = S(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: I,
                                          },
                                          d,
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: r,
                                        actionItem: c,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: b,
                                        actionGroups: i,
                                        smoothing: l,
                                        restingValue: s,
                                        pluginInstance: d,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: u + _ + a,
                                  eventTarget: e,
                                  eventId: u,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: c,
                                  smoothing: l,
                                  restingValue: d,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          b(c.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: u }));
                    });
                    let E = (e) => {
                        let { ixSession: a } = t.getState();
                        es(u, (r, o, c) => {
                          let s = n[o],
                            u = a.eventState[c],
                            { action: d, mediaQueries: f = l.mediaQueryKeys } =
                              s;
                          if (!U(f, a.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: r,
                                event: s,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              u,
                            );
                            H(a, u) ||
                              t.dispatch((0, g.eventStateChanged)(c, a));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      m = (0, f.default)(E, 12),
                      y = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? m : E;
                            (e.addEventListener(n, i),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, i])));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(y)
                      : "string" == typeof a && y(e);
                  })({ logic: a, store: e, events: t });
                }));
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  (eo.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(L) && (e.className += ` ${L}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (ei(e),
                    G({ store: e, elementApi: I }),
                    ea({ store: e, allowEvents: !0 }),
                    J());
                },
              }));
          (e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: r } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(a, r)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a));
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(er), W(), e.dispatch((0, g.sessionStopped)()));
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({ width: a, mediaQueries: t }),
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, u.default)(e, t), s.default),
        es = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + _ + a);
            });
          });
        },
        eu = (e) =>
          R({
            config: { target: e.target, targets: e.targets },
            elementApi: I,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: r, events: c } = a,
          l = c[n],
          s = r[t];
        if (s && s.useFirstGroupAsInitialState) {
          let r = (0, o.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !U(
              (0, o.default)(l, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey,
            )
          )
            return;
          r.forEach((a) => {
            let { config: i, actionTypeId: r } = a,
              o = R({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : i,
                event: l,
                elementApi: I,
              }),
              c = Y(r);
            o.forEach((i) => {
              let o = c ? Q(r)?.(i, a) : null;
              eg({
                destination: S({ element: i, actionItem: a, elementApi: I }, o),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            (eI(t, e),
              a &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: r, ixSession: c } = e.getState(),
          l = c.hasBoundaryNodes && n ? I.getClosestElement(n, O) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            c = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && c) {
            if (l && r && !I.elementContains(l, n.element)) return;
            (eI(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: r = 0,
        immediate: c,
        verbose: l,
      }) {
        let { ixData: s, ixSession: u } = e.getState(),
          { events: d } = s,
          f = d[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          o.default)(s, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        (r >= E.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && g && r++);
        let m =
            (0 === r || (1 === r && g)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, o.default)(E, [r, "actionItems"], []);
        if (!y.length || !U(p, u.mediaQueryKey)) return !1;
        let T = u.hasBoundaryNodes && n ? I.getClosestElement(n, O) : null,
          h = M(y),
          _ = !1;
        return (
          y.forEach((o, s) => {
            let { config: u, actionTypeId: d } = o,
              p = Y(d),
              { target: E } = u;
            E &&
              R({
                config: u,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? T : null,
                elementApi: I,
              }).forEach((u, f) => {
                let E = p ? Q(d)?.(u, o) : null,
                  g = p ? z(d)(u, o) : null;
                _ = !0;
                let y = F({ element: u, actionItem: o }),
                  T = S({ element: u, actionItem: o, elementApi: I }, E);
                eg({
                  store: e,
                  element: u,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: r,
                  isCarrier: h === s && 0 === f,
                  computedStyle: y,
                  destination: T,
                  immediate: c,
                  verbose: l,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: m,
                });
              });
          }),
          _
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: r,
            actionItem: o,
            immediate: c,
            pluginInstance: l,
            continuous: s,
            restingValue: u,
            eventId: d,
          } = i,
          f = w(),
          { ixElements: E, ixSession: m, ixData: y } = n.getState(),
          T = N(E, r),
          { refState: h } = E[T] || {},
          b = I.getRefType(r),
          _ = m.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (_ && s)
          switch (y.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = u;
              break;
            default:
              t = 0.5;
          }
        let O = k(r, h, a, o, I, l);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: T,
              origin: O,
              refType: b,
              skipMotion: _,
              skipToValue: t,
              ...i,
            }),
          ),
          em(document.body, "ix2-animation-started", f),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: a } = e.getState();
            ey(a[t], e);
          })(n, f);
        (C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: ey }),
          s || n.dispatch((0, g.instanceStarted)(f, m.tick)));
      }
      function eI(e, t) {
        em(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: r, refType: o } = i[n] || {};
        (o === v && B(r, a, I), t.dispatch((0, g.instanceRemoved)(e.id)));
      }
      function em(e, t, n) {
        let a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a));
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: r,
            actionItem: o,
            actionTypeId: c,
            renderType: l,
            current: s,
            groupIndex: u,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: m,
            styleProp: y,
            verbose: T,
            pluginInstance: h,
          } = e,
          { ixData: b, ixSession: _ } = t.getState(),
          { events: O } = b,
          { mediaQueries: L = b.mediaQueryKeys } = O && O[d] ? O[d] : {};
        if (U(L, _.mediaQueryKey) && (a || n || i)) {
          if (s || (l === A && i)) {
            t.dispatch((0, g.elementStateChanged)(r, c, s, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[r] || {},
              u = i && i[c];
            (a === v || Y(c)) && P(n, i, u, d, o, y, I, l, h);
          }
          if (i) {
            if (m) {
              let e = eE({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: u + 1,
                verbose: T,
              });
              T &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  }),
                );
            }
            eI(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        }));
      let i = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        c = n(7087),
        l = n(1970),
        s = n(3946),
        u = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: I,
          MOUSE_OUT: m,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: T,
          SLIDER_ACTIVE: h,
          SLIDER_INACTIVE: b,
          TAB_ACTIVE: _,
          TAB_INACTIVE: O,
          NAVBAR_CLOSE: v,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: L,
          PAGE_SCROLL_DOWN: R,
          SCROLL_INTO_VIEW: N,
          SCROLL_OUT_OF_VIEW: S,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: w,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: G,
          ECOMMERCE_CART_OPEN: M,
          PAGE_START: F,
          PAGE_SCROLL: k,
        } = c.EventTypeConsts,
        V = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: x } = c.IX2EngineConstants,
        { getNamespacedParameterId: U } = u.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        W = B(({ element: e, nativeEvent: t }) => e === t.target),
        j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        X = (0, i.default)([W, j]),
        H = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!H(e, a);
        },
        Q = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: o, id: c } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = H(e, u);
          return (
            d &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + x + a.split(x)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: s,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: s,
            }),
            i
          );
        },
        z = (e, t) => (n, a) => (!0 === e(n, a) ? t(n, a) : a),
        $ = { handler: z(X, Q) },
        q = { ...$, types: [V, D].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: F, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            r = e.contains(a);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(i);
          return "mouseout" === n && !!r && !!o;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (i * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: a,
            bottom: i - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [V, D].indexOf(a) ? a === V : n.isActive,
            r = { ...n, isActive: i };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: c } = et(),
              {
                event: { config: l, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = l,
              f = o - c,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === d ? u : (c * (u || 0)) / 100) / f,
              g = 0;
            n &&
              ((a = p > n.percentTop),
              (g = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let I = s === R ? p >= g + E : p <= g - E,
              m = {
                ...n,
                percentTop: p,
                inBounds: I,
                anchorTop: g,
                scrollingDown: a,
              };
            return (n && I && (i || m.inBounds !== n.inBounds) && e(t, m)) || m;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        eu = (e = !0) => ({
          ...q,
          handler: z(
            e ? X : W,
            er((e, t) => (t.isActive ? $.handler(e, t) : t)),
          ),
        }),
        ed = (e = !0) => ({
          ...q,
          handler: z(
            e ? X : W,
            er((e, t) => (t.isActive ? t : $.handler(e, t))),
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: r } = i.getState(),
                { events: o } = r;
              return !o[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === N) === n
                  ? (Q(e), { ...t, triggered: !0 })
                  : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [h]: eu(),
          [b]: ed(),
          [T]: eu(),
          [y]: ed(),
          [A]: eu(!1),
          [v]: ed(!1),
          [_]: eu(),
          [O]: ed(),
          [M]: { types: "ecommerce-cart-open", handler: z(X, Q) },
          [G]: { types: "ecommerce-cart-close", handler: z(X, Q) },
          [f]: {
            types: "click",
            handler: z(
              X,
              es((e, { clickCount: t }) => {
                Y(e) ? 1 === t && Q(e) : Q(e);
              }),
            ),
          },
          [p]: {
            types: "click",
            handler: z(
              X,
              es((e, { clickCount: t }) => {
                2 === t && Q(e);
              }),
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [g]: { ...$, types: "mouseup" },
          [I]: {
            types: Z,
            handler: z(
              X,
              eo((e, t) => {
                t.elementHovered && Q(e);
              }),
            ),
          },
          [m]: {
            types: Z,
            handler: z(
              X,
              eo((e, t) => {
                t.elementHovered || Q(e);
              }),
            ),
          },
          [L]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: E = r.clientY,
                  pageX: g = r.pageX,
                  pageY: I = r.pageY,
                } = a,
                m = "X_AXIS" === l,
                y = "mouseout" === a.type,
                T = f / 100,
                h = u,
                b = !1;
              switch (o) {
                case c.EventBasedOn.VIEWPORT:
                  T = m
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  T = m ? Math.min(e + g, n) / n : Math.min(t + I, a) / a;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  h = U(i, u);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== X({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: c, height: l } = n;
                  if (!e && !el({ left: p, top: E }, n)) break;
                  ((b = !0), (T = m ? (p - r) / c : (E - o) / l));
                }
              }
              return (
                y && (T > 0.95 || T < 0.05) && (T = Math.round(T)),
                (o !== c.EventBasedOn.ELEMENT || b || b !== r.elementHovered) &&
                  ((T = d ? 1 - T : T),
                  e.dispatch((0, s.parameterChanged)(h, T))),
                {
                  elementHovered: b,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: I,
                }
              );
            },
          },
          [k]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: r, clientHeight: o } = et(),
                c = i / (r - o);
              ((c = a ? 1 - c : c), e.dispatch((0, s.parameterChanged)(n, c)));
            },
          },
          [w]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: u,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: I,
                  addEndOffset: m,
                  addStartOffset: y,
                  addOffsetValue: T = 0,
                  endOffsetValue: h = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / l : o / u;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = U(a, E),
                  r = e.getBoundingClientRect(),
                  o = (y ? T : 0) / 100,
                  c = (m ? h : 0) / 100;
                ((o = g ? o : 1 - o), (c = I ? c : 1 - c));
                let l = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * c - l), u),
                  p = Math.min(Math.max(0, d - l), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [N]: ef,
          [S]: ef,
          [R]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && Q(e);
            }),
          },
          [C]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || Q(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: z(W, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return (n.finished && !(t && t.finshed) && Q(e), n);
            }),
          },
          [F]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: z(W, (e, t) => (t || Q(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return b;
          },
        }));
      let a = n(7087),
        i = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: u,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: g } = a.IX2EngineConstants,
        {
          getItemConfigByKey: I,
          getRenderType: m,
          getStyleProp: y,
        } = i.IX2VanillaUtils,
        T = (e, t) => {
          let n,
            a,
            i,
            o,
            {
              position: c,
              parameterId: l,
              actionGroups: s,
              destinationKeys: u,
              smoothing: d,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: m,
              skipMotion: y,
              skipToValue: T,
            } = e,
            { parameters: h } = t.payload,
            b = Math.max(1 - d, 0.01),
            _ = h[l];
          null == _ && ((b = 1), (_ = E));
          let O = f((Math.max(_, 0) || 0) - c),
            v = y ? T : f(c + O * b),
            A = 100 * v;
          if (v === c && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: r } = s[e];
            if ((0 === e && (n = r[0]), A >= t)) {
              n = r[0];
              let c = s[e + 1],
                l = c && A !== t;
              ((a = l ? c.actionItems[0] : null),
                l && ((i = t / 100), (o = (c.keyframe - t) / 100)));
            }
          }
          let L = {};
          if (n && !a)
            for (let e = 0, { length: t } = u; e < t; e++) {
              let t = u[e];
              L[t] = I(g, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== o) {
            let e = (v - i) / o,
              t = p(n.config.easing, e, m);
            for (let e = 0, { length: i } = u; e < i; e++) {
              let i = u[e],
                r = I(g, i, n.config),
                o = (I(g, i, a.config) - r) * t + r;
              L[i] = o;
            }
          }
          return (0, r.merge)(e, { position: v, current: L });
        },
        h = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: o,
              renderType: c,
              verbose: l,
              actionItem: s,
              destination: u,
              destinationKeys: d,
              pluginDuration: E,
              instanceDelay: I,
              customEasingFn: m,
              skipMotion: y,
            } = e,
            T = s.config.easing,
            { duration: h, delay: b } = s.config;
          (null != E && (h = E),
            (b = null != I ? I : b),
            c === g ? (h = 0) : (o || y) && (h = b = 0));
          let { now: _ } = t.payload;
          if (n && a) {
            let t = _ - (i + b);
            if (l) {
              let t = h + b,
                n = f(Math.min(Math.max(0, (_ - i) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / h), 1)),
              o = p(T, n, m),
              c = {},
              s = null;
            return (
              d.length &&
                (s = d.reduce((e, t) => {
                  let n = u[t],
                    i = parseFloat(a[t]) || 0,
                    r = parseFloat(n) - i;
                  return ((e[t] = r * o + i), e);
                }, {})),
              (c.current = s),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, r.merge)(e, c)
            );
          }
          return e;
        },
        b = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: o,
                  eventTarget: c,
                  eventStateKey: l,
                  actionListId: s,
                  groupIndex: u,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: I,
                  continuous: T,
                  parameterId: h,
                  actionGroups: b,
                  smoothing: _,
                  restingValue: O,
                  pluginInstance: v,
                  pluginDuration: A,
                  instanceDelay: L,
                  skipMotion: R,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: S } = i,
                C = m(S),
                w = y(C, S),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e],
                ),
                { easing: G } = i.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: g,
                verbose: I,
                current: null,
                actionItem: i,
                actionTypeId: S,
                eventId: o,
                eventTarget: c,
                eventStateKey: l,
                actionListId: s,
                groupIndex: u,
                renderType: C,
                isCarrier: d,
                styleProp: w,
                continuous: T,
                parameterId: h,
                actionGroups: b,
                smoothing: _,
                restingValue: O,
                pluginInstance: v,
                pluginDuration: A,
                instanceDelay: L,
                skipMotion: R,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(G) && 4 === G.length ? E(G) : void 0,
              });
            }
            case s: {
              let { instanceId: n, time: a } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case u: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: r } = i;
              for (let t = 0; t < r; t++) {
                let r = i[t];
                r !== n && (a[r] = e[r]);
              }
              return a;
            }
            case d: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let o = 0; o < i; o++) {
                let i = a[o],
                  c = e[i],
                  l = c.continuous ? T : h;
                n = (0, r.set)(n, i, l(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case r: {
              let { key: n, value: a } = t.payload;
              return ((e[n] = a), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let a = n(9516),
        i = n(4609),
        r = n(628),
        o = n(5862),
        c = n(9468),
        l = n(7718),
        s = n(1540),
        { ixElements: u } = c.IX2ElementsReducer,
        d = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: u,
          ixInstances: l.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: l,
        } = a.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        u = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [c]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        d = (e = s, t) => {
          if (t.type in u) {
            let n = [u[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return I;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: u,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = a.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        I = (e = g, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case o:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case l:
              return g;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case s: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case u: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                r = a.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: i, max: r } = a[e];
                if (n >= i && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        s = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        u = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        s = () => null,
        u = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = c();
          if (!a) return;
          let o = a.getInstance(e),
            l = a.rive.StateMachineInputType,
            { name: s, inputs: u = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(s);
              if (null != n) {
                if ((e.isPlaying || e.play(s, !1), i in u || r in u)) {
                  let t = e.layout,
                    n = u[i] ?? t.fit,
                    a = u[r] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in u) {
                  if (e === i || e === r) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case l.Boolean:
                        null != u[e] && (a.value = !!u[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case l.Trigger:
                        u[e] && a.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : a.setLoadHandler(e, d);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        l = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        u = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = r();
          if (!a) return;
          let i = a.getInstance(e),
            o = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              (null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ));
            };
          i ? c(i.spline) : a.setLoadHandler(e, c);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = n(380),
        o = (e, t) => e.value[t],
        c = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(i) }
              : null != n.red && null != n.green && null != n.blue
                ? (0, r.normalizeColor)(i)
                : void 0;
        },
        s = (e) => e.value,
        u = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, i));
          o && document.documentElement.style.setProperty(a, o.getValue(r, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let a = n(7087),
        i = s(n(7377)),
        r = s(n(2866)),
        o = s(n(2570)),
        c = s(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(a, r, o)
              : (a[r] = e[r]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
      let u = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return h;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return T;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return I;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return m;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return _;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return u;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        u = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        I = "IX2_INSTANCE_ADDED",
        m = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        h = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        _ = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        AUTO: function () {
          return X;
        },
        BACKGROUND: function () {
          return D;
        },
        BACKGROUND_COLOR: function () {
          return V;
        },
        BAR_DELIMITER: function () {
          return Q;
        },
        BORDER_COLOR: function () {
          return x;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return z;
        },
        COLON_DELIMITER: function () {
          return Y;
        },
        COLOR: function () {
          return U;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return I;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return u;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        EXPRESSION_ELEMENT: function () {
          return et;
        },
        FILTER: function () {
          return G;
        },
        FLEX: function () {
          return W;
        },
        FONT_VARIATION_SETTINGS: function () {
          return M;
        },
        HEIGHT: function () {
          return k;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return L;
        },
        ROTATE_Y: function () {
          return R;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return _;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return v;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return S;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return w;
        },
        TRANSFORM: function () {
          return m;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return T;
        },
        TRANSLATE_Z: function () {
          return h;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return F;
        },
        WILL_CHANGE: function () {
          return j;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        c = "w-mod-ix",
        l = ".w-dyn-item",
        s = "xValue",
        u = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        I = "unit",
        m = "transform",
        y = "translateX",
        T = "translateY",
        h = "translateZ",
        b = "translate3d",
        _ = "scaleX",
        O = "scaleY",
        v = "scaleZ",
        A = "scale3d",
        L = "rotateX",
        R = "rotateY",
        N = "rotateZ",
        S = "skew",
        C = "skewX",
        w = "skewY",
        P = "opacity",
        G = "filter",
        M = "font-variation-settings",
        F = "width",
        k = "height",
        V = "backgroundColor",
        D = "background",
        x = "borderColor",
        U = "color",
        B = "display",
        W = "flex",
        j = "willChange",
        X = "AUTO",
        H = ",",
        Y = ":",
        Q = "|",
        z = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "EXPRESSION_ELEMENT",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = s(n(1833), t),
        o = s(n(262), t);
      (s(n(8704), t), s(n(3213), t));
      let c = d(n(8023)),
        l = d(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(a, r, o)
              : (a[r] = e[r]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: c,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: s,
        } = n(262).ActionTypeConsts,
        u = { [a]: !0, [i]: !0, [r]: !0, [o]: !0, [c]: !0, [l]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return u;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        u = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (r = parseFloat(e[3])));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            o,
            l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(l[0]),
            u = parseFloat(l[1].replace("%", "")) / 100,
            d = parseFloat(l[2].replace("%", "")) / 100;
          r = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * d - 1)) * u,
            p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            E = d - f / 2;
          (s >= 0 && s < 60
            ? ((e = f), (n = p), (o = 0))
            : s >= 60 && s < 120
              ? ((e = p), (n = f), (o = 0))
              : s >= 120 && s < 180
                ? ((e = 0), (n = f), (o = p))
                : s >= 180 && s < 240
                  ? ((e = 0), (n = p), (o = f))
                  : s >= 240 && s < 300
                    ? ((e = p), (n = 0), (o = f))
                    : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((o + E) * 255)));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            r,
            o = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            s = parseFloat(o[1].replace("%", "")) / 100,
            u = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * u - 1)) * s,
            f = d * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = u - d / 2;
          (l >= 0 && l < 60
            ? ((e = d), (n = f), (r = 0))
            : l >= 60 && l < 120
              ? ((e = f), (n = d), (r = 0))
              : l >= 120 && l < 180
                ? ((e = 0), (n = d), (r = f))
                : l >= 180 && l < 240
                  ? ((e = 0), (n = f), (r = d))
                  : l >= 240 && l < 300
                    ? ((e = f), (n = 0), (r = d))
                    : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((r + p) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return { red: t, green: a, blue: i, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return u;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = f(n(2662)),
        o = f(n(8686)),
        c = f(n(3767)),
        l = f(n(5861)),
        s = f(n(1799)),
        u = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(a, r, o)
              : (a[r] = e[r]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return u;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let o = (a = n(9777)) && a.__esModule ? a : { default: a },
        c = "undefined" != typeof window,
        l = (e, t) => (c ? e() : t),
        s = l(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        u = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return u;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, r, o)
                : (a[r] = e[r]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(8686)),
        c = (a = n(1361)) && a.__esModule ? a : { default: a };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function u(e) {
        return (0, c.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? s(t > 0 ? n(t) : t)
              : s(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return W;
          },
          bouncePast: function () {
            return j;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return u;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return G;
          },
          inCirc: function () {
            return S;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return k;
          },
          inExpo: function () {
            return L;
          },
          inOutBack: function () {
            return F;
          },
          inOutCirc: function () {
            return w;
          },
          inOutCubic: function () {
            return I;
          },
          inOutElastic: function () {
            return D;
          },
          inOutExpo: function () {
            return N;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return T;
          },
          inOutQuint: function () {
            return _;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return m;
          },
          inQuint: function () {
            return h;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return V;
          },
          outExpo: function () {
            return R;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return b;
          },
          outSine: function () {
            return v;
          },
          swingFrom: function () {
            return U;
          },
          swingFromTo: function () {
            return x;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let o = (a = n(1361)) && a.__esModule ? a : { default: a },
        c = (0, o.default)(0.25, 0.1, 0.25, 1),
        l = (0, o.default)(0.42, 0, 1, 1),
        s = (0, o.default)(0, 0, 0.58, 1),
        u = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function I(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function m(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function h(e) {
        return Math.pow(e, 5);
      }
      function b(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function _(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function v(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function L(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function R(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function N(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function S(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function w(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function G(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function F(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function D(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                a < 1
                  ? ((a = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                e < 1)
              ? -0.5 *
                (a *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : a *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function x(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function W(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return u;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = n(2662),
        o = n(3690);
      function c(e) {
        return o.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        s = l("getPluginConfig"),
        u = l("getPluginOrigin"),
        d = l("getPluginDuration"),
        f = l("getPluginDestination"),
        p = l("createPluginInstance"),
        E = l("renderPlugin"),
        g = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return eW;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eh;
        },
        getComputedStyle: function () {
          return eb;
        },
        getDestinationValues: function () {
          return eS;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eA;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return ez;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ew;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eI;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return u.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = g(n(4075)),
        o = g(n(1455)),
        c = g(n(5720)),
        l = n(1185),
        s = n(7087),
        u = g(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: I,
          TRANSFORM: m,
          TRANSLATE_3D: y,
          SCALE_3D: T,
          ROTATE_X: h,
          ROTATE_Y: b,
          ROTATE_Z: _,
          SKEW: O,
          PRESERVE_3D: v,
          FLEX: A,
          OPACITY: L,
          FILTER: R,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: S,
          HEIGHT: C,
          BACKGROUND_COLOR: w,
          BORDER_COLOR: P,
          COLOR: G,
          CHILDREN: M,
          IMMEDIATE_CHILDREN: F,
          SIBLINGS: k,
          PARENT: V,
          DISPLAY: D,
          WILL_CHANGE: x,
          AUTO: U,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: W,
          BAR_DELIMITER: j,
          RENDER_TRANSFORM: X,
          RENDER_GENERAL: H,
          RENDER_STYLE: Y,
          RENDER_PLUGIN: Q,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: z,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = s.ActionTypeConsts,
        ec = (e) => e.trim(),
        el = Object.freeze({ [en]: w, [ea]: P, [ei]: G }),
        es = Object.freeze({
          [E.TRANSFORM_PREFIXED]: m,
          [w]: I,
          [L]: L,
          [R]: R,
          [S]: S,
          [C]: C,
          [N]: N,
        }),
        eu = new Map();
      function ed() {
        eu.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eE++;
      }
      function eI({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          i = n && n.mediaQueries,
          r = [];
        return (
          i
            ? (r = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let em = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: a = em }) {
        let { getState: i, subscribe: r } = e,
          o = r(function () {
            let r = t(i());
            if (null == r) return void o();
            a(r, c) || n((c = r), e);
          }),
          c = t(i());
        return o;
      }
      function eT(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eh({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let r, o, c;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, r) =>
              e.concat(
                eh({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                }),
              ),
            [],
          );
        let {
            getValidDocument: u,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: I,
            elementContains: m,
            isSiblingNode: y,
          } = i,
          { target: T } = e;
        if (!T) return [];
        let {
          id: h,
          objectId: b,
          selector: _,
          selectorGuids: O,
          appliesTo: v,
          useEventTarget: A,
        } = eT(T);
        if (b) return [eu.has(b) ? eu.get(b) : eu.set(b, {}).get(b)];
        if (v === s.EventAppliesTo.PAGE) {
          let e = u(h);
          return e ? [e] : [];
        }
        let L = (t?.action?.config?.affectedElements ?? {})[h || _] || {},
          R = !!(L.id || L.selector),
          N = t && d(eT(t.target));
        if (
          (R
            ? ((r = L.limitAffectedElements), (o = N), (c = d(L)))
            : (o = c = d({ id: h, selector: _, selectorGuids: O })),
          t && A)
        ) {
          let e = n && (c || !0 === A) ? [n] : f(N);
          if (c) {
            if (A === V) return f(c).filter((t) => e.some((e) => m(t, e)));
            if (A === M) return f(c).filter((t) => e.some((e) => m(e, t)));
            if (A === k) return f(c).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == o || null == c
          ? []
          : E.IS_BROWSER_ENV && a
            ? f(c).filter((e) => a.contains(e))
            : r === M
              ? f(o, c)
              : r === F
                ? p(f(o)).filter(I(c))
                : r === k
                  ? g(f(o)).filter(I(c))
                  : f(c);
      }
      function eb({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let e_ = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e),
            e || {},
          ),
        ev = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eF[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function eA(e, t = {}, n = {}, a, i) {
        let { getStyle: o } = i,
          { actionTypeId: c } = a;
        if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], a);
        switch (a.actionTypeId) {
          case z:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || eG[a.actionTypeId];
          case J:
            return eO(t[a.actionTypeId], a.config.filters);
          case ee:
            return ev(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, r.default)(parseFloat(o(e, L)), 1) };
          case et: {
            let t,
              i = o(e, S),
              c = o(e, C);
            return {
              widthValue:
                a.config.widthUnit === U
                  ? e_.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === U
                  ? e_.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = el[t],
                o = a(e, i),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(ex, eD.test(o) ? o : n[i]).split(B);
              return {
                rValue: (0, r.default)(parseInt(c[0], 10), 255),
                gValue: (0, r.default)(parseInt(c[1], 10), 255),
                bValue: (0, r.default)(parseInt(c[2], 10), 255),
                aValue: (0, r.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return { value: (0, r.default)(o(e, D), n.display) };
          case eo:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eS({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case z:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: r } = n,
              { widthUnit: o, heightUnit: c } = t.config,
              { widthValue: l, heightValue: s } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: l, heightValue: s };
            if (o === U) {
              let t = a(e, S);
              (i(e, S, ""), (l = r(e, "offsetWidth")), i(e, S, t));
            }
            if (c === U) {
              let t = a(e, C);
              (i(e, C, ""), (s = r(e, "offsetHeight")), i(e, C, t));
            }
            return { widthValue: l, heightValue: s };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: r,
              aValue: o,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, c),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: r, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eL, {});
          case ee:
            return t.config.fontVariations.reduce(eR, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? X
          : /^STYLE_/.test(e)
            ? Y
            : /^GENERAL_/.test(e)
              ? H
              : /^PLUGIN_/.test(e)
                ? Q
                : void 0;
      }
      function ew(e, t) {
        return e === Y ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, a, i, r, c, l, s) {
        switch (l) {
          case X:
            var u = e,
              d = t,
              f = n,
              g = i,
              I = c;
            let m = eV
                .map((e) => {
                  let t = eG[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: c = "",
                    } = d[e] || {};
                  switch (e) {
                    case z:
                      return `${y}(${n}${r}, ${a}${o}, ${i}${c})`;
                    case $:
                      return `${T}(${n}${r}, ${a}${o}, ${i}${c})`;
                    case q:
                      return `${h}(${n}${r}) ${b}(${a}${o}) ${_}(${i}${c})`;
                    case K:
                      return `${O}(${n}${r}, ${a}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: L } = I;
            (eU(u, E.TRANSFORM_PREFIXED, I),
              L(u, E.TRANSFORM_PREFIXED, m),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a },
              ) {
                return (
                  (e === z && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && L(u, E.TRANSFORM_STYLE_PREFIXED, v));
            return;
          case Y:
            return (function (e, t, n, a, i, r) {
              let { setStyle: c } = r;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: o, heightValue: l } = n;
                  (void 0 !== o &&
                    (t === U && (t = "px"), eU(e, S, r), c(e, S, o + t)),
                    void 0 !== l &&
                      (i === U && (i = "px"), eU(e, C, r), c(e, C, l + i)));
                  break;
                }
                case J:
                  var l = a.config;
                  let s = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ek(n, l)})`,
                      "",
                    ),
                    { setStyle: u } = r;
                  (eU(e, R, r), u(e, R, s));
                  break;
                case ee:
                  a.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: f } = r;
                  (eU(e, N, r), f(e, N, d));
                  break;
                case en:
                case ea:
                case ei: {
                  let t = el[a.actionTypeId],
                    i = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    s = n.aValue;
                  (eU(e, t, r),
                    c(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${i},${o},${l})`
                        : `rgba(${i},${o},${l},${s})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  (eU(e, i, r), c(e, i, n.value + t));
                }
              }
            })(e, 0, n, i, r, c);
          case H:
            var w = e,
              P = i,
              G = c;
            let { setStyle: M } = G;
            if (P.actionTypeId === er) {
              let { value: e } = P.config;
              M(w, D, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, i);
          }
        }
      }
      let eG = {
          [z]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ek = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eV = Object.keys(eG),
        eD = /^rgb/,
        ex = RegExp("rgba?\\(([^)]+)\\)");
      function eU(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = es[t];
        if (!a) return;
        let { getStyle: i, setStyle: r } = n,
          o = i(e, x);
        if (!o) return void r(e, x, a);
        let c = o.split(B).map(ec);
        -1 === c.indexOf(a) && r(e, x, c.concat(a).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = es[t];
        if (!a) return;
        let { getStyle: i, setStyle: r } = n,
          o = i(e, x);
        o &&
          -1 !== o.indexOf(a) &&
          r(
            e,
            x,
            o
              .split(B)
              .map(ec)
              .filter((e) => e !== a)
              .join(B),
          );
      }
      function eW({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        (Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            c = i[o];
          c && ej({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            ej({ actionList: i[e], elementApi: t });
          }));
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        (a &&
          a.forEach((e) => {
            eX({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eX({ actionGroup: e, event: t, elementApi: n });
              });
            }));
      }
      function eX({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: r } = e;
          ((a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eY({ effect: eQ, actionTypeId: i, elementApi: n })),
            eh({ config: r, event: t, elementApi: n }).forEach(a));
        });
      }
      function eH(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          (n.widthUnit === U && a(e, S, ""), n.heightUnit === U && a(e, C, ""));
        }
        i(e, x) && eY({ effect: eB, actionTypeId: r, elementApi: n })(e);
      }
      let eY =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case z:
            case $:
            case q:
            case K:
              e(a, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, R, n);
              break;
            case ee:
              e(a, N, n);
              break;
            case Z:
              e(a, L, n);
              break;
            case et:
              (e(a, S, n), e(a, C, n));
              break;
            case en:
            case ea:
            case ei:
              e(a, el[t], n);
              break;
            case er:
              e(a, D, n);
          }
        };
      function eQ(e, t, n) {
        let { setStyle: a } = n;
        (eB(e, t, n),
          a(e, t, ""),
          t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function ez(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              r = i.delay + i.duration;
            r >= t && ((t = r), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              l = n[ez(n)],
              { config: s, actionTypeId: u } = l;
            i.id === l.id && (c = o + r);
            let d = eC(u) === H ? 0 : s.duration;
            o += s.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(c / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          r = [],
          o = (e) => (
            r.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(o)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + W + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, u.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + j + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + j + n + j + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return _;
        },
        mergeActionState: function () {
          return v;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: l,
          EXPRESSION_ELEMENT: s,
          CONFIG_X_VALUE: u,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: I,
          CONFIG_UNIT: m,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: h,
        } = o.IX2EngineActionTypes,
        b = {},
        _ = (e = b, t = {}) => {
          switch (t.type) {
            case y:
              return b;
            case T: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: o,
                  refType: c,
                } = t.payload,
                { actionTypeId: l } = o,
                s = e;
              return (
                (0, r.getIn)(s, [n, a]) !== a && (s = O(s, a, c, n, o)),
                v(s, n, l, i, o)
              );
            }
            case h: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: r,
              } = t.payload;
              return v(e, n, a, i, r);
            }
            default:
              return e;
          }
        };
      function O(e, t, n, a, i) {
        let o =
          n === l ? (0, r.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [a], { id: a, ref: t, refId: o, refType: n });
      }
      function v(e, t, n, a, i) {
        let o = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              r = t[a],
              o = t[i];
            return (null != r && null != o && (e[i] = o), e);
          }, {});
        })(i);
        return (0, r.mergeIn)(e, [t, "refState", n], a, o);
      }
      let A = [
        [u, E],
        [d, g],
        [f, I],
        [p, m],
      ];
    },
    8526: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697c82adb518a76f62a4fde0|04e31b88-0bd0-204d-4976-0994800d8367",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|04e31b88-0bd0-204d-4976-0994800d8367",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c0ff16941,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697c82adb518a76f62a4fde0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c140ee399,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697c82adb518a76f62a4fde0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c140ee399,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "697c82adb518a76f62a4fde0|96f81231-5905-3c84-c0e6-92b4a395d8a8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|96f81231-5905-3c84-c0e6-92b4a395d8a8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c2298e826,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "693160aa1da8c0ca6cc2ef74",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "693160aa1da8c0ca6cc2ef74",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c234e06e4,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "693160aa1da8c0ca6cc2ef74",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "693160aa1da8c0ca6cc2ef74",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c234e06e5,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69315f96deb00ab8c85d24eb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69315f96deb00ab8c85d24eb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c2353c45d,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69315f96deb00ab8c85d24eb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69315f96deb00ab8c85d24eb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c2353c45d,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".feature_component",
              originalId:
                "697c82adb518a76f62a4fde0|a6ae31c5-f92d-2c18-76ab-633e4b214b55",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".feature_component",
                originalId:
                  "697c82adb518a76f62a4fde0|a6ae31c5-f92d-2c18-76ab-633e4b214b55",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c2388730c,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69848289a035dec2b99fc960",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69848289a035dec2b99fc960",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c2eff5cd9,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69848289a035dec2b99fc960",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69848289a035dec2b99fc960",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c2eff5cd9,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69837f0e5522a9c9cef43743",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69837f0e5522a9c9cef43743",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c32ed802e,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69837f0e5522a9c9cef43743",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69837f0e5522a9c9cef43743",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c32ed802e,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "a7bc8a10-fdd2-7358-97a0-ee55c54de030",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a7bc8a10-fdd2-7358-97a0-ee55c54de030",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c5779860b,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "a7bc8a10-fdd2-7358-97a0-ee55c54de030",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a7bc8a10-fdd2-7358-97a0-ee55c54de030",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c5779860c,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69837d0b118ffe3374fc8841",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69837d0b118ffe3374fc8841",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c65e42fe2,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69837d0b118ffe3374fc8841",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69837d0b118ffe3374fc8841",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c65e42fe2,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "698ed291e30a741823cf39f1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "698ed291e30a741823cf39f1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c65e46b4e,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "698ed291e30a741823cf39f1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "698ed291e30a741823cf39f1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c65e46b4e,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".actions_canvas",
              originalId:
                "698ed291e30a741823cf39f1|f2570a72-d204-0769-e223-983b173adaf4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".actions_canvas",
                originalId:
                  "698ed291e30a741823cf39f1|f2570a72-d204-0769-e223-983b173adaf4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c709fcd3e,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69981d4a277db027f8101c7b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69981d4a277db027f8101c7b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c7a326dcf,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69981d4a277db027f8101c7b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69981d4a277db027f8101c7b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c7a326dcf,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "699be30f2d2b6849c7d42edc",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "699be30f2d2b6849c7d42edc",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c88ef2631,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "699be30f2d2b6849c7d42edc",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "699be30f2d2b6849c7d42edc",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c88ef2631,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-35",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a17aee7cde440acaa0581e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a17aee7cde440acaa0581e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c9f64e4c3,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a17aee7cde440acaa0581e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a17aee7cde440acaa0581e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c9f64e4c4,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1b1ef45265c6b9b3d1f4f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1b1ef45265c6b9b3d1f4f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c9fce169f,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1b1ef45265c6b9b3d1f4f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1b1ef45265c6b9b3d1f4f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c9fce16a0,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697c82adb518a76f62a4fde0|5972dcae-af7c-3b51-6bda-81dec026fcbb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|5972dcae-af7c-3b51-6bda-81dec026fcbb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19ebaeded9d,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789ed6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789ed6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ebafddc7e,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-20",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789fb2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789fb2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-20-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 10,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x19ebafddc7e,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-17",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f86",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f86",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-17-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 30,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 30,
              },
            ],
            createdOn: 0x19ebb7c98b8,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-18",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|4a27ad47-364b-37bf-c4cc-cc90c3db30ee",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|4a27ad47-364b-37bf-c4cc-cc90c3db30ee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-18-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x19ebc37013f,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ebfd8b374,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ebfd8b374,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697c82adb518a76f62a4fde0|ea242660-3b12-4e7c-554e-60aab8e63c7a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|ea242660-3b12-4e7c-554e-60aab8e63c7a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ecfc9a3fc,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789fb2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789fb2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 10,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x19ed0cc849c,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-21",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|811caddc-6408-9eac-f524-27b580df2fdd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|811caddc-6408-9eac-f524-27b580df2fdd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-21-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19ed48be15d,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-53",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".built-card",
              originalId:
                "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f67",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".built-card",
                originalId:
                  "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f67",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ed53deff1,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a33d62b9a397ec401f4c6e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a33d62b9a397ec401f4c6e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eda91b649,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a33d62b9a397ec401f4c6e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a33d62b9a397ec401f4c6e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eda91b649,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "6a33d62b9a397ec401f4c6e3|ccf0927f-acc8-659c-b211-a34bb0d8f3ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a33d62b9a397ec401f4c6e3|ccf0927f-acc8-659c-b211-a34bb0d8f3ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19edbb17b8b,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-17",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f933",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f933",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-17-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 30,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 30,
              },
            ],
            createdOn: 0x19edbd27c06,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f962",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f962",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 10,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x19edbd27c06,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-20",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small"],
            target: {
              id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f962",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f962",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-20-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 10,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x19edbd27c06,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-21",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f99d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f99d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-21-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19edbd27c06,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-18",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f99e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f99e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-18-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x19edbd27c06,
          },
          "e-63": {
            id: "e-63",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a2ad3b77fd337b01e6441a3|2f9587b6-9af0-999a-5738-38bda9cead3e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a2ad3b77fd337b01e6441a3|2f9587b6-9af0-999a-5738-38bda9cead3e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19edbd2a146,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricinng-card",
              originalId:
                "6a33d62b9a397ec401f4c6e3|e7020ec0-f457-2ed1-d952-2e4fafa4f9fb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricinng-card",
                originalId:
                  "6a33d62b9a397ec401f4c6e3|e7020ec0-f457-2ed1-d952-2e4fafa4f9fb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19edf1eb1aa,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-70",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "699be30f2d2b6849c7d42edc|2a7ab7b0-0f7a-729b-a79b-ce38cc1425fc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "699be30f2d2b6849c7d42edc|2a7ab7b0-0f7a-729b-a79b-ce38cc1425fc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ee0676c81,
          },
          "e-71": {
            id: "e-71",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-72",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "6a3901c45a239f58bcc53708|fda36737-c028-76df-ce41-bd322f1bbb14",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708|fda36737-c028-76df-ce41-bd322f1bbb14",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eef76a86a,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-74",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd36",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd36",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eef76c089,
          },
          "e-75": {
            id: "e-75",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-76",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a3901c45a239f58bcc53708|e1b4ee83-3ba9-d951-c760-25c9df4b8f85",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708|e1b4ee83-3ba9-d951-c760-25c9df4b8f85",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eefae02dd,
          },
          "e-77": {
            id: "e-77",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-78",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a3901c45a239f58bcc53708",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eefe431d9,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-77",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a3901c45a239f58bcc53708",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19eefe431da,
          },
          "e-79": {
            id: "e-79",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-80",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd29",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd29",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ef48f26b2,
          },
          "e-81": {
            id: "e-81",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-82",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "698ed291e30a741823cf39f1|8bcbed43-944f-3ebd-b03d-43054da96853",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "698ed291e30a741823cf39f1|8bcbed43-944f-3ebd-b03d-43054da96853",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ef54b8bb2,
          },
          "e-83": {
            id: "e-83",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-84",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "698ed291e30a741823cf39f1|8bcbed43-944f-3ebd-b03d-43054da96863",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "698ed291e30a741823cf39f1|8bcbed43-944f-3ebd-b03d-43054da96863",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ef54b8bb2,
          },
          "e-85": {
            id: "e-85",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-86",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6a3901c45a239f58bcc53708|69cacecf-948e-f8b4-2da4-ac17c445c8bf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708|69cacecf-948e-f8b4-2da4-ac17c445c8bf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ef54d5c1b,
          },
          "e-87": {
            id: "e-87",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-88",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6a3901c45a239f58bcc53708|69cacecf-948e-f8b4-2da4-ac17c445c8cf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6a3901c45a239f58bcc53708|69cacecf-948e-f8b4-2da4-ac17c445c8cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ef54d5c1b,
          },
          "e-95": {
            id: "e-95",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f8e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697c82adb518a76f62a4fde0|e22a8e64-76c5-ec90-dab3-4caedf46f8e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19efa7b5ceb,
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-98",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "697c82adb518a76f62a4fde0|1c97c66c-14c5-df64-1e1f-0f58f91a9f6d",
            },
            targets: [],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19f7f263002,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Hero Logo Marquee",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {
                        selector: ".logo_marquee-container",
                        selectorGuids: ["ade4db5f-9ab7-9594-bccf-3a892260000d"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".logo_marquee-container",
                        selectorGuids: ["ade4db5f-9ab7-9594-bccf-3a892260000d"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19c0ff17e98,
          },
          "a-2": {
            id: "a-2",
            title: "Navbar Scroll Show",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 300,
                      target: { id: "a7bc8a10-fdd2-7358-97a0-ee55c54de030" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19c140f028f,
          },
          "a-3": {
            id: "a-3",
            title: "Navbar Scroll Hide",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 300,
                      target: { id: "a7bc8a10-fdd2-7358-97a0-ee55c54de030" },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19c140f028f,
          },
          "a-7": {
            id: "a-7",
            title: "Circles Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".title--m.is--sales",
                        selectorGuids: [
                          "6bead058-0bbf-ec66-5a5a-3ab19255cfaf",
                          "9f1f5ae8-fa0c-f4da-b9b5-9778ce4c734c",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".title--m.is--reps",
                        selectorGuids: [
                          "6bead058-0bbf-ec66-5a5a-3ab19255cfaf",
                          "3b1f4e4a-4741-3760-e2c9-da725ab8ec01",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sales_circle.is--leaders",
                        selectorGuids: [
                          "b0ad8469-099d-584c-8344-35ee3412eb60",
                          "837de68a-1b0f-383d-6327-94ad1ec63e8e",
                        ],
                      },
                      xValue: 0.25,
                      yValue: 0.25,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sales_circle.is--reps",
                        selectorGuids: [
                          "b0ad8469-099d-584c-8344-35ee3412eb60",
                          "e6806d03-d69f-a643-df39-5c5a238961bd",
                        ],
                      },
                      xValue: 0.25,
                      yValue: 0.25,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-15",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sales_tag",
                        selectorGuids: ["c4f9cb94-7960-d7ce-7ca8-272cc9b637a0"],
                      },
                      widthValue: 5,
                      heightValue: 5,
                      widthUnit: "rem",
                      heightUnit: "rem",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-7-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sales_tag",
                        selectorGuids: ["c4f9cb94-7960-d7ce-7ca8-272cc9b637a0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-11",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sales_circle.is--leaders",
                        selectorGuids: [
                          "b0ad8469-099d-584c-8344-35ee3412eb60",
                          "837de68a-1b0f-383d-6327-94ad1ec63e8e",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-12",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sales_circle.is--reps",
                        selectorGuids: [
                          "b0ad8469-099d-584c-8344-35ee3412eb60",
                          "e6806d03-d69f-a643-df39-5c5a238961bd",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-13",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 1e3,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".title--m.is--sales",
                        selectorGuids: [
                          "6bead058-0bbf-ec66-5a5a-3ab19255cfaf",
                          "9f1f5ae8-fa0c-f4da-b9b5-9778ce4c734c",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-14",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 1e3,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".title--m.is--reps",
                        selectorGuids: [
                          "6bead058-0bbf-ec66-5a5a-3ab19255cfaf",
                          "3b1f4e4a-4741-3760-e2c9-da725ab8ec01",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1500,
                      easing: "",
                      duration: 250,
                      target: {
                        selector: ".sales_tag",
                        selectorGuids: ["c4f9cb94-7960-d7ce-7ca8-272cc9b637a0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-16",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 1750,
                      easing: "inOutCubic",
                      duration: 1e3,
                      target: {
                        selector: ".sales_tag",
                        selectorGuids: ["c4f9cb94-7960-d7ce-7ca8-272cc9b637a0"],
                      },
                      heightValue: 5,
                      widthUnit: "AUTO",
                      heightUnit: "rem",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19c224ee73d,
          },
          "a-9": {
            id: "a-9",
            title: "Features Lottie",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature_lottie",
                        selectorGuids: ["e605fe5d-32c4-6ae3-600c-2a6b35190d33"],
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature_lottie",
                        selectorGuids: ["e605fe5d-32c4-6ae3-600c-2a6b35190d33"],
                      },
                      value: 100,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19c2383e42f,
          },
          "a-10": {
            id: "a-10",
            title: "Burger Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger_icon.is--open",
                        selectorGuids: [
                          "fcdb6e30-bb5e-bf28-8b6f-b440968c431f",
                          "3328b8b3-9d2f-3435-8e5c-4f63b36e37e1",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-10-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger_icon.is--close",
                        selectorGuids: [
                          "fcdb6e30-bb5e-bf28-8b6f-b440968c431f",
                          "17de8687-562e-f28f-69c9-ecaeff663f8b",
                        ],
                      },
                      value: "block",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19c5779a91e,
          },
          "a-11": {
            id: "a-11",
            title: "Burger Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger_icon.is--open",
                        selectorGuids: [
                          "fcdb6e30-bb5e-bf28-8b6f-b440968c431f",
                          "3328b8b3-9d2f-3435-8e5c-4f63b36e37e1",
                        ],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-11-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".burger_icon.is--close",
                        selectorGuids: [
                          "fcdb6e30-bb5e-bf28-8b6f-b440968c431f",
                          "17de8687-562e-f28f-69c9-ecaeff663f8b",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19c5779a91e,
          },
          "a-12": {
            id: "a-12",
            title: "Platform lottie",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature_lottie",
                        selectorGuids: ["e605fe5d-32c4-6ae3-600c-2a6b35190d33"],
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature_lottie",
                        selectorGuids: ["e605fe5d-32c4-6ae3-600c-2a6b35190d33"],
                      },
                      value: 95,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19c2383e42f,
          },
          "a-16": {
            id: "a-16",
            title: "Wins Circles",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-16-n-3",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789fb2",
                          },
                          globalSwatchId: "--_zig---colors--black",
                          rValue: 21,
                          bValue: 26,
                          gValue: 23,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-16-n-4",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789fb2",
                          },
                          globalSwatchId: "--_zig---colors--white",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-16-n-15",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          xValue: 0.2,
                          yValue: 0.2,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          widthValue: 31.25,
                          widthUnit: "rem",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-16-n-16",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          widthValue: 53.125,
                          widthUnit: "rem",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-16-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".win-circle-content",
                            selectorGuids: [
                              "ce78c2d5-0940-6429-afa0-2b18e2e645df",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-16-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circle.illustration",
                            selectorGuids: [
                              "3c43c5ad-ddd1-5cf9-15aa-731c2c834386",
                              "4364d307-05fe-a2b2-db62-1d1bf9efe69d",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-16-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".win-circle-content",
                            selectorGuids: [
                              "ce78c2d5-0940-6429-afa0-2b18e2e645df",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-16-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circle.illustration",
                            selectorGuids: [
                              "3c43c5ad-ddd1-5cf9-15aa-731c2c834386",
                              "4364d307-05fe-a2b2-db62-1d1bf9efe69d",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 78,
                    actionItems: [
                      {
                        id: "a-16-n-17",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-tooltips",
                            selectorGuids: [
                              "31a598c7-2e80-db7c-3771-7d3144d8da92",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-16-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-tooltips",
                            selectorGuids: [
                              "31a598c7-2e80-db7c-3771-7d3144d8da92",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19ebaedfbc2,
          },
          "a-20": {
            id: "a-20",
            title: "Wins Circles Tablet",
            continuousParameterGroups: [
              {
                id: "a-20-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-20-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          xValue: 0.2,
                          yValue: 0.2,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-20-n-4",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          heightValue: 22.5,
                          widthUnit: "AUTO",
                          heightUnit: "rem",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-20-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-20-n-6",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circles-wrapp",
                            selectorGuids: [
                              "5b7c7f54-ec9d-0a72-9d0d-67bee62ce857",
                            ],
                          },
                          heightValue: 38,
                          widthUnit: "rem",
                          heightUnit: "rem",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-20-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circle-text",
                            selectorGuids: [
                              "72c4e565-d06a-08e0-9908-2bc36e988cfd",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circle.illustration",
                            selectorGuids: [
                              "3c43c5ad-ddd1-5cf9-15aa-731c2c834386",
                              "4364d307-05fe-a2b2-db62-1d1bf9efe69d",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-20-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circle-text",
                            selectorGuids: [
                              "72c4e565-d06a-08e0-9908-2bc36e988cfd",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-10",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".win-circle.illustration",
                            selectorGuids: [
                              "3c43c5ad-ddd1-5cf9-15aa-731c2c834386",
                              "4364d307-05fe-a2b2-db62-1d1bf9efe69d",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-20-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".win-tooltips",
                            selectorGuids: [
                              "31a598c7-2e80-db7c-3771-7d3144d8da92",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 82,
                    actionItems: [
                      {
                        id: "a-20-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".win-tooltips",
                            selectorGuids: [
                              "31a598c7-2e80-db7c-3771-7d3144d8da92",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19ebaedfbc2,
          },
          "a-17": {
            id: "a-17",
            title: "Impact Circles",
            continuousParameterGroups: [
              {
                id: "a-17-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-17-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--01",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "1b942bb4-5d28-56d1-b2d9-bef74e1aad2f",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--02",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "03e258ce-b3e8-3632-ca61-50150d36d2a0",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--03",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "9168549b-7d75-352d-1d55-ec5f6256af35",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--04",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "6f8c4b17-1646-1f7b-e585-7703d849bd73",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-17-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".impact-content",
                            selectorGuids: [
                              "1091ea5e-11a4-9a7f-dfa7-7c68dc34fded",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-17-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--01",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "1b942bb4-5d28-56d1-b2d9-bef74e1aad2f",
                            ],
                          },
                          xValue: 50,
                          yValue: 50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--02",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "03e258ce-b3e8-3632-ca61-50150d36d2a0",
                            ],
                          },
                          xValue: -50,
                          yValue: 50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--03",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "9168549b-7d75-352d-1d55-ec5f6256af35",
                            ],
                          },
                          xValue: 50,
                          yValue: -50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item.is--04",
                            selectorGuids: [
                              "449830a6-619d-8453-384c-9af0713cef22",
                              "6f8c4b17-1646-1f7b-e585-7703d849bd73",
                            ],
                          },
                          xValue: -50,
                          yValue: -50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".impact-content",
                            selectorGuids: [
                              "1091ea5e-11a4-9a7f-dfa7-7c68dc34fded",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-17-n-17",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item-accent",
                            selectorGuids: [
                              "54dfb49f-5d36-7ed1-2747-de85c50a3643",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-17-n-18",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".impact-item-accent",
                            selectorGuids: [
                              "54dfb49f-5d36-7ed1-2747-de85c50a3643",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19ebb7cb326,
          },
          "a-18": {
            id: "a-18",
            title: "Steps Scroll Animation",
            continuousParameterGroups: [
              {
                id: "a-18-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-18-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".steps-track",
                            selectorGuids: [
                              "5d2d34e6-2a69-abc7-8d41-3814e6b84493",
                            ],
                          },
                          xValue: 10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 88,
                    actionItems: [
                      {
                        id: "a-18-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".sales-animation-track",
                            selectorGuids: [
                              "dbc64a1e-d13e-08e4-bde7-fd11072c44d3",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-18-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".steps-track",
                            selectorGuids: [
                              "5d2d34e6-2a69-abc7-8d41-3814e6b84493",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-18-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".sales-animation-track",
                            selectorGuids: [
                              "dbc64a1e-d13e-08e4-bde7-fd11072c44d3",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19ebc3741b1,
          },
          "a-21": {
            id: "a-21",
            title: "Sales Cards",
            continuousParameterGroups: [
              {
                id: "a-21-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 55,
                    actionItems: [
                      {
                        id: "a-21-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sales-section_heading",
                            selectorGuids: [
                              "e08f42b3-0cce-af1d-4882-5caec01b60f1",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-21-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sales-cards",
                            selectorGuids: [
                              "56ecc329-0c7d-7402-7b31-451d8b9157d9",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 57,
                    actionItems: [
                      {
                        id: "a-21-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sales-section_heading",
                            selectorGuids: [
                              "e08f42b3-0cce-af1d-4882-5caec01b60f1",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-21-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sales-cards",
                            selectorGuids: [
                              "56ecc329-0c7d-7402-7b31-451d8b9157d9",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19ed48c3996,
          },
          "a-22": {
            id: "a-22",
            title: "Built Card Zoom",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f67",
                      },
                      xValue: 0.95,
                      yValue: 0.95,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f67",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19ed53e167e,
          },
          "a-23": {
            id: "a-23",
            title: "Pricing Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".pricing-anim_text",
                        selectorGuids: ["cbfdd1ab-aab0-f57c-b2db-0de23e08db45"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-23-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-anim_sub",
                        selectorGuids: ["41c83f47-a4f5-23d1-bb66-d55de9772aee"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-23-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-line_1",
                        selectorGuids: ["218b6d3b-a6ad-df09-b709-ff7aedb3437a"],
                      },
                      heightValue: 0,
                      widthUnit: "vh",
                      heightUnit: "vh",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-23-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-line_2",
                        selectorGuids: ["28891e67-887f-32ee-d36a-0f86fbf48f29"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-23-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-line_3",
                        selectorGuids: ["7a28865d-ed92-a54b-b345-532872286764"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-23-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 3500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-line_1",
                        selectorGuids: ["218b6d3b-a6ad-df09-b709-ff7aedb3437a"],
                      },
                      heightValue: 400,
                      widthUnit: "vh",
                      heightUnit: "vh",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-23-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 3500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-line_2",
                        selectorGuids: ["28891e67-887f-32ee-d36a-0f86fbf48f29"],
                      },
                      widthValue: 400,
                      widthUnit: "vh",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-23-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 3500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-line_3",
                        selectorGuids: ["7a28865d-ed92-a54b-b345-532872286764"],
                      },
                      widthValue: 400,
                      widthUnit: "vh",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-23-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outCubic",
                      duration: 1e3,
                      target: {
                        selector: ".pricing-anim_text",
                        selectorGuids: ["cbfdd1ab-aab0-f57c-b2db-0de23e08db45"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-23-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".pricing-anim_sub",
                        selectorGuids: ["41c83f47-a4f5-23d1-bb66-d55de9772aee"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19edbb19f1a,
          },
          "a-24": {
            id: "a-24",
            title: "Pricing Card Zoom",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f67",
                      },
                      xValue: 0.95,
                      yValue: 0.95,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "6a2ad3b77fd337b01e6441a3|ea0526d6-524f-4dba-6c34-2e936a789f67",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19ed53e167e,
          },
          "a-27": {
            id: "a-27",
            title: "HIW Stack animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".stack-bg_line",
                        selectorGuids: ["316f8119-6848-f5b0-b722-7d84e82fb691"],
                      },
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "px",
                      heightUnit: "vh",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hiw-stack-lottie",
                        selectorGuids: ["454ec820-363c-da48-1119-71b341b85faf"],
                      },
                      value: 95,
                    },
                  },
                  {
                    id: "a-27-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        selector: ".stack-bg_line",
                        selectorGuids: ["316f8119-6848-f5b0-b722-7d84e82fb691"],
                      },
                      widthValue: 0,
                      heightValue: 400,
                      widthUnit: "px",
                      heightUnit: "vh",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19eefae12ec,
          },
          "a-28": {
            id: "a-28",
            title: "HIW Integration section",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd29",
                      },
                      globalSwatchId: "--_zig---colors--black",
                      rValue: 21,
                      bValue: 26,
                      gValue: 23,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-28-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd29",
                      },
                      globalSwatchId: "--_zig---colors--gray-50",
                      rValue: 242,
                      bValue: 245,
                      gValue: 246,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd29",
                      },
                      globalSwatchId: "--_zig---colors--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-28-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "6a3901c45a239f58bcc53708|33af624f-6054-271c-0c75-f02a0265cd29",
                      },
                      globalSwatchId: "--_zig---colors--black",
                      rValue: 21,
                      bValue: 26,
                      gValue: 23,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19ef48f3513,
          },
          "a-31": {
            id: "a-31",
            title: "White Section",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        id: "697c82adb518a76f62a4fde0|697c82adb518a76f62a4fde6",
                      },
                      globalSwatchId: "--_zig---colors--gray-50",
                      rValue: 242,
                      bValue: 245,
                      gValue: 246,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        id: "697c82adb518a76f62a4fde0|697c82adb518a76f62a4fde6",
                      },
                      globalSwatchId: "--_zig---colors--black",
                      rValue: 21,
                      bValue: 26,
                      gValue: 23,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19efa760353,
          },
          "a-32": {
            id: "a-32",
            title: "Trusted Logo Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".trusted-list",
                        selectorGuids: ["d16daaef-5f6a-e9e1-e750-de32368c3c2b"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".trusted-list",
                        selectorGuids: ["d16daaef-5f6a-e9e1-e750-de32368c3c2b"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            createdOn: 0x19f7f263eab,
            useFirstGroupAsInitialState: !1,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
