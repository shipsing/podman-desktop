"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99872],{39671:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"interfaces/BuildImageOptions","title":"Interface: BuildImageOptions","description":"Defined in3449","source":"@site/api/interfaces/BuildImageOptions.md","sourceDirName":"interfaces","slug":"/interfaces/BuildImageOptions","permalink":"/api/interfaces/BuildImageOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"BlkioStats","permalink":"/api/interfaces/BlkioStats"},"next":{"title":"CancellationToken","permalink":"/api/interfaces/CancellationToken"}}');var d=s(62540),a=s(43023);const t={},o="Interface: BuildImageOptions",r={},c=[{value:"Properties",id:"properties",level:2},{value:"abortController?",id:"abortcontroller",level:3},{value:"buildargs?",id:"buildargs",level:3},{value:"Index Signature",id:"index-signature",level:4},{value:"cachefrom?",id:"cachefrom",level:3},{value:"containerFile?",id:"containerfile",level:3},{value:"cpuperiod?",id:"cpuperiod",level:3},{value:"cpuquota?",id:"cpuquota",level:3},{value:"cpusetcpus?",id:"cpusetcpus",level:3},{value:"cpushares?",id:"cpushares",level:3},{value:"extrahosts?",id:"extrahosts",level:3},{value:"forcerm?",id:"forcerm",level:3},{value:"labels?",id:"labels",level:3},{value:"Index Signature",id:"index-signature-1",level:4},{value:"memory?",id:"memory",level:3},{value:"memswap?",id:"memswap",level:3},{value:"networkmode?",id:"networkmode",level:3},{value:"nocache?",id:"nocache",level:3},{value:"outputs?",id:"outputs",level:3},{value:"platform?",id:"platform",level:3},{value:"provider?",id:"provider",level:3},{value:"pull?",id:"pull",level:3},{value:"q?",id:"q",level:3},{value:"remote?",id:"remote",level:3},{value:"rm?",id:"rm",level:3},{value:"shmsize?",id:"shmsize",level:3},{value:"squash?",id:"squash",level:3},{value:"tag?",id:"tag",level:3},{value:"target?",id:"target",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"interface-buildimageoptions",children:"Interface: BuildImageOptions"})}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3449",children:"packages/extension-api/src/extension-api.d.ts:3449"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"abortcontroller",children:"abortController?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"abortController"}),": ",(0,d.jsx)(n.code,{children:"AbortController"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3473",children:"packages/extension-api/src/extension-api.d.ts:3473"})]}),"\n",(0,d.jsx)(n.p,{children:"The abort controller for running the build image operation"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"buildargs",children:"buildargs?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"buildargs"}),": ",(0,d.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3557",children:"packages/extension-api/src/extension-api.d.ts:3557"})]}),"\n",(0,d.jsxs)(n.p,{children:["JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the\nbuildargs as the environment context for commands run via the ",(0,d.jsx)(n.code,{children:"Dockerfile"})," RUN instruction, or for variable\nexpansion in other ",(0,d.jsx)(n.code,{children:"Dockerfilev"})," instructions. This is not meant for passing secret values.\nFor example, the build arg ",(0,d.jsx)(n.code,{children:"FOO=bar"})," would become ",(0,d.jsx)(n.code,{children:'{"FOO":"bar"}'})," in JSON. This would result in the query\nparameter ",(0,d.jsx)(n.code,{children:'buildargs={"FOO":"bar"}'}),". Note that ",(0,d.jsx)(n.code,{children:'{"FOO":"bar"}'})," should be URI component encoded."]}),"\n",(0,d.jsx)(n.h4,{id:"index-signature",children:"Index Signature"}),"\n",(0,d.jsxs)(n.p,{children:["[",(0,d.jsx)(n.code,{children:"key"}),": ",(0,d.jsx)(n.code,{children:"string"}),"]: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"cachefrom",children:"cachefrom?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"cachefrom"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3499",children:"packages/extension-api/src/extension-api.d.ts:3499"})]}),"\n",(0,d.jsx)(n.p,{children:"JSON array of images used for build cache resolution."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"containerfile",children:"containerFile?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"containerFile"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3453",children:"packages/extension-api/src/extension-api.d.ts:3453"})]}),"\n",(0,d.jsx)(n.p,{children:"Specifies a Containerfile which contains instructions for building the image"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"cpuperiod",children:"cpuperiod?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"cpuperiod"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3543",children:"packages/extension-api/src/extension-api.d.ts:3543"})]}),"\n",(0,d.jsx)(n.p,{children:"The length of a CPU period in microseconds."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"cpuquota",children:"cpuquota?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"cpuquota"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3548",children:"packages/extension-api/src/extension-api.d.ts:3548"})]}),"\n",(0,d.jsx)(n.p,{children:"Microseconds of CPU time that the container can get in a CPU period."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"cpusetcpus",children:"cpusetcpus?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"cpusetcpus"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3538",children:"packages/extension-api/src/extension-api.d.ts:3538"})]}),"\n",(0,d.jsx)(n.p,{children:"CPUs in which to allow execution (e.g., 0-3, 0,1)."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"cpushares",children:"cpushares?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"cpushares"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3533",children:"packages/extension-api/src/extension-api.d.ts:3533"})]}),"\n",(0,d.jsx)(n.p,{children:"CPU shares (relative weight)."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"extrahosts",children:"extrahosts?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"extrahosts"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3478",children:"packages/extension-api/src/extension-api.d.ts:3478"})]}),"\n",(0,d.jsx)(n.p,{children:"Extra hosts to add to /etc/hosts"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"forcerm",children:"forcerm?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"forcerm"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3518",children:"packages/extension-api/src/extension-api.d.ts:3518"})]}),"\n",(0,d.jsx)(n.p,{children:"Default: false"}),"\n",(0,d.jsx)(n.p,{children:"Always remove intermediate containers, even upon failure."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"labels",children:"labels?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"labels"}),": ",(0,d.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3572",children:"packages/extension-api/src/extension-api.d.ts:3572"})]}),"\n",(0,d.jsx)(n.p,{children:"Arbitrary key/value labels to set on the image, as a JSON map of string pairs."}),"\n",(0,d.jsx)(n.h4,{id:"index-signature-1",children:"Index Signature"}),"\n",(0,d.jsxs)(n.p,{children:["[",(0,d.jsx)(n.code,{children:"key"}),": ",(0,d.jsx)(n.code,{children:"string"}),"]: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"memory"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3523",children:"packages/extension-api/src/extension-api.d.ts:3523"})]}),"\n",(0,d.jsx)(n.p,{children:"Set memory limit for build."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"memswap",children:"memswap?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"memswap"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3528",children:"packages/extension-api/src/extension-api.d.ts:3528"})]}),"\n",(0,d.jsx)(n.p,{children:"Total memory (memory + swap). Set as -1 to disable swap."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"networkmode",children:"networkmode?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"networkmode"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3579",children:"packages/extension-api/src/extension-api.d.ts:3579"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the networking mode for the run commands during build. Supported standard values are: ",(0,d.jsx)(n.code,{children:"bridge"}),",\n",(0,d.jsx)(n.code,{children:"host"}),", ",(0,d.jsx)(n.code,{children:"none"}),", and ",(0,d.jsx)(n.code,{children:"container:<name|id>"}),". Any other value is taken as a custom network's name or ID\nto which this container should connect to."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"nocache",children:"nocache?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"nocache"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3600",children:"packages/extension-api/src/extension-api.d.ts:3600"})]}),"\n",(0,d.jsx)(n.p,{children:"Default: false"}),"\n",(0,d.jsx)(n.p,{children:"Do not use the cache when building the image."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"outputs",children:"outputs?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"outputs"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3593",children:"packages/extension-api/src/extension-api.d.ts:3593"})]}),"\n",(0,d.jsx)(n.p,{children:'Default: ""'}),"\n",(0,d.jsx)(n.p,{children:"BuildKit output configuration"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"platform",children:"platform?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"platform"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3463",children:"packages/extension-api/src/extension-api.d.ts:3463"})]}),"\n",(0,d.jsx)(n.p,{children:"Set the os/arch of the built image (and its base image, when using one) to the provided value instead of using the current operating system and architecture of the host"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"provider",children:"provider?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"provider"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/ContainerProviderConnection",children:(0,d.jsx)(n.code,{children:"ContainerProviderConnection"})})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3468",children:"packages/extension-api/src/extension-api.d.ts:3468"})]}),"\n",(0,d.jsx)(n.p,{children:"Set the provider to use, if not we will try select the first one available (sorted in favor of Podman)"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"pull",children:"pull?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"pull"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3504",children:"packages/extension-api/src/extension-api.d.ts:3504"})]}),"\n",(0,d.jsx)(n.p,{children:"Attempt to pull the image even if an older image exists locally."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"q",children:"q?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"q"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3494",children:"packages/extension-api/src/extension-api.d.ts:3494"})]}),"\n",(0,d.jsx)(n.p,{children:"Default: false"}),"\n",(0,d.jsx)(n.p,{children:"Suppress verbose build output."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"remote",children:"remote?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"remote"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3487",children:"packages/extension-api/src/extension-api.d.ts:3487"})]}),"\n",(0,d.jsx)(n.p,{children:"A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file\u2019s contents are\nplaced into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the\nfile is downloaded by the daemon and the contents therein used as the context for the build. If the URI points\nto a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path\ninside the tarball."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"rm",children:"rm?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"rm"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3511",children:"packages/extension-api/src/extension-api.d.ts:3511"})]}),"\n",(0,d.jsx)(n.p,{children:"Default: true"}),"\n",(0,d.jsx)(n.p,{children:"Remove intermediate containers after a successful build."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"shmsize",children:"shmsize?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"shmsize"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3562",children:"packages/extension-api/src/extension-api.d.ts:3562"})]}),"\n",(0,d.jsxs)(n.p,{children:["Size of ",(0,d.jsx)(n.code,{children:"/dev/shm"})," in bytes. The size must be greater than 0. If omitted the system uses 64MB."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"squash",children:"squash?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"squash"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3567",children:"packages/extension-api/src/extension-api.d.ts:3567"})]}),"\n",(0,d.jsx)(n.p,{children:"Squash the resulting images layers into a single layer."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"tag",children:"tag?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"tag"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3458",children:"packages/extension-api/src/extension-api.d.ts:3458"})]}),"\n",(0,d.jsx)(n.p,{children:"Specifies the name which is assigned to the resulting image if the build process completes successfully"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"target",children:"target?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"target"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/8a160ded75ae8fee867df22af52acda07fe894b5/packages/extension-api/src/extension-api.d.ts#L3586",children:"packages/extension-api/src/extension-api.d.ts:3586"})]}),"\n",(0,d.jsx)(n.p,{children:'Default: ""'}),"\n",(0,d.jsx)(n.p,{children:"Target build stage"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(63696);const d={},a=i.createContext(d);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);