import{j as s,F as p,a as e}from"./index-2b9987de.js";import{s as o}from"./styles-bea25d13.js";import{g as x}from"./github-1dad9546.js";import{S as h}from"./SectionWrapper-ce51a80a.js";import{t as f,p as u}from"./index-53de42d6.js";import{m as r}from"./motion-866f5dc8.js";const w="/assets/web-3154a608.webp",N=({index:c,name:t,description:n,tags:d,image:m,source_code_link:l,live_link:i})=>e(r.div,{children:s("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[s("div",{className:"relative w-full h-[230px]",children:[e("img",{src:m,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),s("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover gap-2",children:[i&&e("div",{onClick:()=>window.open(i,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e("img",{src:w,alt:"source code",className:"w-1/2 h-1/2 object-contain"})}),l&&e("div",{onClick:()=>window.open(l,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e("img",{src:x,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})]})]}),s("div",{className:"mt-5",children:[e("h3",{className:"text-white font-bold text-[24px]",children:t}),e("p",{className:"mt-2 text-secondary text-[14px]",children:n})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:d.map(a=>s("p",{className:`text-[14px] ${a.color}`,children:["#",a.name]},`${t}-${a.name}`))})]})}),j=()=>s(p,{children:[s(r.div,{children:[e("p",{className:`${o.sectionSubText} `,children:"My work"}),e("h2",{className:`${o.sectionHeadText}`,children:"Projects."})]}),e("div",{className:"w-full flex",children:e(r.p,{className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:f.projectDescription})}),e("div",{className:"mt-20 flex flex-wrap justify-center gap-7",children:u.map((c,t)=>e(N,{index:t,...c},`project-${t}`))})]}),C=h(j,"");export{C as default};
//# sourceMappingURL=Works-bae91ea2.js.map
