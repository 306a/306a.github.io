const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C2BugEGq.js","../chunks/disclose-version.Dns0k_UP.js","../chunks/runtime.CL5fW5mi.js","../assets/0.BGgWduwt.css","../nodes/1.4g51xvl7.js","../chunks/legacy.g3gu-OQ_.js","../chunks/store.Bkpqzvdm.js","../chunks/entry.CrfRy67g.js","../nodes/2.wNwusE1S.js","../chunks/marked.esm.CnqiqPIs.js","../chunks/if.CZmi-c1s.js","../chunks/props.BUj79wS-.js","../nodes/3.kW8fkm2w.js"])))=>i.map(i=>d[i]);
var Y=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||Y("Cannot "+r);var u=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),T=(e,t,r,i)=>(F(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as G,a as z,b as H,E as Q,e as $,f as tt,p as et,as as rt,at as st,K as J,ag as nt,S as at,n as v,J as ot,w as x,au as it,ah as ct,W as ut,Z as O,G as lt,Y as K,g as ft,X as dt,i as R,j as mt,av as ht,m as _t,k as vt,t as gt,l as yt,aw as C,M as j}from"../chunks/runtime.CL5fW5mi.js";import{h as Et,m as bt,u as Pt,a as wt}from"../chunks/store.Bkpqzvdm.js";import{a as P,t as M,c as B,d as Rt}from"../chunks/disclose-version.Dns0k_UP.js";import{i as D}from"../chunks/if.CZmi-c1s.js";import{p as I,a as kt}from"../chunks/props.BUj79wS-.js";function xt(e){throw new Error("lifecycle_outside_component")}function V(e,t,r){G&&z();var i=e,a,o;H(()=>{a!==(a=t())&&(o&&(et(o),o=null),a&&(o=$(()=>r(i,a))))},Q),G&&(i=tt)}function U(e,t){return e===t||(e==null?void 0:e[at])===t}function p(e={},t,r,i){return rt(()=>{var a,o;return st(()=>{a=o,o=[],J(()=>{e!==r(...o)&&(t(e,...o),a&&U(r(...a),e)&&t(null,...a))})}),()=>{nt(()=>{o&&U(r(...o),e)&&t(null,...o)})}}),e}function St(e){return class extends At{constructor(t){super({component:e,...t})}}}var g,f;class At{constructor(t){L(this,g);L(this,f);var o;var r=new Map,i=(n,s)=>{var d=ut(s);return r.set(n,d),d};const a=new Proxy({...t.props||{},$$events:{}},{get(n,s){return v(r.get(s)??i(s,Reflect.get(n,s)))},has(n,s){return s===ot?!0:(v(r.get(s)??i(s,Reflect.get(n,s))),Reflect.has(n,s))},set(n,s,d){return x(r.get(s)??i(s,d),d),Reflect.set(n,s,d)}});T(this,f,(t.hydrate?Et:bt)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&it(),T(this,g,a.$$events);for(const n of Object.keys(u(this,f)))n==="$set"||n==="$destroy"||n==="$on"||ct(this,n,{get(){return u(this,f)[n]},set(s){u(this,f)[n]=s},enumerable:!0});u(this,f).$set=n=>{Object.assign(a,n)},u(this,f).$destroy=()=>{Pt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...a)=>r.call(this,...a);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(a=>a!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;function Lt(e){O===null&&xt(),lt&&O.l!==null?Tt(O).m.push(e):K(()=>{const t=J(e);if(typeof t=="function")return t})}function Tt(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Ot="modulepreload",Ct=function(e,t){return new URL(e,t).href},W={},k=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){const n=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(l=>{if(l=Ct(l,i),l in W)return;W[l]=!0;const y=l.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(!!i)for(let m=n.length-1;m>=0;m--){const _=n[m];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${S}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":Ot,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,_)=>{c.addEventListener("load",m),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return a.then(n=>{for(const s of n||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Ut={};var jt=M('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Bt=M("<!> <!>",1);function Dt(e,t){ft(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),a=I(t,"data_1",3,null);dt(()=>t.stores.page.set(t.page)),K(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),a(),t.stores.page.notify()});let o=C(!1),n=C(!1),s=C(null);Lt(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(x(n,!0),ht().then(()=>{x(s,kt(document.title||"untitled page"))}))});return x(o,!0),E});const d=j(()=>t.constructors[1]);var l=Bt(),y=R(l);D(y,()=>t.constructors[1],E=>{var c=B();const m=j(()=>t.constructors[0]);var _=R(c);V(_,()=>v(m),(b,A)=>{p(A(b,{get data(){return i()},get form(){return t.form},children:(h,It)=>{var q=B(),N=R(q);V(N,()=>v(d),(X,Z)=>{p(Z(X,{get data(){return a()},get form(){return t.form}}),w=>r()[1]=w,()=>{var w;return(w=r())==null?void 0:w[1]})}),P(h,q)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(E,c)},E=>{var c=B();const m=j(()=>t.constructors[0]);var _=R(c);V(_,()=>v(m),(b,A)=>{p(A(b,{get data(){return i()},get form(){return t.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(E,c)});var S=_t(y,2);D(S,()=>v(o),E=>{var c=jt(),m=vt(c);D(m,()=>v(n),_=>{var b=Rt();gt(()=>wt(b,v(s))),P(_,b)}),yt(c),P(E,c)}),P(e,l),mt()}const Wt=St(Dt),Jt=[()=>k(()=>import("../nodes/0.C2BugEGq.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>k(()=>import("../nodes/1.4g51xvl7.js"),__vite__mapDeps([4,1,2,5,6,7]),import.meta.url),()=>k(()=>import("../nodes/2.wNwusE1S.js"),__vite__mapDeps([8,1,2,5,6,9,10,11,7]),import.meta.url),()=>k(()=>import("../nodes/3.kW8fkm2w.js"),__vite__mapDeps([12,1,2,5,6,9,11]),import.meta.url)],Kt=[],Mt={"/":[2],"/p/[issue_number]":[3]},Nt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Mt as dictionary,Nt as hooks,Ut as matchers,Jt as nodes,Wt as root,Kt as server_loads};
