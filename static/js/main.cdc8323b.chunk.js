(this["webpackJsonpemerging-scholars"]=this["webpackJsonpemerging-scholars"]||[]).push([[0],{23:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);n(23);var c=n(1),r=n.n(c),i=n(21),a=n.n(i),s=n(12),o=n(3),l=n(8),j=n(16),h=n.n(j),d=n(17),b=n(13),x=n(0);function u(e){var t=e.text,n=e.href,c=e.classNames,r=(e.icon,e.onClick),i="".concat(c);return Object(x.jsx)(s.b,{onClick:r,className:i,to:n,children:t})}function m(e){var t=e.children,n=e.bgColor;return Object(x.jsx)("div",{className:"d-flex align-items-center p-1 ".concat(n),children:t})}function f(e){var t=e.children,n=e.bgColor;return Object(x.jsx)("div",{className:"bg-primary border-top ".concat(n),children:t})}function O(e){var t=e.children;return Object(x.jsx)("div",{className:"fixed-top",children:t})}u.defaultProps={classNames:"",text:"",href:"",icon:function(){},onClick:function(){}},m.defaultProps={children:[],bgColor:""},f.defaultProps={children:[],bgColor:""};O.defaultProps={children:[]},O.Item=u,O.Mobile=f,O.Main=m;var g=O,v={home:{text:"Emerging Scholars",href:"/home"},items:[{dropdown:!1,isActive:!1,text:"Contact",href:"/contact"},{dropdown:!1,isActive:!1,text:"Board Members",href:"/board_members"}],donate:{text:"Donate",href:"/donate"}};var p=function(){var e=Object(c.useState)([0,0,0]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight,window.pageYOffset])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n};var w=function(){var e=Object(c.useState)([0]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useLayoutEffect)((function(){function e(){r([window.pageYOffset])}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),n};var N=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],i=p(),a=Object(l.a)(i,1)[0],s=w(),o=Object(l.a)(s,1)[0],j=Object(c.useState)(o<50),u=Object(l.a)(j,2),m=u[0],f=u[1],O=Object(c.useState)(a<576),N=Object(l.a)(O,2),y=N[0],C=N[1];Object(c.useEffect)((function(){f(!n&&o<50),C(a<576)}),[a,o]);var k=function(){r(!1)};return Object(x.jsxs)(g,{children:[Object(x.jsxs)(g.Main,{bgColor:"".concat(m?"bg-transparent":"bg-primary-trans"),children:[Object(x.jsx)(g.Item,{text:v.home.text,href:v.home.href,classNames:"h1 text-white p-1 nounderline me-auto",icon:b.a,onClick:k}),h.a.map(v.items,(function(e){return!y&&Object(x.jsx)(g.Item,{text:e.text,href:e.href,classNames:"h5 d-block text-white p-1 nounderline",onClick:k},e.text)})),Object(x.jsx)(g.Item,{text:v.donate.text,href:v.donate.href,classNames:"h5 text-warning p-1 nounderline",onClick:k}),Object(x.jsx)("button",{type:"button",className:"d-sm-none btn btn-secondary m-2",onClick:function(){n?o<50&&f(!0):f(!1),r(!n)},children:n?Object(x.jsx)(d.a,{className:"text-white",icon:b.b}):Object(x.jsx)(d.a,{className:"text-white",icon:b.a})})]}),y&&n&&Object(x.jsx)(g.Mobile,{bgColor:"".concat(m?"bg-transparent":"bg-primary-trans"),children:h.a.map(v.items,(function(e){return y&&n&&Object(x.jsx)(g.Item,{text:e.text,href:e.href,classNames:"d-block h5 m-0 p-1 border-bottom nounderline text-white",onClick:k},e.text)}))})]})};var y=function(){return Object(x.jsx)("div",{className:"bg-grullo text-white p-4",children:Object(x.jsx)("h4",{className:"",children:"Emerging Scholars"})})};function C(e){var t=e.children,n=e.image,c=e.height,r={backgroundImage:"url(".concat(n,")"),height:c};return Object(x.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:r,children:t})}C.defaultProps={children:[],image:"",height:100};var k=C;var E=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{height:500,image:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{className:"text-white d-block text-center",children:"Emerging Leaders"}),Object(x.jsx)("h4",{className:"text-white d-block text-center",children:"and"}),Object(x.jsx)("h4",{className:"text-white d-block text-center",children:"Scholars in STEM Academy"})]})}),Object(x.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(x.jsx)("h1",{className:"text-center",children:"Emerging Leaders and Scholars in STEM Academy"})})]})};function M(e){var t={height:e.height};return Object(x.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:t})}M.defaultProps={height:100};var S=M;var L=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{}),Object(x.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(x.jsx)("h1",{className:"text-center",children:"Contact"})})]})};var F=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{}),Object(x.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(x.jsx)("h1",{className:"text-center",children:"Board Members"})})]})};var H=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{}),Object(x.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(x.jsx)("h1",{className:"text-center",children:"Donate"})})]})};var I=function(){return Object(x.jsxs)(s.a,{children:[Object(x.jsx)(N,{}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/contact",children:Object(x.jsx)(L,{})}),Object(x.jsx)(o.a,{path:"/donate",children:Object(x.jsx)(H,{})}),Object(x.jsx)(o.a,{path:"/board_members",children:Object(x.jsx)(F,{})}),Object(x.jsx)(o.a,{path:"/",children:Object(x.jsx)(E,{})})]}),Object(x.jsx)(y,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.cdc8323b.chunk.js.map