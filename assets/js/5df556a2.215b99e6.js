"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28903],{5803:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var t=s(18424),o=s(62540),i=s(43023),a=s(64566),l=s.n(a);const r={title:"Release Notes - Podman Desktop 0.15",description:"Podman Desktop 0.15 has been released!",slug:"podman-desktop-release-0.15",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-0.15.webp"},d=void 0,h={authorsImageUrls:[void 0]},c=[{value:"Release Details",id:"release-details",level:2},{value:"Update to Podman v4.5.O",id:"update-to-podman-v45o",level:3},{value:"Kind Ingress",id:"kind-ingress",level:3},{value:"Podliness: Ability to Choose External Ports when Podifying Containers",id:"podliness-ability-to-choose-external-ports-when-podifying-containers",level:3},{value:"Cleanliness: New Navigation Bar, Dialogs, and Palette",id:"cleanliness-new-navigation-bar-dialogs-and-palette",level:3},{value:"New Navgation Bar",id:"new-navgation-bar",level:4},{value:"Updated Dialogs",id:"updated-dialogs",level:4},{value:"Colors",id:"colors",level:4},{value:"Other UI and UX Improvements",id:"other-ui-and-ux-improvements",level:3},{value:"Markdown Support for Extensions",id:"markdown-support-for-extensions",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Final notes",id:"final-notes",level:2}];function p(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Podman Desktop 0.15 - Cleanliness is next to Podliness!"}),"\n",(0,o.jsx)(n.p,{children:"It has only been two weeks since our last release, but we really wanted to complete a few scenarios,\nfix a few bugs, and show off several design updates and UI improvements that we have been working on."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podman Version"}),": Podman 4.5 now included in Windows and Mac installers."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Kind Ingress"}),": Creating an ingress to expose services outside the Kind cluster."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podliness"}),": Ability to choose external ports when podifying containers."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cleanliness"}),": New navigation bar, dialog, and palette update."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"UX and UI Improvements"}),": Markdown support for extensions."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 0.15 is now available. ",(0,o.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Podman-desktop-0-15-hero",src:s(49613).A+"",width:"1920",height:"1432"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,o.jsx)(n.h3,{id:"update-to-podman-v45o",children:"Update to Podman v4.5.O"}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 0.15 embeds ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v4.5.0",children:"Podman 4.5.0"})," in\nWindows and macOS installers ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2115",children:"#2115"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"kind-ingress",children:"Kind Ingress"}),"\n",(0,o.jsxs)(n.p,{children:["Wait a minute, didn't we enable this last release? Well yes, last time we did add support for installing\nthe Contour ingress controller on Kind ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1675",children:"#1675"}),",\nbut you still couldn't access your containers without the corresponding ingress."]}),"\n",(0,o.jsxs)(n.p,{children:["This release adds a simple checkbox you can use when deploying to Kind to create an ingress and\nmake your service accessible ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1322",children:"#1322"}),"."]}),"\n",(0,o.jsx)(l(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/232894496-cbaea036-a14c-46c6-bfa3-bacca629a161.mov",width:"100%",height:"100%"}),"\n",(0,o.jsx)(n.h3,{id:"podliness-ability-to-choose-external-ports-when-podifying-containers",children:"Podliness: Ability to Choose External Ports when Podifying Containers"}),"\n",(0,o.jsxs)(n.p,{children:["When you create a pod from of a set of containers (Podifying!), you probably don't want to expose every\nsingle port from every container to the world. With an updated panel you can now see which ports each container\nexposes, pick which should remain visible outside the pod, and which are for internal use\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2232",children:"#2232"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/49404737/234527674-ed14f52c-8f66-445f-8038-c8135bb61136.gif",alt:"Podify page"})}),"\n",(0,o.jsx)(n.h3,{id:"cleanliness-new-navigation-bar-dialogs-and-palette",children:"Cleanliness: New Navigation Bar, Dialogs, and Palette"}),"\n",(0,o.jsx)(n.p,{children:"It was time to catch up on some design ideas and do some UI cleanup!"}),"\n",(0,o.jsx)(n.h4,{id:"new-navgation-bar",children:"New Navgation Bar"}),"\n",(0,o.jsxs)(n.p,{children:["The navigation bar is now always fixed on the left size, without labels. This opens up more space\nfor the content on each page, and is easier to jump in and out of ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings"]}),".\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2167",children:"#2167"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Navigation bar",src:s(8043).A+"",width:"252",height:"606"})}),"\n",(0,o.jsx)(n.h4,{id:"updated-dialogs",children:"Updated Dialogs"}),"\n",(0,o.jsxs)(n.p,{children:["We wanted messages and dialog boxes to feel a bit more integrated, so we have a new message box\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1808",children:"#1808"})," and use it for all dialogs opened by\nextensions, pruning containers/pods/images/volumes ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2138",children:"#2138"}),",\nand updating Podman Desktop itself ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2249",children:"#2249"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Dialog",src:s(32381).A+"",width:"1114",height:"454"})}),"\n",(0,o.jsx)(n.h4,{id:"colors",children:"Colors"}),"\n",(0,o.jsxs)(n.p,{children:["We spent some time tweaking colors and closing on our final palette\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2199",children:"#2199"}),", updating the colors in the terminal & detail page\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2222",children:"#2222"}),", tweaking the navigation and main page colors\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2223",children:"#2223"}),",\nand improving the look of forms ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2156",children:"#2156"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We're not done yet, but hopefully you will notice a more polished, consistent, good-looking application!"}),"\n",(0,o.jsx)(n.h3,{id:"other-ui-and-ux-improvements",children:"Other UI and UX Improvements"}),"\n",(0,o.jsx)(n.h4,{id:"markdown-support-for-extensions",children:"Markdown Support for Extensions"}),"\n",(0,o.jsxs)(n.p,{children:["We added a new component to display markdown ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2219",children:"#2219"})," and\nenabled it in preferences ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2253",children:"#2253"}),", and\nprovider properties/creation pages ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2152",children:"#2152"}),".\nWe can now embed links and other formatting in preferences, and extensions can use them in many places, for example:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Markdown",src:s(58902).A+"",width:"1620",height:"264"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["We know which ",(0,o.jsx)(n.strong,{children:"Settings"})," page is used the most often, so now it's the default: ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})," ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2105",children:"#2105"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Extensions can now use the Tasks API to let long running tasks continue in the background ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2019",children:"#2019"})," and the existing withProgress API also uses the task manager now\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2187",children:"#2187"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/695993/233560830-85cfa685-5dcd-4efa-9fae-730a8a9eef3b.gif",alt:"Task API"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Images are now sorted by age ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2311",children:"#2311"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When you start/stop a container or pod, the button is now animated instead of having an separate spinner\n",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2101",children:"#2101"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences"]})," page now has a search bar ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2128",children:"#2128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Search preferences",src:s(18823).A+"",width:"1162",height:"394"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The Help page has been updated ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/431",children:"#431"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Updated Help",src:s(24100).A+"",width:"1386",height:"1222"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["There was no way to see log or outcome if you leave the Kind cluster creation page ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2079",children:"#2079"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Kind image load doesn't show a notification ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2225",children:"#2225"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Fix odd selection in ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Extensions"]})," ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2130",children:"#2130"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Menus are now cleaned up properly when extensions are stopped ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2188",children:"#2188"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Kind clusters are now cleaned up when Podman machine is stopped ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2306",children:"#2306"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,o.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.15.0",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Get the latest release from the ",(0,o.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},32381:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/dialog-a7641617566984fb155ab6060378c0e7.png"},24100:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/help-61063667146d82cf967c0905ee7fc9b3.png"},58902:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/markdown-62e7791bc0cf89938d344d6bdacfb3a0.png"},8043:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/navigation-a8912eb003f2c50ed0436cc5cb07be77.png"},49613:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/podman-desktop-release-0.15-89cd5f136ad85c15bc5b4d16a919140a.webp"},18823:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/prefs-8b7886c5b18178c010e3d4033f25fe5c.png"},18424:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-0.15","source":"@site/blog/2023-05-02-release-0.15.md","title":"Release Notes - Podman Desktop 0.15","description":"Podman Desktop 0.15 has been released!","date":"2023-05-02T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"kind","permalink":"/blog/tags/kind"}],"readingTime":3.69,"hasTruncateMarker":true,"authors":[{"name":"Tim deBoer","title":"Architect","url":"https://github.com/deboer-tim","imageURL":"https://github.com/deboer-tim.png","key":"deboer","page":null}],"frontMatter":{"title":"Release Notes - Podman Desktop 0.15","description":"Podman Desktop 0.15 has been released!","slug":"podman-desktop-release-0.15","authors":["deboer"],"tags":["podman-desktop","release","kubernetes","kind"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-0.15.webp"},"unlisted":false,"prevItem":{"title":"Podman Desktop 1.0 Release","permalink":"/blog/podman-desktop-release-1.0"},"nextItem":{"title":"Setting up and running a Kubernetes cluster locally with Podman Desktop","permalink":"/blog/running-a-local-kubernetes-cluster-with-podman-desktop"}}')}}]);