import{r as g,p as D,g as H,j as x,F as K,a as p}from"./index-74821668.js";import{s as W}from"./styles-bea25d13.js";import{e as G}from"./index-685e08b8.js";import{S as J}from"./SectionWrapper-dc80352b.js";import{m as Q}from"./motion-c2ec759b.js";var E={},N={},X={get exports(){return N},set exports(e){N=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if(c==="string"||c==="number")l.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&l.push(a)}}else if(c==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){l.push(i.toString());continue}for(var s in i)n.call(i,s)&&i[s]&&l.push(s)}}}return l.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(X);E.__esModule=!0;E.default=void 0;var Y=j(g),m=j(D),Z=j(N);function j(e){return e&&e.__esModule?e:{default:e}}const U=({animate:e=!0,className:n="",layout:r="2-columns",lineColor:l="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",l),Y.default.createElement("div",{className:(0,Z.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},t));U.propTypes={children:m.default.oneOfType([m.default.arrayOf(m.default.node),m.default.node]).isRequired,className:m.default.string,animate:m.default.bool,layout:m.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:m.default.string};var ee=U;E.default=ee;var I={};function C(){return C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},C.apply(this,arguments)}function te(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,T(e,n)}function T(e,n){return T=Object.setPrototypeOf||function(l,t){return l.__proto__=t,l},T(e,n)}function ne(e,n){if(e==null)return{};var r={},l=Object.keys(e),t,i;for(i=0;i<l.length;i++)t=l[i],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var $=new Map,V=new WeakMap,P=0,B=void 0;function re(e){B=e}function ie(e){return e?(V.has(e)||(P+=1,V.set(e,P.toString())),V.get(e)):"0"}function le(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?ie(e.root):e[n])}).toString()}function ae(e){var n=le(e),r=$.get(n);if(!r){var l=new Map,t,i=new IntersectionObserver(function(c){c.forEach(function(a){var s,u=a.isIntersecting&&t.some(function(d){return a.intersectionRatio>=d});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=l.get(a.target))==null||s.forEach(function(d){d(u,a)})})},e);t=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:i,elements:l},$.set(n,r)}return r}function R(e,n,r,l){if(r===void 0&&(r={}),l===void 0&&(l=B),typeof window.IntersectionObserver>"u"&&l!==void 0){var t=e.getBoundingClientRect();return n(l,{isIntersecting:l,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var i=ae(r),c=i.id,a=i.observer,s=i.elements,u=s.get(e)||[];return s.has(e)||s.set(e,u),u.push(n),a.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),$.delete(c))}}var oe=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function q(e){return typeof e.children!="function"}var k=function(e){te(n,e);function n(l){var t;return t=e.call(this,l)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(i){t.node&&(t.unobserve(),!i&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=i||null,t.observeNode()},t.handleChange=function(i,c){i&&t.props.triggerOnce&&t.unobserve(),q(t.props)||t.setState({inView:i,entry:c}),t.props.onChange&&t.props.onChange(i,c)},t.state={inView:!!l.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,i=t.threshold,c=t.root,a=t.rootMargin,s=t.trackVisibility,u=t.delay,d=t.fallbackInView;this._unobserveCb=R(this.node,this.handleChange,{threshold:i,root:c,rootMargin:a,trackVisibility:s,delay:u},d)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!q(this.props)){var t=this.state,i=t.inView,c=t.entry;return this.props.children({inView:i,entry:c,ref:this.handleNode})}var a=this.props,s=a.children,u=a.as,d=ne(a,oe);return g.createElement(u||"div",C({ref:this.handleNode},d),s)},n}(g.Component);k.displayName="InView";k.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function se(e){var n=e===void 0?{}:e,r=n.threshold,l=n.delay,t=n.trackVisibility,i=n.rootMargin,c=n.root,a=n.triggerOnce,s=n.skip,u=n.initialInView,d=n.fallbackInView,h=g.useRef(),b=g.useState({inView:!!u}),_=b[0],w=b[1],S=g.useCallback(function(y){h.current!==void 0&&(h.current(),h.current=void 0),!s&&y&&(h.current=R(y,function(M,F){w({inView:M,entry:F}),F.isIntersecting&&a&&h.current&&(h.current(),h.current=void 0)},{root:c,rootMargin:i,threshold:r,trackVisibility:t,delay:l},d))},[Array.isArray(r)?r.toString():r,c,i,a,s,t,d,l]);g.useEffect(function(){!h.current&&_.entry&&!a&&!s&&w({inView:!!u})});var f=[S,_.inView,_.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const ce=Object.freeze(Object.defineProperty({__proto__:null,InView:k,default:k,defaultFallbackInView:re,observe:R,useInView:se},Symbol.toStringTag,{value:"Module"})),ue=H(ce);I.__esModule=!0;I.default=void 0;var v=A(g),o=A(D),O=A(N),de=ue;function A(e){return e&&e.__esModule?e:{default:e}}const z=({children:e="",className:n="",contentArrowStyle:r=null,contentStyle:l=null,date:t="",dateClassName:i="",icon:c=null,iconClassName:a="",iconOnClick:s=null,onTimelineElementClick:u=null,iconStyle:d=null,id:h="",position:b="",style:_=null,textClassName:w="",intersectionObserverProps:S={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:f=!1})=>v.default.createElement(de.InView,S,({inView:y,ref:M})=>v.default.createElement("div",{ref:M,id:h,className:(0,O.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:_},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:d,onClick:s,className:(0,O.default)(a,"vertical-timeline-element-icon",{"bounce-in":y||f,"is-hidden":!(y||f)})},c),v.default.createElement("div",{style:l,onClick:u,className:(0,O.default)(w,"vertical-timeline-element-content",{"bounce-in":y||f,"is-hidden":!(y||f)})},v.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,O.default)(i,"vertical-timeline-element-date")},t)))));z.propTypes={children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),className:o.default.string,contentArrowStyle:o.default.shape({}),contentStyle:o.default.shape({}),date:o.default.node,dateClassName:o.default.string,icon:o.default.element,iconClassName:o.default.string,iconStyle:o.default.shape({}),iconOnClick:o.default.func,onTimelineElementClick:o.default.func,id:o.default.string,position:o.default.string,style:o.default.shape({}),textClassName:o.default.string,visible:o.default.bool,intersectionObserverProps:o.default.shape({root:o.default.object,rootMargin:o.default.string,threshold:o.default.number,triggerOnce:o.default.bool})};var fe=z;I.default=fe;var L={VerticalTimeline:E.default,VerticalTimelineElement:I.default};const pe=({experience:e})=>x(L.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:p("div",{className:"flex justify-center items-center w-full h-full",children:p("img",{src:e.icon,alt:e.company_name,className:"w-[100%] h-[100%] object-contain"})}),children:[x("div",{children:[p("h3",{className:"text-white text-[24px] font-bold",children:e.title}),p("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),p("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((n,r)=>p("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${r}`))})]}),he=()=>x(K,{children:[x(Q.div,{children:[p("p",{className:`${W.sectionSubText} text-center`,children:"What I have done so far"}),p("h2",{className:`${W.sectionHeadText} text-center`,children:"Work Experience."})]}),p("div",{className:"mt-20 flex flex-col",children:p(L.VerticalTimeline,{animate:!1,children:G.map((e,n)=>p(pe,{experience:e},`experience-${n}`))})})]}),_e=J(he,"work");export{_e as default};
//# sourceMappingURL=Experience-dcba8ded.js.map
