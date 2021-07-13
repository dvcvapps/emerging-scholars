(this["webpackJsonpemerging-scholars"]=this["webpackJsonpemerging-scholars"]||[]).push([[0],{39:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);s(39);var c=s(1),n=s.n(c),a=s(30),r=s.n(a),i=s(4),l=s(19),o=s(5),d=s(10),j=s.n(d),m=s(24),h=s(20),b=s(0);function x(e){var t=e.text,s=e.href,c=e.classNames,n=(e.icon,e.onClick),a="".concat(c);return Object(b.jsx)(l.b,{onClick:n,className:a,to:s,children:t})}function u(e){var t=e.children,s=e.bgColor;return Object(b.jsx)("div",{className:"d-flex align-items-center p-1 ".concat(s),children:t})}function O(e){var t=e.children,s=e.bgColor;return Object(b.jsx)("div",{className:"bg-primary border-top ".concat(s),children:t})}function f(e){var t=e.children;return Object(b.jsx)("div",{className:"fixed-top",children:t})}x.defaultProps={classNames:"",text:"",href:"",icon:function(){},onClick:function(){}},u.defaultProps={children:[],bgColor:""},O.defaultProps={children:[],bgColor:""};f.defaultProps={children:[]},f.Item=x,f.Mobile=O,f.Main=u;var g=f,p={home:{text:"ELSSA",href:"/home"},items:[{dropdown:!1,isActive:!1,text:"Our Story",href:"/about-us"},{dropdown:!1,isActive:!1,text:"Contact Us",href:"/contact-us"},{dropdown:!1,isActive:!1,text:"Board Members",href:"/board_members"}],donate:{text:"Donate",href:"/donate"}};var v=function(){var e=Object(c.useState)([0,0,0]),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight,window.pageYOffset])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),s};var N=function(){var e=Object(c.useState)([0]),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.pageYOffset])}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),s};var y=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1],a=v(),r=Object(o.a)(a,1)[0],i=N(),l=Object(o.a)(i,1)[0],d=Object(c.useState)(l<50),x=Object(o.a)(d,2),u=x[0],O=x[1],f=Object(c.useState)(r<576),y=Object(o.a)(f,2),w=y[0],C=y[1];Object(c.useEffect)((function(){O(!s&&l<50),C(r<576)}),[r,l]);var S=function(){n(!1)};return Object(b.jsxs)(g,{children:[Object(b.jsxs)(g.Main,{bgColor:"".concat(u?"bg-transparent":"bg-primary-trans"),children:[Object(b.jsx)(g.Item,{text:p.home.text,href:p.home.href,classNames:"h1 d-block text-secondary open-sans-font m-1 nounderline me-auto",icon:h.a,onClick:S}),j.a.map(p.items,(function(e){return!w&&Object(b.jsx)(g.Item,{text:e.text,href:e.href,classNames:"h5 d-block text-white p-1 nounderline",onClick:S},e.text)})),Object(b.jsx)(g.Item,{text:p.donate.text,href:p.donate.href,classNames:"h5 text-warning p-1 nounderline",onClick:S}),Object(b.jsx)("button",{type:"button",className:"d-sm-none btn btn-secondary m-2",onClick:function(){s?l<50&&O(!0):O(!1),n(!s)},children:s?Object(b.jsx)(m.a,{className:"text-white",icon:h.b}):Object(b.jsx)(m.a,{className:"text-white",icon:h.a})})]}),w&&s&&Object(b.jsx)(g.Mobile,{bgColor:"".concat(u?"bg-transparent":"bg-primary-trans"),children:j.a.map(p.items,(function(e){return w&&s&&Object(b.jsx)(g.Item,{text:e.text,href:e.href,classNames:"d-block h5 m-0 p-1 border-bottom nounderline text-white",onClick:S},e.text)}))})]})};var w=function(){return Object(b.jsx)("div",{className:"bg-grullo text-white p-4",children:Object(b.jsx)("h4",{className:"",children:"Emerging Scholars"})})},C=s(15),S=s.n(C),k=s(32),E=s.n(k);function T(e){var t=e.children,s=e.image,c=e.height,n={backgroundImage:"url(".concat(s,")"),height:c};return Object(b.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:n,children:t})}T.defaultProps={children:[],image:"",height:100};var M=T;var P=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M,{height:"100vh",image:"./assets/background-image.jpeg",children:Object(b.jsxs)("div",{className:"border-top border-bottom p-3 rounded",children:[Object(b.jsx)("h4",{className:"text-white d-block text-center",children:"Emerging Leaders"}),Object(b.jsx)("h4",{className:"text-white d-block text-center",children:"and"}),Object(b.jsx)("h4",{className:"text-white d-block text-center",children:"Scholars in STEM Academy"})]})}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row ",children:[Object(b.jsx)("div",{className:"col-md-6 d-flex justify-content-center align-items-center flex-column bg-primary",children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)("h2",{className:"text-center open-sans-font text-secondary text-white mt-3",children:"Mission"}),Object(b.jsx)("p",{className:"text-center text-white mb-3 w-75",children:"To increase and promote inclusivity of students in pursuing (degrees/careers) science, technology, engineering and mathematics (STEM)."})]})}),Object(b.jsx)("div",{className:"col-md-6 bg-secondary",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)(E.a,{children:[Object(b.jsx)("div",{className:"col col-md-6 p-0",children:Object(b.jsx)("img",{width:"100%",src:"./assets/neuron.png",alt:""})}),Object(b.jsx)("div",{className:"col col-md-6 p-0",children:Object(b.jsx)("img",{width:"100%",src:"./assets/tech.png",alt:""})}),Object(b.jsx)("div",{className:"col col-md-6 p-0",children:Object(b.jsx)("img",{width:"100%",src:"./assets/engineering.png",alt:""})}),Object(b.jsx)("div",{className:"col col-md-6 p-0",children:Object(b.jsx)("img",{width:"100%",src:"./assets/math.png",alt:""})})]})})})]})}),Object(b.jsxs)("div",{className:"container",style:{minHeight:600},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(S.a,{children:Object(b.jsxs)("div",{className:"col-md-6 d-flex justify-content-center align-items-center flex-column",children:[Object(b.jsx)("h2",{className:"text-center open-sans-font text-secondary",children:"Goals"}),Object(b.jsxs)("ul",{className:"text-primary",children:[Object(b.jsx)("li",{children:"Provide students exposure to basics of research and examples of current cutting edge biomedical research"}),Object(b.jsx)("li",{children:"Acquire skills in developing a research question to give a virtual science presentation in a STEM topic"}),Object(b.jsx)("li",{children:"Workshops (navigate academia, personal statement, financial aid) and panels (STEM transfers, science/healthcare careers)"}),Object(b.jsx)("li",{children:"Feedback on personal statement and strong reference for future opportunities"})]})]})}),Object(b.jsx)(S.a,{children:Object(b.jsxs)("div",{className:"col-md-6 d-flex  align-items-center flex-column",children:[Object(b.jsx)("h2",{className:"text-center open-sans-font text-secondary",children:"Boost Underrepresentation in STEM"}),Object(b.jsxs)("ol",{className:"text-primary",children:[Object(b.jsx)("li",{children:"Identify Role Models That Students can Relate To"}),Object(b.jsx)("li",{children:"To Encourage students in STEM, Emphasize a Growth Mindset"}),Object(b.jsx)("li",{children:"Involve Students in Project-Based Learning"})]})]})})]}),Object(b.jsx)(S.a,{children:Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(b.jsx)("h2",{className:"text-center open-sans-font text-secondary",children:"Why is Basic Research important?"}),Object(b.jsxs)("ul",{className:"text-primary",children:[Object(b.jsx)("li",{children:"Helps identify problems"}),Object(b.jsx)("li",{children:"Collect informational resources to address problem"}),Object(b.jsx)("li",{children:"Evaluate resources for quality and relevance"}),Object(b.jsx)("li",{children:"Define and create effective solutions to problems"}),Object(b.jsx)("li",{children:"Translational Skill"})]})]})}),Object(b.jsx)(S.a,{children:Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(b.jsx)("h2",{className:"text-center open-sans-font text-secondary",children:"Future Leaders and Scholars"}),Object(b.jsx)("p",{className:"text-primary",children:"What will you discover?"})]})})]})]})};function F(e){var t={height:e.height};return Object(b.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:t})}F.defaultProps={height:100};var A=F;var L=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(b.jsx)("h1",{className:"text-center text-primary",children:"Our Story"})})]})},B=s(16),I=s(37),q=s(38),D=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var U=function(){var e=Object(I.a)(),t=e.register,s=e.handleSubmit,c=e.formState.errors,n=Object(q.a)("xayadeed"),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(b.jsx)("h1",{className:"text-center text-primary",children:"Contact Us"}),r.succeeded?Object(b.jsx)("p",{className:"text-center",children:" Thank you!"}):Object(b.jsxs)("form",{className:"",onSubmit:s((function(e){return i(e)})),children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"form-group col-lg-8",children:[Object(b.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(b.jsx)("input",Object(B.a)({id:"firstName",className:"form-control"},t("firstName",{required:!0}))),c.firstName&&"required"===c.firstName.type&&Object(b.jsx)("span",{className:"text-danger",children:"Please include your first name"})]})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"form-group col-lg-8",children:[Object(b.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(b.jsx)("input",Object(B.a)({id:"lastName",className:"form-control input-medium"},t("lastName",{required:!0}))),c.lastName&&"required"===c.lastName.type&&Object(b.jsx)("span",{className:"text-danger",children:"Please include your last name"})]})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"form-group col-lg-8",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(b.jsx)("input",Object(B.a)({id:"email",className:"form-control"},t("email",{required:!0,pattern:D}))),c.email&&"required"===c.email.type&&Object(b.jsx)("span",{className:"text-danger",children:"Please provide an email"}),c.email&&"pattern"===c.email.type&&Object(b.jsx)("span",{className:"text-danger",children:"Please provide a valid email"})]})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsxs)("div",{className:"form-group col-lg-8",children:[Object(b.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(b.jsx)("textarea",Object(B.a)(Object(B.a)({id:"message",className:"form-control",type:"message"},t("message",{required:!0})),{},{placeholder:"I want to learn more about Emerging scholars..."})),c.message&&"required"===c.message.type&&Object(b.jsx)("span",{className:"text-danger",children:"Please provide a message"})]})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsx)("div",{className:"form-group col-lg-8",children:Object(b.jsx)("button",{type:"submit",children:"Submit"})})})]})]})]})};function z(e){var t=e.header,s=e.image,c=e.desc,n=e.name,a=e.schools;return Object(b.jsxs)("div",{className:"d-flex justify-content-around flex-column",children:[Object(b.jsx)("h4",{className:"text-center my-0 open-sans-font",children:t}),Object(b.jsx)("h4",{className:"text-center pb-3",children:n}),Object(b.jsx)("img",{className:"align-self-center rounded-circle z-depth-2",alt:"100x100",height:200,width:200,src:s,"data-holder-rendered":"true"}),j.a.map(a,(function(e){return Object(b.jsxs)("div",{className:"text-center mt-1",children:[Object(b.jsx)("small",{children:e}),a[a.length-1]!==e&&Object(b.jsx)("hr",{className:"text-black my-0"})]},e)})),Object(b.jsx)("p",{className:"text-center my-3",children:c})]})}z.defaultProps={header:"",name:"",image:"",desc:"",schools:[]};var H=z,G={members:[{header:"President",name:"Gustavo Garcia",image:"./assets/blank-profile.jpeg",schools:["El Camino Community College","UC Berkeley"],desc:""},{header:"Vice President",name:"Natalie Penado",image:"./assets/blank-profile.jpeg",schools:["UC Berkeley (Environmental Earth Science)"],desc:""},{header:"Executive Director",name:"Jessica Flores",image:"./assets/blank-profile.jpeg",schools:["El Camino Community College","Los Angeles (Human Biology: Sub Focus MIMG)","USC (MS in Global Medicine)"],desc:""},{header:"Treasurer",name:"Stephania Ramirez",image:"./assets/blank-profile.jpeg",schools:["Santa Ana Community College","UC Berkeley (Molecular Toxicology)"],desc:""},{header:"Secretary",name:"Angelica Marquez",image:"./assets/blank-profile.jpeg",schools:["El Camino Community College","UC Irvine (Biological Sciences)"],desc:""},{header:"General Board Member",name:"Giancarlo Escobar",image:"./assets/blank-profile.jpeg",schools:["Los Angeles Harbor Community College","UC Berkeley (Statistics)"],desc:""},{header:"Senior Student Ambassador",name:"Sebastian Carrillo Cario",image:"./assets/blank-profile.jpeg",schools:["UC Los Angeles (Psychobiology)"],desc:""},{header:"Web Developer",name:"David Chavez",image:"./assets/david.jpg",schools:["College Of Desert","UC Berkeley (Statistics)"],desc:""}]};var W=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(b.jsx)("h1",{className:"text-center text-primary",children:"Board Members"}),Object(b.jsx)("div",{className:"row",children:j.a.map(G.members,(function(e){return Object(b.jsx)("div",{className:"col-12 col-sm-6 col-md-4",children:Object(b.jsx)(H,{header:e.header,name:e.name,image:e.image,schools:e.schools,desc:e.desc})},e.header)}))})]})]})};var R=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(b.jsx)("h1",{className:"text-center text-secondary",children:"Donate"}),Object(b.jsx)("p",{className:"text-center text-danger",children:"TEST DO NOT DONATE"}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("div",{className:"gfm-embed",style:{maxWidth:"max-content"},"data-url":"https://www.gofundme.com/f/emerging-scholars/widget/medium/"})}),Object(b.jsx)("p",{className:"text-center text-danger",children:"TEST DO NOT DONATE"})]})]})};function J(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Y=function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(J,{}),Object(b.jsx)(y,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/about-us",children:Object(b.jsx)(L,{})}),Object(b.jsx)(i.a,{path:"/contact-us",children:Object(b.jsx)(U,{})}),Object(b.jsx)(i.a,{path:"/donate",children:Object(b.jsx)(R,{})}),Object(b.jsx)(i.a,{path:"/board_members",children:Object(b.jsx)(W,{})}),Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)(P,{})})]}),Object(b.jsx)(w,{})]})},Z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[54,1,2]]]);
//# sourceMappingURL=main.e2f74c09.chunk.js.map