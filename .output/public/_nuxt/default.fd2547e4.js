import h from"./Icon.f4dbea06.js";import{a as k,x as g,y as $,f as d,i as _,E as b,o as l,c as s,w as m,G as p,k as f,p as w}from"./entry.2972bd31.js";import"./config.28a1fa13.js";const y=k({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:o}){const n=g(!1);return $(()=>{n.value=!0}),a=>{var i;if(n.value)return(i=e.default)==null?void 0:i.call(e);const r=e.fallback||e.placeholder;if(r)return r();const c=a.fallback||a.placeholder||"",u=a.fallbackTag||a.placeholderTag||"span";return d(u,o,c)}}}),x={name:b,props:{placeholder:String,tag:{type:String,default:"span"}}};function v(t,e,o,n,a,r){const c=y;return l(),s(c,{placeholder:o.placeholder,"placeholder-tag":o.tag},{default:m(()=>[p(t.$slots,"default")]),_:3},8,["placeholder","placeholder-tag"])}const C=_(x,[["render",v]]),S={},T={class:"absolute top-0 right-0 m-4 text-yellow-500 dark:text-yellow-300"};function M(t,e){const o=h,n=C;return l(),d("div",T,[f(n,{placeholder:"...",tag:"span"},{default:m(()=>[t.$colorMode.value==="light"?(l(),s(o,{key:0,name:"material-symbols:light-mode",onClick:e[0]||(e[0]=a=>t.$colorMode.preference="dark"),class:"cursor-pointer h-8 w-8 md:h-12 md:w-12"})):t.$colorMode.value==="dark"?(l(),s(o,{key:1,name:"material-symbols:dark-mode",onClick:e[1]||(e[1]=a=>t.$colorMode.preference="light"),class:"cursor-pointer h-8 w-8 md:h-12 md:w-12"})):w("",!0)]),_:1})])}const B=_(S,[["render",M]]),N={},E={class:"transition duration-300 bg-white dark:bg-slate-900 text-black dark:text-slate-50"};function O(t,e){const o=B;return l(),d("div",E,[f(o),p(t.$slots,"default")])}const I=_(N,[["render",O]]);export{I as default};
