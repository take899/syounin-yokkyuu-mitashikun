(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],{18:function(e,t,c){},21:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(4),l=c.n(n),a=(c(18),c(6)),o=c(27),r=c(28),d=c(12),j=c.n(d),u=c.p+"static/media/gorilla.ebbeae54.jpg",f=(c(21),c(0)),x=function(e){var t=e.show,c=e.setTweetModal,i=e.setNotificationList,s=e.setTimeoutIdList;return Object(f.jsx)(o.a,{in:t,timeout:200,unmountOnExit:!0,classNames:{enter:"__modal-menu",enterActive:"__modal-menu __is-active",enterDone:"__modal-menu __is-active",exit:"__modal-menu",exitActive:"__modal-menu",exitDone:"__modal-menu"},children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 w-screen h-screen opacity-0",onClick:function(){return c(!1)}}),Object(f.jsx)("div",{className:"absolute w-full px-2 top-72",children:Object(f.jsx)("div",{className:"max-w-screen-sm p-5 m-auto rounded-xl __card",children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.tweet.value;t&&(b({tweet:t,setNotificationList:i,setTimeoutIdList:s}),c(!1))},children:[Object(f.jsxs)("div",{className:"flex p-2.5 bg-white rounded-xl",children:[Object(f.jsx)(v,{}),Object(f.jsx)("textarea",{type:"text",name:"tweet",placeholder:"\u3044\u307e\u3069\u3046\u3057\u3066\u308b\uff1f",rows:"5",className:"w-full px-4 py-2 ml-2 bg-white"})]}),Object(f.jsx)("div",{className:"mt-4 text-center",children:Object(f.jsx)("input",{type:"submit",value:"\u30c4\u30a4\u30fc\u30c8\u3059\u308b(\u507d)",className:"px-6 py-1 font-bold text-white rounded-full __bg-twitter-color"})})]})})})]})})},m=function(e){var t=e.notificationList,c=e.setNotificationList,i=e.timeoutIdList;return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)(o.a,{in:!!t.length,timeout:0,unmountOnExit:!0,classNames:"bg-notification",children:Object(f.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 z-30 w-screen h-screen opacity-0",onClick:function(){i.forEach(clearTimeout),c([])}})}),Object(f.jsx)(r.a,{className:"fixed left-0 right-0 flex flex-col-reverse top-64",children:t&&t.map((function(e){return Object(f.jsx)(o.a,{timeout:1e3,unmountOnExit:!0,classNames:{enter:"__notification",enterActive:"__notification __is-active",enterDone:"__notification __is-active",exit:"__notification __is-fadeout",exitActive:"__notification __is-fadeout",exitDone:"__notification __is-fadeout"},children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"w-screen px-2 mb-2",children:Object(f.jsxs)("div",{className:"max-w-screen-sm p-3 m-auto rounded-xl __card",children:[Object(f.jsxs)("div",{className:"flex justify-between",children:[Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("div",{className:"w-6 p-1 rounded-md __bg-twitter-color",children:Object(f.jsx)(O,{fill:"white"})}),Object(f.jsx)("div",{className:"ml-2 font-normal text-black text-opacity-50",children:"TWITEER"})]}),Object(f.jsx)("div",{className:"text-black text-opacity-40",children:"\u4eca"})]}),Object(f.jsxs)("div",{className:"mt-3 font-extrabold",children:[e.name,"\u3055\u3093",e.action]}),Object(f.jsx)("div",{className:"font-thin",children:e.content})]})})})},e.id)}))})]})},b=function(e){var t=e.tweet,c=e.setNotificationList,i=e.setTimeoutIdList,s=[],n=["\u5c71\u7530","\u7530\u4e2d","\u4e95\u4e0a","\u4e2d\u6751","\u4e0a\u7530"],l=[t,t,""],a=["\u304c\u3044\u3044\u306d\u3057\u307e\u3057\u305f\uff1a","\u304c\u30ea\u30c4\u30a4\u30fc\u30c8\u3057\u307e\u3057\u305f\uff1a","\u306b\u30d5\u30a9\u30ed\u30fc\u3055\u308c\u307e\u3057\u305f"],o=[],r=3e3;c([]);for(var d=0;d<1e3;d++){var u=Math.floor(3*Math.random(3));s.push({id:j()(),name:n[d%n.length],action:a[u],content:l[u]})}for(var f=function(e){var t=e<5?0:e+1-5,i=e+1,n=window.setTimeout((function(){c(s.slice(t,i))}),r);o.push(n),r+=e<5?1500:e>=5&&e<10?1e3:e>=10&&e<30?500:e>=30&&e<500?200:100},x=0;x<1e3;x++)f(x);i(o)},h=function(){var e=function(){var e=new Date;return{clockStr:"".concat(e.getHours(),":").concat(e.getMinutes().toString().padStart(2,"0")),dateStr:"".concat(e.getMonth()+1,"\u6708").concat(e.getDate(),"\u65e5 ").concat(["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"][e.getDay()],"\u66dc\u65e5")}},t=e(),c=Object(i.useState)(t.clockStr),s=Object(a.a)(c,2),n=s[0],l=s[1],o=Object(i.useState)(t.dateStr),r=Object(a.a)(o,2),d=r[0],j=r[1];return Object(i.useEffect)((function(){setInterval((function(){var t=e();l(t.clockStr),j(t.dateStr)}),1e3)}),[]),Object(f.jsx)("div",{className:"fixed left-0 w-full top-28",children:Object(f.jsxs)("div",{className:"text-center text-white",children:[Object(f.jsx)("div",{className:"text-7xl font-extralight",children:n}),Object(f.jsx)("div",{className:"text-xl font-light leading-10",children:d})]})})},v=function(){return Object(f.jsx)("img",{src:u,alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf",className:"rounded-full w-14 h-14"})},O=function(e){var t=e.fill;return Object(f.jsx)("svg",{viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:t,style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})})},_=function(e){var t=e.fill;return Object(f.jsx)("svg",{viewBox:"0 0 46 67",children:Object(f.jsx)("path",{fill:t,style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M34.8,27v-9c0-6.4-5.1-11.5-11.5-11.5h-0.5c-6.4,0-11.5,5.1-11.5,11.5v9H34.8z M41.3,27.1c2.7,0.6,4.7,3,4.7,5.9v27.5c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V33c0-2.9,2-5.3,4.8-5.9V18c0-9.9,8.1-18,18-18h0.5c9.9,0,18,8.1,18,18V27.1z"})})},w=function(e){var t=e.fill;return Object(f.jsx)("svg",{viewBox:"0 0 26 68",children:Object(f.jsx)("path",{fill:t,style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M13,40c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3s3,1.3,3,3C16,38.7,14.7,40,13,40z M13,26.5c-2.5,0-4.5,2-4.5,4.5v6c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5v-6C17.5,28.5,15.5,26.5,13,26.5z M0,6h26c0,9-6,12-6,18c0,0,0,13.3,0,40c0,2.2-1.8,4-4,4h-6c-2.2,0-4-1.8-4-4V24C6,18,0,15,0,6z M2,0h22c1.1,0,2,0.9,2,2v2H0V2C0,0.9,0.9,0,2,0z"})})},p=function(e){var t=e.fill;return Object(f.jsx)("svg",{viewBox:"0 0 64 48",children:Object(f.jsx)("path",{fill:t,style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M51,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C53,16.1,52.1,17,51,17z M7,3.5h4c0.6,0,1,0.4,1,1V6H6V4.5C6,3.9,6.4,3.5,7,3.5z M32,41c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S39.7,41,32,41z M32,38.5c6.4,0,11.5-5.1,11.5-11.5S38.4,15.5,32,15.5S20.5,20.6,20.5,27S25.6,38.5,32,38.5z M4,8h10.3c1,0,2-0.5,2.5-1.4l2.4-3.8c1.1-1.8,3-2.8,5.1-2.8h15.3c2.1,0,4,1.1,5.1,2.8l2.4,3.8C47.7,7.5,48.6,8,49.7,8H60c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V12C0,9.8,1.8,8,4,8z"})})},N=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],l=Object(i.useState)([]),o=Object(a.a)(l,2),r=o[0],d=o[1],j=Object(i.useState)([]),u=Object(a.a)(j,2),v=u[0],O=u[1];return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("div",{className:"__bg-image"}),Object(f.jsx)(x,{show:c,setTweetModal:n,setNotificationList:d,setTimeoutIdList:O}),Object(f.jsx)(m,{notificationList:r,setNotificationList:d,timeoutIdList:v}),Object(f.jsx)("div",{className:"fixed left-0 w-full top-16",children:Object(f.jsx)("div",{className:"flex justify-center",children:Object(f.jsx)("div",{style:{width:"1.4rem"},children:Object(f.jsx)(_,{fill:"#fff"})})})}),Object(f.jsx)("div",{className:"fixed left-0 w-full px-12 bottom-10",children:Object(f.jsxs)("div",{className:"flex justify-between max-w-screen-sm m-auto",children:[Object(f.jsx)("button",{onClick:function(){n(!0)},children:Object(f.jsx)("div",{className:"flex items-center justify-center w-12 h-12 rounded-full __bg-blur",children:Object(f.jsx)("div",{style:{width:"0.56rem"},children:Object(f.jsx)(w,{fill:"#fff"})})})}),Object(f.jsx)("button",{onClick:function(){b({tweet:"\u7533\u8acb\u66f8\u306e\u30c1\u30a7\u30c3\u30af\u3084\u8a55\u4fa1\u66f8\u57f7\u7b46\u306e\u5b63\u7bc0\u3002\u5b66\u632f\u306e\u69d8\u5f0f\u5909\u66f4\u306b\u5c11\u3057\u6238\u60d1\u3063\u3066\u3044\u308b\u3002",setNotificationList:d,setTimeoutIdList:O})},children:Object(f.jsx)("div",{className:"flex items-center justify-center w-12 h-12 rounded-full __bg-blur",children:Object(f.jsx)("div",{style:{width:"1.2rem"},children:Object(f.jsx)(p,{fill:"#fff"})})})})]})}),Object(f.jsx)("div",{className:"fixed left-0 w-full top-8",children:Object(f.jsx)("div",{className:"flex justify-end max-w-screen-sm m-auto",children:Object(f.jsx)("div",{className:"w-12 mr-6 h-0.5 bg-gray-400 opacity-60 rounded-sm"})})}),Object(f.jsx)("div",{className:"fixed left-0 w-full bottom-2",children:Object(f.jsx)("div",{className:"w-32 h-1 m-auto bg-gray-100 rounded-sm"})}),Object(f.jsx)(h,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),i(e),s(e),n(e),l(e)}))};l.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),g()}},[[25,1,2]]]);
//# sourceMappingURL=main.b186fec3.chunk.js.map