import {
  require_react_dom
} from "./chunk-ES3VS2V5.js";
import {
  require_react
} from "./chunk-YWBCN2AJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-7TNKEIRG.js";

// node_modules/react-element-popper/build/browser.min.js
var require_browser_min = __commonJS({
  "node_modules/react-element-popper/build/browser.min.js"(exports, module) {
    !function(t2, e2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e2(require_react_dom(), require_react()) : "function" == typeof define && define.amd ? define(["react-dom", "react"], e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).ElementPopper = e2(t2.ReactDOM, t2.React);
    }(exports, function(t2, e2) {
      "use strict";
      function r2(t3) {
        return t3 && "object" == typeof t3 && "default" in t3 ? t3 : { default: t3 };
      }
      var n2 = r2(e2);
      function o2(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function i2(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = null != arguments[e3] ? arguments[e3] : {};
          e3 % 2 ? o2(Object(r3), true).forEach(function(e4) {
            a2(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : o2(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function a2(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function l2(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = null == t4 ? null : "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
          if (null == r3)
            return;
          var n3, o3, i3 = [], a3 = true, l3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i3.push(n3.value), !e4 || i3.length !== e4); a3 = true)
              ;
          } catch (t5) {
            l3 = true, o3 = t5;
          } finally {
            try {
              a3 || null == r3.return || r3.return();
            } finally {
              if (l3)
                throw o3;
            }
          }
          return i3;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if ("string" == typeof t4)
            return c2(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          "Object" === r3 && t4.constructor && (r3 = t4.constructor.name);
          if ("Map" === r3 || "Set" === r3)
            return Array.from(t4);
          if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return c2(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function c2(t3, e3) {
        (null == e3 || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function u2(r3, o3) {
        var a3 = r3.element, l3 = r3.popper, c3 = r3.position, u3 = void 0 === c3 ? "bottom-center" : c3, s3 = r3.containerStyle, d3 = r3.containerClassName, p3 = void 0 === d3 ? "" : d3, h2 = r3.arrow, m2 = r3.arrowStyle, v2 = void 0 === m2 ? {} : m2, b2 = r3.arrowClassName, y2 = void 0 === b2 ? "" : b2, g2 = r3.fixMainPosition, w2 = r3.fixRelativePosition, O2 = r3.offsetY, E2 = r3.offsetX, P2 = r3.animations, x2 = r3.zIndex, j2 = void 0 === x2 ? 0 : x2, M2 = r3.popperShadow, T2 = r3.onChange, S2 = r3.active, C2 = void 0 === S2 || S2, N2 = r3.portal, L2 = r3.portalTarget, R2 = "undefined" != typeof window, A2 = R2 && L2 instanceof HTMLElement, z2 = true === h2, I2 = l3 && true === C2, X = e2.useRef(), D2 = e2.useRef(), H2 = e2.useRef(), Y2 = e2.useRef(), k2 = e2.useMemo(function() {
          return { position: u3, fixMainPosition: g2, fixRelativePosition: w2, offsetY: O2, offsetX: E2, defaultArrow: z2, animations: P2, zIndex: j2, onChange: T2 };
        }, [u3, g2, w2, O2, E2, z2, P2, T2, j2]), V2 = e2.useCallback(function() {
          H2.current && (H2.current.style.transition = ""), D2.current && (D2.current.parentNode.style.transition = "");
        }, []), W2 = { element: i2({ display: "inline-block", height: "max-content" }, s3), arrow: i2({ visibility: "hidden", left: "0", top: "0", position: "absolute" }, v2), popper: { position: "absolute", left: "0", top: "0", willChange: "transform", visibility: "hidden", zIndex: j2 } };
        R2 && !Y2.current && (Y2.current = document.createElement("div"), Y2.current.data = { portal: N2, isValidPortalTarget: A2 }), e2.useEffect(function() {
          if (N2 && !A2) {
            var t3 = Y2.current;
            return document.body.appendChild(t3), function() {
              return document.body.removeChild(t3);
            };
          }
        }, [N2, A2]), e2.useEffect(function() {
          if (!I2)
            return V2(), D2.current.parentNode.style.visibility = "hidden", void (H2.current && (H2.current.style.visibility = "hidden"));
          function t3(t4) {
            t4 && "resize" !== t4.type && !t4.target.contains(X.current) || (t4 && V2(), f2(X, D2, H2, k2, t4));
          }
          return t3(), document.addEventListener("scroll", t3, true), window.addEventListener("resize", t3), function() {
            document.removeEventListener("scroll", t3, true), window.removeEventListener("resize", t3);
          };
        }, [I2, k2, V2]), e2.useEffect(function() {
          var t3 = { portal: N2, isValidPortalTarget: A2 }, e3 = Y2.current.data;
          JSON.stringify(t3) !== JSON.stringify(e3) && (Y2.current.data = t3, X.current.refreshPosition());
        }, [N2, A2]);
        var q = n2.default.createElement(n2.default.Fragment, null, function() {
          if (!h2 || !I2)
            return null;
          var t3 = n2.default.createElement("div", { ref: H2, style: W2.arrow }), r4 = e2.isValidElement(h2) ? { children: h2 } : { className: "ep-arrow ".concat(M2 ? "ep-shadow" : "", " ").concat(y2) };
          return e2.cloneElement(t3, r4);
        }(), n2.default.createElement("div", { className: M2 ? "ep-popper-shadow" : "", style: W2.popper }, n2.default.createElement("div", { ref: D2 }, l3)));
        return n2.default.createElement("div", { ref: function(t3) {
          t3 && (t3.removeTransition = V2, t3.refreshPosition = function() {
            return setTimeout(function() {
              return f2(X, D2, H2, k2, {});
            }, 10);
          });
          if (X.current = t3, o3 instanceof Function)
            return o3(t3);
          o3 && (o3.current = t3);
        }, className: p3, style: W2.element }, a3, N2 && R2 ? t2.createPortal(q, A2 ? L2 : Y2.current) : q);
      }
      function f2(t3, e3, r3, n3, o3) {
        var a3 = n3.position, c3 = n3.fixMainPosition, u3 = n3.fixRelativePosition, f3 = n3.offsetY, h2 = void 0 === f3 ? 0 : f3, m2 = n3.offsetX, v2 = void 0 === m2 ? 0 : m2, b2 = n3.defaultArrow, y2 = n3.animations, g2 = void 0 === y2 ? [] : y2, w2 = n3.zIndex, O2 = n3.onChange;
        if (t3.current && e3.current) {
          var E2, P2, x2, j2, M2 = (P2 = void 0 !== window.pageXOffset, x2 = "CSS1Compat" === (document.compatMode || ""), { scrollLeft: P2 ? window.pageXOffset : x2 ? document.documentElement.scrollLeft : document.body.scrollLeft, scrollTop: P2 ? window.pageYOffset : x2 ? document.documentElement.scrollTop : document.body.scrollTop }), T2 = M2.scrollLeft, S2 = M2.scrollTop, C2 = s2(t3.current, T2, S2), N2 = C2.top, L2 = C2.left, R2 = C2.height, A2 = C2.width, z2 = C2.right, I2 = C2.bottom, X = s2(e3.current, T2, S2), D2 = X.top, H2 = X.left, Y2 = X.height, k2 = X.width, V2 = document.documentElement, W2 = V2.clientHeight, q = V2.clientWidth, F2 = e3.current.parentNode, J2 = function(t4) {
            if (!t4)
              return [0, 0];
            var e4 = l2((t4.style.transform.match(/translate\((.*?)px,\s(.*?)px\)/) || []).map(function(t5) {
              return Number(t5);
            }), 3), r4 = e4[1], n4 = void 0 === r4 ? 0 : r4, o4 = e4[2];
            return [n4, void 0 === o4 ? 0 : o4];
          }(F2), B = l2(J2, 2), U2 = B[0], $2 = B[1], G = function(t4) {
            var e4 = l2(t4.split("-"), 2), r4 = e4[0], n4 = void 0 === r4 ? "bottom" : r4, o4 = e4[1], i3 = void 0 === o4 ? "center" : o4;
            "auto" === n4 && (n4 = "bottom");
            "auto" === i3 && (i3 = "center");
            var a4 = "top" === n4 || "bottom" === n4, c4 = "left" === n4 || "right" === n4;
            c4 && ("start" === i3 && (i3 = "top"), "end" === i3 && (i3 = "bottom"));
            a4 && ("start" === i3 && (i3 = "left"), "end" === i3 && (i3 = "right"));
            return [n4, i3, a4, c4];
          }(a3), K = l2(G, 4), Q = K[0], Z = K[1], _2 = K[2], tt = K[3], et = Q, rt = function(t4, e4) {
            return "translate(".concat(t4, "px, ").concat(e4, "px)");
          }, nt = A2 - k2, ot = R2 - Y2, it = "left" === Z ? 0 : "right" === Z ? nt : nt / 2, at = nt - it, lt = "top" === Z ? 0 : "bottom" === Z ? ot : ot / 2, ct = ot - lt, ut = L2 - H2 + U2, ft = N2 - D2 + $2, st = 0, dt = 0, pt = d2(t3.current), ht = [], mt = r3.current, vt = s2(mt, T2, S2) || {}, bt = vt.height, yt = void 0 === bt ? 0 : bt, gt = vt.width, wt = void 0 === gt ? 0 : gt, Ot = ut, Et = ft, Pt = { top: "bottom", bottom: "top", left: "right", right: "left" };
          for (_2 && (ut += it, ft += "top" === Q ? -Y2 : R2, b2 && (yt = 11, wt = 20)), tt && (ut += "left" === Q ? -k2 : A2, ft += lt, b2 && (yt = 20, wt = 11)); pt; )
            ht.push(pt), jt(s2(pt, T2, S2)), pt = d2(pt.parentNode);
          if (jt({ top: S2, bottom: S2 + W2, left: T2, right: T2 + q, height: W2, width: q }), _2 && (ft += "bottom" === et ? h2 : -h2), tt && (ut += "right" === et ? v2 : -v2), ut -= st, ft -= dt, E2 = Pt[et], mt)
            _2 && ((j2 = A2 < k2) ? Ot += A2 / 2 : Ot = ut + k2 / 2, Ot -= wt / 2, "bottom" === et && (Et = ft, ft += yt), "top" === et && (Et = (ft -= yt) + Y2), st < 0 && st - it < 0 && (j2 ? Ot += (it - st) / 2 : A2 - it + st < k2 && (Ot += (A2 - it + st - k2) / 2)), st > 0 && st + at > 0 && (j2 ? Ot -= (st + at) / 2 : A2 - st - at < k2 && (Ot -= (A2 - st - at - k2) / 2))), tt && ((j2 = R2 < Y2) ? Et += R2 / 2 : Et = ft + Y2 / 2, Et -= yt / 2, "left" === et && (Ot = (ut -= wt) + k2), "right" === et && (Ot = ut, ut += wt), dt < 0 && dt - lt < 0 && (j2 ? Et += (lt - dt) / 2 : R2 - lt + dt < Y2 && (Et += (R2 - lt + dt - Y2) / 2)), dt > 0 && dt + ct > 0 && (j2 ? Et -= (dt + ct) / 2 : R2 - dt - ct < Y2 && (Et -= (R2 - dt - ct - Y2) / 2))), mt.setAttribute("direction", E2), mt.style.height = yt + "px", mt.style.width = wt + "px", mt.style.transform = rt(Ot, Et), mt.style.visibility = "visible", mt.style.zIndex = w2 + 1;
          F2.style.transform = rt(ut, ft);
          var xt = { popper: { top: ft, bottom: ft + Y2, left: ut, right: ut + k2, height: Y2, width: k2 }, element: { top: N2, bottom: I2, left: L2, right: z2, height: R2, width: A2 }, arrow: { top: Et, bottom: Et + yt, left: Ot, right: Ot + wt, height: yt, width: wt, direction: E2 }, position: et + "-" + (0 !== st ? "auto" : Z), scroll: { scrollLeft: T2, scrollTop: S2 }, scrollableParents: ht, event: o3 };
          o3 || g2.forEach(function(t4) {
            t4({ popper: F2, arrow: mt, data: i2(i2({}, xt), {}, { getTransform: rt, mirror: Pt }) });
          }), F2.style.visibility = "visible", "function" == typeof O2 && O2(xt);
        }
        function jt(t4) {
          var e4 = t4.top, r4 = t4.bottom, n4 = t4.left, o4 = t4.right, i3 = t4.height, a4 = t4.width;
          if (_2) {
            var l3 = Math.round(N2 - e4 + R2 / 2), f4 = Math.round(i3 / 2);
            c3 || (N2 - (Y2 + h2 + yt) < e4 && l3 <= f4 && "top" === et ? (ft += Y2 + R2, et = "bottom") : I2 + Y2 + h2 + yt > i3 + e4 && l3 >= f4 && "bottom" === et && (ft -= Y2 + R2, et = "top")), u3 || (L2 + it < n4 && (st = p2(z2 - wt > n4 ? L2 + it - n4 : -A2 + it + wt, st)), z2 - at > o4 && (st = p2(L2 + wt < o4 ? z2 - at - o4 : A2 - at - wt, st)));
          }
          if (tt) {
            var s3 = Math.round(L2 - n4 + A2 / 2), d3 = Math.round(a4 / 2);
            c3 || (L2 - (k2 + v2 + wt) < n4 && s3 < d3 && "left" === et ? (ut += A2 + k2, et = "right") : z2 + k2 + v2 + wt > o4 && s3 > d3 && "right" === et && (ut -= A2 + k2, et = "left")), u3 || (N2 + lt < e4 && (dt = p2(I2 - yt > e4 ? N2 + lt - e4 : -R2 + lt + yt, dt)), I2 - ct > r4 && (dt = p2(N2 + yt < r4 ? I2 - ct - r4 : R2 - ct - yt, dt)));
          }
        }
      }
      function s2(t3, e3, r3) {
        if (t3) {
          var n3 = t3.getBoundingClientRect(), o3 = n3.top, i3 = n3.left, a3 = n3.width, l3 = n3.height, c3 = o3 + r3, u3 = i3 + e3;
          return { top: c3, bottom: c3 + l3, left: u3, right: u3 + a3, width: a3, height: l3 };
        }
      }
      function d2(t3) {
        if (t3 && "HTML" !== t3.tagName) {
          var e3 = window.getComputedStyle(t3), r3 = function(t4) {
            return ["auto", "scroll"].includes(t4);
          };
          return t3.clientHeight < t3.scrollHeight && r3(e3.overflowX) || t3.clientWidth < t3.scrollWidth && r3(e3.overflowY) ? t3 : d2(t3.parentNode);
        }
      }
      function p2(t3, e3) {
        return Math.round(Math.abs(t3)) > Math.round(Math.abs(e3)) ? t3 : e3;
      }
      return e2.forwardRef(u2);
    });
  }
});

// node_modules/react-date-object/dist/index.module.js
var index_module_exports = {};
__export(index_module_exports, {
  default: () => $
});
function t(e2) {
  return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
    return typeof t2;
  } : function(t2) {
    return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
  }, t(e2);
}
function e(t2) {
  return function(t3) {
    if (Array.isArray(t3))
      return c(t3);
  }(t2) || n(t2) || h(t2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function n(t2) {
  if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"])
    return Array.from(t2);
}
function r(t2, e2) {
  var n2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
  if (!n2) {
    if (Array.isArray(t2) || (n2 = h(t2)) || e2 && t2 && "number" == typeof t2.length) {
      n2 && (t2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= t2.length ? { done: true } : { done: false, value: t2[r2++] };
      }, e: function(t3) {
        throw t3;
      }, f: i2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var a2, s2 = true, u2 = false;
  return { s: function() {
    n2 = n2.call(t2);
  }, n: function() {
    var t3 = n2.next();
    return s2 = t3.done, t3;
  }, e: function(t3) {
    u2 = true, a2 = t3;
  }, f: function() {
    try {
      s2 || null == n2.return || n2.return();
    } finally {
      if (u2)
        throw a2;
    }
  } };
}
function i(t2, e2) {
  var n2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(t2);
    e2 && (r2 = r2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function a(t2) {
  for (var e2 = 1; e2 < arguments.length; e2++) {
    var n2 = null != arguments[e2] ? arguments[e2] : {};
    e2 % 2 ? i(Object(n2), true).forEach(function(e3) {
      s(t2, e3, n2[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : i(Object(n2)).forEach(function(e3) {
      Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
    });
  }
  return t2;
}
function s(t2, e2, n2) {
  return (e2 = y(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
}
function u(t2, e2) {
  return l(t2) || function(t3, e3) {
    var n2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
    if (null != n2) {
      var r2, i2, a2, s2, u2 = [], o2 = true, h2 = false;
      try {
        if (a2 = (n2 = n2.call(t3)).next, 0 === e3) {
          if (Object(n2) !== n2)
            return;
          o2 = false;
        } else
          for (; !(o2 = (r2 = a2.call(n2)).done) && (u2.push(r2.value), u2.length !== e3); o2 = true)
            ;
      } catch (t4) {
        h2 = true, i2 = t4;
      } finally {
        try {
          if (!o2 && null != n2.return && (s2 = n2.return(), Object(s2) !== s2))
            return;
        } finally {
          if (h2)
            throw i2;
        }
      }
      return u2;
    }
  }(t2, e2) || h(t2, e2) || o();
}
function o() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function h(t2, e2) {
  if (t2) {
    if ("string" == typeof t2)
      return c(t2, e2);
    var n2 = Object.prototype.toString.call(t2).slice(8, -1);
    return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? c(t2, e2) : void 0;
  }
}
function c(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
    r2[n2] = t2[n2];
  return r2;
}
function l(t2) {
  if (Array.isArray(t2))
    return t2;
}
function f(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, y(r2.key), r2);
  }
}
function y(e2) {
  var n2 = function(e3, n3) {
    if ("object" !== t(e3) || null === e3)
      return e3;
    var r2 = e3[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var i2 = r2.call(e3, n3 || "default");
      if ("object" !== t(i2))
        return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === n3 ? String : Number)(e3);
  }(e2, "string");
  return "symbol" === t(n2) ? n2 : String(n2);
}
function d(t2, e2, n2) {
  !function(t3, e3) {
    if (e3.has(t3))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  }(t2, e2), e2.set(t2, n2);
}
function m(t2, e2) {
  return function(t3, e3) {
    if (e3.get)
      return e3.get.call(t3);
    return e3.value;
  }(t2, g(t2, e2, "get"));
}
function v(t2, e2, n2) {
  return function(t3, e3, n3) {
    if (e3.set)
      e3.set.call(t3, n3);
    else {
      if (!e3.writable)
        throw new TypeError("attempted to set read only private field");
      e3.value = n3;
    }
  }(t2, g(t2, e2, "set"), n2), n2;
}
function g(t2, e2, n2) {
  if (!e2.has(t2))
    throw new TypeError("attempted to " + n2 + " private field on non-instance");
  return e2.get(t2);
}
function p(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
function k(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
function D(t2) {
  return t2 && t2.constructor === Object;
}
function M(t2) {
  if (!isNaN(t2))
    return parseInt(t2);
}
function O(t2) {
  return Array.isArray(t2);
}
function S(t2, e2, n2) {
  return void 0 === t2 || t2 < e2 || t2 > n2;
}
var b, w, Y, L, W, j, x, N, A, I, P, T, F, E, H, V, J, _, C, U, R, z, $;
var init_index_module = __esm({
  "node_modules/react-date-object/dist/index.module.js"() {
    b = { name: "gregorian_en", months: [["January", "Jan"], ["February", "Feb"], ["March", "Mar"], ["April", "Apr"], ["May", "May"], ["June", "Jun"], ["July", "Jul"], ["August", "Aug"], ["September", "Sep"], ["October", "Oct"], ["November", "Nov"], ["December", "Dec"]], weekDays: [["Saturday", "Sat"], ["Sunday", "Sun"], ["Monday", "Mon"], ["Tuesday", "Tue"], ["Wednesday", "Wed"], ["Thursday", "Thu"], ["Friday", "Fri"]], digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], meridiems: [["AM", "am"], ["PM", "pm"]] };
    w = { name: "gregorian", startYear: 1, yearLength: 365, epoch: 1721424, century: 20, weekStartDayIndex: 1, getMonthLengths: function(t2) {
      return [31, t2 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }, isLeap: function(t2) {
      return t2 % 4 == 0 && t2 % 100 != 0 || t2 % 400 == 0;
    }, getLeaps: function(t2) {
      if (0 !== t2) {
        for (var e2 = t2 > 0 ? 1 : -1, n2 = []; t2 > 0 ? e2 <= t2 : t2 <= e2; )
          this.isLeap(e2) && n2.push(e2), t2 > 0 ? e2++ : e2--;
        return n2;
      }
    }, getDayOfYear: function(t2) {
      for (var e2 = t2.year, n2 = t2.month, r2 = t2.day, i2 = this.getMonthLengths(this.isLeap(e2)), a2 = 0; a2 < n2.index; a2++)
        r2 += i2[a2];
      return r2;
    }, getAllDays: function(t2) {
      var e2 = t2.year;
      return this.yearLength * (e2 - 1) + this.leapsLength(e2) + this.getDayOfYear(t2);
    }, leapsLength: function(t2) {
      return ((t2 - 1) / 4 | 0) + (-(t2 - 1) / 100 | 0) + ((t2 - 1) / 400 | 0);
    }, guessYear: function(t2, e2) {
      return ~~(t2 / 365.24) + (e2 > 0 ? 1 : -1);
    } };
    Y = /* @__PURE__ */ new WeakMap();
    L = /* @__PURE__ */ new WeakMap();
    W = /* @__PURE__ */ new WeakMap();
    j = /* @__PURE__ */ new WeakMap();
    x = /* @__PURE__ */ new WeakMap();
    N = /* @__PURE__ */ new WeakMap();
    A = /* @__PURE__ */ new WeakMap();
    I = /* @__PURE__ */ new WeakMap();
    P = /* @__PURE__ */ new WeakMap();
    T = /* @__PURE__ */ new WeakMap();
    F = /* @__PURE__ */ new WeakMap();
    E = /* @__PURE__ */ new WeakMap();
    H = /* @__PURE__ */ new WeakMap();
    V = /* @__PURE__ */ new WeakMap();
    J = /* @__PURE__ */ new WeakMap();
    _ = /* @__PURE__ */ new WeakMap();
    C = /* @__PURE__ */ new WeakMap();
    U = /* @__PURE__ */ new WeakMap();
    R = /* @__PURE__ */ new WeakMap();
    z = function() {
      function i2(t2) {
        var e2 = this;
        !function(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }(this, i2), d(this, Y, { writable: true, value: void 0 }), d(this, L, { writable: true, value: void 0 }), d(this, W, { writable: true, value: void 0 }), d(this, j, { writable: true, value: void 0 }), d(this, x, { writable: true, value: void 0 }), d(this, N, { writable: true, value: void 0 }), d(this, A, { writable: true, value: void 0 }), d(this, I, { writable: true, value: void 0 }), d(this, P, { writable: true, value: b }), d(this, T, { writable: true, value: w }), d(this, F, { writable: true, value: false }), d(this, E, { writable: true, value: {} }), d(this, H, { writable: true, value: /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/ }), d(this, V, { writable: true, value: [] }), d(this, J, { writable: true, value: true }), d(this, _, { writable: true, value: function(t3, n3) {
          switch (t3) {
            case "YYYY":
              return ["year", n3];
            case "YY":
              return ["year", "".concat(m(e2, T).century).concat(n3)];
            case "MMMM":
            case "MMM":
              return ["month", e2.months.findIndex(function(t4) {
                var e3 = t4.name, r4 = t4.shortName;
                return new RegExp(n3, "i").test(e3 + r4);
              }) + 1];
            case "MM":
            case "M":
              return ["month", n3];
            case "DD":
            case "D":
              return ["day", n3];
            case "HH":
            case "H":
              return ["hour", n3];
            case "hh":
            case "h":
              var r3 = M(n3);
              return ["hour", r3 > 12 ? r3 - 12 : r3];
            case "mm":
            case "m":
              return ["minute", n3];
            case "ss":
            case "s":
              return ["second", n3];
            case "SSS":
            case "SS":
            case "S":
              return ["millisecond", n3];
            default:
              return [];
          }
        } }), d(this, C, { writable: true, value: function() {
          return 0 === m(e2, Y) && 0 !== m(e2, T).startYear;
        } }), d(this, U, { writable: true, value: function() {
          if (m(e2, J) && e2.isValid) {
            var t3 = Math.floor, n3 = function(e3, n4) {
              return [(a3 = e3, (a3 < 0 ? -1 : 1) * Math.abs(t3(e3 / n4))), (r4 = e3, i4 = n4, (r4 < 0 && -0 !== t3(r4 % i4) ? i4 : 0) + t3(e3 % n4))];
              var r4, i4, a3;
            }, r3 = function() {
              if (m(e2, L) < 0 || m(e2, L) > 11) {
                var t4 = m(e2, L) < 0 ? -1 : 1, r4 = u(n3(m(e2, L), 12), 2), i4 = r4[0], a3 = r4[1];
                v(e2, Y, m(e2, Y) + i4), v(e2, L, a3), m(e2, C).call(e2) && v(e2, Y, t4);
              }
            };
            for (v(e2, J, false), [["millisecond", "second", 1e3], ["second", "minute", 60], ["minute", "hour", 60], ["hour", "day", 24]].forEach(function(t4) {
              var r4 = u(t4, 3), i4 = r4[0], a3 = r4[1], s5 = r4[2];
              if (function(t5, e3) {
                return t5 >= e3 || t5 < 0;
              }(e2[i4], s5)) {
                var o3 = u(n3(e2[i4], s5), 2), h2 = o3[0], c3 = o3[1];
                e2[a3] += h2, e2[i4] = c3;
              }
            }), v(e2, J, true), r3(); m(e2, W) < -m(e2, T).yearLength || m(e2, W) > m(e2, T).yearLength; ) {
              if (m(e2, L) > 0) {
                for (var i3 = m(e2, T).getMonthLengths(e2.isLeap), a2 = 0; a2 < m(e2, L); a2++)
                  v(e2, W, m(e2, W) + i3[a2]);
                v(e2, L, 0);
              }
              var s4 = e2.isLeap ? e2.calendar.yearLength + 1 : e2.calendar.yearLength;
              v(e2, W, m(e2, W) + s4 * (m(e2, W) < 0 ? 1 : -1)), v(e2, Y, m(e2, Y) + (m(e2, W) < 0 ? -1 : 1));
            }
            for (; ; ) {
              var o2;
              for (r3(); m(e2, W) < 1; )
                v(e2, L, m(e2, L) - 1), r3(), v(e2, W, e2.month.length + m(e2, W));
              if (m(e2, W) <= e2.month.length || isNaN(m(e2, W)))
                break;
              v(e2, W, m(e2, W) - e2.month.length), v(e2, L, (o2 = m(e2, L), o2++, o2));
            }
            m(e2, j) || v(e2, j, 0), m(e2, x) || v(e2, x, 0), m(e2, N) || v(e2, N, 0), m(e2, A) || v(e2, A, 0);
          }
        } }), d(this, R, { writable: true, value: function() {
          return (m(e2, E).weekDays || m(e2, P).weekDays).map(function(t3, n3) {
            var r3 = u(t3, 2), i3 = r3[0], a2 = r3[1], s4 = n3 - e2.weekStartDayIndex;
            return s4 < 0 && (s4 += 7), { name: i3, shortName: a2, index: s4, number: s4 + 1, toString: function() {
              return this.number.toString();
            }, valueOf: function() {
              return this.number;
            } };
          });
        } });
        var n2 = D(t2) ? a({}, t2) : t2, r2 = true;
        if (n2 && "boolean" != typeof n2 || (n2 = { date: /* @__PURE__ */ new Date() }), D(n2) || (n2 = { date: n2 }), 0 !== Object.keys(n2).length) {
          for (var s3 in D(n2.calendar) && v(this, T, n2.calendar), D(n2.locale) && v(this, P, n2.locale), isNaN(n2.year) && isNaN(n2.month) && isNaN(n2.day) && !n2.date && (n2.date = /* @__PURE__ */ new Date()), n2.date && ("string" == typeof n2.date && n2.format && v(this, I, n2.format), this.setDate(n2.date), n2.calendar && this.convert(n2.calendar), r2 = false), delete n2.calendar, delete n2.locale, delete n2.date, n2)
            this.set(s3, n2[s3]);
          m(this, C).call(this) && v(this, Y, -1), r2 && m(this, U).call(this);
        }
      }
      var s2, c2, y2;
      return s2 = i2, c2 = [{ key: "parse", value: function(t2) {
        if (!t2)
          return this;
        var i3, a2, s3 = m(this, I), c3 = m(this, P).digits, f2 = r(c3);
        try {
          for (f2.s(); !(i3 = f2.n()).done; ) {
            var y3 = i3.value;
            t2 = t2.replace(new RegExp(y3, "g"), c3.indexOf(y3));
          }
        } catch (t3) {
          f2.e(t3);
        } finally {
          f2.f();
        }
        if (s3)
          for (var d2 = s3.split(/[^\w\u0600-\u06FF]/), g2 = t2.split(/[^\w\u0600-\u06FF]/), p2 = 0; p2 < d2.length; p2++)
            this.set.apply(this, e(m(this, _).call(this, d2[p2], g2[p2])));
        else {
          var k2 = t2.match(/(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/), b2 = (l(a2 = k2) || n(a2) || h(a2) || o()).slice(1), w2 = b2[1];
          w2 && (w2 = /\d+/.test(w2) ? M(w2) - 1 : this.months.findIndex(function(t3) {
            return new RegExp(w2, "i").test(t3.name);
          })), b2[1] = w2;
          var D2 = u(b2.map(M), 7), O2 = D2[0], S2 = D2[1], T2 = D2[2], F2 = D2[3], E2 = D2[4], H2 = D2[5], V2 = D2[6];
          v(this, Y, O2), v(this, L, S2), v(this, W, T2), v(this, j, F2), v(this, x, E2), v(this, N, H2), v(this, A, V2);
        }
        var J2 = u(m(this, P).meridiems[1], 2), C2 = J2[0], R2 = J2[1];
        return m(this, j) < 12 && (t2.includes(C2) || t2.includes(R2)) && v(this, j, m(this, j) + 12), m(this, U).call(this), this;
      } }, { key: "convert", value: function() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w, e2 = arguments.length > 1 ? arguments[1] : void 0;
        if (D(e2) && v(this, P, e2), !D(t2) || t2.name === m(this, T).name)
          return this;
        var n2 = this.toJulianDay() - t2.epoch, r2 = new i2({ calendar: t2, year: t2.guessYear(n2, m(this, Y)), month: 1, day: 1 });
        return r2.day += n2 - r2.toDays(), v(this, Y, r2.year), v(this, L, r2.month.index), v(this, W, r2.day), v(this, T, t2), this;
      } }, { key: "format", value: function(e2, n2) {
        if (!this.isValid || e2 && "string" != typeof e2)
          return "";
        e2 || (e2 = m(this, I) || "YYYY/MM/DD"), O(n2) || (n2 = []), n2 = (n2 = n2.concat(m(this, V))).filter(function(e3) {
          return "string" == typeof e3 || (console.warn("type of all items in the ignore list must be string, found", t(e3)), false);
        }).map(function(t2) {
          return t2.replace(/[*/+\-()[\]{}\s$^]/g, function(t3) {
            return "\\" + t3;
          });
        });
        var i3, a2 = new RegExp("".concat(n2.join("|")).concat(n2.length > 0 ? "|" : "", "YYYY|YY|MMMM|MMM|MM|M|WW|W|DDDD|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|."), "g"), s3 = "", u2 = r(e2.match(a2) || []);
        try {
          for (u2.s(); !(i3 = u2.n()).done; ) {
            var o2 = i3.value, h2 = this.getValue(o2);
            s3 += n2.includes(o2) ? o2 : 0 === h2 ? h2 : h2 || o2;
          }
        } catch (t2) {
          u2.e(t2);
        } finally {
          u2.f();
        }
        var c3 = this.digits;
        return s3.replace(/[0-9]/g, function(t2) {
          return c3[t2];
        });
      } }, { key: "getProperty", value: function(t2) {
        return this.getValue(t2);
      } }, { key: "getValue", value: function(t2) {
        var e2 = function(t3) {
          return t3 < 10 ? "0" + t3 : t3;
        };
        switch (t2) {
          case "YYYY":
            return this.year;
          case "YY":
            return this.year.toString().substring(2, 4);
          case "MMMM":
            return this.month.name;
          case "MMM":
            return this.month.shortName;
          case "MM":
            return e2(this.month.number);
          case "M":
            return this.month.number;
          case "WW":
            return e2(this.weekOfYear);
          case "W":
            return this.weekOfYear;
          case "DDDD":
          case "DDD":
            return this.dayOfYear;
          case "DD":
            return e2(this.day);
          case "D":
            return this.day;
          case "HH":
            return e2(this.hour);
          case "H":
            return this.hour;
          case "dddd":
            return this.weekDay.name;
          case "ddd":
            return this.weekDay.shortName;
          case "dd":
            return e2(this.weekDay.number);
          case "d":
            return this.weekDay.number;
          case "hh":
            return e2(this.hour > 12 ? this.hour - 12 : this.hour || 12);
          case "h":
            return this.hour > 12 ? this.hour - 12 : this.hour || 12;
          case "mm":
            return e2(this.minute);
          case "m":
            return this.minute;
          case "ss":
            return e2(this.second);
          case "s":
            return this.second;
          case "SSS":
            return m(this, A) < 10 ? "00".concat(m(this, A)) : m(this, A) < 100 ? "0".concat(m(this, A)) : m(this, A);
          case "SS":
            return m(this, A) < 10 ? "00" : m(this, A) < 100 ? ("0" + m(this, A)).substring(2, 0) : m(this, A).toString().substring(0, 2);
          case "S":
            return m(this, A) < 10 || m(this, A) < 100 ? "0" : m(this, A).toString().substring(0, 1);
          case "a":
            return this.hour >= 12 ? m(this, P).meridiems[1][1] : m(this, P).meridiems[0][1];
          case "A":
            return this.hour >= 12 ? m(this, P).meridiems[1][0] : m(this, P).meridiems[0][0];
          default:
            return "";
        }
      } }, { key: "setYear", value: function(t2) {
        return this.year = t2, this;
      } }, { key: "setMonths", value: function(t2) {
        return this.months = t2, this;
      } }, { key: "setMonth", value: function(t2) {
        return this.month = t2, this;
      } }, { key: "setWeekDays", value: function(t2) {
        return this.weekDays = t2, this;
      } }, { key: "setDigits", value: function(t2) {
        return this.digits = t2, this;
      } }, { key: "setDay", value: function(t2) {
        return this.day = t2, this;
      } }, { key: "setHour", value: function(t2) {
        return this.hour = t2, this;
      } }, { key: "setMinute", value: function(t2) {
        return this.minute = t2, this;
      } }, { key: "setSecond", value: function(t2) {
        return this.second = t2, this;
      } }, { key: "setMillisecond", value: function(t2) {
        return this.millisecond = t2, this;
      } }, { key: "setFormat", value: function(t2) {
        return v(this, I, t2), this;
      } }, { key: "setLocale", value: function(t2) {
        return this.locale = t2, this;
      } }, { key: "setCalendar", value: function(t2) {
        return this.calendar = t2, this;
      } }, { key: "setDate", value: function(t2) {
        if ("string" == typeof t2) {
          if (!m(this, H).test(t2))
            return this.parse(t2);
          t2 = new Date(t2);
        }
        return "number" == typeof t2 && (t2 = new Date(t2)), t2 instanceof Date && (v(this, T, w), v(this, Y, t2.getFullYear()), v(this, L, t2.getMonth()), v(this, W, t2.getDate()), v(this, j, t2.getHours()), v(this, x, t2.getMinutes()), v(this, N, t2.getSeconds()), v(this, A, t2.getMilliseconds()), v(this, F, false)), t2 instanceof i2 && (v(this, Y, t2.year), v(this, L, t2.month.index), v(this, W, t2.day), v(this, j, t2.hour), v(this, x, t2.minute), v(this, N, t2.second), v(this, A, t2.millisecond), v(this, P, t2.locale), v(this, I, t2._format), v(this, T, t2.calendar), v(this, F, t2.isUTC), v(this, V, t2.ignoreList), v(this, E, t2.custom)), this;
      } }, { key: "setIgnoreList", value: function(t2) {
        return this.ignoreList = t2, this;
      } }, { key: "set", value: function(t2, e2) {
        if (null == t2)
          return this;
        if (D(t2)) {
          var n2 = a({}, t2);
          for (var r2 in n2.date && (this.setDate(n2.date), delete n2.date), n2.calendar && (this.convert(n2.calendar), delete n2.calendar), n2.locale && (this.setLocale(n2.locale), delete n2.locale), v(this, J, false), n2)
            this.set(r2, n2[r2]);
          return v(this, J, true), m(this, U).call(this), this;
        }
        "format" === t2 && (t2 = "_format");
        try {
          this[t2] = e2;
        } catch (t3) {
        }
        return this;
      } }, { key: "add", value: function(t2, e2) {
        if (!(t2 = M(t2)) || !e2)
          return this;
        switch (e2) {
          case "years":
          case "y":
            e2 = "year";
            break;
          case "months":
          case "M":
            e2 = "month";
            break;
          case "days":
          case "d":
            e2 = "day";
            break;
          case "hours":
          case "h":
            e2 = "hour";
            break;
          case "minutes":
          case "m":
            e2 = "minute";
            break;
          case "seconds":
          case "s":
            e2 = "second";
            break;
          case "milliseconds":
          case "ms":
            e2 = "millisecond";
        }
        return this[e2] += t2, this;
      } }, { key: "subtract", value: function(t2, e2) {
        return this.add(-t2, e2);
      } }, { key: "toFirstOfYear", value: function() {
        return this.month = 1, this.day = 1, this;
      } }, { key: "toLastOfYear", value: function() {
        return this.day >= 29 && (this.day = 29), this.month = 12, this.toLastOfMonth(), this;
      } }, { key: "toFirstOfMonth", value: function() {
        return v(this, W, 1), this;
      } }, { key: "toLastOfMonth", value: function() {
        return v(this, W, 0), v(this, L, m(this, L) + 1), m(this, U).call(this), this;
      } }, { key: "toFirstOfWeek", value: function() {
        return this.day -= this.weekDay.index, this;
      } }, { key: "toLastOfWeek", value: function() {
        return this.day += 6 - this.weekDay.index, this;
      } }, { key: "toFirstWeekOfYear", value: function() {
        return this.toFirstOfYear(), 0 === this.weekDay.index ? this : this.toLastOfWeek().setDay(this.day + 1);
      } }, { key: "toLastWeekOfYear", value: function() {
        return this.toLastOfYear().toFirstOfWeek();
      } }, { key: "toString", value: function() {
        return this.format();
      } }, { key: "toDate", value: function() {
        var t2 = new i2(this);
        return "gregorian" !== m(this, T).name && t2.convert(w), new Date(t2.year, t2.month.index, t2.day, t2.hour, t2.minute, t2.second, t2.millisecond);
      } }, { key: "toUTC", value: function() {
        return m(this, F) || (this.minute += this.toDate().getTimezoneOffset(), v(this, F, true)), this;
      } }, { key: "toUnix", value: function() {
        return this.unix;
      } }, { key: "toJulianDay", value: function() {
        return this.toDays() + m(this, T).epoch;
      } }, { key: "toObject", value: function() {
        return { year: m(this, Y), month: this.month, day: m(this, W), weekDay: this.weekDay, hour: m(this, j), minute: m(this, x), second: m(this, N), millisecond: m(this, A), weekOfYear: this.weekOfYear, dayOfYear: this.dayOfYear, daysLeft: this.daysLeft, calendar: m(this, T), locale: m(this, P), format: m(this, I) || "YYYY/MM/DD", ignoreList: m(this, V) };
      } }, { key: "toJSON", value: function() {
        return this.valueOf();
      } }, { key: "valueOf", value: function() {
        return this.toDate().valueOf();
      } }, { key: "toDays", value: function() {
        if (this.isValid)
          return m(this, T).getAllDays(this);
      } }, { key: "dayOfBeginning", get: function() {
        return this.toDays();
      } }, { key: "dayOfYear", get: function() {
        if (this.isValid)
          return m(this, T).getDayOfYear(this);
      } }, { key: "weekOfYear", get: function() {
        if (this.isValid)
          return 1 + ~~(this.dayOfYear / 7);
      } }, { key: "daysLeft", get: function() {
        if (this.isValid) {
          var t2 = m(this, T).yearLength;
          return (this.isLeap ? t2 + 1 : t2) - this.dayOfYear;
        }
      } }, { key: "year", get: function() {
        return m(this, Y);
      }, set: function(t2) {
        v(this, Y, M(t2)), m(this, U).call(this);
      } }, { key: "month", get: function() {
        return this.months[m(this, L)] || {};
      }, set: function(t2) {
        var e2;
        t2 = null !== (e2 = M(t2.valueOf()) - 1) && void 0 !== e2 ? e2 : void 0, v(this, L, t2), S(t2, 0, 11) && m(this, U).call(this);
      } }, { key: "monthIndex", get: function() {
        return m(this, L);
      } }, { key: "day", get: function() {
        return m(this, W);
      }, set: function(t2) {
        t2 = M(t2), v(this, W, t2), S(t2, 1, 28) && m(this, U).call(this);
      } }, { key: "weekDay", get: function() {
        if (!this.isValid)
          return {};
        var t2 = (this.toJulianDay() + 3) % 7;
        return m(this, R).call(this)[t2];
      } }, { key: "hour", get: function() {
        return m(this, j);
      }, set: function(t2) {
        t2 = M(t2), v(this, j, t2), S(t2, 0, 23) && m(this, U).call(this);
      } }, { key: "minute", get: function() {
        return m(this, x);
      }, set: function(t2) {
        t2 = M(t2), v(this, x, t2), S(t2, 0, 59) && m(this, U).call(this);
      } }, { key: "second", get: function() {
        return m(this, N);
      }, set: function(t2) {
        t2 = M(t2), v(this, N, t2), S(t2, 0, 59) && m(this, U).call(this);
      } }, { key: "millisecond", get: function() {
        return m(this, A);
      }, set: function(t2) {
        t2 = M(t2), v(this, A, t2), S(t2, 0, 999) && m(this, U).call(this);
      } }, { key: "months", get: function() {
        var t2 = m(this, T).getMonthLengths(this.isLeap), e2 = (m(this, E).months || m(this, P).months).map(function(e3, n2) {
          var r2 = u(e3, 2);
          return { name: r2[0], shortName: r2[1], length: t2[n2], index: n2, number: n2 + 1, toString: function() {
            return this.number.toString();
          }, valueOf: function() {
            return this.number;
          } };
        });
        return e2;
      }, set: function(t2) {
        if (!t2)
          return delete m(this, E).months;
        O(t2) && 12 === t2.length && t2.every(function(t3) {
          return O(t3) && 2 === t3.length && t3.every(function(t4) {
            return "string" == typeof t4;
          });
        }) && (m(this, E).months = t2);
      } }, { key: "weekDays", get: function() {
        return m(this, R).call(this).sort(function(t2, e2) {
          return t2.index - e2.index;
        });
      }, set: function(t2) {
        if (!t2)
          return delete m(this, E).weekDays;
        O(t2) && 7 === t2.length && t2.every(function(t3) {
          return O(t3) && 2 === t3.length && t3.every(function(t4) {
            return "string" == typeof t4;
          });
        }) && (m(this, E).weekDays = t2);
      } }, { key: "leaps", get: function() {
        return m(this, T).getLeaps(m(this, Y));
      } }, { key: "calendar", get: function() {
        return m(this, T);
      }, set: function(t2) {
        this.convert(t2);
      } }, { key: "locale", get: function() {
        return m(this, P);
      }, set: function() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
        D(t2) && v(this, P, t2);
      } }, { key: "custom", get: function() {
        return m(this, E);
      } }, { key: "meridiems", get: function() {
        return m(this, P).meridiems;
      } }, { key: "digits", get: function() {
        return m(this, E).digits || m(this, P).digits;
      }, set: function(t2) {
        if (!t2)
          return delete m(this, E).digits;
        O(t2) && 10 === t2.length && (m(this, E).digits = t2);
      } }, { key: "_format", get: function() {
        return m(this, I);
      }, set: function(t2) {
        "string" == typeof t2 && v(this, I, t2);
      } }, { key: "isLeap", get: function() {
        return m(this, T).isLeap(m(this, Y));
      } }, { key: "isValid", get: function() {
        return !isNaN(m(this, Y)) && !isNaN(m(this, L)) && !isNaN(m(this, W));
      } }, { key: "isUTC", get: function() {
        return m(this, F);
      } }, { key: "unix", get: function() {
        return (this.valueOf() - this.millisecond) / 1e3;
      } }, { key: "ignoreList", get: function() {
        return m(this, V);
      }, set: function(t2) {
        O(t2) && v(this, V, t2);
      } }, { key: "weekStartDayIndex", get: function() {
        return m(this, T).weekStartDayIndex;
      }, set: function(t2) {
        void 0 !== (t2 = M(t2)) && (m(this, T).weekStartDayIndex = Math.abs(t2) % 7);
      } }, { key: "date", set: function(t2) {
        this.setDate(t2);
      } }], c2 && f(s2.prototype, c2), y2 && f(s2, y2), Object.defineProperty(s2, "prototype", { writable: false }), i2;
    }();
    $ = p(k(z));
  }
});

// node_modules/react-multi-date-picker/build/index.js
var require_build = __commonJS({
  "node_modules/react-multi-date-picker/build/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var e2 = require_react();
    var r2 = require_browser_min();
    var t2 = (init_index_module(), __toCommonJS(index_module_exports));
    function n2(e3) {
      return e3 && "object" == typeof e3 && "default" in e3 ? e3 : { default: e3 };
    }
    var a2 = n2(e2);
    var o2 = n2(r2);
    var i2 = n2(t2);
    function d2(e3, r3) {
      var t3 = Object.keys(e3);
      if (Object.getOwnPropertySymbols) {
        var n3 = Object.getOwnPropertySymbols(e3);
        r3 && (n3 = n3.filter(function(r4) {
          return Object.getOwnPropertyDescriptor(e3, r4).enumerable;
        })), t3.push.apply(t3, n3);
      }
      return t3;
    }
    function l2(e3) {
      for (var r3 = 1; r3 < arguments.length; r3++) {
        var t3 = null != arguments[r3] ? arguments[r3] : {};
        r3 % 2 ? d2(Object(t3), true).forEach(function(r4) {
          u2(e3, r4, t3[r4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t3)) : d2(Object(t3)).forEach(function(r4) {
          Object.defineProperty(e3, r4, Object.getOwnPropertyDescriptor(t3, r4));
        });
      }
      return e3;
    }
    function u2(e3, r3, t3) {
      return (r3 = function(e4) {
        var r4 = function(e5, r5) {
          if ("object" != typeof e5 || null === e5)
            return e5;
          var t4 = e5[Symbol.toPrimitive];
          if (void 0 !== t4) {
            var n3 = t4.call(e5, r5 || "default");
            if ("object" != typeof n3)
              return n3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r5 ? String : Number)(e5);
        }(e4, "string");
        return "symbol" == typeof r4 ? r4 : String(r4);
      }(r3)) in e3 ? Object.defineProperty(e3, r3, { value: t3, enumerable: true, configurable: true, writable: true }) : e3[r3] = t3, e3;
    }
    function c2() {
      return c2 = Object.assign ? Object.assign.bind() : function(e3) {
        for (var r3 = 1; r3 < arguments.length; r3++) {
          var t3 = arguments[r3];
          for (var n3 in t3)
            Object.prototype.hasOwnProperty.call(t3, n3) && (e3[n3] = t3[n3]);
        }
        return e3;
      }, c2.apply(this, arguments);
    }
    function s2(e3, r3) {
      if (null == e3)
        return {};
      var t3, n3, a3 = function(e4, r4) {
        if (null == e4)
          return {};
        var t4, n4, a4 = {}, o4 = Object.keys(e4);
        for (n4 = 0; n4 < o4.length; n4++)
          t4 = o4[n4], r4.indexOf(t4) >= 0 || (a4[t4] = e4[t4]);
        return a4;
      }(e3, r3);
      if (Object.getOwnPropertySymbols) {
        var o3 = Object.getOwnPropertySymbols(e3);
        for (n3 = 0; n3 < o3.length; n3++)
          t3 = o3[n3], r3.indexOf(t3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, t3) && (a3[t3] = e3[t3]);
      }
      return a3;
    }
    function f2(e3, r3) {
      return function(e4) {
        if (Array.isArray(e4))
          return e4;
      }(e3) || function(e4, r4) {
        var t3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
        if (null != t3) {
          var n3, a3, o3, i3, d3 = [], l3 = true, u3 = false;
          try {
            if (o3 = (t3 = t3.call(e4)).next, 0 === r4) {
              if (Object(t3) !== t3)
                return;
              l3 = false;
            } else
              for (; !(l3 = (n3 = o3.call(t3)).done) && (d3.push(n3.value), d3.length !== r4); l3 = true)
                ;
          } catch (e5) {
            u3 = true, a3 = e5;
          } finally {
            try {
              if (!l3 && null != t3.return && (i3 = t3.return(), Object(i3) !== i3))
                return;
            } finally {
              if (u3)
                throw a3;
            }
          }
          return d3;
        }
      }(e3, r3) || m2(e3, r3) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function p2(e3) {
      return function(e4) {
        if (Array.isArray(e4))
          return h2(e4);
      }(e3) || function(e4) {
        if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
          return Array.from(e4);
      }(e3) || m2(e3) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function m2(e3, r3) {
      if (e3) {
        if ("string" == typeof e3)
          return h2(e3, r3);
        var t3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === t3 && e3.constructor && (t3 = e3.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(e3) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? h2(e3, r3) : void 0;
      }
    }
    function h2(e3, r3) {
      (null == r3 || r3 > e3.length) && (r3 = e3.length);
      for (var t3 = 0, n3 = new Array(r3); t3 < r3; t3++)
        n3[t3] = e3[t3];
      return n3;
    }
    function y2(e3, r3) {
      var t3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (!t3) {
        if (Array.isArray(e3) || (t3 = m2(e3)) || r3 && e3 && "number" == typeof e3.length) {
          t3 && (e3 = t3);
          var n3 = 0, a3 = function() {
          };
          return { s: a3, n: function() {
            return n3 >= e3.length ? { done: true } : { done: false, value: e3[n3++] };
          }, e: function(e4) {
            throw e4;
          }, f: a3 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o3, i3 = true, d3 = false;
      return { s: function() {
        t3 = t3.call(e3);
      }, n: function() {
        var e4 = t3.next();
        return i3 = e4.done, e4;
      }, e: function(e4) {
        d3 = true, o3 = e4;
      }, f: function() {
        try {
          i3 || null == t3.return || t3.return();
        } finally {
          if (d3)
            throw o3;
        }
      } };
    }
    function g2(e3) {
      return Array.isArray(e3);
    }
    function v2(r3) {
      var t3 = r3.state.date, n3 = t3.calendar, o3 = t3.locale, d3 = r3.customWeekDays, l3 = r3.weekStartDayIndex, u3 = r3.displayWeekNumbers, c3 = r3.weekNumber, s3 = e2.useMemo(function() {
        var e3 = d3;
        return g2(e3) && e3.length >= 7 ? (e3.length = 7, e3 = e3.map(function(e4) {
          return g2(e4) & e4.length > 1 ? e4 = e4[1] : g2(e4) && (e4 = e4[0]), e4;
        })) : e3 = new i2.default({ year: 1, calendar: n3, locale: o3 }).weekDays.map(function(e4) {
          return e4.shortName;
        }), e3;
      }, [n3, o3, d3]);
      return s3 = p2(s3).slice(l3).concat(p2(s3).splice(0, l3)), a2.default.createElement("div", { className: "rmdp-week" }, u3 && a2.default.createElement("div", { className: "rmdp-week-day" }, c3), s3.map(function(e3, r4) {
        return a2.default.createElement("div", { key: r4, className: "rmdp-week-day" }, e3);
      }));
    }
    function b2(e3, r3) {
      var t3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!e3 || !r3)
        return false;
      if (e3.year === r3.year) {
        if (n3)
          return true;
        if (e3.monthIndex === r3.monthIndex)
          return !!t3 || e3.day === r3.day;
      }
    }
    function x2(e3) {
      var r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY/MM/DD";
      return e3.format(r3);
    }
    function w2(e3, r3, t3) {
      var n3 = t3.multiple, a3 = t3.range, o3 = t3.selectedDate, d3 = t3.onlyMonthPicker, l3 = t3.onlyYearPicker, u3 = t3.format, c3 = t3.focused, s3 = t3.weekPicker;
      e3.setFormat(u3);
      var m3 = new i2.default(e3);
      return o3 = n3 && a3 ? function() {
        var e4 = true;
        g2(o3) || (o3 = [[o3]]);
        var r4 = o3.find(function(e5) {
          return 1 === e5.length;
        }), t4 = d3 ? "YYYY/MM" : "YYYY/MM/DD", n4 = o3;
        if (r4) {
          var a4 = r4[0];
          n4 = n4.filter(function(e5) {
            if (1 === e5.length)
              return true;
            var r5 = f2(e5, 2), n5 = r5[0], o4 = r5[1], i3 = f2([a4, m3].sort(function(e6, r6) {
              return e6 - r6;
            }), 2), d4 = [n5, o4, i3[0], i3[1]].map(function(e6) {
              return x2(e6, t4);
            }), l4 = f2(d4, 4), u4 = l4[0], c4 = l4[1], s4 = l4[2], p3 = l4[3];
            return !(s4 <= u4 && p3 >= c4 || s4 >= u4 && p3 >= c4 && s4 <= c4 || s4 <= u4 && p3 <= c4 && p3 >= u4);
          });
        } else
          n4 = n4.filter(function(e5) {
            if (!g2(e5))
              return true;
            if (0 === e5.length)
              return false;
            var r5 = f2(e5, 2), n5 = [r5[0], r5[1], m3].map(function(e6) {
              return x2(e6, t4);
            }), a5 = f2(n5, 3), o4 = a5[0], i3 = a5[1], d4 = a5[2];
            return !(d4 >= o4 && d4 <= i3);
          });
        n4 = n4.map(function(r5) {
          var t5;
          return g2(r5) ? 1 === r5.length ? (e4 = false, t5 = r5.concat(m3)) : t5 = r5 : (e4 = false, t5 = [r5, m3]), t5.sort(function(e5, r6) {
            return e5 - r6;
          });
        }), e4 && (n4 = [].concat(p2(n4), [[m3]]));
        return n4;
      }() : n3 ? function() {
        var t4 = o3.filter(function(r4) {
          return !b2(e3, r4, d3, l3);
        });
        t4.length === o3.length ? t4.push(m3) : m3 = t4.find(function(e4) {
          return b2(e4, c3);
        });
        r3 && t4.sort(function(e4, r4) {
          return e4 - r4;
        });
        return t4;
      }() : a3 ? function() {
        if (s3)
          return [new i2.default(m3).toFirstOfWeek(), new i2.default(m3).toLastOfWeek()];
        if (2 === o3.length || 0 === o3.length)
          return [m3];
        if (1 === o3.length)
          return [o3[0], m3].sort(function(e4, r4) {
            return e4 - r4;
          });
      }() : m3, [o3, m3];
    }
    function k2(e3, r3, t3, n3) {
      var a3 = [], o3 = t3 ? "YYYY/MM" : "YYYY/MM/DD", i3 = x2(e3, o3);
      function d3(r4) {
        var n4 = r4[0], d4 = r4[1];
        if (1 === r4.length)
          b2(e3, n4, t3) && a3.push("rmdp-range");
        else if (2 === r4.length) {
          var l3 = [n4, d4].map(function(e4) {
            return x2(e4, o3);
          }), u3 = f2(l3, 2), c3 = u3[0], s3 = u3[1];
          i3 >= c3 && i3 <= s3 && a3.push("rmdp-range"), i3 === c3 && a3.push("start"), i3 === s3 && a3.push("end");
        }
      }
      return n3 ? (g2(r3) ? r3 : [[r3]]).forEach(d3) : d3(r3), a3.join(" ");
    }
    function D2(e3, r3, t3, n3) {
      var a3 = arguments.length > 5 ? arguments[5] : void 0, o3 = [];
      if (n3 && t3) {
        var i3, d3 = "day" === (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "day") ? "YYYY/MM/DD" : "YYYY/MM", l3 = t3.format(d3), u3 = e3.format(d3);
        if (a3 || 1 !== (null == r3 ? void 0 : r3.length)) {
          if (a3 && g2(r3)) {
            var c3, s3 = y2(r3);
            try {
              for (s3.s(); !(c3 = s3.n()).done; ) {
                var f3 = c3.value;
                if (g2(f3) && 1 === f3.length) {
                  i3 = f3[0].format(d3);
                  break;
                }
              }
            } catch (e4) {
              s3.e(e4);
            } finally {
              s3.f();
            }
          }
        } else
          i3 = r3[0].format(d3);
        (u3 > i3 && u3 <= l3 || u3 < i3 && u3 >= l3) && (o3.push("rmdp-range-hover"), u3 === l3 && o3.push(l3 > i3 ? "end" : "start"), g2(r3) && r3.flat().some(function(e4) {
          return e4.format(d3) === u3;
        }) && o3.push("force"));
      }
      return o3;
    }
    var O2;
    var E2 = "dddd MMMM DD of YYYY";
    function Y2(r3) {
      var t3 = r3.state, n3 = r3.setState, o3 = r3.onChange, d3 = r3.showOtherDays, s3 = void 0 !== d3 && d3, p3 = r3.mapDays, m3 = r3.onlyShowInRangeDates, h3 = r3.customWeekDays, y3 = r3.sort, g3 = r3.numberOfMonths, x3 = r3.isRTL, Y3 = r3.weekStartDayIndex, M3 = r3.handleFocusedDate, P3 = r3.hideWeekDays, N3 = r3.fullYear, S3 = f2(r3.monthAndYears, 1)[0], C3 = r3.displayWeekNumbers, I3 = r3.weekNumber, j3 = void 0 === I3 ? "" : I3, T3 = r3.rangeHover, A3 = r3.highlightToday, R3 = e2.useRef({}), L3 = e2.useRef(), F3 = t3.today, V3 = t3.minDate, W3 = t3.maxDate, B2 = t3.range, _3 = t3.multiple, z3 = t3.date, H3 = t3.selectedDate, q2 = t3.onlyMonthPicker, J3 = t3.onlyYearPicker, K2 = !q2 && !J3, U3 = f2(e2.useState(), 2), $3 = U3[0], G2 = U3[1], Q2 = _3 || B2 ? (null == H3 ? void 0 : H3.length) > 0 : !!H3;
      R3.current.date = z3;
      var X2 = e2.useMemo(function() {
        return K2 ? function(e3, r4, t4, n4) {
          if (!e3)
            return [];
          for (var a3 = [], o4 = 0; o4 < t4; o4++) {
            var d4 = (e3 = new i2.default(e3).toFirstOfMonth()).monthIndex, l3 = [];
            e3.toFirstOfWeek().add(n4, "day"), e3.monthIndex === d4 && e3.day > 1 && e3.subtract(7, "days");
            for (var u3 = 0; u3 < 6; u3++) {
              for (var c3 = [], s4 = 0; s4 < 7; s4++)
                c3.push({ date: new i2.default(e3), day: e3.format("D"), current: e3.monthIndex === d4 }), e3.day += 1;
              if (l3.push(c3), u3 > 2 && e3.monthIndex !== d4 && !r4)
                break;
            }
            a3.push(l3);
          }
          return a3;
        }(R3.current.date, s3, g3, Y3) : [];
      }, [z3.monthIndex, z3.year, z3.calendar, z3.locale, K2, s3, g3, Y3]);
      return K2 && a2.default.createElement("div", { ref: L3, className: "rmdp-day-picker ".concat(N3 ? "rmdp-full-year" : ""), style: { display: N3 ? "grid" : "flex" }, onMouseLeave: function() {
        return T3 && G2();
      } }, X2.map(function(e3, r4) {
        return a2.default.createElement("div", { key: r4, style: u2({}, x3 ? "marginLeft" : "marginRight", r4 + (N3 ? 0 : 1) < g3 ? "10px" : "") }, N3 && a2.default.createElement("div", { className: "rmdp-month-name" }, S3[r4]), !P3 && a2.default.createElement(v2, { state: t3, customWeekDays: h3, weekStartDayIndex: Y3, displayWeekNumbers: C3, weekNumber: j3 }), e3.map(function(e4, d4) {
          return a2.default.createElement("div", { key: d4, className: "rmdp-week" }, C3 && a2.default.createElement("div", { className: "rmdp-day rmdp-disabled" }, a2.default.createElement("span", null, e4[0].date.format("WW"))), e4.map(function(e5, d5) {
            var u3 = function(e6) {
              if (!e6.current && !s3)
                return {};
              var r5 = {};
              return p3.forEach(function(n4) {
                var a3, o4 = n4({ date: e6.date, today: F3, currentMonth: t3.date.month, selectedDate: t3.selectedDate, isSameDate: b2 });
                (null === (a3 = o4) || void 0 === a3 ? void 0 : a3.constructor) !== Object && (o4 = {}), (o4.disabled || o4.hidden) && (e6.disabled = true), o4.hidden && (e6.hidden = true), r5 = l2(l2({}, r5), o4);
              }), delete r5.disabled, delete r5.hidden, r5;
            }(e5 = { date: e5.date, day: e5.day, current: e5.current }), h4 = Z2(e5) && !e5.disabled, v3 = "".concat(h4 ? "sd" : ""), x4 = u3.children;
            h4 && (v3 = "".concat(v3, " ").concat(u3.className || "")), delete u3.className, delete u3.children;
            var Y4 = function(e6, r5) {
              var t4 = ["rmdp-day"], n4 = e6.date, a3 = e6.hidden, o4 = e6.current;
              if (!Z2(e6) || a3)
                t4.push("rmdp-day-hidden");
              else {
                (V3 && n4 < V3 || W3 && n4 > W3 || e6.disabled) && (t4.push("rmdp-disabled"), e6.disabled || (e6.disabled = true)), o4 || t4.push("rmdp-deactive");
                var i3 = r5 > 1 && o4 || 1 === r5;
                e6.disabled && m3 || (b2(n4, F3) && A3 && t4.push("rmdp-today"), d6 = n4, [].concat(H3).some(function(e7) {
                  return b2(e7, d6);
                }) && i3 && !B2 && t4.push("rmdp-selected")), B2 && !e6.disabled && i3 && (t4.push(k2(n4, H3, void 0, _3)), t4 = t4.concat(D2(n4, H3, $3, T3, void 0, _3)));
              }
              var d6;
              return t4.join(" ");
            }(e5, g3);
            (e5.hidden || e5.disabled) && (v3 = v3.replace("sd", ""));
            var P4 = Q2 ? Y4.includes("selected") || Y4.includes("range") : Y4.includes("today");
            return a2.default.createElement("div", { key: d5, tabIndex: P4 ? 0 : -1, "aria-label": "Choose ".concat(e5.date.format(E2)), className: Y4, onMouseEnter: function() {
              return T3 && G2(e5.date);
            }, onKeyDown: function(r5) {
              return function(e6, r6) {
                var a3 = e6.currentTarget, o4 = e6.key, d6 = e6.code, u4 = { ArrowRight: 1, ArrowLeft: -1, ArrowUp: -7, ArrowDown: 7 };
                if ("Space" === d6 || " " === o4)
                  e6.preventDefault(), a3.click();
                else if (Object.keys(u4).includes(o4)) {
                  var c3 = function(e7) {
                    if (!e7)
                      return s4();
                    var r7 = e7.getAttribute("class");
                    r7.includes("hidden") || r7.includes("disabled") ? s4() : e7.focus();
                  }, s4 = function() {
                    n3(l2(l2({}, t3), {}, { date: p4 })), clearTimeout(O2), O2 = setTimeout(function() {
                      return c3(ee(p4));
                    }, 100);
                  };
                  e6.preventDefault();
                  var f3 = u4[o4], p4 = new i2.default(r6.date).add(f3, "day"), m4 = ee(p4);
                  c3(m4);
                }
              }(r5, e5);
            }, onClick: function() {
              Z2(e5) && !e5.disabled && function(e6, r5, n4) {
                var a3, d6, u4, c3 = e6.date, s4 = e6.current, p4 = t3.selectedDate, m4 = t3.focused, h5 = t3.date, g4 = h5, v4 = g4.hour, b3 = g4.minute, x5 = g4.second;
                c3.set({ hour: (null === (a3 = p4) || void 0 === a3 ? void 0 : a3.hour) || v4, minute: (null === (d6 = p4) || void 0 === d6 ? void 0 : d6.minute) || b3, second: (null === (u4 = p4) || void 0 === u4 ? void 0 : u4.second) || x5 }), 1 !== n4 || s4 ? n4 > 1 && !s4 && (0 === r5 && c3 < h5 && (h5 = new i2.default(h5).toFirstOfMonth()), r5 > 0 && c3.monthIndex > h5.monthIndex + r5 && r5 + 1 === n4 && (h5 = new i2.default(h5).toFirstOfMonth().add(1, "month"))) : h5 = new i2.default(h5).toFirstOfMonth();
                var k3 = f2(w2(c3, y3, t3), 2);
                p4 = k3[0], m4 = k3[1], o3(p4, l2(l2({}, t3), {}, { date: h5, focused: m4, selectedDate: p4 })), M3(m4, c3);
              }(e5, r4, g3);
            } }, a2.default.createElement("span", c2({ className: v3 }, u3), Z2(e5) && !e5.hidden ? null != x4 ? x4 : e5.day : ""));
          }));
        }));
      }));
      function Z2(e3) {
        return !!e3.current || s3;
      }
      function ee(e3) {
        return L3.current.querySelector("[aria-label*='".concat(e3.format(E2), "']"));
      }
    }
    function M2(e3) {
      var r3 = e3.direction, t3 = e3.onClick, n3 = e3.disabled;
      return a2.default.createElement("button", { type: "button", className: "rmdp-arrow-container ".concat(r3, " ").concat(n3 ? "disabled" : ""), onClick: t3, "aria-roledescription": "button to navigate ".concat(r3.replace("rmdp-", "")) }, a2.default.createElement("i", { className: "rmdp-arrow" }));
    }
    function P2(r3) {
      var t3 = r3.state, n3 = r3.setState, o3 = r3.disableYearPicker, i3 = r3.disableMonthPicker, d3 = r3.buttons, u3 = r3.renderButton, c3 = r3.handleMonthChange, s3 = r3.disabled, p3 = r3.hideMonth, m3 = r3.hideYear, h3 = r3.isRTL, y3 = r3.fullYear, g3 = f2(r3.monthAndYears, 2), v3 = g3[0], b3 = g3[1], x3 = r3.monthYearSeparator, w3 = r3.formatMonth, k3 = r3.formatYear, D3 = r3.headerOrder, O3 = {}, E3 = t3.date, Y3 = t3.onlyMonthPicker, P3 = t3.onlyYearPicker, N3 = t3.mustShowYearPicker, S3 = t3.minDate, C3 = t3.maxDate, I3 = t3.year, j3 = t3.today, T3 = S3 && E3.year <= S3.year && S3.monthIndex > E3.monthIndex - 1, A3 = C3 && E3.year >= C3.year && C3.monthIndex < E3.monthIndex + 1, R3 = j3.year + 7;
      if (R3 -= 12 * Math.floor((R3 - I3) / 12), (p3 || y3) && m3 && !d3)
        return null;
      if ((Y3 || y3) && (S3 && S3.year >= E3.year && (T3 = true), C3 && C3.year <= E3.year && (A3 = true)), N3 || P3) {
        var L3 = R3 - 11;
        T3 = S3 && S3.year > L3, A3 = C3 && C3.year < R3;
      }
      return s3 && (T3 = true, A3 = true), a2.default.createElement("div", { className: "rmdp-header" }, a2.default.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, Array.from(new Set(D3)).map(function(r4, t4) {
        return a2.default.createElement(e2.Fragment, { key: t4 }, function(r5) {
          switch (r5) {
            case "LEFT_BUTTON":
              return d3 && V3("left");
            case "RIGHT_BUTTON":
              return d3 && V3("right");
            case "MONTH_YEAR":
            case "YEAR_MONTH":
              if (y3)
                return a2.default.createElement("div", { className: "rmdp-header-values", style: O3 }, !m3 && E3.format("YYYY"));
              var t5 = r5.split("_").filter(function(e3) {
                return "MONTH" === e3 && !p3 || "YEAR" === e3 && !m3;
              });
              return t5.length > 1 && (t5 = [t5[0], F3(), t5[1]]), v3.map(function(r6, n4) {
                return a2.default.createElement("div", { key: n4, className: "rmdp-header-values", style: O3 }, t5.map(function(t6, d4) {
                  return a2.default.createElement(e2.Fragment, { key: d4 }, function(e3, r7, t7) {
                    switch (e3) {
                      case "MONTH":
                        return a2.default.createElement("span", { style: { cursor: s3 || i3 || Y3 ? "default" : "pointer" }, onClick: function() {
                          return !i3 && B2("mustShowMonthPicker");
                        } }, function(e4, r8) {
                          return "function" == typeof w3 ? w3(e4, r8) : e4;
                        }(r7, b3[t7]));
                      case "YEAR":
                        return a2.default.createElement("span", { style: { cursor: s3 || o3 || P3 ? "default" : "pointer" }, onClick: function() {
                          return !o3 && B2("mustShowYearPicker");
                        } }, function(e4, r8) {
                          return "function" == typeof w3 ? k3(e4, r8) : e4;
                        }(b3[t7], r7));
                      default:
                        return e3;
                    }
                  }(t6, r6, n4));
                }));
              });
            default:
              return;
          }
        }(r4));
      })));
      function F3() {
        return x3 ? a2.default.createElement("span", null, x3) : h3 ? "،" : ",";
      }
      function V3(r4) {
        var t4 = function(e3) {
          e3.preventDefault(), W3("right" === r4 ? 1 : -1), function(e4) {
            setTimeout(function() {
              var r5 = e4.target.closest(".rmdp-calendar");
              if (r5) {
                var t5 = r5.querySelector("div[tabindex='0']");
                t5 && t5.getAttribute("class").includes("hidden") && (t5.setAttribute("tabindex", "-1"), t5 = void 0), t5 || (t5 = r5.querySelector("div[tabindex='-1']:not(.rmdp-day-hidden)")) && t5.setAttribute("tabindex", "0");
              }
            }, 200);
          }(e3);
        }, n4 = "left" === r4 && T3 || "right" === r4 && A3;
        return u3 instanceof Function ? u3(r4, t4, n4) : e2.isValidElement(u3) ? e2.cloneElement(u3, { direction: r4, handleClick: t4, disabled: n4 }) : a2.default.createElement(M2, { direction: "rmdp-".concat(r4), onClick: t4, disabled: n4 });
      }
      function W3(e3) {
        s3 || e3 < 0 && T3 || e3 > 0 && A3 || (y3 ? E3.year += e3 : N3 || P3 ? (I3 += 12 * e3, e3 < 0 && S3 && I3 < S3.year && (I3 = S3.year), e3 > 0 && C3 && I3 > C3.year && (I3 = C3.year)) : (E3.toFirstOfMonth(), Y3 ? E3.year += e3 : (E3.month += e3, c3(E3))), n3(l2(l2({}, t3), {}, { date: E3, year: I3 })));
      }
      function B2(e3) {
        if (!s3) {
          var r4 = { mustShowMonthPicker: false, mustShowYearPicker: false };
          r4[e3] = !t3[e3], n3(l2(l2({}, t3), r4));
        }
      }
    }
    function N2(e3) {
      return g2(e3) || (e3 = []), JSON.stringify(e3);
    }
    function S2(r3) {
      var t3 = r3.state, n3 = r3.onChange, o3 = r3.customMonths, d3 = r3.sort, u3 = r3.handleMonthChange, c3 = r3.handleFocusedDate, s3 = r3.rangeHover, p3 = r3.highlightToday, m3 = r3.numberOfMonths, h3 = t3.date, y3 = t3.today, v3 = t3.minDate, x3 = t3.maxDate, O3 = t3.calendar, E3 = t3.locale, Y3 = t3.onlyMonthPicker, M3 = t3.onlyYearPicker, P3 = t3.range, S3 = t3.onlyShowInRangeDates, C3 = (t3.mustShowMonthPicker || Y3) && !M3, I3 = f2(e2.useState(), 2), j3 = I3[0], T3 = I3[1];
      o3 = o3 && N2(o3);
      var A3 = e2.useMemo(function() {
        var e3 = [], r4 = Y3 ? m3 : 1, n4 = o3 && JSON.parse(o3), a3 = new i2.default({ calendar: O3, locale: E3, format: t3.date._format, year: t3.date.year, month: 1, day: 1 });
        g2(n4) && n4.length >= 12 ? (n4.length = 12, n4 = n4.map(function(e4) {
          return g2(e4) ? e4[0] : e4;
        })) : n4 = a3.locale.months.map(function(e4) {
          return f2(e4, 1)[0];
        });
        for (var d4 = 0; d4 < r4; d4++) {
          for (var l3 = [], u4 = 0, c4 = 0; c4 < 4; c4++) {
            for (var s4 = [], p4 = 0; p4 < 3; p4++)
              s4.push({ date: new i2.default(a3), name: n4[u4] }), u4++, a3.add(1, "month");
            l3.push(s4);
          }
          e3.push(l3);
        }
        return e3;
      }, [O3, E3, o3, t3.date.year, t3.date._format, m3, Y3]);
      return a2.default.createElement("div", { className: "".concat(Y3 ? "only " : "", "rmdp-month-picker"), style: { display: C3 ? "flex" : "none" }, onMouseLeave: function() {
        return s3 && T3();
      } }, A3.map(function(e3, r4) {
        return a2.default.createElement("div", { key: r4, style: { margin: "0 5px", flex: 1 } }, e3.map(function(e4, r5) {
          return a2.default.createElement("div", { key: r5, className: "rmdp-ym" }, e4.map(function(e5, r6) {
            var t4 = e5.date, n4 = e5.name;
            return a2.default.createElement("div", { key: r6, className: L3(t4), onClick: function() {
              return R3(t4);
            }, onMouseEnter: function() {
              return s3 && T3(t4);
            } }, a2.default.createElement("span", { className: Y3 ? "sd" : "" }, n4));
          }));
        }));
      }));
      function R3(e3) {
        var r4 = t3.selectedDate, a3 = t3.focused, o4 = e3.year, i3 = e3.monthIndex;
        if (!(v3 && o4 <= v3.year && i3 < v3.monthIndex || x3 && o4 >= x3.year && i3 > x3.monthIndex)) {
          if (h3.setMonth(i3 + 1), Y3) {
            var s4 = f2(w2(e3, d3, t3), 2);
            r4 = s4[0], a3 = s4[1];
          } else
            u3(h3);
          n3(Y3 ? r4 : void 0, l2(l2({}, t3), {}, { date: h3, focused: a3, selectedDate: r4, mustShowMonthPicker: false })), Y3 && c3(a3, e3);
        }
      }
      function L3(e3) {
        var r4 = ["rmdp-day"], n4 = e3.year, a3 = e3.monthIndex, o4 = t3.selectedDate, i3 = t3.multiple;
        if ((v3 && (n4 < v3.year || n4 === v3.year && a3 < v3.monthIndex) || x3 && (n4 > x3.year || n4 === x3.year && a3 > x3.monthIndex)) && r4.push("rmdp-disabled"), !r4.includes("rmdp-disabled") || !S3)
          return b2(y3, e3, true) && p3 && r4.push("rmdp-today"), Y3 ? P3 ? (r4.push(k2(e3, o4, true, i3)), r4 = r4.concat(D2(e3, o4, j3, s3, "month", i3))) : [].concat(o4).some(function(r5) {
            return b2(r5, e3, true);
          }) && r4.push("rmdp-selected") : h3.monthIndex === a3 && r4.push("rmdp-selected"), r4.join(" ");
      }
    }
    function C2(e3, r3) {
      return e3.replace(/[0-9]/g, function(e4) {
        return r3[e4];
      });
    }
    function I2(r3) {
      var t3 = r3.state, n3 = r3.onChange, o3 = r3.sort, d3 = r3.handleFocusedDate, u3 = r3.onYearChange, c3 = r3.rangeHover, s3 = r3.highlightToday, p3 = t3.date, m3 = t3.today, h3 = t3.minDate, y3 = t3.maxDate, v3 = t3.onlyYearPicker, b3 = t3.range, x3 = t3.onlyShowInRangeDates, k3 = t3.year, D3 = t3.mustShowYearPicker || v3, O3 = p3.digits, E3 = f2(e2.useState(), 2), Y3 = E3[0], M3 = E3[1], P3 = m3.year - 4;
      P3 -= 12 * Math.ceil((P3 - k3) / 12);
      var N3 = e2.useMemo(function() {
        for (var e3 = [], r4 = P3, t4 = 0; t4 < 4; t4++) {
          for (var n4 = [], a3 = 0; a3 < 3; a3++)
            n4.push(r4), r4++;
          e3.push(n4);
        }
        return e3;
      }, [P3]);
      return a2.default.createElement("div", { className: "".concat(v3 ? "only " : "", "rmdp-year-picker"), style: { display: D3 ? "block" : "none" } }, N3.map(function(e3, r4) {
        return a2.default.createElement("div", { key: r4, className: "rmdp-ym", onMouseLeave: function() {
          return c3 && M3();
        } }, e3.map(function(e4, r5) {
          return a2.default.createElement("div", { key: r5, className: S3(e4), onClick: function() {
            return function(e5) {
              if (I3(e5))
                return;
              var r6 = new i2.default(t3.date).setYear(e5), a3 = t3.selectedDate, c4 = t3.focused;
              if (v3) {
                var s4 = f2(w2(r6, o3, t3), 2);
                a3 = s4[0], c4 = s4[1];
              } else
                h3 && r6.monthIndex < h3.monthIndex ? r6 = r6.setMonth(h3.monthIndex + 1) : y3 && r6.monthIndex > y3.monthIndex && (r6 = r6.setMonth(y3.monthIndex + 1)), null == u3 || u3(r6);
              n3(v3 ? a3 : void 0, l2(l2({}, t3), {}, { date: r6, focused: c4, selectedDate: a3, mustShowYearPicker: false })), v3 && d3(c4, r6);
            }(e4);
          }, onMouseEnter: function() {
            return c3 && M3(e4);
          } }, a2.default.createElement("span", { className: v3 ? "sd" : "" }, C2(e4.toString(), O3)));
        }));
      }));
      function S3(e3) {
        var r4 = ["rmdp-day"], n4 = t3.date, a3 = t3.selectedDate, o4 = t3.multiple;
        if (I3(e3) && r4.push("rmdp-disabled"), !r4.includes("rmdp-disabled") || !x3) {
          if (m3.year === e3 && s3 && r4.push("rmdp-today"), v3)
            if (b3) {
              var i3 = function(t4) {
                var n5 = t4[0], a4 = t4[1];
                if (1 === t4.length) {
                  if (e3 === n5.year && r4.push("rmdp-range"), c3) {
                    var o5 = t4[0].year;
                    (e3 > o5 && e3 <= Y3 || e3 < o5 && e3 >= Y3) && (r4.push("rmdp-range-hover"), e3 === Y3 && r4.push(Y3 > o5 ? "end" : "start"));
                  }
                } else
                  2 === t4.length && (e3 >= n5.year && e3 <= a4.year && r4.push("rmdp-range"), e3 === n5.year && r4.push("start"), e3 === a4.year && r4.push("end"));
              };
              o4 ? (g2(a3) ? a3 : [[a3]]).forEach(function(e4) {
                return i3(e4);
              }) : i3(a3);
            } else
              [].concat(a3).some(function(r5) {
                return r5 && r5.year === e3;
              }) && r4.push("rmdp-selected");
          else
            e3 === n4.year && r4.push("rmdp-selected");
          return r4.join(" ");
        }
      }
      function I3(e3) {
        return h3 && e3 < h3.year || y3 && e3 > y3.year;
      }
    }
    function j2(e3, r3, t3) {
      return t3 || (e3 ? "MM/YYYY" : r3 ? "YYYY" : "YYYY/MM/DD");
    }
    function T2(e3, r3) {
      var t3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "YYYY/MM/DD";
      return e3 instanceof i2.default ? e3.set({ calendar: r3, format: t3 }) : e3 = new i2.default({ date: e3, calendar: r3, format: t3 }), e3;
    }
    function A2(e3) {
      "_self" in a2.default.createElement("div") && console.warn(e3.join("\n"));
    }
    var R2 = new i2.default();
    var L2 = R2.calendar;
    var F2 = R2.locale;
    function V2(e3, r3) {
      return e3 && e3.constructor !== Object && (A2(W2("calendar")), e3 = void 0), r3 && r3.constructor !== Object && (A2(W2("locale")), r3 = void 0), [e3 || L2, r3 || F2];
    }
    function W2(e3) {
      return ["".concat(e3, " must be an object"), "https://shahabyazdi.github.io/react-multi-date-picker/calendars/"];
    }
    function B(e3) {
      return e3 && e3.name ? e3.name.split("_")[1] : "";
    }
    function _2(e3) {
      return ["fa", "ar"].includes(B(e3));
    }
    function z2(e3, r3) {
      void 0 === r3 && (r3 = {});
      var t3 = r3.insertAt;
      if (e3 && "undefined" != typeof document) {
        var n3 = document.head || document.getElementsByTagName("head")[0], a3 = document.createElement("style");
        a3.type = "text/css", "top" === t3 && n3.firstChild ? n3.insertBefore(a3, n3.firstChild) : n3.appendChild(a3), a3.styleSheet ? a3.styleSheet.cssText = e3 : a3.appendChild(document.createTextNode(e3));
      }
    }
    z2(".rmdp-wrapper{background-color:#fff;border-radius:5px;direction:ltr;text-align:center;width:max-content}.rmdp-shadow{box-shadow:0 0 5px #8798ad}.rmdp-border{border:1px solid #cfd8e2}.rmdp-calendar{height:max-content;padding:4px}.rmdp-border-top{border-top:1px solid #cfd8e2}.rmdp-border-bottom{border-bottom:1px solid #cfd8e2}.rmdp-border-left{border-left:1px solid #cfd8e2}.rmdp-border-right{border-right:1px solid #cfd8e2}.rmdp-week,.rmdp-ym{display:flex;justify-content:space-between}.rmdp-ym{height:25%}.rmdp-day,.rmdp-week-day{color:#000;cursor:pointer;height:34px;position:relative;width:34px}.rmdp-week-day{color:#0074d9;cursor:default;font-size:13px;font-weight:500}.rmdp-day span,.rmdp-week-day{display:flex;flex-direction:column;justify-content:center}.rmdp-day span{border-radius:50%;bottom:3px;font-size:14px;left:3px;position:absolute;right:3px;top:3px}.rmdp-day.rmdp-today span{background-color:#7fdbff;color:#fff}.rmdp-day.rmdp-selected span:not(.highlight){background-color:#0074d9;box-shadow:0 0 3px #8798ad;color:#fff}.rmdp-day.rmdp-deactive,.rmdp-day.rmdp-disabled{color:#8798ad}.rmdp-day.rmdp-deactive.rmdp-selected span{background-color:#4ca6f5;box-shadow:0 0 3px #bac5d3}.rmdp-ym .rmdp-day{flex:1;margin:auto}.rmdp-ym .rmdp-day span{border-radius:12px;padding:2px 0}.rmdp-range{background-color:#0074d9;box-shadow:0 0 3px #8798ad;color:#fff}.rmdp-range-hover{background-color:#7ea6f0;color:#fff}.rmdp-range-hover.start:not(.force),.rmdp-range.start:not(.force){border-bottom-left-radius:50%;border-top-left-radius:50%}.rmdp-range-hover.end:not(.force),.rmdp-range.end:not(.force){border-bottom-right-radius:50%;border-top-right-radius:50%}.rmdp-ym .rmdp-range-hover.start:not(.force),.rmdp-ym .rmdp-range.start:not(.force){border-bottom-left-radius:15px;border-top-left-radius:15px}.rmdp-ym .rmdp-range-hover.end:not(.force),.rmdp-ym .rmdp-range.end:not(.force){border-bottom-right-radius:15px;border-top-right-radius:15px}@media (hover:hover){.rmdp-day:not(.rmdp-disabled,.rmdp-day-hidden) span:hover{background-color:#7ea6f0;color:#fff}}.rmdp-day-picker{padding:5px}.rmdp-header{font-size:14px;margin-top:5px;padding:9px 0}.rmdp-month-picker,.rmdp-year-picker{background-color:#fff;border-radius:0 0 5px 5px;bottom:2px;left:2px;position:absolute;right:2px;top:2px}.only.rmdp-month-picker,.only.rmdp-year-picker{height:240px;position:static;width:240px}.rmdp-header-values{color:#000;margin:auto}.rmdp-header-values span{padding:0 0 0 5px}.rmdp-arrow{border:solid #0074d9;border-width:0 2px 2px 0;display:inline-block;height:3px;margin-top:5px;padding:2px;width:3px}.rmdp-right i{margin-right:3px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.rmdp-left i{margin-left:3px;transform:rotate(135deg);-webkit-transform:rotate(135deg)}.rmdp-left{left:0}.rmdp-right{right:0}.rmdp-arrow-container{background:transparent;border:none;border-radius:50%;cursor:pointer;display:flex;height:20px;justify-content:center;margin:0 5px;padding:0;width:20px}.rmdp-arrow-container:hover{background-color:#0074d9;box-shadow:0 0 3px #8798ad}.rmdp-arrow-container:hover .rmdp-arrow{border:solid #fff;border-width:0 2px 2px 0}.rmdp-arrow-container.disabled{cursor:default}.rmdp-arrow-container.disabled:hover{background-color:inherit;box-shadow:inherit}.rmdp-arrow-container.disabled .rmdp-arrow,.rmdp-arrow-container.disabled:hover .rmdp-arrow{border:solid gray;border-width:0 2px 2px 0}.rmdp-rtl{direction:rtl}.rmdp-rtl .rmdp-left i{margin-left:0;margin-right:3px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.rmdp-rtl .rmdp-right i{margin-left:3px;margin-right:0;transform:rotate(135deg);-webkit-transform:rotate(135deg)}.rmdp-rtl .rmdp-right{left:0;right:auto}.rmdp-rtl .rmdp-left{left:auto;right:0}.rmdp-rtl .rmdp-range-hover.start:not(.force),.rmdp-rtl .rmdp-range.start:not(.force){border-bottom-left-radius:unset;border-bottom-right-radius:50%;border-top-left-radius:unset;border-top-right-radius:50%}.rmdp-rtl .rmdp-range-hover.end:not(.force),.rmdp-rtl .rmdp-range.end:not(.force){border-bottom-left-radius:50%;border-bottom-right-radius:unset;border-top-left-radius:50%;border-top-right-radius:unset}.rmdp-rtl .rmdp-range.start.end:not(.force){border-radius:50%}.rmdp-rtl .rmdp-ym .rmdp-range-hover.start:not(.force),.rmdp-rtl .rmdp-ym .rmdp-range.start:not(.force){border-bottom-right-radius:15px;border-top-right-radius:15px}.rmdp-rtl .rmdp-ym .rmdp-range-hover.end:not(.force),.rmdp-rtl .rmdp-ym .rmdp-range.end:not(.force){border-bottom-left-radius:15px;border-top-left-radius:15px}.rmdp-day-hidden,.rmdp-day.rmdp-disabled{cursor:default}.rmdp-selected .highlight{box-shadow:0 0 3px #8798ad}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-red:hover{background-color:#ff6687}.rmdp-day:not(.rmdp-deactive) .highlight-red{color:#cc0303}.rmdp-day.rmdp-deactive .highlight-red{color:#e08e8e}.rmdp-day.rmdp-selected .highlight-red{background-color:#ea0034;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-red{background-color:#e4b0ba;color:#fff}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-green:hover{background-color:#4db6ac}.rmdp-day:not(.rmdp-deactive) .highlight-green{color:#00796b}.rmdp-day.rmdp-deactive .highlight-green{color:#7ab3ac}.rmdp-day.rmdp-selected .highlight-green{background-color:#009688;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-green{background-color:#749c98;color:#fff}.rmdp-day-hidden,.rmdp-day-hidden:hover span{background-color:unset;color:transparent}.rmdp-month-name{cursor:default;font-size:14px;margin:3px 0}.rmdp-full-year{grid-template-columns:1fr 1fr 1fr}@media (max-height:450px),(max-width:450px){.rmdp-day,.rmdp-week-day{height:28px;width:28px}.rmdp-day span{font-size:12px;padding-left:.5px}.only.rmdp-month-picker,.only.rmdp-year-picker{height:200px;width:230px}.rmdp-header{padding:3px 0 0}.rmdp-header,.rmdp-month-name{font-size:12px}.rmdp-full-year{grid-template-columns:1fr 1fr}}");
    var H2 = ["datePickerProps", "DatePicker"];
    function q(r3, t3) {
      var n3, o3 = r3.value, d3 = r3.calendar, u3 = r3.locale, p3 = r3.format, m3 = r3.onlyMonthPicker, h3 = r3.onlyYearPicker, y3 = r3.range, v3 = void 0 !== y3 && y3, b3 = r3.multiple, x3 = void 0 !== b3 && b3, w3 = r3.className, k3 = r3.role, D3 = r3.weekDays, O3 = r3.months, E3 = r3.children, M3 = r3.onChange, A3 = r3.showOtherDays, R3 = r3.minDate, L3 = r3.maxDate, F3 = r3.mapDays, W3 = r3.disableMonthPicker, B2 = r3.disableYearPicker, z3 = r3.formattingIgnoreList, q2 = r3.onReady, J3 = r3.onlyShowInRangeDates, U3 = void 0 === J3 || J3, $3 = r3.zIndex, G2 = void 0 === $3 ? 100 : $3, Q2 = r3.plugins, X2 = void 0 === Q2 ? [] : Q2, Z2 = r3.sort, ee = r3.numberOfMonths, re = void 0 === ee ? 1 : ee, te = r3.currentDate, ne = r3.digits, ae = r3.buttons, oe = void 0 === ae || ae, ie = r3.renderButton, de = r3.weekStartDayIndex, le = void 0 === de ? 0 : de, ue = r3.disableDayPicker, ce = r3.onPropsChange, se = r3.onMonthChange, fe = r3.onYearChange, pe = r3.onFocusedDateChange, me = r3.readOnly, he = r3.disabled, ye = r3.hideMonth, ge = r3.hideYear, ve = r3.hideWeekDays, be = r3.shadow, xe = void 0 === be || be, we = r3.fullYear, ke = r3.displayWeekNumbers, De = r3.weekNumber, Oe = r3.weekPicker, Ee = r3.rangeHover, Ye = r3.monthYearSeparator, Me = r3.formatMonth, Pe = r3.formatYear, Ne = r3.highlightToday, Se = void 0 === Ne || Ne, Ce = r3.headerOrder, Ie = void 0 === Ce ? ["LEFT_BUTTON", "MONTH_YEAR", "RIGHT_BUTTON"] : Ce, je = r3.style, Te = void 0 === je ? {} : je;
      !te || te instanceof i2.default || (console.warn("currentDate must be instance of DateObject"), te = void 0), ("number" != typeof le || le < 0 || le > 6) && (le = 0), ("number" != typeof re || re < 1 || h3) && (re = 1), !(x3 || v3 || g2(o3)) || v3 || x3 || (x3 = true), Oe && (v3 = true, x3 = false), we && (re = 12, m3 = false, h3 = false), h3 && !ye && (ye = true);
      var Ae = f2(V2(d3, u3), 2);
      d3 = Ae[0], u3 = Ae[1], p3 = j2(m3, h3, p3), z3 = N2(z3), F3 = [].concat(F3).filter(Boolean), X2 = [].concat.apply([], X2);
      var Re = f2(e2.useState({}), 2), Le = Re[0], Fe = Re[1], Ve = {}, We = e2.useRef({ mustCallOnReady: true, currentDate: te });
      e2.useEffect(function() {
        Fe(function(e3) {
          var r4 = We.current.currentDate, t4 = e3.date, n4 = e3.selectedDate, a3 = e3.initialValue, c3 = e3.focused, s3 = e3.mustSortDates;
          function f3(e4) {
            if (e4)
              return e4.calendar.name !== d3.name && e4.setCalendar(d3), e4.locale.name !== u3.name && e4.setLocale(u3), e4._format !== p3 && e4.setFormat(p3), e4.digits = ne, e4.ignoreList = JSON.parse(z3), e4;
          }
          function y4(e4) {
            return new i2.default(r4 || e4);
          }
          if (o3)
            if (g2(n4 = K(o3, d3, u3, p3)))
              t4 || (t4 = y4(n4.flat()[0]));
            else if (t4 && 1 !== re) {
              var b4 = new i2.default(t4).toFirstOfMonth(), w4 = new i2.default(t4).add(re - 1, m3 ? "years" : "months").toLastOfMonth();
              (n4 < b4 || n4 > w4) && (t4 = new i2.default(n4));
            } else
              t4 = y4(n4);
          else
            t4 || (t4 = y4({ calendar: d3, locale: u3, format: p3 })), a3 && (n4 = void 0);
          if ([].concat(n4).flat().forEach(f3), f3(t4), x3 || v3 || g2(o3)) {
            if (n4 || (n4 = []), g2(n4) || (n4 = x3 && v3 ? [[n4]] : [n4]), v3 && !x3 && n4.length > 2) {
              var k4 = n4[n4.length - 1];
              n4 = [n4[0], k4], c3 = k4;
            }
            x3 && !v3 && Z2 && !s3 ? (s3 = true, n4.sort(function(e4, r5) {
              return e4 - r5;
            })) : v3 && !x3 && n4.sort(function(e4, r5) {
              return e4 - r5;
            });
          } else
            g2(n4) && (n4 = n4.flat()[n4.length - 1]);
          return we && t4.toFirstOfYear(), delete We.current.currentDate, l2(l2({}, e3), {}, { date: t4, selectedDate: n4, multiple: x3, range: v3, onlyMonthPicker: m3, onlyYearPicker: h3, initialValue: e3.initialValue || o3, value: o3, focused: c3, calendar: d3, locale: u3, format: p3, mustSortDates: s3, year: t4.year, today: f3(e3.today) || new i2.default({ calendar: d3 }), weekPicker: Oe });
        });
      }, [o3, d3, u3, p3, m3, h3, v3, x3, Z2, re, ne, z3, we, Oe]), e2.useEffect(function() {
        (R3 || L3) && Fe(function(e3) {
          var r4 = e3.calendar, t4 = e3.locale, n4 = e3.format, a3 = function(e4, r5, t5, n5, a4) {
            r5 && (r5 = T2(r5, n5, a4).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }));
            t5 && (t5 = T2(t5, n5, a4).set({ hour: 23, minute: 59, second: 59, millisecond: 999 }));
            g2(e4) && (e4 = e4.filter(function(e5) {
              return !(r5 && e5 < r5) && !(t5 && e5 > t5);
            }));
            return [e4, r5, t5];
          }(K(o3, r4, t4, n4), R3, L3, r4, n4), i3 = f2(a3, 3), d4 = i3[0], u4 = i3[1], c3 = i3[2];
          return l2(l2({}, e3), {}, { inRangeDates: U3 ? d4 : e3.selectedDate, minDate: u4, maxDate: c3 });
        });
      }, [R3, L3, U3, o3]), Le.today && !We.current.isReady && (We.current.isReady = true), e2.useEffect(function() {
        We.current.isReady && We.current.mustCallOnReady && q2 instanceof Function && (We.current.mustCallOnReady = false, q2());
      }, [We.current.isReady, q2]);
      var Be = "rmdp-top-class " + Ze(["top", "bottom"]), _e = { top: [], bottom: [], left: [], right: [] }, ze = _2(null === (n3 = Le.date) || void 0 === n3 ? void 0 : n3.locale), He = { state: Le, setState: Fe, onChange: $e, sort: Z2, handleFocusedDate: Qe, isRTL: ze, fullYear: we, monthAndYears: function() {
        var e3 = Le.date;
        if (!e3)
          return [];
        for (var r4 = [], t4 = [], n4 = e3.digits, a3 = 0; a3 < re; a3++) {
          var o4 = void 0, i3 = e3.year, d4 = e3.monthIndex + a3;
          if (m3 && (i3 += a3), d4 > 11 && (d4 -= 12, m3 || i3++), g2(O3) && O3.length >= 12) {
            var l3 = O3[d4];
            o4 = g2(l3) ? l3[0] : l3;
          } else
            o4 = e3.months[d4].name;
          i3 = C2(i3.toString(), n4), r4.push(o4), t4.push(i3);
        }
        return [r4, t4];
      }(), rangeHover: Ee, highlightToday: Se, numberOfMonths: re }, qe = arguments[0], Je = qe.datePickerProps, Ke = qe.DatePicker, Ue = s2(qe, H2);
      return function() {
        if (!We.current.isReady || !g2(X2))
          return;
        var r4 = { state: Le, setState: Fe, registerListener: er, calendarProps: Ue, datePickerProps: Je, handleChange: $e, Calendar: We.current.Calendar, DatePicker: Ke, handlePropsChange: Ge, handleFocusedDate: function(e3) {
          return Qe(e3);
        }, minDate: R3, maxDate: L3 }, t4 = function(e3) {
          return ue ? "bottom" : e3.props.position || "right";
        };
        X2.forEach(function(n4, a3) {
          if ("string" != typeof n4.type) {
            var o4 = {}, i3 = t4(n4);
            if (_e[i3] && !n4.props.disabled) {
              for (var d4 = 0; d4 < X2.length; d4++)
                if ("string" != typeof X2[d4].type && !X2[d4].props.disabled) {
                  if (4 === Object.keys(o4).length)
                    break;
                  var u4 = t4(X2[d4]);
                  ["top", "bottom"].includes(i3) ? (u4 === i3 && d4 > a3 && (o4.bottom = true), u4 === i3 && d4 < a3 && (o4.top = true)) : (Be.includes("border-top") && (o4.top = true), Be.includes("border-bottom") && (o4.bottom = true), u4 === i3 && d4 > a3 && (o4.right = true), u4 === i3 && d4 < a3 && (o4.left = true));
                }
              _e[i3].push(e2.cloneElement(n4, l2({ key: a3, position: i3, nodes: o4 }, r4)));
            }
          } else
            "mapDays" === n4.type && F3.push(n4.fn(r4));
        });
      }(), Le.today ? a2.default.createElement("div", { ref: function(e3) {
        e3 && (e3.date = Le.date, e3.set = function(e4, r4) {
          he || Fe(l2(l2({}, Le), {}, { date: new i2.default(Le.date.set(e4, r4)) }));
        });
        if (We.current.Calendar = e3, t3 instanceof Function)
          return t3(e3);
        t3 && (t3.current = e3);
      }, role: k3 || "dialog", className: "rmdp-wrapper rmdp-".concat(xe ? "shadow" : "border", " ").concat(w3 || ""), style: l2({ zIndex: G2 }, Te) }, _e.top, a2.default.createElement("div", { style: { display: "flex" }, className: Be }, _e.left, !ue && a2.default.createElement("div", { className: "rmdp-calendar ".concat(ze ? "rmdp-rtl" : "", " ").concat(Ze(["left", "right"])) }, a2.default.createElement(P2, l2(l2({}, He), {}, { disableYearPicker: B2, disableMonthPicker: W3, buttons: oe, renderButton: ie, handleMonthChange: Xe, disabled: he, hideMonth: ye, hideYear: ge, monthYearSeparator: Ye, formatMonth: Me, formatYear: Pe, headerOrder: Ie })), a2.default.createElement("div", { style: { position: "relative" } }, a2.default.createElement(Y2, l2(l2({}, He), {}, { showOtherDays: A3, mapDays: F3, onlyShowInRangeDates: U3, customWeekDays: D3, weekStartDayIndex: le, hideWeekDays: ve, displayWeekNumbers: ke, weekNumber: De })), !we && a2.default.createElement(a2.default.Fragment, null, !W3 && a2.default.createElement(S2, c2({}, He, { customMonths: O3, handleMonthChange: Xe })), !B2 && a2.default.createElement(I2, c2({}, He, { onYearChange: fe }))))), _e.right), _e.bottom, E3) : null;
      function $e(e3, r4) {
        if (e3 instanceof i2.default && (e3 = new i2.default(e3)), !he) {
          if (e3 || null === e3) {
            if (me)
              return;
            Ve.change && Ve.change.forEach(function(r5) {
              return r5(e3);
            });
          }
          if (e3 || null === e3) {
            var t4 = null == M3 ? void 0 : M3(e3);
            r4 && false !== t4 && Fe(r4);
          } else
            r4 && Fe(r4);
          Ge({ value: e3 });
        }
      }
      function Ge() {
        var e3, r4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!me && !he) {
          var t4 = l2(l2(l2(l2({}, Ue), Je), r4), {}, { value: null !== (e3 = r4.value) && void 0 !== e3 ? e3 : Le.selectedDate });
          delete t4.onPropsChange, null == ce || ce(t4);
        }
      }
      function Qe(e3, r4) {
        me || he || null == pe || pe(e3, r4);
      }
      function Xe(e3) {
        null == se || se(e3);
      }
      function Ze(e3) {
        return ue || !g2(X2) ? "" : Array.from(new Set(X2.map(function(r4) {
          if (!r4.props)
            return "";
          var t4 = r4.props.position || "right";
          return e3.includes(t4) && !r4.props.disabled ? "rmdp-border-" + t4 : "";
        }))).join(" ");
      }
      function er(e3, r4) {
        Ve[e3] || (Ve[e3] = []), Ve[e3].push(r4);
      }
    }
    var J2 = e2.forwardRef(q);
    function K(e3, r3, t3, n3) {
      var a3 = [].concat(e3).map(function(e4) {
        return g2(e4) ? e4.map(o3).filter(d3) : o3(e4);
      }).filter(d3);
      return g2(e3) ? a3 : a3.flat()[0];
      function o3(e4) {
        return e4 ? e4 instanceof i2.default ? e4 : new i2.default({ date: e4, calendar: r3, locale: t3, format: n3 }) : {};
      }
      function d3(e4) {
        return g2(e4) || e4.isValid;
      }
    }
    z2('.rmdp-visible{visibility:visible}.rmdp-invisible{visibility:hidden}.rmdp-input{border:1px solid #c0c4d6;border-radius:5px;height:22px;margin:1px 0;padding:2px 5px}.rmdp-input:focus{border:1px solid #a4b3c5;box-shadow:0 0 2px #a4b3c5;outline:none!important}.rmdp-button{background-color:#0074d9;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;padding:7px 16px;text-align:center;text-decoration:none;transition:.3s}.rmdp-button:hover{background-color:#143ac5;transition:.4s}.rmdp-button:disabled{background-color:#8798ad}.rmdp-action-button{border-radius:unset;color:#2682d3;float:right;font-weight:700;margin:15px 10px 15px 0}.rmdp-action-button,.rmdp-action-button:hover{background-color:transparent}.rmdp-ep-arrow{overflow:hidden;will-change:transform}.rmdp-ep-arrow:after{background-color:#fff;content:"";height:12px;position:absolute;transform:rotate(45deg);width:12px}.rmdp-ep-shadow:after{box-shadow:0 0 6px #8798ad}.rmdp-ep-border:after{border:1px solid #cfd8e2}.rmdp-ep-arrow[direction=top]{border-bottom:1px solid #fff}.rmdp-ep-arrow[direction=left]{border-right:1px solid #fff}.rmdp-ep-arrow[direction=right]{border-left:1px solid #fff;margin-left:-1px}.rmdp-ep-arrow[direction=bottom]{border-top:1px solid #fff;margin-top:-1.5px}.rmdp-ep-arrow[direction=top]:after{left:4px;top:5px}.rmdp-ep-arrow[direction=bottom]:after{left:4px;top:-6px}.rmdp-ep-arrow[direction=left]:after{left:5px;top:3px}.rmdp-ep-arrow[direction=right]:after{left:-6px;top:3px}');
    var U2 = ["value", "calendar", "locale", "format", "onlyMonthPicker", "onlyYearPicker", "onChange", "range", "multiple", "name", "id", "title", "placeholder", "required", "style", "className", "inputClass", "disabled", "render", "weekDays", "months", "children", "inputMode", "scrollSensitive", "hideOnScroll", "minDate", "maxDate", "formattingIgnoreList", "containerClassName", "calendarPosition", "editable", "onOpen", "onClose", "arrowClassName", "zIndex", "arrow", "fixMainPosition", "onPositionChange", "onPropsChange", "digits", "readOnly", "shadow", "onFocusedDateChange", "type", "weekPicker", "mobileLabels", "onOpenPickNewDate", "mobileButtons", "dateSeparator", "multipleRangeSeparator", "typingTimeout"];
    var $2 = ["label"];
    function G(r3, t3) {
      var n3 = r3.value, d3 = r3.calendar, u3 = r3.locale, p3 = r3.format, m3 = r3.onlyMonthPicker, h3 = r3.onlyYearPicker, v3 = r3.onChange, b3 = r3.range, x3 = void 0 !== b3 && b3, w3 = r3.multiple, k3 = void 0 !== w3 && w3, D3 = r3.name, O3 = r3.id, E3 = r3.title, Y3 = r3.placeholder, M3 = r3.required, P3 = r3.style, S3 = void 0 === P3 ? {} : P3, I3 = r3.className, A3 = void 0 === I3 ? "" : I3, R3 = r3.inputClass, L3 = r3.disabled, F3 = r3.render, W3 = r3.weekDays, z3 = r3.months, H3 = r3.children, q2 = r3.inputMode, K2 = r3.scrollSensitive, G2 = void 0 === K2 || K2, Q2 = r3.hideOnScroll, ee = r3.minDate, re = r3.maxDate, te = r3.formattingIgnoreList, ne = r3.containerClassName, ae = void 0 === ne ? "" : ne, oe = r3.calendarPosition, ie = void 0 === oe ? "bottom-left" : oe, de = r3.editable, le = void 0 === de || de, ue = r3.onOpen, ce = r3.onClose, se = r3.arrowClassName, fe = void 0 === se ? "" : se, pe = r3.zIndex, me = void 0 === pe ? 100 : pe, he = r3.arrow, ye = void 0 === he || he, ge = r3.fixMainPosition, ve = r3.onPositionChange, be = r3.onPropsChange, xe = r3.digits, we = r3.readOnly, ke = r3.shadow, De = void 0 === ke || ke, Oe = r3.onFocusedDateChange, Ee = r3.type, Ye = r3.weekPicker, Me = r3.mobileLabels, Pe = r3.onOpenPickNewDate, Ne = void 0 === Pe || Pe, Se = r3.mobileButtons, Ce = void 0 === Se ? [] : Se, Ie = r3.dateSeparator, je = r3.multipleRangeSeparator, Te = void 0 === je ? "," : je, Ae = r3.typingTimeout, Re = void 0 === Ae ? 700 : Ae, Le = s2(r3, U2), Fe = f2(e2.useState(), 2), Ve = Fe[0], We = Fe[1], Be = f2(e2.useState(), 2), _e = Be[0], ze = Be[1], He = f2(e2.useState(""), 2), qe = He[0], Je = He[1], Ke = f2(e2.useState(false), 2), Ue = Ke[0], $e = Ke[1], Ge = f2(e2.useState(false), 2), Qe = Ge[0], Xe = Ge[1], Ze = e2.useRef(), er = e2.useRef(), rr = e2.useRef(), tr = e2.useRef({ isTyping: false }), nr = Ie || (x3 || Ye ? " ~ " : ", "), ar = arguments[0], or = "string" == typeof A3 && A3.includes("rmdp-mobile"), ir = e2.useCallback(function() {
        if (false !== (null == ce ? void 0 : ce())) {
          var e3 = Z(er);
          if (e3 && e3.forEach(function(e4) {
            return e4.blur();
          }), tr.current.mobile) {
            var r4 = rr.current.parentNode.parentNode;
            r4.classList.remove("rmdp-calendar-container-mobile"), r4.style.position = "absolute", r4.style.visibility = "hidden";
          }
          void 0 !== tr.current.validInputValue && (Je(tr.current.validInputValue), tr.current.validInputValue = void 0), $e(false), Xe(false);
        }
      }, [ce]), dr = [{ type: "button", className: "rmdp-button rmdp-action-button", onClick: function() {
        ze(void 0), ir();
      }, label: cr("CANCEL") }, { type: "button", className: "rmdp-button rmdp-action-button", onClick: function() {
        _e && (pr(_e, true), ze(void 0)), ir();
      }, label: cr("OK") }];
      or && !tr.current.mobile && (tr.current = l2(l2({}, tr.current), {}, { mobile: true })), !or && tr.current.mobile && (tr.current = l2(l2({}, tr.current), {}, { mobile: false })), te = N2(te), p3 = j2(m3, h3, p3);
      var lr, ur = f2(V2(d3, u3), 2);
      return d3 = ur[0], u3 = ur[1], e2.useEffect(function() {
        function e3(e4) {
          if (Ue && !tr.current.mobile) {
            var r5 = [];
            if ([er.current, rr.current].forEach(function(t4) {
              var n4, a3;
              !t4 || t4.contains(e4.target) || e4.target.classList.contains("b-deselect") || null !== (n4 = e4.target.parentNode) && void 0 !== n4 && null !== (n4 = n4.classList) && void 0 !== n4 && null !== (a3 = n4.contains) && void 0 !== a3 && a3.call(n4, "b-deselect") || r5.push(t4);
            }), 2 === r5.length)
              return ir();
            rr.current && rr.current.contains(e4.target) && (Ze.current.removeTransition(), Ze.current.refreshPosition());
          }
        }
        function r4() {
          Q2 && Ue && ir();
        }
        return document.addEventListener("click", e3, false), document.addEventListener("scroll", r4, true), function() {
          document.removeEventListener("click", e3, false), document.removeEventListener("scroll", r4, true);
        };
      }, [ir, t3, Ue, Q2]), e2.useEffect(function() {
        var e3 = n3, r4 = tr.current, t4 = r4.date, a3 = r4.initialValue, o3 = function() {
          return e3[e3.length - 1];
        };
        function c3(e4) {
          if (e4)
            return e4 instanceof i2.default || (e4 = new i2.default({ date: e4, calendar: d3, locale: u3, format: p3 })), e4.calendar !== d3 && e4.setCalendar(d3), e4.set({ weekDays: W3, months: z3, digits: xe, locale: u3, format: p3, ignoreList: JSON.parse(te) }), e4;
        }
        n3 || a3 || !t4 ? a3 && !n3 && (a3 = void 0) : e3 = t4;
        var s3 = "";
        if (x3 || k3 || g2(e3)) {
          var m4 = function(e4) {
            return e4 = e4.map(c3).filter(function(e5) {
              return void 0 !== e5;
            }), x3 && e4.length > 2 && (e4 = [e4[0], o3()]), [e4, X(e4, nr)];
          };
          if (g2(e3) || (e3 = x3 && k3 ? e3 ? [[e3]] : [] : [e3]), k3 && x3)
            e3 = e3.map(function(r5, t5) {
              var n4 = f2(m4(g2(r5) ? r5 : [r5]), 2), a4 = n4[0], o4 = n4[1];
              return s3 += o4 + (t5 < e3.length - 1 ? " ".concat(Te, " ") : ""), a4;
            });
          else {
            var h4 = f2(m4(e3), 2);
            e3 = h4[0], s3 = h4[1];
          }
          s3 = s3.toString().replace(/\s,\s$/, "");
        } else
          g2(e3) && (e3 = o3()), (e3 = c3(e3)) && (s3 = e3.format());
        tr.current.isTyping || Je(s3), tr.current = l2(l2({}, tr.current), {}, { date: e3, separator: nr, initialValue: a3 || n3 }), tr.current.mobile && Ze.current.isOpen ? ze(e3) : We(e3);
      }, [n3, d3, u3, p3, x3, k3, nr, m3, h3, W3, z3, xe, te]), e2.useEffect(function() {
        var e3 = tr.current.selection;
        if (e3) {
          var r4 = Z(er);
          0 !== r4.length && (r4.forEach(function(r5) {
            document.activeElement === r5 && (r5.setSelectionRange(e3, e3), tr.current.selection = void 0);
          }), Ze.current.refreshPosition());
        }
      }, [qe]), (k3 || x3 || g2(Ve) || !le) && (q2 = "none"), a2.default.createElement(o2.default, c2({ ref: function(e3) {
        e3 && (e3.openCalendar = function() {
          return setTimeout(function() {
            return sr();
          }, 10);
        }, e3.closeCalendar = ir, e3.isOpen = Ue && Qe);
        if (Ze.current = e3, t3 instanceof Function)
          return t3(e3);
        t3 && (t3.current = e3);
      }, element: F3 ? a2.default.createElement("div", { ref: er }, e2.isValidElement(F3) ? e2.cloneElement(F3, { value: qe, openCalendar: sr, onFocus: sr, handleValueChange: mr, onChange: mr, locale: u3, separator: nr }) : F3 instanceof Function ? F3(qe, sr, mr, u3, nr) : null) : a2.default.createElement("input", { ref: er, type: Ee || "text", name: D3, id: O3, title: E3, required: M3, onFocus: sr, className: R3 || "rmdp-input", placeholder: Y3, value: qe, onChange: mr, style: S3, autoComplete: "off", disabled: !!L3, inputMode: q2 || (or ? "none" : void 0), readOnly: we }), popper: Ue && a2.default.createElement(J2, c2({ ref: rr, value: _e || Ve, onChange: pr, range: x3, multiple: k3, calendar: d3, locale: u3, format: p3, onlyMonthPicker: m3, onlyYearPicker: h3, className: A3 + (or ? " rmdp-mobile" : ""), weekDays: W3, months: z3, digits: xe, minDate: ee, maxDate: re, formattingIgnoreList: JSON.parse(te), onPropsChange: be, shadow: De, onReady: hr, DatePicker: Ze.current, datePickerProps: ar, onFocusedDateChange: yr, weekPicker: Ye }, Le), H3, or && (lr = [].concat.apply([], ar.plugins || []).some(function(e3) {
        var r4 = e3.props;
        return !(void 0 === r4 ? {} : r4).disabled;
      }), g2(Ce) && a2.default.createElement("div", { className: "rmdp-action-buttons ".concat(_2(u3) ? "rmdp-rtl" : "", " ").concat(lr ? "rmdp-border-top" : "") }, Ce.concat(dr).map(function(e3, r4) {
        var t4 = e3.label, n4 = s2(e3, $2);
        return a2.default.createElement("button", c2({ key: r4 }, n4), t4);
      })))), active: !or && Qe, position: ie, arrow: !or && ye, fixMainPosition: !G2 || ge, zIndex: me, onChange: !or && ve, containerClassName: "rmdp-container ".concat(ae), arrowClassName: ["rmdp-ep-arrow", "rmdp-ep-".concat(De ? "shadow" : "border"), A3, fe].join(" ") }, Le));
      function cr(e3) {
        var r4, t4 = u3 || new i2.default().locale;
        if ("string" != typeof t4.name)
          return e3;
        return (null == Me ? void 0 : Me[e3]) || (null === (r4 = { en: { OK: "OK", CANCEL: "CANCEL" }, fa: { OK: "تأیید", CANCEL: "لغو" }, ar: { OK: "تأكيد", CANCEL: "الغاء" }, hi: { OK: "पुष्टि", CANCEL: "रद्द करें" } }[B(t4)]) || void 0 === r4 ? void 0 : r4[e3]) || e3;
      }
      function sr() {
        if (!L3 && !we && false !== (null == ue ? void 0 : ue())) {
          if (Ne && !n3 && !tr.current.date && !x3 && !k3 && !or) {
            var e3 = new i2.default({ calendar: d3, locale: u3, format: p3, months: z3, weekDays: W3, digits: xe, ignoreList: JSON.parse(te) });
            (!ee || e3 > T2(ee, d3, p3)) && (!re || e3 < T2(re, d3, p3)) && (pr(e3), null == be || be(l2(l2({}, ar), {}, { value: e3 })), tr.current.date = e3);
          }
          var r4 = Z(er);
          or && r4.length > 0 && r4.forEach(function(e4) {
            return e4.blur();
          }), r4.length > 0 || !Ue ? $e(true) : ir();
        }
      }
      function fr(e3) {
        var r4 = "";
        return e3 && (r4 = k3 && x3 && g2(e3) ? e3.map(function(e4) {
          return X(e4, nr);
        }).join(" ".concat(Te, " ")) : X(e3, nr)), r4;
      }
      function pr(e3, r4, t4) {
        if (or && !r4)
          return ze(e3);
        var a3 = fr(e3), o3 = t4 || a3.toString().replace(/\s,\s$/, "");
        return e3 && [].concat(e3).flat().some(function(e4) {
          return ee && e4 < T2(ee, d3, p3) || re && e4 > T2(re, d3, p3);
        }) ? (tr.current.validInputValue = fr(n3 || tr.current.date), Je(o3)) : (tr.current.validInputValue = a3, false === (null == v3 ? void 0 : v3(e3, { validatedValue: a3, input: er.current, isTyping: !!t4 })) ? (Je(qe), false) : (We(e3), Je(o3), void (tr.current = l2(l2({}, tr.current), {}, { date: e3 }))));
      }
      function mr(e3) {
        if (le) {
          tr.current.isTyping = true, setTimeout(function() {
            tr.current.isTyping = false;
          }, Re), tr.current.selection = e3.target.selectionStart;
          var r4 = e3.target.value, t4 = { calendar: d3, locale: u3, format: p3, ignoreList: JSON.parse(te) };
          if (xe = g2(xe) ? xe : u3.digits, !r4)
            return Je(""), pr(null);
          if (xe) {
            var n4, a3, o3 = y2(xe);
            try {
              for (o3.s(); !(n4 = o3.n()).done; ) {
                var c3 = n4.value;
                r4 = r4.replace(new RegExp(c3, "g"), xe.indexOf(c3));
              }
            } catch (e4) {
              o3.e(e4);
            } finally {
              o3.f();
            }
            a3 = g2(Ve) ? k3 && x3 ? (r4 || "").split(Te).filter(Boolean).map(f3) : f3(r4) : s3(r4), pr(g2(Ve) || a3.isValid ? a3 : null, void 0, C2(r4, xe));
          }
        }
        function s3(e4) {
          return /(?=.*Y)(?=.*M)(?=.*D)/.test(p3) ? new i2.default(l2(l2({}, t4), {}, { date: e4 })) : new i2.default(t4).parse(e4);
        }
        function f3(e4) {
          return (e4 || "").split(nr).filter(Boolean).map(function(e5) {
            return s3(e5.trim());
          });
        }
      }
      function hr() {
        if (Xe(true), or) {
          var e3 = rr.current.parentNode.parentNode;
          e3.className = "rmdp-calendar-container-mobile", e3.style.position = "fixed", e3.style.transform = "", setTimeout(function() {
            e3.style.visibility = "visible";
          }, 50);
        }
      }
      function yr(e3, r4) {
        g2(tr.current.date) || !r4 || or || ir(), null == Oe || Oe(e3, r4);
      }
    }
    var Q = e2.forwardRef(G);
    function X(e3, r3) {
      var t3 = [].concat(e3).map(function(e4) {
        return null != e4 && e4.isValid ? e4.format() : "";
      });
      return t3.toString = function() {
        return this.filter(Boolean).join(r3);
      }, t3;
    }
    function Z(e3) {
      return e3.current ? "INPUT" === e3.current.tagName ? [e3.current] : Array.from(e3.current.querySelectorAll("input")) : [];
    }
    Object.defineProperty(exports, "DateObject", { enumerable: true, get: function() {
      return i2.default;
    } }), exports.Calendar = J2, exports.default = Q, exports.getAllDatesInRange = function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r3 = arguments.length > 1 ? arguments[1] : void 0;
      if (!Array.isArray(e3))
        return [];
      var t3 = e3[0], n3 = e3[e3.length - 1], a3 = [];
      if (!(t3 instanceof i2.default && n3 instanceof i2.default && t3.isValid && n3.isValid && !(t3 > n3)))
        return [];
      for (t3 = new i2.default(t3), n3 = new i2.default(n3); t3 <= n3; t3.day++)
        a3.push(r3 ? t3.toDate() : new i2.default(t3));
      return a3;
    }, exports.toDateObject = T2;
  }
});
export default require_build();
//# sourceMappingURL=react-multi-date-picker.js.map
