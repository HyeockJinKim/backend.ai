"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[975,959],{77758:function(e,n,i){i.d(n,{Z:function(){return a}});var l=i(1413),t=i(36459),r=i(68957),o=(i(4519),i(2556)),a=function(e){var n,i=Object.assign({},((0,t.Z)(e),e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,o.jsx)(r.Z,(0,l.Z)({centered:null===(n=i.centered)||void 0===n||n,className:"bai-modal"},i))]})}},5959:function(e,n,i){i.r(n);var l=i(28499),t=(i(4519),i(2556));n.default=function(e){var n=e.text,i=e.children;return(0,t.jsx)(l.Z.Text,{copyable:!0,code:!0,children:n||i})}},96451:function(e,n,i){var l,t=i(82548),r=(i(4519),i(16980)),o=i(2556);n.Z=function(e){var n,a=e.endpointFrgmt,s=(0,r.useFragment)(void 0!==l?l:l=i(58393),a),d="default";switch(null===s||void 0===s||null===(n=s.status)||void 0===n?void 0:n.toUpperCase()){case"RUNNING":case"HEALTHY":d="success"}return(0,o.jsx)(t.Z,{color:d,children:null===s||void 0===s?void 0:s.status})}},14001:function(e,n,i){var l=i(1413),t=i(29439),r=i(87760),o=i(4519),a=i(2556),s=function(e,n){var i=e.image,o=e.style,s=void 0===o?{}:o,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",u=(0,r.dS)(),c=(0,t.Z)(u,2)[1].getImageIcon;return(0,a.jsx)("img",{src:c(i),style:(0,l.Z)({width:"1.5em",height:"1.5em"},s),alt:d})};n.Z=o.memo(s)},76587:function(e,n,i){var l,t=i(1413),r=i(29439),o=i(44925),a=i(43255),s=i(87760),d=i(50164),u=i(77758),c=i(99277),m=i(44036),g=i(57054),p=i(66653),v=(i(4519),i(81748)),f=i(16980),x=i(2556),h=["onRequestClose","endpointFrgmt"];n.Z=function(e){var n=e.onRequestClose,S=e.endpointFrgmt,y=(0,o.Z)(e,h),k=m.Z.useToken().token,Z=(0,s.Dj)(),j=(0,v.$G)().t,_=g.Z.useForm(),b=(0,r.Z)(_,1)[0],F=(0,f.useFragment)(void 0!==l?l:l=i(56326),S),T=(0,d.Y)({mutationFn:function(e){var n={to:e.desired_session_count};return(0,a.Lc)({method:"POST",url:"/services/".concat(null===F||void 0===F?void 0:F.endpoint_id,"/scale"),body:n,client:Z})}});return(0,x.jsx)(u.Z,(0,t.Z)((0,t.Z)({style:{zIndex:1e4},destroyOnClose:!0,onOk:function(e){b.validateFields().then((function(e){T.mutate(e,{onSuccess:function(){console.log("service updated"),n(!0)},onError:function(e){console.log(e)}})})).catch((function(e){console.log(e)}))},onCancel:function(){n()},okButtonProps:{loading:T.isLoading},title:j("modelService.EditModelService")},y),{},{children:(0,x.jsx)(c.Z,{direction:"row",align:"stretch",justify:"around",children:(0,x.jsx)(g.Z,{form:b,preserve:!1,validateTrigger:["onChange","onBlur"],initialValues:{desired_session_count:null===F||void 0===F?void 0:F.desired_session_count},style:{marginBottom:k.marginLG,marginTop:k.margin},children:(0,x.jsx)(g.Z.Item,{name:"desired_session_count",label:j("modelService.DesiredSessionCount"),rules:[{pattern:/^[0-9]+$/,message:j("modelService.OnlyAllowsNonNegativeIntegers")}],children:(0,x.jsx)(p.Z,{type:"number",min:0})})})})}))}},58393:function(e,n,i){i.r(n);var l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EndpointStatusTagFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null}],type:"Endpoint",abstractKey:null,hash:"3b31efa50b55edddcb210b59003dc479"};n.default=l},56326:function(e,n,i){i.r(n);var l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ModelServiceSettingModal_endpoint",selections:[{alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null}],type:"Endpoint",abstractKey:null,hash:"881f18324b27eba6ff0fcfb83ae241d2"};n.default=l},90146:function(e,n,i){i.r(n);var l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ServingRouteErrorModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,concreteType:"InferenceSessionErrorInfo",kind:"LinkedField",name:"errors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"repr",storageKey:null}],storageKey:null}],type:"InferenceSessionError",abstractKey:null,hash:"a1003e0f75387e665f4407909eea5ff6"};n.default=l},50164:function(e,n,i){i.d(n,{Y:function(){return r},h:function(){return t}});var l=i(87112),t=l.useQuery,r=l.useMutation},975:function(e,n,i){i.r(n),i.d(n,{default:function(){return ae}});var l,t,r=i(29439),o=i(5959),a=i(96451),s=i(1413),d=i(44925),u=i(43255),c=i(87760),m=i(50164),g=i(77758),p=i(99277),v=i(57054),f=i(32360),x=i(52176),h=i(66957),S=i(99517),y=i.n(S),k=i(4519),Z=i(81748),j=i(2556),_=["onRequestClose","onCancel","endpoint_id"],b=function(e){var n=e.onRequestClose,i=(e.onCancel,e.endpoint_id),l=(0,d.Z)(e,_),t=(0,Z.$G)().t,o=(0,c.Dj)(),a=v.Z.useForm(),S=(0,r.Z)(a,1)[0],k=(0,m.Y)({mutationFn:function(e){var n={valid_until:e.valid_until};return(0,u.Lc)({method:"POST",url:"/services/".concat(i,"/token"),body:n,client:o})}});return(0,j.jsx)(g.Z,(0,s.Z)((0,s.Z)({},l),{},{destroyOnClose:!0,onOk:function(e){S.validateFields().then((function(e){var i=e.datetime.unix();k.mutate({valid_until:i},{onSuccess:function(){f.ZP.success(t("modelService.TokenGenerated")),n(!0)},onError:function(e){var n;null!==e&&void 0!==e&&null!==(n=e.message)&&void 0!==n&&n.includes("valid_until is older than now")?f.ZP.error(t("modelService.TokenExpiredDateError")):(f.ZP.error(t("modelService.TokenGenerationFailed")),console.log(e))}})}))},onCancel:function(){n()},okText:t("modelService.Generate"),confirmLoading:k.isLoading,centered:!0,title:t("modelService.GenerateNewToken"),children:(0,j.jsx)(v.Z,{preserve:!1,labelCol:{span:10},initialValues:{datetime:y()().add(24,"hour")},validateTrigger:["onChange","onBlur"],style:{maxWidth:500},form:S,children:(0,j.jsxs)(p.Z,{direction:"column",gap:"sm",align:"stretch",children:[(0,j.jsx)(x.Z,{type:"info",showIcon:!0,message:t("modelService.TokenExpiredDateHelp")}),(0,j.jsx)(p.Z,{direction:"row",align:"stretch",justify:"around",children:(0,j.jsx)(v.Z.Item,{name:"datetime",label:t("modelService.ExpiredDate"),rules:[{type:"object",required:!0,message:t("modelService.PleaseSelectTime")},function(){return{validator:function(e,n){return n.isAfter(y()())?Promise.resolve():Promise.reject(new Error(t("modelService.TokenExpiredDateError")))}}}],children:(0,j.jsx)(h.Z,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",style:{width:200}})})})]})})}))},F=i(14001),T=i(76587),I=i(44036),K=i(28499),E=i(227),L=["type","size","showIcon","showUnit","showTooltip"],w=function(e){var n=e.size,i=void 0===n?16:n,l=e.children;return(0,j.jsx)("mwc-icon",{style:{"--mdc-icon-size":"".concat(i+2,"px"),width:i,height:i},children:l})},C=function(e){var n,i,l,t=e.type,r=e.size,o=void 0===r?16:r,a=(e.showIcon,e.showUnit,e.showTooltip),u=void 0===a||a,c=(0,d.Z)(e,L),m=(0,Z.$G)().t,g={cpu:[(0,j.jsx)(w,{size:o,children:"developer_board"}),m("session.core")],mem:[(0,j.jsx)(w,{size:o,children:"memory"}),"GiB"],"cuda.device":["/resources/icons/file_type_cuda.svg","GPU"],"cuda.shares":["/resources/icons/file_type_cuda.svg","FGPU"],"rocm.device":["/resources/icons/ROCm.png","GPU"],"tpu.device":[(0,j.jsx)(w,{size:o,children:"view_module"}),"TPU"],"ipu.device":[(0,j.jsx)(w,{size:o,children:"view_module"}),"IPU"],"atom.device":["/resources/icons/rebel.svg","ATOM"],"warboy.device":["/resources/icons/furiosa.svg","Warboy"]};return(0,j.jsx)(E.Z,{title:u?"".concat(t," (").concat(g[t][1],")"):void 0,children:"string"===typeof(null===(n=g[t])||void 0===n?void 0:n[0])?(0,j.jsx)("img",(0,s.Z)((0,s.Z)({},c),{},{style:(0,s.Z)({height:o},c.style||{}),src:(null===(i=g[t])||void 0===i?void 0:i[0])||"",alt:t})):(0,j.jsx)("div",{style:{width:16,height:16},children:null===(l=g[t])||void 0===l?void 0:l[0]})})},P=function(e){var n=e.type,i=e.value,l=e.extra,t=e.opts,r=(0,Z.$G)().t,o=I.Z.useToken().token,a={cpu:r("session.core"),mem:"GiB","cuda.device":"GPU","cuda.shares":"FGPU","rocm.device":"GPU","tpu.device":"TPU","ipu.device":"IPU","atom.device":"ATOM","warboy.device":"Warboy"};return(0,j.jsxs)(p.Z,{direction:"row",gap:"xxs",children:[(0,j.jsx)(C,{type:n}),(0,j.jsx)(K.Z.Text,{children:"GiB"===a[n]?(0,u.PZ)(i+"b","g",2).numberFixed:"FGPU"===a[n]?parseFloat(i).toFixed(2):i}),(0,j.jsx)(K.Z.Text,{type:"secondary",children:a[n]}),"mem"===n&&(null===t||void 0===t?void 0:t.shmem)&&(0,j.jsxs)(K.Z.Text,{type:"secondary",style:{fontSize:o.fontSizeSM},children:["(SHM: ",(0,u.PZ)(t.shmem+"b","g",2).numberFixed,"GiB)"]}),l]})},R=i(92171),G=i(93448),O=i(16980),M=["onRequestClose","onCancel","inferenceSessionErrorFrgmt"],U=function(e){var n=e.onRequestClose,t=(e.onCancel,e.inferenceSessionErrorFrgmt),r=(0,d.Z)(e,M),a=(0,Z.$G)().t,u=(0,O.useFragment)(void 0!==l?l:l=i(90146),t);return(0,j.jsx)(g.Z,(0,s.Z)((0,s.Z)({centered:!0,title:a("modelService.ServingRouteErrorModalTitle"),onCancel:function(){n()},footer:[(0,j.jsx)(R.ZP,{onClick:function(){n()},children:a("button.Close")})]},r),{},{children:(0,j.jsxs)(G.Z,{bordered:!0,column:{xxl:1,xl:1,lg:1,md:1,sm:1,xs:1},labelStyle:{minWidth:100},style:{marginTop:20},children:[(0,j.jsx)(G.Z.Item,{label:a("modelService.SessionId"),children:(0,j.jsx)(o.default,{children:null===u||void 0===u?void 0:u.session_id})}),(0,j.jsx)(G.Z.Item,{label:a("dialog.error.Error"),children:null===u||void 0===u?void 0:u.errors[0].repr})]})}))},D=i(61502),z=i(14644),N=function(e){var n=e.uuid,i=e.clickable,l=(0,c.qh)(),t=(0,u.y3)(),r=(0,D.useWebComponentInfo)().moveTo,o=(0,m.h)({queryKey:["VFolderSelectQuery"],queryFn:function(){return t({method:"GET",url:"/folders?group_id=".concat(l.id)})},staleTime:1e3,suspense:!0}).data,a=null===o||void 0===o?void 0:o.find((function(e){return e.id===n.replaceAll("-","")}));return a&&(i?(0,j.jsxs)(K.Z.Link,{onClick:function(){r("/data",{folder:a.name})},children:[(0,j.jsx)(z.Z,{})," ",a.name]}):(0,j.jsxs)("div",{children:[(0,j.jsx)(z.Z,{})," ",a.name]}))},q=i(43971),$=i(72842),A=i(43596),V=i(83861),B=i(31662),Y=i(32064),H=i(20558),Q=i(56713),W=i(60284),J=i(53066),X=i(82548),ee=i(39883),ne=i(83007),ie=i(26524),le=i(32048),te=i.n(le),re=i(12674),oe=function(e,n){var i=y()(e.created_at),l=y()(n.created_at);return i.diff(l)},ae=function(){var e=(0,Z.$G)().t,n=I.Z.useToken().token,l=(0,c.Dj)(),s=(0,re.s0)(),d=(0,re.UO)().serviceId,g=(0,c.Kr)("initial-fetch"),v=(0,r.Z)(g,2),f=v[0],x=v[1],h=(0,k.useTransition)(),S=(0,r.Z)(h,2),_=S[0],L=S[1],w=(0,k.useTransition)(),C=(0,r.Z)(w,2),M=C[0],D=C[1],z=(0,k.useState)(null),le=(0,r.Z)(z,2),ae=le[0],se=le[1],de=(0,k.useState)(!1),ue=(0,r.Z)(de,2),ce=ue[0],me=ue[1],ge=(0,k.useState)(!1),pe=(0,r.Z)(ge,2),ve=pe[0],fe=pe[1],xe=(0,k.useState)({current:1,pageSize:100}),he=(0,r.Z)(xe,1)[0],Se=(0,O.useLazyLoadQuery)(void 0!==t?t:t=i(4464),{tokenListOffset:(he.current-1)*he.pageSize,tokenListLimit:he.pageSize,endpointId:d||""},{fetchPolicy:"initial-fetch"===f?"store-and-network":"network-only",fetchKey:f}),ye=Se.endpoint,ke=Se.endpoint_token_list,Ze=(0,m.Y)((function(){if(ye)return(0,u.Lc)({method:"POST",url:"/services/".concat(ye.endpoint_id,"/errors/clear"),client:l})})),je=function(){var e="default";switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toUpperCase()){case"HEALTHY":e="success";break;case"PROVISIONING":e="processing";break;case"UNHEALTHY":e="warning"}return e},_e=JSON.parse((null===ye||void 0===ye?void 0:ye.resource_opts)||"{}");return(0,j.jsxs)(p.Z,{direction:"column",align:"stretch",style:{margin:n.marginSM},gap:"sm",children:[(0,j.jsx)(W.Z,{items:[{title:e("modelService.Services"),onClick:function(e){e.preventDefault(),s("/serving")},href:"/serving"},{title:e("modelService.RoutingInfo")}]}),(0,j.jsxs)(p.Z,{direction:"row",justify:"between",children:[(0,j.jsx)(K.Z.Title,{level:3,style:{margin:0},children:(null===ye||void 0===ye?void 0:ye.name)||""}),(0,j.jsxs)(p.Z,{gap:"xxs",children:[((null===ye||void 0===ye?void 0:ye.retries)||0)>0?(0,j.jsx)(E.Z,{title:e("modelService.ClearErrors"),children:(0,j.jsx)(R.ZP,{loading:M,icon:(0,j.jsx)(q.Z,{}),onClick:function(){D((function(){Ze.mutate(void 0,{onSuccess:function(){return L((function(){x()}))}})}))}})}):(0,j.jsx)(j.Fragment,{}),(0,j.jsx)(R.ZP,{loading:_,icon:(0,j.jsx)($.Z,{}),onClick:function(){L((function(){x()}))},children:e("button.Refresh")})]})]}),(0,j.jsx)(J.Z,{title:e("modelService.ServiceInfo"),extra:(0,j.jsx)(R.ZP,{type:"primary",icon:(0,j.jsx)(A.Z,{}),disabled:((null===ye||void 0===ye?void 0:ye.desired_session_count)||0)<0,onClick:function(){me(!0)},children:e("button.Edit")}),children:(0,j.jsxs)(G.Z,{bordered:!0,column:{xxl:3,xl:3,lg:2,md:1,sm:1,xs:1},style:{backgroundColor:n.colorBgBase},children:[(0,j.jsx)(G.Z.Item,{label:e("modelService.EndpointName"),children:(0,j.jsx)(K.Z.Text,{copyable:!0,children:null===ye||void 0===ye?void 0:ye.name})}),(0,j.jsx)(G.Z.Item,{label:e("modelService.Status"),children:(0,j.jsx)(a.Z,{endpointFrgmt:ye})}),(0,j.jsx)(G.Z.Item,{label:e("modelService.EndpointId"),children:null===ye||void 0===ye?void 0:ye.endpoint_id}),(0,j.jsx)(G.Z.Item,{label:e("modelService.SessionOwner"),children:l.email||""}),(0,j.jsx)(G.Z.Item,{label:e("modelService.DesiredSessionCount"),children:null===ye||void 0===ye?void 0:ye.desired_session_count}),(0,j.jsx)(G.Z.Item,{label:e("modelService.ServiceEndpoint"),children:null!==ye&&void 0!==ye&&ye.url?(0,j.jsx)(K.Z.Text,{copyable:!0,children:null===ye||void 0===ye?void 0:ye.url}):(0,j.jsx)(X.Z,{children:e("modelService.NoServiceEndpoint")})}),(0,j.jsx)(G.Z.Item,{label:e("modelService.OpenToPublic"),children:null!==ye&&void 0!==ye&&ye.open_to_public?(0,j.jsx)(V.Z,{}):(0,j.jsx)(B.Z,{})}),(0,j.jsx)(G.Z.Item,{label:e("modelService.resources"),span:2,children:(0,j.jsxs)(p.Z,{direction:"row",wrap:"wrap",gap:"md",children:[(0,j.jsx)(E.Z,{title:e("session.ResourceGroup"),children:(0,j.jsx)(X.Z,{children:null===ye||void 0===ye?void 0:ye.resource_group})}),te().map(JSON.parse((null===ye||void 0===ye?void 0:ye.resource_slots)||"{}"),(function(e,n){return(0,j.jsx)(P,{type:n,value:e,opts:_e},n)}))]})}),(0,j.jsx)(G.Z.Item,{label:e("session.launcher.ModelStorage"),children:(0,j.jsx)(k.Suspense,{fallback:(0,j.jsx)(ee.Z,{indicator:(0,j.jsx)(Y.Z,{spin:!0})}),children:(null===ye||void 0===ye?void 0:ye.model)&&(0,j.jsx)(N,{uuid:null===ye||void 0===ye?void 0:ye.model,clickable:!1})})}),(0,j.jsx)(G.Z.Item,{label:e("modelService.Image"),span:2,children:(null===ye||void 0===ye?void 0:ye.image)&&(0,j.jsxs)(p.Z,{direction:"row",gap:"xs",children:[(0,j.jsx)(F.Z,{image:ye.image}),(0,j.jsx)(o.default,{children:ye.image})]})})]})}),(0,j.jsx)(J.Z,{title:e("modelService.GeneratedTokens"),extra:(0,j.jsx)(R.ZP,{type:"primary",icon:(0,j.jsx)(H.Z,{}),onClick:function(){fe(!0)},children:e("modelService.GenerateToken")}),children:(0,j.jsx)(ne.Z,{scroll:{x:"max-content"},rowKey:"token",columns:[{title:"#",fixed:"left",render:function(e,n,i){return++i},showSorterTooltip:!1},{title:"Token",dataIndex:"token",fixed:"left",render:function(e,n){return(0,j.jsx)(K.Z.Text,{ellipsis:!0,copyable:!0,style:{width:150},children:n.token})}},{title:"Status",render:function(e,n){var i=y().utc(n.valid_until).isBefore();return(0,j.jsx)(X.Z,{color:i?"red":"green",children:i?"Expired":"Valid"})}},{title:"Valid Until",dataIndex:"valid_until",render:function(e,n){return(0,j.jsx)("span",{children:n.valid_until?y().utc(n.valid_until).tz().format("ll LTS"):"-"})},defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:oe},{title:"Created at",dataIndex:"created_at",render:function(e,n){return(0,j.jsx)("span",{children:y()(n.created_at).format("ll LT")})},defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:oe}],pagination:!1,dataSource:(0,u.uU)(null===ke||void 0===ke?void 0:ke.items),bordered:!0})}),(0,j.jsx)(J.Z,{title:e("modelService.RoutesInfo"),children:(0,j.jsx)(ne.Z,{scroll:{x:"max-content"},columns:[{title:e("modelService.RouteId"),dataIndex:"routing_id",fixed:"left"},{title:e("modelService.SessionId"),dataIndex:"session"},{title:e("modelService.Status"),render:function(e,i){var l=i.session,t=i.status;return t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(X.Z,{color:je(t),style:{marginRight:0},children:t.toUpperCase()},t),"FAILED_TO_START"===t&&(0,j.jsx)(ie.Z,{children:(0,j.jsx)(R.ZP,{size:"small",type:"text",icon:(0,j.jsx)(Q.Z,{}),style:{color:n.colorTextSecondary},onClick:function(){return l&&function(e){if(null!==ye){var n=ye.errors.find((function(n){var i=n.session_id;return e===i}));se(n||null)}}(l)}})})]})}},{title:e("modelService.TrafficRatio"),dataIndex:"traffic_ratio"}],pagination:!1,dataSource:null===ye||void 0===ye?void 0:ye.routings,rowKey:"routing_id",bordered:!0})}),(0,j.jsx)(U,{open:!!ae,inferenceSessionErrorFrgmt:ae,onRequestClose:function(){return se(null)}}),(0,j.jsx)(T.Z,{open:ce,onRequestClose:function(e){me(!1),e&&L((function(){x()}))},endpointFrgmt:ye}),(0,j.jsx)(b,{open:ve,onRequestClose:function(e){fe(!1),e&&L((function(){x()}))},endpoint_id:(null===ye||void 0===ye?void 0:ye.endpoint_id)||""})]})}},4464:function(e,n,i){i.r(n);var l=function(){var e={defaultValue:null,kind:"LocalArgument",name:"endpointId"},n={defaultValue:null,kind:"LocalArgument",name:"tokenListLimit"},i={defaultValue:null,kind:"LocalArgument",name:"tokenListOffset"},l={kind:"Variable",name:"endpoint_id",variableName:"endpointId"},t=[l],r={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"open_to_public",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"retries",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"model",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"model_mount_destiation",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"resource_group",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"resource_slots",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"resource_opts",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"routing_id",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"session",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"traffic_ratio",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"endpoint",storageKey:null},Z={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},_={alias:null,args:[l,{kind:"Variable",name:"limit",variableName:"tokenListLimit"},{kind:"Variable",name:"offset",variableName:"tokenListOffset"}],concreteType:"EndpointTokenList",kind:"LinkedField",name:"endpoint_token_list",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null},{alias:null,args:null,concreteType:"EndpointToken",kind:"LinkedField",name:"items",plural:!0,selections:[j,{alias:null,args:null,kind:"ScalarField",name:"token",storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"project",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_owner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"valid_until",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[e,n,i],kind:"Fragment",metadata:null,name:"RoutingListPageQuery",selections:[{alias:null,args:t,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[r,o,a,s,d,u,{alias:null,args:null,concreteType:"InferenceSessionError",kind:"LinkedField",name:"errors",plural:!0,selections:[c,{args:null,kind:"FragmentSpread",name:"ServingRouteErrorModalFragment"}],storageKey:null},m,g,p,v,f,x,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[h,S,y,k,Z],storageKey:null},{args:null,kind:"FragmentSpread",name:"EndpointStatusTagFragment"},{args:null,kind:"FragmentSpread",name:"ModelServiceSettingModal_endpoint"}],storageKey:null},_],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,i,n],kind:"Operation",name:"RoutingListPageQuery",selections:[{alias:null,args:t,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[r,o,a,s,d,u,{alias:null,args:null,concreteType:"InferenceSessionError",kind:"LinkedField",name:"errors",plural:!0,selections:[c,{alias:null,args:null,concreteType:"InferenceSessionErrorInfo",kind:"LinkedField",name:"errors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"repr",storageKey:null}],storageKey:null}],storageKey:null},m,g,p,v,f,x,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[h,S,y,k,Z,j],storageKey:null},j,Z],storageKey:null},_]},params:{cacheID:"dcb559f96ebdb88ea48eb267aae5adf8",id:null,metadata:{},name:"RoutingListPageQuery",operationKind:"query",text:"query RoutingListPageQuery(\n  $endpointId: UUID!\n  $tokenListOffset: Int!\n  $tokenListLimit: Int!\n) {\n  endpoint(endpoint_id: $endpointId) {\n    name\n    endpoint_id\n    image\n    desired_session_count\n    url\n    open_to_public\n    errors {\n      session_id\n      ...ServingRouteErrorModalFragment\n    }\n    retries\n    model\n    model_mount_destiation\n    resource_group\n    resource_slots\n    resource_opts\n    routings {\n      routing_id\n      session\n      traffic_ratio\n      endpoint\n      status\n      id\n    }\n    ...EndpointStatusTagFragment\n    ...ModelServiceSettingModal_endpoint\n    id\n  }\n  endpoint_token_list(offset: $tokenListOffset, limit: $tokenListLimit, endpoint_id: $endpointId) {\n    total_count\n    items {\n      id\n      token\n      endpoint_id\n      domain\n      project\n      session_owner\n      created_at\n      valid_until\n    }\n  }\n}\n\nfragment EndpointStatusTagFragment on Endpoint {\n  id\n  status\n}\n\nfragment ModelServiceSettingModal_endpoint on Endpoint {\n  endpoint_id\n  desired_session_count\n}\n\nfragment ServingRouteErrorModalFragment on InferenceSessionError {\n  session_id\n  errors {\n    repr\n  }\n}\n"}}}();l.hash="4c9244fddb4b985f78d843419d34f832",n.default=l}}]);
//# sourceMappingURL=975.296511b8.chunk.js.map