(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),l=a(152);t.default=function(){return r.a.createElement("nav",{className:"bg-meugrey"},r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Eventos",keywords:["engenharia","solidária","ufpa","ieee"]}),r.a.createElement("div",{className:"text-white"},r.a.createElement("h1",null,"Próximos Eventos:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"XX/04/2019 - Git para Iniciantes: Conhecimentos básicos de Git para quem está começando"),r.a.createElement("p",null,"Minicurso sobre a ferramenta Git amplamente utilizada para versionamento de código de projetos. O conhecimento de Git é essencial para todos que trabalham na área de tecnologia por ser a ferramenta mais utilizada para gerenciamento de projetos.",r.a.createElement("br",null),r.a.createElement("b",null,"O minicurso é gratuito e pedimos a doação de alimentos não perecíveis."),r.a.createElement("br",null),r.a.createElement("b",null,"Quantidade de vagas"),":  20 (para os 20 primeiros inscritos)",r.a.createElement("br",null),"Inscrições no ",r.a.createElement("a",{href:""},"Link")))))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(149);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Engenharia Solidária"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(155),s=a.n(o),m=a(148);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title;return i.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var u="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Engenharia Solidária",description:"Gatsby starter styled with Tailwind",author:"@taylorbryant"}}}}},154:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(148);function s(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],l=a[1];return i.a.createElement("nav",{className:"bg-white"},i.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},i.a.createElement(o.a,{to:"/",className:"flex items-center no-underline text-black"},i.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),i.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return l(!n)}},i.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),i.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},i.a.createElement("div",{className:"text-sm"},i.a.createElement(o.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"},"Início"),i.a.createElement(o.a,{to:"/about",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"},"Sobre"),i.a.createElement(o.a,{to:"/events",className:"block md:inline-block mt-4 md:mt-0 no-underline text-black"},"Eventos")))))}s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var m=s;function d(e){var t=e.children;return i.a.createElement(o.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),i.a.createElement("footer",{className:"bg-white"},i.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},i.a.createElement("p",{className:"text-black"},"Created by"," ",i.a.createElement("a",{href:"",className:"font-bold no-underline text-black"},"ComSoc - IEEE Belém")),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/engsol-ieee",className:"font-bold no-underline text-black"},"GitHub")))))},data:n})}d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-events-js-5822cd64c5907b481abd.js.map