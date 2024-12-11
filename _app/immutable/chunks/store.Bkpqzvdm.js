import{ad as E,F as T,ae as V,y as k,af as W,ag as H,ah as M,B as Y,ai as N,aa as C,aj as P,ak as $,al as L,c as g,s as D,a as F,f as v,am as K,an as Z,ao as z,ap as G,aq as J,ar as Q,a9 as U,e as X,g as x,h as R,j as ee,Z as re,a2 as m,K as te,W as ae,n as ne,w as se}from"./runtime.CL5fW5mi.js";import{b as ie}from"./disclose-version.Dns0k_UP.js";function ue(e){var r=V,n=k;E(null),T(null);try{return e()}finally{E(r),T(n)}}const oe=new Set,I=new Set;function ce(e,r,n,a){function s(t){if(a.capture||p.call(r,t),!t.cancelBubble)return ue(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?H(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function ve(e,r,n,a,s){var t={capture:a,passive:s},o=ce(e,r,n,t);(r===document.body||r===window||r===document)&&W(()=>{r.removeEventListener(e,o,t)})}function p(e){var A;var r=this,n=r.ownerDocument,a=e.type,s=((A=e.composedPath)==null?void 0:A.call(e))||[],t=s[0]||e.target,o=0,h=e.__root;if(h){var l=s.indexOf(h);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){M(e,"currentTarget",{configurable:!0,get(){return t||n}});var S=V,c=k;E(null),T(null);try{for(var i,u=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+a];if(_!==void 0&&!t.disabled)if(Y(_)){var[q,...B]=_;q.apply(t,[e,...B])}else _.call(t,e)}catch(y){i?u.push(y):i=y}if(e.cancelBubble||f===r||f===null)break;t=f}if(i){for(let y of u)queueMicrotask(()=>{throw y});throw i}}finally{e.__root=r,delete e.currentTarget,E(S),T(c)}}}const fe=["touchstart","touchmove"];function le(e){return fe.includes(e)}function pe(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function de(e,r){return j(e,r)}function ye(e,r){N(),r.intro=r.intro??!1;const n=r.target,a=R,s=v;try{for(var t=C(n);t&&(t.nodeType!==8||t.data!==P);)t=$(t);if(!t)throw L;g(!0),D(t),F();const o=j(e,{...r,anchor:t});if(v===null||v.nodeType!==8||v.data!==K)throw Z(),L;return g(!1),o}catch(o){if(o===L)return r.recover===!1&&z(),N(),G(n),g(!1),de(e,r);throw o}finally{g(a),D(s)}}const b=new Map;function j(e,{target:r,anchor:n,props:a={},events:s,context:t,intro:o=!0}){N();var h=new Set,l=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!h.has(u)){h.add(u);var f=le(u);r.addEventListener(u,p,{passive:f});var _=b.get(u);_===void 0?(document.addEventListener(u,p,{passive:f}),b.set(u,1)):b.set(u,_+1)}}};l(J(oe)),I.add(l);var d=void 0,S=Q(()=>{var c=n??r.appendChild(U());return X(()=>{if(t){x({});var i=re;i.c=t}s&&(a.$$events=s),R&&ie(c,null),d=e(c,a)||{},R&&(k.nodes_end=v),t&&ee()}),()=>{var f;for(var i of h){r.removeEventListener(i,p);var u=b.get(i);--u===0?(document.removeEventListener(i,p),b.delete(i)):b.set(i,u)}I.delete(l),O.delete(d),c!==n&&((f=c.parentNode)==null||f.removeChild(c))}});return O.set(d,S),d}let O=new WeakMap;function ge(e){const r=O.get(e);r&&r()}function _e(e,r,n){if(e==null)return r(void 0),m;const a=te(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function we(e,r,n){const a=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:m});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=m;else{var s=!0;a.unsubscribe=_e(e,t=>{s?a.source.v=t:se(a.source,t)}),s=!1}return ne(a.source)}function Ee(){const e={};return W(()=>{for(var r in e)e[r].unsubscribe()}),e}function Te(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{pe as a,we as b,Te as c,ve as e,ye as h,de as m,Ee as s,ge as u};