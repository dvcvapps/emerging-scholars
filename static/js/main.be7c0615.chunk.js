(this["webpackJsonpemerging-scholars"]=this["webpackJsonpemerging-scholars"]||[]).push([[0],{40:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);s(40);var a=s(13),c=s(16),n=s(30);a.b.add(c.a,c.e,c.d,c.c,c.f,c.b,n.a);var r=s(1),i=s.n(r),l=s(31),o=s.n(l),d=s(5),m=s(11),j=s(3),h=s(10),b=s.n(h),u=s(12),x=s(0);function O(e){var t=e.text,s=e.href,a=e.classNames,c=e.onClick;return Object(x.jsxs)(m.b,{onClick:c,className:a,to:s,children:[Object(x.jsx)("img",{height:"60px",src:"./assets/logo.png",alt:"logo"}),t]})}function p(e){var t=e.text,s=e.href,a=e.classNames,c=e.onClick;return Object(x.jsx)(m.c,{activeClassName:"border-primary border-bottom",onClick:c,className:a,to:s,children:t})}function g(e){var t=e.text,s=e.href,a=e.classNames,c=e.onClick;return Object(x.jsx)(m.c,{activeClassName:"",onClick:c,className:a,to:s,children:t})}function f(e){var t=e.children,s=e.classNames;return Object(x.jsx)("div",{className:"container-xxl d-flex align-items-center p-1 ".concat(s),children:t})}function v(e){var t=e.children,s=e.classNames;return Object(x.jsx)("div",{className:"border-top ".concat(s),children:t})}function N(e){var t=e.children,s=e.classNames;return Object(x.jsx)("div",{className:"fixed-top ".concat(s),children:t})}O.defaultProps={classNames:"",text:"",href:"",onClick:function(){}},p.defaultProps={classNames:"",text:"",href:"",onClick:function(){}},g.defaultProps={classNames:"",text:"",href:"",onClick:function(){}},f.defaultProps={children:[],classNames:""},v.defaultProps={children:[],classNames:""};N.defaultProps={children:[],classNames:""},N.HomeItem=O,N.MenuItem=p,N.Mobile=v,N.MobileItem=g,N.Main=f;var y=N,S={home:{text:"ELSSA",href:"/home"},items:[{dropdown:!1,isActive:!1,text:"Our Story",icon:"book",href:"/about-us"},{dropdown:!1,isActive:!1,text:"Contact Us",icon:"envelope",href:"/contact-us"},{dropdown:!1,isActive:!1,text:"Board Members",icon:"users",href:"/board_members"}],donate:{text:"Donate",href:"/donate"}};var w=function(){var e=Object(r.useState)([0,0]),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(r.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),s};var k=function(){var e=Object(r.useState)([0]),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(r.useLayoutEffect)((function(){function e(){a([window.pageYOffset])}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),s};var E=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),s=t[0],a=t[1],c=w(),n=Object(j.a)(c,1)[0],i=k(),l=Object(j.a)(i,1)[0],o=Object(r.useState)(l<50),d=Object(j.a)(o,2),m=d[0],h=d[1],O=Object(r.useState)(n<768),p=Object(j.a)(O,2),g=p[0],f=p[1];Object(r.useEffect)((function(){h(!s&&l<50),f(n<768)}),[n,l]);var v=function(){a(!1)};return Object(x.jsxs)(y,{classNames:"".concat(m?"bg-transparent":"bg-primary-trans"),children:[Object(x.jsxs)(y.Main,{children:[Object(x.jsx)(y.HomeItem,{text:S.home.text,href:S.home.href,classNames:"h1 d-block text-secondary m-1 nounderline me-auto",onClick:v}),b.a.map(S.items,(function(e){return!g&&Object(x.jsx)(y.MenuItem,{text:e.text,href:e.href,classNames:"h5 text-white d-block p-1 nounderline",onClick:v},e.text)})),Object(x.jsx)(y.MenuItem,{text:S.donate.text,href:S.donate.href,classNames:"h5 text-warning p-1 nounderline",onClick:v}),Object(x.jsx)("button",{type:"button",className:"d-md-none btn btn-secondary m-2",onClick:function(){s?l<50&&h(!0):h(!1),a(!s)},children:s?Object(x.jsx)(u.a,{className:"text-white",icon:["fa","times"]}):Object(x.jsx)(u.a,{className:"text-white",icon:["fa","bars"]})})]}),g&&s&&Object(x.jsx)(y.Mobile,{children:b.a.map(S.items,(function(e){return g&&s&&Object(x.jsx)(y.MobileItem,{text:e.text,href:e.href,classNames:"d-block h5 m-0 p-1 border-bottom nounderline text-white",onClick:v},e.text)}))})]})};function C(e){var t=e.title,s=e.links,a=e.desc,c=e.location,n=e.phone,i=Object(r.useState)(""),l=Object(j.a)(i,2),o=l[0],d=l[1];return Object(r.useEffect)((function(){d((new Date).getFullYear())}),[]),Object(x.jsx)("div",{className:"mt-1 pt-5 pb-5 bg-primary text-light no-list-style",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-lg-5 col-xs-12",children:[Object(x.jsx)("h2",{children:t}),Object(x.jsx)("p",{className:"pr-5 text-white-50",children:a})]}),Object(x.jsxs)("div",{className:"col-lg-3 col-xs-12 links",children:[Object(x.jsx)("h4",{className:"mt-lg-0 mt-sm-3",children:"Links"}),Object(x.jsx)("ul",{className:"m-0 p-0",children:b.a.map(s,(function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)(u.a,{icon:["fa",e.icon]}),Object(x.jsx)(m.b,{className:"ml-2 text-white nounderline",to:e.href,children:" ".concat(e.text)})]},e.text)}))})]}),Object(x.jsxs)("div",{className:"col-lg-4 col-xs-12",children:[Object(x.jsx)("h4",{className:"mt-lg-0 mt-sm-4",children:"Location"}),Object(x.jsx)("p",{children:c}),n&&Object(x.jsxs)("p",{className:"mb-0",children:[Object(x.jsx)(u.a,{icon:["fa","phone"]}),n]})]})]}),Object(x.jsxs)("div",{className:"row mt-5",children:[Object(x.jsx)("hr",{className:"text-dark"}),Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("p",{children:Object(x.jsxs)("small",{className:"text-white-50",children:["\xa9",o,". All Rights Reserved."]})})})]})]})})}C.defaultProps={links:{},title:"",desc:"",location:"",phone:""};var M=C;var T=function(){return Object(x.jsx)(M,{title:S.home.text,desc:"Emerging Leaders and Scholars in STEM Academy",links:S.items,location:"Southern California"})},A=s(33),L=s.n(A),P=s(19),I=s.n(P);function q(e){var t=e.children,s=e.image,a=e.height,c={backgroundImage:"url(".concat(s,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:a,maxHeight:"800px"};return Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:c,children:t})}q.defaultProps={children:[],image:"",height:100};var F=q;function B(e){var t=e.header,s=e.subHeader,a=e.desc,c=e.classNames;return Object(x.jsx)("div",{className:"card ".concat(c),children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:t}),Object(x.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:s}),Object(x.jsx)("p",{className:"card-text",children:a})]})})}B.defaultProps={header:"",subHeader:"",desc:"",classNames:""};var D=B;var H=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container-xxl p-0",children:[Object(x.jsx)(F,{height:"100vh",image:"./assets/background-image.jpeg",children:Object(x.jsxs)("div",{className:"container ",children:[Object(x.jsx)("h1",{className:"text-white",children:"ELSSA"}),Object(x.jsx)("p",{className:"text-white",children:"EMERGING LEADERS AND SCHOLARS IN STEM ACADEMY"}),Object(x.jsx)("div",{className:"social-links",children:Object(x.jsx)(m.b,{to:"#",className:"text-twitter",onClick:function(){return alert("This will redirect to Twitter")},children:Object(x.jsx)(u.a,{icon:["fab","twitter"]})})})]})}),Object(x.jsxs)("div",{className:"row p-0 m-0",children:[Object(x.jsx)("div",{className:"col-sm-6 d-flex justify-content-center align-items-center flex-column bg-primary",children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)("h1",{className:"text-center open-sans-font text-secondary mt-3",children:"Mission"}),Object(x.jsx)("p",{className:"text-center text-white mb-3 w-75",children:"To increase and promote inclusivity of students in pursuing (degrees/careers) science, technology, engineering and mathematics (STEM)."})]})}),Object(x.jsx)("div",{className:"col-sm-6 bg-secondary",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)(L.a,{children:[Object(x.jsx)("div",{className:"col col-sm-6 p-0",children:Object(x.jsx)("img",{width:"100%",src:"./assets/neuron.png",alt:""})}),Object(x.jsx)("div",{className:"col col-sm-6 p-0",children:Object(x.jsx)("img",{width:"100%",src:"./assets/tech.png",alt:""})}),Object(x.jsx)("div",{className:"col col-sm-6 p-0",children:Object(x.jsx)("img",{width:"100%",src:"./assets/engineering.png",alt:""})}),Object(x.jsx)("div",{className:"col col-sm-6 p-0",children:Object(x.jsx)("img",{width:"100%",src:"./assets/math.png",alt:""})})]})})})]}),Object(x.jsx)("div",{className:"",children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)("h1",{className:"text-center open-sans-font text-primary",children:"Goals"}),Object(x.jsxs)("div",{className:"row text-primary m-0 p-0",children:[Object(x.jsx)("div",{className:"col-lg-3 mb-1",children:Object(x.jsx)(D,{classNames:"h-100",header:"#1",desc:"Provide students exposure to basics of research and examples of current cutting edge biomedical research"})}),Object(x.jsx)("div",{className:"col-lg-3 mb-1",children:Object(x.jsx)(D,{classNames:"h-100",header:"#2",desc:"Acquire skills in developing a research question to give a virtual science presentation in a STEM topic"})}),Object(x.jsx)("div",{className:"col-lg-3 mb-1",children:Object(x.jsx)(D,{classNames:"h-100",header:"#3",desc:"Workshops (navigate academia, personal statement, financial aid) and panels (STEM transfers, science/healthcare careers)"})}),Object(x.jsx)("div",{className:"col-lg-3 mb-1",children:Object(x.jsx)(D,{classNames:"h-100",header:"#4",desc:"Feedback on personal statement and strong reference for future opportunities"})})]})]})}),Object(x.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)("h1",{className:"text-center open-sans-font text-primary",children:"Boost Underrepresentation in STEM"}),Object(x.jsxs)("ul",{className:"text-primary",children:[Object(x.jsx)("li",{children:"Identify Role Models That Students can Relate To"}),Object(x.jsx)("li",{children:"To Encourage students in STEM, Emphasize a Growth Mindset"}),Object(x.jsx)("li",{children:"Involve Students in Project-Based Learning"})]})]})}),Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)("h1",{className:"text-center open-sans-font text-primary",children:"Why is Basic Research important?"}),Object(x.jsxs)("ul",{className:"text-primary",children:[Object(x.jsx)("li",{children:"Helps identify problems"}),Object(x.jsx)("li",{children:"Collect informational resources to address problem"}),Object(x.jsx)("li",{children:"Evaluate resources for quality and relevance"}),Object(x.jsx)("li",{children:"Define and create effective solutions to problems"}),Object(x.jsx)("li",{children:"Translational Skill"})]})]})})]}),Object(x.jsx)(I.a,{children:Object(x.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(x.jsx)("h1",{className:"text-center open-sans-font text-primary",children:"Future Leaders and Scholars"}),Object(x.jsx)("p",{className:"text-primary",children:"What will you discover?"})]})})]})})};function R(e){var t={height:e.height};return Object(x.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:t})}R.defaultProps={height:100};var G=R;var U=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(G,{}),Object(x.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(x.jsx)("h1",{className:"display-4 text-center text-primary",children:"Our Story"}),Object(x.jsxs)("p",{className:"text-primary",children:["The",Object(x.jsx)("b",{children:"Emerging Leaders and Scholars in STEM Academy (ELSSA) "}),"is focused in increasing the number of economically and educationally disadvantaged students in pursuing (degrees/careers) in science, technology, engineering and mathematics (STEM)."]}),Object(x.jsxs)("p",{className:"text-primary",children:["This Inaugural",Object(x.jsx)("b",{children:"Summer STEM Research Program (SRP) "}),"2021 presented by ELSSA, is a competitive and highly intensive five-week virtual program that introduces students to cutting edge research and allows students to formulate their own research questions to develop a passion for STEM. Underrepresented students in STEM are empowered to pursue higher education and STEM careers through interactive workshops, research presentations, and mentorship from a unique, supportive and professional community. In addition, students will learn how to think critically, problem solve, and self-advocate to empower their journey in STEM and beyond."]})]})]})},z=s(38),W=s(39),_=s(26);var J=function(e){var t=e.error;return Object(x.jsxs)("div",{className:"text-danger",children:["required"===t.type&&(t.message||"This field is required"),"pattern"===t.type&&(t.message||"This field does not meet the required pattern")]})};function Y(e){var t=e.label,s=e.name,a=e.placeholder,c=e.register,n=e.validation,r=e.error,i=e.useTextArea;return Object(x.jsx)("div",{className:"row d-flex justify-content-center",children:Object(x.jsxs)("div",{className:"form-group col-lg-8",children:[Object(x.jsx)("label",{htmlFor:s,children:t}),i?Object(x.jsx)("textarea",Object(_.a)({id:s,className:"form-control",name:s,placeholder:a||""},c(s,n))):Object(x.jsx)("input",Object(_.a)({id:s,className:"form-control",name:s,placeholder:a||""},c(s,n))),r&&Object(x.jsx)(J,{error:r})]})})}Y.defaultProps={error:null,label:"",placeholder:"",name:"",useTextArea:!1,validation:{}};var V=Y,X={EMAIL_REGEX:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/};var Z=function(){var e=Object(z.a)(),t=e.register,s=e.handleSubmit,a=e.formState.errors,c=Object(r.useState)(!1),n=Object(j.a)(c,2),i=n[0],l=(n[1],Object(W.a)("xayadeed")),o=Object(j.a)(l,2),d=o[0],m=o[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(G,{}),Object(x.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(x.jsx)("h1",{className:"display-4 text-center text-primary",children:"Contact Us"}),d.succeeded||i?Object(x.jsx)("p",{className:"text-center",children:" Thank you!"}):Object(x.jsxs)("form",{className:"",onSubmit:s((function(e){m(e)})),children:[Object(x.jsx)(V,{label:"First Name",name:"firstName",register:t,validation:{required:{value:!0,message:"Please include your first name"}},error:a.firstName}),Object(x.jsx)(V,{label:"Last Name",name:"lastName",register:t,validation:{required:{value:!0,message:"Please include your last name"}},error:a.lastName}),Object(x.jsx)(V,{label:"Email",name:"email",register:t,validation:{required:{value:!0,message:"Please include your email"},pattern:{value:X.EMAIL_REGEX,message:"Please provide a valid email"}},error:a.email}),Object(x.jsx)(V,{label:"Message",name:"message",register:t,validation:{required:{value:!0,message:"Please provide a message"}},error:a.message,placeholder:"I want to learn more about Emerging scholars...",useTextArea:!0}),Object(x.jsx)("div",{className:"row d-flex justify-content-center",children:Object(x.jsx)("div",{className:"form-group col-lg-8",children:Object(x.jsx)("button",{type:"submit",children:"Submit"})})})]})]})]})};function $(e){var t=e.header,s=e.image,a=e.desc,c=e.name,n=e.schools;return Object(x.jsxs)("div",{className:"d-flex justify-content-around flex-column",children:[Object(x.jsx)("h4",{className:"text-center my-0 open-sans-font",children:t}),Object(x.jsx)("h4",{className:"text-center pb-3",children:c}),Object(x.jsx)("img",{className:"align-self-center rounded-circle z-depth-2",alt:"100x100",height:200,width:200,src:s,"data-holder-rendered":"true"}),b.a.map(n,(function(e){return Object(x.jsxs)("div",{className:"text-center mt-1",children:[Object(x.jsx)("small",{children:e}),n[n.length-1]!==e&&Object(x.jsx)("hr",{className:"text-black my-0"})]},e)})),Object(x.jsx)("p",{className:"text-center my-3",children:a})]})}$.defaultProps={header:"",name:"",image:"",desc:"",schools:[]};var K=$,Q={members:[{header:"President",name:"Gustavo Garcia",image:"./assets/blank-profile.jpeg",schools:["El Camino Community College","UC Berkeley"],desc:""},{header:"Vice President",name:"Natalie Penado",image:"./assets/blank-profile.jpeg",schools:["UC Berkeley (Environmental Earth Science)"],desc:""},{header:"Executive Director",name:"Jessica Flores",image:"./assets/blank-profile.jpeg",schools:["El Camino Community College","Los Angeles (Human Biology: Sub Focus MIMG)","USC (MS in Global Medicine)"],desc:""},{header:"Treasurer",name:"Stephania Ramirez",image:"./assets/blank-profile.jpeg",schools:["Santa Ana Community College","UC Berkeley (Molecular Toxicology)"],desc:""},{header:"Secretary",name:"Angelica Marquez",image:"./assets/blank-profile.jpeg",schools:["El Camino Community College","UC Irvine (Biological Sciences)"],desc:""},{header:"General Board Member",name:"Giancarlo Escobar",image:"./assets/blank-profile.jpeg",schools:["Los Angeles Harbor Community College","UC Berkeley (Statistics)"],desc:""},{header:"Senior Student Ambassador",name:"Sebastian Carrillo Cario",image:"./assets/blank-profile.jpeg",schools:["UC Los Angeles (Psychobiology)"],desc:""},{header:"Web Developer",name:"David Chavez",image:"./assets/blank-profile.jpeg",schools:["College Of Desert","UC Berkeley (Statistics)"],desc:""}]};var ee=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(G,{}),Object(x.jsxs)("div",{className:"container",style:{minHeight:1e3},children:[Object(x.jsx)("h1",{className:"display-4 text-center text-primary",children:"Board Members"}),Object(x.jsx)("div",{className:"row",children:b.a.map(Q.members,(function(e){return Object(x.jsx)("div",{className:"col-12 col-sm-6 col-md-4",children:Object(x.jsx)(K,{header:e.header,name:e.name,image:e.image,schools:e.schools,desc:e.desc})},e.header)}))})]})]})};var te=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(G,{}),Object(x.jsx)("div",{className:"container",style:{minHeight:1e3},children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("h1",{className:"display-4 text-primary text-center",children:"DONATE"}),Object(x.jsx)("p",{className:"lead",children:"Lorem ipsum dolor."}),Object(x.jsx)("hr",{className:"my-4"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque. Dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus metus. Sit amet nulla facilisi morbi tempus iaculis urn."}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){return alert("This will redirect to donate page")},children:"DONATE"})]})})]})};function se(){var e=Object(d.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ae=function(){return Object(x.jsxs)(m.a,{children:[Object(x.jsx)(se,{}),Object(x.jsx)(E,{}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/about-us",children:Object(x.jsx)(U,{})}),Object(x.jsx)(d.a,{path:"/contact-us",children:Object(x.jsx)(Z,{})}),Object(x.jsx)(d.a,{path:"/donate",children:Object(x.jsx)(te,{})}),Object(x.jsx)(d.a,{path:"/board_members",children:Object(x.jsx)(ee,{})}),Object(x.jsx)(d.a,{path:"/",children:Object(x.jsx)(H,{})})]}),Object(x.jsx)(T,{})]})},ce=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[55,1,2]]]);
//# sourceMappingURL=main.be7c0615.chunk.js.map