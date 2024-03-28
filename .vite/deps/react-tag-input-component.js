import {
  require_react
} from "./chunk-YWBCN2AJ.js";
import {
  __toESM
} from "./chunk-7TNKEIRG.js";

// node_modules/react-tag-input-component/dist/esm/index.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
function u(e, { insertAt: o } = {}) {
  if (!e || typeof document > "u")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
  i.type = "text/css", o === "top" && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
}
u(`.rti--container *{box-sizing:border-box;transition:all .2s ease}.rti--container{--rti-bg: #fff;--rti-border: #ccc;--rti-main: #3182ce;--rti-radius: .375rem;--rti-s: .5rem;--rti-tag: #edf2f7;--rti-tag-remove: #e53e3e;--rti-tag-padding: .15rem .25rem;align-items:center;background:var(--rti-bg);border:1px solid var(--rti-border);border-radius:var(--rti-radius);display:flex;flex-wrap:wrap;gap:var(--rti-s);line-height:1.4;padding:var(--rti-s)}.rti--container:focus-within{border-color:var(--rti-main);box-shadow:var(--rti-main) 0 0 0 1px}.rti--input{border:0;outline:0;font-size:inherit;line-height:inherit;width:50%}.rti--tag{align-items:center;background:var(--rti-tag);border-radius:var(--rti-radius);display:inline-flex;justify-content:center;padding:var(--rti-tag-padding)}.rti--tag button{background:none;border:0;border-radius:50%;cursor:pointer;line-height:inherit;padding:0 var(--rti-s)}.rti--tag button:hover{color:var(--rti-tag-remove)}
`);
function c(e, o) {
  let t = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    t.current ? e() : t.current = true;
  }, o);
}
function d(...e) {
  return e.filter((o) => o).join(" ");
}
function m({ text: e, remove: o, disabled: t, className: i }) {
  let g = (l) => {
    l.stopPropagation(), o(e);
  };
  return import_react3.default.createElement("span", { className: d("rti--tag", i) }, import_react3.default.createElement("span", null, e), !t && import_react3.default.createElement("button", { type: "button", onClick: g, "aria-label": `remove ${e}` }, "✕"));
}
var S = ["Enter"];
var q = ({ name: e, placeHolder: o, value: t, onChange: i, onBlur: g, separators: l, disableBackspaceRemove: T, onExisting: v, onRemoved: y, disabled: h, isEditOnRemove: k, beforeAddValidate: x, onKeyUp: E, classNames: s }) => {
  let [n, p] = (0, import_react.useState)(t || []);
  c(() => {
    i && i(n);
  }, [n]), c(() => {
    JSON.stringify(t) !== JSON.stringify(n) && p(t);
  }, [t]);
  let w = (r) => {
    r.stopPropagation();
    let a = r.target.value;
    if (!a && !T && n.length && r.key === "Backspace" && (r.target.value = k ? `${n.at(-1)} ` : "", p([...n.slice(0, -1)])), a && (l || S).includes(r.key)) {
      if (r.preventDefault(), x && !x(a, n))
        return;
      if (n.includes(a)) {
        v && v(a);
        return;
      }
      p([...n, a]), r.target.value = "";
    }
  }, B = (r) => {
    p(n.filter((a) => a !== r)), y && y(r);
  };
  return import_react.default.createElement("div", { "aria-labelledby": e, className: "rti--container" }, n.map((r) => import_react.default.createElement(m, { key: r, className: s == null ? void 0 : s.tag, text: r, remove: B, disabled: h })), import_react.default.createElement("input", { className: d("rti--input", s == null ? void 0 : s.input), type: "text", name: e, placeholder: o, onKeyDown: w, onBlur: g, disabled: h, onKeyUp: E }));
};
export {
  q as TagsInput
};
//# sourceMappingURL=react-tag-input-component.js.map
