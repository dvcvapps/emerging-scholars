(this["webpackJsonpemerging-scholars"]=this["webpackJsonpemerging-scholars"]||[]).push([[0],{23:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);c(23);var n=c(1),r=c.n(n),s=c(21),a=c.n(s),i=c(12),o=c(3),l=c(8),d=c(16),j=c.n(d),h=c(17),m=c(13),b=c(0);function x(e){var t=e.text,c=e.href,n=e.classNames,r=(e.icon,e.onClick),s="".concat(n);return Object(b.jsx)(i.b,{onClick:r,className:s,to:c,children:t})}function u(e){var t=e.children,c=e.bgColor;return Object(b.jsx)("div",{className:"d-flex align-items-center p-1 ".concat(c),children:t})}function f(e){var t=e.children,c=e.bgColor;return Object(b.jsx)("div",{className:"bg-primary border-top ".concat(c),children:t})}function O(e){var t=e.children;return Object(b.jsx)("div",{className:"fixed-top",children:t})}x.defaultProps={classNames:"",text:"",href:"",icon:function(){},onClick:function(){}},u.defaultProps={children:[],bgColor:""},f.defaultProps={children:[],bgColor:""};O.defaultProps={children:[]},O.Item=x,O.Mobile=f,O.Main=u;var g=O,p={home:{text:"Emerging Scholars",href:"/home"},items:[{dropdown:!1,isActive:!1,text:"Contact",href:"/contact"},{dropdown:!1,isActive:!1,text:"Board Members",href:"/board_members"}],donate:{text:"Donate",href:"/donate"}};var v=function(){var e=Object(n.useState)([0,0,0]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight,window.pageYOffset])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c};var N=function(){var e=Object(n.useState)([0]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useLayoutEffect)((function(){function e(){r([window.pageYOffset])}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),c};var w=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1],s=v(),a=Object(l.a)(s,1)[0],i=N(),o=Object(l.a)(i,1)[0],d=Object(n.useState)(o<50),x=Object(l.a)(d,2),u=x[0],f=x[1],O=Object(n.useState)(a<576),w=Object(l.a)(O,2),y=w[0],k=w[1];Object(n.useEffect)((function(){f(!c&&o<50),k(a<576)}),[a,o]);var C=function(){r(!1)};return Object(b.jsxs)(g,{children:[Object(b.jsxs)(g.Main,{bgColor:"".concat(u?"bg-transparent":"bg-primary-trans"),children:[Object(b.jsx)(g.Item,{text:p.home.text,href:p.home.href,classNames:"h1 text-white p-1 nounderline me-auto",icon:m.a,onClick:C}),j.a.map(p.items,(function(e){return!y&&Object(b.jsx)(g.Item,{text:e.text,href:e.href,classNames:"h5 d-block text-white p-1 nounderline",onClick:C},e.text)})),Object(b.jsx)(g.Item,{text:p.donate.text,href:p.donate.href,classNames:"h5 text-warning p-1 nounderline",onClick:C}),Object(b.jsx)("button",{type:"button",className:"d-sm-none btn btn-secondary m-2",onClick:function(){c?o<50&&f(!0):f(!1),r(!c)},children:c?Object(b.jsx)(h.a,{className:"text-white",icon:m.b}):Object(b.jsx)(h.a,{className:"text-white",icon:m.a})})]}),y&&c&&Object(b.jsx)(g.Mobile,{bgColor:"".concat(u?"bg-transparent":"bg-primary-trans"),children:j.a.map(p.items,(function(e){return y&&c&&Object(b.jsx)(g.Item,{text:e.text,href:e.href,classNames:"d-block h5 m-0 p-1 border-bottom nounderline text-white",onClick:C},e.text)}))})]})};var y=function(){return Object(b.jsx)("div",{className:"bg-grullo text-white p-4",children:Object(b.jsx)("h4",{className:"",children:"Emerging Scholars"})})};function k(e){var t=e.children,c=e.image,n=e.height,r={backgroundImage:"url(".concat(c,")"),height:n};return Object(b.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:r,children:t})}k.defaultProps={children:[],image:"",height:100};var C=k;var E=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{height:500,image:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"text-white d-block text-center",children:"Emerging Leaders"}),Object(b.jsx)("h4",{className:"text-white d-block text-center",children:"and"}),Object(b.jsx)("h4",{className:"text-white d-block text-center",children:"Scholars in STEM Academy"})]})}),Object(b.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(b.jsx)("h1",{className:"text-center",children:"Emerging Leaders and Scholars in STEM Academy"})})]})};function F(e){var t={height:e.height};return Object(b.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:t})}F.defaultProps={height:100};var P=F;var M=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,{}),Object(b.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(b.jsx)("h1",{className:"text-center",children:"Contact"})})]})};function S(e){var t=e.header,c=e.image,n=e.desc;return Object(b.jsxs)("div",{className:"d-flex justify-content-around flex-column",children:[Object(b.jsx)("h2",{className:"text-center my-5 h2",children:t}),Object(b.jsx)("img",{className:"text-center rounded-circle z-depth-2",alt:"100x100",src:c,"data-holder-rendered":"true"}),Object(b.jsx)("p",{className:"text-center my-5",children:n})]})}S.defaultProps={header:"",image:"",desc:""};var A=S;var D=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,{}),Object(b.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(b.jsx)("h1",{className:"text-center",children:"Board Members"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)(A,{header:"Fake Name",image:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",desc:"Description of person."})}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)(A,{header:"Fake Name",image:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",desc:"Description of person."})}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)(A,{header:"Fake Name",image:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",desc:"Description of person."})}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)(A,{header:"Fake Name",image:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",desc:"Description of person."})}),Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)(A,{header:"Fake Name",image:"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",desc:"Description of person."})})]})]})]})};var L=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,{}),Object(b.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(b.jsx)("h1",{className:"text-center",children:"Donate"})})]})};var H=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/contact",children:Object(b.jsx)(M,{})}),Object(b.jsx)(o.a,{path:"/donate",children:Object(b.jsx)(L,{})}),Object(b.jsx)(o.a,{path:"/board_members",children:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(E,{})})]}),Object(b.jsx)(y,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),I()}},[[37,1,2]]]);
//# sourceMappingURL=main.9cecf1bc.chunk.js.map