"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61634],{65548:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(62540),t=s(43023);const r={},o="Interface: AuthenticationProvider",d={id:"interfaces/AuthenticationProvider",title:"Interface: AuthenticationProvider",description:"A provider for performing authentication to a service.",source:"@site/api/interfaces/AuthenticationProvider.md",sourceDirName:"interfaces",slug:"/interfaces/AuthenticationProvider",permalink:"/api/interfaces/AuthenticationProvider",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"AuthenticationGetSessionOptions",permalink:"/api/interfaces/AuthenticationGetSessionOptions"},next:{title:"AuthenticationProviderAuthenticationSessionsChangeEvent",permalink:"/api/interfaces/AuthenticationProviderAuthenticationSessionsChangeEvent"}},c={},a=[{value:"Properties",id:"properties",level:2},{value:"onDidChangeSessions",id:"ondidchangesessions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"createSession()",id:"createsession",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getSessions()",id:"getsessions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"removeSession()",id:"removesession",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-authenticationprovider",children:"Interface: AuthenticationProvider"})}),"\n",(0,i.jsx)(n.p,{children:"A provider for performing authentication to a service."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"ondidchangesessions",children:"onDidChangeSessions"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onDidChangeSessions"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationProviderAuthenticationSessionsChangeEvent",children:(0,i.jsx)(n.code,{children:"AuthenticationProviderAuthenticationSessionsChangeEvent"})}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"#Event",children:"event"})," which fires when the array of sessions has changed, or data\nwithin a session has changed."]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/4b9550465b5aa41b62ca08529e7d5459170e93a2/packages/extension-api/src/extension-api.d.ts#L3862",children:"packages/extension-api/src/extension-api.d.ts:3862"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"createsession",children:"createSession()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"createSession"}),"(",(0,i.jsx)(n.code,{children:"scopes"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Prompts a user to login."}),"\n",(0,i.jsx)(n.p,{children:"If login is successful, the onDidChangeSessions event should be fired."}),"\n",(0,i.jsx)(n.p,{children:"If login fails, a rejected promise should be returned."}),"\n",(0,i.jsx)(n.p,{children:"If the provider has specified that it does not support multiple accounts,\nthen this should never be called if there is already an existing session matching these\nscopes."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"scopes"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(n.p,{children:"A list of scopes, permissions, that the new session should be created with."}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})}),">"]}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves to an authentication session."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/4b9550465b5aa41b62ca08529e7d5459170e93a2/packages/extension-api/src/extension-api.d.ts#L3885",children:"packages/extension-api/src/extension-api.d.ts:3885"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getsessions",children:"getSessions()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getSessions"}),"(",(0,i.jsx)(n.code,{children:"scopes"}),"?): ",(0,i.jsx)(n.code,{children:"Promise"}),"<readonly ",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})}),"[]>"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get a list of sessions."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"scopes?"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(n.p,{children:"An optional list of scopes. If provided, the sessions returned should match\nthese permissions, otherwise all sessions should be returned."}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<readonly ",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})}),"[]>"]}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves to an array of authentication sessions."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/4b9550465b5aa41b62ca08529e7d5459170e93a2/packages/extension-api/src/extension-api.d.ts#L3870",children:"packages/extension-api/src/extension-api.d.ts:3870"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"removesession",children:"removeSession()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"removeSession"}),"(",(0,i.jsx)(n.code,{children:"sessionId"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Removes the session corresponding to session id."}),"\n",(0,i.jsx)(n.p,{children:"If the removal is successful, the onDidChangeSessions event should be fired."}),"\n",(0,i.jsx)(n.p,{children:"If a session cannot be removed, the provider should reject with an error message."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"sessionId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"The id of the session to remove."}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/4b9550465b5aa41b62ca08529e7d5459170e93a2/packages/extension-api/src/extension-api.d.ts#L3895",children:"packages/extension-api/src/extension-api.d.ts:3895"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(63696);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);