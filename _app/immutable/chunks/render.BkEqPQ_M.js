import{ae as H,af as O,a1 as k,W as M,ag as Y,T as D,ah as b,K as C,I as P,J as W,ai as T,k as g,j as A,d as $,o as v,aj as q,ak as B,al as F,am as J,an as K,ao as z,F as G,m as Q,p as U,h as E,a as X,w as Z}from"./runtime.DzPMea9v.js";import{r as x}from"./svelte-head.C78rSYAV.js";import{b as aa}from"./disclose-version.Di3rFgGl.js";const I=new Set,S=new Set;function ia(a){for(var r=0;r<a.length;r++)I.add(a[r]);for(var n of S)n(a)}function m(a){var R;var r=this,n=r.ownerDocument,_=a.type,i=((R=a.composedPath)==null?void 0:R.call(a))||[],e=i[0]||a.target,d=0,h=a.__root;if(h){var u=i.indexOf(h);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var l=i.indexOf(r);if(l===-1)return;u<=l&&(d=u)}if(e=i[d]||a.target,e!==r){H(a,"currentTarget",{configurable:!0,get(){return e||n}});var w=Y,o=D;O(null),k(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+_];if(c!==void 0&&!e.disabled)if(M(c)){var[V,...j]=c;V.apply(e,[a,...j])}else c.call(e,a)}catch(y){t?s.push(y):t=y}if(a.cancelBubble||f===r||f===null)break;e=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{a.__root=r,delete a.currentTarget,O(w),k(o)}}}const ra=["touchstart","touchmove"];function ea(a){return ra.includes(a)}function fa(a,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=n,a.nodeValue=n==null?"":n+"")}function ta(a,r){return L(a,r)}function da(a,r){b(),r.intro=r.intro??!1;const n=r.target,_=E,i=v;try{for(var e=C(n);e&&(e.nodeType!==8||e.data!==P);)e=W(e);if(!e)throw T;g(!0),A(e),$();const d=L(a,{...r,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw B(),T;return g(!1),d}catch(d){if(d===T)return r.recover===!1&&F(),b(),J(n),g(!1),ta(a,r);throw d}finally{g(_),A(i),x()}}const p=new Map;function L(a,{target:r,anchor:n,props:_={},events:i,context:e,intro:d=!0}){b();var h=new Set,u=o=>{for(var t=0;t<o.length;t++){var s=o[t];if(!h.has(s)){h.add(s);var f=ea(s);r.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(K(I)),S.add(u);var l=void 0,w=z(()=>{var o=n??r.appendChild(G());return Q(()=>{if(e){U({});var t=Z;t.c=e}i&&(_.$$events=i),E&&aa(o,null),l=a(o,_)||{},E&&(D.nodes_end=v),e&&X()}),()=>{var f;for(var t of h){r.removeEventListener(t,m);var s=p.get(t);--s===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,s)}S.delete(u),N.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(l,w),l}let N=new WeakMap;function ua(a){const r=N.get(a);r&&r()}export{ia as d,da as h,ta as m,fa as s,ua as u};
