(this["webpackJsonpurl-shortner"]=this["webpackJsonpurl-shortner"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r,c=n(1),s=n.n(c),a=n(18),i=n.n(a),l=(n(39),n(20)),o=n(6),u=n(4),j=n(3),d=n.n(j),b=n(7),h=n(5),O=n.p+"static/media/logo.83464303.svg",p=n(9),f=n.n(p),v=n(17),x=n.n(v),g=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r,c,s,a,i,l){var o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(""),a(""),e.next=5,x.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/users/signUp"),{email:t,password:n},{withCredentials:!0});case 5:r(""),c(""),i(!0),l(),e.next=19;break;case 11:if(e.prev=11,e.t0=e.catch(0),!((o=e.t0.response.data).fields.length>1)){e.next=18;break}return s(o.message[0]),a(o.message[1]),e.abrupt("return");case 18:o.fields.includes("email")?s(o.message):a(o.message);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r,c,s,a,i,l){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r,c,s,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/user/login"),{email:t,password:n},{withCredentials:!0});case 3:r(""),c(""),s(1),a(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r,c,s,a){return e.apply(this,arguments)}}(),k=function(e){x.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/user/signOut"),{headers:{Authorization:"Bearer "+e}})},w=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/getLinks"),{headers:{Authorization:"Bearer "+r}});case 3:c=e.sent,t(c.data),n(new Array(c.data.length).fill(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/deleteLink"),{data:{_id:t},headers:{Authorization:"Bearer "+n}});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=(n(59),n(0)),N=function(){var e=Object(u.f)(),t=Object(c.useState)(f.a.get("jwt")),n=Object(h.a)(t,2),r=n[0],s=n[1],a=document.body,i=Object(c.useState)([!1,!1]),l=Object(h.a)(i,2),j=l[0],p=l[1];return a.classList.toggle("noScroll",j[0]),Object(y.jsxs)("div",{className:"navbar",children:[Object(y.jsx)("img",{className:"logo",src:O,alt:"",onClick:function(){return e.push("/")}}),Object(y.jsxs)("div",{className:"navbar--contents",children:[Object(y.jsx)("div",{className:"navbar--links",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Features"}),Object(y.jsx)("li",{children:"Pricing"}),Object(y.jsx)("li",{children:"Resources"})]})}),Object(y.jsxs)("div",{className:"navbar--login",children:[r?Object(y.jsx)("h5",{onClick:function(){f.a.remove("jwt"),s("")},children:"Logout"}):Object(y.jsx)(o.b,{className:"login_link",to:"/users/login",children:Object(y.jsx)("h5",{children:"Login"})}),r?Object(y.jsx)("button",{className:"signUp_signOut",onClick:Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(f.a.get("jwt"));case 2:f.a.remove("jwt"),s("");case 4:case"end":return e.stop()}}),e)}))),children:"Sign Out"}):Object(y.jsx)(o.b,{className:"signUp--Link",to:"/users/signUp",children:Object(y.jsx)("button",{className:"signUp_signOut",children:"Sign Up"})})]})]}),Object(y.jsxs)("div",{className:"burger ".concat(j[0]?"burg-close":""),onClick:function(){return j[0]?p([!1,!0]):p([!0,!1])},children:[Object(y.jsx)("div",{className:"line-1"}),Object(y.jsx)("div",{className:"line-2"}),Object(y.jsx)("div",{className:"line-3"})]}),Object(y.jsx)("div",{className:"overlay ".concat(j[0]?"fade-in":j[1]?"fade-out":""),children:Object(y.jsxs)("div",{className:"overlay--links",children:[Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Features"}),Object(y.jsx)("li",{children:"Pricing"}),Object(y.jsx)("li",{children:"Resources"})]}),Object(y.jsx)("div",{className:"line"}),r?Object(y.jsx)("h5",{onClick:function(){f.a.remove("jwt"),s("")},children:"Logout"}):Object(y.jsx)(o.b,{className:"login_link",to:"/users/login",target:"_blank",children:Object(y.jsx)("h5",{children:"Login"})}),r?Object(y.jsx)("button",{onClick:Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(f.a.get("refToken"));case 2:f.a.remove("refToken"),s("");case 4:case"end":return e.stop()}}),e)}))),children:"Sign Out"}):Object(y.jsx)(o.b,{className:"signUp--Link",to:"/users/signUp",target:"_blank",children:Object(y.jsx)("button",{children:"Sign Up"})})]})})]})},_=n.p+"static/media/illustration-working.c9b5ef54.svg",E=(n(66),function(){return Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("div",{className:"hero",children:Object(y.jsx)("img",{src:_,alt:""})}),Object(y.jsxs)("div",{className:"header--content",children:[Object(y.jsx)("h1",{children:"More than just shorter links"}),Object(y.jsx)("p",{children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(y.jsx)(o.b,{to:"/users/signUp",target:"_blank",children:Object(y.jsx)("button",{className:"btn--GS",children:"Get Started"})})]})]})}),C=(n(67),function(e){var t=e.link,n=e.setlink_input,r=e.shortenLink,c=e.invalidInput,s=e.handleInvalidInput;return Object(y.jsxs)("div",{className:"shortner",children:[Object(y.jsxs)("div",{className:"shortner--main",children:[Object(y.jsx)("label",{className:"linkLabel ".concat(c?"invalidLink":""),children:Object(y.jsx)("input",{className:"".concat(c?"invalid":""," linkInput"),type:"text",id:"url",value:t,placeholder:"Shorten a link here...",autoComplete:"off",onChange:function(e){c&&s(),n(e.target.value)}})}),Object(y.jsx)("button",{onClick:function(){return r()},children:"Shorten It!"})]}),Object(y.jsx)(o.b,{to:"/user/history",target:"_blank",className:"historyLink",children:"See all your previous activity."})]})}),L=n.p+"static/media/icon-brand-recognition.c349d3b6.svg",T=n.p+"static/media/icon-detailed-records.265c8aea.svg",P=n.p+"static/media/icon-fully-customizable.a1532a74.svg",A=(n(68),function(e){var t=e.className,n=e.heading,r=e.logo,c=e.children;return Object(y.jsxs)("div",{className:"card ".concat(t),children:[Object(y.jsx)("div",{className:"img-wrapper",children:Object(y.jsx)("img",{src:r,alt:""})}),Object(y.jsx)("h3",{children:n}),Object(y.jsx)("p",{children:c})]})}),R=(n(69),function(){return Object(y.jsxs)("div",{className:"stats",children:[Object(y.jsx)("h2",{children:"Advanced Statistics"}),Object(y.jsx)("p",{className:"statpara",children:"Track how your links are performing across the web with our advanced statistics dashboard."}),Object(y.jsxs)("div",{className:"Cards",children:[Object(y.jsx)(A,{className:"card-1",heading:"Brand Recognition",logo:L,children:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."}),Object(y.jsx)(A,{className:"card-2",heading:"Detailed Records",logo:T,children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}),Object(y.jsx)(A,{className:"card-3",heading:"Fully Customizable",logo:P,children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})}),U=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.shrtco.de/v2/shorten?url="+t);case 3:return e.next=5,e.sent.json();case 5:if(!(n=e.sent).error){e.next=8;break}throw new Error("error");case 8:return e.abrupt("return",{fullLink:n.result.original_link,shortLink:n.result.short_link,code:n.result.code});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{error:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),D=(n(70),n(33)),I=n.n(D),F=function(e){var t=e.id,n=e.index,r=e.copyStatus,c=e.newLinks,s=e.handleCopyStatus,a=e.deleteLink;return Object(y.jsx)("div",{className:"linkCard",children:c?Object(y.jsxs)("div",{className:"linkCard--content",children:[Object(y.jsxs)("div",{className:"original",children:[Object(y.jsx)(I.a,{className:"icon-delete",onClick:function(){return a(t)}}),Object(y.jsx)("a",{href:c.fullLink,target:"_blank",rel:"noopener noreferrer",children:c.fullLink})]}),Object(y.jsxs)("div",{className:"shortLink",children:[Object(y.jsx)("a",{id:"slink",href:c.fullLink,target:"_blank",rel:"noopener noreferrer",children:c.shortLink}),Object(y.jsx)("button",{className:"btn-copy ".concat(r?"copied":""),onClick:function(){s(n),navigator.clipboard.writeText(c.shortLink)},children:r?"Copied!":"Copy"})]})]}):Object(y.jsxs)("div",{className:"skeleton",children:[Object(y.jsx)("p",{}),Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{className:"skeleton--shortlink",children:[Object(y.jsx)("p",{}),Object(y.jsx)("div",{className:"skeleton--btn"})]})]})})},B=(n(75),function(){var e=Object(c.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(h.a)(s,2),i=a[0],l=a[1],o=Object(c.useState)(),u=Object(h.a)(o,2),j=u[0],O=u[1],p=Object(c.useState)(!1),v=Object(h.a)(p,2),g=v[0],m=v[1],k=Object(c.useState)(!1),w=Object(h.a)(k,2),S=w[0],N=w[1],_=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),r(),m(!1),e.next=5,U(i);case 5:if(!(t=e.sent).error){e.next=9;break}return O(!1),e.abrupt("return",m(!0));case 9:r(t),l(""),f.a.get("jwt")&&(n=t,c=f.a.get("jwt"),x.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/setLink"),{fullLink:n.fullLink,shortLink:n.shortLink},{headers:{Authorization:"Bearer "+c}}));case 12:case"end":return e.stop()}var n,c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(C,{link:i,setlink_input:l,shortenLink:_,invalidInput:g,handleInvalidInput:function(){return m(!1)}}),j&&Object(y.jsx)(F,{index:0,newLinks:n,copyStatus:S,handleCopyStatus:function(){return N(!S)},deleteLink:function(){return r()}}),Object(y.jsx)(R,{})]})}),K=(n(76),function(){return Object(y.jsxs)("div",{className:"booster",children:[Object(y.jsx)("h2",{children:"Boost your links today"}),Object(y.jsx)(o.b,{to:"/users/signUp",target:"_blank",children:Object(y.jsx)("button",{className:"btn--GS",children:"Get Started"})})]})});function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function z(e,t){var n=e.title,s=e.titleId,a=W(e,["title","titleId"]);return c.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:t,"aria-labelledby":s},a),n?c.createElement("title",{id:s},n):null,r||(r=c.createElement("path",{fill:"#FFF",d:"M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"})))}var M,V=c.forwardRef(z);n.p;function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function J(e,t){var n=e.title,r=e.titleId,s=Y(e,["title","titleId"]);return c.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,M||(M=c.createElement("path",{fill:"#FFF",d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})))}var q,Q=c.forwardRef(J);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function $(e,t){var n=e.title,r=e.titleId,s=Z(e,["title","titleId"]);return c.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,q||(q=c.createElement("path",{fill:"#FFF",d:"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"})))}var ee,te=c.forwardRef($);n.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ce(e,t){var n=e.title,r=e.titleId,s=re(e,["title","titleId"]);return c.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:24,height:20,ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,ee||(ee=c.createElement("path",{fill:"#FFF",d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"})))}var se=c.forwardRef(ce),ae=(n.p,n.p+"static/media/logoWhite.d37cd7a3.svg"),ie=(n(77),function(e){var t=e.heading,n=e.list;return Object(y.jsxs)("div",{className:"footer--list",children:[Object(y.jsx)("h5",{children:t}),Object(y.jsx)("ul",{children:n.map((function(e,t){return Object(y.jsx)("li",{children:e},t)}))})]})}),le=(n(78),function(){var e=Object(u.f)();return Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsx)("img",{className:"logo",src:ae,alt:"",onClick:function(){return e.push("/")}}),Object(y.jsxs)("div",{className:"footer--tags",children:[Object(y.jsx)(ie,{heading:"Features",list:["Link Shortening","Branded Links","Analytics"]}),Object(y.jsx)(ie,{heading:"Resources",list:["Blog","Developers","Support"]}),Object(y.jsx)(ie,{heading:"Company",list:["About","Our Team","Careers","Contact"]})]}),Object(y.jsxs)("div",{className:"socials",children:[Object(y.jsx)(V,{className:"social--icon",alt:"facebook"}),Object(y.jsx)(se,{className:"social--icon",alt:"twitter"}),Object(y.jsx)(te,{className:"social--icon",alt:"pinterest"}),Object(y.jsx)(Q,{className:"social--icon",alt:"instagram"})]})]})}),oe=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{}),Object(y.jsx)(E,{}),Object(y.jsx)(B,{}),Object(y.jsx)(K,{}),Object(y.jsx)(le,{})]})},ue=(n(79),function(){var e=Object(u.f)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(h.a)(a,2),l=i[0],j=i[1],d=Object(c.useState)(""),b=Object(h.a)(d,2),O=b[0],p=b[1],f=Object(c.useState)(""),v=Object(h.a)(f,2),x=v[0],m=v[1],k=Object(c.useState)(!1),w=Object(h.a)(k,2),S=w[0],N=w[1],_=document.querySelector(":root");return _.style.setProperty("--psuedoEmailMsg",'"'.concat(O,'"')),_.style.setProperty("--psuedoPasswordMsg",'"'.concat(x,'"')),Object(y.jsx)("div",{className:"userForm",children:Object(y.jsxs)("div",{className:"form",children:[Object(y.jsxs)("form",{children:[Object(y.jsx)("h2",{children:"Sign Up."}),S?Object(y.jsx)("p",{className:"success",children:"Sign Up successful!! You can now close this tab."}):Object(y.jsx)("p",{children:"This is a Project Site. Avoid using real Credentials."}),Object(y.jsxs)("label",{className:"email--label",children:["Email",Object(y.jsx)("input",{className:"email--input ".concat(O?"invalid":""),type:"text",placeholder:"Enter your email id...",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(y.jsxs)("label",{className:"password--label",children:["Password",Object(y.jsx)("input",{className:"password--input ".concat(x?"invalid":""),type:"password",placeholder:"Enter a password...",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(y.jsx)("button",{className:"btn--ls",type:"submit",onClick:function(t){t.preventDefault(),g(r,l,s,j,p,m,N,(function(){e.goBack()}))},children:"Sign Up"})]}),Object(y.jsxs)("p",{children:["Already have an account? ",Object(y.jsx)(o.b,{to:"/users/login",children:"Login"})]})]})})}),je=(n(80),function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(h.a)(s,2),i=a[0],l=a[1],u=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t,f.a.get("jwt")),w(r,l,f.a.get("jwt"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=i.slice();if(t[e])return t[e]=!1,void l(t);t.map((function(e,n){return t[n]=!1})),t[e]=!0,l(t)};return Object(c.useEffect)((function(){return w(r,l,f.a.get("jwt"))}),[]),Object(y.jsx)("div",{className:"historyPage",children:f.a.get("jwt")?Object(y.jsxs)("div",{className:"history--list",children:[Object(y.jsx)("h1",{children:"All your Links."}),0===n.length?Object(y.jsx)("h2",{children:"WOW You don't have any shortened Links!!!"}):n.map((function(e,t){return Object(y.jsx)(F,{id:e._id,index:t,copyStatus:i[t],newLinks:e,handleCopyStatus:j,deleteLink:u},e._id)}))]}):Object(y.jsxs)("div",{className:"history--msg",children:[Object(y.jsx)("h2",{children:"User Authentication Failed"}),Object(y.jsx)(o.b,{to:"/users/login",children:"Please try Loging In first."})]})})}),de=function(){var e=Object(u.f)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(h.a)(a,2),l=i[0],j=i[1],O=Object(c.useState)(),p=Object(h.a)(O,2),f=p[0],v=p[1];return Object(y.jsx)("div",{className:"userForm",children:Object(y.jsxs)("div",{className:"form",children:[Object(y.jsxs)("form",{children:[Object(y.jsx)("h2",{children:"Log In."}),1===f&&Object(y.jsx)("p",{className:"success",children:"LogIn successfull!! You can now close this tab."}),0===f&&Object(y.jsx)("p",{className:"loginError",children:"Invalid Login!!"}),Object(y.jsxs)("label",{className:"email--label",children:["Email",Object(y.jsx)("input",{className:"email--input",type:"text",placeholder:"Enter your email id..",value:r,onChange:function(e){return s(e.target.value)}}),Object(y.jsxs)("label",{className:"signUp--label password",children:["Password",Object(y.jsx)("input",{className:"password--input",type:"password",placeholder:"Enter a password...",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(y.jsx)("button",{className:"btn--ls",type:"submit",onClick:function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,m(r,l,s,j,v,(function(){return e.goBack()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Log In"})]})]}),Object(y.jsxs)("p",{children:["Don't have an Account? ",Object(y.jsx)(o.b,{to:"/users/signUp",children:"Sign Up."})]})]})})},be=(n(81),function(){return Object(y.jsx)(o.a,{children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/users/signUp",render:function(e){return Object(y.jsx)(ue,Object(l.a)({},e))}}),Object(y.jsx)(u.a,{exact:!0,path:"/users/login",render:function(e){return Object(y.jsx)(de,Object(l.a)({},e))}}),Object(y.jsx)(u.a,{exact:!0,path:"/user/history",render:function(e){return Object(y.jsx)(je,Object(l.a)({},e))}}),Object(y.jsx)(u.a,{path:"/",component:oe})]})})});i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(be,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.4b8f6090.chunk.js.map