(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r["Vue Page Components"]={},r.Vue))})(this,function(r,e){"use strict";const N=e.defineComponent({__name:"PerspectivePlane",props:{rotateX:{default:"0deg"},rotateY:{default:"0deg"},translateY:{default:"0px"},translateZ:{default:"0px"}},setup(t){const n=t,a=e.computed(()=>({transform:`
            rotateX(${n.rotateX}) 
            rotateY(${n.rotateY}) 
            translateY(${n.translateY}) 
            translateZ(${n.translateZ})`}));return(l,o)=>(e.openBlock(),e.createElementBlock("div",{class:"perspective-plane",style:e.normalizeStyle(e.unref(a))},[e.renderSlot(l.$slots,"default")],4))}}),I={class:"perspective"},b=e.defineComponent({__name:"PerspectiveWrapper",props:{size:{default:"0px"}},setup(t){const n=t,a=e.computed(()=>({height:n.size,width:n.size}));return(l,o)=>(e.openBlock(),e.createElementBlock("div",I,[e.createElementVNode("div",{class:"perspective__inner",style:e.normalizeStyle(e.unref(a))},[e.renderSlot(l.$slots,"default")],4)]))}}),T=e.defineComponent({__name:"SlantWrapper",props:{height:null,top:{default:"-5px"},reverse:{type:Boolean,default:!1}},setup(t){const n=t,a=e.computed(()=>({height:n.height,top:n.top})),l=e.computed(()=>({"slant-wrapper-reverse":n.reverse}));return(o,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["slant-wrapper",e.unref(l)]),style:e.normalizeStyle(e.unref(a))},null,6))}}),Pe="",V=(t,n)=>{const a=t.__vccOpts||t;for(const[l,o]of n)a[l]=o;return a},S={};function $(t,n){return e.openBlock(),e.createBlock(e.Transition,{name:"fade",mode:"out-in"},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default",{},void 0,!0)]),_:3})}const q=V(S,[["render",$],["__scopeId","data-v-51fc47aa"]]),C={INPUT_ELEMENT:"form-element",INPUT:"input",HEADING:"h"},p={BASE_HEADING:["app-heading"],BASE_TEXT:["app-text"],BASE_LINK:["app-link"],BASE_EXTERNAL_LINK:["app-link","app-external-link"],INPUT_ELEMENT:["form-element"],INPUT_INNER:["form-element-inner"],INPUT:["input"],INPUT_ERROR:["input-error"],SUBMIT_INPUT:["button"]},w=e.defineComponent({__name:"BaseHeading",props:{size:null,text:{default:void 0}},setup(t){const n=t,a=e.computed(()=>[...p.BASE_HEADING,l.value]),l=e.computed(()=>`${C.HEADING}${n.size}`);return(o,s)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(l)),{class:e.normalizeClass(e.unref(a))},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])]),_:3},8,["class"]))}}),P=e.defineComponent({__name:"BaseText",props:{tag:{default:"p"},text:{default:void 0}},setup(t){const n=e.computed(()=>p.BASE_TEXT);return(a,l)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.tag),{class:e.normalizeClass(e.unref(n))},{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])]),_:3},8,["class"]))}});function h(t){const n=e.computed(()=>t.name?`${C.INPUT_ELEMENT}-${t.name}`:""),a=e.computed(()=>t.id?t.id:t.name?`${C.INPUT}-${t.name}`:""),l=e.computed(()=>p.INPUT_ELEMENT.concat([`${p.INPUT_ELEMENT}-${t.type}`])),o=e.computed(()=>p.INPUT_INNER),s=e.computed(()=>[...p.INPUT,...t.type?[`${C.INPUT}-${t.type}`]:[],...(t.messages||[]).length>0?p.INPUT_ERROR:[]]),i=e.computed(()=>t.label!==!1?t.label?String(t.label):(t.name.charAt(0).toUpperCase()+t.name.slice(1)).replace("_"," "):t.label);return{elementId:n,inputId:a,elementClasses:l,innerClasses:o,inputClasses:s,labelText:i}}const L=["id"],z=["for"],M={class:"label-content"},x={key:0,class:"required"},D=["id","type","name","required","readonly","checked"],F=e.createElementVNode("span",{class:"switch"},null,-1),O=e.createElementVNode("div",{class:"cl"},null,-1),U=e.defineComponent({__name:"CheckboxInput",props:{type:{default:"checkbox"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{type:Boolean,default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,{elementId:l,inputId:o,elementClasses:s,innerClasses:i,inputClasses:c,labelText:d}=h(a),m=u=>n("update:modelValue",Boolean(u.target.checked));return(u,y)=>{const f=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(l),class:e.normalizeClass(e.unref(s))},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.unref(d)?(e.openBlock(),e.createElementBlock("label",{key:0,for:e.unref(o)},[e.createElementVNode("span",M,e.toDisplayString(e.unref(d)),1),t.required?(e.openBlock(),e.createElementBlock("span",x," *")):e.createCommentVNode("",!0),e.createElementVNode("input",{id:e.unref(o),type:t.type,name:t.name,class:e.normalizeClass(e.unref(c)),required:t.required,readonly:t.readonly,checked:t.modelValue,onInput:m},null,42,D),F,O],8,z)):e.createCommentVNode("",!0),e.createVNode(f,{messages:t.messages},null,8,["messages"])],2)],10,L)}}}),A=["id"],R=["id","type","name","placeholder","readonly","required","value"],Y={key:0},G=e.defineComponent({__name:"EmailInput",props:{type:{default:"email"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,{elementId:l,inputId:o,elementClasses:s,innerClasses:i,inputClasses:c,labelText:d}=h(a),m=u=>n("update:modelValue",u.target.value);return(u,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(l),class:e.normalizeClass(e.unref(s))},[e.createVNode(f,{id:e.unref(o),label:e.unref(d),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("input",{id:e.unref(o),type:t.type,name:t.name,class:e.normalizeClass(e.unref(c)),placeholder:t.placeholder,readonly:t.readonly,required:t.required,value:t.modelValue,onInput:m},null,42,R),t.description?(e.openBlock(),e.createElementBlock("i",Y,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,A)}}}),H=["id","name","action","method","novalidate"],X=e.defineComponent({__name:"FormBase",props:{id:{default:void 0},name:{default:void 0},action:{default:void 0},method:{default:"POST"},novalidate:{type:Boolean,default:!0},guard:{type:Boolean,default:!0},processing:{type:Boolean,default:!0},messages:{default:()=>[]}},emits:["submit"],setup(t,{emit:n}){const a=t,l=o=>{n("submit",o),a.guard&&o.preventDefault()};return(o,s)=>{const i=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("form",{id:t.id,name:t.name,action:t.action,method:t.method,class:"form",novalidate:t.novalidate,onSubmit:l},[e.createVNode(i,{messages:t.messages},null,8,["messages"]),e.renderSlot(o.$slots,"default")],40,H)}}}),K={key:0,class:"form-messages input-error"},W=e.defineComponent({__name:"FormMessages",props:{messages:{default:()=>[]}},setup(t){return(n,a)=>t.messages.length?(e.openBlock(),e.createElementBlock("div",K,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.messages,(l,o)=>(e.openBlock(),e.createElementBlock("span",{key:o},e.toDisplayString(l),1))),128))])):e.createCommentVNode("",!0)}}),j=["for"],J={class:"label-content"},Z={key:0,class:"required"},Q=e.defineComponent({__name:"InputLabel",props:{label:{type:[String,Boolean]},id:null,required:{type:Boolean,default:!1}},setup(t){return(n,a)=>t.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:t.id},[e.createElementVNode("span",J,e.toDisplayString(t.label),1),t.required?(e.openBlock(),e.createElementBlock("span",Z," *")):e.createCommentVNode("",!0)],8,j)):e.createCommentVNode("",!0)}}),v=["id"],ee=["id","type","name","placeholder","readonly","required","value"],te={key:0},ne=e.defineComponent({__name:"PhoneNumberInput",props:{type:{default:"tel"},label:{type:[String,Boolean],default:!0},description:{default:void 0},id:{default:void 0},modelValue:{default:void 0},name:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,{elementId:l,inputId:o,elementClasses:s,innerClasses:i,inputClasses:c,labelText:d}=h(a),m=u=>n("update:modelValue",u.target.value);return(u,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(l),class:e.normalizeClass(e.unref(s))},[e.createVNode(f,{id:e.unref(o),label:e.unref(d),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("input",{id:e.unref(o),type:t.type,name:t.name,class:e.normalizeClass(e.unref(c)),placeholder:t.placeholder,readonly:t.readonly,required:t.required,value:t.modelValue,onInput:m},null,42,ee),t.description?(e.openBlock(),e.createElementBlock("i",te,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,v)}}}),oe=["id"],ae=["id","value","name","required","readonly"],le={key:0,selected:"",value:""},se=["value"],re=e.defineComponent({__name:"SelectInput",props:{type:{default:"select"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{type:[String,Number,Boolean,Array],default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},messages:{default:()=>[]},options:{default:()=>[]},emptyOption:{default:"- select one -"}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,{elementId:l,inputId:o,elementClasses:s,innerClasses:i,inputClasses:c,labelText:d}=h(a),m=u=>n("update:modelValue",u.target.value);return(u,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(l),class:e.normalizeClass(e.unref(s))},[e.createVNode(f,{id:e.unref(o),label:e.unref(d),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("select",{id:e.unref(o),value:t.modelValue,name:t.name,class:e.normalizeClass(e.unref(c)),required:t.required,readonly:t.readonly,onInput:m},[t.emptyOption?(e.openBlock(),e.createElementBlock("option",le,e.toDisplayString(t.emptyOption),1)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,(_,we)=>(e.openBlock(),e.createElementBlock("option",{key:we,value:_.value},e.toDisplayString(_.title),9,se))),128))],42,ae),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,oe)}}}),ce=["id","type","name","value","disabled"],ie=e.defineComponent({__name:"SubmitInput",props:{type:{default:"submit"},name:{default:void 0},id:{default:void 0},disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean,Array],default:"Submit"}},setup(t){const n=t,{inputId:a}=h(n),l=e.computed(()=>p.SUBMIT_INPUT);return(o,s)=>(e.openBlock(),e.createElementBlock("input",{id:e.unref(a),type:t.type,name:t.name,value:t.modelValue,class:e.normalizeClass(e.unref(l)),disabled:t.disabled},null,10,ce))}}),de=["id"],me=["id","name","rows","value","placeholder","required","readonly"],ue={key:0},fe=e.defineComponent({__name:"TextareaInput",props:{type:{default:"textarea"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rows:{default:4},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,{elementId:l,inputId:o,elementClasses:s,innerClasses:i,inputClasses:c,labelText:d}=h(a),m=u=>n("update:modelValue",u.target.value);return(u,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(l),class:e.normalizeClass(e.unref(s))},[e.createVNode(f,{id:e.unref(o),label:e.unref(d),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("textarea",{id:e.unref(o),name:t.name,rows:t.rows,class:e.normalizeClass(e.unref(c)),value:t.modelValue,placeholder:t.placeholder,required:t.required,readonly:t.readonly,onInput:m},null,42,me),t.description?(e.openBlock(),e.createElementBlock("i",ue,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,de)}}}),pe=["id"],ge=["id","type","name","placeholder","readonly","required","value"],he={key:0},ye=e.defineComponent({__name:"TextInput",props:{type:{default:"text"},label:{type:[String,Boolean],default:!0},id:{default:void 0},name:{default:void 0},description:{default:void 0},modelValue:{default:void 0},placeholder:{default:void 0},readonly:{type:Boolean,default:void 0},required:{type:Boolean,default:void 0},messages:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,{elementId:l,inputId:o,elementClasses:s,innerClasses:i,inputClasses:c,labelText:d}=h(a),m=u=>n("update:modelValue",u.target.value);return(u,y)=>{const f=e.resolveComponent("InputLabel"),g=e.resolveComponent("FormMessages");return e.openBlock(),e.createElementBlock("div",{id:e.unref(l),class:e.normalizeClass(e.unref(s))},[e.createVNode(f,{id:e.unref(o),label:e.unref(d),required:t.required},null,8,["id","label","required"]),e.createElementVNode("div",{class:e.normalizeClass(e.unref(i))},[e.createElementVNode("input",{id:e.unref(o),type:t.type,name:t.name,class:e.normalizeClass(e.unref(c)),placeholder:t.placeholder,readonly:t.readonly,required:t.required,value:t.modelValue,onInput:m},null,42,ge),t.description?(e.openBlock(),e.createElementBlock("i",he,e.toDisplayString(t.description),1)):e.createCommentVNode("",!0),e.createVNode(g,{messages:t.messages},null,8,["messages"])],2)],10,pe)}}}),Ce=["src"],ke=e.defineComponent({__name:"BaseImage",props:{src:null,size:null,height:null,loading:null,width:null},setup(t){const n=t,a=e.computed(()=>({height:n.height||n.size,...n.loading?{loading:n.loading}:{},width:n.width||n.size}));return(l,o)=>(e.openBlock(),e.createElementBlock("img",e.mergeProps({class:"app-image block"},e.unref(a),{src:t.src}),null,16,Ce))}});function k(t){const n=e.ref(null),a=e.ref(!1),l=()=>{n.value=new IntersectionObserver(s=>{s[0].isIntersecting&&(a.value=!0,o())}),n.value.observe(t.value)},o=()=>{var s;return(s=n.value)==null?void 0:s.disconnect()};return{observer:n,intersected:a,observe:l,unobserve:o}}const Be=["src"],Ee=e.defineComponent({__name:"BaseIntersectionImage",props:{src:null,size:null,height:null,width:null},setup(t){const n=t,a=e.ref(null),{intersected:l,observe:o,unobserve:s}=k(a),i=e.computed(()=>l.value?n.src:""),c=e.computed(()=>({height:n.height||n.size,width:n.width||n.size}));return e.onMounted(()=>o()),e.onUnmounted(()=>s()),(d,m)=>(e.openBlock(),e.createElementBlock("img",e.mergeProps({ref_key:"image",ref:a,class:["app-image block",{intersected:e.unref(l)}]},e.unref(c),{src:e.unref(i)}),null,16,Be))}}),_e=["href","target","rel"],Ne=e.defineComponent({__name:"BaseExternalLink",props:{href:null,target:{default:"_blank"},rel:{default:"noopener"},text:{default:void 0}},setup(t){return(n,a)=>(e.openBlock(),e.createElementBlock("a",{href:t.href,class:e.normalizeClass(e.unref(p).BASE_EXTERNAL_LINK),target:t.target,rel:t.rel},[e.renderSlot(n.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])],10,_e))}}),Ie=e.defineComponent({__name:"BaseLink",props:{text:{default:void 0},to:null},setup(t){return(n,a)=>{const l=e.resolveComponent("RouterLink");return e.openBlock(),e.createBlock(l,{to:t.to,class:e.normalizeClass(e.unref(p).BASE_LINK)},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])]),_:3},8,["to","class"])}}});function B(){const t=o=>a(o,document.cookie),n=(o,s,i=30)=>{let c="";if(i){const d=new Date;d.setTime(d.getTime()+i*24*60*60*1e3),c="; expires="+d.toUTCString()}document.cookie=o+"="+(s||"")+c+"; path=/"},a=(o,s)=>{const i=`${o}=`,c=s.split(";");for(let d=0;d<c.length;d++){let m=c[d];for(;m.charAt(0)==" ";)m=m.substring(1,m.length);if(m.indexOf(i)==0)return m.substring(i.length,m.length)}return null};return{setCookie:n,getCookie:t,parseCookie:a,deleteCookie:o=>{document.cookie=o+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}}function be(t="app_settings"){const{getCookie:n,setCookie:a}=B(),l=e.ref(null);return{consentCookie:l,createConsent:()=>e.reactive({preferences:!1,marketing:!1,statistics:!1}),getConsentCookie:()=>{const c=String(n(t));return l.value=c?JSON.parse(c):null},setConsentCookie:c=>{a(t,JSON.stringify(c)),l.value=c}}}function Te(){const t=a=>Array.from(document.querySelectorAll(a)||[]);return{getNodes:t,removeNodes:a=>t(a).forEach(l=>l.remove())}}const E={DEVELOPMENT:"development",PRODUCTION:"production"};function Ve(){const t=o=>process.env.NODE_ENV===o;return{isEnv:t,isDev:()=>t(E.DEVELOPMENT),isProd:()=>t(E.PRODUCTION),isSSR:()=>typeof window>"u"}}function Se(){return{bootGoogleTagManager:()=>{window.dataLayer=window.dataLayer||[]},pushData:l=>{window.dataLayer.push(l)},trackPage:(l,o)=>{window.dataLayer.push({event:"PageView",page_path:l,page_title:o})}}}function $e(){const t=e.ref(!1),n=()=>window.addEventListener("scroll",a),a=()=>{t.value=window.scrollY>100},l=(i=0,c="auto")=>{window.scrollTo({top:i,left:0,behavior:c})};return{scrolled:t,bootScroll:n,scrollTo:l,scrollToElement:(i,c=0,d="auto")=>{const m=document.querySelector(i);m&&e.nextTick(()=>{setTimeout(()=>{l(m.getBoundingClientRect().top+window.scrollY-c,d)},0)})},scrollIntoView:i=>{const c=document.querySelector(i);c&&e.nextTick(()=>{setTimeout(()=>{c.scrollIntoView({behavior:"smooth"})},0)})}}}function qe(){const t=()=>new Date().getTime()/1e3,n=()=>new Date().getFullYear(),a=()=>new Date().getHours(),l=()=>{const s=new Date,i=s.getFullYear(),c=o(s.getMonth()+1),d=o(s.getDate()),m=o(s.getHours()),u=o(s.getMinutes()),y=o(s.getSeconds());return`${i}-${c}-${d} ${m}:${u}:${y}`},o=s=>s<10?`0${s}`:`${s}`;return{microtime:t,currentYear:n,currentHour:a,timestamp:l}}r.BaseExternalLink=Ne,r.BaseHeading=w,r.BaseImage=ke,r.BaseIntersectionImage=Ee,r.BaseLink=Ie,r.BaseText=P,r.CheckboxInput=U,r.EmailInput=G,r.FormBase=X,r.FormMessages=W,r.InputLabel=Q,r.PerspectivePlane=N,r.PerspectiveWrapper=b,r.PhoneNumberInput=ne,r.SelectInput=re,r.SlantWrapper=T,r.SubmitInput=ie,r.TextInput=ye,r.TextareaInput=fe,r.TransitionFade=q,r.useConsent=be,r.useCookie=B,r.useDOM=Te,r.useEnvironment=Ve,r.useFormInput=h,r.useGoogleTagManager=Se,r.useIntersectionObserver=k,r.useScroll=$e,r.useTime=qe,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
