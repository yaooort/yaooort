import{d as u,z as i,G as d,i as p,S as _,o as t,c as s,h as a,q as r,s as o,e as b,t as n,x as f,_ as h}from"./app.773669d1.js";const k={class:"title"},I={key:1,class:"subtitle"},y=u({__name:"PageHeader",props:{pageInfo:{type:Object,default:()=>({})}},setup(l){const c=l,{pageInfo:e}=i(c),g=d(),m=p(()=>e.value.bgImage?{backgroundImage:`url(${_(e.value.bgImage.path)})`}:{});return(v,P)=>(t(),s("div",{class:f(["page-header",{"use-image":a(e).bgImage}]),style:r(m.value)},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:r({background:a(e).bgImage.mask})},null,4)):o("",!0),b("h1",k,n(a(e).title||a(g).title),1),a(e).subtitle?(t(),s("h3",I,n(a(e).subtitle),1)):o("",!0)],6))}});var B=h(y,[["__file","PageHeader.vue"]]);export{B as P};
