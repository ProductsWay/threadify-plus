function f() {
}
function w(t) {
  return t();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(w);
}
function $(t) {
  return typeof t == "function";
}
function P(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function R(t) {
  return Object.keys(t).length === 0;
}
function N(t, e) {
  t.appendChild(e);
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function H(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function O(t) {
  return document.createElement(t);
}
function B(t) {
  return document.createTextNode(t);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function V(t) {
  return Array.from(t.childNodes);
}
function q(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function z(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let k;
function m(t) {
  k = t;
}
const d = [], S = [];
let h = [];
const T = [], D = /* @__PURE__ */ Promise.resolve();
let x = !1;
function F() {
  x || (x = !0, D.then(_));
}
function y(t) {
  h.push(t);
}
const b = /* @__PURE__ */ new Set();
let u = 0;
function _() {
  if (u !== 0)
    return;
  const t = k;
  do {
    try {
      for (; u < d.length; ) {
        const e = d[u];
        u++, m(e), G(e.$$);
      }
    } catch (e) {
      throw d.length = 0, u = 0, e;
    }
    for (m(null), d.length = 0, u = 0; S.length; )
      S.pop()();
    for (let e = 0; e < h.length; e += 1) {
      const n = h[e];
      b.has(n) || (b.add(n), n());
    }
    h.length = 0;
  } while (d.length);
  for (; T.length; )
    T.pop()();
  x = !1, b.clear(), m(t);
}
function G(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(y);
  }
}
function I(t) {
  const e = [], n = [];
  h.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), h = e;
}
const J = /* @__PURE__ */ new Set();
function K(t, e) {
  t && t.i && (J.delete(t), t.i(e));
}
function Q(t, e, n, r) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), r || y(() => {
    const s = t.$$.on_mount.map(w).filter($);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : g(s), t.$$.on_mount = [];
  }), l.forEach(y);
}
function W(t, e) {
  const n = t.$$;
  n.fragment !== null && (I(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function X(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), F(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(t, e, n, r, i, l, s, v = [-1]) {
  const p = k;
  m(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: f,
    not_equal: i,
    bound: A(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (p ? p.$$.context : [])),
    // everything else
    callbacks: A(),
    dirty: v,
    skip_bound: !1,
    root: e.target || p.$$.root
  };
  s && s(o.root);
  let E = !1;
  if (o.ctx = n ? n(t, e.props || {}, (a, C, ...j) => {
    const U = j.length ? j[0] : C;
    return o.ctx && i(o.ctx[a], o.ctx[a] = U) && (!o.skip_bound && o.bound[a] && o.bound[a](U), E && X(t, a)), C;
  }) : [], o.update(), E = !0, g(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = V(e.target);
      o.fragment && o.fragment.l(a), a.forEach(H);
    } else
      o.fragment && o.fragment.c();
    e.intro && K(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), _();
  }
  m(p);
}
let L;
typeof HTMLElement == "function" && (L = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(w).filter($);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    g(this.$$.on_disconnect);
  }
  $destroy() {
    W(this, 1), this.$destroy = f;
  }
  $on(t, e) {
    if (!$(e))
      return f;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !R(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function Z(t) {
  let e, n, r;
  return {
    c() {
      e = O("div"), n = O("a"), r = B(
        /*url*/
        t[0]
      ), this.c = f, c(n, "class", "link"), c(
        n,
        "href",
        /*url*/
        t[0]
      ), c(n, "target", "_blank"), c(n, "rel", "noopener noreferrer"), c(e, "role", "contentinfo"), c(e, "class", "preview-url"), c(
        e,
        "data-tooltip",
        /*originalUrl*/
        t[1]
      );
    },
    m(i, l) {
      M(i, e, l), N(e, n), N(n, r);
    },
    p(i, [l]) {
      l & /*url*/
      1 && q(
        r,
        /*url*/
        i[0]
      ), l & /*url*/
      1 && c(
        n,
        "href",
        /*url*/
        i[0]
      );
    },
    i: f,
    o: f,
    d(i) {
      i && H(e);
    }
  };
}
function tt(t, e, n) {
  let { url: r } = e, { shortened: i = "no" } = e;
  const l = r;
  return i === "yes" && (async () => {
    const o = await (await fetch("https://twt-decode-url.productsway.com?url=" + r)).json();
    n(0, r = o.url);
  })(), t.$$set = (s) => {
    "url" in s && n(0, r = s.url), "shortened" in s && n(2, i = s.shortened);
  }, [r, l, i];
}
class et extends L {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = "[data-tooltip]{position:relative;display:inline-block}[data-tooltip]::before{content:attr(data-tooltip);position:absolute;bottom:100%;visibility:hidden;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px;min-width:100px}[data-tooltip]:hover::before{visibility:visible}.preview-url{text-align:center;padding:1em;max-width:240px;margin:0 auto}.link{display:inline-block;padding:10px 20px;border-radius:5px;background:linear-gradient(to right, blue, purple);color:white;text-decoration:none;transition:transform 0.3s}@media(max-width: 640px){.link{max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}.link:hover{transform:scale(1.1)}@media(min-width: 640px){.preview-url{max-width:none}}", this.shadowRoot.appendChild(n), Y(
      this,
      {
        target: this.shadowRoot,
        props: z(this.attributes),
        customElement: !0
      },
      tt,
      Z,
      P,
      { url: 0, shortened: 2 },
      null
    ), e && (e.target && M(e.target, this, e.anchor), e.props && (this.$set(e.props), _()));
  }
  static get observedAttributes() {
    return ["url", "shortened"];
  }
  get url() {
    return this.$$.ctx[0];
  }
  set url(e) {
    this.$$set({ url: e }), _();
  }
  get shortened() {
    return this.$$.ctx[2];
  }
  set shortened(e) {
    this.$$set({ shortened: e }), _();
  }
}
customElements.define("preview-url", et);
