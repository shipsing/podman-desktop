"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61634],{91665:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"interfaces/AuthenticationProvider","title":"Interface: AuthenticationProvider","description":"A provider for performing authentication to a service.","source":"@site/api/interfaces/AuthenticationProvider.md","sourceDirName":"interfaces","slug":"/interfaces/AuthenticationProvider","permalink":"/api/interfaces/AuthenticationProvider","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"AuthenticationGetSessionOptions","permalink":"/api/interfaces/AuthenticationGetSessionOptions"},"next":{"title":"AuthenticationProviderAuthenticationSessionsChangeEvent","permalink":"/api/interfaces/AuthenticationProviderAuthenticationSessionsChangeEvent"}}');var t=n(62540),r=n(43023);const o={},d="Interface: AuthenticationProvider",c={},a=[{value:"Properties",id:"properties",level:2},{value:"onDidChangeSessions",id:"ondidchangesessions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"createSession()",id:"createsession",level:3},{value:"Parameters",id:"parameters",level:4},{value:"scopes",id:"scopes",level:5},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getSessions()",id:"getsessions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"scopes?",id:"scopes-1",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"removeSession()",id:"removesession",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"sessionId",id:"sessionid",level:5},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"interface-authenticationprovider",children:"Interface: AuthenticationProvider"})}),"\n",(0,t.jsx)(s.p,{children:"A provider for performing authentication to a service."}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"ondidchangesessions",children:"onDidChangeSessions"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"readonly"})," ",(0,t.jsx)(s.strong,{children:"onDidChangeSessions"}),": ",(0,t.jsx)(s.a,{href:"/api/interfaces/Event",children:(0,t.jsx)(s.code,{children:"Event"})}),"<",(0,t.jsx)(s.a,{href:"/api/interfaces/AuthenticationProviderAuthenticationSessionsChangeEvent",children:(0,t.jsx)(s.code,{children:"AuthenticationProviderAuthenticationSessionsChangeEvent"})}),">"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["An ",(0,t.jsx)(s.a,{href:"#Event",children:"event"})," which fires when the array of sessions has changed, or data\nwithin a session has changed."]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/shipsing/podman-desktop/blob/8e154f3aff407b5c2d07599958fb268a560f3da8/packages/extension-api/src/extension-api.d.ts#L4114",children:"packages/extension-api/src/extension-api.d.ts:4114"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"createsession",children:"createSession()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"createSession"}),"(",(0,t.jsx)(s.code,{children:"scopes"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(s.code,{children:"AuthenticationSession"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Prompts a user to login."}),"\n",(0,t.jsx)(s.p,{children:"If login is successful, the onDidChangeSessions event should be fired."}),"\n",(0,t.jsx)(s.p,{children:"If login fails, a rejected promise should be returned."}),"\n",(0,t.jsx)(s.p,{children:"If the provider has specified that it does not support multiple accounts,\nthen this should never be called if there is already an existing session matching these\nscopes."}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.h5,{id:"scopes",children:"scopes"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(s.p,{children:"A list of scopes, permissions, that the new session should be created with."}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(s.code,{children:"AuthenticationSession"})}),">"]}),"\n",(0,t.jsx)(s.p,{children:"A promise that resolves to an authentication session."}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/shipsing/podman-desktop/blob/8e154f3aff407b5c2d07599958fb268a560f3da8/packages/extension-api/src/extension-api.d.ts#L4137",children:"packages/extension-api/src/extension-api.d.ts:4137"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getsessions",children:"getSessions()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"getSessions"}),"(",(0,t.jsx)(s.code,{children:"scopes"}),"?): ",(0,t.jsx)(s.code,{children:"Promise"}),"<readonly ",(0,t.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(s.code,{children:"AuthenticationSession"})}),"[]>"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Get a list of sessions."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(s.h5,{id:"scopes-1",children:"scopes?"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(s.p,{children:"An optional list of scopes. If provided, the sessions returned should match\nthese permissions, otherwise all sessions should be returned."}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<readonly ",(0,t.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(s.code,{children:"AuthenticationSession"})}),"[]>"]}),"\n",(0,t.jsx)(s.p,{children:"A promise that resolves to an array of authentication sessions."}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/shipsing/podman-desktop/blob/8e154f3aff407b5c2d07599958fb268a560f3da8/packages/extension-api/src/extension-api.d.ts#L4122",children:"packages/extension-api/src/extension-api.d.ts:4122"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"removesession",children:"removeSession()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"removeSession"}),"(",(0,t.jsx)(s.code,{children:"sessionId"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Removes the session corresponding to session id."}),"\n",(0,t.jsx)(s.p,{children:"If the removal is successful, the onDidChangeSessions event should be fired."}),"\n",(0,t.jsx)(s.p,{children:"If a session cannot be removed, the provider should reject with an error message."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(s.h5,{id:"sessionid",children:"sessionId"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"string"})}),"\n",(0,t.jsx)(s.p,{children:"The id of the session to remove."}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/shipsing/podman-desktop/blob/8e154f3aff407b5c2d07599958fb268a560f3da8/packages/extension-api/src/extension-api.d.ts#L4147",children:"packages/extension-api/src/extension-api.d.ts:4147"})})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var i=n(63696);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);