const Dr="5.0.0-next.262",Pe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pe);const Ir=1,Rr=2,Nr=4,Lr=8,Mr=16,Ce=1,De=2,Yn=4,Ie=8,Re=16,Wn=1,Ne=2,b=Symbol(),Gn=!1;var Zn=Array.isArray,Le=Array.from,Me=Object.defineProperty,j=Object.getOwnPropertyDescriptor,qe=Object.getOwnPropertyDescriptors,Fe=Object.prototype,ke=Array.prototype,zn=Object.getPrototypeOf;function cn(n){return typeof n=="function"}const qr=()=>{};function je(n){return n()}function bn(n){for(var e=0;e<n.length;e++)n[e]()}function Fr(n,e,r=!1){return n===void 0?r?e():e:n}const D=2,Xn=4,X=8,Jn=16,M=32,En=64,B=128,vn=256,g=512,L=1024,J=2048,Z=4096,ln=8192,Be=16384,Cn=32768,Qn=65536,Ve=1<<18,ne=1<<19,tn=Symbol("$state"),kr=Symbol("");function ee(n){return n===this.v}function He(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Dn(n){return!He(n,this.v)}function Ue(n){throw new Error("effect_in_teardown")}function Ke(){throw new Error("effect_in_unowned_derived")}function $e(n){throw new Error("effect_orphan")}function Ye(){throw new Error("effect_update_depth_exceeded")}function jr(n){throw new Error("lifecycle_legacy_only")}function We(n){throw new Error("props_invalid_value")}function Ge(){throw new Error("state_descriptors_fixed")}function Ze(){throw new Error("state_prototype_fixed")}function ze(){throw new Error("state_unsafe_local_read")}function Xe(){throw new Error("state_unsafe_mutation")}function A(n){return{f:0,v:n,reactions:null,equals:ee,version:0}}function Br(n){return te(A(n))}function re(n){var r;const e=A(n);return e.equals=Dn,p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(e),e}function Vr(n){return te(re(n))}function te(n){return h!==null&&h.f&D&&(C===null?fr([n]):C.push(n)),n}function qn(n,e){return O(n,on(()=>y(n))),e}function O(n,e){return h!==null&&An()&&h.f&D&&(C===null||!C.includes(n))&&Xe(),n.equals(e)||(n.v=e,n.version=we(),ue(n,L),An()&&d!==null&&d.f&g&&!(d.f&M)&&(E!==null&&E.includes(n)?(P(d,L),yn(d)):N===null?or([n]):N.push(n))),e}function ue(n,e){var r=n.reactions;if(r!==null)for(var t=An(),u=r.length,i=0;i<u;i++){var l=r[i],o=l.f;o&L||!t&&l===d||(P(l,e),o&(g|B)&&(o&D?ue(l,J):yn(l)))}}function ie(n){d===null&&h===null&&$e(),h!==null&&h.f&B&&Ke(),In&&Ue()}function Je(n,e){var r=e.last;r===null?e.last=e.first=n:(r.next=n,n.prev=r,e.last=n)}function Q(n,e,r,t=!0){var u=(n&En)!==0,i=d,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:n|L,first:null,fn:e,last:null,next:null,parent:u?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var o=W;try{jn(!0),fn(l),l.f|=Be}catch(f){throw an(l),f}finally{jn(o)}}else e!==null&&yn(l);var a=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ne)===0;if(!a&&!u&&t&&(i!==null&&Je(l,i),h!==null&&h.f&D)){var s=h;(s.children??(s.children=[])).push(l)}return l}function Qe(n){const e=Q(X,null,!1);return P(e,g),e.teardown=n,e}function Fn(n){ie();var e=d!==null&&(d.f&X)!==0&&p!==null&&!p.m;if(e){var r=p;(r.e??(r.e=[])).push({fn:n,effect:d,reaction:h})}else{var t=se(n);return t}}function nr(n){return ie(),mn(n)}function er(n){const e=Q(En,n,!0);return()=>{an(e)}}function se(n){return Q(Xn,n,!1)}function Hr(n,e){var r=p,t={effect:null,ran:!1};r.l.r1.push(t),t.effect=mn(()=>{n(),!t.ran&&(t.ran=!0,O(r.l.r2,!0),on(e))})}function Ur(){var n=p;mn(()=>{if(y(n.l.r2)){for(var e of n.l.r1){var r=e.effect;r.f&g&&P(r,J),nn(r)&&fn(r),e.ran=!1}n.l.r2.v=!1}})}function mn(n){return Q(X,n,!0)}function Kr(n){return mn(n)}function le(n,e=0){return Q(X|Jn|e,n,!0)}function dn(n,e=!0){return Q(X|M,n,!0,e)}function ae(n){var e=n.teardown;if(e!==null){const r=In,t=h;Bn(!0),hn(null);try{e.call(null)}finally{Bn(r),hn(t)}}}function an(n,e=!0){var r=!1;if((e||n.f&Ve)&&n.nodes_start!==null){for(var t=n.nodes_start,u=n.nodes_end;t!==null;){var i=t===u?null:Ln(t);t.remove(),t=i}r=!0}me(n,e&&!r),sn(n,0),P(n,ln);var l=n.transitions;if(l!==null)for(const a of l)a.stop();ae(n);var o=n.parent;o!==null&&o.first!==null&&fe(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function fe(n){var e=n.parent,r=n.prev,t=n.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),e!==null&&(e.first===n&&(e.first=t),e.last===n&&(e.last=r))}function xn(n,e){var r=[];oe(n,r,!0),rr(r,()=>{an(n),e&&e()})}function rr(n,e){var r=n.length;if(r>0){var t=()=>--r||e();for(var u of n)u.out(t)}else e()}function oe(n,e,r){if(!(n.f&Z)){if(n.f^=Z,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&e.push(l);for(var t=n.first;t!==null;){var u=t.next,i=(t.f&Cn)!==0||(t.f&M)!==0;oe(t,e,i?r:!1),t=u}}}function kn(n){ce(n,!0)}function ce(n,e){if(n.f&Z){n.f^=Z,nn(n)&&fn(n);for(var r=n.first;r!==null;){var t=r.next,u=(r.f&Cn)!==0||(r.f&M)!==0;ce(r,u?e:!1),r=t}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&i.in()}}let pn=!1,Tn=[];function _e(){pn=!1;const n=Tn.slice();Tn=[],bn(n)}function tr(n){pn||(pn=!0,queueMicrotask(_e)),Tn.push(n)}function ur(){pn&&_e()}function Sn(n){let e=D|L;d===null?e|=B:d.f|=ne;const r={children:null,deps:null,equals:ee,f:e,fn:n,reactions:null,v:null,version:0,parent:d};if(h!==null&&h.f&D){var t=h;(t.children??(t.children=[])).push(r)}return r}function ir(n){const e=Sn(n);return e.equals=Dn,e}function ve(n){var e=n.children;if(e!==null){n.children=null;for(var r=0;r<e.length;r+=1){var t=e[r];t.f&D?sr(t):an(t)}}}function de(n){var e,r=d;wn(n.parent);try{ve(n),e=Ee(n)}finally{wn(r)}var t=($||n.f&B)&&n.deps!==null?J:g;P(n,t),n.equals(e)||(n.v=e,n.version=we())}function sr(n){ve(n),sn(n,0),P(n,ln),n.children=n.deps=n.reactions=n.fn=null}function lr(n){throw new Error("lifecycle_outside_component")}const pe=0,ar=1;let _n=pe,un=!1,W=!1,In=!1;function jn(n){W=n}function Bn(n){In=n}let k=[],G=0;let h=null;function hn(n){h=n}let d=null;function wn(n){d=n}let C=null;function fr(n){C=n}let E=null,x=0,N=null;function or(n){N=n}let he=0,$=!1,Y=!1,U=new Set,p=null;function we(){return++he}function An(){return p!==null&&p.l===null}function nn(n){var l,o;var e=n.f;if(e&L)return!0;if(e&J){var r=n.deps,t=(e&B)!==0;if(r!==null){var u;if(e&vn){for(u=0;u<r.length;u++)((l=r[u]).reactions??(l.reactions=[])).push(n);n.f^=vn}for(u=0;u<r.length;u++){var i=r[u];if(nn(i)&&de(i),t&&d!==null&&!$&&!((o=i==null?void 0:i.reactions)!=null&&o.includes(n))&&(i.reactions??(i.reactions=[])).push(n),i.version>n.version)return!0}}t||P(n,g)}return!1}function cr(n,e,r){throw n}function Ee(n){var f;var e=E,r=x,t=N,u=h,i=$,l=C;E=null,x=0,N=null,h=n.f&(M|En)?null:n,$=!W&&(n.f&B)!==0,C=null;try{var o=(0,n.fn)(),a=n.deps;if(E!==null){var s;if(sn(n,x),a!==null&&x>0)for(a.length=x+E.length,s=0;s<E.length;s++)a[x+s]=E[s];else n.deps=a=E;if(!$)for(s=x;s<a.length;s++)((f=a[s]).reactions??(f.reactions=[])).push(n)}else a!==null&&x<a.length&&(sn(n,x),a.length=x);return o}finally{E=e,x=r,N=t,h=u,$=i,C=l}}function _r(n,e){let r=e.reactions;if(r!==null){var t=r.indexOf(n);if(t!==-1){var u=r.length-1;u===0?r=e.reactions=null:(r[t]=r[u],r.pop())}}r===null&&e.f&D&&(E===null||!E.includes(e))&&(P(e,J),e.f&(B|vn)||(e.f^=vn),sn(e,0))}function sn(n,e){var r=n.deps;if(r!==null)for(var t=e;t<r.length;t++)_r(n,r[t])}function me(n,e=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var t=r.next;an(r,e),r=t}}function fn(n){var e=n.f;if(!(e&ln)){P(n,g);var r=d,t=p;d=n,p=n.ctx;try{e&Jn||me(n),ae(n);var u=Ee(n);n.teardown=typeof u=="function"?u:null,n.version=he}catch(i){cr(i)}finally{d=r,p=t}}}function ye(){G>1e3&&(G=0,Ye()),G++}function ge(n){var e=n.length;if(e!==0){ye();var r=W;W=!0;try{for(var t=0;t<e;t++){var u=n[t];u.f&g||(u.f^=g);var i=[];be(u,i),vr(i)}}finally{W=r}}}function vr(n){var e=n.length;if(e!==0)for(var r=0;r<e;r++){var t=n[r];!(t.f&(ln|Z))&&nn(t)&&(fn(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?fe(t):t.fn=null))}}function dr(){if(un=!1,G>1001)return;const n=k;k=[],ge(n),un||(G=0)}function yn(n){_n===pe&&(un||(un=!0,queueMicrotask(dr)));for(var e=n;e.parent!==null;){e=e.parent;var r=e.f;if(r&(En|M)){if(!(r&g))return;e.f^=g}}k.push(e)}function be(n,e){var r=n.first,t=[];n:for(;r!==null;){var u=r.f,i=(u&M)!==0,l=i&&(u&g)!==0;if(!l&&!(u&Z))if(u&X){i?r.f^=g:nn(r)&&fn(r);var o=r.first;if(o!==null){r=o;continue}}else u&Xn&&t.push(r);var a=r.next;if(a===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var s=c.next;if(s!==null){r=s;continue n}c=c.parent}}r=a}for(var f=0;f<t.length;f++)o=t[f],e.push(o),be(o,e)}function xe(n){var e=_n,r=k;try{ye();const u=[];_n=ar,k=u,un=!1,ge(r);var t=n==null?void 0:n();return ur(),(k.length>0||u.length>0)&&xe(),G=0,t}finally{_n=e,k=r}}async function $r(){await Promise.resolve(),xe()}function y(n){var e=n.f;if(e&ln)return n.v;if(Y&&U.add(n),h!==null){C!==null&&C.includes(n)&&ze();var r=h.deps;E===null&&r!==null&&r[x]===n?x++:E===null?E=[n]:E.push(n),N!==null&&d!==null&&d.f&g&&!(d.f&M)&&N.includes(n)&&(P(d,L),yn(d))}if(e&D){var t=n;nn(t)&&de(t)}return n.v}function Yr(n){var e=Y,r=U;Y=!0,U=new Set;var t=U,u;try{on(n)}finally{if(Y=e,Y)for(u of U)r.add(u);U=r}for(u of t)if(u.f&Qn)for(const i of u.deps||[])i.f&D||qn(i,null);else qn(u,null)}function on(n){const e=h;try{return h=null,n()}finally{h=e}}const pr=~(L|J|g);function P(n,e){n.f=n.f&pr|e}function Wr(n){return Rn().get(n)}function Gr(n,e){return Rn().set(n,e),e}function Zr(n){return Rn().has(n)}function Rn(n){return p===null&&lr(),p.c??(p.c=new Map(hr(p)||void 0))}function hr(n){let e=n.p;for(;e!==null;){const r=e.c;if(r!==null)return r;e=e.p}return null}function Vn(n,e=1){var r=+y(n);return O(n,r+e),r}function zr(n,e){var r={};for(var t in n)e.includes(t)||(r[t]=n[t]);return r}function wr(n,e=!1,r){p={p,c:null,e:null,m:!1,s:n,x:null,l:null},e||(p.l={s:null,u:null,r1:[],r2:A(!1)})}function Er(n){const e=p;if(e!==null){n!==void 0&&(e.x=n);const l=e.e;if(l!==null){var r=d,t=h;e.e=null;try{for(var u=0;u<l.length;u++){var i=l[u];wn(i.effect),hn(i.reaction),se(i.fn)}}finally{wn(r),hn(t)}}p=e.p,e.m=!0}return n||{}}function mr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(tn in n)On(n);else if(!Array.isArray(n))for(let e in n){const r=n[e];typeof r=="object"&&r&&tn in r&&On(r)}}}function On(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let t in n)try{On(n[t],e)}catch{}const r=zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=qe(r);for(let u in t){const i=t[u].get;if(i)try{i.call(n)}catch{}}}}}function K(n,e=null,r){if(typeof n!="object"||n===null||tn in n)return n;const t=zn(n);if(t!==Fe&&t!==ke)return n;var u=new Map,i=Zn(n),l=A(0);i&&u.set("length",A(n.length));var o;return new Proxy(n,{defineProperty(a,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ge();var c=u.get(s);return c===void 0?(c=A(f.value),u.set(s,c)):O(c,K(f.value,o)),!0},deleteProperty(a,s){var f=u.get(s);return f===void 0?s in a&&u.set(s,A(b)):(O(f,b),Hn(l)),!0},get(a,s,f){var w;if(s===tn)return n;var c=u.get(s),_=s in a;if(c===void 0&&(!_||(w=j(a,s))!=null&&w.writable)&&(c=A(K(_?a[s]:b,o)),u.set(s,c)),c!==void 0){var v=y(c);return v===b?void 0:v}return Reflect.get(a,s,f)},getOwnPropertyDescriptor(a,s){var f=Reflect.getOwnPropertyDescriptor(a,s);if(f&&"value"in f){var c=u.get(s);c&&(f.value=y(c))}else if(f===void 0){var _=u.get(s),v=_==null?void 0:_.v;if(_!==void 0&&v!==b)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(a,s){var v;if(s===tn)return!0;var f=u.get(s),c=f!==void 0&&f.v!==b||Reflect.has(a,s);if(f!==void 0||d!==null&&(!c||(v=j(a,s))!=null&&v.writable)){f===void 0&&(f=A(c?K(a[s],o):b),u.set(s,f));var _=y(f);if(_===b)return!1}return c},set(a,s,f,c){var F;var _=u.get(s),v=s in a;if(i&&s==="length")for(var w=f;w<_.v;w+=1){var T=u.get(w+"");T!==void 0?O(T,b):w in a&&(T=A(b),u.set(w+"",T))}_===void 0?(!v||(F=j(a,s))!=null&&F.writable)&&(_=A(void 0),O(_,K(f,o)),u.set(s,_)):(v=_.v!==b,O(_,K(f,o)));var I=Reflect.getOwnPropertyDescriptor(a,s);if(I!=null&&I.set&&I.set.call(c,f),!v){if(i&&typeof s=="string"){var S=u.get("length"),q=Number(s);Number.isInteger(q)&&q>=S.v&&O(S,q+1)}Hn(l)}return!0},ownKeys(a){y(l);var s=Reflect.ownKeys(a).filter(_=>{var v=u.get(_);return v===void 0||v.v!==b});for(var[f,c]of u)c.v!==b&&!(f in a)&&s.push(f);return s},setPrototypeOf(){Ze()}})}function Hn(n,e=1){O(n,n.v+e)}var Un,Te,Se;function yr(){if(Un===void 0){Un=window;var n=Element.prototype,e=Node.prototype;Te=j(e,"firstChild").get,Se=j(e,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function Nn(n=""){return document.createTextNode(n)}function R(n){return Te.call(n)}function Ln(n){return Se.call(n)}function Xr(n){return R(n)}function Jr(n,e){{var r=R(n);return r instanceof Comment&&r.data===""?Ln(r):r}}function Qr(n,e=1,r=!1){let t=n;for(;e--;)t=Ln(t);return t}function nt(n){n.textContent=""}const gr=new Set,Kn=new Set;function br(n,e,r,t){function u(i){if(t.capture||rn.call(e,i),!i.cancelBubble)return r.call(this,i)}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?tr(()=>{e.addEventListener(n,u,t)}):e.addEventListener(n,u,t),u}function et(n,e,r,t,u){var i={capture:t,passive:u},l=br(n,e,r,i);(e===document.body||e===window||e===document)&&Qe(()=>{e.removeEventListener(n,l,i)})}function rn(n){var I;var e=this,r=e.ownerDocument,t=n.type,u=((I=n.composedPath)==null?void 0:I.call(n))||[],i=u[0]||n.target,l=0,o=n.__root;if(o){var a=u.indexOf(o);if(a!==-1&&(e===document||e===window)){n.__root=e;return}var s=u.indexOf(e);if(s===-1)return;a<=s&&(l=a)}if(i=u[l]||n.target,i!==e){Me(n,"currentTarget",{configurable:!0,get(){return i||r}});try{for(var f,c=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var v=i["__"+t];if(v!==void 0&&!i.disabled)if(Zn(v)){var[w,...T]=v;w.apply(i,[n,...T])}else v.call(i,n)}catch(S){f?c.push(S):f=S}if(n.cancelBubble||_===e||_===null)break;i=_}if(f){for(let S of c)queueMicrotask(()=>{throw S});throw f}}finally{n.__root=e,delete n.currentTarget}}}function Ae(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function z(n,e){var r=d;r.nodes_start===null&&(r.nodes_start=n,r.nodes_end=e)}function rt(n,e){var r=(e&Wn)!==0,t=(e&Ne)!==0,u,i=!n.startsWith("<!>");return()=>{u===void 0&&(u=Ae(i?n:"<!>"+n),r||(u=R(u)));var l=t?document.importNode(u,!0):u.cloneNode(!0);if(r){var o=R(l),a=l.lastChild;z(o,a)}else z(l,l);return l}}function tt(n,e,r="svg"){var t=!n.startsWith("<!>"),u=(e&Wn)!==0,i=`<${r}>${t?n:"<!>"+n}</${r}>`,l;return()=>{if(!l){var o=Ae(i),a=R(o);if(u)for(l=document.createDocumentFragment();R(a);)l.appendChild(R(a));else l=R(a)}var s=l.cloneNode(!0);if(u){var f=R(s),c=s.lastChild;z(f,c)}else z(s,s);return s}}function ut(n=""){{var e=Nn(n+"");return z(e,e),e}}function it(){var n=document.createDocumentFragment(),e=document.createComment(""),r=Nn();return n.append(e,r),z(e,r),n}function st(n,e){n!==null&&n.before(e)}const xr=["touchstart","touchmove"];function Tr(n){return xr.includes(n)}function lt(n,e){e!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=e,n.nodeValue=e==null?"":e+"")}function at(n,e){return Sr(n,e)}const H=new Map;function Sr(n,{target:e,anchor:r,props:t={},events:u,context:i,intro:l=!0}){yr();var o=new Set,a=c=>{for(var _=0;_<c.length;_++){var v=c[_];if(!o.has(v)){o.add(v);var w=Tr(v);e.addEventListener(v,rn,{passive:w});var T=H.get(v);T===void 0?(document.addEventListener(v,rn,{passive:w}),H.set(v,1)):H.set(v,T+1)}}};a(Le(gr)),Kn.add(a);var s=void 0,f=er(()=>{var c=r??e.appendChild(Nn());return dn(()=>{if(i){wr({});var _=p;_.c=i}u&&(t.$$events=u),s=n(c,t)||{},i&&Er()}),()=>{var w;for(var _ of o){e.removeEventListener(_,rn);var v=H.get(_);--v===0?(document.removeEventListener(_,rn),H.delete(_)):H.set(_,v)}Kn.delete(a),Pn.delete(s),c!==r&&((w=c.parentNode)==null||w.removeChild(c))}});return Pn.set(s,f),s}let Pn=new WeakMap;function ft(n){const e=Pn.get(n);e&&e()}function ot(n,e,r,t=null,u=!1){var i=n,l=null,o=null,a=null,s=u?Cn:0;le(()=>{a!==(a=!!e())&&(a?(l?kn(l):l=dn(()=>r(i)),o&&xn(o,()=>{o=null})):(o?kn(o):t&&(o=dn(()=>t(i))),l&&xn(l,()=>{l=null})))},s)}function ct(n,e,r){var t=n,u,i;le(()=>{u!==(u=e())&&(i&&(xn(i),i=null),u&&(i=dn(()=>r(t,u))))})}function _t(){const n=p,e=n.l.u;e&&(e.b.length&&nr(()=>{$n(n),bn(e.b)}),Fn(()=>{const r=on(()=>e.m.map(je));return()=>{for(const t of r)typeof t=="function"&&t()}}),e.a.length&&Fn(()=>{$n(n),bn(e.a)}))}function $n(n){if(n.l.s)for(const e of n.l.s)y(e);mr(n.s)}const Ar={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function vt(n,e,r){return new Proxy({props:n,exclude:e},Ar)}const Or={get(n,e){if(!n.exclude.includes(e))return y(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,r){return e in n.special||(n.special[e]=Cr({get[e](){return n.props[e]}},e,Yn)),n.special[e](r),Vn(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),Vn(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function dt(n,e){return new Proxy({props:n,exclude:e,special:{},version:A(0)},Or)}const Pr={get(n,e){let r=n.props.length;for(;r--;){let t=n.props[r];if(cn(t)&&(t=t()),typeof t=="object"&&t!==null&&e in t)return t[e]}},getOwnPropertyDescriptor(n,e){let r=n.props.length;for(;r--;){let t=n.props[r];if(cn(t)&&(t=t()),typeof t=="object"&&t!==null&&e in t){const u=j(t,e);return u&&!u.configurable&&(u.configurable=!0),u}}},has(n,e){for(let r of n.props)if(cn(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(n){const e=[];for(let r of n.props){cn(r)&&(r=r());for(const t in r)e.includes(t)||e.push(t)}return e}};function pt(...n){return new Proxy({props:n},Pr)}function Cr(n,e,r,t){var Mn;var u=(r&Ce)!==0,i=(r&De)!==0,l=(r&Ie)!==0,o=(r&Re)!==0,a=n[e],s=(Mn=j(n,e))==null?void 0:Mn.set,f=t,c=!0,_=!1,v=()=>(_=!0,c&&(c=!1,o?f=on(t):f=t),f);a===void 0&&t!==void 0&&(s&&i&&We(),a=v(),s&&s(a));var w;if(i)w=()=>{var m=n[e];return m===void 0?v():(c=!0,_=!1,m)};else{var T=(u?Sn:ir)(()=>n[e]);T.f|=Qn,w=()=>{var m=y(T);return m!==void 0&&(f=void 0),m===void 0?f:m}}if(!(r&Yn))return w;if(s){var I=n.$$legacy;return function(m,V){return arguments.length>0?((!i||!V||I)&&s(V?w():m),m):w()}}var S=!1,q=!1,F=re(a),en=Sn(()=>{var m=w(),V=y(F);return S?(S=!1,q=!0,V):(q=!1,F.v=m)});return u||(en.equals=Dn),function(m,V){var Oe=y(en);if(Y&&(S=q,w(),y(F)),arguments.length>0){const gn=V?y(en):i&&l?K(m):m;return en.equals(gn)||(S=!0,O(F,gn),_&&f!==void 0&&(f=gn),y(en)),m}return Oe}}export{Rr as $,on as A,tr as B,p as C,lr as D,Fn as E,Zn as F,jr as G,Hr as H,mr as I,Ur as J,et as K,kr as L,zn as M,qe as N,Qe as O,re as P,He as Q,Nn as R,tn as S,le as T,Le as U,kn as V,dn as W,xn as X,Z as Y,d as Z,Ir as _,st as a,Mr as a0,A as a1,oe as a2,nt as a3,rr as a4,an as a5,Nr as a6,Lr as a7,Ln as a8,An as a9,j as aa,qn as ab,Un as ac,$r as ad,Yr as ae,Sn as af,Cn as ag,Gr as ah,K as ai,Zr as aj,Wr as ak,Br as al,vt as am,at as an,ft as ao,Dr as ap,Fr as aq,Er as b,pt as c,ut as d,Kr as e,Jr as f,lt as g,zr as h,_t as i,it as j,y as k,Xr as l,ir as m,qr as n,dt as o,wr as p,Cr as q,ot as r,Qr as s,rt as t,tt as u,O as v,ct as w,Vr as x,se as y,mn as z};
