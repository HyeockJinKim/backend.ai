"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[3209],{98401:(e,i,n)=>{n.d(i,{A:()=>u});var l=n(89130),o=n(15934),r=n(89608),s=n.n(r),a=n(43373),t=n(73689);const u=e=>{let i,{values:n=[]}=e;return 0===n.length?null:(i=n[0]&&("string"===typeof n[0]||a.isValidElement(n[0]))?n.map((e=>({label:e,color:"blue"}))):n,(0,t.jsx)(l.A,{direction:"row",children:s().map(i,((e,n)=>(0,t.jsx)(o.A,{style:s().last(i)===e?void 0:{margin:0,marginRight:-1},color:e.color,children:e.label},n)))}))}},40471:(e,i,n)=>{n.d(i,{A:()=>v});var l=n(58879),o=n(7194),r=n(27666),s=n(86917),a=n(69056),t=n(85690),u=n(89608),d=n.n(u),c=n(43373),m=n(73689);const v=e=>{let{dynamicSteps:i=[1,2,4,8,16,32,64,128,256,512],units:n=["m","g","t","p"],disableAutoUnit:u=!1,min:v="0m",max:g="300p",roundStep:p,...h}=e;const[y,x]=(0,o.A)(h,{defaultValue:"0g"}),[b,f]=null===y||void 0===y?[null,null]:(0,l.E8)(y),_=(0,r.A)(f),A=f||_||n[0],[k,j]=(0,l.E8)(v),[P,S]=(0,l.E8)(g),F=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(F.current){const e=e=>{var i;const n=null===e||void 0===e||null===(i=e.target)||void 0===i?void 0:i.value;/^\d+(g|m)$/.test(n)&&x(n)},i=F.current;return null===i||void 0===i||i.addEventListener("input",e),()=>{null===i||void 0===i||i.removeEventListener("input",e)}}}),[F,b,f,x]),(0,m.jsx)(s.A,{ref:F,...h,onBlur:()=>{if(d().isNumber(p)&&p>0){var e,i,n;const l=(null===(e=p.toString().split(".")[1])||void 0===e?void 0:e.length)||0;if(isNaN(Math.round(d().toNumber((null===(i=F.current)||void 0===i?void 0:i.value)||"0")/p)*p))return;x(`${(Math.round(d().toNumber((null===(n=F.current)||void 0===n?void 0:n.value)||"0")/p)*p).toFixed(l)}${A}`)}},value:b,onChange:e=>{x(null===e||void 0===e?e:`${e}${A}`)},max:S===A?P:(0,l.Js)(g,A).number,min:j===A?k:(0,l.Js)(v,A).number,addonAfter:(0,m.jsx)(a.A,{tabIndex:-1,value:A,onChange:e=>{x(`${b}${e}`)},onDropdownVisibleChange:e=>{(e&&null===y||void 0===y)&&x(`0${A}`)},options:d().map(n,(e=>({value:e,label:(0,m.jsx)(t.A.Text,{style:{fontFamily:"'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace"},children:e.toUpperCase()+"iB"})}))),suffixIcon:n.length>1?void 0:null,open:n.length>1&&void 0,style:{cursor:n.length>1?void 0:"default"}}),step:0,onStep:(e,l)=>{const o=d().isNull(b)||d().isUndefined(b)?0:b,r=d().sortedIndex(d().sortBy(i),o);let s;s="up"===l.type?o===i[r]?r+1:r:r-1;const a=n.indexOf(A);if(!u&&s<0)if(0===a)x(`0${A}`);else{const e=i[i.length-1],l=n[a-1];x(`${e}${l}`)}else if(!u&&s>i.length-1)if(a===n.length-1)x(`${o+("up"===l.type?1:-1)}${S}`);else{const e=i[0],l=n[a+1];x(`${e}${l}`)}else if(s>=0&&s<i.length){let e=i[s];j===A&&e<k?e=k:S===A&&e>P&&(e=P),x(`${e}${A}`)}}})}},16272:(e,i,n)=>{n.d(i,{A:()=>a});var l=n(51593),o=n(43373),r=n(73689);const s=function(e,i){let{image:n,style:o={}}=e,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const[,{getImageIcon:a}]=(0,l.Gj)();return(0,r.jsx)("img",{src:a(n),style:{width:"1em",height:"1em",...o},alt:s})},a=o.memo(s)},74019:(e,i,n)=>{n.d(i,{A:()=>m});var l=n(51593),o=n(7194),r=n(89130),s=n(86917),a=n(87298),t=n(89608),u=n.n(t),d=n(43373),c=n(73689);const m=e=>{let{min:i,max:n,step:t,disabled:m,inputNumberProps:v,sliderProps:g,...p}=e;const[h,y]=(0,o.A)(p),x=d.useRef(null);(0,d.useEffect)((()=>{1===t&&h%1!==0&&y(u().max([Math.round(h),i]))}),[t]);const[b,f]=(0,l.Tw)("first");return(0,d.useEffect)((()=>{setTimeout((()=>{f(h)}),0)}),[]),(0,c.jsxs)(r.A,{direction:"row",gap:"md",children:[(0,c.jsx)(r.A,{style:{flex:2,minWidth:190},align:"stretch",direction:"column",children:(0,c.jsx)(s.A,{ref:x,max:n,min:i,step:null!==t&&void 0!==t?t:void 0,disabled:m,value:h,onChange:y,onBlur:()=>{if(u().isNumber(t)&&t>0){var e,n;const l=(null===(e=t.toString().split(".")[1])||void 0===e?void 0:e.length)||0;y(u().max([u().toNumber((Math.round(u().toNumber((null===(n=x.current)||void 0===n?void 0:n.value)||"0")/t)*t).toFixed(l)),i]))}},...v},b)}),(0,c.jsx)(r.A,{direction:"column",align:"stretch",style:{flex:3},children:(0,c.jsx)(a.A,{max:n,min:0,step:t,disabled:m,value:h,onChange:e=>{void 0!==i&&e<i||y(e)},...g,marks:u().omitBy(null===g||void 0===g?void 0:g.marks,((e,i)=>!!u().isNumber(n)&&u().parseInt(i)>n))})})]})}},39428:(e,i,n)=>{n.d(i,{t2:()=>D,jh:()=>L,Ay:()=>z});var l=n(58879),o=n(51593),r=n(11899),s=n(68190),a=n(15634),t=n(60266),u=n(9194),d=n(7194),c=n(40471),m=n(89130),v=n(50868),g=n(87298),p=n(89608),h=n.n(p),y=n(43373),x=n(73689);const b=e=>{let{min:i="0m",max:n="32g",warn:r,units:s=["m","g"],extraMarks:a,hideSlider:t,step:u=.05,...p}=e;const[b,f]=(0,d.A)(p,{defaultValue:"0g"}),{token:_}=v.A.useToken(),A=(0,y.useMemo)((()=>(0,l.Js)(i,"g",2)),[i]),k=(0,y.useMemo)((()=>(0,l.Js)(n,"g",2)),[n]),j=(0,y.useMemo)((()=>(0,l.Js)(b||"0g","g",2)),[b]),[P,S]=(0,o.Tw)("first");return(0,y.useEffect)((()=>{setTimeout((()=>{S(b)}),0)}),[]),(0,x.jsxs)(m.A,{direction:"row",gap:"md",children:[(0,x.jsx)(m.A,{style:{flex:2,minWidth:190},direction:"column",align:"stretch",children:(0,y.createElement)(c.A,{...p,key:P,min:i,max:n,units:s,value:b,onChange:e=>{f(e)},style:{minWidth:130},roundStep:u})}),(0,x.jsx)(m.A,{direction:"column",align:"stretch",style:{flex:3,...t&&{visibility:"hidden",height:0}},children:(0,x.jsx)(m.A,{direction:"column",align:"stretch",children:(0,x.jsx)(g.A,{max:null===k||void 0===k?void 0:k.number,styles:{track:r&&{backgroundColor:(0,l.Mh)(r,b||"0b")<0?_.colorWarning:void 0}||void 0,rail:{}},step:u,value:null===j||void 0===j?void 0:j.number,tooltip:{formatter:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e<1?`${(1024*e).toFixed(2)} MiB`:`${e.toFixed(2)} GiB`}},onChange:e=>{null!==A&&void 0!==A&&A.number&&A.number>e?f(i):f(e<1?1024*e+"m":`${e}g`)},marks:{...A&&h().isNumber(null===A||void 0===A?void 0:A.number)&&{[A.number]:{style:{color:_.colorTextSecondary},label:0===A.number?A.number:A.number>=1?A.number+"g":1024*A.number+"m"}},...h().omitBy(a,((e,i)=>!!h().isNumber(null===k||void 0===k?void 0:k.number)&&h().parseInt(i)>(null===k||void 0===k?void 0:k.number))),...(null===k||void 0===k?void 0:k.number)&&{[k.number]:{style:{color:_.colorTextSecondary},label:0===k.number?k.number:k.number>=1?k.number+"g":1024*k.number+"m"}}}})})})]})};var f,_=n(74019),A=n(19675),k=n(76604),j=n(96301),P=n(74539),S=n(88319),F=n(69056),N=n(33789),C=n(56762),M=n(88522);const w=e=>{let{allocatablePresetNames:i,showCustom:s,showMinimumRequired:a,...t}=e;const[u,c]=(0,o.Tw)("first"),{run:g}=(0,S.A)(c,{wait:3e3,trailing:!1,leading:!0}),[p]=(0,r.bL)(),{t:b}=(0,C.Bd)(),{token:_}=v.A.useToken(),[A,w]=(0,y.useTransition)(),[T,I]=(0,d.A)(t),{resource_presets:V}=(0,M.useLazyLoadQuery)(void 0!==f?f:f=n(76409),{},{fetchKey:u,fetchPolicy:"first"===u?"store-and-network":"network-only"});return(0,x.jsx)(F.A,{loading:A,options:[...s?[{value:"custom",label:(0,x.jsxs)(m.A,{gap:"xs",style:{display:"inline-flex"},children:[(0,x.jsx)(j.A,{})," ",b("session.launcher.CustomAllocation")]}),selectedLabel:b("session.launcher.CustomAllocation")}]:[],...a?[{value:"minimum-required",label:(0,x.jsxs)(m.A,{gap:"xs",children:[b("session.launcher.MiniumAllocation"),(0,x.jsx)(N.A,{title:b("session.launcher.MiniumAllocationTooltip"),children:(0,x.jsx)(P.A,{style:{color:_.colorTextSecondary}})})]}),selectedLabel:b("session.launcher.MiniumAllocation")}]:[],{label:"Preset",options:h().map(V,((e,n)=>{const l=JSON.parse(null===e||void 0===e?void 0:e.resource_slots),o=i?!i.includes((null===e||void 0===e?void 0:e.name)||""):void 0;return{value:null===e||void 0===e?void 0:e.name,label:(0,x.jsxs)(m.A,{direction:"row",justify:"between",gap:"xs",children:[null===e||void 0===e?void 0:e.name,(0,x.jsx)(m.A,{direction:"row",gap:"xxs",style:{},children:h().map(h().omitBy(l,((e,i)=>h().isEmpty(p[i]))),((e,i)=>(0,x.jsx)(k.Ay,{type:i,value:e,hideTooltip:!0},i)))})]}),preset:e,disabled:o}})).sort(((e,i)=>e.disabled===i.disabled?0:e.disabled?1:-1)).sort(((e,i)=>(0,l._f)(e.value,i.value)))}],showSearch:!0,...t,value:T,onChange:I,optionLabelProp:h().includes(["custom","minimum-required"],T)?"selectedLabel":"label",onDropdownVisibleChange:e=>{t.onDropdownVisibleChange&&t.onDropdownVisibleChange(e),e&&w((()=>{g()}))}})};var T=n(31897),I=n(23702),V=n(55368),E=n(15480),R=n(96799),K=n(98038),U=n(52932),q=n(2293);const D="64m",L={resource:{cpu:0,mem:"0g",shmem:"0g",accelerator:0},num_of_sessions:1,cluster_mode:"single-node",cluster_size:1,enabledAutomaticShmem:!0},$=e=>{let{enableNumOfSessions:i,enableResourcePresets:n,forceImageMinValues:d=!1,showRemainingWarning:c=!1}=e;const g=I.A.useFormInstance(),{t:p}=(0,C.Bd)(),{token:f}=v.A.useToken(),j=(0,o.CX)(),[P]=(0,r.bL)(),[{keypairResourcePolicy:S,sessionLimitAndRemaining:N}]=(0,s.y)(),M=(0,a.hd)(),T=(0,a.Nw)(),L=I.A.useWatch(["environments","image"],{form:g,preserve:!0}),[{currentImageMinM:$,remaining:z,resourceLimits:G,checkPresetInfo:O}]=(0,u.y)({currentProjectName:M.name,currentResourceGroup:T||void 0,currentImage:L}),[Q]=(0,r.Hv)(T||void 0),W=h().omitBy(P,((e,i)=>{var n,l;return!!["cpu","mem","shmem"].includes(i)||(null===(n=G.accelerators[i])||void 0===n||!n.max||0===(null===(l=G.accelerators[i])||void 0===l?void 0:l.max))})),H=(0,y.useMemo)((()=>h().filter(null===L||void 0===L?void 0:L.resource_limits,(e=>!!e&&!h().includes(["cpu","mem","shmem"],e.key)))),[null===L||void 0===L?void 0:L.resource_limits]),X={min:1,max:N.max,remaining:N.remaining},Y=(0,y.useMemo)((()=>J(null===O||void 0===O?void 0:O.presets,G,L)),[null===O||void 0===O?void 0:O.presets,G,L]),Z=(0,t.E)((()=>{const e=g.getFieldValue(g.getFieldValue(["resource","acceleratorType"])),i=W[e]?e:h().keys(W)[0];g.setFieldsValue({resource:{acceleratorType:i||e}})})),ee=(0,t.E)((()=>{if(h().includes(["custom","minimum-required"],g.getFieldValue("allocationPreset")))Z();else if(Y.includes(g.getFieldValue("allocationPreset")));else if(n&&Y[0]){const e=h().sortBy(Y)[0];g.setFieldsValue({allocationPreset:e}),ne(e)}else Z(),g.setFieldsValue({allocationPreset:"custom"});g.validateFields(["resource"],{recursive:!0}).catch((()=>{}))}));(0,y.useEffect)((()=>{T&&ee()}),[T,ee,L]);const ie=e=>{var i,n,o,r,s,a;const t={cpu:null===(i=G.cpu)||void 0===i?void 0:i.min,mem:(null===(n=(0,l.Js)(((null===(o=(0,l.Js)(null===(r=G.shmem)||void 0===r?void 0:r.min,"m"))||void 0===o?void 0:o.number)||0)+((null===(s=(0,l.Js)(null===(a=G.mem)||void 0===a?void 0:a.min,"m"))||void 0===s?void 0:s.number)||0)+"m","g"))||void 0===n?void 0:n.number)+"g"};if(H.length>0)if(h().find(H,(e=>(null===e||void 0===e?void 0:e.key)===g.getFieldValue(["resource","acceleratorType"])))){var u;t.acceleratorType=g.getFieldValue(["resource","acceleratorType"]),t.accelerator=null===(u=G.accelerators[g.getFieldValue(["resource","acceleratorType"])])||void 0===u?void 0:u.min}else{var c;const e=null===(c=h().filter(H,(e=>h().keys(P).includes(null===e||void 0===e?void 0:e.key)))[0])||void 0===c?void 0:c.key;var m;if(e)t.accelerator=null===(m=G.accelerators[e])||void 0===m?void 0:m.min,t.acceleratorType=e}else t.accelerator=0;d||e||(["cpu","accelerator"].forEach((e=>{const i=t[e];h().isNumber(i)&&i<g.getFieldValue(["resource",e])&&delete t[e]})),["mem","shmem"].forEach((e=>{const i=t[e];h().isString(i)&&(0,l.Mh)(i,g.getFieldValue(["resource",e]))<0&&delete t[e]}))),g.setFieldsValue({resource:{...t}}),L&&0===H.length&&g.setFieldValue(["resource","accelerator"],0),g.getFieldValue("enabledAutomaticShmem")&&le(g.getFieldValue(["resource","mem"])||"0g"),g.validateFields(["resource"],{recursive:!0}).catch((()=>{}))};(0,y.useEffect)((()=>{ie()}),[L]);const ne=e=>{var i,n;const o=h().find(null===O||void 0===O?void 0:O.presets,(i=>i.name===e)),r=h().pick(null===o||void 0===o?void 0:o.resource_slots,h().keys(P)),s=null===(i=(0,l.Js)(((null===r||void 0===r?void 0:r.mem)||0)+"b","g",2))||void 0===i?void 0:i.numberUnit,a=h().omit(r,["cpu","mem","shmem"]),t=h().find(h().keys(W),(e=>void 0!==a[e]));let u={accelerator:0};t&&(u={acceleratorType:t,accelerator:Number(a[t]||0)}),g.setFieldsValue({resource:{...u,mem:s,shmem:null===(n=(0,l.Js)(((null===o||void 0===o?void 0:o.shared_memory)||0)+"b","g",2))||void 0===n?void 0:n.numberUnit,cpu:parseInt((null===r||void 0===r?void 0:r.cpu)||"0")||0}}),le(s||"0g"),g.validateFields(["resource"],{recursive:!0}).catch((()=>{}))},le=e=>{(0,l.Mh)(e,"4g")>=0&&(0,l.Mh)(e,(0,l.sL)($,"1g")||"0b")>=0&&(0,l.Mh)("1g",D)>0?g.setFieldValue(["resource","shmem"],"1g"):g.setFieldValue(["resource","shmem"],D)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(I.A.Item,{name:"resourceGroup",label:p("session.ResourceGroup"),rules:[{required:!0}],children:(0,x.jsx)(A.A,{showSearch:!0})}),n?(0,x.jsx)(I.A.Item,{label:p("resourcePreset.ResourcePresets"),name:"allocationPreset",required:!0,style:{marginBottom:f.marginXS},children:(0,x.jsx)(w,{showCustom:j._config.allowCustomResourceAllocation,showMinimumRequired:j._config.allowCustomResourceAllocation,onChange:(e,i)=>{switch(e){case"custom":break;case"minimum-required":g.setFieldValue("enabledAutomaticShmem",!0),ie(!0);break;default:g.setFieldValue("enabledAutomaticShmem",!0),ne(e)}},allocatablePresetNames:Y})}):null,(0,x.jsx)(V.A,{style:{marginBottom:f.margin,display:j._config.allowCustomResourceAllocation?"block":"none"},children:(0,x.jsx)(I.A.Item,{shouldUpdate:(e,i)=>e.allocationPreset!==i.allocationPreset,noStyle:!0,children:e=>{var i,n,o,r,s,a,t,u,d,v,y;let{getFieldValue:A}=e;return(0,x.jsxs)(x.Fragment,{children:[(null===P||void 0===P?void 0:P.cpu)&&(0,x.jsx)(I.A.Item,{name:["resource","cpu"],label:(null===Q||void 0===Q||null===(i=Q.cpu)||void 0===i?void 0:i.human_readable_name)||"CPU",tooltip:{placement:"right",title:(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescCPU"})},required:!0,rules:[{required:!0},{type:"number",min:null===(n=G.cpu)||void 0===n?void 0:n.min},{warningOnly:!0,validator:async(e,i)=>c&&h().isNumber(z.cpu)&&i>z.cpu?Promise.reject(p("session.launcher.EnqueueComputeSessionWarning")):Promise.resolve()}],children:(0,x.jsx)(_.A,{inputNumberProps:{addonAfter:(null===Q||void 0===Q||null===(o=Q.cpu)||void 0===o?void 0:o.display_unit)||p("session.launcher.Core")},sliderProps:{marks:{...z.cpu?{[z.cpu]:{label:(0,x.jsx)(B,{})}}:{},...null!==(r=G.cpu)&&void 0!==r&&r.min?{[null===(s=G.cpu)||void 0===s?void 0:s.min]:null===(a=G.cpu)||void 0===a?void 0:a.min}:{},...null!==(t=G.cpu)&&void 0!==t&&t.max?{[null===(u=G.cpu)||void 0===u?void 0:u.max]:{style:{color:f.colorTextSecondary},label:null===(d=G.cpu)||void 0===d?void 0:d.max}}:{}}},min:null===(v=G.cpu)||void 0===v?void 0:v.min,max:null===(y=G.cpu)||void 0===y?void 0:y.max,step:1,onChange:()=>{g.setFieldValue("allocationPreset","custom")}})}),(null===P||void 0===P?void 0:P.mem)&&(0,x.jsxs)(I.A.Item,{label:p("session.launcher.Memory"),tooltip:{placement:"right",props:{onClick:e=>e.preventDefault()},title:(0,x.jsx)(m.A,{direction:"column",onClick:e=>e.preventDefault(),children:(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescMemory"})})},required:!0,children:[(0,x.jsx)(I.A.Item,{noStyle:!0,shouldUpdate:(e,i)=>e.resource.shmem!==i.resource.shmem,children:()=>{var e,i,n;return(0,x.jsx)(I.A.Item,{name:["resource","mem"],noStyle:!0,rules:[{required:!0},{validator:async(e,i)=>{var n,o,r;return!h().isElement(i)&&null!==(n=G.mem)&&void 0!==n&&n.min&&(0,l.Mh)(i,(null===(o=G.mem)||void 0===o?void 0:o.min)||"0g")<0?Promise.reject(p("session.launcher.MinMemory",{size:h().toUpper((null===(r=G.mem)||void 0===r?void 0:r.min)||"0g")})):Promise.resolve()}},{warningOnly:!0,validator:async(e,i)=>c&&!h().isElement(i)&&G.mem&&(0,l.Mh)(i,z.mem+"b")>0?Promise.reject(p("session.launcher.EnqueueComputeSessionWarning")):Promise.resolve()}],children:(0,x.jsx)(b,{max:null===(e=G.mem)||void 0===e?void 0:e.max,min:null===(i=G.mem)||void 0===i?void 0:i.min,addonBefore:"MEM",extraMarks:{...z.mem?{[null===(n=(0,l.Js)(z.mem+"b","g",3))||void 0===n?void 0:n.numberFixed]:{label:(0,x.jsx)(B,{})}}:{}},onChange:e=>{e&&g.getFieldValue("enabledAutomaticShmem")&&(le(e),g.setFieldValue("allocationPreset","custom"))}})})}}),(0,x.jsxs)(m.A,{direction:"column",gap:"xxs",align:"start",children:[(0,x.jsxs)(m.A,{direction:"row",gap:"xs",children:[p("session.launcher.EnableAutomaticMiniumShmem")," ",(0,x.jsx)(I.A.Item,{noStyle:!0,name:"enabledAutomaticShmem",valuePropName:"checked",children:(0,x.jsx)(E.A,{size:"small",onChange:e=>{e&&le(g.getFieldValue(["resource","mem"])||"0g"),g.setFieldValue("allocationPreset","custom")}})})]}),(0,x.jsx)(I.A.Item,{noStyle:!0,shouldUpdate:(e,i)=>e.resource.mem!==i.resource.mem||e.enabledAutomaticShmem!==i.enabledAutomaticShmem,children:()=>{var e;return(0,x.jsx)(I.A.Item,{noStyle:!0,name:["resource","shmem"],hidden:g.getFieldValue("enabledAutomaticShmem"),tooltip:(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescSharedMemory"}),dependencies:[["resource","mem"]],rules:[{required:!0},{},{validator:async(e,i)=>{var n,o;if(h().isEmpty(null===(n=A("resource"))||void 0===n?void 0:n.mem)||h().isEmpty(i)||(0,l.Mh)(null===(o=A("resource"))||void 0===o?void 0:o.mem,i)>=0)return Promise.resolve();throw p("resourcePreset.SHMEMShouldBeSmallerThanMemory")}}],children:(0,x.jsx)(b,{min:null===(e=G.shmem)||void 0===e?void 0:e.min,addonBefore:"SHM",max:g.getFieldValue(["resource","mem"])||"0g",hideSlider:!0,onChange:()=>{g.setFieldValue("allocationPreset","custom")}})})}})]})]}),(0,x.jsx)(I.A.Item,{noStyle:!0,shouldUpdate:(e,i)=>{var n,l;return(null===(n=e.resource)||void 0===n?void 0:n.acceleratorType)!==(null===(l=i.resource)||void 0===l?void 0:l.acceleratorType)||e.cluster_size!==i.cluster_size},children:e=>{var i,n,l,o,r,s;let{getFieldValue:a}=e;const t=a(["resource","acceleratorType"]);return(0,x.jsx)(I.A.Item,{name:["resource","accelerator"],label:p("session.launcher.AIAccelerator"),tooltip:{placement:"right",title:(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescAIAccelerator"})},rules:[{required:H.length>0},{type:"number",min:(null===(i=G.accelerators[t])||void 0===i?void 0:i.min)||0,max:null===(n=G.accelerators[t])||void 0===n?void 0:n.max},{validator:async(e,i)=>h().endsWith(t,"shares")&&g.getFieldValue("cluster_size")>=2&&i%1!==0?Promise.reject(p("session.launcher.OnlyAllowsDiscreteNumberByClusterSize")):Promise.resolve()},{warningOnly:!0,validator:async(e,i)=>c&&h().isNumber(z.accelerators[t])&&i>z.accelerators[t]?Promise.reject(p("session.launcher.EnqueueComputeSessionWarning")):Promise.resolve()}],children:(0,x.jsx)(_.A,{sliderProps:{marks:{0:0,...z.accelerators[t]?{[z.accelerators[t]]:{label:(0,x.jsx)(B,{})}}:{},...h().isNumber(null===(l=G.accelerators[t])||void 0===l?void 0:l.max)?{[null===(o=G.accelerators[t])||void 0===o?void 0:o.max]:null===(r=G.accelerators[t])||void 0===r?void 0:r.max}:{}},tooltip:{formatter:function(){return`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:0} ${k.uJ[t]}`},open:!(H.length<=0)&&void 0}},disabled:0===H.length&&h().isEmpty(g.getFieldValue(["environments","manual"])),min:0,max:null===(s=G.accelerators[t])||void 0===s?void 0:s.max,step:h().endsWith(t,"shares")&&g.getFieldValue("cluster_size")<2?.1:1,onChange:()=>{g.setFieldValue("allocationPreset","custom")},inputNumberProps:{addonAfter:(0,x.jsx)(I.A.Item,{noStyle:!0,name:["resource","acceleratorType"],initialValue:h().keys(W)[0],children:(0,x.jsx)(F.A,{tabIndex:-1,disabled:0===H.length&&h().isEmpty(g.getFieldValue(["environments","manual"])),suffixIcon:h().size(W)>1?void 0:null,popupMatchSelectWidth:!1,options:h().map(W,((e,i)=>({value:i,label:k.uJ[i]||"UNIT",disabled:H.length>0&&!h().find(H,(e=>(null===e||void 0===e?void 0:e.key)===i))})))})})}})})}})]})}})}),i?(0,x.jsx)(V.A,{style:{marginBottom:f.margin},children:(0,x.jsx)(I.A.Item,{noStyle:!0,shouldUpdate:(e,i)=>e.cluster_size!==i.cluster_size,children:()=>(0,x.jsx)(I.A.Item,{name:["num_of_sessions"],label:p("webui.menu.Sessions"),tooltip:(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescSession"}),required:!0,rules:[{required:!0},{warningOnly:!0,validator:async(e,i)=>c&&X&&i>X.remaining?Promise.reject(p("session.launcher.EnqueueComputeSessionWarning")):Promise.resolve()}],children:(0,x.jsx)(_.A,{inputNumberProps:{addonAfter:"#"},disabled:g.getFieldValue("cluster_size")>1,sliderProps:{marks:{[null===X||void 0===X?void 0:X.min]:null===X||void 0===X?void 0:X.min,...null!==X&&void 0!==X&&X.remaining?{[null===X||void 0===X?void 0:X.remaining]:{label:(0,x.jsx)(B,{})}}:{},[null===X||void 0===X?void 0:X.max]:null===X||void 0===X?void 0:X.max}},min:null===X||void 0===X?void 0:X.min,max:null===X||void 0===X?void 0:X.max})})})}):null,j.supports("multi-container")&&(0,x.jsx)(I.A.Item,{label:p("session.launcher.ClusterMode"),tooltip:(0,x.jsxs)(m.A,{direction:"column",align:"start",children:[p("session.launcher.SingleNode"),(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescSingleNode"}),(0,x.jsx)(R.A,{style:{backgroundColor:f.colorBorder}}),p("session.launcher.MultiNode"),(0,x.jsx)(C.x6,{i18nKey:"session.launcher.DescMultiNode"})]}),required:!0,children:(0,x.jsx)(V.A,{style:{marginBottom:f.margin},children:(0,x.jsxs)(K.A,{gutter:f.marginMD,children:[(0,x.jsx)(U.A,{xs:24,children:(0,x.jsx)(I.A.Item,{name:"cluster_mode",required:!0,children:(0,x.jsxs)(q.Ay.Group,{onChange:e=>{g.validateFields().catch((()=>{}))},children:[(0,x.jsx)(q.Ay.Button,{value:"single-node",children:p("session.launcher.SingleNode")}),(0,x.jsx)(q.Ay.Button,{value:"multi-node",children:p("session.launcher.MultiNode")})]})})}),(0,x.jsx)(U.A,{xs:24,children:(0,x.jsx)(I.A.Item,{noStyle:!0,shouldUpdate:(e,i)=>e.cluster_mode!==i.cluster_mode,children:()=>{var e;const i=h().min([null===(e=G.cpu)||void 0===e?void 0:e.max,S.max_containers_per_session]),n="single-node"===g.getFieldValue("cluster_mode")?p("session.launcher.Container"):p("session.launcher.Node");return(0,x.jsx)(I.A.Item,{name:"cluster_size",label:p("session.launcher.ClusterSize"),required:!0,rules:[{warningOnly:!0,validator:async(e,i)=>{if(c){const e=h().min([z.cpu,S.max_containers_per_session]);if(h().isNumber(e)&&i>e)return Promise.reject(p("session.launcher.EnqueueComputeSessionWarning"))}return Promise.resolve()}}],children:(0,x.jsx)(_.A,{min:1,step:1,max:h().isNumber(i)?i:void 0,disabled:1===i,sliderProps:{marks:{1:"1",...z.cpu?{[z.cpu]:{label:(0,x.jsx)(B,{})}}:{},...h().isNumber(i)?{[i]:i}:{}},tooltip:{formatter:function(){return`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:0} ${n}`}}},inputNumberProps:{addonAfter:n},onChange:e=>{e>1&&g.setFieldValue("num_of_sessions",1)}})})}})})]})})})]})},B=()=>{const{token:e}=v.A.useToken();return(0,x.jsx)(m.A,{style:{position:"absolute",top:-24,transform:"translateX(-50%)",color:e.colorSuccess,opacity:.5},children:(0,x.jsx)(T.A,{})})},z=y.memo($),J=(e,i,n)=>{const o=h().filter(null===n||void 0===n?void 0:n.resource_limits,(e=>!!e&&!h().includes(["cpu","mem","shmem"],e.key))),r=h().filter(e,(e=>h().every(e.resource_slots,((n,o)=>{if("mem"===o){var r,s,a;return!!("string"!==typeof(null===(r=i[o])||void 0===r?void 0:r.max))||"string"===typeof e.resource_slots[o]&&"string"===typeof(null===(s=i[o])||void 0===s?void 0:s.max)&&(0,l.Mh)(e.resource_slots[o],null===(a=i[o])||void 0===a?void 0:a.max)<=0}if("shmem"===o)return!0;if("cpu"===o){var t,u;return!!h().isNaN(h().toNumber(null===(t=i[o])||void 0===t?void 0:t.max))||(h().toNumber(e.resource_slots[o])||0)<=h().toNumber(null===(u=i[o])||void 0===u?void 0:u.max)}var d,c;return!!h().isNaN(h().toNumber(null===(d=i.accelerators[o])||void 0===d?void 0:d.max))||(h().toNumber(e.resource_slots[o])||0)<=h().toNumber(null===(c=i.accelerators[o])||void 0===c?void 0:c.max)})))).map((e=>e.name)),s=h().filter(e,(e=>{const i=h().omitBy(e.resource_slots,((e,i)=>{if(["mem","cpu","shmem"].includes(i))return!0}));return 0===o.length?!!h().isEmpty(i):h().some(o,(e=>(null===e||void 0===e?void 0:e.key)&&i[null===e||void 0===e?void 0:e.key]&&h().toNumber(i[null===e||void 0===e?void 0:e.key])>=h().toNumber(null===e||void 0===e?void 0:e.min)))})).map((e=>e.name));return 0===o.length?r:h().intersection(r,s)}},76604:(e,i,n)=>{n.d(i,{Ay:()=>b,s5:()=>x,uJ:()=>p});var l=n(58879),o=n(11899),r=n(15634),s=n(89130),a=n(50868),t=n(85690),u=n(33789),d=n(89608),c=n.n(d),m=n(43373),v=n(56762),g=n(73689);const p={"cuda.device":"GPU","cuda.shares":"FGPU","rocm.device":"GPU","tpu.device":"TPU","ipu.device":"IPU","atom.device":"ATOM","atom-plus.device":"ATOM+","gaudi2.device":"Gaudi 2","warboy.device":"Warboy","hyperaccel-lpu.device":"Hyperaccel LPU"},h=e=>{var i,n;let{type:u,value:d,extra:m,opts:v,hideTooltip:p=!1,max:h}=e;const{token:y}=a.A.useToken(),b=(0,r.Nw)(),[f]=(0,o.Hv)(b||void 0),_=e=>{var i,n,o;return null!==f&&void 0!==f&&null!==(i=f[u])&&void 0!==i&&i.number_format.binary?Number(null===(n=(0,l.Js)(e,"g",3,!0))||void 0===n?void 0:n.numberFixed).toString():((null===f||void 0===f||null===(o=f[u])||void 0===o?void 0:o.number_format.round_length)||0)>0?parseFloat(e).toFixed(2):e};return(0,g.jsxs)(s.A,{direction:"row",gap:"xxs",children:[null!==f&&void 0!==f&&f[u]?(0,g.jsx)(x,{type:u,showTooltip:!p}):u,(0,g.jsxs)(t.A.Text,{children:[_(d),c().isUndefined(h)?null:"Infinity"===h?"~\u221e":`~${_(h)}`]}),(0,g.jsx)(t.A.Text,{type:"secondary",children:(null===f||void 0===f||null===(i=f[u])||void 0===i?void 0:i.display_unit)||""}),"mem"===u&&null!==v&&void 0!==v&&v.shmem&&(null===v||void 0===v?void 0:v.shmem)>0?(0,g.jsxs)(t.A.Text,{type:"secondary",style:{fontSize:y.fontSizeSM},children:["(SHM: ",null===(n=(0,l.Js)(v.shmem+"b","g",2,!0))||void 0===n?void 0:n.numberFixed,"GiB)"]}):null,m]})},y=e=>{let{size:i=16,children:n}=e;return(0,g.jsx)("mwc-icon",{style:{"--mdc-icon-size":`${i+2}px`,width:i,height:i},children:n})},x=e=>{var i,n,l;let{type:o,size:r=16,showIcon:a=!0,showUnit:t=!0,showTooltip:d=!0,...c}=e;const{t:m}=(0,v.Bd)(),p={cpu:[(0,g.jsx)(y,{size:r,children:"developer_board"}),m("session.core")],mem:[(0,g.jsx)(y,{size:r,children:"memory"}),"GiB"],"cuda.device":["/resources/icons/file_type_cuda.svg","GPU"],"cuda.shares":["/resources/icons/file_type_cuda.svg","FGPU"],"rocm.device":["/resources/icons/rocm.svg","GPU"],"tpu.device":[(0,g.jsx)(y,{size:r,children:"view_module"}),"TPU"],"ipu.device":[(0,g.jsx)(y,{size:r,children:"view_module"}),"IPU"],"atom.device":["/resources/icons/rebel.svg","ATOM"],"atom-plus.device":["/resources/icons/rebel.svg","ATOM+"],"gaudi2.device":["/resources/icons/gaudi.svg","Gaudi 2"],"warboy.device":["/resources/icons/furiosa.svg","Warboy"],"hyperaccel-lpu.device":["/resources/icons/npu_generic.svg","Hyperaccel LPU"]},h="string"===typeof(null===(i=p[o])||void 0===i?void 0:i[0])?(0,g.jsx)("img",{...c,style:{height:r,alignSelf:"center",...c.style||{}},src:(null===(n=p[o])||void 0===n?void 0:n[0])||"",alt:o}):(0,g.jsx)(s.A,{style:{width:16,height:16},children:(null===(l=p[o])||void 0===l?void 0:l[0])||o});return d?(0,g.jsx)(u.A,{title:o,children:h}):(0,g.jsx)(s.A,{style:{pointerEvents:"none"},children:h})},b=m.memo(h)},76409:(e,i,n)=>{n.r(i),n.d(i,{default:()=>o});const l=function(){var e=[{alias:null,args:null,concreteType:"ResourcePreset",kind:"LinkedField",name:"resource_presets",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_slots",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shared_memory",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ResourcePresetSelectQuery",selections:e,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"ResourcePresetSelectQuery",selections:e},params:{cacheID:"bd89430b9924d926a1b8e91191746b4f",id:null,metadata:{},name:"ResourcePresetSelectQuery",operationKind:"query",text:"query ResourcePresetSelectQuery {\n  resource_presets {\n    name\n    resource_slots\n    shared_memory\n  }\n}\n"}}}();l.hash="9841642e96d89476c2848bfb093ed9c5";const o=l},8157:(e,i,n)=>{n.r(i),n.d(i,{default:()=>o});const l=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"accessKey"}],i=[{alias:null,args:[{kind:"Variable",name:"access_key",variableName:"accessKey"}],concreteType:"KeyPair",kind:"LinkedField",name:"keypair",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"concurrency_used",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"hooksUsingRelay_KeyPairQuery",selections:i,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"hooksUsingRelay_KeyPairQuery",selections:i},params:{cacheID:"1f8fc324e9907111de581f5cd2dc3640",id:null,metadata:{},name:"hooksUsingRelay_KeyPairQuery",operationKind:"query",text:"query hooksUsingRelay_KeyPairQuery(\n  $accessKey: String!\n) {\n  keypair(access_key: $accessKey) {\n    id\n    resource_policy\n    concurrency_used\n  }\n}\n"}}}();l.hash="d8f5c91f0fc46a3366f57566ab688d81";const o=l},48387:(e,i,n)=>{n.r(i),n.d(i,{default:()=>o});const l=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"name"}],i=[{alias:null,args:[{kind:"Variable",name:"name",variableName:"name"}],concreteType:"KeyPairResourcePolicy",kind:"LinkedField",name:"keypair_resource_policy",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"max_containers_per_session",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max_concurrent_sessions",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"hooksUsingRelay_KeyPairResourcePolicyQuery",selections:i,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"hooksUsingRelay_KeyPairResourcePolicyQuery",selections:i},params:{cacheID:"ad7039c1935637fe3f3841f0ea8bf347",id:null,metadata:{},name:"hooksUsingRelay_KeyPairResourcePolicyQuery",operationKind:"query",text:"query hooksUsingRelay_KeyPairResourcePolicyQuery(\n  $name: String!\n) {\n  keypair_resource_policy(name: $name) {\n    max_containers_per_session\n    max_concurrent_sessions\n  }\n}\n"}}}();l.hash="f3f7364c63aefe9b03111b584c48c103";const o=l},68190:(e,i,n)=>{n.d(i,{x:()=>d,y:()=>c});var l,o,r=n(51593),s=n(89608),a=n.n(s),t=n(43373),u=n(88522);const d=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fetchPolicy:"store-and-network"};const[o,s]=(0,r.Tw)("first"),{keypair:a}=(0,u.useLazyLoadQuery)(void 0!==l?l:l=n(8157),{accessKey:e},{...i,fetchKey:o+i.fetchKey});return[a,{refresh:(0,t.useCallback)((()=>{s()}),[s])}]},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchPolicy:"store-and-network"};const[i,l]=(0,r.Tw)("first"),s=(0,r.CX)(),[c]=d(null===s||void 0===s?void 0:s._config.accessKey),{keypair_resource_policy:m}=(0,u.useLazyLoadQuery)(void 0!==o?o:o=n(48387),{name:(null===c||void 0===c?void 0:c.resource_policy)||""},{...e,fetchKey:i+e.fetchKey}),v=(0,t.useCallback)((()=>{l()}),[l]);return[{keypairResourcePolicy:m||{},keypair:c||{},sessionLimitAndRemaining:{max:a().min([(m||{}).max_concurrent_sessions,3]),remaining:((m||{}).max_concurrent_sessions||3)-((c||{}).concurrency_used||0)}},{refresh:v}]}},9194:(e,i,n)=>{n.d(i,{y:()=>d});var l=n(51593),o=n(39428),r=n(58879),s=n(11899),a=n(60881),t=n(89608),u=n.n(t);const d=e=>{var i,n,t,d,m,v,g,p,h,y,x,b,f,_,A,k,j,P,S,F,N,C;let{currentImage:M,currentResourceGroup:w="",currentProjectName:T,ignorePerContainerConfig:I=!1}=e;const V=(0,l.CX)(),[E]=(0,s.bL)(),R=u().omit(E,["cpu","mem","shmem"]),{data:K,refetch:U,isRefetching:q}=(0,a.nj)({queryKey:["check-presets",T,w],queryFn:()=>w?V.resourcePreset.check({group:T,scaling_group:w}).catch((()=>{})):void 0,staleTime:1e3}),D=(null===(i=u().find(null===M||void 0===M?void 0:M.resource_limits,(e=>"mem"===(null===e||void 0===e?void 0:e.key))))||void 0===i?void 0:i.min)||"0g",L={cpu:u().isEmpty(null===K||void 0===K||null===(n=K.scaling_groups[w])||void 0===n||null===(t=n.using)||void 0===t?void 0:t.cpu)||u().isEmpty(null===K||void 0===K||null===(d=K.scaling_groups[w])||void 0===d||null===(m=d.remaining)||void 0===m?void 0:m.cpu)?void 0:u().toNumber(null===K||void 0===K||null===(v=K.scaling_groups[w])||void 0===v?void 0:v.using.cpu)+u().toNumber(null===K||void 0===K||null===(g=K.scaling_groups[w])||void 0===g?void 0:g.remaining.cpu),mem:u().isEmpty(null===K||void 0===K||null===(p=K.scaling_groups[w])||void 0===p||null===(h=p.using)||void 0===h?void 0:h.mem)||u().isEmpty(null===K||void 0===K||null===(y=K.scaling_groups[w])||void 0===y||null===(x=y.remaining)||void 0===x?void 0:x.mem)?void 0:(null===(b=(0,r.Js)(u().toNumber(null===K||void 0===K||null===(f=K.scaling_groups[w])||void 0===f?void 0:f.using.mem)+u().toNumber(null===K||void 0===K||null===(_=K.scaling_groups[w])||void 0===_?void 0:_.remaining.mem)+"b","g",2))||void 0===b?void 0:b.numberFixed)+"g",accelerators:u().reduce(R,((e,i,n)=>{var l,o,r,s,a,t;return e[n]=u().isEmpty(null===K||void 0===K||null===(l=K.scaling_groups[w])||void 0===l||null===(o=l.using)||void 0===o?void 0:o[n])||u().isEmpty(null===K||void 0===K||null===(r=K.scaling_groups[w])||void 0===r||null===(s=r.remaining)||void 0===s?void 0:s[n])?void 0:u().toNumber(null===K||void 0===K||null===(a=K.scaling_groups[w])||void 0===a?void 0:a.using[n])+u().toNumber(null===K||void 0===K||null===(t=K.scaling_groups[w])||void 0===t?void 0:t.remaining[n]),e}),{})},$={cpu:void 0===(null===E||void 0===E?void 0:E.cpu)?void 0:{min:u().max([u().toNumber((null===(A=u().find(null===M||void 0===M?void 0:M.resource_limits,(e=>"cpu"===(null===e||void 0===e?void 0:e.key))))||void 0===A?void 0:A.min)||"0")]),max:u().min([I?void 0:V._config.maxCPUCoresPerContainer,c(null===K||void 0===K?void 0:K.keypair_limits.cpu),c(null===K||void 0===K?void 0:K.group_limits.cpu),null===L||void 0===L?void 0:L.cpu])},mem:void 0===(null===E||void 0===E?void 0:E.mem)?void 0:{min:(0,r.sL)(u().max([null===(k=(0,r.Js)(D,"b"))||void 0===k?void 0:k.number,null===(j=(0,r.Js)(o.t2,"b"))||void 0===j?void 0:j.number,0])+"b",o.t2),max:u().min([I?void 0:V._config.maxMemoryPerContainer,c(null===K||void 0===K?void 0:K.keypair_limits.mem)&&(null===(P=(0,r.Js)(c(null===K||void 0===K?void 0:K.keypair_limits.mem)+"","g"))||void 0===P?void 0:P.number),c(null===K||void 0===K?void 0:K.group_limits.mem)&&(null===(S=(0,r.Js)(c(null===K||void 0===K?void 0:K.group_limits.mem)+"","g"))||void 0===S?void 0:S.number),(null===L||void 0===L?void 0:L.mem)&&(null===(F=(0,r.Js)((null===L||void 0===L?void 0:L.mem)+"","g"))||void 0===F?void 0:F.number)])+"g"},accelerators:u().reduce(R,((e,i,n)=>{var l,o;const r={"cuda.device":"maxCUDADevicesPerContainer","cuda.shares":"maxCUDASharesPerContainer","rocm.device":"maxROCMDevicesPerContainer","tpu.device":"maxTPUDevicesPerContainer","ipu.device":"maxIPUDevicesPerContainer","atom.device":"maxATOMDevicesPerContainer","atom-plus.device":"maxATOMPlusDevicesPerContainer","gaudi2.device":"maxGaudi2DevicesPerContainer","warboy.device":"maxWarboyDevicesPerContainer","hyperaccel-lpu.device":"maxHyperaccelLPUDevicesPerContainer"}[n]||"cuda.device";return e[n]={min:parseInt((null===(l=u().filter(null===M||void 0===M?void 0:M.resource_limits,(e=>(null===e||void 0===e?void 0:e.key)===n)))||void 0===l||null===(o=l[0])||void 0===o?void 0:o.min)||"0"),max:u().min([V._config[r]||8,L.accelerators[n]])},e}),{})},B={accelerators:u().reduce(R,((e,i,n)=>{var l;return e[n]=null!==(l=u().min([u().toNumber(null===K||void 0===K?void 0:K.keypair_remaining[n]),u().toNumber(null===K||void 0===K?void 0:K.group_remaining[n]),u().toNumber(null===K||void 0===K?void 0:K.scaling_group_remaining[n])]))&&void 0!==l?l:Number.MAX_SAFE_INTEGER,e}),{}),cpu:null!==(N=u().min([c(null===K||void 0===K?void 0:K.keypair_remaining.cpu),c(null===K||void 0===K?void 0:K.group_remaining.cpu),c(null===K||void 0===K?void 0:K.scaling_group_remaining.cpu)]))&&void 0!==N?N:Number.MAX_SAFE_INTEGER,mem:null!==(C=u().min([c(null===K||void 0===K?void 0:K.keypair_remaining.mem),c(null===K||void 0===K?void 0:K.group_remaining.mem),c(null===K||void 0===K?void 0:K.scaling_group_remaining.mem)]))&&void 0!==C?C:Number.MAX_SAFE_INTEGER};return[{resourceGroupResourceSize:L,resourceLimits:$,remaining:B,currentImageMinM:D,isRefetching:q,checkPresetInfo:K},{refetch:U}]},c=e=>void 0===e||"Infinity"===e||"NaN"===e?void 0:u().toNumber(e)}}]);
//# sourceMappingURL=3209.ac6c200a.chunk.js.map