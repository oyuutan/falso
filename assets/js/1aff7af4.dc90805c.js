"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[418],{5318:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),c=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=t,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(g,d(d({ref:n},s),{},{components:r})):a.createElement(g,d({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,d=new Array(o);d[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,d[1]=l;for(var c=2;c<o;c++)d[c]=r[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3269:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=r(5773),t=r(808),o=(r(7378),r(5318)),d=["components"],l={slug:"/address"},i="Address",c={unversionedId:"auto-generated/address",id:"auto-generated/address",title:"Address",description:"`randCardinalDirection`",source:"@site/docs/auto-generated/address.mdx",sourceDirName:"auto-generated",slug:"/address",permalink:"/falso/docs/address",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/address.mdx",tags:[],version:"current",frontMatter:{slug:"/address"},sidebar:"falso",previous:{title:"Getting Started",permalink:"/falso/docs/getting-started"},next:{title:"Animals",permalink:"/falso/docs/animals"}},s=[{value:"<code>randCardinalDirection</code>",id:"randcardinaldirection",children:[],level:3},{value:"<code>randCity</code>",id:"randcity",children:[],level:3},{value:"<code>randCountryCode</code>",id:"randcountrycode",children:[],level:3},{value:"<code>randCountry</code>",id:"randcountry",children:[],level:3},{value:"<code>randCounty</code>",id:"randcounty",children:[],level:3},{value:"<code>randDirection</code>",id:"randdirection",children:[],level:3},{value:"<code>randFullName</code>",id:"randfullname",children:[],level:3},{value:"<code>randLatitude</code>",id:"randlatitude",children:[],level:3},{value:"<code>randLocale</code>",id:"randlocale",children:[],level:3},{value:"<code>randLongitude</code>",id:"randlongitude",children:[],level:3},{value:"<code>randNearbyGPSCoordinate</code>",id:"randnearbygpscoordinate",children:[],level:3},{value:"<code>randOrdinalDirection</code>",id:"randordinaldirection",children:[],level:3},{value:"<code>randStateAbbr</code>",id:"randstateabbr",children:[],level:3},{value:"<code>randState</code>",id:"randstate",children:[],level:3},{value:"<code>randStreetAddress</code>",id:"randstreetaddress",children:[],level:3},{value:"<code>randStreetName</code>",id:"randstreetname",children:[],level:3},{value:"<code>randTimeZone</code>",id:"randtimezone",children:[],level:3},{value:"<code>randZipCode</code>",id:"randzipcode",children:[],level:3}],u={toc:s};function p(e){var n=e.components,r=(0,t.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"address"},"Address"),(0,o.kt)("h3",{id:"randcardinaldirection"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCardinalDirection")),(0,o.kt)("p",null,"Generate a random cardinal direction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCardinalDirection } from '@ngneat/falso';\n\nrandCardinalDirection()\nrandCardinalDirection({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCardinalDirection()}/>;\n}\n")),(0,o.kt)("h3",{id:"randcity"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCity")),(0,o.kt)("p",null,"Generate a random city."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCity } from '@ngneat/falso';\n\nrandCity()\nrandCity({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCity()}/>;\n}\n")),(0,o.kt)("h3",{id:"randcountrycode"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCountryCode")),(0,o.kt)("p",null,"Generate a random country code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCountryCode } from '@ngneat/falso';\n\nrandCountryCode()\nrandCountryCode({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCountryCode()}/>;\n}\n")),(0,o.kt)("h3",{id:"randcountry"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCountry")),(0,o.kt)("p",null,"Generate a random country."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCountry } from '@ngneat/falso';\n\nrandCountry()\nrandCountry({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCountry()}/>;\n}\n")),(0,o.kt)("h3",{id:"randcounty"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCounty")),(0,o.kt)("p",null,"Generate a random county."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCounty } from '@ngneat/falso';\n\nrandCounty()\nrandCounty({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCounty()}/>;\n}\n")),(0,o.kt)("h3",{id:"randdirection"},(0,o.kt)("inlineCode",{parentName:"h3"},"randDirection")),(0,o.kt)("p",null,"Generate a random direction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDirection } from '@ngneat/falso';\n\nrandDirection()\nrandDirection({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDirection()}/>;\n}\n")),(0,o.kt)("h3",{id:"randfullname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randFullName")),(0,o.kt)("p",null,"Generate a random full name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFullName } from '@ngneat/falso';\n\nrandFullName()\nrandFullName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFullName()}/>;\n}\n")),(0,o.kt)("h3",{id:"randlatitude"},(0,o.kt)("inlineCode",{parentName:"h3"},"randLatitude")),(0,o.kt)("p",null,"Generate a random latitude."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLatitude } from '@ngneat/falso';\n\nrandLatitude()\nrandLatitude({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLatitude()}/>;\n}\n")),(0,o.kt)("h3",{id:"randlocale"},(0,o.kt)("inlineCode",{parentName:"h3"},"randLocale")),(0,o.kt)("p",null,"Generate a random locale."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLocale } from '@ngneat/falso';\n\nrandLocale()\nrandLocale({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLocale()}/>;\n}\n")),(0,o.kt)("h3",{id:"randlongitude"},(0,o.kt)("inlineCode",{parentName:"h3"},"randLongitude")),(0,o.kt)("p",null,"Generate a random longitude."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLongitude } from '@ngneat/falso';\n\nrandLongitude()\nrandLongitude({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLongitude()}/>;\n}\n")),(0,o.kt)("h3",{id:"randnearbygpscoordinate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randNearbyGPSCoordinate")),(0,o.kt)("p",null,"Generate a random GPS coordinate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randNearbyGPSCoordinate } from '@ngneat/falso';\n\nrandNearbyGPSCoordinate()\nrandNearbyGPSCoordinate({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randNearbyGPSCoordinate()}/>;\n}\n")),(0,o.kt)("h3",{id:"randordinaldirection"},(0,o.kt)("inlineCode",{parentName:"h3"},"randOrdinalDirection")),(0,o.kt)("p",null,"Generate a random ordinal direction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randOrdinalDirection } from '@ngneat/falso';\n\nrandOrdinalDirection()\nrandOrdinalDirection({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randOrdinalDirection()}/>;\n}\n")),(0,o.kt)("h3",{id:"randstateabbr"},(0,o.kt)("inlineCode",{parentName:"h3"},"randStateAbbr")),(0,o.kt)("p",null,"Generate a random state abbr."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randStateAbbr } from '@ngneat/falso';\n\nrandStateAbbr()\nrandStateAbbr({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randStateAbbr()}/>;\n}\n")),(0,o.kt)("h3",{id:"randstate"},(0,o.kt)("inlineCode",{parentName:"h3"},"randState")),(0,o.kt)("p",null,"Generate a random state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randState } from '@ngneat/falso';\n\nrandState()\nrandState({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randState()}/>;\n}\n")),(0,o.kt)("h3",{id:"randstreetaddress"},(0,o.kt)("inlineCode",{parentName:"h3"},"randStreetAddress")),(0,o.kt)("p",null,"Generate a random street address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randStreetAddress } from '@ngneat/falso';\n\nrandStreetAddress()\nrandStreetAddress({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randStreetAddress()}/>;\n}\n")),(0,o.kt)("h3",{id:"randstreetname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randStreetName")),(0,o.kt)("p",null,"Generate a random street name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randStreetName } from '@ngneat/falso';\n\nrandStreetName()\nrandStreetName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randStreetName()}/>;\n}\n")),(0,o.kt)("h3",{id:"randtimezone"},(0,o.kt)("inlineCode",{parentName:"h3"},"randTimeZone")),(0,o.kt)("p",null,"Generate a random time zone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randTimeZone } from '@ngneat/falso';\n\nrandTimeZone()\nrandTimeZone({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randTimeZone()}/>;\n}\n")),(0,o.kt)("h3",{id:"randzipcode"},(0,o.kt)("inlineCode",{parentName:"h3"},"randZipCode")),(0,o.kt)("p",null,"Generate a random zip code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randZipCode } from '@ngneat/falso';\n\nrandZipCode()\nrandZipCode({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randZipCode()}/>;\n}\n")))}p.isMDXComponent=!0}}]);