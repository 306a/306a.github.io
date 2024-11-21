import"./disclose-version.B5gKXr-b.js";import"./legacy.CAAz0Voe.js";import{c as w,d as X}from"./entry.Nfe_iL7R.js";import{p as H}from"./stores.Ckli_ZVC.js";let P;const D="en",k=["en"];let L=()=>D;const Q=t=>{typeof t=="function"?L=C(t):L=C(()=>t),P!==void 0&&P(L())};function C(t){return()=>{const n=t();if(!A(n))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return n}}const Y=t=>{P=t};function A(t){return k.includes(t)}const q=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:k,isAvailableLanguageTag:A,get languageTag(){return L},onSetLanguageTag:Y,setLanguageTag:Q,sourceLanguageTag:D},Symbol.toStringTag,{value:"Module"}));function G(t,n){if(t==="")return"";const e=new URL(t,n).pathname;return e.endsWith("/")?e.slice(0,-1):e}function S(t,n){const e=V(t),o=J(e,n),[i,a]=Z(o);return[i,a]}const B=(t,n,e)=>[n,t,e??""].filter(o=>o!=="/").join("")||"/";function J(t,n){const e=t.replace(n,"");return e.startsWith("/")?e:`/${e}`}function Z(t){const e=["/.html__data.json","/__data.json"].find(o=>t.endsWith(o));return e?[t.slice(0,-e.length)||"/",e]:[t,void 0]}function V(t){try{return decodeURI(t)}catch{return t}}const tt=t=>({url:n})=>{try{const[e,o]=S(n.pathname,w),i=t.getLanguageFromLocalisedPath(e);if(!i)return n.pathname;const a=t.getCanonicalPath(e,i);return B(a,w,o)}catch{return n.pathname}};function et(t){return`/${t.split("/").filter(Boolean).join("/")}`}function nt(t){const n=t.map(e=>typeof e=="string"?o=>o===e:o=>e.test(o));return e=>n.some(o=>o(et(e)))}const T="rtl",R="ltr";function rt(t){try{const n=new Intl.Locale(t);return"textInfo"in n?n.textInfo.direction===T?T:R:n.getTextInfo().direction===T?T:R}catch{return R}}function ot(t){const n=t.map(e=>[e,rt(e)]);return Object.fromEntries(n)}const at=0,F=1,$=2,st=4,p=0,v=1,j=2;function it(t){const n=ct(ut);return t.sort((e,o)=>{var i,a,s,c,r,u;const f=z(e).map(n),l=z(o).map(n);for(let g=0;g<Math.max(f.length,l.length);g+=1){const m=f[g],x=l[g];if(!m)return-1;if(!x)return 1;for(let _=0;_<Math.max(m.length,x.length);_+=1){const h=m[_],d=x[_];if((h==null?void 0:h[p])||(d==null?void 0:d[p])){if(!h)return-1;if(!d)return 1;const y=((i=m[_+1])==null?void 0:i[v])||((s=(a=f[g+1])==null?void 0:a[0])==null?void 0:s[v]),I=((c=x[_+1])==null?void 0:c[v])||((u=(r=l[g+1])==null?void 0:r[0])==null?void 0:u[v]),K=y&&I,O=y&&!I,W=!y&&I;if((h[p]&&d[p])===$){if(K)continue;if(O)return-1;if(W)return 1}if(h[p]===$)return O?-1:1;if(d[p]===$)return W?1:-1;if(h[j]!==d[j])return(-1)**+h[j];if(h[p]!==d[p])return(-1)**+(h[p]>d[p])}else if((h==null?void 0:h[v])!==(d==null?void 0:d[v]))return lt(h[v],d[v])}}return e<o?1:-1})}function ct(t){const n=new Map;return e=>(n.has(e)||n.set(e,t(e)),n.get(e))}function ut(t){const n=[];let e=0;for(;e<=t.length;){const o=t.indexOf("[",e),i=o===-1;if(n.push([at,t.slice(e,i?void 0:o),!1]),i)break;const a=t[o+1]==="["?F:t[o+1]==="."?$:st,s=a===F?"]]":"]",c=t.indexOf(s,o);if(c===-1)throw new Error(`Invalid route definition ${t}`);const r=t.slice(o,e=c+s.length);n.push([a,r,r.includes("=")])}return n}const z=t=>t.replace(/\[\[[^\]]+\]\](?!$)/g,"").split("/").filter(Boolean);function lt(t,n){if(t===n)return 0;let e=0;for(;t[e]===n[e];)e++;return t[e]?n[e]?t[e]<n[e]?-1:1:-1:1}const ft=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${U(t).map(o=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(i)return n.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const a=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(a)return n.push({name:a[1],matcher:a[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const s=o.split(/\[(.+?)\](?!\])/);return"/"+s.map((r,u)=>{if(u%2){if(r.startsWith("x+"))return b(String.fromCharCode(parseInt(r.slice(2),16)));if(r.startsWith("u+"))return b(String.fromCharCode(...r.slice(2).split("-").map(_=>parseInt(_,16))));const f=ft.exec(r);if(!f)throw new Error(`Invalid param: ${r}`);const[,l,g,m,x]=f;return n.push({name:m,matcher:x,optional:!!l,rest:!!g,chained:g?u===1&&s[0]==="":!1}),g?"(.*?)":l?"([^/]*)?":"([^/]+?)"}return b(r)}).join("")}).join("")}/?$`),params:n}}function ht(t,n,e){const o={},i=t.slice(1),a=i.filter(c=>c!==void 0);let s=0;for(const[c,r]of n.entries()){let u=i[c-s];if(r.chained&&r.rest&&s&&(u=i.slice(c-s,c+1).filter(l=>l).join("/"),s=0),u===void 0){r.rest&&(o[r.name]="");continue}if(r.matcher&&!e[r.matcher])return;if((e[r.matcher]??(()=>!0))(u)){o[r.name]=u;const l=n[c+1],g=i[c+1];l&&!l.rest&&l.optional&&g&&r.chained&&(s=0),!l&&!g&&Object.keys(o).length===a.length&&(s=0);continue}if(r.optional&&r.chained){s++;continue}return}if(!s)return o}function b(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const dt=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function M(t,n){return"/"+U(t).map(e=>e.replace(dt,(o,i,a,s)=>{const c=n[s];if(!c){if(i||a&&c!==void 0)return"";throw new Error(`Missing parameter '${s}' in route ${t}`)}if(c[0]=="/"||c.endsWith("/"))throw new Error(`Parameter '${s}' in route ${t} cannot start or end with a slash`);return c})).filter(Boolean).join("/")}function N(t,n,e){const o=it(n);for(const i of o){const a=gt(i),s=a.pattern.exec(pt(t));if(!s)continue;const c=ht(s,a.params,e);if(c)return{params:c,id:i}}}const pt=t=>t.endsWith("/")?t.slice(0,-1):t,U=t=>t.slice(1).split("/");function mt(t,n,e,o,i){function a(r){const f=r.split("/")[1];if(t.includes(f)&&(i==="always"||f!==n))return f;if(i==="never")return n}function s(r,u){const f=r.endsWith("/")&&r!=="/";r=f?r.slice(0,-1):r;let l=vt(r,u,e,o);return f&&(l+="/"),(i==="always"||u!==n)&&(l=`/${u}${l}`),l}function c(r,u){const f=r.endsWith("/")&&r!=="/";(i==="always"||u!==n)&&(r=r.replace(`/${u}`,"")||"/");const l=f;r=l?r.slice(0,-1):r;let g=_t(r,u,e,o);return l&&(g+="/"),g}return{getLanguageFromLocalisedPath:a,getLocalisedPath:s,getCanonicalPath:c}}function _t(t,n,e,o){for(const[i,a]of Object.entries(e)){if(!(n in a))continue;const s=a[n];if(!s)continue;const c=N(t,[s],o);if(c)return M(i,c.params)}return t}function vt(t,n,e,o){const i=N(t,Object.keys(e),o);if(!i)return t;const a=e[i.id];if(!a)return t;const s=a[n];return s?M(s,i.params):t}function xt(t,n){const e={},o=[],i=t.sourceLanguageTag,a={defaultLanguageTag:i,runtime:t,translations:e,matchers:{},exclude:nt(o),prefixDefaultLanguage:"never",textDirection:ot(t.availableLanguageTags),seo:{noAlternateLinks:!1}},s=mt(t.availableLanguageTags,i,a.translations,a.matchers,a.prefixDefaultLanguage);return Object.freeze(e),Object.freeze(a),{config:a,strategy:s,reroute:()=>tt(s),handle:()=>{throw new Error("")},getLanguageFromUrl(c){const r=E(w),[u]=S(c.pathname,r);return a.exclude(u)?a.defaultLanguageTag:s.getLanguageFromLocalisedPath(u)||a.defaultLanguageTag},resolveRoute(c,r=void 0){if(a.exclude(c))return c;const u=E(w),[f,l]=S(c,u);if(r=r??t.languageTag(),!c.startsWith(u))return c;const g=s.getLocalisedPath(f,r);return B(g,u,l)},route(c){const r=E(w),[u,f]=S(c,r),g=s.getLanguageFromLocalisedPath(u)||a.defaultLanguageTag,m=s.getCanonicalPath(u,g);return B(m,r,f)}}}function E(t){return t===""?"":t.startsWith("/")?t:G(t,new URL(X(H).url))}const yt=xt(q);export{yt as i,L as l,G as n,S as p,B as s};
