(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={song:"css-2M-E_",cover:"css-3N6yO",defaultCover:"css-18B-b",play:"css-U5HWg",titleAndAuthor:"css-34mXh",title:"css-3q0m2",author:"css-2tp-s",actions:"css-3_YUe",button:"css-1vHto",on:"css-918VX",icon:"css-3d7f4"}},12:function(e,t,n){e.exports={wrapper:"css-2gyZx",searchForm:"css-2gxbH",input:"css-1ga49",submit:"css-2w0Jy",songs:"css-1-xgI",message:"css-RFv8s"}},19:function(e,t,n){e.exports={wrapper:"css-22QIG",hidden:"css-hf-vh",sidebar:"css-heYPX",group:"css-2oZd7",link:"css-37QmM"}},2:function(e,t,n){e.exports={wrapper:"css-33obK",form:"css-wBbBg",title:"css-2_a1Q",note:"css-14B3Q",label:"css-2T5fy",input:"css-S4PKp",footer:"css-1v_CO",flexEnd:"css-2EwBH",spaceBetween:"css-T3fWk",submit:"css-1R4sH",link:"css-3b_xy",hover:"css-1GQk4"}},25:function(e,t,n){e.exports={soundBadge:"css-3eVCu",cover:"css-cVo3j",container:"css-1KzI6",truncate:"css-2_c68",title:"css-1cI5C",author:"css-yKDVf"}},29:function(e,t,n){e.exports={wrapper:"css-wgq-p",time:"css-3WHJv",progressWrapper:"css-fhcKD",progressBar:"css-vlA8x",progressActive:"css-Gpsr7"}},31:function(e,t,n){e.exports={wrapper:"css-nG5i6",slider:"css-c4SQZ",bar:"css-885XW",activeBar:"css-39eap"}},33:function(e,t,n){e.exports={navigation:"css-3WOTR",item:"css-1a9h4"}},34:function(e,t,n){e.exports={header:"css-2w7mo",group:"css-1nw-L"}},35:function(e,t,n){e.exports={app:"css-1QguV",content:"css-3F8TE",padding:"css-PJKp6"}},36:function(e,t,n){e.exports={subnav:"css-2Xexu",link:"css-3srQw",active:"css-1g8gX"}},41:function(e,t,n){e.exports={wrapper:"css-1dEy4",img:"css-2mm8z"}},59:function(e,t,n){e.exports={wrapper:"css-37VP4"}},60:function(e,t,n){e.exports=n.p+"static/media/bg.d36aebff.webp"},61:function(e,t,n){e.exports=n.p+"static/media/bg.003204dc.jpg"},68:function(e,t,n){e.exports=n(99)},8:function(e,t,n){e.exports={wrapper:"css-2U1QJ",container:"css-2MMWa",controls:"css-2_EKY",control:"css-onWwG",on:"css-3QbQL",icon:"css-3_OOo",volume:"css-1d0Zt"}},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),o=n.n(c),s=n(6),i=n(4),l=n(23),u=n(9),p=n(101),m=n(7),f=n.n(m),d=n(1),g=n.n(d),v=n(5),h=n(24),b=n.n(h),E="".concat("http://10.0.0.242:8080","/api/v2"),y=function(){var e=Object(v.a)(g.a.mark(function e(t,n){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/login"),{method:"POST",headers:{accept:"application/json","content-type":"application/json"},data:JSON.stringify({username:t,password:n})}).then(function(e){return e.data});case 2:return a=e.sent,r=a.token,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(g.a.mark(function e(t,n){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/songs/").concat(n),{method:"GET",headers:{accept:"application/json","content-type":"application/json",authorization:"Bearer ".concat(t)}}).then(function(e){return e.data});case 2:return a=e.sent,r=a.song,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(g.a.mark(function e(t){var n,a,r,c,o=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:0,a=o.length>2&&void 0!==o[2]?o[2]:100,e.next=4,b()("".concat(E,"/songs?skip=").concat(n,"&limit=").concat(a,"&scope=3"),{method:"GET",headers:{accept:"application/json","content-type":"application/json",authorization:"Bearer ".concat(t)}}).then(function(e){return e.data});case 4:return r=e.sent,c=r.songs,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(g.a.mark(function e(t){var n,a,r,c,o=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:0,a=o.length>2&&void 0!==o[2]?o[2]:100,e.next=4,b()("".concat(E,"/favorites?skip=").concat(n,"&limit=").concat(a,"&scope=2"),{method:"GET",headers:{accept:"application/json","content-type":"application/json",authorization:"Bearer ".concat(t)}}).then(function(e){return e.data});case 4:return r=e.sent,c=r.songs,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(g.a.mark(function e(t,n){var a,r,c,o,s=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:0,r=s.length>3&&void 0!==s[3]?s[3]:100,e.next=4,b()("".concat(E,"/songs/find?query=").concat(n,"&skip=").concat(a,"&limit=").concat(r,"&scope=3"),{method:"GET",headers:{accept:"application/json","content-type":"application/json",authorization:"Bearer ".concat(t)}}).then(function(e){return e.data});case 4:return c=e.sent,o=c.songs,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(g.a.mark(function e(t,n){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/favorites/").concat(n),{method:"POST",headers:{accept:"application/json","content-type":"application/json",authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(v.a)(g.a.mark(function e(t,n){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("".concat(E,"/favorites/").concat(n),{method:"DELETE",headers:{accept:"application/json","content-type":"application/json",authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),S=n(19),L=n.n(S),C=Object(i.b)(function(e){return{token:e.login.token,hidden:e.sidebar.hidden}},function(e){return{hide:function(){return e({type:"SIDEBAR/HIDE"})},logout:function(){return e({type:"LOGOUT"})}}})(function(e){var t,n=e.token,a=e.hidden,c=e.hide,o=e.logout;return r.a.createElement("div",{className:f()(L.a.wrapper,Object(u.a)({},L.a.hidden,a)),onClick:function(e){e.target!==e.currentTarget&&e.target.className!==L.a.link||c()},role:"presentation"},r.a.createElement("div",{className:L.a.sidebar},r.a.createElement("div",{className:L.a.group},n?r.a.createElement(s.b,{className:L.a.link,to:"?logout",onClick:(t=o,function(e){e.preventDefault(),t(),window.localStorage.removeItem("token")})},"Logout"):r.a.createElement(s.b,{className:L.a.link,to:"/login"},"Login")),n&&r.a.createElement("div",{className:L.a.group},r.a.createElement(s.b,{className:L.a.link,to:"/music"},"Music"),r.a.createElement(s.b,{className:L.a.link,to:"/upload"},"Upload"))))}),P=n(59),A=n.n(P),R=function(){return r.a.createElement("div",{id:"modal",className:A.a.wrapper,style:{display:"none"}})},M=n(41),I=n.n(M),V=n(60),H=n.n(V),U=n(61),D=n.n(U),T=function(){return r.a.createElement("div",{className:I.a.wrapper},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:H.a,type:"image/webp"}),r.a.createElement("img",{className:I.a.img,alt:"background",src:D.a})))},B=n(27),G=n(28);function W(){var e=Object(B.a)(["\n  width: 48px;\n  height: 48px;\n  fill: var(--light);\n  transition: fill .2s ease;\n\n  &:hover {\n    fill: var(--red);\n  }\n"]);return W=function(){return e},e}var F=G.a.svg(W()),Y=function(){return r.a.createElement(F,{viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7, 7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z"}))};function _(){var e=Object(B.a)(["\n  font-size: 18px;\n  line-height: 1.5;\n  font-weight: 400;\n  color: var(--light);\n  text-decoration: none;\n  cursor: pointer;\n  text-shadow: 0 0 4px var(--dark);\n  transition: color .2s ease;\n\n  &:hover {\n    color: var(--red);\n  }\n"]);return _=function(){return e},e}var Z=Object(G.a)(s.b)(_()),Q=n(33),z=n.n(Q),K=function(){return r.a.createElement("nav",{className:z.a.navigation},r.a.createElement(Z,{className:z.a.item,to:"/music"},"Music"),r.a.createElement(Z,{className:z.a.item,to:"/upload"},"Upload"))};function J(){var e=Object(B.a)(["\n  fill: var(--light);\n  transition: fill .2s ease;\n\n  &:hover {\n    fill: var(--red);\n  }\n"]);return J=function(){return e},e}function X(){var e=Object(B.a)(["\n  width: 48px;\n  height: 48px;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n"]);return X=function(){return e},e}var q=G.a.button(X()),$=G.a.svg(J()),ee=Object(i.b)(function(e){return{hidden:e.sidebar.hidden}},function(e){return{show:function(){return e({type:"SIDEBAR/SHOW"})},hide:function(){return e({type:"SIDEBAR/HIDE"})}}})(function(e){var t=e.hidden,n=e.show,a=e.hide;return r.a.createElement(q,{type:"button",onClick:function(){t?n():a()}},r.a.createElement($,{viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))}),te=n(34),ne=n.n(te),ae=Object(i.b)(function(e){return{token:e.login.token}},function(e){return{logout:function(){return e({type:"LOGOUT"})}}})(function(e){var t,n=e.token,a=e.logout,c=Object(p.a)("(max-width: 640px)");return r.a.createElement("header",{className:ne.a.header},r.a.createElement("div",{className:ne.a.group},r.a.createElement(s.b,{to:"/"},r.a.createElement(Y,null)),!c&&n&&r.a.createElement(K,null)),!c&&r.a.createElement("div",{className:ne.a.group},n?r.a.createElement(Z,{to:"?logout",onClick:(t=a,function(e){e.preventDefault(),t(),window.localStorage.removeItem("token")})},"Logout"):r.a.createElement(Z,{to:"/login"},"Login")),c&&r.a.createElement(ee,null))}),re=n(11),ce=n(100),oe=n(44),se=n.n(oe),ie=n(29),le=n.n(ie),ue=function(e,t){return function(n){if("function"===typeof t){var a=n.currentTarget.getBoundingClientRect();t(e*(n.clientX-a.left)/a.width)}}},pe=function(e){var t=e.currentTime,n=e.duration,a=e.onTimeUpdate;return r.a.createElement("div",{className:le.a.wrapper},r.a.createElement("span",{className:le.a.time},se()(1e3*t).format("mm:ss")),r.a.createElement("div",{className:le.a.progressWrapper,role:"slider","aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":t,tabIndex:-1,onKeyDown:null,onClick:ue(n,a)},r.a.createElement("div",{className:le.a.progressBar},r.a.createElement("div",{className:le.a.progressActive,style:{width:"".concat(t>n?"100%":"".concat(t/n*100,"%"))}}))),r.a.createElement("span",{className:le.a.time},se()(1e3*n).format("mm:ss")))};pe.defaultProps={onTimeUpdate:null};var me=pe,fe=n(31),de=n.n(fe),ge=function(e){var t,n,c=e.value,o=e.onVolumeUpdate,s=Object(a.useState)(c),i=Object(re.a)(s,2),l=i[0],u=i[1];return r.a.createElement("div",{className:de.a.wrapper},r.a.createElement("div",{className:de.a.slider,role:"slider","aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":c,tabIndex:-1,onKeyDown:null,onClick:(t=u,n=o,function(e){var a=e.currentTarget.getBoundingClientRect(),r=1-(e.clientY-a.top)/a.height;"function"===typeof n&&n(r),t(r)})},r.a.createElement("div",{className:de.a.bar}),r.a.createElement("div",{className:de.a.activeBar,style:{height:"".concat(100*l,"%")}})))};ge.defaultProps={onVolumeUpdate:null};var ve=ge,he=n(25),be=n.n(he),Ee=function(e){var t=e.author,n=e.title,a=e.cover;return r.a.createElement("div",{className:be.a.soundBadge},r.a.createElement("div",{className:be.a.cover,style:{backgroundImage:a?"url(".concat(a,")"):""}}),r.a.createElement("div",{className:be.a.container},r.a.createElement("span",{className:f()(be.a.truncate,be.a.title)},n),r.a.createElement("span",{className:f()(be.a.truncate,be.a.author)},t)))};Ee.defaultProps={author:"No Author",title:"No Title",cover:null};var ye=Ee,we=function(e,t){return function(){var n=Object(v.a)(g.a.mark(function n(a){var r;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"PLAYER/NOW_PLAYING",payload:t}),n.prev=1,n.next=4,w(e,t);case 4:r=n.sent,a({type:"PLAYER/SONG",payload:r}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a({type:"PLAYER/ERROR",payload:n.t0.message});case 11:case"end":return n.stop()}},n,null,[[1,8]])}));return function(e){return n.apply(this,arguments)}}()},Oe=n(8),Ne=n.n(Oe),je=function(e){var t=e.token,n=e.songs,c=e.song,o=e.nowPlaying,s=e.playing,i=e.setSong,l=e.play,p=e.pause,m=Object(ce.a)({}),d=Object(re.a)(m,4),h=d[0],b=d[1],E=d[2],y=d[3],w=Object(a.useState)(!1),O=Object(re.a)(w,2),N=O[0],j=O[1],k=Object(a.useState)(!1),x=Object(re.a)(k,2),S=x[0],L=x[1],C=Object(a.useState)(0),P=Object(re.a)(C,2),A=P[0],R=P[1];return Object(a.useEffect)(function(){c&&c.url&&(y.current.src=c.url,E.play(),R(n.findIndex(function(e){return e.uuid===o})))},[c]),Object(a.useEffect)(function(){s?E.play():E.pause()},[s]),Object(a.useEffect)(function(){n.length&&b.time===b.duration&&function(){var e=Object(v.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return S?a=Math.round(Math.random()*n.length):(a=A+1)>n.length&&(a=0),R(a),e.next=4,i(t,n[a].uuid);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[b.time]),r.a.createElement("div",{className:Ne.a.wrapper},r.a.createElement("section",{className:Ne.a.container},r.a.createElement("div",{className:Ne.a.controls},r.a.createElement("button",{className:Ne.a.control,type:"button",onClick:Object(v.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&A>0)){e.next=4;break}return e.next=3,i(t,n[A-1].uuid);case 3:l();case 4:case"end":return e.stop()}},e)}))},r.a.createElement("svg",{className:Ne.a.icon},r.a.createElement("path",{d:"M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"}))),r.a.createElement("button",{className:Ne.a.control,type:"button",onClick:Object(v.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c||!(n.length>0)){e.next=3;break}return e.next=3,i(t,n[0].uuid);case 3:if(!s){e.next=6;break}return p(),e.abrupt("return");case 6:l();case 7:case"end":return e.stop()}},e)}))},r.a.createElement("svg",{className:Ne.a.icon},b.paused?r.a.createElement("path",{d:"M8,5.14V19.14L19,12.14L8,5.14Z"}):r.a.createElement("path",{d:"M14,19H18V5H14M6,19H10V5H6V19Z"}))),r.a.createElement("button",{className:Ne.a.control,type:"button",onClick:Object(v.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&A<n.length-1)){e.next=4;break}return e.next=3,i(t,n[A+1].uuid);case 3:l();case 4:case"end":return e.stop()}},e)}))},r.a.createElement("svg",{className:Ne.a.icon},r.a.createElement("path",{d:"M16,18H18V6H16M6,18L14.5,12L6,6V18Z"}))),r.a.createElement("button",{className:f()(Ne.a.control,Object(u.a)({},Ne.a.on,N)),type:"button",onClick:function(){y.current.loop=!N,j(y.current.loop)}},r.a.createElement("svg",{className:Ne.a.icon},r.a.createElement("path",{d:"M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z"}))),r.a.createElement("button",{className:f()(Ne.a.control,Object(u.a)({},Ne.a.on,S)),type:"button",onClick:function(){return L(!S)}},r.a.createElement("svg",{className:Ne.a.icon},r.a.createElement("path",{d:"M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83, 13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41, 4L4,5.41L9.17,10.58L10.59,9.17Z"})))),r.a.createElement(me,{currentTime:b.time,duration:b.duration,onTimeUpdate:E.seek}),r.a.createElement("div",{className:f()(Ne.a.controls,Ne.a.volume)},r.a.createElement("button",{className:Ne.a.control,type:"button",onClick:function(){b.muted?E.unmute():E.mute()}},r.a.createElement("svg",{className:Ne.a.icon},b.muted?r.a.createElement("path",{d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25, 17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68, 18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46, 14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14, 3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14, 7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}):r.a.createElement("path",{d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18, 19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14, 7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}))),r.a.createElement(ve,{value:b.volume,onVolumeUpdate:E.volume})),r.a.createElement(ye,{author:c&&c.author,title:c&&c.title}),h))};je.defaultProps={playing:!1,song:null};var ke=Object(i.b)(function(e){return{token:e.login.token,songs:e.music.songs,song:e.player.song,playing:e.player.playing,nowPlaying:e.player.nowPlaying}},function(e){return{setSong:function(t,n){return e(we(t,n))},play:function(){return e(function(e){e({type:"PLAYER/PLAY"})})},pause:function(){return e(function(e){e({type:"PLAYER/PAUSE"})})}}})(je),xe=n(35),Se=n.n(xe),Le=function(e){var t=e.children,n=e.token,a=Object(p.a)("(max-width: 640px)");return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(C,null),r.a.createElement("main",{className:Se.a.app},r.a.createElement(T,null),r.a.createElement("div",{className:f()(Se.a.content,Object(u.a)({},Se.a.padding,!0))},r.a.createElement(ae,null),t),n&&r.a.createElement(ke,null)),r.a.createElement(R,null))};Le.defaultProps={children:null};var Ce=Object(i.b)(function(e){return{token:e.login.token}})(Le),Pe=n(20),Ae=n.n(Pe),Re=n(2),Me=n.n(Re),Ie=function(e){var t=e.title,n=e.body,c=e.onSubmit,o=e.token,s=e.history;return Object(a.useEffect)(function(){o&&s.push("/")}),r.a.createElement("div",{className:Me.a.wrapper},r.a.createElement("form",{className:Me.a.form,onSubmit:c},r.a.createElement("h1",{className:Me.a.title},t),n))};Ie.defaultProps={onSubmit:null};var Ve=Object(l.g)(Object(i.b)(function(e){return{token:e.login.token}})(Ie)),He=function(){var e={username:Ae()(),email:Ae()(),password:Ae()(),retryPassword:Ae()()};return r.a.createElement(Ve,{title:"Register",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:e.username,className:Me.a.label},r.a.createElement("input",{id:e.username,type:"text",placeholder:"Username",className:Me.a.input})),r.a.createElement("label",{htmlFor:e.email,className:Me.a.label},r.a.createElement("input",{id:e.email,type:"email",placeholder:"Email",className:Me.a.input})),r.a.createElement("label",{htmlFor:e.password,className:Me.a.label},r.a.createElement("input",{id:e.password,type:"password",placeholder:"Password",className:Me.a.input})),r.a.createElement("label",{htmlFor:e.retryPassword,className:Me.a.label},r.a.createElement("input",{id:e.retryPassword,type:"password",placeholder:"Re-type password",className:Me.a.input}))),r.a.createElement("div",{className:f()(Me.a.footer,Me.a.flexEnd)},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/login",className:Me.a.link},"Already have account?"),r.a.createElement("input",{type:"submit",value:"Register",className:Me.a.submit}))))})},Ue=Object(i.b)(null,function(e){return{login:function(t,n){return e(function(e,t){return function(){var n=Object(v.a)(g.a.mark(function n(a){var r;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"LOGGING_IN"}),n.prev=1,n.next=4,y(e,t);case 4:r=n.sent,window.localStorage.setItem("token",r),a({type:"LOGIN/SUCCEEDED",payload:r}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a({type:"LOGIN/ERROR",payload:n.t0.message});case 12:case"end":return n.stop()}},n,null,[[1,9]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(function(e){var t=e.login,n={username:Ae()(),password:Ae()()},c=Object(a.useState)(""),o=Object(re.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(""),p=Object(re.a)(u,2),m=p[0],d=p[1];return r.a.createElement(Ve,{title:"Login",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:n.username,className:Me.a.label},r.a.createElement("input",{id:n.username,type:"text",placeholder:"Username",className:Me.a.input,onInput:function(e){return l(e.target.value)}})),r.a.createElement("label",{htmlFor:n.password,className:Me.a.label},r.a.createElement("input",{id:n.password,type:"password",placeholder:"Password",className:Me.a.input,onInput:function(e){return d(e.target.value)}}))),r.a.createElement("div",{className:f()(Me.a.footer,Me.a.spaceBetween)},r.a.createElement(s.b,{to:"/forgot",className:Me.a.link},"Forgot your password?"),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/register",className:Me.a.link},"Need an account?"),r.a.createElement("input",{type:"submit",value:"Login",className:Me.a.submit})))),onSubmit:function(e){e.preventDefault(),t(i,m)}})}),De=function(){var e={email:Ae()()};return r.a.createElement(Ve,{title:"Forgot",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Me.a.note},r.a.createElement("p",null,"To request a new password please enter your account email in the box below."),r.a.createElement("p",null,"We will send you an email with further instructions.")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:e.email,className:Me.a.label},r.a.createElement("input",{id:e.email,type:"email",placeholder:"Email",className:Me.a.input}))),r.a.createElement("div",{className:f()(Me.a.footer,Me.a.flexEnd)},r.a.createElement("input",{type:"submit",value:"Request Password Change",className:Me.a.submit})))})},Te=n(36),Be=n.n(Te),Ge=[{to:"/music",title:"All"},{to:"/music/likes",title:"Likes"},{to:"/music/search",title:"Search"}],We=function(){return r.a.createElement("div",{className:Be.a.subnav},Ge.map(function(e){return r.a.createElement(s.b,{key:e.to,to:e.to,className:f()(Be.a.link,Object(u.a)({},Be.a.active,window.location.pathname===e.to))},e.title)}))},Fe=n(12),Ye=n.n(Fe),_e=Object(l.g)(Object(i.b)(function(e){return{token:e.login.token}})(function(e){var t=e.children,n=e.token,c=e.history;return Object(a.useEffect)(function(){n||c.push("/")}),r.a.createElement("section",null,r.a.createElement(We,null),r.a.createElement("div",{className:Ye.a.wrapper},t))})),Ze=n(10),Qe=n.n(Ze),ze=function(e,t,n,a,r,c,o){return Object(v.a)(g.a.mark(function s(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(e===a){s.next=5;break}return s.next=3,r(n,e);case 3:return c(),s.abrupt("return");case 5:if(!t){s.next=8;break}return o(),s.abrupt("return");case 8:c();case 9:case"end":return s.stop()}},s)}))},Ke=function(e,t,n,a){return Object(v.a)(g.a.mark(function r(){return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!n){r.next=5;break}return r.next=3,x(t,e);case 3:return a(!1),r.abrupt("return");case 5:return r.next=7,k(t,e);case 7:a(!0);case 8:case"end":return r.stop()}},r)}))},Je=function(e){var t=e.uuid,n=e.author,c=e.title,o=e.cover,s=e.playing,i=e.editable,l=e.favorite,p=e.token,m=e.nowPlaying,d=e.setSong,g=e.play,v=e.pause,h=Object(a.useState)(l),b=Object(re.a)(h,2),E=b[0],y=b[1];return r.a.createElement("div",{className:Qe.a.song},r.a.createElement("div",{className:Qe.a.cover,style:{backgroundImage:o?"url(".concat(o,")"):null}},!o&&r.a.createElement("svg",{viewBox:"0 0 24 24",className:Qe.a.defaultCover},r.a.createElement("path",{d:"M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z"})),r.a.createElement("button",{className:Qe.a.play,type:"button",onClick:ze(t,s,p,m,d,g,v)},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{d:t===m&&s?"M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z":"M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})))),r.a.createElement("div",{className:Qe.a.titleAndAuthor},r.a.createElement("span",{className:Qe.a.title},c),r.a.createElement("span",{className:Qe.a.author},n)),r.a.createElement("div",{className:Qe.a.actions},i&&r.a.createElement("button",{className:f()(Qe.a.button,Object(u.a)({},Qe.a.on,i)),type:"button"},r.a.createElement("svg",{className:Qe.a.icon,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}))),r.a.createElement("button",{className:f()(Qe.a.button,Object(u.a)({},Qe.a.on,E)),type:"button",onClick:Ke(t,p,E,y)},r.a.createElement("svg",{className:Qe.a.icon,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})))))};Je.defaultProps={author:"No Author",title:"No Title",cover:null,playing:!1,editable:!1,favorite:!0};var Xe=Object(i.b)(function(e){return{token:e.login.token,nowPlaying:e.player.nowPlaying,playing:e.player.playing}},function(e){return{setSong:function(t,n){return e(we(t,n))},play:function(){return e(function(e){e({type:"PLAYER/PLAY"})})},pause:function(){return e(function(e){e({type:"PLAYER/PAUSE"})})}}})(Je),qe=function(e){return{type:"MUSIC/SUCCEEDED",payload:e}},$e=function(e){return{type:"MUSIC/ERROR",payload:e}},et=function(e){var t=e.token,n=e.songs,c=e.fetchSongs,o=e.loading,s=e.error;return Object(a.useEffect)(function(){c(t)},[]),r.a.createElement(_e,null,r.a.createElement("div",{className:Ye.a.songs},n.map(function(e){return r.a.createElement(Xe,Object.assign({key:e.uuid},e))}),0===n.length&&r.a.createElement("span",{className:Ye.a.message},o&&"Loading ...",s&&"Nothing to show :(")))};et.defaultProps={error:null};var tt=Object(i.b)(function(e){return{token:e.login.token,songs:e.music.songs,loading:e.music.loading,error:e.music.error}},function(e){return{fetchSongs:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(v.a)(g.a.mark(function a(r){var c;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"MUSIC/REQUEST_ALL"}),a.prev=1,a.next=4,O(e,t,n);case 4:c=a.sent,r(qe(c)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r($e(a.t0.message));case 11:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}})(et),nt=function(e){var t=e.token,n=e.songs,c=e.fetchFavoriteSongs,o=e.loading,s=e.error;return Object(a.useEffect)(function(){c(t)},[]),r.a.createElement(_e,null,r.a.createElement("div",{className:Ye.a.songs},n.map(function(e){return r.a.createElement(Xe,Object.assign({key:e.uuid},e))}),0===n.length&&r.a.createElement("span",{className:Ye.a.message},o&&"Loading ...",s&&"Nothing to show :(")))};nt.defaultProps={error:null};var at=Object(i.b)(function(e){return{token:e.login.token,songs:e.music.songs,loading:e.music.loading,error:e.music.error}},function(e){return{fetchFavoriteSongs:function(t,n,a){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return function(){var a=Object(v.a)(g.a.mark(function a(r){var c;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"MUSIC/REQUEST_FAVORITES"}),a.prev=1,a.next=4,N(e,t,n);case 4:c=a.sent,r(qe(c)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r($e(a.t0.message));case 11:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}})(nt),rt=function(e){var t=e.token,n=e.songs,c=e.searchSongs,o=e.loading,s=e.error,i=e.clearSongs;Object(a.useEffect)(function(){i()},[]);var l=Object(a.useState)(""),u=Object(re.a)(l,2),p=u[0],m=u[1];return r.a.createElement(_e,null,r.a.createElement("form",{className:Ye.a.searchForm,onSubmit:function(e){e.preventDefault(),c(t,p)}},r.a.createElement("input",{className:Ye.a.input,type:"text",placeholder:"Search",onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{className:Ye.a.submit,type:"submit",value:"Search"})),r.a.createElement("div",{className:Ye.a.songs},0===n.length&&r.a.createElement("span",{className:Ye.a.message},!o&&!s&&"Enter your request in the input field ...",o&&"Searching ...",s&&"No songs found."),n.map(function(e){return r.a.createElement(Xe,Object.assign({key:e.uuid},e))})))};rt.defaultProps={error:null};var ct=Object(i.b)(function(e){return{token:e.login.token,songs:e.music.songs,loading:e.music.loading,error:e.music.error}},function(e){return{searchSongs:function(t,n,a){return e(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;return function(){var r=Object(v.a)(g.a.mark(function r(c){var o;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"MUSIC/SEARCH_SONGS"}),r.prev=1,r.next=4,j(e,t,n,a);case 4:o=r.sent,c(qe(o)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c($e(r.t0.message));case 11:case"end":return r.stop()}},r,null,[[1,8]])}));return function(e){return r.apply(this,arguments)}}()}(t,n,a))},clearSongs:function(){return e(function(e){e({type:"MUSIC/CLEAR_SONGS"})})}}})(rt),ot=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/music",component:tt,exact:!0}),r.a.createElement(l.b,{path:"/music/likes",component:at}),r.a.createElement(l.b,{path:"/music/search",component:ct}),r.a.createElement(l.a,{to:"/music"}))},st=[{path:"/",exact:!0,component:function(){return r.a.createElement("div",null,"home")}},{path:"/register",component:function(){return r.a.createElement(He,null)}},{path:"/login",component:function(){return r.a.createElement(Ue,null)}},{path:"/forgot",component:function(){return r.a.createElement(De,null)}},{path:"/music",component:function(){return r.a.createElement(ot,null)}},{path:"/upload",component:function(){return r.a.createElement("div",null,"upload")}}],it=n(22),lt=n(64),ut=n(65),pt={hidden:!0};function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var dt={loading:!1,token:window.localStorage.getItem("token")||"",error:null};function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function vt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gt(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ht={loading:!1,skip:0,limit:100,songs:[],error:null};function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var yt={song:null,nowPlaying:"",playing:!1,error:null},wt=Object(it.combineReducers)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt;switch((arguments.length>1?arguments[1]:void 0).type){case"SIDEBAR/SHOW":return{hidden:!1};case"SIDEBAR/HIDE":return{hidden:!0};default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGING_IN":return ft({},e,{loading:!0});case"LOGIN/SUCCEEDED":return ft({},e,{loading:!1,token:t.payload});case"LOGIN/ERROR":return ft({},e,{loading:!1,error:t.payload});case"LOGOUT":return ft({},e,{loading:!1,token:""});default:return e}},music:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MUSIC/REQUEST_ALL":case"MUSIC/REQUEST_FAVORITES":case"MUSIC/SEARCH_SONGS":return vt({},e,{loading:!0,error:null});case"MUSIC/SUCCEEDED":return vt({},e,{loading:!1,songs:t.payload,error:null});case"MUSIC/ERROR":return vt({},e,{loading:!1,songs:[],error:t.payload});case"MUSIC/CLEAR_SONGS":return vt({},e,{loading:!1,songs:[],error:null});case"MUSIC/SKIP":return vt({},e,{skip:t.payload});case"MUSIC/LIMIT":return vt({},e,{limit:t.payload});default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYER/SONG":return Et({},e,{song:t.payload});case"PLAYER/NOW_PLAYING":return Et({},e,{nowPlaying:t.payload});case"PLAYER/PLAY":return Et({},e,{playing:!0});case"PLAYER/PAUSE":return Et({},e,{playing:!1});case"PLAYER/ERROR":return{song:null,nowPlaying:"",playing:!1,error:t.payload};default:return e}}}),Ot=Object(it.createStore)(wt,Object(ut.composeWithDevTools)(Object(it.applyMiddleware)(lt.a))),Nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function jt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(98);o.a.render(r.a.createElement(i.a,{store:Ot},r.a.createElement(s.a,null,r.a.createElement(function(){return r.a.createElement(Ce,null,r.a.createElement(l.d,null,st.map(function(e){return r.a.createElement(l.b,Object.assign({key:e.path},e))}),r.a.createElement(l.a,{to:"/"})))},null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Nt?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):jt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):jt(t,e)})}}()}},[[68,1,2]]]);