"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1529],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const s={title:"Introduction"},o="Extend the functionality of MetaMask using Snaps",i={unversionedId:"index",id:"index",title:"Introduction",description:"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,",source:"@site/snaps/index.md",sourceDirName:".",slug:"/",permalink:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"snapsSidebar",next:{title:"Get started",permalink:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/category/get-started"}},p={},l=[{value:"What is a snap?",id:"what-is-a-snap",level:2},{value:"What can you do with a snap?",id:"what-can-you-do-with-a-snap",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extend-the-functionality-of-metamask-using-snaps"},"Extend the functionality of MetaMask using Snaps"),(0,r.kt)("p",null,"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,\ncreating new web3 end user experiences."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/get-started/install-snaps"},"installing Snaps"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Snaps is pre-release software."),(0,r.kt)("li",{parentName:"ul"},"To learn how to integrate your dapp with MetaMask, visit the\n",(0,r.kt)("a",{parentName:"li",href:"../wallet"},"MetaMask wallet developer documentation"),"."))),(0,r.kt)("h2",{id:"what-is-a-snap"},"What is a snap?"),(0,r.kt)("p",null,"A snap is a JavaScript program run in an isolated environment that customizes the wallet experience.\nSnaps have access to a limited set of capabilities, determined by the\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/how-to/request-permissions"},"permissions")," the user granted them during installation."),(0,r.kt)("h2",{id:"what-can-you-do-with-a-snap"},"What can you do with a snap?"),(0,r.kt)("p",null,"A snap can add new API methods to MetaMask, add support for different blockchain protocols, or\nmodify existing functionalities using the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),"."),(0,r.kt)("p",null,"For example, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/rpc-api#snap_dialog"},"Display a custom confirmation screen")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/rpc-api#snapnotify"},"Notify users")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/rpc-api#snap_managestate"},"Securely store and manage data")," on your device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/rpc-api#snap_getbip44entropy"},"Control non-EVM accounts and assets")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/exports#ontransaction"},"Provide transaction insights")," in MetaMask's pre-transaction window."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/reference/exports#oncronjob"},"Schedule periodic actions")," for your users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dependabot/npm_and_yarn/semver-5.7.2/snaps/how-to/use-custom-ui"},"Display custom UI")," in MetaMask using a set of pre-defined components,\nincluding inline Markdown.")),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about using Snaps or want to propose a new feature, you can interact with the\nSnaps team and community on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),"\nand the Snaps channel on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}u.isMDXComponent=!0}}]);