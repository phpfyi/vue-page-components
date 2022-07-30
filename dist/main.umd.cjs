(function(c,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis<"u"?globalThis:c||self,e(c["Vue Page Components"]={},c.Vue))})(this,function(c,e){"use strict";const N=e.defineComponent({__name:"PerspectivePlane",props:{rotateX:{default:"0deg"},rotateY:{default:"0deg"},translateY:{default:"0px"},translateZ:{default:"0px"}},setup(t){const n=t,l=e.computed(()=>({transform:`
            rotateX(${n.rotateX}) 
            rotateY(${n.rotateY}) 
            translateY(${n.translateY}) 
            translateZ(${n.translateZ})`}));return(o,a)=>(e.openBlock(),e.createElementBlock("div",{class:"perspective-plane",style:e.normalizeStyle(e.unref(l))},[e.renderSlot(o.$slots,"default",{},void 0,!0)],4))}}),Le="",_=(t,n)=>{const l=t.__vccOpts||t;for(const[o,a]of n)l[o]=a;return l},S=_(N,[["__scopeId","data-v-ea86b7ea"]]),V={class:"perspective"},T=e.defineComponent({__name:"PerspectiveWrapper",props:{size:{default:"0px"}},setup(t){const n=t,l=e.computed(()=>({height:n.size,width:n.size}));return(o,a)=>(e.openBlock(),e.createElementBlock("div",V,[e.createElementVNode("div",{class:"perspective__inner",style:e.normalizeStyle(e.unref(l))},[e.renderSlot(o.$slots,"default",{},void 0,!0)],4)]))}}),ze="",$=_(T,[["__scopeId","data-v-b2daf92c"]]),q=e.defineComponent({__name:"SlantWrapper",props:{height:null,top:{default:"-5px"},reverse:{type:Boolean,default:!1}},setup(t){const n=t,l=e.computed(()=>({height:n.height,top:n.top})),o=e.computed(()=>({"slant-wrapper-reverse":n.reverse}));return(a,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["slant-wrapper",e.unref(o)]),style:e.normalizeStyle(e.unref(l))},null,6))}}),Me="",P=_(q,[["__scopeId","data-v-1ef71b43"]]),De="",w={};function x(t,n){return e.openBlock(),e.createBlock(e.Transition,{name:"fade",mode:"out-in"},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default",{},void 0,!0)]),_:3})}const L=_(w,[["render",x],["__scopeId","data-v-51fc47aa"]]),C={INPUT_ELEMENT:"form-element",INPUT:"input",HEADING:"h"},p={BASE_HEADING:["app-heading"],BASE_TEXT:["app-text"],BASE_LINK:["app-link"],BASE_EXTERNAL_LINK:["app-link","app-external-link"],INPUT_ELEMENT:["form-element"],INPUT_INNER:["form-element-inner"],INPUT:["input"],INPUT_ERROR:["input-error"],SUBMIT_INPUT:["button"]},z=e.defineComponent({__name:"BaseHeading",props:{size:null,text:{default:void 0}},setup(t){const n=t,l=e.computed(()=>[...p.BASE_HEADING,o.value]),o=e.computed(()=>`${C.HEADING}${n.size}`);return(a,r)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(o)),{class:e.normalizeClass(e.unref(l))},{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])]),_:3},8,["class"]))}}),M=e.defineComponent({__name:"BaseText",props:{tag:{default:"p"},text:{default:void 0}},setup(t){const n=e.computed(()=>p.BASE_TEXT);return(l,o)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.tag),{class:e.normalizeClass(e.unref(n))},{default:e.withCtx(()=>[e.renderSlot(l.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])]),_:3},8,["class"]))}});function h(t){const n=e.computed(()=>t.name?`${C.INPUT_ELEMENT}-${t.name}`:""),l=e.computed(()=>t.id?t.id:t.name?`${C.INPUT}-${t.name}`:""),o=e.computed(()=>p.INPUT_ELEMENT.concat([`${p.INPUT_ELEMENT}-${t.type}`])),a=e.computed(()=>p.INPUT_INNER),r=e.computed(()=>[...p.INPUT,...t.type?[`${C.INPUT}-${t.type}`]:[],...(t.messages||[]).length>0?p.INPUT_ERROR:[]]),d=e.computed(()=>t.label!==!1?t.label?String(t.label):(t.name.charAt(0).toUpperCase()+t.name.slice(1)).replace("_"," "):t.label);return{elementId:n,inputId:l,elementClasses:o,innerClasses:a,inputClasses:r,labelText:d}}const D=["id"],F=["for"],O={class:"label-content"},U={key:0,class:"required"},A=["id","type","name","required","readonly","checked"],R=e.createElementVNode("span",{class:"switch"},null,-1),G=e.createElementVNode("div",{class:"cl"},null,-1),W=e.defineComponent({__name:"CheckboxInput",props:{type:{default:"checkbox"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{type:Boolean,default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const l=t,{elementId:o,inputId:a,elementClasses:r,innerClasses:d,inputClasses:s,labelText:m}=h(l),u=i=>n("update:modelValue",Boolean(i.target.checked));return(i,y)=>{const f=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(o),class:e.normalizeClass(e.unref(r))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(d))},[e.unref(m)?(e.openBlock(),e.createElementBlock("label",{key:0,for:e.unref(a)},[e.createElementVNode("span",O,e.toDisplayString(e.unref(m)),1),t.required?(e.openBlock(),e.createElementBlock("span",U," *")):e.createCommentVNode("",!0),e.createElementVNode("input",{id:e.unref(a),type:t.type,name:t.name,class:e.normalizeClass(e.unref(s)),required:t.required,readonly:t.readonly,checked:t.modelValue,onInput:u},null,42,A),R,G],8,F)):e.createCommentVNode("",!0),e.createVNode(f,{messages:t.messages},null,8,["messages"])],2)],10,D)}}}),X=["id"],Y=["id","type","name","placeholder","readonly","required","value"],H={key:0},K=e.defineComponent({__name:"EmailInput",props:{type:{default:"email"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const l=t,{elementId:o,inputId:a,elementClasses:r,innerClasses:d,inputClasses:s,labelText:m}=h(l),u=i=>n("update:modelValue",i.target.value);return(i,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(o),class:e.normalizeClass(e.unref(r))},[e.createVNode(f,{id:e.unref(a),label:e.unref(m),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(d))},[e.createElementVNode("input",{id:e.unref(a),type:t.type,name:t.name,class:e.normalizeClass(e.unref(s)),placeholder:t.placeholder,readonly:t.readonly,required:t.required,value:t.modelValue,onInput:u},null,42,Y),t.description?(e.openBlock(),e.createElementBlock("i",H,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,X)}}}),j=["id","name","action","method","novalidate"],J=e.defineComponent({__name:"FormBase",props:{id:{default:void 0},name:{default:void 0},action:{default:void 0},method:{default:"POST"},novalidate:{type:Boolean,default:!0},guard:{type:Boolean,default:!0},processing:{type:Boolean,default:!0},messages:{default:()=>[]}},emits:["submit"],setup(t,{emit:n}){const l=t,o=a=>{n("submit",a),l.guard&&a.preventDefault()};return(a,r)=>{const d=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("form",{id:t.id,name:t.name,action:t.action,method:t.method,class:"form",novalidate:t.novalidate,onSubmit:o},[e.createVNode(d,{messages:t.messages},null,8,["messages"]),e.renderSlot(a.$slots,"default")],40,j)}}}),Z={key:0,class:"form-messages input-error"},Q=e.defineComponent({__name:"FormMessages",props:{messages:{default:()=>[]}},setup(t){return(n,l)=>t.messages.length?(e.openBlock(),e.createElementBlock("div",Z,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.messages,(o,a)=>(e.openBlock(),e.createElementBlock("span",{key:a},e.toDisplayString(o),1))),128))])):e.createCommentVNode("",!0)}}),v=["for"],ee={class:"label-content"},te={key:0,class:"required"},ne=e.defineComponent({__name:"InputLabel",props:{label:{type:[String,Boolean]},id:null,required:{type:Boolean,default:!1}},setup(t){return(n,l)=>t.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:t.id},[e.createElementVNode("span",ee,e.toDisplayString(t.label),1),t.required?(e.openBlock(),e.createElementBlock("span",te," *")):e.createCommentVNode("",!0)],8,v)):e.createCommentVNode("",!0)}}),oe=["id"],ae=["id","type","name","placeholder","readonly","required","value"],le={key:0},se=e.defineComponent({__name:"PhoneNumberInput",props:{type:{default:"tel"},label:{type:[String,Boolean],default:!0},description:{default:void 0},id:{default:void 0},modelValue:{default:void 0},name:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const l=t,{elementId:o,inputId:a,elementClasses:r,innerClasses:d,inputClasses:s,labelText:m}=h(l),u=i=>n("update:modelValue",i.target.value);return(i,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(o),class:e.normalizeClass(e.unref(r))},[e.createVNode(f,{id:e.unref(a),label:e.unref(m),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(d))},[e.createElementVNode("input",{id:e.unref(a),type:t.type,name:t.name,class:e.normalizeClass(e.unref(s)),placeholder:t.placeholder,readonly:t.readonly,required:t.required,value:t.modelValue,onInput:u},null,42,ae),t.description?(e.openBlock(),e.createElementBlock("i",le,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,oe)}}}),re=["id"],ce=["id","value","name","required","readonly"],de={key:0,disabled:"",value:""},ie=["value"],me=e.defineComponent({__name:"SelectInput",props:{type:{default:"select"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{type:[String,Number,Boolean,Array],default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},messages:{default:()=>[]},options:{default:()=>[]},emptyOption:{default:"- select one -"}},emits:["update:modelValue"],setup(t,{emit:n}){const l=t,{elementId:o,inputId:a,elementClasses:r,innerClasses:d,inputClasses:s,labelText:m}=h(l),u=i=>n("update:modelValue",i.target.value);return(i,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(o),class:e.normalizeClass(e.unref(r))},[e.createVNode(f,{id:e.unref(a),label:e.unref(m),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(d))},[e.createElementVNode("select",{id:e.unref(a),value:t.modelValue,name:t.name,class:e.normalizeClass(e.unref(s)),required:t.required,readonly:t.readonly,onInput:u},[t.emptyOption?(e.openBlock(),e.createElementBlock("option",de,e.toDisplayString(t.emptyOption),1)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,(b,xe)=>(e.openBlock(),e.createElementBlock("option",{key:xe,value:b.value},e.toDisplayString(b.title),9,ie))),128))],42,ce),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,re)}}}),ue=["id","type","name","value","disabled"],fe=e.defineComponent({__name:"SubmitInput",props:{type:{default:"submit"},name:{default:void 0},id:{default:void 0},disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean,Array],default:"Submit"}},setup(t){const n=t,{inputId:l}=h(n),o=e.computed(()=>p.SUBMIT_INPUT);return(a,r)=>(e.openBlock(),e.createElementBlock("input",{id:e.unref(l),type:t.type,name:t.name,value:t.modelValue,class:e.normalizeClass(e.unref(o)),disabled:t.disabled},null,10,ue))}}),pe=["id"],ge=["id","name","rows","value","placeholder","required","readonly"],he={key:0},ye=e.defineComponent({__name:"TextareaInput",props:{type:{default:"textarea"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rows:{default:4},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const l=t,{elementId:o,inputId:a,elementClasses:r,innerClasses:d,inputClasses:s,labelText:m}=h(l),u=i=>n("update:modelValue",i.target.value);return(i,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(o),class:e.normalizeClass(e.unref(r))},[e.createVNode(f,{id:e.unref(a),label:e.unref(m),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(d))},[e.createElementVNode("textarea",{id:e.unref(a),name:t.name,rows:t.rows,class:e.normalizeClass(e.unref(s)),value:t.modelValue,placeholder:t.placeholder,required:t.required,readonly:t.readonly,onInput:u},null,42,ge),t.description?(e.openBlock(),e.createElementBlock("i",he,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,pe)}}}),_e=["id"],Ce=["id","type","name","placeholder","readonly","required","value"],ke={key:0},Be=e.defineComponent({__name:"TextInput",props:{type:{default:"text"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const l=t,{elementId:o,inputId:a,elementClasses:r,innerClasses:d,inputClasses:s,labelText:m}=h(l),u=i=>n("update:modelValue",i.target.value);return(i,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(o),class:e.normalizeClass(e.unref(r))},[e.createVNode(f,{id:e.unref(a),label:e.unref(m),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(d))},[e.createElementVNode("input",{id:e.unref(a),type:t.type,name:t.name,class:e.normalizeClass(e.unref(s)),placeholder:t.placeholder,readonly:t.readonly,required:t.required,value:t.modelValue,onInput:u},null,42,Ce),t.description?(e.openBlock(),e.createElementBlock("i",ke,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,_e)}}}),Ee=["src"],Ie=e.defineComponent({__name:"BaseImage",props:{src:null,size:null,height:null,width:null},setup(t){const n=t,l=e.computed(()=>({height:n.height||n.size,width:n.width||n.size}));return(o,a)=>(e.openBlock(),e.createElementBlock("img",e.mergeProps({class:"app-image block"},e.unref(l),{src:t.src}),null,16,Ee))}});function k(t){const n=e.ref(null),l=e.ref(!1),o=()=>{n.value=new IntersectionObserver(r=>{r[0].isIntersecting&&(l.value=!0,a())}),n.value.observe(t.value)},a=()=>{var r;return(r=n.value)==null?void 0:r.disconnect()};return{intersected:l,observe:o,unobserve:a}}const be=["src"],Ne=e.defineComponent({__name:"BaseIntersectionImage",props:{src:null,size:null,height:null,width:null},setup(t){const n=t,l=e.ref(null),{intersected:o,observe:a,unobserve:r}=k(l),d=e.computed(()=>o.value?n.src:""),s=e.computed(()=>({height:n.height||n.size,width:n.width||n.size}));return e.onMounted(()=>a()),e.onUnmounted(()=>r()),(m,u)=>(e.openBlock(),e.createElementBlock("img",e.mergeProps({ref_key:"image",ref:l,class:["app-image block",{intersected:e.unref(o)}]},e.unref(s),{src:e.unref(d)}),null,16,be))}}),Se=["href","target","rel"],Ve=e.defineComponent({__name:"BaseExternalLink",props:{href:null,target:{default:"_blank"},rel:{default:"noopener"},text:{default:void 0}},setup(t){return(n,l)=>(e.openBlock(),e.createElementBlock("a",{href:t.href,class:e.normalizeClass(e.unref(p).BASE_EXTERNAL_LINK),target:t.target,rel:t.rel},[e.renderSlot(n.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])],10,Se))}}),Te=e.defineComponent({__name:"BaseLink",props:{text:{default:void 0},to:null},setup(t){return(n,l)=>{const o=e.resolveComponent("RouterLink");return e.openBlock(),e.createBlock(o,{to:t.to,class:e.normalizeClass(e.unref(p).BASE_LINK)},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])]),_:3},8,["to","class"])}}});function B(){return{setCookie:(o,a,r=30)=>{let d="";if(r){const s=new Date;s.setTime(s.getTime()+r*24*60*60*1e3),d="; expires="+s.toUTCString()}document.cookie=o+"="+(a||"")+d+"; path=/"},getCookie:o=>{const a=`${o}=`,r=document.cookie.split(";");for(let d=0;d<r.length;d++){let s=r[d];for(;s.charAt(0)==" ";)s=s.substring(1,s.length);if(s.indexOf(a)==0)return s.substring(a.length,s.length)}return null},deleteCookie:o=>{document.cookie=o+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}}const E="phpfyi_settings";function $e(){const{getCookie:t,setCookie:n}=B(),l=e.ref(!0);let o=e.reactive({preferences:!1,marketing:!1,statistics:!1});const a=()=>{const s=r();s?o=e.reactive(s):l.value=!1},r=()=>{const s=String(t(E));return s?JSON.parse(s):null};return{consent:o,consentLogged:l,bootConsent:a,getConsentCookie:r,setConsentCookie:s=>{n(E,JSON.stringify(s)),l.value=!0}}}const I={DEVELOPMENT:"development",PRODUCTION:"production"};function qe(){const t=a=>process.env.NODE_ENV===a;return{isEnv:t,isDev:()=>t(I.DEVELOPMENT),isProd:()=>t(I.PRODUCTION),isSSR:()=>typeof window>"u"}}function Pe(){return{bootGoogleTagManager:()=>{window.dataLayer=window.dataLayer||[]},pushData:o=>{window.dataLayer.push(o)},trackPage:(o,a)=>{window.dataLayer.push({event:"PageView",page_path:o,page_title:a})}}}function we(){const t=e.ref(!1),n=()=>window.addEventListener("scroll",l),l=()=>{t.value=window.scrollY>100},o=(d=0)=>{window.scrollTo({top:d,left:0,behavior:"smooth"})};return{scrolled:t,bootScroll:n,scrollTo:o,scrollToElement:(d,s=0)=>{const m=document.querySelector(d);m&&e.nextTick(()=>{setTimeout(()=>{o(m.getBoundingClientRect().top+window.scrollY-s)},0)})},scrollIntoView:d=>{const s=document.querySelector(d);s&&e.nextTick(()=>{setTimeout(()=>{s.scrollIntoView({behavior:"smooth"})},0)})}}}c.BaseExternalLink=Ve,c.BaseHeading=z,c.BaseImage=Ie,c.BaseIntersectionImage=Ne,c.BaseLink=Te,c.BaseText=M,c.CheckboxInput=W,c.EmailInput=K,c.FormBase=J,c.FormMessages=Q,c.InputLabel=ne,c.PerspectivePlane=S,c.PerspectiveWrapper=$,c.PhoneNumberInput=se,c.SelectInput=me,c.SlantWrapper=P,c.SubmitInput=fe,c.TextInput=Be,c.TextareaInput=ye,c.TransitionFade=L,c.useConsent=$e,c.useCookie=B,c.useEnvironment=qe,c.useFormInput=h,c.useGoogleTagManager=Pe,c.useIntersectionObserver=k,c.useScroll=we,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});