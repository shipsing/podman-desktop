"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69838],{3753:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"installation/windows-install/index","title":"Windows","description":"How to install Podman Desktop and Podman on Windows.","source":"@site/docs/installation/windows-install/index.md","sourceDirName":"installation/windows-install","slug":"/installation/windows-install/","permalink":"/docs/installation/windows-install/","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/installation/windows-install/index.md","tags":[{"inline":true,"label":"podman-desktop","permalink":"/docs/tags/podman-desktop"},{"inline":true,"label":"installing","permalink":"/docs/tags/installing"},{"inline":true,"label":"windows","permalink":"/docs/tags/windows"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Windows","description":"How to install Podman Desktop and Podman on Windows.","tags":["podman-desktop","installing","windows"],"keywords":["podman desktop","containers","podman","installing","installation","windows"]},"sidebar":"mySidebar","previous":{"title":"Installation","permalink":"/docs/installation/"},"next":{"title":"MacOS","permalink":"/docs/installation/macos-install"}}');var o=s(62540),l=s(43023);const t={sidebar_position:1,title:"Windows",description:"How to install Podman Desktop and Podman on Windows.",tags:["podman-desktop","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},a="Installing Podman Desktop and Podman on Windows",d={},r=[{value:"Installing Podman Desktop",id:"installing-podman-desktop",level:2},{value:"Silent Windows installer",id:"silent-windows-installer",level:4},{value:"Chocolatey",id:"chocolatey",level:4},{value:"Scoop package manager for Windows",id:"scoop-package-manager-for-windows",level:4},{value:"Winget",id:"winget",level:4},{value:"Installing Podman",id:"installing-podman",level:2},{value:"Use WSL2 as machine provider",id:"use-wsl2-as-machine-provider",level:3},{value:"Use Hyper-V as machine provider",id:"use-hyper-v-as-machine-provider",level:3},{value:"Verification",id:"verification",level:4},{value:"Next steps",id:"next-steps",level:4}];function c(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components},{Details:i,Icon:t}=e;return i||p("Details",!0),t||p("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"installing-podman-desktop-and-podman-on-windows",children:"Installing Podman Desktop and Podman on Windows"})}),"\n",(0,o.jsx)(e.h2,{id:"installing-podman-desktop",children:"Installing Podman Desktop"}),"\n",(0,o.jsx)(e.p,{children:"To install Podman Desktop:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/downloads/windows",children:"Download the Windows installer"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"To start the Podman Desktop installer, open the downloaded file."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Podman Desktop Setup installing",src:s(55113).A+"",width:"479",height:"192"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(e.p,{children:"Alternate installation methods:"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Silent Windows installer"}),"\n",(0,o.jsx)(e.li,{children:"Chocolatey"}),"\n",(0,o.jsx)(e.li,{children:"Scoop"}),"\n",(0,o.jsx)(e.li,{children:"Winget"}),"\n"]})]}),(0,o.jsx)(e.h4,{id:"silent-windows-installer",children:"Silent Windows installer"}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/downloads/windows",children:"Download the Windows installer"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["To install without user interaction, run the Windows installer with the silent flag ",(0,o.jsx)(e.code,{children:"/S"})," from the Command Prompt:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"> podman-desktop-1.6.4-setup-x64.exe /S\n"})}),"\n"]}),"\n"]}),(0,o.jsx)(e.h4,{id:"chocolatey",children:"Chocolatey"}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Install the ",(0,o.jsx)(e.a,{href:"https://chocolatey.org/install",children:"Chocolatey package manager"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Install from the terminal:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"> choco install podman-desktop\n"})}),"\n"]}),"\n"]}),(0,o.jsx)(e.h4,{id:"scoop-package-manager-for-windows",children:"Scoop package manager for Windows"}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/ScoopInstaller/Install#readme",children:"Install the Scoop package manager"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Install from the terminal:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"> scoop bucket add extras\n> scoop install podman-desktop\n"})}),"\n"]}),"\n"]}),(0,o.jsx)(e.h4,{id:"winget",children:"Winget"}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://aka.ms/getwinget",children:"Install the Winget Package manager for Windows"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Install from the terminal:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"> winget install -e --id RedHat.Podman-Desktop\n"})}),"\n"]}),"\n"]})]}),"\n",(0,o.jsx)(e.h2,{id:"installing-podman",children:"Installing Podman"}),"\n",(0,o.jsx)(e.p,{children:"On Windows, running the Podman container engine requires running a Linux distribution on a virtual machine."}),"\n",(0,o.jsx)(e.h3,{id:"use-wsl2-as-machine-provider",children:"Use WSL2 as machine provider"}),"\n",(0,o.jsxs)(e.p,{children:["Podman Desktop creates a ",(0,o.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/about#what-is-wsl-2",children:"Windows Subsystem for Linux version 2 (WSL 2)"})," virtual machine: the Podman Machine."]}),"\n",(0,o.jsx)(e.p,{children:"Main benefits are:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Ease of use."}),"\n",(0,o.jsx)(e.li,{children:"WSL 2 native virtualization performance."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Check that your environment has:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"6 GB RAM for the Podman Machine."}),"\n",(0,o.jsxs)(e.li,{children:["Windows Subsystem for Linux version 2 (WSL 2) prerequisites. See ",(0,o.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install",children:"Enabling WSL 2"}),", ",(0,o.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/basic-commands",children:"WSL basic commands"}),", and ",(0,o.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed",children:"Troubleshooting WSL 2"}),":","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"The Windows user has administrator privileges."}),"\n",(0,o.jsx)(e.li,{children:"Windows 64bit."}),"\n",(0,o.jsx)(e.li,{children:"Windows 10 Build 19043 or greater, or Windows 11."}),"\n",(0,o.jsxs)(e.li,{children:["On a virtual machine: ",(0,o.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization#configure-nested-virtualization",children:"Nested Virtualization enabled"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"To install the Podman Machine:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"To prepare your system, enable the WSL feature, without installing the default Ubuntu distribution of Linux."}),"\n",(0,o.jsx)(e.p,{children:"Open the Command Prompt, and run:."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"> wsl --update\n> wsl --install --no-distribution\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["If you run the Podman Desktop setup on a Windows 10 LTSC version, you require to install a specific WSL distribution. See ",(0,o.jsx)(e.a,{href:"/docs/troubleshooting/troubleshooting-podman-on-windows#windows-10-enterprise-ltsc-version-21h2-podman-desktop-is-unable-to-detect-wsl2-machine",children:"Troubleshooting Podman on Windows"})]})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Restart your computer."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.strong,{children:"Dashboard"})," screen displays: ",(0,o.jsxs)(e.em,{children:[(0,o.jsx)(t,{icon:"fa-solid fa-info",size:"lg"})," Podman needs to be set up"]}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Podman needs set up screen",src:s(46422).A+"",width:"1920",height:"1029"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Set up"})," button."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Review and validate all confirmation screens to set up the Podman machine."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"When necessary, follow the instructions to install system prerequisites."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"To verify that Podman is set up:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["In the ",(0,o.jsx)(e.strong,{children:"Dashboard"}),", the ",(0,o.jsx)(e.strong,{children:"Podman"})," tile displays ",(0,o.jsx)(e.em,{children:"Podman is running"}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Podman is running screen",src:s(76046).A+"",width:"1920",height:"1029"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"use-hyper-v-as-machine-provider",children:"Use Hyper-V as machine provider"}),"\n",(0,o.jsxs)(e.p,{children:["As an administrator, you can set up a Podman machine using Hyper-V as the machine provider type. To do so, select ",(0,o.jsx)(e.code,{children:"hyperv"})," from the ",(0,o.jsx)(e.strong,{children:"Provider Type"})," dropdown list when ",(0,o.jsx)(e.a,{href:"/docs/podman/creating-a-podman-machine",children:"creating a Podman machine"}),"."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"If you already have a running Podman machine with the WSL provider type, you will be prompted to set the Hyper-V machine as the default machine to avoid CLI errors."})}),"\n",(0,o.jsx)(e.h4,{id:"verification",children:"Verification"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Go to ",(0,o.jsx)(e.strong,{children:"Settings > Resources"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["View the created machine in the Podman tile.\n",(0,o.jsx)(e.img,{alt:"Podman machine with the hyperv provide type",src:s(69939).A+"",width:"1214",height:"476"})]}),"\n"]}),"\n",(0,o.jsx)(e.h4,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/containers",children:"Work with containers"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/kubernetes",children:"Work with Kubernetes"}),"."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},76046:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dashboard-podman-is-running-1c39ff05daf8b1b57c773f1bc33b150b.png"},46422:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dashboard-podman-needs-set-up-c4b3ae1664f8cd2764af6579522285f5.png"},55113:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/podman-desktop-setup-installing-1364ba0c57da6f44684d0fd8b76e106b.png"},69939:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/podman-machine-hyperv-88aefb583e6a8988ba0edd74f51a4da9.png"},43023:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>a});var i=s(63696);const o={},l=i.createContext(o);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);