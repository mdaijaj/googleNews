(this["webpackJsonpgoogle-news"]=this["webpackJsonpgoogle-news"]||[]).push([[0],{11:function(e,t,c){},35:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(29),r=c.n(n),i=(c(35),c(17)),l=c(2),o=(c(11),c(36),c(0)),d=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(o.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{class:"nav-item active",children:Object(o.jsxs)("a",{class:"nav-link",href:"/",children:["Home ",Object(o.jsx)("span",{class:"sr-only"})]})}),Object(o.jsx)("li",{class:"nav-item active",children:Object(o.jsxs)("a",{class:"nav-link",href:"/business",children:["Business ",Object(o.jsx)("span",{class:"sr-only"})]})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",href:"/sports",children:"Sports"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",href:"/entertainment",children:"Entertainment"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",href:"/about",children:"About"})}),Object(o.jsxs)("li",{class:"nav-item dropdown",children:[Object(o.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Category"}),Object(o.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(o.jsx)("a",{class:"dropdown-item",href:"/technology",children:"Technology"}),Object(o.jsx)("a",{class:"dropdown-item",href:"/sports",children:"Sports"}),Object(o.jsx)("a",{class:"dropdown-item",href:"/entenament",children:"Entenament"}),Object(o.jsx)("a",{class:"dropdown-item",href:"/business",children:"Business"})]})]}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link disabled",href:"#",children:"Disabled"})})]}),Object(o.jsxs)("form",{class:"form-inline my-2 my-lg-0",children:[Object(o.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})},j=c(3),b=c.n(j),h=c(5),x=c(6),u=c(12),p=c.n(u),O=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.get("".concat("https://newsapi.org/v2/everything?q=apple&from=2021-07-08&to=2021-07-08&sortBy=popularity&apiKey=2f35351b15a94b7bab667e5b6f19f560")).then((function(e){var t=e.data.articles;console.log("data",t),s(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}));var r={height:"250px",width:"300px"};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("center",{children:Object(o.jsx)("h2",{children:"News of World Top Headlines"})}),Object(o.jsx)("div",{className:"card-columns",children:c.map((function(e){return Object(o.jsx)("div",{className:"card bg-info",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{src:e.urlToImage,style:r}),Object(o.jsx)("strong",{children:Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("p",{className:"card-text",children:e.title})})}),Object(o.jsx)("p",{className:"card-text",children:e.description}),Object(o.jsx)("p",{className:"card-text",children:e.publishedAt})]})})}))})]})})},f=(c(14),c(12)),g=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=(t[0],t[1]),s=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat("us","&category=").concat("sports","&apiKey=").concat("2f35351b15a94b7bab667e5b6f19f560")).then((function(e){var t=e.data.articles;console.log("data",t),c(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){s()}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"row row-cols-1 row-cols-md-5 g-6",children:[Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{class:"card h-100",children:[Object(o.jsx)("img",{src:"...",class:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h5",{class:"card-title",children:"Card title"}),Object(o.jsx)("p",{class:"card-text",children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{class:"card h-100",children:[Object(o.jsx)("img",{src:"...",class:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h5",{class:"card-title",children:"Card title"}),Object(o.jsx)("p",{class:"card-text",children:"This is a short card."})]})]})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{class:"card h-100",children:[Object(o.jsx)("img",{src:"...",class:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h5",{class:"card-title",children:"Card title"}),Object(o.jsx)("p",{class:"card-text",children:"This is a longer card with supporting text below as a natural lead-in to additional content."})]})]})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{class:"card h-100",children:[Object(o.jsx)("img",{src:"...",class:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h5",{class:"card-title",children:"Card title"}),Object(o.jsx)("p",{class:"card-text",children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{class:"card h-100",children:[Object(o.jsx)("img",{src:"...",class:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h5",{class:"card-title",children:"Card title"}),Object(o.jsx)("p",{class:"card-text",children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]})})]})})},m=(c(14),c(12)),v=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat("us","&category=").concat("sports","&apiKey=").concat("2f35351b15a94b7bab667e5b6f19f560")).then((function(e){var t=e.data.articles;console.log("data",t),s(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{class:"row row-cols-1 row-cols-md-3 g-4",children:c.map((function(e){return Object(o.jsx)("div",{class:"col",children:Object(o.jsxs)("div",{class:"card h-50",children:[Object(o.jsx)("img",{src:e.urlToImage,class:"card-img-top",alt:"..."}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h5",{class:"card-title",children:e.author}),Object(o.jsx)("p",{class:"card-text",children:e.content}),Object(o.jsx)("p",{class:"card-text",children:e.description}),Object(o.jsx)("p",{class:"card-text",children:e.publishedAt})]})]})})}))})})},y=(c(14),c(12)),w=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat("us","&category=").concat("business","&apiKey=").concat("2f35351b15a94b7bab667e5b6f19f560")).then((function(e){var t=e.data.articles;console.log("data",t),s(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}));var r={height:"250px",width:"320px"};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("center",{children:Object(o.jsx)("h1",{children:"Business page"})}),Object(o.jsx)("div",{className:"card-columns",children:c.map((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"card bg-info",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{src:e.urlToImage,style:r}),Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("h2",{className:"card-text",children:e.title})}),Object(o.jsx)("p",{className:"card-text",children:e.description}),Object(o.jsx)("p",{className:"card-text",children:e.publishedAt})]})})})}))})]})})},N=(c(14),c(12)),T=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat("us","&category=").concat("technology","&apiKey=").concat("2f35351b15a94b7bab667e5b6f19f560")).then((function(e){var t=e.data.articles;console.log("data",t),s(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}));var r={height:"250px",width:"300px"};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("center",{children:Object(o.jsx)("h1",{children:"Technology page"})}),Object(o.jsx)("div",{className:"card-columns",children:c.map((function(e){return Object(o.jsx)("div",{className:"card bg-info",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{src:e.urlToImage,style:r}),Object(o.jsx)("strong",{children:Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("p",{className:"card-text",children:e.title})})}),Object(o.jsx)("p",{className:"card-text",children:e.description}),Object(o.jsx)("p",{className:"card-text",children:e.publishedAt})]})})}))})]})})},k=(c(14),c(12)),S=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.get("".concat("https://newsapi.org/v2/top-headlines","?country=").concat("us","&category=").concat("entertainment","&apiKey=").concat("2f35351b15a94b7bab667e5b6f19f560")).then((function(e){var t=e.data.articles;console.log("data",t),s(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){n()}));var r={height:"250px",width:"300px"};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("center",{children:Object(o.jsx)("h1",{children:"entertainment page"})}),Object(o.jsx)("div",{className:"card-columns",children:c.map((function(e){return Object(o.jsx)("div",{className:"card bg-info",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{src:e.urlToImage,style:r}),Object(o.jsx)("strong",{children:Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("p",{className:"card-text",children:e.title})})}),Object(o.jsx)("p",{className:"card-text",children:e.description}),Object(o.jsx)("p",{className:"card-text",children:e.publishedAt})]})})}))})]})})},F=function(){var e="https://newsapi.org/v2/top-headlines?country=".concat("us","&apiKey=").concat("2f35351b15a94b7bab667e5b6f19f560"),t=Object(a.useState)([]),c=Object(x.a)(t,2),s=c[0],n=c[1],r=function(){var t=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p.a.get("".concat(e)).then((function(e){var t=e.data.articles;console.log("data",t),n(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){r()}));var i={height:"250px",width:"300px"};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("center",{children:Object(o.jsx)("h2",{children:"News of World Top Headlines"})}),Object(o.jsx)("div",{className:"card-columns",children:s.map((function(e){return Object(o.jsx)("div",{className:"card bg-info",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{src:e.urlToImage,style:i}),Object(o.jsx)("strong",{children:Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("p",{className:"card-text",children:e.title})})}),Object(o.jsx)("p",{className:"card-text",children:e.description}),Object(o.jsx)("p",{className:"card-text",children:e.publishedAt})]})})}))})]})})};var C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(o.jsx)(l.a,{path:"/topHeadline",component:F}),Object(o.jsx)(l.a,{path:"/sports",component:g}),Object(o.jsx)(l.a,{path:"/about",component:v}),Object(o.jsx)(l.a,{path:"/business",component:w}),Object(o.jsx)(l.a,{path:"/technology",component:T}),Object(o.jsx)(l.a,{path:"/entertainment",component:S})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),E()}},[[66,1,2]]]);
//# sourceMappingURL=main.a56db0e7.chunk.js.map