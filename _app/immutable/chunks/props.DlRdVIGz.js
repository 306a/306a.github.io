import{S as N,M as Z,N as $,O as y,P as j,Q as g,U as l,R as T,A as b,T as L,V as G,g as K,W as V,X as z,Y as H,Z as Q,_ as W,x as M,$ as X,a0 as J,a1 as U,a2 as k,a3 as p,a4 as ee,a5 as re,a6 as ae,C as Y,a7 as ne,a8 as te,a9 as ie}from"./runtime.DzPMea9v.js";import{c as fe}from"./stores.yuVzw_9O.js";function O(t,v=null,P){if(typeof t!="object"||t===null||N in t)return t;const o=K(t);if(o!==Z&&o!==$)return t;var f=new Map,c=V(t),m=y(0);c&&f.set("length",y(t.length));var w;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var n=f.get(e);return n===void 0?(n=y(r.value),f.set(e,n)):g(n,O(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(c&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&g(n,a)}g(r,l),q(m)}return!0},get(i,e,r){var _;if(e===N)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(_=T(i,e))!=null&&_.writable)&&(n=y(O(a?i[e]:l,w)),f.set(e,n)),n!==void 0){var u=b(n);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===N)return!0;var r=f.get(e),n=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||L!==null&&(!n||(u=T(i,e))!=null&&u.writable)){r===void 0&&(r=y(n?O(i[e],w):l),f.set(e,r));var a=b(r);if(a===l)return!1}return n},set(i,e,r,n){var R;var a=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,l):_ in i&&(I=y(l),f.set(_+"",I))}a===void 0?(!u||(R=T(i,e))!=null&&R.writable)&&(a=y(void 0),g(a,O(r,w)),f.set(e,a)):(u=a.v!==l,g(a,O(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,r),!u){if(c&&typeof e=="string"){var S=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=S.v&&g(S,E+1)}q(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(a=>{var u=f.get(a);return u===void 0||u.v!==l});for(var[r,n]of f)n.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){G()}})}function q(t,v=1){g(t,t.v+v)}function F(t){for(var v=L,P=L;v!==null&&!(v.f&(X|J));)v=v.parent;try{return U(v),t()}finally{U(P)}}function ve(t,v,P,o){var B;var f=(P&k)!==0,c=!p||(P&ee)!==0,m=(P&re)!==0,w=(P&te)!==0,i=!1,e;m?[e,i]=fe(()=>t[v]):e=t[v];var r=N in t||ae in t,n=((B=T(t,v))==null?void 0:B.set)??(r&&m&&v in t?s=>t[v]=s:void 0),a=o,u=!0,_=!1,I=()=>(_=!0,u&&(u=!1,w?a=M(o):a=o),a);e===void 0&&o!==void 0&&(n&&c&&z(),e=I(),n&&n(e));var d;if(c)d=()=>{var s=t[v];return s===void 0?I():(u=!0,_=!1,s)};else{var S=F(()=>(f?Y:ne)(()=>t[v]));S.f|=H,d=()=>{var s=b(S);return s!==void 0&&(a=void 0),s===void 0?a:s}}if(!(P&Q))return d;if(n){var E=t.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||E||i)&&n(h?d():s),s):d()}}var R=!1,C=!1,D=ie(e),A=F(()=>Y(()=>{var s=d(),h=b(D);return R?(R=!1,C=!0,h):(C=!1,D.v=s)}));return f||(A.equals=W),function(s,h){if(arguments.length>0){const x=h?b(A):c&&m?O(s):s;return A.equals(x)||(R=!0,g(D,x),_&&a!==void 0&&(a=x),M(()=>b(A))),s}return b(A)}}export{O as a,ve as p};
