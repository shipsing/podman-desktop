"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31502],{49356:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"interfaces/KubernetesGeneratorProvider","title":"Interface: KubernetesGeneratorProvider","description":"The KubernetesGeneratorProvider allows an extension to register a custom Kube Generator for a specific","source":"@site/api/interfaces/KubernetesGeneratorProvider.md","sourceDirName":"interfaces","slug":"/interfaces/KubernetesGeneratorProvider","permalink":"/api/interfaces/KubernetesGeneratorProvider","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"KubeconfigUpdateEvent","permalink":"/api/interfaces/KubeconfigUpdateEvent"},"next":{"title":"KubernetesProviderConnection","permalink":"/api/interfaces/KubernetesProviderConnection"}}');var s=r(62540),i=r(43023);const a={},d="Interface: KubernetesGeneratorProvider",o={},c=[{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"types",id:"types",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"generate()",id:"generate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-kubernetesgeneratorprovider",children:"Interface: KubernetesGeneratorProvider"})}),"\n",(0,s.jsx)(n.p,{children:"The KubernetesGeneratorProvider allows an extension to register a custom Kube Generator for a specific\nKubernetesGeneratorType."}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/f1681898cabdef4b6af3edd17ea5fce5bd7f6871/packages/extension-api/src/extension-api.d.ts#L2396",children:"packages/extension-api/src/extension-api.d.ts:2396"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"types",children:"types"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"types"}),": ",(0,s.jsx)(n.a,{href:"/api/type-aliases/KubernetesGeneratorSelector",children:(0,s.jsx)(n.code,{children:"KubernetesGeneratorSelector"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/f1681898cabdef4b6af3edd17ea5fce5bd7f6871/packages/extension-api/src/extension-api.d.ts#L2397",children:"packages/extension-api/src/extension-api.d.ts:2397"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"generate",children:"generate()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"generate"}),"(",(0,s.jsx)(n.code,{children:"kubernetesGeneratorArguments"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/api/interfaces/GenerateKubeResult",children:(0,s.jsx)(n.code,{children:"GenerateKubeResult"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"kubernetesGeneratorArguments"}),": ",(0,s.jsx)(n.a,{href:"/api/type-aliases/KubernetesGeneratorArgument",children:(0,s.jsx)(n.code,{children:"KubernetesGeneratorArgument"})}),"[]"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/api/interfaces/GenerateKubeResult",children:(0,s.jsx)(n.code,{children:"GenerateKubeResult"})}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/f1681898cabdef4b6af3edd17ea5fce5bd7f6871/packages/extension-api/src/extension-api.d.ts#L2398",children:"packages/extension-api/src/extension-api.d.ts:2398"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(63696);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);