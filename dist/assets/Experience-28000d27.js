import{V as c,b as s,j as i,F as o,a as e}from"./index-665e387e.js";import{s as l}from"./styles-bea25d13.js";import{e as m}from"./index-88eecda8.js";import{S as d}from"./SectionWrapper-3aac89ad.js";import{m as p}from"./motion-32448cbc.js";var n={VerticalTimeline:c.default,VerticalTimelineElement:s.default};const h=({experience:t})=>i(n.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e("div",{className:"flex justify-center items-center w-full h-full",children:e("img",{src:t.icon,alt:t.company_name,className:"w-[100%] h-[100%] object-contain"})}),children:[i("div",{children:[e("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((a,r)=>e("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:a},`experience-point-${r}`))})]}),f=()=>i(o,{children:[i(p.div,{children:[e("p",{className:`${l.sectionSubText} text-center`,children:"What I have done so far"}),e("h2",{className:`${l.sectionHeadText} text-center`,children:"Work Experience."})]}),e("div",{className:"mt-20 flex flex-col",children:e(n.VerticalTimeline,{animate:!1,children:m.map((t,a)=>e(h,{experience:t},`experience-${a}`))})})]}),g=d(f,"work");export{g as default};
//# sourceMappingURL=Experience-28000d27.js.map