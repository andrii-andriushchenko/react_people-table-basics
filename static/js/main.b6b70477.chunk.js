(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(2)),s=(c(23),c(0)),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(6),o=c.n(i),l=function(e){var t=e.to,c=e.text;return Object(s.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:c})},b=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(l,{to:"/",text:"Home"}),Object(s.jsx)(l,{to:"people",text:"People"})]})})})},h=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},d=c(8),u=c(9),x=c(12),O=c(4),p=c(1),m="https://mate-academy.github.io/react_people-table/api/people.json";function f(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(m)})).then((function(e){return e.json()}));var e}c(25);var v=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},g=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug,j="f"===n;return Object(s.jsx)(a.b,{to:"../".concat(r),className:o()({"has-text-danger":j}),children:c})},N=function(e){var t=e.people,c=e.selectedSlug;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){var t=e.sex,n=e.born,a=e.died,r=e.slug,j=e.motherName,i=e.fatherName,l=e.mother,b=e.father,h=c===r,d=j||"-",u=i||"-";return Object(s.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":h}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(g,{person:e})}),Object(s.jsx)("td",{children:t}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:a}),Object(s.jsx)("td",{children:l?Object(s.jsx)(g,{person:l}):d}),Object(s.jsx)("td",{children:b?Object(s.jsx)(g,{person:b}):u})]},r)}))})]})},w=function(e,t){return e.find((function(e){return e.name===t}))},y=function(){var e=Object(p.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(p.useState)(!0),j=Object(O.a)(a,2),i=j[0],o=j[1],l=Object(p.useState)(!1),b=Object(O.a)(l,2),h=b[0],m=b[1],g=Object(r.h)().slug,y=void 0===g?"":g,k=function(){var e=Object(x.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,c=t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{mother:w(t,e.motherName),father:w(t,e.fatherName)})})),n(c),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.warn("An occur error while loading people"),m(!0);case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();Object(p.useEffect)((function(){k()}),[]);var P=!i&&Boolean(c.length),S=!c.length&&!i&&!h;return Object(s.jsxs)("div",{className:"block",children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsxs)("div",{className:"box table-container",children:[i&&Object(s.jsx)(v,{}),h&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),P&&Object(s.jsx)(N,{people:c,selectedSlug:y}),S&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})]})},k=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(b,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(h,{})}),Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsxs)(r.b,{path:"/people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(y,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(y,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(k,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b6b70477.chunk.js.map