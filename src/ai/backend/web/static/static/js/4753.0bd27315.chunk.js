"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[4753,1806,8463],{31806:(e,n,l)=>{l.r(n),l.d(n,{default:()=>a});var i=l(85690),t=(l(43373),l(73689));const a=e=>{let{text:n,children:l}=e;return(0,t.jsx)(i.A.Text,{copyable:!0,code:!0,children:n||l})}},18463:(e,n,l)=>{l.r(n),l.d(n,{default:()=>s,useFolderExplorerOpener:()=>d});var i=l(43373),t=l(18150),a=l(12121),o=l(73689);const r=i.lazy((()=>Promise.all([l.e(2963),l.e(4639)]).then(l.bind(l,44639)))),s=()=>{const[e,n]=(0,a.useQueryParam)("folder",a.StringParam),l=null===e||void 0===e?void 0:e.replaceAll("-","");return(0,o.jsx)(r,{vfolderID:l||"",open:!!l,onRequestClose:()=>{n(null,"replaceIn")},destroyOnClose:!0})},d=()=>{const[,e]=(0,a.useQueryParam)("folder",a.StringParam),n=(0,t.zy)();return{open:n=>{e(n)},generateFolderPath:e=>{const l=new URLSearchParams(n.search);return l.set("folder",e),{pathname:n.pathname,search:l.toString()}}}}},16272:(e,n,l)=>{l.d(n,{A:()=>r});var i=l(51593),t=l(43373),a=l(73689);const o=function(e,n){let{image:l,style:t={}}=e,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const[,{getImageIcon:r}]=(0,i.Gj)();return(0,a.jsx)("img",{src:r(l),style:{width:"1em",height:"1em",...t},alt:o})},r=t.memo(o)},76604:(e,n,l)=>{l.d(n,{A:()=>x,s:()=>y});var i=l(58879),t=l(11899),a=l(15634),o=l(89130),r=l(50868),s=l(85690),d=l(33789),u=l(89608),c=l.n(u),m=l(8652),g=l(43373),p=l(73689);const v=e=>{var n,l;let{type:d,value:u,extra:m,opts:g,hideTooltip:v=!1,max:h}=e;const{token:x}=r.A.useToken(),S=(0,a.Nw)(),{mergedResourceSlots:f}=(0,t.Hv)(S||void 0),k=e=>{var n,l,t;return null!==f&&void 0!==f&&null!==(n=f[d])&&void 0!==n&&n.number_format.binary?Number(null===(l=(0,i.Js)(e,"g",3,!0))||void 0===l?void 0:l.numberFixed).toString():((null===f||void 0===f||null===(t=f[d])||void 0===t?void 0:t.number_format.round_length)||0)>0?parseFloat(e).toFixed(2):e};return(0,p.jsxs)(o.A,{direction:"row",gap:"xxs",children:[null!==f&&void 0!==f&&f[d]?(0,p.jsx)(y,{type:d,showTooltip:!v}):d,(0,p.jsxs)(s.A.Text,{children:[k(u),c().isUndefined(h)?null:"Infinity"===h?"~\u221e":`~${k(h)}`]}),(0,p.jsx)(s.A.Text,{type:"secondary",children:(null===f||void 0===f||null===(n=f[d])||void 0===n?void 0:n.display_unit)||""}),"mem"===d&&null!==g&&void 0!==g&&g.shmem&&(null===g||void 0===g?void 0:g.shmem)>0?(0,p.jsxs)(s.A.Text,{type:"secondary",style:{fontSize:x.fontSizeSM},children:["(SHM: ",null===(l=(0,i.Js)(g.shmem+"b","g",2,!0))||void 0===l?void 0:l.numberFixed,"GiB)"]}):null,m]})},h=e=>{let{size:n=16,children:l}=e;return(0,p.jsx)("mwc-icon",{style:{"--mdc-icon-size":`${n+2}px`,width:n,height:n},children:l})},y=e=>{var n;let{type:l,size:i=16,showIcon:t=!0,showUnit:a=!0,showTooltip:r=!0,...s}=e;const u={cpu:(0,p.jsx)(h,{size:i,children:"developer_board"}),mem:(0,p.jsx)(h,{size:i,children:"memory"}),"cuda.device":"/resources/icons/file_type_cuda.svg","cuda.shares":"/resources/icons/file_type_cuda.svg","rocm.device":"/resources/icons/rocm.svg","tpu.device":(0,p.jsx)(h,{size:i,children:"view_module"}),"ipu.device":(0,p.jsx)(h,{size:i,children:"view_module"}),"atom.device":"/resources/icons/rebel.svg","atom-plus.device":"/resources/icons/rebel.svg","gaudi2.device":"/resources/icons/gaudi.svg","warboy.device":"/resources/icons/furiosa.svg","hyperaccel-lpu.device":"/resources/icons/npu_generic.svg"},c=null!==(n=u[l])&&void 0!==n?n:(0,p.jsx)(m.A,{}),g="string"===typeof c?(0,p.jsx)("img",{...s,style:{height:i,alignSelf:"center",...s.style||{}},src:u[l]||"",alt:l}):(0,p.jsx)(o.A,{style:{width:16,height:16},children:c||l});return r?(0,p.jsx)(d.A,{title:l,children:g}):(0,p.jsx)(o.A,{style:{pointerEvents:"none"},children:g})},x=g.memo(v)},95056:(e,n,l)=>{l.d(n,{A:()=>c});var i=l(58879),t=l(51593),a=l(60881),o=l(15634),r=l(51786),s=l(85690),d=(l(43373),l(18150)),u=l(73689);const c=e=>{let{uuid:n,clickable:l}=e;const c=(0,o.hd)(),m=(0,i.QE)(),g=(0,d.zy)(),p=(0,t.f0)(),{data:v}=(0,a.nj)({queryKey:["VFolderSelectQuery"],queryFn:()=>{const e=new URLSearchParams;return e.set("group_id",c.id),m({method:"GET",url:`/folders?${e.toString()}`})},staleTime:1e3}),h=null===v||void 0===v?void 0:v.find((e=>e.id===n.replaceAll("-","")));return h&&(l?(0,u.jsxs)(s.A.Link,{onClick:()=>{p({pathname:g.pathname,search:`?folder=${h.id}`})},children:[(0,u.jsx)(r.A,{})," ",h.name]}):(0,u.jsxs)("div",{children:[(0,u.jsx)(r.A,{})," ",h.name]}))}},65606:(e,n,l)=>{l.r(n),l.d(n,{default:()=>t});const i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"InferenceSessionErrorModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,concreteType:"InferenceSessionErrorInfo",kind:"LinkedField",name:"errors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"repr",storageKey:null}],storageKey:null}],type:"InferenceSessionError",abstractKey:null,hash:"3aff870b3138311d3e5415b7bbb32f53"},t=i},40478:(e,n,l)=>{l.d(n,{A:()=>u});var i=l(33789),t=l(60822),a=l(24914),o=l(10361),r=l(43373),s=l(48401),d=l(73689);const u=e=>{let{copyable:n,defaultIcon:l,...u}=e;const[c,m]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{if(c){const e=setTimeout((()=>{m(!1)}),2e3);return()=>clearTimeout(e)}}),[c]),(0,d.jsx)(i.A,{title:c?"Copied!":"Copy",open:!!c||void 0,children:(0,d.jsx)(s.CopyToClipboard,{text:(null===n||void 0===n?void 0:n.text)||"",onCopy:async()=>{m(!0)},children:(0,d.jsx)(t.Ay,{icon:c?(0,d.jsx)(a.A,{}):l||(0,d.jsx)(o.A,{}),...u})})})}},18450:(e,n,l)=>{l.d(n,{A:()=>ie});var i=l(58879),t=l(51593),a=l(89130),o=l(45296),r=l(67378),s=l(60822),d=l(64831),u=l(57442),c=l(43373),m=l(73689);const{Compact:g}=o.A,p=e=>{let{style:n,loading:l,autoFocus:i,onStop:t,onSend:a,...o}=e;const p=(0,c.useRef)(null);return(0,c.useEffect)((()=>{i&&p.current&&p.current.focus()}),[i]),(0,m.jsxs)(g,{style:{width:"100%",...n},children:[(0,m.jsx)(r.A,{ref:p,...o,onPressEnter:e=>{l||a&&a()}}),(0,m.jsx)(s.Ay,{htmlType:"button",icon:l?(0,m.jsx)(d.A,{}):(0,m.jsx)(u.A,{}),onClick:()=>{l?t&&t():a&&a()}})]})};var v=l(69056),h=l(89608),y=l.n(h),x=l(56762);const S=e=>{let{models:n,allowCustomModel:l,...i}=e;const{t:t}=(0,x.Bd)();return(0,m.jsx)(v.A,{placeholder:t("chatui.SelectModel"),style:{fontWeight:"normal"},showSearch:!0,options:y().concat(l?[{label:"Custom",value:"custom"}]:[],y().chain(n).groupBy("group").mapValues((e=>y().map(e,(e=>({label:e.label,value:e.name}))))).map(((e,n)=>({label:"undefined"===n?"Others":n,options:e}))).value()),popupMatchSelectWidth:!1,...i})};var f=l(40478),k=l(85690),j=l(55368),_=l(60228),A=l(65246),b=l(87799);const{Text:F}=k.A,T=e=>{let{children:n}=e;return(0,m.jsx)(_.o,{components:{code(e){const{children:n,className:l,node:i,ref:t,...a}=e,o=/language-(\w+)/.exec(l||""),r=String(n).replace(/\n$/,"");return o?(0,m.jsx)(j.A,{title:(0,m.jsx)(F,{style:{fontWeight:"normal"},type:"secondary",children:o[1]}),type:"inner",size:"small",extra:(0,m.jsx)(f.A,{type:"text",copyable:{text:"s"}}),styles:{body:{padding:0},header:{margin:0}},children:(0,m.jsx)("div",{style:{margin:"-0.5em 0",width:"100%"},children:(0,m.jsx)(I,{ref:t,...a,PreTag:"div",language:o[1],style:b.A,wrapLongLines:!0,wrapLines:!0,children:r})})}):(0,m.jsx)("code",{...a,className:l,children:n})}},children:n})},w=e=>{let{children:n,...l}=e;return(0,m.jsx)(A.A,{...l,children:n})},I=c.memo(w),C=c.memo(T);var K=l(35343),E=l(50868),L=l(60522),R=l(12731),M=l.n(R),D=l(65928),z=l.n(D),O=l(99261),P=l.n(O);M().extend(z()),M().extend(P());const B=e=>{let{extra:n,message:l,placement:i="left",containerStyle:t,enableExtraHover:o,isStreaming:r}=e;const{token:s}=E.A.useToken(),[d,u]=(0,c.useState)(!1),g=(0,K.A)(l.content,{wait:50});return(0,m.jsxs)(a.A,{direction:"left"===i?"row":"row-reverse",justify:"start",align:"baseline",style:{marginLeft:"left"===i?"0":"15%",marginRight:"right"===i?"0":20,...t},gap:"sm",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:["user"!==l.role?(0,m.jsx)(L.A,{icon:"\ud83e\udd16",style:{fontSize:s.fontSizeHeading3}}):null,(0,m.jsxs)(a.A,{direction:"column",align:"left"===i?"start":"end",wrap:"wrap",style:{flex:1},gap:"xxs",children:[(0,m.jsx)(a.A,{align:"stretch",direction:"column",style:{borderRadius:s.borderRadius,borderColor:s.colorBorderSecondary,borderWidth:s.lineWidth,padding:"1em",paddingTop:0,paddingBottom:0,backgroundColor:"user"!==l.role?s.colorBgContainer:s.colorBgContainerDisabled,width:"100%"},children:(0,m.jsx)(C,{children:g+(r?"\n\u25cf":"")})}),(0,m.jsx)(a.A,{style:{fontSize:s.fontSizeSM,...o?{opacity:d?1:0,transition:"opacity 0.2s",transitionDelay:d?"0s":"0.2s"}:{}},children:n})]})]})};var U=l(60266),N=l(44828);const V=e=>{let{autoScroll:n,atBottom:l,lastMessageContent:i,...t}=e;const a=(0,U.E)(t.onScrollToBottom);return(0,c.useEffect)((()=>{l&&n&&(null===a||void 0===a||a("auto"))}),[l,n,i,a]),(0,m.jsx)(s.Ay,{icon:(0,m.jsx)(N.A,{}),shape:"circle",onClick:()=>{a&&a("click")}})};var $=l(12529),H=l(849);const q=e=>{var n;let{messages:l,isStreaming:i}=e;const t=(0,c.useRef)(null),[o,r]=(0,c.useState)(!0),{token:s}=E.A.useToken(),d="undefined"!==typeof window?1.5*window.innerHeight:0;return(0,m.jsxs)(a.A,{direction:"column",align:"stretch",style:{height:"100%",flex:1},children:[(0,m.jsx)(H.aY,{atBottomStateChange:r,atBottomThreshold:60,computeItemKey:(e,n)=>n.id,data:l,followOutput:"auto",initialTopMostItemIndex:(null===l||void 0===l?void 0:l.length)-1,itemContent:(e,n)=>(0,m.jsx)(B,{message:n,placement:"user"===n.role?"right":"left",containerStyle:{paddingLeft:s.paddingMD,paddingRight:s.paddingMD,paddingTop:0===e?s.paddingMD:0,paddingBottom:e===l.length-1?s.paddingMD:0},isStreaming:"user"!==n.role&&i&&e===l.length-1,enableExtraHover:"user"===n.role,extra:"user"!==n.role?(0,m.jsx)($.Ay,{children:(0,m.jsx)(f.A,{type:"text",size:"small",copyable:{text:n.content}})}):(0,m.jsx)($.Ay,{children:null})},n.id),overscan:d,ref:t}),(0,m.jsx)("div",{style:{position:"absolute",right:"50%",transform:"translateX(+50%)",bottom:s.marginSM,opacity:o?0:1,transition:"opacity 0.2s",transitionDelay:o?"0s":"0.2s"},children:(0,m.jsx)(V,{atBottom:o,autoScroll:i,onScrollToBottom:e=>{const n=t.current;switch(e){case"auto":null===n||void 0===n||n.scrollToIndex({align:"end",behavior:"auto",index:"LAST"});break;case"click":null===n||void 0===n||n.scrollToIndex({align:"end",behavior:"smooth",index:"LAST"})}},lastMessageContent:null===(n=l[l.length-1])||void 0===n?void 0:n.content})})]})};var G=l(29992),Q=l(76166),Y=l(64703),W=l(57958),J=l(52161),X=l(20267),Z=l(32141),ee=l(23702),ne=l(39464),le=l(50364);const ie=e=>{var n;let{models:l=[],endpointId:o,baseURL:d,headers:u,credentials:g,apiKey:v,fetchOnClient:h,allowCustomModel:f,alert:k,leftExtra:_,inputMessage:A,submitKey:b,onInputChange:F,onSubmitChange:T,showCompareMenuItem:w,...I}=e;const C=(0,t.f0)(),[K,L]=(0,J.A)(I,{valuePropName:"modelId",trigger:"onModelChange",defaultValue:null===l||void 0===l||null===(n=l[0])||void 0===n?void 0:n.id}),R=(0,c.useRef)(null),{messages:M,error:D,input:z,setInput:O,handleInputChange:P,stop:B,isLoading:U,append:N,setMessages:V}=(0,Q.Y_)({api:d,headers:u,credentials:g,body:{modelId:K},streamMode:"stream-data",fetch:(e,n)=>{if(h||"custom"===K){var l,i,t;const e=JSON.parse(null===n||void 0===n?void 0:n.body),a=(0,G.ry)({baseURL:f?null===(l=R.current)||void 0===l?void 0:l.getFieldValue("baseURL"):d,apiKey:(f?null===(i=R.current)||void 0===i?void 0:i.getFieldValue("token"):v)||"dummy"});return(0,X.gM)({abortSignal:(null===n||void 0===n?void 0:n.signal)||void 0,model:a(f?null===(t=R.current)||void 0===t?void 0:t.getFieldValue("modelId"):K),messages:null===e||void 0===e?void 0:e.messages}).then((e=>e.toAIStreamResponse()))}return fetch(e,n)}}),{token:$}=E.A.useToken(),{t:H}=(0,x.Bd)();(0,c.useEffect)((()=>{y().isUndefined(A)||O(A)}),[A,O]),(0,c.useEffect)((()=>{!y().isUndefined(b)&&z&&N({role:"user",content:z})}),[b]);const ie=(0,i.LY)([w&&{key:"compare",label:H("chatui.CompareWithOtherModels"),icon:(0,m.jsx)(le.A,{}),onClick:()=>{C(`/serving?tab=chatting&endpointId=${o}&modelId=${K}`)}},{type:"divider"},{key:"clear",danger:!0,label:H("chatui.DeleteChatHistory"),icon:(0,m.jsx)(Y.A,{}),onClick:()=>{V([])}}]);return(0,m.jsxs)(j.A,{bordered:!0,extra:[],...I,title:(0,m.jsx)(a.A,{direction:"column",align:"stretch",gap:"sm",children:(0,m.jsxs)(a.A,{direction:"row",gap:"xs",children:[_,(0,m.jsx)(S,{models:l,value:K,onChange:L,allowCustomModel:f}),(0,m.jsx)(Z.A,{menu:{items:ie},trigger:["click"],children:(0,m.jsx)(s.Ay,{type:"link",onClick:e=>e.preventDefault(),icon:(0,m.jsx)(W.A,{}),style:{color:$.colorTextSecondary,width:$.sizeMS}})})]})}),style:{height:"100%",width:"100%",display:"flex",flexDirection:"column"},styles:{body:{backgroundColor:$.colorFillQuaternary,borderRadius:0,flex:1,display:"flex",flexDirection:"column",padding:0,height:"50%",position:"relative"},actions:{paddingLeft:$.paddingContentHorizontal,paddingRight:$.paddingContentHorizontal},header:{zIndex:1}},actions:[(0,m.jsx)(p,{autoFocus:!0,value:z,placeholder:"Say something...",onChange:e=>{P(e),F&&F(e.target.value)},loading:U,onStop:()=>{B()},onSend:()=>{z&&(N({role:"user",content:z}),setTimeout((()=>{O("")}),0),null===T||void 0===T||T())}})],children:[(0,m.jsx)(a.A,{direction:"row",style:{padding:$.paddingSM,paddingRight:$.paddingContentHorizontalLG,paddingLeft:$.paddingContentHorizontalLG,backgroundColor:$.colorBgContainer,display:f&&"custom"===K?"flex":"none"},children:(0,m.jsxs)(ee.A,{ref:R,layout:"horizontal",size:"small",requiredMark:"optional",style:{flex:1},initialValues:{baseURL:d},children:[k?(0,m.jsx)("div",{style:{marginBottom:$.size},children:k}):null,(0,m.jsx)(ee.A.Item,{label:"baseURL",name:"baseURL",rules:[{type:"url"},{required:!0}],children:(0,m.jsx)(r.A,{placeholder:"https://domain/v1"})}),(0,m.jsx)(ee.A.Item,{label:"Model ID",name:"modelId",rules:[{required:!0}],children:(0,m.jsx)(r.A,{placeholder:"llm-model"})}),(0,m.jsx)(ee.A.Item,{label:"Token",name:"token",children:(0,m.jsx)(r.A,{})})]},d)}),y().isEmpty(null===D||void 0===D?void 0:D.responseBody)?null:(0,m.jsx)(ne.A,{message:null===D||void 0===D?void 0:D.responseBody,type:"error",showIcon:!0,style:{margin:$.marginSM},closable:!0}),(0,m.jsx)(q,{messages:M,isStreaming:U})]})}},30063:(e,n,l)=>{l.r(n),l.d(n,{default:()=>t});const i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ChatUIModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null}],type:"Endpoint",abstractKey:null,hash:"f75cc1d0067e6a7d85e506a61c62a351"},t=i},14753:(e,n,l)=>{l.r(n),l.d(n,{default:()=>ue});var i=l(31806),t=l(35847),a=l(66048),o=l(58879),r=l(51593),s=l(60881),d=l(94126),u=l(89130),c=l(85029),m=l(23702),g=l(39464),p=l(22987),v=l(12731),h=l.n(v),y=l(43373),x=l(56762),S=l(73689);const f=e=>{let{onRequestClose:n,onCancel:l,endpoint_id:i,...t}=e;const{t:a}=(0,x.Bd)(),v=(0,r.CX)(),f=(0,y.useRef)(null),k=(0,s.ET)({mutationFn:e=>{const n={valid_until:e.valid_until};return(0,o.hu)({method:"POST",url:`/services/${i}/token`,body:n,client:v})}});return(0,S.jsx)(d.A,{...t,destroyOnClose:!0,onOk:e=>{var l;null===(l=f.current)||void 0===l||l.validateFields().then((e=>{const l=e.datetime.unix();k.mutate({valid_until:l},{onSuccess:()=>{c.Ay.success(a("modelService.TokenGenerated")),n(!0)},onError:e=>{var n;null!==e&&void 0!==e&&null!==(n=e.message)&&void 0!==n&&n.includes("valid_until is older than now")?c.Ay.error(a("modelService.TokenExpiredDateError")):(c.Ay.error(a("modelService.TokenGenerationFailed")),console.log(e))}})}))},onCancel:()=>{n()},okText:a("modelService.Generate"),confirmLoading:k.isPending,centered:!0,title:a("modelService.GenerateNewToken"),children:(0,S.jsx)(m.A,{ref:f,preserve:!1,labelCol:{span:10},initialValues:{datetime:h()().add(24,"hour")},validateTrigger:["onChange","onBlur"],style:{maxWidth:500},children:(0,S.jsxs)(u.A,{direction:"column",gap:"sm",align:"stretch",children:[(0,S.jsx)(g.A,{type:"info",showIcon:!0,message:a("modelService.TokenExpiredDateHelp")}),(0,S.jsx)(u.A,{direction:"row",align:"stretch",justify:"around",children:(0,S.jsx)(m.A.Item,{name:"datetime",label:a("modelService.ExpiredDate"),rules:[{type:"object",required:!0,message:a("modelService.PleaseSelectTime")},()=>({validator:(e,n)=>n.isAfter(h()())?Promise.resolve():Promise.reject(new Error(a("modelService.TokenExpiredDateError")))})],children:(0,S.jsx)(p.A,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",style:{width:200}})})})]})})})};var k,j=l(18463),_=l(16272),A=l(60822),b=l(45679),F=l(88522);const T=e=>{let{onRequestClose:n,onCancel:t,inferenceSessionErrorFrgmt:a,...o}=e;const{t:r}=(0,x.Bd)(),s=(0,F.useFragment)(void 0!==k?k:k=l(65606),a);return(0,S.jsx)(d.A,{centered:!0,title:r("modelService.ServingRouteErrorModalTitle"),onCancel:()=>{n()},footer:[(0,S.jsx)(A.Ay,{onClick:()=>{n()},children:r("button.Close")})],...o,children:(0,S.jsxs)(b.A,{bordered:!0,column:{xxl:1,xl:1,lg:1,md:1,sm:1,xs:1},labelStyle:{minWidth:100},style:{marginTop:20},children:[(0,S.jsx)(b.A.Item,{label:r("modelService.SessionId"),children:(0,S.jsx)(i.default,{children:null===s||void 0===s?void 0:s.session_id})}),(0,S.jsx)(b.A.Item,{label:r("dialog.error.Error"),children:null===s||void 0===s?void 0:s.errors[0].repr})]})})};var w,I=l(76604),C=l(95056),K=l(18450),E=l(40567),L=l(50868),R=l(96358),M=l(34948),D=l(89608),z=l.n(D);const O=e=>{var n,i;let{endpointFrgmt:t,basePath:a="v1"}=e;const{t:o}=(0,x.Bd)(),r=(0,F.useFragment)(void 0!==w?w:w=l(30063),t),{data:d,isFetching:u,refetch:c}=(0,s.nN)({queryKey:["models",null===r||void 0===r?void 0:r.url],queryFn:()=>fetch(new URL(a+"/models",(null===r||void 0===r?void 0:r.url)||"").toString()).then((e=>e.json()))});return u?(0,S.jsx)(M.A,{active:!0}):(0,S.jsx)(K.A,{endpointId:(null===r||void 0===r?void 0:r.endpoint_id)||"",baseURL:new URL(a,(null===r||void 0===r?void 0:r.url)||"").toString(),models:z().map(null===d||void 0===d?void 0:d.data,(e=>({id:e.id,name:e.id}))),fetchOnClient:!0,style:{flex:1},allowCustomModel:z().isEmpty(null===d||void 0===d?void 0:d.data),alert:z().isEmpty(null===d||void 0===d?void 0:d.data)&&(0,S.jsx)(g.A,{type:"warning",showIcon:!0,message:o("chatui.CannotFindModel"),action:(0,S.jsx)(A.Ay,{icon:(0,S.jsx)(E.A,{}),onClick:()=>{c()},children:o("button.Refresh")})}),modelId:null!==(n=null===d||void 0===d||null===(i=d.data)||void 0===i?void 0:i[0].id)&&void 0!==n?n:"custom",showCompareMenuItem:!0})},P=e=>{let{endpointFrgmt:n=null,basePath:l,...i}=e;const{token:t}=L.A.useToken();return(0,S.jsx)(R.A,{...i,styles:{body:{height:"80vh",display:"flex"},content:{padding:0}},footer:null,centered:!0,width:"80%",style:{maxWidth:t.screenLGMax},destroyOnClose:!0,children:(0,S.jsx)(u.A,{direction:"column",align:"stretch",style:{flex:1},children:(0,S.jsx)(O,{basePath:l,endpointFrgmt:n})})})};var B,U=l(11899),N=l(92871),V=l(66231),$=l(67425),H=l(44954),q=l(48659),G=l(51786),Q=l(41123),Y=l(81850),W=l(4342),J=l(84197),X=l(65666),Z=l(44733),ee=l(85690),ne=l(33789),le=l(15934),ie=l(11371),te=l(40042),ae=l(55368),oe=l(77731),re=l(3681),se=l(18150);const de=(e,n)=>{const l=h()(e.created_at),i=h()(n.created_at);return l.diff(i)},ue=()=>{var e,n,d,c,m,g;const{t:p}=(0,x.Bd)(),{token:v}=L.A.useToken(),k=(0,r.CX)(),w=(0,se.Zp)(),{serviceId:K}=(0,se.g)(),[R,M]=(0,r.Tw)("initial-fetch"),[D,O]=(0,y.useTransition)(),[ue,ce]=(0,y.useTransition)(),[me,ge]=(0,y.useState)(null),[pe,ve]=(0,y.useState)(!1),[he,ye]=(0,y.useState)(!1),[xe]=(0,U.U6)(),[Se]=(0,y.useState)({current:1,pageSize:100}),{message:fe}=Z.A.useApp(),ke=(0,r.f0)(),{open:je}=(0,j.useFolderExplorerOpener)(),{endpoint:_e,endpoint_token_list:Ae}=(0,F.useLazyLoadQuery)(void 0!==B?B:B=l(48875),{tokenListOffset:(Se.current-1)*Se.pageSize,tokenListLimit:Se.pageSize,endpointId:K||""},{fetchPolicy:"initial-fetch"===R?"store-and-network":"network-only",fetchKey:R}),be=(0,s.ET)({mutationFn:()=>{if(_e)return(0,o.hu)({method:"POST",url:`/services/${_e.endpoint_id}/errors/clear`,client:k})}}),Fe=(0,s.ET)({mutationFn:e=>(0,o.hu)({method:"POST",url:`/services/${e}/sync`,client:k})}),Te=function(){let e="default";switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toUpperCase()){case"HEALTHY":e="success";break;case"PROVISIONING":e="processing";break;case"UNHEALTHY":e="warning"}return e},we=k.supports("modify-endpoint")?`${null===_e||void 0===_e||null===(e=_e.image_object)||void 0===e?void 0:e.registry}/${null===_e||void 0===_e||null===(n=_e.image_object)||void 0===n?void 0:n.name}:${null===_e||void 0===_e||null===(d=_e.image_object)||void 0===d?void 0:d.tag}@${null===_e||void 0===_e||null===(c=_e.image_object)||void 0===c?void 0:c.architecture}`:null===_e||void 0===_e?void 0:_e.image,Ie=JSON.parse((null===_e||void 0===_e?void 0:_e.resource_opts)||"{}"),Ce=[{label:p("modelService.EndpointName"),children:(0,S.jsx)(ee.A.Text,{copyable:!0,children:null===_e||void 0===_e?void 0:_e.name})},{label:p("modelService.Status"),children:(0,S.jsx)(a.A,{endpointFrgmt:_e})},{label:p("modelService.EndpointId"),children:null===_e||void 0===_e?void 0:_e.endpoint_id},{label:p("modelService.SessionOwner"),children:(0,S.jsx)(t.A,{endpointFrgmt:_e})},{label:p("modelService.DesiredSessionCount"),children:null===_e||void 0===_e?void 0:_e.desired_session_count},{label:p("modelService.ServiceEndpoint"),children:null!==_e&&void 0!==_e&&_e.url?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ee.A.Text,{copyable:!0,children:null===_e||void 0===_e?void 0:_e.url}),(0,S.jsx)(ne.A,{title:"LLM Chat Test",children:(0,S.jsx)(A.Ay,{type:"link",icon:(0,S.jsx)(re.A,{}),onClick:()=>{ye(!0)},disabled:"HEALTHY"!==(null===_e||void 0===_e?void 0:_e.status)})})]}):(0,S.jsx)(ee.A.Text,{type:"secondary",children:p("modelService.NoServiceEndpoint")})},{label:p("modelService.OpenToPublic"),children:null!==_e&&void 0!==_e&&_e.open_to_public?(0,S.jsx)(V.A,{}):(0,S.jsx)($.A,{})},{label:p("modelService.resources"),children:(0,S.jsxs)(u.A,{direction:"row",wrap:"wrap",gap:"md",children:[(0,S.jsx)(ne.A,{title:p("session.ResourceGroup"),children:(0,S.jsx)(le.A,{children:null===_e||void 0===_e?void 0:_e.resource_group})}),z().map(JSON.parse((null===_e||void 0===_e?void 0:_e.resource_slots)||"{}"),((e,n)=>(0,S.jsx)(I.A,{type:n,value:e,opts:Ie},n)))]}),span:{xl:2}},{label:p("session.launcher.ModelStorage"),children:(0,S.jsx)(y.Suspense,{fallback:(0,S.jsx)(ie.A,{indicator:(0,S.jsx)(H.A,{spin:!0})}),children:(0,S.jsxs)(u.A,{direction:"column",align:"start",children:[(0,S.jsx)(C.A,{uuid:null===_e||void 0===_e?void 0:_e.model,clickable:!0}),k.supports("endpoint-extra-mounts")&&(null===_e||void 0===_e?void 0:_e.model_mount_destination)&&(0,S.jsxs)(u.A,{direction:"row",align:"center",gap:"xxs",children:[(0,S.jsx)(q.A,{type:"secondary"}),(0,S.jsx)(ee.A.Text,{type:"secondary",children:null===_e||void 0===_e?void 0:_e.model_mount_destination})]})]})})}];return k.supports("endpoint-extra-mounts")&&Ce.push({label:p("modelService.AdditionalMounts"),children:(0,S.jsx)(u.A,{direction:"column",align:"start",children:z().map(null===_e||void 0===_e?void 0:_e.extra_mounts,(e=>(0,S.jsx)(u.A,{direction:"row",gap:"xxs",children:(0,S.jsxs)(ee.A.Link,{onClick:()=>{(null===e||void 0===e?void 0:e.row_id)&&je(null===e||void 0===e?void 0:e.row_id)},children:[(0,S.jsx)(G.A,{})," ",null===e||void 0===e?void 0:e.name]})},null===e||void 0===e?void 0:e.row_id)))})}),Ce.push({label:p("session.launcher.EnvironmentVariable"),children:(0,S.jsx)(ee.A.Text,{style:{fontFamily:"monospace"},children:z().isEmpty(JSON.parse(null===_e||void 0===_e?void 0:_e.environ))?"-":null===_e||void 0===_e?void 0:_e.environ}),span:{sm:1}}),Ce.push({label:p("modelService.Image"),children:(k.supports("modify-endpoint")?null===_e||void 0===_e?void 0:_e.image_object:null===_e||void 0===_e?void 0:_e.image)&&(0,S.jsxs)(u.A,{direction:"row",gap:"xs",children:[(0,S.jsx)(_.A,{image:we}),(0,S.jsx)(i.default,{children:we}),null!==_e&&void 0!==_e&&null!==(m=_e.runtime_variant)&&void 0!==m&&m.human_readable_name?(0,S.jsx)(le.A,{children:null===_e||void 0===_e||null===(g=_e.runtime_variant)||void 0===g?void 0:g.human_readable_name}):null]}),span:{xl:3}}),(0,S.jsxs)(u.A,{direction:"column",align:"stretch",gap:"sm",children:[(0,S.jsx)(te.A,{items:[{title:p("modelService.Services"),onClick:e=>{e.preventDefault(),w("/serving")},href:"/serving"},{title:p("modelService.RoutingInfo")}]}),(0,S.jsxs)(u.A,{direction:"row",justify:"between",children:[(0,S.jsx)(ee.A.Title,{level:3,style:{margin:0},children:(null===_e||void 0===_e?void 0:_e.name)||""}),(0,S.jsxs)(u.A,{gap:"xxs",children:[((null===_e||void 0===_e?void 0:_e.retries)||0)>0?(0,S.jsx)(ne.A,{title:p("modelService.ClearErrors"),children:(0,S.jsx)(A.Ay,{loading:ue,icon:(0,S.jsx)(Q.A,{}),onClick:()=>{ce((()=>{be.mutate(void 0,{onSuccess:()=>O((()=>{M()}))})}))}})}):(0,S.jsx)(S.Fragment,{}),(0,S.jsx)(A.Ay,{loading:D,icon:(0,S.jsx)(E.A,{}),disabled:(0,N.isDestroyingStatus)(null===_e||void 0===_e?void 0:_e.desired_session_count,null===_e||void 0===_e?void 0:_e.status),onClick:()=>{O((()=>{M()}))},children:p("button.Refresh")})]})]}),(0,S.jsx)(ae.A,{title:p("modelService.ServiceInfo"),extra:(0,S.jsx)(A.Ay,{type:"primary",icon:(0,S.jsx)(Y.A,{}),disabled:(0,N.isDestroyingStatus)(null===_e||void 0===_e?void 0:_e.desired_session_count,null===_e||void 0===_e?void 0:_e.status)||!(null===_e||void 0===_e||!_e.created_user_email)&&(null===_e||void 0===_e?void 0:_e.created_user_email)!==xe.email,onClick:()=>{ke("/service/update/"+K)},children:p("button.Edit")}),children:(0,S.jsx)(b.A,{bordered:!0,column:{xxl:3,xl:3,lg:2,md:1,sm:1,xs:1},style:{backgroundColor:v.colorBgBase},items:Ce})}),(0,S.jsx)(ae.A,{title:p("modelService.GeneratedTokens"),extra:(0,S.jsx)(A.Ay,{type:"primary",icon:(0,S.jsx)(W.A,{}),disabled:(0,N.isDestroyingStatus)(null===_e||void 0===_e?void 0:_e.desired_session_count,null===_e||void 0===_e?void 0:_e.status),onClick:()=>{ve(!0)},children:p("modelService.GenerateToken")}),children:(0,S.jsx)(oe.A,{scroll:{x:"max-content"},rowKey:"token",columns:[{title:"#",fixed:"left",render:(e,n,l)=>++l,showSorterTooltip:!1},{title:"Token",dataIndex:"token",fixed:"left",render:(e,n)=>(0,S.jsx)(ee.A.Text,{ellipsis:!0,copyable:!0,style:{width:150},children:n.token})},{title:"Status",render:(e,n)=>{const l=h().utc(n.valid_until).isBefore();return(0,S.jsx)(le.A,{color:l?"red":"green",children:l?"Expired":"Valid"})}},{title:"Valid Until",dataIndex:"valid_until",render:(e,n)=>(0,S.jsx)("span",{children:n.valid_until?h().utc(n.valid_until).tz().format("ll LTS"):"-"}),defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:de},{title:"Created at",dataIndex:"created_at",render:(e,n)=>(0,S.jsx)("span",{children:h()(n.created_at).format("ll LT")}),defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:de}],pagination:!1,dataSource:(0,o.tS)(null===Ae||void 0===Ae?void 0:Ae.items),bordered:!0})}),(0,S.jsx)(ae.A,{title:p("modelService.RoutesInfo"),extra:null!==_e&&void 0!==_e&&_e.endpoint_id?(0,S.jsx)(A.Ay,{icon:(0,S.jsx)(J.A,{}),loading:Fe.isPending,disabled:(0,N.isDestroyingStatus)(null===_e||void 0===_e?void 0:_e.desired_session_count,null===_e||void 0===_e?void 0:_e.status),onClick:()=>{(null===_e||void 0===_e?void 0:_e.endpoint_id)&&Fe.mutateAsync(null===_e||void 0===_e?void 0:_e.endpoint_id,{onSuccess:e=>{null!==e&&void 0!==e&&e.success?(fe.success(p("modelService.SyncRoutesRequested")),O((()=>{M()}))):fe.error(p("modelService.SyncRoutesFailed"))},onError:e=>{fe.error(p("modelService.SyncRoutesFailed"))}})},children:p("modelService.SyncRoutes")}):null,children:(0,S.jsx)(oe.A,{scroll:{x:"max-content"},columns:[{title:p("modelService.RouteId"),dataIndex:"routing_id",fixed:"left"},{title:p("modelService.SessionId"),dataIndex:"session"},{title:p("modelService.Status"),render:(e,n)=>n.status&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(le.A,{color:Te(n.status),style:{marginRight:0},children:n.status.toUpperCase()},n.status),"FAILED_TO_START"===n.status&&n.session&&(0,S.jsx)(A.Ay,{size:"small",type:"text",icon:(0,S.jsx)(X.A,{}),style:{color:v.colorTextSecondary},onClick:()=>{n.session&&(e=>{if(null===_e)return;const{errors:n}=_e||{},l=null===n||void 0===n?void 0:n.find((n=>{let{session_id:l}=n;return e===l}));ge(l||null)})(n.session)}})]})},{title:p("modelService.TrafficRatio"),dataIndex:"traffic_ratio"}],pagination:!1,dataSource:null===_e||void 0===_e?void 0:_e.routings,rowKey:"routing_id",bordered:!0})}),(0,S.jsx)(T,{open:!!me,inferenceSessionErrorFrgmt:me,onRequestClose:()=>ge(null)}),(0,S.jsx)(f,{open:pe,onRequestClose:e=>{ve(!pe),e&&O((()=>{M()}))},endpoint_id:(null===_e||void 0===_e?void 0:_e.endpoint_id)||""}),(0,S.jsx)(P,{endpointFrgmt:_e,open:he,onCancel:()=>{ye(!1)}})]})}},48875:(e,n,l)=>{l.r(n),l.d(n,{default:()=>t});const i=function(){var e={defaultValue:null,kind:"LocalArgument",name:"endpointId"},n={defaultValue:null,kind:"LocalArgument",name:"tokenListLimit"},l={defaultValue:null,kind:"LocalArgument",name:"tokenListOffset"},i={kind:"Variable",name:"endpoint_id",variableName:"endpointId"},t=[i],a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"humanized_name",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"registry",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"architecture",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"is_local",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"digest",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},h={alias:null,args:null,concreteType:"ResourceLimit",kind:"LinkedField",name:"resource_limits",plural:!0,selections:[v,{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max",storageKey:null}],storageKey:null},y={alias:null,args:null,concreteType:"KVPair",kind:"LinkedField",name:"labels",plural:!0,selections:[v,{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"size_bytes",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"supported_accelerators",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"open_to_public",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},A={alias:null,args:null,kind:"ScalarField",name:"retries",storageKey:null},b={alias:null,args:null,concreteType:"RuntimeVariantInfo",kind:"LinkedField",name:"runtime_variant",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"human_readable_name",storageKey:null}],storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"model",storageKey:null},T={alias:null,args:null,kind:"ScalarField",name:"model_mount_destiation",storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"model_mount_destination",storageKey:null},I={alias:null,args:null,kind:"ScalarField",name:"model_definition_path",storageKey:null},C={alias:null,args:null,kind:"ScalarField",name:"row_id",storageKey:null},K={alias:null,args:null,kind:"ScalarField",name:"environ",storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"resource_group",storageKey:null},L={alias:null,args:null,kind:"ScalarField",name:"resource_slots",storageKey:null},R={alias:null,args:null,kind:"ScalarField",name:"resource_opts",storageKey:null},M={alias:null,args:null,kind:"ScalarField",name:"routing_id",storageKey:null},D={alias:null,args:null,kind:"ScalarField",name:"session",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"traffic_ratio",storageKey:null},O={alias:null,args:null,kind:"ScalarField",name:"endpoint",storageKey:null},P={alias:null,args:null,kind:"ScalarField",name:"created_user_email",storageKey:null},B={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},U={alias:null,args:[i,{kind:"Variable",name:"limit",variableName:"tokenListLimit"},{kind:"Variable",name:"offset",variableName:"tokenListOffset"}],concreteType:"EndpointTokenList",kind:"LinkedField",name:"endpoint_token_list",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null},{alias:null,args:null,concreteType:"EndpointToken",kind:"LinkedField",name:"items",plural:!0,selections:[B,{alias:null,args:null,kind:"ScalarField",name:"token",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"project",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_owner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"valid_until",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[e,n,l],kind:"Fragment",metadata:null,name:"EndpointDetailPageQuery",selections:[{alias:null,args:t,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[a,o,r,s,{alias:null,args:null,concreteType:"ImageNode",kind:"LinkedField",name:"image_object",plural:!1,selections:[a,d,u,c,m,g,p,h,y,x,S],storageKey:null},f,k,j,{alias:null,args:null,concreteType:"InferenceSessionError",kind:"LinkedField",name:"errors",plural:!0,selections:[_,{args:null,kind:"FragmentSpread",name:"InferenceSessionErrorModalFragment"}],storageKey:null},A,b,F,T,w,I,{alias:null,args:null,concreteType:"VirtualFolderNode",kind:"LinkedField",name:"extra_mounts",plural:!0,selections:[C,a],storageKey:null},K,E,L,R,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[M,D,z,O,o],storageKey:null},P,{args:null,kind:"FragmentSpread",name:"EndpointOwnerInfoFragment"},{args:null,kind:"FragmentSpread",name:"EndpointStatusTagFragment"},{args:null,kind:"FragmentSpread",name:"ChatUIModalFragment"}],storageKey:null},U],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,l,n],kind:"Operation",name:"EndpointDetailPageQuery",selections:[{alias:null,args:t,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[a,o,r,s,{alias:null,args:null,concreteType:"ImageNode",kind:"LinkedField",name:"image_object",plural:!1,selections:[a,d,u,c,m,g,p,h,y,x,S,B],storageKey:null},f,k,j,{alias:null,args:null,concreteType:"InferenceSessionError",kind:"LinkedField",name:"errors",plural:!0,selections:[_,{alias:null,args:null,concreteType:"InferenceSessionErrorInfo",kind:"LinkedField",name:"errors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"repr",storageKey:null}],storageKey:null}],storageKey:null},A,b,F,T,w,I,{alias:null,args:null,concreteType:"VirtualFolderNode",kind:"LinkedField",name:"extra_mounts",plural:!0,selections:[C,a,B],storageKey:null},K,E,L,R,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[M,D,z,O,o,B],storageKey:null},P,B,{alias:null,args:null,kind:"ScalarField",name:"session_owner_email",storageKey:null}],storageKey:null},U]},params:{cacheID:"dcfd49d2a12d03cc05ad5cd85b0df2c3",id:null,metadata:{},name:"EndpointDetailPageQuery",operationKind:"query",text:'query EndpointDetailPageQuery(\n  $endpointId: UUID!\n  $tokenListOffset: Int!\n  $tokenListLimit: Int!\n) {\n  endpoint(endpoint_id: $endpointId) {\n    name\n    status\n    endpoint_id\n    image @deprecatedSince(version: "23.09.9")\n    image_object @since(version: "23.09.9") {\n      name\n      humanized_name\n      tag\n      registry\n      architecture\n      is_local\n      digest\n      resource_limits {\n        key\n        min\n        max\n      }\n      labels {\n        key\n        value\n      }\n      size_bytes\n      supported_accelerators\n      id\n    }\n    desired_session_count\n    url\n    open_to_public\n    errors {\n      session_id\n      ...InferenceSessionErrorModalFragment\n    }\n    retries\n    runtime_variant @since(version: "24.03.5") {\n      human_readable_name\n    }\n    model\n    model_mount_destiation @deprecatedSince(version: "24.03.4")\n    model_mount_destination @since(version: "24.03.4")\n    model_definition_path @since(version: "24.03.4")\n    extra_mounts @since(version: "24.03.4") {\n      row_id\n      name\n      id\n    }\n    environ\n    resource_group\n    resource_slots\n    resource_opts\n    routings {\n      routing_id\n      session\n      traffic_ratio\n      endpoint\n      status\n      id\n    }\n    created_user_email @since(version: "23.09.8")\n    ...EndpointOwnerInfoFragment\n    ...EndpointStatusTagFragment\n    ...ChatUIModalFragment\n    id\n  }\n  endpoint_token_list(offset: $tokenListOffset, limit: $tokenListLimit, endpoint_id: $endpointId) {\n    total_count\n    items {\n      id\n      token\n      endpoint_id\n      domain\n      project\n      session_owner\n      created_at\n      valid_until\n    }\n  }\n}\n\nfragment ChatUIModalFragment on Endpoint {\n  endpoint_id\n  url\n  status\n}\n\nfragment EndpointOwnerInfoFragment on Endpoint {\n  id\n  created_user_email @since(version: "23.09.8")\n  session_owner_email @since(version: "23.09.8")\n}\n\nfragment EndpointStatusTagFragment on Endpoint {\n  id\n  status\n}\n\nfragment InferenceSessionErrorModalFragment on InferenceSessionError {\n  session_id\n  errors {\n    repr\n  }\n}\n'}}}();i.hash="058c82c68fd3f6c3b0e046601b574303";const t=i}}]);
//# sourceMappingURL=4753.0bd27315.chunk.js.map