import{a as d,t as l}from"../chunks/disclose-version.Dns0k_UP.js";import{i as A}from"../chunks/legacy.g3gu-OQ_.js";import{g as B,j as C,k as a,l as s,t as f,m as v,n as r}from"../chunks/runtime.CL5fW5mi.js";import{a as c}from"../chunks/store.Bkpqzvdm.js";import{a as E,h as y,e as F,b as G,m as w,i as H}from"../chunks/marked.esm.CnqiqPIs.js";import{p as I}from"../chunks/props.BUj79wS-.js";async function J({params:n}){return{issue_number:n.issue_number}}const aa=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));var K=l('<section class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><div class="mx-auto flex w-full animate-pulse space-x-4"><div class="h-10 w-10 rounded-full bg-slate-200"></div> <div class="flex-1 space-y-6 py-1"><div class="h-2 rounded bg-slate-200"></div> <div class="space-y-3"><div class="grid grid-cols-3 gap-4"><div class="col-span-2 h-2 rounded bg-slate-200"></div> <div class="col-span-1 h-2 rounded bg-slate-200"></div></div> <div class="h-2 rounded bg-slate-200"></div></div></div></div></section>'),N=l('<div class="prose-sm prose"><!></div>'),Q=l('<section class="flex flex-col gap-4"><div class="font text-[22px]"> </div> <div class="flex gap-3 text-gray-400"><div> </div> <div> </div></div>  <div class="prose max-w-full break-all"><!></div> <!></section>'),R=l('<p style="color: red"> </p>'),U=l('<main class="flex flex-col gap-5 p-[20px]"><section class="m-auto w-full max-w-[677px]"><!></section></main>');function sa(n,x){B(x,!1);const k=t=>{var e=K();d(t,e)};let j=I(x,"data",8);A();var p=U(),b=a(p),S=a(b);E(S,()=>G({url:`https://api.github.com/repos/306a/306a.github.io/issues/${j().issue_number}`}),t=>{k(t)},(t,e)=>{var i=Q(),o=a(i),L=a(o,!0);s(o);var m=v(o,2),u=a(m),O=a(u,!0);s(u);var h=v(u,2),z=a(h,!0);f(()=>c(z,new Date(r(e).data.created_at).toLocaleString())),s(h),s(m);var g=v(m,2),D=a(g);y(D,()=>w.parse(r(e).data.body),!1,!1),s(g);var M=v(g,2);F(M,1,()=>r(e).data.comments,H,(P,T)=>{var _=N(),q=a(_);y(q,()=>w.parse(r(T).body),!1,!1),s(_),d(P,_)}),s(i),f(()=>{c(L,r(e).data.title),c(O,r(e).data.user.login)}),d(t,i)},(t,e)=>{var i=R(),o=a(i,!0);s(i),f(()=>c(o,r(e).response.data.message)),d(t,i)}),s(b),s(p),d(n,p),C()}export{sa as component,aa as universal};
