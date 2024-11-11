"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1171],{26255:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"namespaces/window/functions/withProgress","title":"Function: withProgress()","description":"withProgress\\\\(options, task): Promise\\\\","source":"@site/api/namespaces/window/functions/withProgress.md","sourceDirName":"namespaces/window/functions","slug":"/namespaces/window/functions/withProgress","permalink":"/api/namespaces/window/functions/withProgress","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"showWarningMessage","permalink":"/api/namespaces/window/functions/showWarningMessage"},"next":{"title":"InputBoxValidationSeverity","permalink":"/api/enumerations/InputBoxValidationSeverity"}}');var t=s(62540),i=s(43023);const o={},a="Function: withProgress()",c={},d=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"function-withprogress",children:"Function: withProgress()"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"withProgress"}),"<",(0,t.jsx)(n.code,{children:"R"}),">(",(0,t.jsx)(n.code,{children:"options"}),", ",(0,t.jsx)(n.code,{children:"task"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Show progress in Podman Desktop. Progress is shown while running the given callback\nand while the promise it returned isn't resolved nor rejected. The location at which\nprogress should show (and other details) is defined via the passed ",(0,t.jsx)(n.a,{href:"/api/interfaces/ProgressOptions",children:(0,t.jsx)(n.code,{children:"ProgressOptions"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"R"})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/ProgressOptions",children:(0,t.jsx)(n.code,{children:"ProgressOptions"})})]}),"\n",(0,t.jsx)(n.p,{children:"the options for the task's details"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"task"})]}),"\n",(0,t.jsxs)(n.p,{children:["A callback returning a promise. Progress state can be reported with\nthe provided ",(0,t.jsx)(n.a,{href:"/api/interfaces/Progress",children:"Progress"}),"-object."]}),"\n",(0,t.jsxs)(n.p,{children:["To report discrete progress, use ",(0,t.jsx)(n.code,{children:"increment"})," to indicate how much work has been completed. Each call with\na ",(0,t.jsx)(n.code,{children:"increment"})," value will be summed up and reflected as overall progress until 100% is reached (a value of\ne.g. ",(0,t.jsx)(n.code,{children:"10"})," accounts for ",(0,t.jsx)(n.code,{children:"10%"})," of work done).\nNote that currently only ",(0,t.jsx)(n.code,{children:"ProgressLocation.Notification"})," is capable of showing discrete progress."]}),"\n",(0,t.jsxs)(n.p,{children:["To monitor if the operation has been cancelled by the user, use the provided ",(0,t.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,t.jsx)(n.code,{children:"CancellationToken"})}),".\nNote that currently only ",(0,t.jsx)(n.code,{children:"ProgressLocation.Notification"})," is supporting to show a cancel button to cancel the\nlong-running operation."]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"R"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"The promise the task-callback returned."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Here is a simple example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"await window.withProgress({ location: ProgressLocation.TASK_WIDGET, title: `Running task` },\n  async progress => {\n    progress.report({message: 'task1' });\n    await task1();\n    progress.report({increment: 50, message: 'task2' });\n    await task2();\n  },\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The error is propagated if thrown inside the task callback."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"try {\n   await window.withProgress(\n       { location: ProgressLocation.TASK_WIDGET, title: `Running task` },\n       async progress => {\n          throw new Error('error when running a task');\n       },\n     );\n } catch (error) {\n    // do something with the error\n }\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can return a value from the task callback"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const result: number = await window.withProgress<number>(\n   { location: ProgressLocation.TASK_WIDGET, title: `Running task` },\n   async progress => {\n      // compute something\n      return 55;\n   },\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/shipsing/podman-desktop/blob/f1681898cabdef4b6af3edd17ea5fce5bd7f6871/packages/extension-api/src/extension-api.d.ts#L2200",children:"packages/extension-api/src/extension-api.d.ts:2200"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(63696);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);