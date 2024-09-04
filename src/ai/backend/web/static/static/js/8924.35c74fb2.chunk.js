"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[8924],{7075:(e,l,n)=>{n.d(l,{A:()=>d});var t=n(29871),i=n(50840),a=n(24128),o=n(45901),r=n.n(o),s=(n(76998),n(23446));const d=e=>{let{title:l,valueLabel:n,percent:o=0,width:d,strokeColor:u,labelStyle:c,size:p="small"}=e;const{token:g}=i.A.useToken(),v="small"===p?g.fontSizeSM:"middle"===p?g.fontSize:g.fontSizeLG;return(0,s.jsxs)(t.A,{style:{padding:1,border:`1px solid ${g.colorBorder}`,borderRadius:3,backgroundColor:g.colorBgContainerDisabled,...r().isNumber(d)||r().isString(d)?{width:d}:{flex:1}},direction:"column",align:"stretch",children:[(0,s.jsx)(t.A,{style:{height:"100%",width:`${o>100?100:o}%`,position:"absolute",left:0,top:0,backgroundColor:null!==u&&void 0!==u?u:g.colorSuccess,opacity:.7,zIndex:0,overflow:"hidden"}}),(0,s.jsxs)(t.A,{direction:"row",justify:"between",children:[(0,s.jsx)(a.A.Text,{style:{fontSize:v,...c},children:l}),(0,s.jsx)(a.A.Text,{style:{fontSize:v,...c},children:n})]})]})}},5621:(e,l,n)=>{n.d(l,{A:()=>d});var t=n(29871),i=n(48713),a=n(45901),o=n.n(a),r=n(76998),s=n(23446);const d=e=>{let l,{values:n=[]}=e;return 0===n.length?null:(l=n[0]&&("string"===typeof n[0]||r.isValidElement(n[0]))?n.map((e=>({label:e,color:"blue"}))):n,(0,s.jsx)(t.A,{direction:"row",children:o().map(l,((e,n)=>(0,s.jsx)(i.A,{style:o().last(l)===e?void 0:{margin:0,marginRight:-1},color:e.color,children:e.label},n)))}))}},8469:(e,l,n)=>{n.d(l,{Ay:()=>m,s5:()=>v,uJ:()=>p});var t=n(30032),i=n(16162),a=n(96495),o=n(29871),r=n(50840),s=n(24128),d=n(20307),u=(n(76998),n(77678)),c=n(23446);const p={"cuda.device":"GPU","cuda.shares":"FGPU","rocm.device":"GPU","tpu.device":"TPU","ipu.device":"IPU","atom.device":"ATOM","atom-plus.device":"ATOM+","warboy.device":"Warboy","hyperaccel-lpu.device":"Hyperaccel LPU"},g=e=>{let{size:l=16,children:n}=e;return(0,c.jsx)("mwc-icon",{style:{"--mdc-icon-size":`${l+2}px`,width:l,height:l},children:n})},v=e=>{var l,n,t;let{type:i,size:a=16,showIcon:r=!0,showUnit:s=!0,showTooltip:p=!0,...v}=e;const{t:m}=(0,u.Bd)(),y={cpu:[(0,c.jsx)(g,{size:a,children:"developer_board"}),m("session.core")],mem:[(0,c.jsx)(g,{size:a,children:"memory"}),"GiB"],"cuda.device":["/resources/icons/file_type_cuda.svg","GPU"],"cuda.shares":["/resources/icons/file_type_cuda.svg","FGPU"],"rocm.device":["/resources/icons/rocm.svg","GPU"],"tpu.device":[(0,c.jsx)(g,{size:a,children:"view_module"}),"TPU"],"ipu.device":[(0,c.jsx)(g,{size:a,children:"view_module"}),"IPU"],"atom.device":["/resources/icons/rebel.svg","ATOM"],"atom-plus.device":["/resources/icons/rebel.svg","ATOM+"],"warboy.device":["/resources/icons/furiosa.svg","Warboy"],"hyperaccel-lpu.device":["/resources/icons/npu_generic.svg","Hyperaccel LPU"]},x="string"===typeof(null===(l=y[i])||void 0===l?void 0:l[0])?(0,c.jsx)("img",{...v,style:{height:a,alignSelf:"center",...v.style||{}},src:(null===(n=y[i])||void 0===n?void 0:n[0])||"",alt:i}):(0,c.jsx)(o.A,{style:{width:16,height:16},children:(null===(t=y[i])||void 0===t?void 0:t[0])||i});return p?(0,c.jsx)(d.A,{title:i,children:x}):(0,c.jsx)(o.A,{style:{pointerEvents:"none"},children:x})},m=e=>{var l,n,d,u,p;let{type:g,value:m,extra:y,opts:x,hideTooltip:h=!1}=e;const{token:b}=r.A.useToken(),A=(0,a.Nw)(),[f]=(0,i.Hv)(A||void 0);return(0,c.jsxs)(o.A,{direction:"row",gap:"xxs",children:[null!==f&&void 0!==f&&f[g]?(0,c.jsx)(v,{type:g,showTooltip:!h}):g,(0,c.jsx)(s.A.Text,{children:null!==f&&void 0!==f&&null!==(l=f[g])&&void 0!==l&&l.number_format.binary?Number(null===(n=(0,t.Js)(m,"g",3,!0))||void 0===n?void 0:n.numberFixed).toString():((null===f||void 0===f||null===(d=f[g])||void 0===d?void 0:d.number_format.round_length)||0)>0?parseFloat(m).toFixed(2):m}),(0,c.jsx)(s.A.Text,{type:"secondary",children:(null===f||void 0===f||null===(u=f[g])||void 0===u?void 0:u.display_unit)||""}),"mem"===g&&null!==x&&void 0!==x&&x.shmem&&(null===x||void 0===x?void 0:x.shmem)>0?(0,c.jsxs)(s.A.Text,{type:"secondary",style:{fontSize:b.fontSizeSM},children:["(SHM: ",null===(p=(0,t.Js)(x.shmem+"b","g",2,!0))||void 0===p?void 0:p.numberFixed,"GiB)"]}):null,y]})}},34680:(e,l,n)=>{n.d(l,{A:()=>v});var t=n(25339),i=n(62863),a=n(50840),o=n(65080),r=n(24377),s=n(87627),d=n(45901),u=n.n(d),c=n(76998),p=n(77678),g=n(23446);const v=e=>{let{open:l,onRequestClose:n,columns:d,displayedColumnKeys:v,...m}=e;const y=(0,c.useRef)(null),{t:x}=(0,p.Bd)(),{token:h}=a.A.useToken(),b=d.map((e=>{return"string"===typeof e.title?{label:e.title,value:u().toString(e.key)}:"object"===typeof e.title&&"props"in e.title?{label:(l=e.title,c.Children.map(l.props.children,(e=>{if("string"===typeof e)return e}))),value:u().toString(e.key)}:{label:void 0,value:u().toString(e.key)};var l}));return(0,g.jsx)(t.A,{title:x("table.SettingTable"),open:l,destroyOnClose:!0,centered:!0,onOk:()=>{var e;null===(e=y.current)||void 0===e||e.validateFields().then((e=>{n(e)})).catch((()=>{}))},onCancel:()=>{n()},...m,children:(0,g.jsxs)(o.A,{ref:y,preserve:!1,initialValues:{selectedColumnKeys:v||b.map((e=>e.value))},layout:"vertical",children:[(0,g.jsx)(o.A.Item,{name:"searchInput",label:x("table.SelectColumnToDisplay"),style:{marginBottom:0},children:(0,g.jsx)(r.A,{prefix:(0,g.jsx)(i.A,{}),style:{marginBottom:h.marginSM},placeholder:x("table.SearchTableColumn")})}),(0,g.jsx)(o.A.Item,{noStyle:!0,shouldUpdate:(e,l)=>e.searchInput!==l.searchInput,children:e=>{let{getFieldValue:l}=e;const n=l("searchInput")?u().toLower(l("searchInput")):void 0,t=b.map((e=>u().toLower(u().toString(e.label)).includes(n||"")?e:{...e,style:{display:"none"}}));return(0,g.jsx)(o.A.Item,{name:"selectedColumnKeys",style:{height:220,overflowY:"auto"},children:(0,g.jsx)(s.A.Group,{options:t,style:{flexDirection:"column"}})})}})]})})}},30853:(e,l,n)=>{n.r(l),n.d(l,{default:()=>i});const t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AgentDetailModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_stat",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"available_slots",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"occupied_slots",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cpu_cur_pct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mem_cur_bytes",storageKey:null}],type:"Agent",abstractKey:null,hash:"cb343a0290034803cca4c2b82a1c1b68"},i=t},80508:(e,l,n)=>{n.r(l),n.d(l,{default:()=>i});const t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"filter"},l={defaultValue:null,kind:"LocalArgument",name:"limit"},n={defaultValue:null,kind:"LocalArgument",name:"offset"},t={defaultValue:null,kind:"LocalArgument",name:"order"},i={defaultValue:null,kind:"LocalArgument",name:"status"},a=[{kind:"Variable",name:"filter",variableName:"filter"},{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"offset",variableName:"offset"},{kind:"Variable",name:"order",variableName:"order"},{kind:"Variable",name:"status",variableName:"status"}],o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"addr",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"architecture",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"region",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"compute_plugins",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"first_contact",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"lost_at",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"status_changed",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"live_stat",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"cpu_cur_pct",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"mem_cur_bytes",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"available_slots",storageKey:null},A={alias:null,args:null,kind:"ScalarField",name:"occupied_slots",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"scaling_group",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"schedulable",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null};return{fragment:{argumentDefinitions:[e,l,n,t,i],kind:"Fragment",metadata:null,name:"AgentListQuery",selections:[{alias:null,args:a,concreteType:"AgentList",kind:"LinkedField",name:"agent_list",plural:!1,selections:[{alias:null,args:null,concreteType:"Agent",kind:"LinkedField",name:"items",plural:!0,selections:[o,r,s,d,u,c,p,g,v,m,y,x,h,b,A,f,j,{args:null,kind:"FragmentSpread",name:"AgentDetailModalFragment"},{args:null,kind:"FragmentSpread",name:"AgentSettingModalFragment"}],storageKey:null},S],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[l,n,e,i,t],kind:"Operation",name:"AgentListQuery",selections:[{alias:null,args:a,concreteType:"AgentList",kind:"LinkedField",name:"agent_list",plural:!1,selections:[{alias:null,args:null,concreteType:"Agent",kind:"LinkedField",name:"items",plural:!0,selections:[o,r,s,d,u,c,p,g,v,m,y,x,h,b,A,f,j],storageKey:null},S],storageKey:null}]},params:{cacheID:"e1a551c0261ce59a4b187a3bbb29b86b",id:null,metadata:{},name:"AgentListQuery",operationKind:"query",text:"query AgentListQuery(\n  $limit: Int!\n  $offset: Int!\n  $filter: String\n  $status: String\n  $order: String\n) {\n  agent_list(limit: $limit, offset: $offset, filter: $filter, status: $status, order: $order) {\n    items {\n      id\n      status\n      version\n      addr\n      architecture\n      region\n      compute_plugins\n      first_contact\n      lost_at\n      status_changed\n      live_stat\n      cpu_cur_pct\n      mem_cur_bytes\n      available_slots\n      occupied_slots\n      scaling_group\n      schedulable\n      ...AgentDetailModalFragment\n      ...AgentSettingModalFragment\n    }\n    total_count\n  }\n}\n\nfragment AgentDetailModalFragment on Agent {\n  id\n  live_stat\n  available_slots\n  occupied_slots\n  cpu_cur_pct\n  mem_cur_bytes\n}\n\nfragment AgentSettingModalFragment on Agent {\n  id\n  schedulable\n}\n"}}}();t.hash="1d6c6a390aad71e4b7815a623ca61d86";const i=t},81157:(e,l,n)=>{n.r(l),n.d(l,{default:()=>i});const t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AgentSettingModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"schedulable",storageKey:null}],type:"Agent",abstractKey:null,hash:"303f8ee06508c3b28511ab1a24a305d5"},i=t},69130:(e,l,n)=>{n.r(l),n.d(l,{default:()=>i});const t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"props"}],l=[{alias:null,args:[{kind:"Variable",name:"id",variableName:"id"},{kind:"Variable",name:"props",variableName:"props"}],concreteType:"ModifyAgent",kind:"LinkedField",name:"modify_agent",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ok",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"msg",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"AgentSettingModalMutation",selections:l,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"AgentSettingModalMutation",selections:l},params:{cacheID:"1a9e43d4bc6e78f3949d1a2a397ff00e",id:null,metadata:{},name:"AgentSettingModalMutation",operationKind:"mutation",text:"mutation AgentSettingModalMutation(\n  $id: String!\n  $props: ModifyAgentInput!\n) {\n  modify_agent(id: $id, props: $props) {\n    ok\n    msg\n  }\n}\n"}}}();t.hash="13b2a6a91c7f08bbced5fde155ded60e";const i=t},61787:(e,l,n)=>{n.d(l,{w4:()=>o});var t=n(45901),i=n.n(t),a=n(76998);n(3606),n(58346);const o=e=>{const[l,n]=(0,a.useState)(e);return{baiPaginationOption:{limit:l.pageSize,offset:l.current>1?(l.current-1)*l.pageSize:0},tablePaginationOption:{pageSize:l.pageSize,current:l.current},setTablePaginationOption:e=>{i().isEqual(e,l)||n((l=>({...l,...e})))}}}},88924:(e,l,n)=>{n.r(l),n.d(l,{default:()=>Ae});var t,i=n(30032),a=n(83468),o=n(16162),r=n(61787),s=n(90660),d=n(25339),u=n(7075),c=n(29871),p=n(50840),g=n(7518),v=n(9788),m=n(24128),y=n(45901),x=n.n(y),h=n(76998),b=n(77678),A=n(3606),f=n(23446);const j=e=>{var l,a,r,s,y,h,j,S,_,k,F,w,T,C,L,z,K;let{agentDetailModalFrgmt:M=null,onRequestClose:I,...O}=e;const{t:$}=(0,b.Bd)(),{token:D}=p.A.useToken(),[E]=(0,o.Hv)(),P=(0,A.useFragment)(void 0!==t?t:t=n(30853),M),N=JSON.parse((null===P||void 0===P?void 0:P.live_stat)||"{}"),V=JSON.parse((null===P||void 0===P?void 0:P.available_slots)||"{}");return(0,f.jsx)(d.A,{...O,centered:!0,title:`${$("agent.DetailedInformation")}: ${null===P||void 0===P?void 0:P.id}`,onCancel:I,destroyOnClose:!0,footer:null,children:(0,f.jsxs)(c.A,{direction:"column",align:"stretch",gap:"md",children:[(0,f.jsxs)(g.A,{gutter:[24,24],children:[(0,f.jsx)(v.A,{xs:24,sm:12,children:null!==N&&void 0!==N&&null!==(l=N.devices)&&void 0!==l&&l.cpu_util?(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",align:"stretch",children:[(0,f.jsx)(m.A.Title,{level:5,style:{marginTop:0},children:null===E||void 0===E||null===(a=E.cpu)||void 0===a?void 0:a.human_readable_name}),x().map(null===N||void 0===N||null===(r=N.devices)||void 0===r?void 0:r.cpu_util,((e,l)=>{var n;return(0,f.jsxs)(c.A,{justify:"between",children:[(0,f.jsxs)(m.A.Text,{type:"secondary",style:{flex:.5},children:[null===E||void 0===E||null===(n=E.cpu)||void 0===n?void 0:n.human_readable_name,l]},l),(0,f.jsx)(u.A,{percent:null===e||void 0===e?void 0:e.pct,valueLabel:(null===e||void 0===e?void 0:e.pct)+"%"})]})}))]}):null}),(0,f.jsxs)(v.A,{xs:24,sm:12,children:[null!==V&&void 0!==V&&V.mem?(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",align:"stretch",children:[(0,f.jsx)(m.A.Title,{level:5,style:{marginTop:0},children:null===E||void 0===E||null===(s=E.mem)||void 0===s?void 0:s.human_readable_name}),(0,f.jsx)(u.A,{percent:null!==(y=(null!==(h=null===(j=(0,i.Js)(x().toString(null===P||void 0===P?void 0:P.mem_cur_bytes),"g"))||void 0===j?void 0:j.number)&&void 0!==h?h:0)/(null!==(S=null===(_=(0,i.Js)(null===V||void 0===V?void 0:V.mem,"g"))||void 0===_?void 0:_.number)&&void 0!==S?S:0)*100)&&void 0!==y?y:0,valueLabel:`${null===(k=(0,i.Js)(x().toString(null===P||void 0===P?void 0:P.mem_cur_bytes),"g"))||void 0===k?void 0:k.numberUnit}iB / ${null===(F=(0,i.Js)(null===V||void 0===V?void 0:V.mem,"g"))||void 0===F?void 0:F.numberUnit}iB`})]}):null,null!==N&&void 0!==N&&N.node?(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",align:"start",children:[(0,f.jsx)(m.A.Title,{level:5,style:{marginTop:0},children:$("session.launcher.Network")}),(0,f.jsxs)(c.A,{gap:"xl",children:[(0,f.jsx)(m.A.Text,{children:"TX:"}),(0,f.jsxs)(m.A.Text,{children:[null===(w=(0,i.Js)(null===N||void 0===N||null===(T=N.node)||void 0===T||null===(C=T.net_tx)||void 0===C?void 0:C.current,"m",1))||void 0===w?void 0:w.numberUnit,"iB"]})]}),(0,f.jsxs)(c.A,{gap:"xl",children:[(0,f.jsx)(m.A.Text,{children:"RX:"}),(0,f.jsxs)(m.A.Text,{children:[null===(L=(0,i.Js)(null===N||void 0===N||null===(z=N.node)||void 0===z||null===(K=z.net_rx)||void 0===K?void 0:K.current,"m",1))||void 0===L?void 0:L.numberUnit,"iB"]})]})]}):null]})]}),(0,f.jsx)(g.A,{gutter:[24,24],style:{marginBottom:D.marginSM},children:x().map(x().keys(null===N||void 0===N?void 0:N.devices),(e=>{if(["cpu_util","mem","disk","net_rx","net_tx"].includes(e))return null;if(x().includes(e,"_util")){var l;const n=x().split(e,"_")[0]+".device";return(0,f.jsx)(v.A,{xs:24,sm:12,children:(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",align:"stretch",children:[(0,f.jsxs)(m.A.Title,{level:5,style:{marginTop:0},children:[null===E||void 0===E||null===(l=E[n])||void 0===l?void 0:l.human_readable_name," ",$("session.Utilization")]}),x().map(x().toPairs(null===N||void 0===N?void 0:N.devices[e]),((e,l)=>{var t,i,a;return(0,f.jsxs)(c.A,{justify:"between",children:[(0,f.jsxs)(m.A.Text,{type:"secondary",style:{flex:.5},children:[null===E||void 0===E||null===(t=E[n])||void 0===t?void 0:t.human_readable_name,l]},l),(0,f.jsx)(u.A,{percent:x().toFinite(null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.pct),valueLabel:(null===e||void 0===e||null===(a=e[1])||void 0===a?void 0:a.pct)+"%"})]})}))]})})}if(x().includes(e,"_mem")){var n;const l=x().split(e,"_")[0]+".device";return(0,f.jsx)(v.A,{xs:24,sm:12,children:(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",align:"stretch",children:[(0,f.jsxs)(m.A.Title,{level:5,style:{marginTop:0},children:[null===E||void 0===E||null===(n=E[l])||void 0===n?void 0:n.human_readable_name," ",$("session.launcher.Memory")]}),x().map(x().toPairs(null===N||void 0===N?void 0:N.devices[e]),((e,n)=>{var t,i,a;return(0,f.jsxs)(c.A,{justify:"between",children:[(0,f.jsxs)(m.A.Text,{type:"secondary",style:{flex:.5},children:[null===E||void 0===E||null===(t=E[l])||void 0===t?void 0:t.human_readable_name,n]},n),(0,f.jsx)(u.A,{percent:x().toFinite(null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.pct),valueLabel:(null===e||void 0===e||null===(a=e[1])||void 0===a?void 0:a.pct)+"%"})]})}))]})})}}))})]})})};var S,_,k=n(78969),F=n(65080),w=n(82745);const T=e=>{let{agentSettingModalFrgmt:l=null,onRequestClose:t,...i}=e;const{t:a}=(0,b.Bd)(),{message:o}=k.A.useApp(),r=(0,h.useRef)(null),s=(0,A.useFragment)(void 0!==S?S:S=n(81157),l),[u,c]=(0,A.useMutation)(void 0!==_?_:_=n(69130));return(0,f.jsx)(d.A,{...i,title:`${a("agent.AgentSetting")}: ${null===s||void 0===s?void 0:s.id}`,onCancel:()=>t(),destroyOnClose:!0,width:300,confirmLoading:c,onOk:()=>{var e;null===(e=r.current)||void 0===e||e.validateFields().then((e=>{u({variables:{id:(null===s||void 0===s?void 0:s.id)||"",props:{schedulable:e.schedulable}},onCompleted(e,l){var n,i;null===e||void 0===e||null===(n=e.modify_agent)||void 0===n||!n.ok||l?(o.error(null===e||void 0===e||null===(i=e.modify_agent)||void 0===i?void 0:i.msg),t()):(o.success(a("agent.AgentSettingUpdated")),t(!0))},onError(e){o.error(null===e||void 0===e?void 0:e.message)}})})).catch((()=>{}))},children:(0,f.jsx)(F.A,{ref:r,preserve:!1,initialValues:{...s},children:(0,f.jsx)(F.A.Item,{name:"schedulable",label:a("agent.Schedulable"),valuePropName:"checked",children:(0,f.jsx)(w.A,{})})})})};var C=n(23623),L=n(41679),z=n(91353),K=n(10840),M=n(42923),I=n(78074),O=n(34156),$=n.n(O),D=n(30324),E=n(19727),P=n(65757),N=n(49107),V=n(28037);const{Option:B}=I.A;function R(e){return(null===e||void 0===e?void 0:e.type)&&(e.type.isSelectOption||e.type.isSelectOptGroup)}const U=(e,l)=>{var n;const{prefixCls:t,className:i,popupClassName:a,dropdownClassName:o,children:r,dataSource:s}=e,d=(0,D.A)(r);let u;1===d.length&&h.isValidElement(d[0])&&!R(d[0])&&([u]=d);const c=u?()=>u:void 0;let p;p=d.length&&R(d[0])?r:s?s.map((e=>{if(h.isValidElement(e))return e;switch(typeof e){case"string":return h.createElement(B,{key:e,value:e},e);case"object":{const{value:l}=e;return h.createElement(B,{key:l,value:l},e.text)}default:return}})):[];const{getPrefixCls:g}=h.useContext(V.QO),v=g("select",t),[m]=(0,P.YK)("SelectLike",null===(n=e.dropdownStyle)||void 0===n?void 0:n.zIndex);return h.createElement(I.A,Object.assign({ref:l,suffixIcon:null},(0,E.A)(e,["dataSource","dropdownClassName"]),{prefixCls:v,popupClassName:a||o,dropdownStyle:Object.assign(Object.assign({},e.dropdownStyle),{zIndex:m}),className:$()(`${v}-auto-complete`,i),mode:I.A.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:c}),p)},J=h.forwardRef(U),G=(0,N.A)(J);J.Option=B,J._InternalPanelDoNotUseOrYouWillBeFired=G;const W=J;var X=n(24377),q=n(48713),Z=n(20307),H=n(6932);const Q={string:"ilike",boolean:"=="},Y={boolean:[{label:"True",value:"true"},{label:"False",value:"false"}],string:void 0};const ee=e=>{let{filterProperties:l,value:n,onChange:t,defaultValue:i,loading:a,...o}=e;const[r,s]=(0,L.A)({}),d=(0,h.useRef)(null),[u,g]=(0,h.useState)(!1),[v,m]=(0,L.A)({value:n,defaultValue:i,onChange:t}),y=(0,h.useMemo)((()=>{if(void 0===v)return[];return v.split("&").map((e=>e.trim())).map((e=>{var n,t;const{property:i,operator:a,value:o}=function(e){const[l,...n]=e.split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/),[t,...i]=n.join(" ").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);return{property:l,operator:t,value:i.join(" ").replace(/^"|"$/g,"")}}(e);return{property:i,operator:a,value:o,propertyLabel:(null===(n=x().find(l,(e=>e.key===i)))||void 0===n?void 0:n.propertyLabel)||i,type:(null===(t=x().find(l,(e=>e.key===i)))||void 0===t?void 0:t.type)||"string"}}))}),[v,l]),{t:A}=(0,b.Bd)(),j=x().map(l,(e=>({label:e.propertyLabel,value:e.key,filter:e}))),[S,_]=(0,h.useState)(j[0].filter),{list:k,remove:F,push:w,resetList:T,getKey:C}=(0,K.A)(y),{token:O}=p.A.useToken();(0,h.useEffect)((()=>{0===k.length?m(void 0):m(x().map(k,(e=>{const l="string"===e.type?`"${e.value}"`:e.value;return`${e.property} ${e.operator} ${l}`})).join(" & "))}),[k,m]);const $=e=>{var l,n;if(x().isEmpty(e))return;s("");const t=S.defaultOperator||Q[S.type],i="ilike"===t||"like"===t?`%${e}%`:`${e}`;w({property:S.key,propertyLabel:S.propertyLabel,operator:t,value:i,label:null===(l=S.options)||void 0===l||null===(n=l.find((l=>l.value===e)))||void 0===n?void 0:n.label,type:S.type})};return(0,f.jsxs)(c.A,{direction:"column",gap:"xs",style:{flex:1},align:"start",children:[(0,f.jsxs)(M.A.Compact,{children:[(0,f.jsx)(I.A,{popupMatchSelectWidth:!1,options:j,value:S.key,onChange:(e,l)=>{_(x().castArray(l)[0].filter)},onSelect:()=>{var e;null===(e=d.current)||void 0===e||e.focus(),g(!0)},showSearch:!0,optionFilterProp:"label"}),(0,f.jsx)(W,{ref:d,value:r,open:u,onDropdownVisibleChange:g,onSelect:$,onChange:e=>{s(e)},style:{minWidth:200},options:x().filter(S.options||Y[S.type],(e=>{var l;return!!x().isEmpty(r)||(null===(l=e.label)||void 0===l?void 0:l.toString().includes(r))})),placeholder:A("propertyFilter.placeHolder"),children:(0,f.jsx)(X.A.Search,{onSearch:$,allowClear:!0})})]}),k.length>0&&(0,f.jsxs)(c.A,{direction:"row",gap:"xs",wrap:"wrap",style:{alignSelf:"stretch"},children:[x().map(k,((e,l)=>{return(0,f.jsxs)(q.A,{closable:!0,onClose:()=>{F(l)},style:{margin:0},children:[e.propertyLabel,":"," ",e.label||(n=e.value,n.replace(/^%|%$/g,""))]},C(l));var n})),k.length>1&&(0,f.jsx)(Z.A,{title:A("propertyFilter.ResetFilter"),children:(0,f.jsx)(H.Ay,{size:"small",icon:(0,f.jsx)(z.A,{style:{color:O.colorTextSecondary}}),type:"text",onClick:()=>{T([])}})})]})]})};var le,ne=n(5621),te=n(8469),ie=n(34680),ae=n(8461),oe=n(94080),re=n(2292),se=n(63718),de=n(93792),ue=n(2381),ce=n(44355),pe=n(99641),ge=n(71537),ve=n(14455),me=n.n(ve);const ye=e=>{let{containerStyle:l,tableProps:t}=e;const{t:d}=(0,b.Bd)(),{token:g}=p.A.useToken(),{isDarkMode:v}=(0,s.e)(),[y]=(0,o.Hv)(),[S,_]=(0,h.useState)(),[k,F]=(0,h.useState)(),[w,L]=(0,h.useState)(!1),z=(0,a.CX)(),[K,M]=(0,h.useTransition)(),[I,O]=(0,h.useTransition)(),[$,D]=(0,h.useTransition)(),[E,P]=(0,h.useState)("ALIVE"),[N,V]=(0,h.useState)(E),[B,R]=(0,h.useTransition)(),[U,J]=(0,h.useState)(),{baiPaginationOption:G,tablePaginationOption:W,setTablePaginationOption:X}=(0,r.w4)({current:1,pageSize:20}),[Q,Y]=(0,h.useState)(),[ve,ye]=(0,a.Tw)("first"),[xe]=(0,h.useState)("network-only"),he=()=>O((()=>{ye()})),{agent_list:be}=(0,A.useLazyLoadQuery)(void 0!==le?le:le=n(80508),{limit:G.limit,offset:G.offset,filter:U,order:Q,status:E},{fetchKey:ve,fetchPolicy:xe}),Ae=[{title:"#",fixed:"left",render:(e,l,n)=>n+1+(W.current-1)*W.pageSize,showSorterTooltip:!1,rowScope:"row"},{title:(0,f.jsxs)(f.Fragment,{children:["ID / ",d("agent.Endpoint")]}),key:"id",dataIndex:"id",fixed:"left",render:(e,l)=>(0,f.jsxs)(c.A,{direction:"column",align:"start",children:[(0,f.jsx)(m.A.Text,{children:e}),(0,f.jsx)(m.A.Text,{type:"secondary",children:null===l||void 0===l?void 0:l.addr})]}),sorter:!0},{title:d("agent.Region"),key:"region",dataIndex:"region",render:e=>{const l=x().split(e,"/"),n=null===l||void 0===l?void 0:l[0],t=(null===l||void 0===l?void 0:l.length)>1?l[1]:"",{color:i,icon:a}={aws:{color:"orange",icon:"aws"},amazon:{color:"orange",icon:"aws"},azure:{color:"blue",icon:"azure"},gcp:{color:"lightblue",icon:"gcp"},google:{color:"lightblue",icon:"gcp"},nbp:{color:"green",icon:"nbp"},naver:{color:"green",icon:"nbp"},openstack:{color:"red",icon:"openstack"},dgx:{color:"green",icon:"local"},local:{color:"yellow",icon:"local"}}[n]||{color:"yellow",icon:"local"};return(0,f.jsxs)(c.A,{gap:"xxs",children:[(0,f.jsx)("img",{alt:e,src:`/resources/icons/${a}.png`,style:{width:"32px",height:"32px",filter:v&&"local"===a?"invert(1)":""}}),""!==t?(0,f.jsx)(ne.A,{values:[{label:t,color:i},{label:n,color:i}]}):(0,f.jsx)(q.A,{color:i,children:n})]})}},{title:d("agent.Architecture"),key:"architecture",dataIndex:"architecture"},{title:d("agent.Starts"),key:"first_contact",dataIndex:"first_contact",render:e=>(0,f.jsxs)(c.A,{direction:"column",children:[(0,f.jsx)(m.A.Text,{children:me()(e).format("ll LTS")}),(0,f.jsx)(ne.A,{values:[d("agent.Running"),(0,f.jsx)(C.A,{callback:()=>z.utils.elapsedTime(e,Date.now()),delay:1e3})]})]}),sorter:!0},{title:d("agent.Allocation"),key:"allocation",render:(e,l)=>{const n=JSON.parse((null===l||void 0===l?void 0:l.occupied_slots)||"{}"),t=JSON.parse((null===l||void 0===l?void 0:l.available_slots)||"{}");return(0,f.jsx)(c.A,{direction:"column",gap:"xxs",children:x().map(x().keys(t),(e=>{var l,a,o,r,s,d;return"cpu"===e?(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:220},children:[(0,f.jsxs)(c.A,{gap:"xxs",children:[(0,f.jsx)(te.s5,{type:e},e),(0,f.jsxs)(m.A.Text,{children:[(0,i.Z1)(n[e]||0,0),"/",(0,i.Z1)(t[e],0)]}),(0,f.jsx)(m.A.Text,{type:"secondary",style:{fontSize:g.sizeXS},children:null===y||void 0===y||null===(l=y.cpu)||void 0===l?void 0:l.display_unit})]}),(0,f.jsx)(u.A,{percent:(n[e]||0)/t[e]*100,strokeColor:(n[e]||0)/t[e]*100>80?g.colorError:g.colorSuccess,width:120,valueLabel:(0,i.Z1)(x().toFinite((n[e]||0)/t[e]*100),1)+" %"})]},e):"mem"===e?(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:220},children:[(0,f.jsxs)(c.A,{gap:"xxs",children:[(0,f.jsx)(te.s5,{type:e},e),(0,f.jsxs)(m.A.Text,{children:[null!==(a=null===(o=(0,i.Js)(n[e],"g",0))||void 0===o?void 0:o.numberFixed)&&void 0!==a?a:0,"/",null!==(r=null===(s=(0,i.Js)(t[e],"g",0))||void 0===s?void 0:s.numberFixed)&&void 0!==r?r:0]}),(0,f.jsx)(m.A.Text,{type:"secondary",style:{fontSize:g.sizeXS},children:"GiB"})]}),(0,f.jsx)(u.A,{percent:(n[e]||0)/t[e]*100,strokeColor:(n[e]||0)/t[e]*100>80?g.colorError:g.colorSuccess,width:120,valueLabel:(0,i.Z1)(x().toFinite((n[e]||0)/t[e]*100),1)+" %"})]},e):n[e]&&t[e]?(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:220},gap:"xxs",children:[(0,f.jsxs)(c.A,{gap:"xxs",children:[(0,f.jsx)(te.s5,{type:e},e),(0,f.jsxs)(m.A.Text,{children:[(0,i.Z1)(n[e],2),"/",(0,i.Z1)(t[e],2)]}),(0,f.jsx)(m.A.Text,{type:"secondary",style:{fontSize:g.sizeXS},children:null===y||void 0===y||null===(d=y[e])||void 0===d?void 0:d.display_unit})]}),(0,f.jsx)(u.A,{percent:n[e]/t[e]*100,strokeColor:n[e]/t[e]*100>80?g.colorError:g.colorSuccess,width:120,valueLabel:(0,i.Z1)(x().toFinite(n[e]/t[e]*100),1)+" %"})]},e):void 0}))})}},{title:d("agent.Utilization"),key:"live_stat",dataIndex:"live_stat",render:(e,l)=>{const n=JSON.parse(e||"{}"),t=JSON.parse((null===l||void 0===l?void 0:l.available_slots)||"{}");if("ALIVE"===(null===l||void 0===l?void 0:l.status)){var a,o,r,s;const e={cpu_util:{capacity:0,current:0,ratio:0},mem_util:{capacity:0,current:0,ratio:0}};if(n&&n.node&&n.devices){const l=x().keys(n.devices.cpu_util).length;e.cpu_util.capacity=x().toFinite(n.node.cpu_util.capacity),e.cpu_util.current=x().toFinite(n.node.cpu_util.current),e.cpu_util.ratio=e.cpu_util.current/e.cpu_util.capacity/l||0,e.mem_util.capacity=x().toInteger(t.mem||n.node.mem.capacity),e.mem_util.current=x().toInteger(n.node.mem.current),e.mem_util.ratio=e.mem_util.current/e.mem_util.capacity||0}return x().forEach(x().keys(null===n||void 0===n?void 0:n.node),(l=>{["cpu_util","mem","disk","net_rx","net_tx"].includes(l)||(x().includes(l,"_util")?e[l]={capacity:"cuda_util"===l?x().toFinite(n.node[l]["stats.max"]):x().toFinite(n.node[l].capacity),current:x().toFinite(n.node[l].current),ratio:x().toFinite(n.node[l].current)/100||0}:l.includes("_mem")&&(e[l]={capacity:x().toFinite(n.node[l].capacity),current:x().toFinite(n.node[l].current),ratio:x().toFinite(n.node[l].pct)/100||0}))})),(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",children:[(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:200},children:[(0,f.jsx)(m.A.Text,{children:null===y||void 0===y||null===(a=y.cpu)||void 0===a?void 0:a.human_readable_name}),(0,f.jsx)(u.A,{percent:100*e.cpu_util.ratio,width:120,valueLabel:(0,i.Z1)(x().toFinite(100*e.cpu_util.ratio),1)+" %"})]}),(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:200},children:[(0,f.jsx)(m.A.Text,{children:null===y||void 0===y||null===(o=y.mem)||void 0===o?void 0:o.human_readable_name}),(0,f.jsx)(u.A,{percent:e.mem_util.ratio,width:120,valueLabel:(null===(r=(0,i.Js)(x().toString(e.mem_util.current),"g"))||void 0===r?void 0:r.numberFixed)+"/"+(null===(s=(0,i.Js)(x().toString(e.mem_util.capacity),"g"))||void 0===s?void 0:s.numberFixed)+" GiB"})]}),x().map(x().keys(null===n||void 0===n?void 0:n.node),(l=>{if(!["cpu_util","mem"].includes(l)){if(x().includes(l,"_util")){var n;const t=x().split(l,"_")[0]+".device";return(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:200,width:"min-content"},gap:"xxs",children:[(0,f.jsxs)(m.A.Text,{children:[null===y||void 0===y||null===(n=y[t])||void 0===n?void 0:n.human_readable_name,"(util)"]}),(0,f.jsx)(u.A,{width:120,percent:e[l].current/e[l].capacity*100||0,valueLabel:x().toFinite((0,i.Z1)(100*e[l].ratio,1))+" %"})]})}if(x().includes(l,"_mem")){var t,a,o;const n=x().split(l,"_")[0]+".device";return(0,f.jsxs)(c.A,{justify:"between",style:{minWidth:200,width:"min-content"},gap:"xxs",children:[(0,f.jsxs)(m.A.Text,{children:[null===y||void 0===y||null===(t=y[n])||void 0===t?void 0:t.human_readable_name,"(mem)"]}),(0,f.jsx)(u.A,{width:120,percent:e[l].current/e[l].capacity*100||0,valueLabel:(null===(a=(0,i.Js)(x().toString(e[l].current),"g"))||void 0===a?void 0:a.numberFixed)+"/"+(null===(o=(0,i.Js)(x().toString(e[l].capacity),"g"))||void 0===o?void 0:o.numberFixed)+" GiB"})]})}}}))]})}return d("agent.NoAvailableLiveStat")}},{title:d("agent.DiskPerc"),key:"disk_perc",render:(e,l)=>{var n,t,a;const o=null!==(n=null===(t=JSON.parse((null===l||void 0===l?void 0:l.live_stat)||"{}"))||void 0===t||null===(a=t.node)||void 0===a?void 0:a.disk)&&void 0!==n?n:{},r=x().toFinite(o.pct)||0,s=x().toFinite((0,i.Z1)(r,2)),d=s>80?g.colorError:g.colorSuccess;return(0,f.jsxs)(c.A,{direction:"column",children:[(0,f.jsx)(u.A,{valueLabel:(0,i.Z1)(s,1)+" %",percent:s,strokeColor:d,width:120}),(0,f.jsxs)(m.A.Text,{style:{fontSize:g.fontSizeSM},children:[(0,i.wb)(null===o||void 0===o?void 0:o.current),"GB /"," ",(0,i.wb)(null===o||void 0===o?void 0:o.capacity),"GB"]})]})}},{title:d("general.ResourceGroup"),key:"resource_group",dataIndex:"scaling_group",sorter:!0},{title:d("agent.Status"),key:"status",dataIndex:"status",render:(e,l)=>{var n,t,i;const a=JSON.parse((null===l||void 0===l?void 0:l.compute_plugins)||"{}"),o=JSON.parse((null===l||void 0===l?void 0:l.available_slots)||"{}");return(0,f.jsxs)(c.A,{direction:"column",gap:"xxs",align:"start",children:[(0,f.jsx)(ne.A,{values:[{label:"Agent"},{label:null===l||void 0===l?void 0:l.version,color:"ALIVE"===e?"green":"TERMINATED"===e?"red":"blue"}]}),null!==a&&void 0!==a&&a.cuda?(0,f.jsxs)(f.Fragment,{children:[null!==a&&void 0!==a&&null!==(n=a.cuda)&&void 0!==n&&n.cuda_version?(0,f.jsx)(ne.A,{values:[{label:"CUDA"},{label:null===a||void 0===a||null===(t=a.cuda)||void 0===t?void 0:t.cuda_version,color:"green"}]}):(0,f.jsx)(q.A,{color:"green",children:"CUDA Disabled"}),(0,f.jsx)(ne.A,{values:[{label:"CUDA Plugin"},{label:null===a||void 0===a||null===(i=a.cuda)||void 0===i?void 0:i.version,color:"blue"}]}),x().includes(x().keys(o),"cuda.shares")?(0,f.jsx)(q.A,{color:"blue",children:"Fractional GPU\u2122"}):null]}):null]})}},{title:d("agent.Schedulable"),key:"schedulable",dataIndex:"schedulable",render:e=>(0,f.jsx)(c.A,{justify:"center",children:!0===e?(0,f.jsx)(ae.A,{style:{color:g.colorPrimary,fontSize:g.fontSizeXL}}):(0,f.jsx)(oe.A,{style:{color:g.colorError,fontSize:g.fontSizeXL}})}),sorter:!0},{title:d("general.Control"),key:"control",fixed:"right",render:(e,l)=>(0,f.jsxs)(c.A,{children:[(0,f.jsx)(H.Ay,{size:"large",style:{color:g.colorSuccess},type:"text",icon:(0,f.jsx)(re.A,{}),onClick:()=>_(l)}),(0,f.jsx)(H.Ay,{size:"large",style:{color:g.colorInfo},type:"text",icon:(0,f.jsx)(se.A,{}),onClick:()=>F(l)})]})}],[fe,je]=(0,ce.A)("backendaiwebui.AgentList.displayedColumnKeys",{defaultValue:Ae.map((e=>x().toString(e.key)))});return(0,f.jsxs)(c.A,{direction:"column",align:"stretch",style:l,children:[(0,f.jsxs)(c.A,{justify:"between",align:"start",gap:"xs",style:{padding:g.paddingXS},wrap:"wrap",children:[(0,f.jsxs)(c.A,{direction:"row",gap:"sm",align:"start",style:{flex:1},wrap:"wrap",children:[(0,f.jsx)(pe.A,{options:[{label:d("agent.Connected"),value:"ALIVE"},{label:d("agent.Terminated"),value:"TERMINATED"}],value:K?N:E,onChange:e=>{V(e),M((()=>{P(e)}))}}),(0,f.jsx)(ee,{filterProperties:[{key:"id",propertyLabel:"ID",type:"string"},{key:"addr",propertyLabel:d("agent.Endpoint"),type:"string"},{key:"schedulable",propertyLabel:d("agent.Schedulable"),type:"boolean",options:[{label:d("general.Enabled"),value:"true"},{label:d("general.Disabled"),value:"false"}]}],value:U,onChange:e=>{R((()=>{J(e)}))}})]}),(0,f.jsx)(c.A,{gap:"xs",children:(0,f.jsx)(Z.A,{title:d("button.Refresh"),children:(0,f.jsx)(H.Ay,{loading:I,onClick:()=>he(),icon:(0,f.jsx)(de.A,{})})})})]}),(0,f.jsx)(ge.A,{bordered:!0,scroll:{x:"max-content"},rowKey:"id",dataSource:null===be||void 0===be?void 0:be.items,showSorterTooltip:!1,columns:x().filter(Ae,(e=>null===fe||void 0===fe?void 0:fe.includes(x().toString(e.key)))),pagination:{pageSize:W.pageSize,showSizeChanger:!0,total:null===be||void 0===be?void 0:be.total_count,current:W.current,showTotal:(e,l)=>`${l[0]}-${l[1]} of ${e} items`,pageSizeOptions:["10","20","50"],style:{marginRight:g.marginXS}},onChange:(e,l,n)=>{let{pageSize:t,current:a}=e;D((()=>{x().isNumber(a)&&x().isNumber(t)&&X({current:a,pageSize:t}),Y((0,i.Wh)(n))}))},loading:{spinning:$||K||B,indicator:(0,f.jsx)(ue.A,{})},...t}),(0,f.jsx)(c.A,{justify:"end",style:{padding:g.paddingXXS},children:(0,f.jsx)(H.Ay,{type:"text",icon:(0,f.jsx)(se.A,{}),onClick:()=>{L(!0)}})}),(0,f.jsx)(j,{agentDetailModalFrgmt:S,open:!!S,onRequestClose:()=>_(null)}),(0,f.jsx)(T,{agentSettingModalFrgmt:k,open:!!k,onRequestClose:e=>{e&&he(),F(null)}}),(0,f.jsx)(ie.A,{open:w,onRequestClose:e=>{(null===e||void 0===e?void 0:e.selectedColumnKeys)&&je(null===e||void 0===e?void 0:e.selectedColumnKeys),L(!1)},columns:Ae,displayedColumnKeys:fe||[]})]})};var xe=n(29475),he=n(58346);const be=(0,he.withDefault)(he.StringParam,"agents"),Ae=e=>{const{t:l}=(0,b.Bd)(),[n,t]=(0,he.useQueryParam)("tab",be,{updateType:"replace"});return(0,f.jsxs)(xe.A,{activeTabKey:n,onTabChange:e=>t(e),tabList:[{key:"agents",tab:l("agent.Agent")},{key:"storages",tab:l("general.StorageProxies")},{key:"resourceGroup",tab:l("general.ResourceGroup")}],styles:{body:{padding:0,paddingTop:1,overflow:"hidden"}},children:["agents"===n?(0,f.jsx)(ye,{containerStyle:{marginLeft:-1,marginRight:-1}}):null,"storages"===n?(0,f.jsx)("backend-ai-storage-proxy-list",{active:!0}):null,"resourceGroup"===n?(0,f.jsx)("backend-ai-resource-group-list",{active:!0}):null]})}},94080:(e,l,n)=>{n.d(l,{A:()=>s});var t=n(58168),i=n(76998);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};var o=n(76228),r=function(e,l){return i.createElement(o.A,(0,t.A)({},e,{ref:l,icon:a}))};const s=i.forwardRef(r)},9788:(e,l,n)=>{n.d(l,{A:()=>t});const t=n(3584).A},7518:(e,l,n)=>{n.d(l,{A:()=>t});const t=n(30746).A}}]);
//# sourceMappingURL=8924.35c74fb2.chunk.js.map