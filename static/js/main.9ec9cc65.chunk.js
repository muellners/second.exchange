(this["webpackJsonpsecond.exchange"]=this["webpackJsonpsecond.exchange"]||[]).push([[1],{101:function(e,t){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),s=n(58),o=n.n(s),i=n(65),l=n(31),r=n(23),d=n(117),j=n(17),b=n(34),u=n(36),O=n(40),v=n(59),h=n(63),m=n(6),f=Object(c.createContext)(),g=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(j.a)(n,2),s=a[0],o=a[1];return Object(m.jsx)(f.Provider,{value:{walletOverlayActive:s,setWalletOverlayActive:o},children:t})},x=function(){return Object(c.useContext)(f)},_=n(61),C=n(62),N={1:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RPC_URL_1,4:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RPC_URL_4},p=new u.a({supportedChainIds:[1,3,4,5,42]}),S=new O.b({rpc:{1:N[1]},qrcode:!0}),w=new _.a({dAppId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORTIS_DAPP_ID,networks:[1,100]}),E=new C.a({chainId:1});var T,W=n.p+"static/media/metamask.4368e45a.svg",k=n.p+"static/media/walletconnect.dfa25e47.svg",P=n.p+"static/media/portis.35dcaf3f.svg",A=n.p+"static/media/torus.d05a3b02.svg",I="MetaMask",L="WalletConnect",M="Portis",R="Torus",D={MetaMask:W,WalletConnect:k,Portis:P,Torus:A},H=(T={},Object(b.a)(T,I,p),Object(b.a)(T,L,S),Object(b.a)(T,M,w),Object(b.a)(T,R,E),T);function y(e){return e instanceof u.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof r.a?"You're connected to an unsupported network.":e instanceof u.c||e instanceof O.a||e instanceof v.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var F=function(){var e=Object(r.c)(),t=e.connector,n=e.library,s=e.chainId,o=e.account,i=e.activate,l=e.deactivate,d=e.active,b=e.error,u=a.a.useState(),O=Object(j.a)(u,2),v=O[0],f=O[1];a.a.useEffect((function(){v&&v===t&&f(void 0)}),[v,t]);var g=function(){var e=Object(r.c)(),t=e.activate,n=e.active,a=Object(c.useState)(!1),s=Object(j.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){p.isAuthorized().then((function(e){e?t(p,void 0,!0).catch((function(){i(!0)})):i(!0)}))})),Object(c.useEffect)((function(){!o&&n&&i(!0)}),[o,n]),o}();!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.c)(),n=t.active,a=t.error,s=t.activate;Object(c.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var c=function(){console.log("Handling 'connect' event"),s(p)},o=function(e){console.log("Handling 'chainChanged' event with payload",e),s(p)},i=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&s(p)},l=function(e){console.log("Handling 'networkChanged' event with payload",e),s(p)};return t.on("connect",c),t.on("chainChanged",o),t.on("accountsChanged",i),t.on("networkChanged",l),function(){t.removeListener&&(t.removeListener("connect",c),t.removeListener("chainChanged",o),t.removeListener("accountsChanged",i),t.removeListener("networkChanged",l))}}}),[n,a,e,s])}(!g||!!v);var _=x(),C=_.walletOverlayActive,N=_.setWalletOverlayActive;return Object(m.jsx)("div",{className:"WalletModal__toplevel",children:Object(m.jsxs)("div",{className:"WalletModal__container",children:[Object(m.jsx)("button",{className:"WalletModal__close-button",onClick:function(){return N(!C)},children:Object(m.jsx)(h.a,{size:25})}),Object(m.jsx)("div",{className:"WalletModal__header",children:Object(m.jsx)("div",{className:"WalletModal__title",children:"Connect Wallet"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"WalletModal__buttons-container",children:Object.keys(H).map((function(e){var n=H[e],c=n===v,a=n===t,s=!g||!!v||a||!!b;return Object(m.jsxs)("button",{className:"WalletModal__buttons",disabled:s,onClick:function(){f(n),i(H[e])},children:[Object(m.jsxs)("div",{className:"WalletModal__buttons-active",children:[c,a]}),Object(m.jsx)("img",{className:"WalletOptionLogos",src:D[e],alt:e}),Object(m.jsx)("span",{className:"WalletOptionText",children:e})]},e)}))}),Object(m.jsxs)("div",{children:[(d||b)&&Object(m.jsx)("button",{onClick:function(){l()},children:"Deactivate"}),!!b&&Object(m.jsx)("h4",{children:y(b)})]}),Object(m.jsxs)("div",{children:[!(!n||!o)&&Object(m.jsx)("button",{onClick:function(){n.getSigner(o).signMessage("Message to be signed?").then((function(e){window.alert("Success!\n\n".concat(e))})).catch((function(e){window.alert("Failure!"+(e&&e.message?"\n\n".concat(e.message):""))}))},children:"Sign Message"}),t===H[L]&&Object(m.jsx)("button",{onClick:function(){t.close()},children:"Kill WalletConnect Session"}),t===H[M]&&Object(m.jsxs)(m.Fragment,{children:[void 0!==s&&Object(m.jsx)("button",{onClick:function(){t.changeNetwork(1===s?100:1)},children:"Switch Networks"}),Object(m.jsx)("button",{onClick:function(){t.close()},children:"Kill Portis Session"})]}),t===H[R]&&Object(m.jsx)("button",{onClick:function(){t.close()},children:"Kill Torus Session"})]})]})})};function K(e){var t=new d.a(e);return t.pollingInterval=12e3,t}var U=function(){var e=x(),t=e.walletOverlayActive,n=e.setWalletOverlayActive;return Object(m.jsxs)(l.a,{children:[Object(m.jsx)("div",{className:"NavbarContainer",children:Object(m.jsxs)("nav",{children:[Object(m.jsx)(l.b,{className:"NavLogo",to:"#",children:"second.exchange"}),Object(m.jsxs)("div",{className:"NavOptions",children:[Object(m.jsx)(l.b,{className:"NavItem",to:"#",children:"Explore"}),Object(m.jsx)(l.b,{className:"NavItem",to:"#",children:"Creators"}),Object(m.jsx)(l.b,{className:"NavItem",to:"#",children:"Community"})]}),Object(m.jsx)("button",{className:"WalletConnectButton",onClick:function(){return n(!t)},children:"Connect Wallet"})]})}),t&&Object(m.jsx)(r.b,{getLibrary:K,children:Object(m.jsx)(F,{})})]})},B=n.p+"static/media/canvas.94d95a35.jpg",z=n.p+"static/media/blogging.97d26d94.png",G=n.p+"static/media/nft.74f2c6cd.jpg",V=function(){return Object(m.jsxs)("div",{className:"Home",children:[Object(m.jsx)(U,{}),Object(m.jsxs)("div",{className:"MainContent",children:[Object(m.jsx)("div",{className:"subtitle",children:"DECENTRALIZED BLOGGING AND NFT PLATFORM"}),Object(m.jsxs)("div",{className:"title-line",children:["Publish blogs,",Object(m.jsx)("br",{}),"Buy and sell as NFTs,",Object(m.jsx)("br",{}),"Support your favorite creators."]}),Object(m.jsxs)("div",{className:"HomeImages",children:[Object(m.jsx)("img",{className:"HomeImages__item",src:B,alt:"collaborate on canvas"}),Object(m.jsx)("img",{className:"HomeImages__item",src:z,alt:"write and publish blogs"}),Object(m.jsx)("img",{className:"HomeImages__item",src:G,alt:"trade NFTs"})]}),Object(m.jsx)("div",{className:"ProfileContainer",children:Object(m.jsx)(i.a,{size:42})})]})]})},J=(n(108),function(){return Object(m.jsx)(g,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(V,{})})})});o.a.render(Object(m.jsx)(J,{}),document.getElementById("root"))}},[[109,2,4]]]);
//# sourceMappingURL=main.9ec9cc65.chunk.js.map