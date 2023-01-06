"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},o="\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131",l={unversionedId:"klaytn-2.0/ethereum-compatibility",id:"klaytn-2.0/ethereum-compatibility",title:"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131",description:"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/klaytn-2.0/ethereum-compatibility.md",sourceDirName:"klaytn-2.0",slug:"/klaytn-2.0/ethereum-compatibility",permalink:"/ko/docs/klaytn-2.0/ethereum-compatibility",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\uc644\uacb0\uc131\uacfc \uac1c\uc120 \uc0ac\ud56d\ub4e4",permalink:"/ko/docs/klaytn-2.0/finality-and-improvements"},next:{title:"\uac70\ubc84\ub10c\uc2a4 \ud0c8\uc911\uc559\ud654",permalink:"/ko/docs/klaytn-2.0/decentralizing-governance"}},c={},p=[{value:"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4",id:"\uc774\ub354\ub9ac\uc6c0-\ub3d9\uc77c\uc131\uc744-\uc9c0\uc6d0\ud569\ub2c8\ub2e4",level:2},{value:'1. \uac1c\ubc1c \ub3c4\uad6c <a id="finality-and-improvements"></a>',id:"1-\uac1c\ubc1c-\ub3c4\uad6c-",level:3},{value:'2. EVM\uacfc API <a id="evm-and-api"></a>',id:"2-evm\uacfc-api-",level:3},{value:'3. \ucf54\uc5b4 \uac1c\ubc1c \uae30\uc5ec <a id="core-development-contribution"></a>',id:"3-\ucf54\uc5b4-\uac1c\ubc1c-\uae30\uc5ec-",level:3}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uc774\ub354\ub9ac\uc6c0-\ub3d9\uc77c\uc131"},"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131"),(0,i.kt)("h2",{id:"\uc774\ub354\ub9ac\uc6c0-\ub3d9\uc77c\uc131\uc744-\uc9c0\uc6d0\ud569\ub2c8\ub2e4"},"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7537).Z,width:"1050",height:"706"})),(0,i.kt)("h3",{id:"1-\uac1c\ubc1c-\ub3c4\uad6c-"},"1. \uac1c\ubc1c \ub3c4\uad6c ",(0,i.kt)("a",{id:"finality-and-improvements"})),(0,i.kt)("p",null,"\ud074\ub808\uc774\ud2bc \uae30\uc220 \uc2a4\ud0dd\uc758 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uc2e4\ud589 \ubc29\uc2dd\uc744 \uc774\ub354\ub9ac\uc6c0\uacfc \ud638\ud658\uc2dc\ud0b4\uc73c\ub85c\uc368, \uc774\ub354\ub9ac\uc6c0\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \ub3c4\uad6c\ub77c\uba74 \ud074\ub808\uc774\ud2bc \uc0dd\ud0dc\uacc4\uc5d0\uc11c\ub3c4 \ubb38\uc81c\uc5c6\uc774 \ub3d9\uc791\ud790 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud074\ub808\uc774\ud2bc \uc0dd\ud0dc\uacc4\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ubaa8\ub4e0 \ub3c4\uad6c\ub294 \uc774\ub354\ub9ac\uc6c0 \uc0dd\ud0dc\uacc4\uc5d0\uc11c\ub3c4 \uc0c1\ud638\uc801\uc73c\ub85c \ub3c4\uc785\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"2-evm\uacfc-api-"},"2. EVM\uacfc API ",(0,i.kt)("a",{id:"evm-and-api"})),(0,i.kt)("p",null,"\uae30\uc874 \uc774\ub354\ub9ac\uc6c0 \uc2a4\ud0dd\uc744 \uc774\uc6a9\ud568\uc73c\ub85c\uc368 EVM\uacfc \ub77c\uc774\ube0c\ub7ec\ub9ac \uc624\ud508\uc18c\uc2a4 \ucf54\ub4dc \ubca0\uc774\uc2a4\uc5d0 \ucd94\uac00\ub41c \ubaa8\ub4e0 \uac1c\uc120 \uc0ac\ud56d\ub4e4\uc744 \uc0c1\uc18d\ud569\ub2c8\ub2e4. \ud074\ub808\uc774\ud2bc EVM \ud658\uacbd\uacfc \ub3d9\uc77c\ud55c \uc635\ucf54\ub4dc\uc640 \uc2a4\ud0dd \ub85c\uc9c1\uc744 \uc9c0\uc6d0\ud568\uc73c\ub85c\uc368 \uc2e4\ud589 \ub3d9\uc791\ub3c4 \ud638\ud658\ub429\ub2c8\ub2e4. \ub610\ud55c \ub3d9\uc77c\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ud398\uc774\ub85c\ub4dc \uad6c\ubb38\uc744 \uc9c0\ub2cc JSON-RPC API\ub97c \uc9c0\uc6d0\ud558\uc5ec \uc644\uc804\ud55c \uc774\ub354\ub9ac\uc6c0 \uc778\ud130\ud398\uc774\uc2a4 \ud638\ud658\uc131\uc774 \ubcf4\uc7a5\ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"3-\ucf54\uc5b4-\uac1c\ubc1c-\uae30\uc5ec-"},"3. \ucf54\uc5b4 \uac1c\ubc1c \uae30\uc5ec ",(0,i.kt)("a",{id:"core-development-contribution"})),(0,i.kt)("p",null,"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131\uc744 \uc9c0\uc6d0\ud568\uc73c\ub85c\uc368 \ud074\ub808\uc774\ud2bc\uacfc \uc774\ub354\ub9ac\uc6c0 \uc0dd\ud0dc\uacc4 \uac04 \ud638\ud61c\uc801 \uad00\uacc4\uac00 \uac00\ub2a5\ud574\uc9d1\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uc774\ub354\ub9ac\uc6c0 \uac1c\uc120 \uc81c\uc548(EIP)\uc740 \ud074\ub808\uc774\ud2bc \ucf54\uc5b4 \uac1c\ubc1c \uc5b4\uc820\ub2e4\uc5d0 \uc774\uc804, \uc801\uc6a9\ub420 \uc218 \uc788\uc744 \uac83\uc774\uba70 \ud074\ub808\uc774\ud2bc \uac1c\uc120 \uc81c\uc548(KIP) \ub610\ud55c \uc774\ub354\ub9ac\uc6c0\uacfc EVM\uc758 \ubc1c\uc804\uc5d0 \uae30\uc5ec\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \ud55c \uc0dd\ud0dc\uacc4\uc5d0 \ub300\ud55c \uac1c\ubc1c \ucee4\ubba4\ub2c8\ud2f0\uc758 \uae30\uc5ec\ub294 \ub450 \uc0dd\ud0dc\uacc4 \ubaa8\ub450\uc5d0 \ub300\ud55c \uae30\uc5ec\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4."))}s.isMDXComponent=!0},7537:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/triangle-a5c3065d450f3cd0b181ba5a7a964816.png"}}]);