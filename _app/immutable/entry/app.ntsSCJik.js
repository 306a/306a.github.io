const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B50MVidj.js","../chunks/disclose-version.Di3rFgGl.js","../chunks/runtime.DzPMea9v.js","../chunks/i18n.CxouymN6.js","../chunks/legacy.3rYuaEWk.js","../chunks/entry.g7SpT4Gu.js","../chunks/stores.ByuzFsUS.js","../chunks/svelte-head.C78rSYAV.js","../chunks/if.DUNXWx6m.js","../chunks/lifecycle.BnvoBSA6.js","../chunks/props.C0QeUgKl.js","../chunks/attributes.WQuUoujG.js","../assets/0.BrvpjkSQ.css","../nodes/1.l6A1zjBV.js","../chunks/render.BkEqPQ_M.js","../nodes/2.S2se-DTP.js","../assets/2.Gwu9frA6.css","../nodes/3._DrtKDzc.js","../nodes/4.j38V3YrL.js","../chunks/forms.CXDLSuUW.js","../nodes/5.DxAfdknt.js","../nodes/6.Bhzsu57K.js"])))=>i.map(i=>d[i]);
var F=e=>{throw TypeError(e)};var U=(e,t,r)=>t.has(e)||F("Cannot "+r);var u=(e,t,r)=>(U(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(U(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{i as M}from"../chunks/i18n.CxouymN6.js";import{h as Y,d as X,e as Z,E as $,m as tt,o as et,n as rt,ab as st,ar as at,x as Q,as as nt,S as ot,A as v,a6 as it,Q as x,at as ct,ae as ut,a9 as lt,w as S,au as ft,a3 as dt,v as W,p as mt,u as _t,f as w,s as ht,a as vt,av as gt,aw as p,c as yt,t as Et,r as Pt,C}from"../chunks/runtime.DzPMea9v.js";import{h as Rt,m as bt,u as kt,s as wt}from"../chunks/render.BkEqPQ_M.js";import{a as b,t as z,c as D,d as xt}from"../chunks/disclose-version.Di3rFgGl.js";import{i as I}from"../chunks/if.DUNXWx6m.js";import{p as V,a as At}from"../chunks/props.C0QeUgKl.js";function B(e,t,r){Y&&X();var i=e,n,o;Z(()=>{n!==(n=t())&&(o&&(rt(o),o=null),n&&(o=tt(()=>r(i,n))))},$),Y&&(i=et)}function G(e,t){return e===t||(e==null?void 0:e[ot])===t}function j(e={},t,r,i){return st(()=>{var n,o;return at(()=>{n=o,o=[],Q(()=>{e!==r(...o)&&(t(e,...o),n&&G(r(...n),e)&&t(null,...n))})}),()=>{nt(()=>{o&&G(r(...o),e)&&t(null,...o)})}}),e}function Lt(e){return class extends Tt{constructor(t){super({component:e,...t})}}}var g,f;class Tt{constructor(t){T(this,g);T(this,f);var o;var r=new Map,i=(a,s)=>{var d=lt(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===it?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return x(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});O(this,f,(t.hydrate?Rt:bt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ct(),O(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||ut(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{kt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;function Ot(e){S===null&&ft(),dt&&S.l!==null?St(S).m.push(e):W(()=>{const t=Q(e);if(typeof t=="function")return t})}function St(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const pt="modulepreload",Ct=function(e,t){return new URL(e,t).href},N={},P=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=Ct(l,i),l in N)return;N[l]=!0;const y=l.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const h=a[m];if(h.href===l&&(!y||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${A}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":pt,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,h)=>{c.addEventListener("load",m),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Dt=M.reroute(),Wt={};var It=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Vt=z("<!> <!>",1);function Bt(e,t){mt(t,!0);let r=V(t,"components",23,()=>[]),i=V(t,"data_0",3,null),n=V(t,"data_1",3,null);_t(()=>t.stores.page.set(t.page)),W(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=p(!1),a=p(!1),s=p(null);Ot(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(x(a,!0),gt().then(()=>{x(s,At(document.title||"untitled page"))}))});return x(o,!0),E});const d=C(()=>t.constructors[1]);var l=Vt(),y=w(l);I(y,()=>t.constructors[1],E=>{var c=D();const m=C(()=>t.constructors[0]);var h=w(c);B(h,()=>v(m),(R,L)=>{j(L(R,{get data(){return i()},get form(){return t.form},children:(_,jt)=>{var q=D(),H=w(q);B(H,()=>v(d),(J,K)=>{j(K(J,{get data(){return n()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),b(_,q)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(E,c)},E=>{var c=D();const m=C(()=>t.constructors[0]);var h=w(c);B(h,()=>v(m),(R,L)=>{j(L(R,{get data(){return i()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(E,c)});var A=ht(y,2);I(A,()=>v(o),E=>{var c=It(),m=yt(c);I(m,()=>v(a),h=>{var R=xt();Et(()=>wt(R,v(s))),b(h,R)}),Pt(c),b(E,c)}),b(e,l),vt()}const zt=Lt(Bt),Ht=[()=>P(()=>import("../nodes/0.B50MVidj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>P(()=>import("../nodes/1.l6A1zjBV.js"),__vite__mapDeps([13,1,2,4,14,7,9,6,5]),import.meta.url),()=>P(()=>import("../nodes/2.S2se-DTP.js"),__vite__mapDeps([15,1,2,4,14,7,8,11,9,16]),import.meta.url),()=>P(()=>import("../nodes/3._DrtKDzc.js"),__vite__mapDeps([17,1,2,4]),import.meta.url),()=>P(()=>import("../nodes/4.j38V3YrL.js"),__vite__mapDeps([18,1,2,14,7,19,5]),import.meta.url),()=>P(()=>import("../nodes/5.DxAfdknt.js"),__vite__mapDeps([20,1,2,14,7,19,5]),import.meta.url),()=>P(()=>import("../nodes/6.Bhzsu57K.js"),__vite__mapDeps([21,1,2,4,14,7,9,6,5,3]),import.meta.url)],Jt=[],Kt={"/":[2],"/demo":[3],"/demo/lucia":[-5],"/demo/lucia/login":[-6],"/demo/paraglide":[6]},Mt={handleError:({error:e})=>{console.error(e)},reroute:Dt||(()=>{})};export{Kt as dictionary,Mt as hooks,Wt as matchers,Ht as nodes,zt as root,Jt as server_loads};
