import{B as T,e as k}from"./runtime.CxITA9n6.js";import{p as H,i as M,a as D}from"./entry.BSfwT0Xb.js";function N(t,r,n){T(()=>{var i=k(()=>r(t,n==null?void 0:n())||{});if(i!=null&&i.destroy)return()=>i.destroy()})}function F(t){const r=JSON.parse(t);return r.data&&(r.data=H(r.data)),r}function u(t){return HTMLElement.prototype.cloneNode.call(t)}function O(t,r=()=>{}){const n=async({action:e,result:l,reset:o=!0,invalidateAll:c=!0})=>{l.type==="success"&&(o&&HTMLFormElement.prototype.reset.call(t),c&&await M()),(location.origin+location.pathname===e.origin+e.pathname||l.type==="redirect"||l.type==="error")&&D(l)};async function i(e){var b,y,h,w,A;if(((b=e.submitter)!=null&&b.hasAttribute("formmethod")?e.submitter.formMethod:u(t).method)!=="post")return;e.preventDefault();const o=new URL((y=e.submitter)!=null&&y.hasAttribute("formaction")?e.submitter.formAction:u(t).action),c=(h=e.submitter)!=null&&h.hasAttribute("formenctype")?e.submitter.formEnctype:u(t).enctype,m=new FormData(t),d=(w=e.submitter)==null?void 0:w.getAttribute("name");d&&m.append(d,((A=e.submitter)==null?void 0:A.getAttribute("value"))??"");const p=new AbortController;let f=!1;const L=await r({action:o,cancel:()=>f=!0,controller:p,formData:m,formElement:t,submitter:e.submitter})??n;if(f)return;let s;try{const a=new Headers({accept:"application/json","x-sveltekit-action":"true"});c!=="multipart/form-data"&&a.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(c)?c:"application/x-www-form-urlencoded");const x=c==="multipart/form-data"?m:new URLSearchParams(m),E=await fetch(o,{method:"POST",headers:a,cache:"no-store",body:x,signal:p.signal});s=F(await E.text()),s.type==="error"&&(s.status=E.status)}catch(a){if((a==null?void 0:a.name)==="AbortError")return;s={type:"error",error:a}}L({action:o,formData:m,formElement:t,update:a=>n({action:o,result:s,reset:a==null?void 0:a.reset,invalidateAll:a==null?void 0:a.invalidateAll}),result:s})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",i),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",i)}}}export{N as a,O as e};
