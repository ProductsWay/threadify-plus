let n,t,e=!1,l=!1;const o={},s=n=>"object"==(n=typeof n)||"function"===n;function i(n){var t,e,l;return null!==(l=null===(e=null===(t=n.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===e?void 0:e.getAttribute("content"))&&void 0!==l?l:void 0}const r=(n,t,...e)=>{let l=null,o=!1,i=!1;const r=[],u=t=>{for(let e=0;e<t.length;e++)l=t[e],Array.isArray(l)?u(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof n&&!s(l))&&(l+=""),o&&i?r[r.length-1].t+=l:r.push(o?c(null,l):l),i=o)};if(u(e),t){const n=t.className||t.class;n&&(t.class="object"!=typeof n?n:Object.keys(n).filter((t=>n[t])).join(" "))}const a=c(n,null);return a.l=t,r.length>0&&(a.o=r),a},c=(n,t)=>({i:0,u:n,t,h:null,o:null,l:null}),u={},a=new WeakMap,f=n=>"sc-"+n.$,d=(n,t,e,l,o,i)=>{if(e!==l){let r=W(n,t);if(t.toLowerCase(),"class"===t){const t=n.classList,o=$(e),s=$(l);t.remove(...o.filter((n=>n&&!s.includes(n)))),t.add(...s.filter((n=>n&&!o.includes(n))))}else{const c=s(l);if((r||c&&null!==l)&&!o)try{if(n.tagName.includes("-"))n[t]=l;else{const o=null==l?"":l;"list"===t?r=!1:null!=e&&n[t]==o||(n[t]=o)}}catch(n){}null==l||!1===l?!1===l&&""!==n.getAttribute(t)||n.removeAttribute(t):(!r||4&i||o)&&!c&&n.setAttribute(t,l=!0===l?"":l)}}},h=/\s/,$=n=>n?n.split(h):[],p=(n,t,e,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,i=n&&n.l||o,r=t.l||o;for(l in i)l in r||d(s,l,i[l],void 0,e,t.i);for(l in r)d(s,l,i[l],r[l],e,t.i)},m=(t,l,o)=>{const s=l.o[o];let i,r,c=0;if(null!==s.t)i=s.h=z.createTextNode(s.t);else{if(e||(e="svg"===s.u),i=s.h=z.createElementNS(e?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s.u),e&&"foreignObject"===s.u&&(e=!1),p(null,s,e),null!=n&&i["s-si"]!==n&&i.classList.add(i["s-si"]=n),s.o)for(c=0;c<s.o.length;++c)r=m(t,s,c),r&&i.appendChild(r);"svg"===s.u?e=!1:"foreignObject"===i.tagName&&(e=!0)}return i},y=(n,e,l,o,s,i)=>{let r,c=n;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=m(null,l,s),r&&(o[s].h=r,c.insertBefore(r,e)))},w=(n,t,e,l)=>{for(;t<=e;++t)(l=n[t])&&l.h.remove()},b=(n,t)=>n.u===t.u,v=(n,t)=>{const l=t.h=n.h,o=n.o,s=t.o,i=t.u,r=t.t;null===r?(e="svg"===i||"foreignObject"!==i&&e,p(n,t,e),null!==o&&null!==s?((n,t,e,l)=>{let o,s=0,i=0,r=t.length-1,c=t[0],u=t[r],a=l.length-1,f=l[0],d=l[a];for(;s<=r&&i<=a;)null==c?c=t[++s]:null==u?u=t[--r]:null==f?f=l[++i]:null==d?d=l[--a]:b(c,f)?(v(c,f),c=t[++s],f=l[++i]):b(u,d)?(v(u,d),u=t[--r],d=l[--a]):b(c,d)?(v(c,d),n.insertBefore(c.h,u.h.nextSibling),c=t[++s],d=l[--a]):b(u,f)?(v(u,f),n.insertBefore(u.h,c.h),u=t[--r],f=l[++i]):(o=m(t&&t[i],e,i),f=l[++i],o&&c.h.parentNode.insertBefore(o,c.h));s>r?y(n,null==l[a+1]?null:l[a+1].h,e,l,i,a):i>a&&w(t,s,r)})(l,o,t,s):null!==s?(null!==n.t&&(l.textContent=""),y(l,null,t,s,0,s.length-1)):null!==o&&w(o,0,o.length-1),e&&"svg"===i&&(e=!1)):n.t!==r&&(l.data=r)},g=(n,t)=>{t&&!n.p&&t["s-p"]&&t["s-p"].push(new Promise((t=>n.p=t)))},S=(n,t)=>{if(n.i|=16,!(4&n.i))return g(n,n.m),Z((()=>j(n,t)));n.i|=512},j=(n,t)=>{const e=n.v;return x(void 0,(()=>O(n,e,t)))},O=async(n,t,e)=>{const l=n.g,o=l["s-rc"];e&&(n=>{const t=n.S,e=n.g,l=t.i,o=((n,t)=>{var e;let l=f(t);const o=V.get(l);if(n=11===n.nodeType?n:z,o)if("string"==typeof o){let t,s=a.get(n=n.head||n);if(s||a.set(n,s=new Set),!s.has(l)){{t=z.createElement("style"),t.innerHTML=o;const l=null!==(e=B.j)&&void 0!==e?e:i(z);null!=l&&t.setAttribute("nonce",l),n.insertBefore(t,n.querySelector("link"))}s&&s.add(l)}}else n.adoptedStyleSheets.includes(o)||(n.adoptedStyleSheets=[...n.adoptedStyleSheets,o]);return l})(e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&l&&(e["s-sc"]=o,e.classList.add(o+"-h"))})(n);M(n,t),o&&(o.map((n=>n())),l["s-rc"]=void 0);{const t=l["s-p"],e=()=>k(n);0===t.length?e():(Promise.all(t).then(e),n.i|=4,t.length=0)}},M=(e,l)=>{try{l=l.render(),e.i&=-17,e.i|=2,((e,l)=>{const o=e.g,s=e.O||c(null,null),i=(n=>n&&n.u===u)(l)?l:r(null,null,l);t=o.tagName,i.u=null,i.i|=4,e.O=i,i.h=s.h=o.shadowRoot||o,n=o["s-sc"],v(s,i)})(e,l)}catch(n){q(n,e.g)}return null},k=n=>{const t=n.g,e=n.m;64&n.i||(n.i|=64,P(t),n.M(t),e||C()),n.p&&(n.p(),n.p=void 0),512&n.i&&Y((()=>S(n,!1))),n.i&=-517},C=()=>{P(z.documentElement),Y((()=>(n=>{const t=B.ce("appload",{detail:{namespace:"sharing-btn"}});return n.dispatchEvent(t),t})(_)))},x=(n,t)=>n&&n.then?n.then(t):t(),P=n=>n.classList.add("hydrated"),E=(n,t,e)=>{if(t.k){const l=Object.entries(t.k),o=n.prototype;if(l.map((([n,[l]])=>{(31&l||2&e&&32&l)&&Object.defineProperty(o,n,{get(){return((n,t)=>L(this).C.get(t))(0,n)},set(e){((n,t,e,l)=>{const o=L(n),i=o.C.get(t),r=o.i,c=o.v;e=((n,t)=>null==n||s(n)?n:4&t?"false"!==n&&(""===n||!!n):1&t?n+"":n)(e,l.k[t][0]),8&r&&void 0!==i||e===i||Number.isNaN(i)&&Number.isNaN(e)||(o.C.set(t,e),c&&2==(18&r)&&S(o,!1))})(this,n,e,t)},configurable:!0,enumerable:!0})})),1&e){const t=new Map;o.attributeChangedCallback=function(n,e,l){B.jmp((()=>{const e=t.get(n);if(this.hasOwnProperty(e))l=this[e],delete this[e];else if(o.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==l)return;this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},n.observedAttributes=l.filter((([n,t])=>15&t[0])).map((([n,e])=>{const l=e[1]||n;return t.set(l,n),l}))}}return n},N=(n,t={})=>{var e;const l=[],o=t.exclude||[],s=_.customElements,r=z.head,c=r.querySelector("meta[charset]"),u=z.createElement("style"),a=[];let d,h=!0;Object.assign(B,t),B.P=new URL(t.resourcesUrl||"./",z.baseURI).href,n.map((n=>{n[1].map((t=>{const e={i:t[0],$:t[1],k:t[2],N:t[3]};e.k=t[2];const i=e.$,r=class extends HTMLElement{constructor(n){super(n),U(n=this,e),1&e.i&&n.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?a.push(this):B.jmp((()=>(n=>{if(0==(1&B.i)){const t=L(n),e=t.S,l=()=>{};if(!(1&t.i)){t.i|=1;{let e=n;for(;e=e.parentNode||e.host;)if(e["s-p"]){g(t,t.m=e);break}}e.k&&Object.entries(e.k).map((([t,[e]])=>{if(31&e&&n.hasOwnProperty(t)){const e=n[t];delete n[t],n[t]=e}})),(async(n,t,e,l,o)=>{if(0==(32&t.i)){{if(t.i|=32,(o=H(e)).then){const n=()=>{};o=await o,n()}o.isProxied||(E(o,e,2),o.isProxied=!0);const n=()=>{};t.i|=8;try{new o(t)}catch(n){q(n)}t.i&=-9,n()}if(o.style){let n=o.style;const t=f(e);if(!V.has(t)){const l=()=>{};((n,t,e)=>{let l=V.get(n);G&&e?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,V.set(n,l)})(t,n,!!(1&e.i)),l()}}}const s=t.m,i=()=>S(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,e)}l()}})(this)))}disconnectedCallback(){B.jmp((()=>{}))}componentOnReady(){return L(this).T}};e.A=n[0],o.includes(i)||s.get(i)||(l.push(i),s.define(i,E(r,e,1)))}))}));{u.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles","");const n=null!==(e=B.j)&&void 0!==e?e:i(z);null!=n&&u.setAttribute("nonce",n),r.insertBefore(u,c?c.nextSibling:r.firstChild)}h=!1,a.length?a.map((n=>n.connectedCallback())):B.jmp((()=>d=setTimeout(C,30)))},T=n=>B.j=n,A=new WeakMap,L=n=>A.get(n),R=(n,t)=>A.set(t.v=n,t),U=(n,t)=>{const e={i:0,g:n,S:t,C:new Map};return e.T=new Promise((n=>e.M=n)),n["s-p"]=[],n["s-rc"]=[],A.set(n,e)},W=(n,t)=>t in n,q=(n,t)=>(0,console.error)(n,t),F=new Map,H=n=>{const t=n.$.replace(/-/g,"_"),e=n.A,l=F.get(e);return l?l[t]:import(`./${e}.entry.js`).then((n=>(F.set(e,n),n[t])),q)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},V=new Map,_="undefined"!=typeof window?window:{},z=_.document||{head:{}},B={i:0,P:"",jmp:n=>n(),raf:n=>requestAnimationFrame(n),ael:(n,t,e,l)=>n.addEventListener(t,e,l),rel:(n,t,e,l)=>n.removeEventListener(t,e,l),ce:(n,t)=>new CustomEvent(n,t)},D=n=>Promise.resolve(n),G=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(n){}return!1})(),I=[],J=[],K=(n,t)=>e=>{n.push(e),l||(l=!0,t&&4&B.i?Y(X):B.raf(X))},Q=n=>{for(let t=0;t<n.length;t++)try{n[t](performance.now())}catch(n){q(n)}n.length=0},X=()=>{Q(I),Q(J),(l=I.length>0)&&B.raf(X)},Y=n=>D().then(n),Z=K(J,!0);export{N as b,r as h,D as p,R as r,T as s}