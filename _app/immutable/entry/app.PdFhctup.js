const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BxhWIsS6.js","../chunks/disclose-version.B5gKXr-b.js","../chunks/runtime.CxITA9n6.js","../chunks/i18n.Bn3qCzfB.js","../chunks/legacy.CAAz0Voe.js","../chunks/entry.Nfe_iL7R.js","../chunks/stores.Ckli_ZVC.js","../chunks/svelte-head.CksWz14-.js","../chunks/props.RykXqkSf.js","../chunks/lifecycle.CSdvwG0y.js","../assets/0.BReRwCA9.css","../nodes/1.DS2l14KU.js","../chunks/render.BbkPQ0_k.js","../nodes/2.DrmELw3I.js","../nodes/3.YIoiCp_i.js","../nodes/4.BaeqQxGs.js","../chunks/forms.m2hQ65F6.js","../nodes/5.D5lCqaro.js","../nodes/6.BQDEogbq.js"])))=>i.map(i=>d[i]);
var F=e=>{throw TypeError(e)};var Y=(e,t,r)=>t.has(e)||F("Cannot "+r);var u=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(Y(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{i as K}from"../chunks/i18n.Bn3qCzfB.js";import{q as U,Q as M,o as Z,Y as $,W as tt,z as et,X as rt,B as st,ao as at,e as G,ap as nt,S as ot,i as v,a8 as it,F as x,aq as ct,ab as ut,D as lt,d as S,ar as ft,a5 as dt,b as N,p as mt,u as _t,f as w,s as ht,a as vt,as as gt,at as p,c as yt,t as Et,r as Pt,k as C}from"../chunks/runtime.CxITA9n6.js";import{h as Rt,m as bt,u as kt,s as wt}from"../chunks/render.BbkPQ0_k.js";import{a as b,t as Q,c as D,d as xt}from"../chunks/disclose-version.B5gKXr-b.js";import{p as I,i as V,a as At}from"../chunks/props.RykXqkSf.js";function q(e,t,r){U&&M();var i=e,n,o;Z(()=>{n!==(n=t())&&(o&&(rt(o),o=null),n&&(o=tt(()=>r(i,n))))},$),U&&(i=et)}function W(e,t){return e===t||(e==null?void 0:e[ot])===t}function B(e={},t,r,i){return st(()=>{var n,o;return at(()=>{n=o,o=[],G(()=>{e!==r(...o)&&(t(e,...o),n&&W(r(...n),e)&&t(null,...n))})}),()=>{nt(()=>{o&&W(r(...o),e)&&t(null,...o)})}}),e}function Lt(e){return class extends Tt{constructor(t){super({component:e,...t})}}}var g,f;class Tt{constructor(t){T(this,g);T(this,f);var o;var r=new Map,i=(a,s)=>{var d=lt(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===it?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return x(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});O(this,f,(t.hydrate?Rt:bt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ct(),O(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||ut(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{kt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;function Ot(e){S===null&&ft(),dt&&S.l!==null?St(S).m.push(e):N(()=>{const t=G(e);if(typeof t=="function")return t})}function St(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const pt="modulepreload",Ct=function(e,t){return new URL(e,t).href},z={},P=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=Ct(l,i),l in z)return;z[l]=!0;const y=l.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const h=a[m];if(h.href===l&&(!y||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${A}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":pt,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,h)=>{c.addEventListener("load",m),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Dt=K.reroute(),Gt={};var It=Q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Vt=Q("<!> <!>",1);function qt(e,t){mt(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),n=I(t,"data_1",3,null);_t(()=>t.stores.page.set(t.page)),N(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=p(!1),a=p(!1),s=p(null);Ot(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(x(a,!0),gt().then(()=>{x(s,At(document.title||"untitled page"))}))});return x(o,!0),E});const d=C(()=>t.constructors[1]);var l=Vt(),y=w(l);V(y,()=>t.constructors[1],E=>{var c=D();const m=C(()=>t.constructors[0]);var h=w(c);q(h,()=>v(m),(R,L)=>{B(L(R,{get data(){return i()},get form(){return t.form},children:(_,Bt)=>{var j=D(),X=w(j);q(X,()=>v(d),(H,J)=>{B(J(H,{get data(){return n()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),b(_,j)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(E,c)},E=>{var c=D();const m=C(()=>t.constructors[0]);var h=w(c);q(h,()=>v(m),(R,L)=>{B(L(R,{get data(){return i()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(E,c)});var A=ht(y,2);V(A,()=>v(o),E=>{var c=It(),m=yt(c);V(m,()=>v(a),h=>{var R=xt();Et(()=>wt(R,v(s))),b(h,R)}),Pt(c),b(E,c)}),b(e,l),vt()}const Nt=Lt(qt),Qt=[()=>P(()=>import("../nodes/0.BxhWIsS6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>P(()=>import("../nodes/1.DS2l14KU.js"),__vite__mapDeps([11,1,2,4,12,7,9,6,5]),import.meta.url),()=>P(()=>import("../nodes/2.DrmELw3I.js"),__vite__mapDeps([13,1,2,4]),import.meta.url),()=>P(()=>import("../nodes/3.YIoiCp_i.js"),__vite__mapDeps([14,1,2,4]),import.meta.url),()=>P(()=>import("../nodes/4.BaeqQxGs.js"),__vite__mapDeps([15,1,2,12,7,16,5]),import.meta.url),()=>P(()=>import("../nodes/5.D5lCqaro.js"),__vite__mapDeps([17,1,2,12,7,16,5]),import.meta.url),()=>P(()=>import("../nodes/6.BQDEogbq.js"),__vite__mapDeps([18,1,2,4,12,7,9,6,5,3]),import.meta.url)],Xt=[],Ht={"/":[2],"/demo":[3],"/demo/lucia":[-5],"/demo/lucia/login":[-6],"/demo/paraglide":[6]},Jt={handleError:({error:e})=>{console.error(e)},reroute:Dt||(()=>{})};export{Ht as dictionary,Jt as hooks,Gt as matchers,Qt as nodes,Nt as root,Xt as server_loads};
