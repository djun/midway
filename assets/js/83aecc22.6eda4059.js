"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4686],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),i=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=i(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=i(r),d=a,k=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return r?n.createElement(k,o(o({ref:e},m),{},{components:r})):n.createElement(k,o({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8759:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],p={},u="\u81ea\u5b9a\u4e49\u9519\u8bef",i={unversionedId:"custom_error",id:"custom_error",title:"\u81ea\u5b9a\u4e49\u9519\u8bef",description:"\u5728 Node.js \u4e2d\uff0c\u6bcf\u4e2a\u5f02\u5e38\u90fd\u662f\u5185\u7f6e\u7684 Error \u7c7b\u578b\u7684\u5b9e\u4f8b\u3002",source:"@site/docs/custom_error.md",sourceDirName:".",slug:"/custom_error",permalink:"/docs/custom_error",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/custom_error.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668",permalink:"/docs/custom_decorator"},next:{title:"\u4fee\u6539\u6e90\u7801\u76ee\u5f55",permalink:"/docs/change_start_dir"}},m={},c=[{value:"\u6846\u67b6\u5185\u7f6e\u7684\u9519\u8bef",id:"\u6846\u67b6\u5185\u7f6e\u7684\u9519\u8bef",level:2},{value:"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801",id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801",level:2}],s={toc:c};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u9519\u8bef"},"\u81ea\u5b9a\u4e49\u9519\u8bef"),(0,l.kt)("p",null,"\u5728 Node.js \u4e2d\uff0c\u6bcf\u4e2a\u5f02\u5e38\u90fd\u662f\u5185\u7f6e\u7684 Error \u7c7b\u578b\u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u6269\u5c55\u6807\u51c6 Error\uff0cMidway \u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u9519\u8bef\u7c7b\u578b\uff0c\u989d\u5916\u589e\u52a0\u4e86\u4e00\u4e9b\u5c5e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MidwayError extends Error {\n    // ...\n}\n")),(0,l.kt)("p",null,"\u73b0\u9636\u6bb5\uff0c\u6240\u6709 Midway \u6846\u67b6\u63d0\u4f9b\u7684\u9519\u8bef\uff0c\u90fd\u662f\u8be5\u9519\u8bef\u7c7b\u629b\u51fa\u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"MidwayError \u5305\u62ec\u51e0\u4e2a\u5c5e\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name \u9519\u8bef\u7684\u540d\u5b57\uff0c\u6bd4\u5982 Error\uff0cTypeError \u7b49\uff0c\u5728\u81ea\u5b9a\u4e49\u9519\u8bef\u4e2d\uff0c\u4e3a\u81ea\u5b9a\u4e49\u9519\u8bef\u7684\u7c7b\u540d"),(0,l.kt)("li",{parentName:"ul"},"message \u9519\u8bef\u7684\u6d88\u606f"),(0,l.kt)("li",{parentName:"ul"},"stack \u9519\u8bef\u7684\u5806\u6808"),(0,l.kt)("li",{parentName:"ul"},"code \u81ea\u5b9a\u4e49\u9519\u8bef\u7801"),(0,l.kt)("li",{parentName:"ul"},"cause \u9519\u8bef\u7684\u6765\u6e90")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u5b9e\u4f8b\u5316\u5e76\u4e14\u629b\u51fa\u6765\u4f7f\u7528\uff0c\u6bd4\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayError } from '@midwayjs/core';\n\n// ...\n\nasync findAll() {\n  throw new MidwayError('my custom error');\n}\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u4e1a\u52a1\u4e2d\u81ea\u5b9a\u4e49\u4e00\u4e9b\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\uff0c\u6211\u4eec\u4f1a\u628a\u5f02\u5e38\u7edf\u4e00\u5b9a\u4e49\u5230 error \u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 error\n\u2502       \u251c\u2500\u2500 customA.error.ts\n\u2502       \u2514\u2500\u2500 customB.error.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e1a\u52a1\u6709\u4e00\u4e9b\u590d\u7528\u7684\u5f02\u5e38\uff0c\u6bd4\u5982\u56fa\u5b9a\u7684\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/error/custom.error.ts\nimport { HttpStatus } from '@midwayjs/core';\n\nexport class CustomError extends MidwayError {\n  constructor() {\n    super('my custom error', 'CUSTOM_ERROR_CODE_10000');\n  }\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728\u4e1a\u52a1\u4e2d\u629b\u51fa\u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CustomError } from './error/custom.error';\n\n// ...\n\nasync findAll() {\n  throw new CustomError();\n}\n\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"CUSTOM_ERROR_CODE_10000")," \u4e3a\u9519\u8bef\u7684\u9519\u8bef\u7801\uff0c\u4e00\u822c\u6211\u4eec\u4f1a\u4e3a\u4e0d\u540c\u7684\u9519\u8bef\u5206\u914d\u4e0d\u540c\u7684\u9519\u8bef\u7801\u548c\u9519\u8bef\u6d88\u606f\uff0c\u4ee5\u65b9\u4fbf\u6392\u67e5\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u6846\u67b6\u5185\u7f6e\u7684\u9519\u8bef"},"\u6846\u67b6\u5185\u7f6e\u7684\u9519\u8bef"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6846\u67b6\u5185\u7f6e\u7684\u9519\u8bef\uff0c\u968f\u7740\u65f6\u95f4\u63a8\u79fb\uff0c\u6211\u4eec\u4f1a\u4e0d\u65ad\u589e\u52a0\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10001"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u5206\u7c7b\u7684\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10003"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u6ce8\u5165\u5b9a\u4e49\u672a\u627e\u5230")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10004"),(0,l.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u4e0d\u518d\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10005"),(0,l.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u672a\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10006"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u9879\u4e22\u5931")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10007"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u6ce8\u5165\u5c5e\u6027 resovler \u672a\u627e\u5230")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10008"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u91cd\u590d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIDWAY_10009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u65b9\u6cd5")))),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801"},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801"),(0,l.kt)("p",null,"\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u79cd\u901a\u7528\u7684\u6ce8\u518c\u9519\u8bef\u7801\u7684\u673a\u5236\uff0c\u9519\u8bef\u7801\u540e\u671f\u53ef\u4ee5\u65b9\u4fbf\u7684\u6392\u9519\uff0c\u7edf\u8ba1\u3002"),(0,l.kt)("p",null,"\u5728\u4e1a\u52a1\u7684\u9519\u8bef\u5b9a\u4e49\uff0c\u4ee5\u53ca\u7ec4\u4ef6\u9519\u8bef\u5b9a\u4e49\u7684\u65f6\u5019\u975e\u5e38\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u9519\u8bef\u7801\u4e00\u822c\u662f\u4e2a\u679a\u4e3e\u503c\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const CustomErrorEnum = {\n  UNKNOWN: 10000,\n  COMMON: 10001,\n  PARAM_TYPE: 10002,\n  // ...\n};\n")),(0,l.kt)("p",null,"\u5728\u7f16\u7801\u4e2d\uff0c\u6211\u4eec\u4f1a\u63d0\u4f9b\u56fa\u5b9a\u7684\u9519\u8bef\u7801\uff0c\u5e76\u4e14\u5e0c\u671b\u5728 SDK \u6216\u8005\u7ec4\u4ef6\u4e2d\u4e0d\u51b2\u7a81\uff0c\u8fd9\u5c31\u9700\u8981\u6846\u67b6\u6765\u652f\u6301\u3002"),(0,l.kt)("p",null,"Midway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"registerErrorCode")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5411\u6846\u67b6\u6ce8\u518c\u4e0d\u91cd\u590d\u7684\u9519\u8bef\u7801\uff0c\u5e76\u4e14\u8fdb\u884c\u4e00\u5b9a\u7684\u683c\u5f0f\u5316\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u5728\u6846\u67b6\u5185\u90e8\uff0c\u6211\u4eec\u6709\u5982\u4e0b\u7684\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { registerErrorCode } from '@midwayjs/core';\n\nexport const FrameworkErrorEnum = registerErrorCode('midway', {\n  UNKNOWN: 10000,\n  COMMON: 10001,\n  PARAM_TYPE: 10002,\n    // ...\n} as const);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"registerErrorCode")," \u5305\u542b\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9519\u8bef\u5206\u7ec4\uff0c\u6bd4\u5982\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"midway")," \uff0c\u5c31\u662f\u6846\u67b6\u5185\u7f6e\u9519\u8bef\u7ec4\u540d\uff0c\u5728\u4e00\u4e2a\u5e94\u7528\u4e2d\uff0c\u8fd9\u4e2a\u7ec4\u540d\u4e0d\u5e94\u8be5\u91cd\u590d"),(0,l.kt)("li",{parentName:"ul"},"\u9519\u8bef\u679a\u4e3e\u5bf9\u8c61\uff0c\u4ee5\u9519\u8bef\u540d\u4e3a key\uff0c\u9519\u8bef\u7801\u4e3a value")),(0,l.kt)("p",null,"\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u679a\u4e3e\u503c\uff0c\u679a\u4e3e\u503c\u4f1a\u4ee5\u9519\u8bef\u540d\u4f5c\u4e3a key\uff0c\u9519\u8bef\u5206\u7ec4\u52a0\u9519\u8bef\u7801\u4f5c\u4e3a value\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"FrameworkErrorEnum.UNKNOWN\n// => output: MIDWAY_10000\n\nFrameworkErrorEnum.COMMON\n// => output: MIDWAY_10001\n")),(0,l.kt)("p",null,"\u8fd9\u6837\uff0c\u5f53\u9519\u8bef\u4e2d\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"MIDWAY_10000")," \u7684\u9519\u8bef\u7801\u65f6\uff0c\u6211\u4eec\u5c31\u77e5\u9053\u662f\u4ec0\u4e48\u9519\u8bef\u4e86\uff0c\u914d\u5408\u6587\u6863\u5c31\u53ef\u4ee5\u6c89\u6dc0\u6240\u6709\u7684\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u5728\u9519\u8bef\u5b9a\u4e49\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u9519\u8bef\u7801\u679a\u4e3e\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MidwayParameterError extends MidwayError {\n  constructor(message?: string) {\n    super(message ?? 'Parameter type not match', FrameworkErrorEnum.PARAM_TYPE);\n  }\n}\n\n// user code\nasync findAll(data) {\n  if (!data.user) {\n    throw new MidwayParameterError();\n  }\n  // ...\n}\n\n// output\n// 2022-01-02 14:02:29,124 ERROR 14259 MidwayParameterError: Parameter type not match\n//          at APIController.findAll (....\n//      at /Users/harry/project/midway-v3/packages/core/src/common/webGenerator.ts:38:57\n//      at processTicksAndRejections (node:internal/process/task_queues:96:5) {\n//      code: 'MIDWAY_10002',\n//      cause: undefined,\n//  }\n\n")))}d.isMDXComponent=!0}}]);