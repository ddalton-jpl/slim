"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={},a=void 0,i={unversionedId:"guides/governance/contributions/pull-requests/PULL_REQUEST_TEMPLATE",id:"guides/governance/contributions/pull-requests/PULL_REQUEST_TEMPLATE",title:"PULL_REQUEST_TEMPLATE",description:"",source:"@site/docs/guides/governance/contributions/pull-requests/PULL_REQUEST_TEMPLATE.md",sourceDirName:"guides/governance/contributions/pull-requests",slug:"/guides/governance/contributions/pull-requests/PULL_REQUEST_TEMPLATE",permalink:"/slim/docs/guides/governance/contributions/pull-requests/PULL_REQUEST_TEMPLATE",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/governance/contributions/pull-requests/PULL_REQUEST_TEMPLATE.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Pull Requests",permalink:"/slim/docs/guides/governance/contributions/pull-requests/"},next:{title:"Governance Model",permalink:"/slim/docs/guides/governance/governance-model/"}},u={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"## Purpose\n- Clear, easy-to-understand sentences outlining the purpose of the PR\n## Proposed Changes\n- [ADD] ...\n- [CHANGE] ...\n- [REMOVE] ...\n- [FIX] ...\n## Issues\n- Links to relevant issues\n- Example: issue-XYZ\n## Testing\n- Provide some proof you've tested your changes \n- Example: test results available at ...\n- Example: tested on operating system ...\n")))}d.isMDXComponent=!0}}]);