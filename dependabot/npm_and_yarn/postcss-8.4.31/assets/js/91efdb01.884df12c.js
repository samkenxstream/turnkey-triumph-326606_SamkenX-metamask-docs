"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={description:"Access a user's MetaMask provider using metamask-extension-provider."},s="Access a user's MetaMask provider",i={unversionedId:"how-to/access-provider",id:"how-to/access-provider",title:"Access a user's MetaMask provider",description:"Access a user's MetaMask provider using metamask-extension-provider.",source:"@site/wallet/how-to/access-provider.md",sourceDirName:"how-to",slug:"/how-to/access-provider",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/how-to/access-provider",draft:!1,tags:[],version:"current",frontMatter:{description:"Access a user's MetaMask provider using metamask-extension-provider."},sidebar:"walletSidebar",previous:{title:"Register a contract's method names",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/how-to/register-method-names"},next:{title:"Secure your dapp",permalink:"/dependabot/npm_and_yarn/postcss-8.4.31/wallet/how-to/secure-dapp"}},p={},l=[{value:"Run the example",id:"run-the-example",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-a-users-metamask-provider"},"Access a user's MetaMask provider"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/extension-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"metamask-extension-provider"))," module to\naccess a user's MetaMask provider from other web extensions."),(0,a.kt)("p",null,"The account provided by this provider is the user's MetaMask account.\nWhen sending signing requests to this provider, MetaMask prompts the user to sign with their accounts."),(0,a.kt)("p",null,"This module works in Chrome and Firefox."),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"metamask-extension-provider")," using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install metamask-extension-provider -s\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use a bundler such as ",(0,a.kt)("a",{parentName:"p",href:"https://browserify.org/"},"Browserify")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"metamask-extension-provider"),".")),(0,a.kt)("p",null,"To use the module, add something like the following to your project script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const createMetaMaskProvider = require('metamask-extension-provider');\n\nconst provider = createMetaMaskProvider();\n\nprovider.on('error', (error) => {\n  // Failed to connect to MetaMask, fallback logic.\n});\n")),(0,a.kt)("p",null,"To add support for an additional browser, add MetaMask's extension ID for that browser's store to\nthe configuration file.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "CHROME_ID": "nkbihfbeogaeaoehlefnkodbefgpgknn",\n  "FIREFOX_ID": "webextension@metamask.io"\n}\n')),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("p",null,"The\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/extension-provider/tree/master/sample-extension"},(0,a.kt)("inlineCode",{parentName:"a"},"sample-extension")),"\ndirectory contains an example web extension implementation.\nYou can easily add it to Chrome or Firefox Developer Edition."),(0,a.kt)("p",null,"You must have Browserify installed (",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g browserify"),") to edit the example."),(0,a.kt)("p",null,"You can edit the sample file ",(0,a.kt)("inlineCode",{parentName:"p"},"sample-extension/index.js")," and rebuild the file using\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm run buildSample"),"."),(0,a.kt)("p",null,"You must edit the method ",(0,a.kt)("inlineCode",{parentName:"p"},"getMetaMaskId()")," to return your local development MetaMask instance's ID.\nYou can get that from your MetaMask console using ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome.runtime.id"),"."))}d.isMDXComponent=!0}}]);