"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[963],{5318:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,f=s["".concat(i,".").concat(d)]||s[d]||l[d]||o;return t?r.createElement(f,c(c({ref:n},m),{},{components:t})):r.createElement(f,c({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=s;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9334:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var r=t(5773),a=t(808),o=(t(7378),t(5318)),c=["components"],p={slug:"/company"},i="Company",u={unversionedId:"auto-generated/company",id:"auto-generated/company",title:"Company",description:"`randCompanyName`",source:"@site/docs/auto-generated/company.mdx",sourceDirName:"auto-generated",slug:"/company",permalink:"/falso/docs/company",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/company.mdx",tags:[],version:"current",frontMatter:{slug:"/company"},sidebar:"falso",previous:{title:"Commerce",permalink:"/falso/docs/commerce"},next:{title:"Database",permalink:"/falso/docs/database"}},m=[{value:"<code>randCompanyName</code>",id:"randcompanyname",children:[],level:3}],l={toc:m};function s(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"company"},"Company"),(0,o.kt)("h3",{id:"randcompanyname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCompanyName")),(0,o.kt)("p",null,"Generate a random company name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCompanyName } from '@ngneat/falso';\n\nrandCompanyName()\nrandCompanyName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCompanyName()}/>;\n}\n")))}s.isMDXComponent=!0}}]);