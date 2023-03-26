function h() {
}
function w(t) {
  return t();
}
function U() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(w);
}
function b(t) {
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
function l(t, e, n) {
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
let _ = [];
const T = [], D = /* @__PURE__ */ Promise.resolve();
let y = !1;
function F() {
  y || (y = !0, D.then(p));
}
function x(t) {
  _.push(t);
}
const $ = /* @__PURE__ */ new Set();
let f = 0;
function p() {
  if (f !== 0)
    return;
  const t = k;
  do {
    try {
      for (; f < d.length; ) {
        const e = d[f];
        f++, m(e), G(e.$$);
      }
    } catch (e) {
      throw d.length = 0, f = 0, e;
    }
    for (m(null), d.length = 0, f = 0; S.length; )
      S.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      $.has(n) || ($.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; T.length; )
    T.pop()();
  y = !1, $.clear(), m(t);
}
function G(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
function I(t) {
  const e = [], n = [];
  _.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), _ = e;
}
const J = /* @__PURE__ */ new Set();
function K(t, e) {
  t && t.i && (J.delete(t), t.i(e));
}
function Q(t, e, n, r) {
  const { fragment: o, after_update: i } = t.$$;
  o && o.m(e, n), r || x(() => {
    const u = t.$$.on_mount.map(w).filter(b);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : g(u), t.$$.on_mount = [];
  }), i.forEach(x);
}
function W(t, e) {
  const n = t.$$;
  n.fragment !== null && (I(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function X(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), F(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(t, e, n, r, o, i, u, E = [-1]) {
  const a = k;
  m(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: h,
    not_equal: o,
    bound: U(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: U(),
    dirty: E,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  u && u(s.root);
  let v = !1;
  if (s.ctx = n ? n(t, e.props || {}, (c, C, ...j) => {
    const A = j.length ? j[0] : C;
    return s.ctx && o(s.ctx[c], s.ctx[c] = A) && (!s.skip_bound && s.bound[c] && s.bound[c](A), v && X(t, c)), C;
  }) : [], s.update(), v = !0, g(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = V(e.target);
      s.fragment && s.fragment.l(c), c.forEach(H);
    } else
      s.fragment && s.fragment.c();
    e.intro && K(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), p();
  }
  m(a);
}
let L;
typeof HTMLElement == "function" && (L = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(w).filter(b);
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
    W(this, 1), this.$destroy = h;
  }
  $on(t, e) {
    if (!b(e))
      return h;
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
      ), this.c = h, l(n, "class", "link"), l(
        n,
        "href",
        /*url*/
        t[0]
      ), l(n, "target", "_blank"), l(n, "rel", "noopener noreferrer"), l(e, "role", "contentinfo"), l(e, "class", "preview-url");
    },
    m(o, i) {
      M(o, e, i), N(e, n), N(n, r);
    },
    p(o, [i]) {
      i & /*url*/
      1 && q(
        r,
        /*url*/
        o[0]
      ), i & /*url*/
      1 && l(
        n,
        "href",
        /*url*/
        o[0]
      );
    },
    i: h,
    o: h,
    d(o) {
      o && H(e);
    }
  };
}
function tt(t, e, n) {
  let { url: r } = e, { shortened: o = "no" } = e;
  return o === "yes" && (async () => {
    const a = await (await fetch("https://twt-decode-url.productsway.com?url=" + r)).json();
    n(0, r = a.url);
  })(), t.$$set = (i) => {
    "url" in i && n(0, r = i.url), "shortened" in i && n(1, o = i.shortened);
  }, [r, o];
}
class et extends L {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".preview-url{text-align:center;padding:1em;max-width:240px;margin:0 auto}.link{display:inline-block;padding:10px 20px;border-radius:5px;background:linear-gradient(to right, blue, purple);color:white;text-decoration:none;transition:transform 0.3s}.link:hover{transform:scale(1.1)}@media(min-width: 640px){.preview-url{max-width:none}}", this.shadowRoot.appendChild(n), Y(
      this,
      {
        target: this.shadowRoot,
        props: z(this.attributes),
        customElement: !0
      },
      tt,
      Z,
      P,
      { url: 0, shortened: 1 },
      null
    ), e && (e.target && M(e.target, this, e.anchor), e.props && (this.$set(e.props), p()));
  }
  static get observedAttributes() {
    return ["url", "shortened"];
  }
  get url() {
    return this.$$.ctx[0];
  }
  set url(e) {
    this.$$set({ url: e }), p();
  }
  get shortened() {
    return this.$$.ctx[1];
  }
  set shortened(e) {
    this.$$set({ shortened: e }), p();
  }
}
customElements.define("preview-url", et);
