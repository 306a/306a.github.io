import{s as o,b}from"./entry.g7SpT4Gu.js";import{ac as c,a9 as f,ad as a,A as g,Q as p}from"./runtime.DzPMea9v.js";let n=!1;function _(s,r,u){const e=u[r]??(u[r]={store:null,source:f(void 0),unsubscribe:a});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=a;else{var t=!0;e.unsubscribe=o(s,i=>{t?e.source.v=i:p(e.source,i)}),t=!1}return g(e.source)}function y(){const s={};return c(()=>{for(var r in s)s[r].unsubscribe()}),s}function m(s){var r=n;try{return n=!1,[s(),n]}finally{n=r}}const d=()=>{const s=b;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},w={subscribe(s){return d().page.subscribe(s)}};export{_ as a,m as c,w as p,y as s};
