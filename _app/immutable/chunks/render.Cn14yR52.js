import{I as b,J as E,K as I,L as R,o as W,M as Y,N as H,O as P,P as m,Q as j,R as q,S as B,T as S,c as w,s as A,a as C,f as p,U as $,V as z,W as J,X as K,Y as Q,Z as U,_ as X,e as Z,g as F,h as L,j as G,z as x}from"./runtime.CkW8p6aK.js";import{b as rr}from"./disclose-version.Dg3KThTu.js";function tr(r){var t=I,a=R;b(null),E(null);try{return r()}finally{b(t),E(a)}}const er=new Set,D=new Set;function ar(r,t,a,o){function i(e){if(o.capture||y.call(t,e),!e.cancelBubble)return tr(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Y(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function fr(r,t,a,o,i){var e={capture:o,passive:i},u=ar(r,t,a,e);(t===document.body||t===window||t===document)&&W(()=>{t.removeEventListener(r,u,e)})}function y(r){var O;var t=this,a=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],e=i[0]||r.target,u=0,h=r.__root;if(h){var l=i.indexOf(h);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var d=i.indexOf(t);if(d===-1)return;l<=d&&(u=l)}if(e=i[u]||r.target,e!==t){H(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=I,f=R;b(null),E(null);try{for(var n,s=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var _=e["__"+o];if(_!==void 0&&!e.disabled)if(P(_)){var[k,...M]=_;k.apply(e,[r,...M])}else _.call(e,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||c===t||c===null)break;e=c}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}const nr=["touchstart","touchmove"];function ir(r){return nr.includes(r)}function cr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function sr(r,t){return V(r,t)}function lr(r,t){m(),t.intro=t.intro??!1;const a=t.target,o=L,i=p;try{for(var e=j(a);e&&(e.nodeType!==8||e.data!==q);)e=B(e);if(!e)throw S;w(!0),A(e),C();const u=V(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==$)throw z(),S;return w(!1),u}catch(u){if(u===S)return t.recover===!1&&J(),m(),K(a),w(!1),sr(r,t);throw u}finally{w(o),A(i)}}const v=new Map;function V(r,{target:t,anchor:a,props:o={},events:i,context:e,intro:u=!0}){m();var h=new Set,l=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!h.has(s)){h.add(s);var c=ir(s);t.addEventListener(s,y,{passive:c});var _=v.get(s);_===void 0?(document.addEventListener(s,y,{passive:c}),v.set(s,1)):v.set(s,_+1)}}};l(Q(er)),D.add(l);var d=void 0,T=U(()=>{var f=a??t.appendChild(X());return Z(()=>{if(e){F({});var n=x;n.c=e}i&&(o.$$events=i),L&&rr(f,null),d=r(f,o)||{},L&&(R.nodes_end=p),e&&G()}),()=>{var c;for(var n of h){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}D.delete(l),N.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(d,T),d}let N=new WeakMap;function dr(r){const t=N.get(r);t&&t()}export{fr as e,lr as h,sr as m,cr as s,dr as u};