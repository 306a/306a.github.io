var Ot=Array.isArray,xt=Array.from,Ct=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Zn=Object.getOwnPropertyDescriptors,Nt=Object.prototype,bt=Array.prototype,zn=Object.getPrototypeOf;const qt=()=>{};function Pt(n){return typeof(n==null?void 0:n.then)=="function"}function Ft(n){return n()}function hn(n){for(var t=0;t<n.length;t++)n[t]()}function Lt(n,t,r=!1){return n===void 0?r?t():t:n}const y=2,dn=4,M=8,en=16,T=32,Z=64,S=128,U=256,p=512,k=1024,H=2048,x=4096,Y=8192,Jn=16384,En=32768,Mt=65536,Wn=1<<18,yn=1<<19,_n=Symbol("$state"),Ht=Symbol("legacy props"),Yt=Symbol("");function wn(n){return n===this.v}function Xn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!Xn(n,this.v)}function Qn(n){throw new Error("effect_in_teardown")}function nt(){throw new Error("effect_in_unowned_derived")}function tt(n){throw new Error("effect_orphan")}function rt(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function Bt(n){throw new Error("props_invalid_value")}function Ut(){throw new Error("state_descriptors_fixed")}function Vt(){throw new Error("state_prototype_fixed")}function et(){throw new Error("state_unsafe_local_read")}function st(){throw new Error("state_unsafe_mutation")}let z=!1;function Gt(){z=!0}function sn(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function Kt(n){return mn(sn(n))}function at(n,t=!1){var e;const r=sn(n);return t||(r.equals=Tn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function $t(n,t=!1){return mn(at(n,t))}function mn(n){return o!==null&&o.f&y&&(w===null?mt([n]):w.push(n)),n}function lt(n,t){return o!==null&&un()&&o.f&(y|en)&&(w===null||!w.includes(n))&&st(),ut(n,t)}function ut(n,t){return n.equals(t)||(n.v=t,n.version=Bn(),An(n,k),un()&&u!==null&&u.f&p&&!(u.f&T)&&(c!==null&&c.includes(n)?(m(u,k),W(u)):g===null?At([n]):g.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=un(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(m(l,t),i&(p|S)&&(i&y?An(l,H):W(l)))}}const Zt=1,zt=2,Jt=4,Wt=8,Xt=16,Qt=1,nr=2,tr=4,rr=8,er=16,sr=1,ar=2,ot="[",it="[!",ft="]",gn={},lr=Symbol();function kn(n){console.warn("hydration_mismatch")}let C=!1;function ur(n){C=n}let A;function P(n){if(n===null)throw kn(),gn;return A=n}function or(){return P(N(A))}function ir(n){if(C){if(N(A)!==null)throw kn(),gn;A=n}}function fr(){for(var n=0,t=A;;){if(t.nodeType===8){var r=t.data;if(r===ft){if(n===0)return t;n-=1}else(r===ot||r===it)&&(n+=1)}var e=N(t);t.remove(),t=e}}var cn,In,Sn;function _r(){if(cn===void 0){cn=window;var n=Element.prototype,t=Node.prototype;In=fn(t,"firstChild").get,Sn=fn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function Q(n){return In.call(n)}function N(n){return Sn.call(n)}function cr(n,t){if(!C)return Q(n);var r=Q(A);if(r===null)r=A.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function vr(n,t){if(!C){var r=Q(n);return r instanceof Comment&&r.data===""?N(r):r}return A}function pr(n,t=1,r=!1){let e=C?A:n;for(var s;t--;)s=e,e=N(e);if(!C)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=X();return e===null?s==null||s.after(l):e.before(l),P(l),l}return P(e),e}function hr(n){n.textContent=""}function _t(n){var t=y|k;u===null?t|=S:u.f|=yn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function dr(n){const t=_t(n);return t.equals=Tn,t}function Rn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):q(e)}}}function ct(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Dn(n){var t,r=u;$(ct(n));try{Rn(n),t=Un(n)}finally{$(r)}return t}function On(n){var t=Dn(n),r=(R||n.f&S)&&n.deps!==null?H:p;m(n,r),n.equals(t)||(n.v=t,n.version=Bn())}function an(n){Rn(n),L(n,0),m(n,Y),n.v=n.children=n.deps=n.ctx=n.reactions=null}function xn(n){u===null&&o===null&&tt(),o!==null&&o.f&S&&nt(),ln&&Qn()}function vt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function b(n,t,r,e=!0){var s=(n&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|k,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{vn(!0),J(l),l.f|=Jn}catch(_){throw q(l),_}finally{vn(i)}}else t!==null&&W(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&yn)===0;if(!E&&!s&&e&&(a!==null&&vt(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function Er(n){const t=b(M,null,!1);return m(t,p),t.teardown=n,t}function yr(n){xn();var t=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Cn(n);return e}}function wr(n){return xn(),pt(n)}function Tr(n){const t=b(Z,n,!0);return()=>{q(t)}}function Cn(n){return b(dn,n,!1)}function pt(n){return b(M,n,!0)}function mr(n){return ht(n)}function ht(n,t=0){return b(M|en|t,n,!0)}function Ar(n,t=!0){return b(M|T,n,!0,t)}function Nn(n){var t=n.teardown;if(t!==null){const r=ln,e=o;pn(!0),K(null);try{t.call(null)}finally{pn(r),K(e)}}}function bn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function qn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;q(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||q(t),t=r}}function q(n,t=!0){var r=!1;if((t||n.f&Wn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:N(e);e.remove(),e=a}r=!0}qn(n,t&&!r),bn(n),L(n,0),m(n,Y);var l=n.transitions;if(l!==null)for(const E of l)E.stop();Nn(n);var i=n.parent;i!==null&&i.first!==null&&Pn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Pn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function gr(n,t){var r=[];Fn(n,r,!0),Et(r,()=>{q(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Fn(n,t,r){if(!(n.f&x)){if(n.f^=x,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&En)!==0||(e.f&T)!==0;Fn(e,t,a?r:!1),e=s}}}function kr(n){Ln(n,!0)}function Ln(n,t){if(n.f&x){j(n)&&J(n),n.f^=x;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&En)!==0||(r.f&T)!==0;Ln(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const yt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let V=!1,G=!1,nn=[],tn=[];function Mn(){V=!1;const n=nn.slice();nn=[],hn(n)}function Hn(){G=!1;const n=tn.slice();tn=[],hn(n)}function Ir(n){V||(V=!0,queueMicrotask(Mn)),nn.push(n)}function Sr(n){G||(G=!0,yt(Hn)),tn.push(n)}function wt(){V&&Mn(),G&&Hn()}const Yn=0,Tt=1;let B=Yn,F=!1,D=!1,ln=!1;function vn(n){D=n}function pn(n){ln=n}let I=[],O=0;let o=null;function K(n){o=n}let u=null;function $(n){u=n}let w=null;function mt(n){w=n}let c=null,d=0,g=null;function At(n){g=n}let jn=0,R=!1,f=null;function Rr(n){f=n}function Bn(){return++jn}function un(){return!z||f!==null&&f.l===null}function j(n){var l,i;var t=n.f;if(t&k)return!0;if(t&H){var r=n.deps,e=(t&S)!==0;if(r!==null){var s;if(t&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&On(a),e&&u!==null&&!R&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||m(n,p)}return!1}function gt(n,t,r){throw n}function Un(n){var on;var t=c,r=d,e=g,s=o,a=R,l=w,i=f,E=n.f;c=null,d=0,g=null,o=E&(T|Z)?null:n,R=!D&&(E&S)!==0,w=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(L(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!R)for(v=d;v<_.length;v++)((on=_[v]).reactions??(on.reactions=[])).push(n)}else _!==null&&d<_.length&&(L(n,d),_.length=d);return h}finally{c=t,d=r,g=e,o=s,R=a,w=l,f=i}}function kt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(m(t,H),t.f&(S|U)||(t.f^=U),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)kt(n,r[e])}function J(n){var t=n.f;if(!(t&Y)){m(n,p);var r=u;u=n;try{t&en?dt(n):qn(n),bn(n),Nn(n);var e=Un(n);n.teardown=typeof e=="function"?e:null,n.version=jn}catch(s){gt(s)}finally{u=r}}}function Vn(){O>1e3&&(O=0,rt()),O++}function Gn(n){var t=n.length;if(t!==0){Vn();var r=D;D=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];Kn(s,a),It(a)}}finally{D=r}}}function It(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(Y|x))&&j(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pn(e):e.fn=null))}}function St(){if(F=!1,O>1001)return;const n=I;I=[],Gn(n),F||(O=0)}function W(n){B===Yn&&(F||(F=!0,queueMicrotask(St)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|T)){if(!(r&p))return;t.f^=p}}I.push(t)}function Kn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&T)!==0,l=a&&(s&p)!==0;if(!l&&!(s&x))if(s&M){a?r.f^=p:j(r)&&J(r);var i=r.first;if(i!==null){r=i;continue}}else s&dn&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),Kn(i,t)}function $n(n){var t=B,r=I;try{Vn();const s=[];B=Tt,I=s,F=!1,Gn(r);var e=n==null?void 0:n();return wt(),(I.length>0||s.length>0)&&$n(),O=0,e}finally{B=t,I=r}}async function Dr(){await Promise.resolve(),$n()}function Rt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&Y){var e=Dn(n);return an(n),e}if(o!==null){w!==null&&w.includes(n)&&et();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&T)&&g.includes(n)&&(m(u,k),W(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,j(a)&&On(a)),n.v}function Or(n){const t=o;try{return o=null,n()}finally{o=t}}const Dt=~(k|H|p);function m(n,t){n.f=n.f&Dt|t}function xr(n,t=1){var r=+Rt(n);return lt(n,r+t),r}function Cr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:sn(!1)})}function Nr(n){const t=f;if(t!==null){const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Cn(a.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return{}}function br(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(_n in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&_n in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{sr as $,hn as A,Ft as B,br as C,_t as D,En as E,Gt as F,q as G,it as H,K as I,$ as J,o as K,u as L,Ir as M,Ct as N,Ot as O,_r as P,Q,ot as R,N as S,gn as T,ft as U,kn as V,jt as W,hr as X,xt as Y,Tr as Z,X as _,or as a,ar as a0,_n as a1,Nt as a2,bt as a3,sn as a4,Ut as a5,lr as a6,fn as a7,Vt as a8,zn as a9,zt as aA,Jt as aB,Wt as aC,Xt as aD,Sr as aE,Yt as aF,Zn as aG,$t as aH,xr as aI,Lt as aJ,Xn as aK,Cn as aa,pt as ab,Bt as ac,Mt as ad,tr as ae,Tn as af,T as ag,Z as ah,Qt as ai,z as aj,nr as ak,rr as al,Ht as am,dr as an,er as ao,$n as ap,Dr as aq,Kt as ar,un as as,Pt as at,ut as au,Rr as av,x as aw,Fn as ax,Et as ay,Zt as az,ht as b,ur as c,kr as d,Ar as e,A as f,Cr as g,C as h,vr as i,Nr as j,cr as k,ir as l,pr as m,qt as n,Er as o,gr as p,at as q,fr as r,P as s,mr as t,Or as u,Rt as v,lt as w,wr as x,yr as y,f as z};
