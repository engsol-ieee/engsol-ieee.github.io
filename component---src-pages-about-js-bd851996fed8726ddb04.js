(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(154),i=a(152),c=a(165),s=a.n(c);t.default=function(){return r.a.createElement("nav",{className:"bg-meugrey"},r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Sobre",keywords:["gatsby","tailwind","react","tailwindcss"]}),r.a.createElement("div",{className:"flex flex-col md:flex-row items-center"},r.a.createElement("div",{className:"md:w-2/3 md:mr-8"},r.a.createElement("p",{className:"border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify"},"asas"),r.a.createElement("p",{className:"font-bold mt-4 text-right text-xs uppercase"},"– Thomas Nagel")),r.a.createElement("div",{className:"w-2/3 md:w-1/3"},r.a.createElement("img",{src:s.a,alt:"A dog relaxing"})))))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(149);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Engenharia Solidária"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},152:function(e,t,a){"use strict";var n=a(153),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(155),o=a.n(s),m=a(148);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return l.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var u="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Engenharia Solidária",description:"Gatsby starter styled with Tailwind",author:"@taylorbryant"}}}}},154:function(e,t,a){"use strict";var n=a(150),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(148);function o(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],i=a[1];return l.a.createElement("nav",{className:"bg-white"},l.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},l.a.createElement(s.a,{to:"/",className:"flex items-center no-underline text-black"},l.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),l.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return i(!n)}},l.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),l.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},l.a.createElement("div",{className:"text-sm"},l.a.createElement(s.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"},"Início"),l.a.createElement(s.a,{to:"/about",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"},"Sobre"),l.a.createElement(s.a,{to:"/events",className:"block md:inline-block mt-4 md:mt-0 no-underline text-black"},"Eventos")))))}o.propTypes={siteTitle:c.a.string},o.defaultProps={siteTitle:""};var m=o;function d(e){var t=e.children;return l.a.createElement(s.b,{query:"2994927498",render:function(e){return l.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},l.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{className:"flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),l.a.createElement("footer",{className:"bg-white"},l.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},l.a.createElement("p",{className:"text-black"},"Created by"," ",l.a.createElement("a",{href:"",className:"font-bold no-underline text-black"},"ComSoc - IEEE Belém")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/engsol-ieee",className:"font-bold no-underline text-black"},"GitHub")))))},data:n})}d.propTypes={children:c.a.node.isRequired};t.a=d},165:function(e,t,a){e.exports=a.p+"static/dog-illustration-d0e0c33403de4c5562aee18ce1352235.svg"}}]);
//# sourceMappingURL=component---src-pages-about-js-bd851996fed8726ddb04.js.map