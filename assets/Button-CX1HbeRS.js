import{F as O,o as Q,p as R,q as o,v as n,H as A,I as g,l as x,J as U,i as X,r as m,k as h,f as w,a as l,w as Y,e as Z,K as $,b as ee,t as I,x as H,j as P,s as te}from"./props-Bdi_KA9d.js";import{s as ae,a as J,F as re}from"./fa-layers-text.svelte_svelte_type_style_lang-DqvQKkHy.js";import{t as k,b as ne,s as K}from"./class-DYuOaZoQ.js";import{o as de}from"./index-client-ClnnEt8S.js";import{S as se}from"./Spinner-BZFNCmi3.js";function ie(d,t){var s;var i=(s=d.$$events)==null?void 0:s[t.type],y=O(i)?i.slice():i==null?[]:[i];for(var F of y)F.call(this,t)}const M=d=>!!d&&typeof d=="object"&&"prefix"in d&&typeof d.prefix=="string"&&d.prefix.startsWith("fa");var oe=I("<span><!></span>"),le=I('<div class="flex flex-row p-0 m-0 bg-transparent justify-center items-center space-x-[4px]"><!> <!></div>'),be=I('<button type="button"><!></button>');function pe(d,t){const i=ae(t),y=Q(t,["children","$$slots","$$events","$$legacy"]);R(t,!1);let F=o(t,"title",8,void 0),s=o(t,"inProgress",8,!1),V=o(t,"disabled",8,!1),e=o(t,"type",8,"primary"),v=o(t,"icon",8,void 0),b=o(t,"selected",8,void 0),T=o(t,"padding",24,()=>"px-4 "+(e()==="tab"?"pb-1":e()==="secondary"?"py-[4px]":e()==="danger"?"py-[3px]":"py-[5px]")),j=H(void 0);de(()=>{M(v())?n(j,"fa"):n(j,"unknown")});let a=H("");A(()=>(g(b()),g(e())),()=>{b()!==void 0&&e()!=="tab"&&console.error("property selected can be used with type=tab only")}),A(()=>(g(V()),g(s()),g(e()),x(a)),()=>{V()||s()?(e()==="primary"?n(a,"bg-[var(--pd-button-disabled)]"):e()==="secondary"?n(a,"border-[1px] border-[var(--pd-button-disabled)] bg-[var(--pd-button-disabled)]"):e()==="danger"&&n(a,"border-2 border-[var(--pd-button-danger-disabled-border)] text-[var(--pd-button-danger-disabled-text)] bg-[var(--pd-button-danger-disabled-bg)]"),e()!=="danger"&&n(a,x(a)+" text-[var(--pd-button-disabled-text)]")):e()==="primary"?n(a,"bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] border-none hover:bg-[var(--pd-button-primary-hover-bg)]"):e()==="secondary"?n(a,"border-[1px] border-[var(--pd-button-secondary)] text-[var(--pd-button-secondary)] hover:bg-[var(--pd-button-secondary-hover)] hover:border-[var(--pd-button-secondary-hover)] hover:text-[var(--pd-button-text)]"):e()==="danger"?n(a,"border-2 border-[var(--pd-button-danger-border)] bg-[var(--pd-button-danger-bg)] text-[var(--pd-button-danger-text)] hover:bg-[var(--pd-button-danger-hover-bg)] hover:text-[var(--pd-button-danger-hover-text)]"):e()==="tab"?n(a,"border-b-[3px] border-[var(--pd-button-tab-border)]"):n(a,"border-none text-[var(--pd-button-link-text)] hover:bg-[var(--pd-button-link-hover-bg)]"),e()!=="tab"&&n(a,x(a)+" rounded-[4px]")}),U(),X();var r=be(),W=P(r);m(W,()=>v()||s(),u=>{var p=le();k(p,"py-[3px]",!i.default);var _=P(p);m(_,s,c=>{se(c,{size:"1em"})},c=>{var f=h(),z=w(f);m(z,()=>M(v()),B=>{re(B,{get icon(){return v()}})},B=>{var S=h(),D=w(S);m(D,()=>x(j)==="unknown",E=>{var q=h(),G=w(q);Y(G,v,(L,N)=>{N(L,{})}),l(E,q)},null,!0),l(B,S)},!0),l(c,f)});var C=te(_,2);m(C,()=>i.default,c=>{var f=oe(),z=P(f);J(z,t,"default",{}),l(c,f)}),l(u,p)},u=>{var p=h(),_=w(p);J(_,t,"default",{}),l(u,p)}),Z(()=>{ne(r,`relative ${T()??""} box-border whitespace-nowrap select-none transition-all ${x(a)??""} ${y.class??""??""}`),r.hidden=y.hidden,K(r,"title",F()),K(r,"aria-label",y["aria-label"]),r.disabled=V()||s(),k(r,"border-[var(--pd-button-tab-border-selected)]",e()==="tab"&&b()),k(r,"hover:border-[var(--pd-button-tab-hover-border)]",e()==="tab"&&!b()),k(r,"text-[var(--pd-button-tab-text-selected)]",e()==="tab"&&b()),k(r,"text-[var(--pd-button-tab-text)]",e()==="tab"&&!b())}),$("click",r,function(u){ie.call(this,t,u)}),l(d,r),ee()}pe.__docgen={keywords:[],data:[{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"inProgress",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"primary",text:'"primary"'},{kind:"const",type:"string",value:"secondary",text:'"secondary"'},{kind:"const",type:"string",value:"danger",text:'"danger"'},{kind:"const",type:"string",value:"link",text:'"link"'},{kind:"const",type:"string",value:"tab",text:'"tab"'}],text:'"primary" | "secondary" | "danger" | "link" | "tab"'},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"padding",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"Button.svelte"};export{pe as B,ie as b,M as i};
