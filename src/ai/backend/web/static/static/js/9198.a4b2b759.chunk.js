/*! For license information please see 9198.a4b2b759.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[9198,8879,3575],{23575:(e,t,s)=>{s.r(t),s.d(t,{default:()=>K});var n=s(51593),a=s(94126),l=s(89130),i=s(30957),r=s(6597),o=s(1499),c=s(40567),u=s(64703),d=s(44954),g=s(81850),h=s(44111),p=s(50868),y=s(52515),m=s(67378),x=s(9833),f=s(60822),b=s(77731),j=s(39464),k=s(12731),v=s.n(k),A=s(89608),C=s.n(A),S=s(43373),w=s(56762),T=s(73689);const K=()=>{const{t:e}=(0,w.Bd)(),{token:t}=p.A.useToken(),[s,k]=(0,S.useState)(!1),[A,K]=(0,S.useState)(!1),[I,_]=(0,S.useState)(!1),[q,E]=(0,S.useState)(""),[R,L]=(0,n.Tw)("first"),[D,M]=(0,S.useTransition)(),[B,P]=(0,S.useTransition)(),[F,V]=(0,S.useTransition)();(0,n.CX)();const U=[{title:e("logs.TimeStamp"),dataIndex:"formattedTimeStamp",key:"timeStamp",render:e=>(0,T.jsx)("div",{style:{minWidth:50},children:C().isUndefined(e)?"-":(0,T.jsx)(r.A,{keyword:q,children:e})}),fixed:"left"},{title:e("logs.Status"),dataIndex:"statusCode",key:"status",render:(e,t)=>(0,T.jsx)("div",{style:{minWidth:50},children:C().isUndefined(e)?"-":(0,T.jsx)(r.A,{keyword:q,children:e+" "+t.statusText})})},{title:e("logs.ErrorTitle"),dataIndex:"title",key:"errorTitle",render:e=>(0,T.jsx)("div",{style:{minWidth:50},children:e?(0,T.jsx)(r.A,{keyword:q,children:C().toString(e)}):"-"})},{title:e("logs.ErrorMessage"),dataIndex:"message",key:"errorMessage",render:e=>(0,T.jsx)("div",{style:{minWidth:70},children:e?(0,T.jsx)(r.A,{keyword:q,children:e}):"-"})},{title:e("logs.ErrorType"),dataIndex:"type",key:"errorType",render:e=>(0,T.jsx)("div",{style:{minWidth:60},children:e?(0,T.jsx)(r.A,{keyword:q,children:e}):"-"})},{title:e("logs.Method"),dataIndex:"requestMethod",key:"method",render:e=>(0,T.jsx)("div",{style:{minWidth:60},children:e?(0,T.jsx)(r.A,{keyword:q,children:e}):"-"})},{title:e("logs.RequestUrl"),dataIndex:"requestUrl",key:"requestUrl",render:e=>(0,T.jsx)("div",{style:{minWidth:60},children:e?(0,T.jsx)(r.A,{keyword:q,children:e}):"-"})},{title:e("logs.Parameters"),dataIndex:"requestParameters",key:"requestParameter",render:e=>(0,T.jsx)("div",{style:{minWidth:100},children:e?(0,T.jsx)(r.A,{keyword:q,children:e}):"-"})}],[W,H]=(0,h.A)("backendaiwebui.ErrorLogList.displayedColumnKeys",{defaultValue:U.map((e=>C().toString(e.key)))}),O=(0,S.useMemo)((()=>{const e=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"[]");return C().map(e,(e=>({...e,formattedTimeStamp:v()(e.timestamp).format("ll LTS")})))}),[R]),N=(0,S.useMemo)((()=>{if(C().isEmpty(q))return O;const e=new RegExp(`${C().escapeRegExp(q)}`,"i");return C().filter(O,(t=>C().some(t,((t,s)=>"timestamp"!==s&&e.test(C().toString(t))))))}),[q,O]);return(0,T.jsxs)(l.A,{direction:"column",align:"stretch",children:[(0,T.jsxs)(l.A,{direction:"row",justify:"between",wrap:"wrap",gap:"xs",style:{padding:t.paddingContentVertical,paddingLeft:t.paddingContentHorizontalSM,paddingRight:t.paddingContentHorizontalSM},children:[(0,T.jsxs)(l.A,{direction:"column",align:"start",children:[(0,T.jsx)(y.A.Title,{level:4,style:{margin:0,padding:0},children:e("logs.LogMessages")}),(0,T.jsx)(y.A.Text,{type:"secondary",children:e("logs.UpTo3000Logs")})]}),(0,T.jsxs)(l.A,{direction:"row",gap:"xs",wrap:"wrap",style:{flexShrink:1},children:[(0,T.jsxs)(l.A,{gap:"xs",children:[(0,T.jsx)(m.A,{allowClear:!0,prefix:(0,T.jsx)(o.A,{}),placeholder:e("logs.SearchLogs"),onChange:e=>{P((()=>E(e.target.value)))},style:{width:200}}),(0,T.jsx)(x.A,{onChange:e=>_(e.target.checked),children:e("logs.ShowOnlyError")})]}),(0,T.jsxs)(l.A,{gap:"xs",children:[(0,T.jsx)(f.Ay,{icon:(0,T.jsx)(c.A,{}),loading:D,onClick:()=>{M((()=>L()))},children:e("button.Refresh")}),(0,T.jsx)(f.Ay,{danger:!0,icon:(0,T.jsx)(u.A,{}),onClick:()=>{k(!0)},children:e("button.ClearLogs")})]})]})]}),(0,T.jsx)(b.A,{pagination:{showSizeChanger:!1,style:{marginBottom:0}},loading:!!B&&{indicator:(0,T.jsx)(d.A,{})},scroll:{x:"max-content",y:"calc(100vh - 400px)"},dataSource:I?C().filter(N,(e=>e.isError)):N,columns:U.filter((e=>null===W||void 0===W?void 0:W.includes(C().toString(e.key)))),onRow:e=>({style:{color:e.isError?t.colorError:""}})}),(0,T.jsx)(l.A,{justify:"end",style:{paddingRight:t.paddingXS},children:(0,T.jsx)(f.Ay,{type:"text",icon:(0,T.jsx)(g.A,{}),onClick:()=>{K(!0)}})}),(0,T.jsx)(a.A,{open:s,title:e("dialog.warning.LogDeletion"),okText:e("button.Delete"),okButtonProps:{danger:!0},confirmLoading:F,onOk:()=>{V((()=>{localStorage.removeItem("backendaiwebui.logs"),L(),k(!1)}))},cancelText:e("button.Cancel"),onCancel:()=>k(!1),children:(0,T.jsx)(j.A,{message:e("dialog.warning.CannotBeUndone"),type:"warning"})}),(0,T.jsx)(i.A,{open:A,onRequestClose:e=>{(null===e||void 0===e?void 0:e.selectedColumnKeys)&&H(null===e||void 0===e?void 0:e.selectedColumnKeys),K(!1)},columns:U,displayedColumnKeys:W||[]})]})}},28879:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var n,a=s(51593),l=s(11899),i=s(60881),r=s(94126),o=s(89130),c=s(60822),u=s(77731),d=s(52515),g=s(15934),h=(s(43373),s(56762)),p=s(88789),y=s(73689);const m=e=>{let{onRequestClose:t,...m}=e;const{t:x}=(0,h.Bd)(),[f]=(0,l.U6)(),b=(0,a.CX)(),{data:j}=(0,i.nN)({queryKey:["baiClient.keypair.list",m.open],queryFn:()=>m.open?b.keypair.list(f.email,["access_key","secret_key","is_active"],!0).then((e=>e.keypairs)):null,staleTime:0}),k=null===b||void 0===b?void 0:b.supports("main-access-key"),{user:v}=(0,p.useLazyLoadQuery)(void 0!==n?n:n=s(72632),{email:f.email});return(0,y.jsx)(r.A,{...m,title:x("usersettings.MyKeypairInfo"),centered:!0,onCancel:t,destroyOnClose:!0,width:"auto",footer:[(0,y.jsx)(c.Ay,{onClick:()=>{t()},children:x("button.Close")},"keypairInfoClose")],children:(0,y.jsx)(u.A,{scroll:{x:"max-content"},rowKey:"access_key",dataSource:j,columns:[{title:"#",fixed:"left",render:(e,t,s)=>++s,showSorterTooltip:!1,rowScope:"row"},{title:x("general.AccessKey"),key:"accessKey",dataIndex:"access_key",fixed:"left",render:e=>(0,y.jsxs)(o.A,{direction:"column",align:"start",children:[(0,y.jsx)(d.A.Text,{ellipsis:!0,copyable:!0,children:e}),k&&e===(null===v||void 0===v?void 0:v.main_access_key)&&(0,y.jsx)(g.A,{color:"#457b3b",children:x("credential.MainAccessKey")})]})},{title:x("general.SecretKey"),key:"secretKey",dataIndex:"secret_key",fixed:"left",render:e=>(0,y.jsx)(d.A.Text,{ellipsis:!0,copyable:!0,children:e})}]})})}},30957:(e,t,s)=>{s.d(t,{A:()=>p});var n=s(94126),a=s(1499),l=s(50868),i=s(23702),r=s(67378),o=s(9833),c=s(89608),u=s.n(c),d=s(43373),g=s(56762),h=s(73689);const p=e=>{let{open:t,onRequestClose:s,columns:c,displayedColumnKeys:p,...y}=e;const m=(0,d.useRef)(null),{t:x}=(0,g.Bd)(),{token:f}=l.A.useToken(),b=c.map((e=>{return"string"===typeof e.title?{label:e.title,value:u().toString(e.key)}:"object"===typeof e.title&&"props"in e.title?{label:(t=e.title,d.Children.map(t.props.children,(e=>{if("string"===typeof e)return e}))),value:u().toString(e.key)}:{label:void 0,value:u().toString(e.key)};var t}));return(0,h.jsx)(n.A,{title:x("table.SettingTable"),open:t,destroyOnClose:!0,centered:!0,onOk:()=>{var e;null===(e=m.current)||void 0===e||e.validateFields().then((e=>{s(e)})).catch((()=>{}))},onCancel:()=>{s()},...y,children:(0,h.jsxs)(i.A,{ref:m,preserve:!1,initialValues:{selectedColumnKeys:p||b.map((e=>e.value))},layout:"vertical",children:[(0,h.jsx)(i.A.Item,{name:"searchInput",label:x("table.SelectColumnToDisplay"),style:{marginBottom:0},children:(0,h.jsx)(r.A,{prefix:(0,h.jsx)(a.A,{}),style:{marginBottom:f.marginSM},placeholder:x("table.SearchTableColumn")})}),(0,h.jsx)(i.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.searchInput!==t.searchInput,children:e=>{let{getFieldValue:t}=e;const s=t("searchInput")?u().toLower(t("searchInput")):void 0,n=b.map((e=>u().toLower(u().toString(e.label)).includes(s||"")?e:{...e,style:{display:"none"}}));return(0,h.jsx)(i.A.Item,{name:"selectedColumnKeys",style:{height:220,overflowY:"auto"},children:(0,h.jsx)(o.A.Group,{options:n,style:{flexDirection:"column"}})})}})]})})}},72632:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const n=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"email"}],t=[{kind:"Variable",name:"email",variableName:"email"}],s={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"main_access_key",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"KeypairInfoModalQuery",selections:[{alias:null,args:t,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[s,n],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"KeypairInfoModalQuery",selections:[{alias:null,args:t,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[s,n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{cacheID:"352a943226b02e137a3fcd32fa0ae22a",id:null,metadata:{},name:"KeypairInfoModalQuery",operationKind:"query",text:'query KeypairInfoModalQuery(\n  $email: String\n) {\n  user(email: $email) {\n    email\n    main_access_key @since(version: "23.09.7")\n    id\n  }\n}\n'}}}();n.hash="70097c005c8abc07e233048a68db1273";const a=n},79198:(e,t,s)=>{s.r(t),s.d(t,{default:()=>J});var n=s(23575),a=s(28879),l=s(51593),i=s(60881),r=s(94126),o=s(89130),c=s(44954),u=s(50868),d=s(51548),g=s(60822),h=s(11371),p=s(52515),y=s(43373),m=s(56762),x=s(73689);const f=e=>{let{onRequestClose:t,isRefreshModalPending:s,...n}=e;const{t:a}=(0,m.Bd)(),{token:y}=u.A.useToken(),f=(0,l.CX)(),{data:b}=(0,i.nN)({queryKey:["refreshSSHKeypair",n.open],queryFn:()=>n.open?f.refreshSSHKeypair():null});return(0,x.jsx)(r.A,{title:a("usersettings.SSHKeypairGeneration"),closeIcon:!1,footer:[(0,x.jsx)(d.A,{title:a("button.Confirm"),description:a("usersettings.ClearSSHKeypairInput"),onConfirm:t,children:(0,x.jsx)(g.Ay,{children:a("button.Close")})},"close")],...n,children:(0,x.jsxs)(h.A,{spinning:s,indicator:(0,x.jsx)(c.A,{}),children:[(0,x.jsx)(p.A.Text,{strong:!0,children:a("usersettings.PublicKey")}),(0,x.jsxs)(o.A,{direction:"row",align:"start",justify:"between",children:[(0,x.jsx)(p.A.Paragraph,{children:(0,x.jsx)("pre",{style:{width:430,maxHeight:100,overflowY:"scroll",scrollbarWidth:"none"},children:null===b||void 0===b?void 0:b.ssh_public_key})}),(0,x.jsx)(p.A.Text,{copyable:{text:null===b||void 0===b?void 0:b.ssh_public_key},style:{marginTop:y.margin}})]}),(0,x.jsx)(p.A.Text,{strong:!0,children:a("usersettings.PrivateKey")}),(0,x.jsxs)(o.A,{direction:"row",align:"start",justify:"between",children:[(0,x.jsxs)(p.A.Paragraph,{children:[(0,x.jsx)("pre",{style:{width:430,maxHeight:100,overflowY:"scroll",scrollbarWidth:"none"},children:null===b||void 0===b?void 0:b.ssh_private_key}),(0,x.jsx)(p.A.Text,{type:"danger",children:a("usersettings.SSHKeypairGenerationWarning")})]}),(0,x.jsx)(p.A.Text,{copyable:{text:null===b||void 0===b?void 0:b.ssh_private_key},style:{marginTop:y.margin}})]})]})})};var b=s(23702),j=s(67378);const k=e=>{let{onRequestClose:t,onRequestRefresh:s,...n}=e;const{t:a}=(0,m.Bd)(),o=(0,l.CX)(),c=(0,y.useRef)(null),u=(0,i.ET)({mutationFn:e=>o.postSSHKeypair(e)});return(0,x.jsx)(r.A,{title:a("usersettings.SSHKeypairEnterManually"),okText:a("button.Save"),onOk:()=>{var e;null===(e=c.current)||void 0===e||e.validateFields().then((e=>{u.mutate(e,{onSuccess:()=>{s()}}),t()})).catch((()=>{}))},destroyOnClose:!0,...n,children:(0,x.jsxs)(b.A,{ref:c,preserve:!1,layout:"vertical",requiredMark:"optional",children:[(0,x.jsx)(b.A.Item,{name:"pubkey",label:(0,x.jsx)(p.A.Text,{strong:!0,children:a("usersettings.PublicKey")}),rules:[{required:!0,message:a("settings.InputRequired")}],children:(0,x.jsx)(j.A.TextArea,{rows:5,style:{backgroundColor:"rgba(150, 150, 150, 0.1)"}})}),(0,x.jsx)(b.A.Item,{name:"privkey",label:(0,x.jsx)(p.A.Text,{strong:!0,children:a("usersettings.PrivateKey")}),rules:[{required:!0,message:a("settings.InputRequired")}],children:(0,x.jsx)(j.A.TextArea,{rows:5,style:{backgroundColor:"rgba(150, 150, 150, 0.1)"}})})]})})};var v=s(55731);const A=e=>{let{onRequestClose:t,...s}=e;const{t:n}=(0,m.Bd)(),{token:a}=u.A.useToken(),[c,d]=(0,y.useTransition)(),[h,b]=(0,l.Tw)("initial-fetch"),[j,{toggle:A}]=(0,v.A)(!1),[C,{toggle:S}]=(0,v.A)(!1),w=(0,l.CX)(),{data:T}=(0,i.nN)({queryKey:["fetchSSHKeypair",h],queryFn:()=>w.fetchSSHKeypair()});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(r.A,{title:n("usersettings.SSHKeypairGeneration"),onCancel:()=>t(),footer:[(0,x.jsx)(g.Ay,{onClick:()=>t(),children:n("button.Close")},"back"),(0,x.jsx)(g.Ay,{type:"primary",onClick:A,children:n("button.Generate")},"generate"),(0,x.jsx)(g.Ay,{type:"primary",onClick:S,children:n("button.EnterManually")},"enterManually")],...s,children:[(0,x.jsx)(p.A.Text,{strong:!0,children:n("usersettings.CurrentSSHPublicKey")}),null!==T&&void 0!==T&&T.ssh_public_key?(0,x.jsxs)(o.A,{direction:"row",align:"start",justify:"between",children:[(0,x.jsx)(p.A.Paragraph,{children:(0,x.jsx)("pre",{style:{width:430,height:270},children:null===T||void 0===T?void 0:T.ssh_public_key})}),(0,x.jsx)(p.A.Text,{copyable:{text:null===T||void 0===T?void 0:T.ssh_public_key},style:{marginTop:a.margin}})]}):(0,x.jsx)(p.A.Paragraph,{children:(0,x.jsx)("pre",{style:{height:270},children:n("usersettings.NoExistingSSHKeypair")})})]}),(0,x.jsx)(f,{open:j,isRefreshModalPending:c,onRequestClose:()=>{A(),d((()=>{b()}))}}),(0,x.jsx)(k,{open:C,onCancel:S,onRequestClose:()=>{S()},onRequestRefresh:()=>{d((()=>{b()}))}})]})};var C=s(95574),S=s(9833),w=s(69056),T=s(59286);const K=(0,T.rU)((e=>{let{css:t}=e;return{baiSettingItemCheckbox:t`
    .ant-checkbox {
      align-self: flex-start;
      margin-top: 0.2rem;
    }
  `}})),I=e=>{let{type:t,title:s,description:n,children:a,defaultValue:l,value:i,selectProps:r,onChange:c}=e;const{token:d}=u.A.useToken(),{styles:g}=K();return(0,x.jsxs)(o.A,{direction:"column",align:"start",gap:"xxs",children:[(0,x.jsxs)(o.A,{direction:"row",gap:"xxs",children:[(0,x.jsx)(p.A.Text,{strong:!0,style:{fontSize:d.fontSize},children:s}),void 0!==i&&null!==i&&l!==i&&(0,x.jsx)(C.A,{dot:!0,status:"warning"})]}),"custom"===t&&(0,x.jsxs)(x.Fragment,{children:[n,a]}),"checkbox"===t&&(0,x.jsx)(S.A,{checked:i,onChange:c,className:g.baiSettingItemCheckbox,children:n}),"select"===t&&(0,x.jsxs)(x.Fragment,{children:[n,(0,x.jsx)(w.A,{value:i,popupMatchSelectWidth:!1,onChange:c,...r})]})]})};var _=s(1499),q=s(84588),E=s(28596),R=s(39464),L=s(89608),D=s.n(L);const M=(0,T.rU)((e=>{let{css:t}=e;return{TabStyles:t`
    .ant-tabs-tab-active {
      font-weight: var(--token-fontWeightSuperStrong, 700);
    }
    .ant-typography-secondary {
      font-weight: normal !important;
    }
  `}})),B=e=>{let{settingGroup:t,tabDirection:s="left"}=e;const{t:n}=(0,m.Bd)(),{token:a}=u.A.useToken(),{styles:l}=M(),[i,c]=(0,y.useState)(""),[d,h]=(0,y.useState)(!1),[f,{toggle:b}]=(0,v.A)(!1),k=(0,y.useMemo)((()=>[{title:n("general.All"),settingItems:D().flatMap(t,(e=>e.settingItems))},...t]),[t]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.A,{direction:"column",gap:"md",align:"stretch",style:{padding:a.paddingContentHorizontal,maxWidth:a.screenLG},children:[(0,x.jsxs)(o.A,{justify:"start",gap:"xs",children:[(0,x.jsx)(j.A,{prefix:(0,x.jsx)(_.A,{}),placeholder:n("settings.SearchPlaceholder"),onChange:e=>c(e.target.value),value:i}),(0,x.jsx)(S.A,{onChange:e=>h(e.target.checked),style:{whiteSpace:"nowrap"},children:n("settings.ShowOnlyChanged")}),(0,x.jsx)(g.Ay,{icon:(0,x.jsx)(q.A,{}),onClick:()=>b(),children:n("button.Reset")})]}),(0,x.jsx)(E.A,{className:l.TabStyles,tabPosition:s?"left":"top",tabBarStyle:{minWidth:200},items:D().map(k,(e=>{const t=e.settingItems.filter((e=>(!d||(e=>null!==e.value&&void 0!==e.value&&e.value!==e.defaultValue)(e))&&(e=>e.title.toLowerCase().includes(i.toLowerCase())||"string"===typeof e.description&&e.description.toLowerCase().includes(i.toLowerCase()))(e)));return{key:e.title,label:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.A.Text,{children:e.title}),(0,x.jsx)(p.A.Text,{type:"secondary",children:` (${t.length})`})]}),children:(0,x.jsx)(o.A,{direction:"column",gap:"lg",align:"start",children:t.map((e=>(0,x.jsx)(I,{...e})))})}}))})]}),(0,x.jsx)(r.A,{open:f,title:n("dialog.ask.DoYouWantToResetChanges"),okText:n("button.Reset"),okButtonProps:{danger:!0},onOk:()=>{D().flatMap(t,(e=>e.settingItems)).forEach((e=>{(null===e||void 0===e?void 0:e.setValue)&&e.setValue(e.defaultValue)})),b()},cancelText:n("button.Cancel"),onCancel:()=>b(),children:(0,x.jsx)(R.A,{showIcon:!0,message:n("dialog.warning.CannotBeUndone"),type:"warning"})})]})};var P=s(58879),F=s(7194),V=s(50500),U=s(35593);const W=e=>{let{value:t,onChange:s,language:n="shell",editable:a=!1,showLineNumbers:l=!0,lineWrapping:i=!1,...r}=e;const[o,c]=(0,F.A)({defaultValue:"",value:t,onChange:s}),u=[(0,V.rI)(n)];return(0,x.jsx)(U.Ay,{theme:"dark",extensions:i?[U.Lz.lineWrapping,...u]:u,editable:a,readOnly:!a,basicSetup:{lineNumbers:l},...r,value:o,onChange:(e,t)=>c(e)})};var H=s(64703),O=s(44733),N=s(32141);const G=e=>{let{onRequestClose:t,shellInfo:s,...n}=e;const{t:a}=(0,m.Bd)(),l=O.A.useApp(),[c,u]=(0,y.useState)(".bashrc"),[d,h]=(0,y.useState)(""),[f,b]=(0,y.useState)([]),j=(0,P.QE)(),k=(0,i.ET)({mutationFn:e=>j({method:"POST",url:"/user-config/bootstrap-script",body:{script:e}})}),v=(0,i.ET)({mutationFn:e=>j({method:"PATCH",url:"/user-config/dotfiles",body:{data:e,path:c,permission:"644"}})}),A=(0,i.ET)({mutationFn:e=>j({method:"POST",url:"/user-config/dotfiles",body:{path:c,data:e,permission:"644"}})}),C=(0,i.ET)({mutationFn:()=>j({method:"DELETE",url:"/user-config/dotfiles",body:{path:c}})}),S=()=>{"bootstrap"===s&&j({method:"GET",url:"/user-config/bootstrap-script"}).then((e=>{h(e)})),"userconfig"===s&&j({method:"GET",url:"/user-config/dotfiles"}).then((e=>{const t=D().find(e,{path:c});h((null===t||void 0===t?void 0:t.data)||""),b(e)}))};(0,y.useMemo)((()=>{S()}),[s]);const T=function(){let{closeAfter:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("bootstrap"===s){if(!d)return void l.message.error(a("usersettings.BootstrapScriptEmpty"));k.mutate(d,{onSuccess:s=>{l.message.success(a("usersettings.BootstrapScriptUpdated")),e&&t()},onError:e=>{l.message.error(e.message),console.error(e)}})}if("userconfig"===s){D().find(f,{path:c})?v.mutate(d,{onSuccess:s=>{l.message.success(a("usersettings.DescScriptUpdated")),e?t():S()},onError:e=>{l.message.error(a("usersettings.DescNewUserConfigFileCreated")),console.error(e)}}):A.mutate(d,{onSuccess:s=>{l.message.success(a("usersettings.DescScriptCreated")),e?t():S()},onError:e=>{l.message.error(a("usersettings.DescNewUserConfigFileCreated")),console.error(e)}})}},K=()=>{"bootstrap"===s&&k.mutate("",{onSuccess:e=>{l.message.success(a("usersettings.BootstrapScriptDeleted")),t()},onError:e=>{l.message.error(e.message),console.error(e)}}),"userconfig"===s&&C.mutate(void 0,{onSuccess:e=>{l.message.success(`${a("usersettings.DescScriptDeleted")}${c}`),t()},onError:e=>{l.message.error(e.message),console.error(e)}})};return(0,x.jsx)(r.A,{width:800,title:a("bootstrap"===s?"usersettings.EditBootstrapScript":"usersettings.EditUserConfigScript"),onCancel:()=>t(),okText:a("button.Save"),footer:[(0,x.jsxs)(o.A,{justify:"between",style:{width:"100%"},children:[(0,x.jsx)(o.A,{children:(0,x.jsx)(N.A.Button,{type:"default",danger:!0,style:{width:"fit-content"},menu:{items:[{key:"reset",label:a("button.Reset"),onClick:()=>{l.modal.confirm({title:a("dialog.title.LetsDouble-Check"),content:a("dialog.ask.DoYouWantToResetChanges"),onOk:()=>{"bootstrap"===s&&h(""),"userconfig"===s&&h("")}})},danger:!0}]},onClick:()=>{l.modal.confirm({title:a("dialog.title.LetsDouble-Check"),content:a("dialog.ask.DoYouWantToDeleteSomething",{name:"bootstrap"===s?"Bootstrap script":`${c}`}),onOk:K})},children:(0,x.jsx)(H.A,{})})}),(0,x.jsxs)(o.A,{gap:"sm",children:[(0,x.jsx)(g.Ay,{onClick:()=>t(),style:{width:"fit-content"},children:a("button.Cancel")},"cancel"),(0,x.jsx)(N.A.Button,{type:"primary",onClick:()=>{T()},style:{width:"fit-content"},menu:{items:[{key:"save",label:a("button.SaveWithoutClose"),onClick:()=>T({closeAfter:!1})}]},children:a("button.SaveAndClose")},"submit")]})]})],destroyOnClose:!0,...n,children:(0,x.jsxs)(o.A,{direction:"column",align:"stretch",gap:"sm",children:[(0,x.jsx)(p.A.Text,{children:a("usersettings.BootstrapScriptDescription")}),"userconfig"===s&&(0,x.jsx)(w.A,{defaultValue:".bashrc",onChange:e=>{const t=D().find(f,{path:e});h((null===t||void 0===t?void 0:t.data)||""),u(e)},options:[{value:".bashrc"},{value:".zshrc"},{value:".tmux.conf.local"},{value:".vimrc"},{value:".Renviron"}],style:{width:"200px"}}),(0,x.jsx)(W,{onChange:e=>h(e),language:"shell",editable:!0,value:d})]})})};var z=s(22960),Q=s(81850),$=s(72269),X=s(12121);const Y=(0,X.withDefault)(X.StringParam,"general"),J=()=>{const{t:e}=(0,m.Bd)(),[t,s]=(0,X.useQueryParam)("tab",Y),[l,i]=(0,z.q)("desktop_notification"),[r,o]=(0,z.q)("classic_session_launcher"),[c,u]=(0,z.q)("compact_sidebar"),[d,h]=(0,z.q)("selected_language"),[,p]=(0,z.f)("language"),[f,b]=(0,z.q)("automatic_update_check"),[j,k]=(0,z.q)("auto_logout"),[C,{toggle:S}]=(0,v.A)(!1),[w,{toggle:T}]=(0,v.A)(!1),[K,I]=(0,z.q)("preserve_login"),[_,q]=(0,y.useState)("bootstrap"),[E,{toggle:R}]=(0,v.A)(!1),L=[{title:e("usersettings.Preferences"),settingItems:[{type:"checkbox",title:e("usersettings.DesktopNotification"),description:(0,x.jsx)(m.x6,{i18nKey:"usersettings.DescDesktopNotification"}),defaultValue:!1,value:l,setValue:i,onChange:e=>{i(e.target.checked)}},{type:"checkbox",title:e("usersettings.UseCompactSidebar"),description:(0,x.jsx)(m.x6,{i18nKey:"usersettings.DescUseCompactSidebar"}),defaultValue:!1,value:c,setValue:u,onChange:e=>{u(e.target.checked)}},{type:"select",title:e("usersettings.Language"),description:e("usersettings.DescLanguage"),selectProps:{options:[{label:e("language.OSDefault"),value:"default"},{label:e("language.English"),value:"en"},{label:e("language.Korean"),value:"ko"},{label:e("language.Brazilian"),value:"pt-BR"},{label:e("language.Chinese"),value:"zh-CN"},{label:e("language.Chinese (Simplified)"),value:"zh-TW"},{label:e("language.French"),value:"fr"},{label:e("language.Finnish"),value:"fi"},{label:e("language.German"),value:"de"},{label:e("language.Greek"),value:"el"},{label:e("language.Indonesian"),value:"id"},{label:e("language.Italian"),value:"it"},{label:e("language.Japanese"),value:"ja"},{label:e("language.Mongolian"),value:"mn"},{label:e("language.Polish"),value:"pl"},{label:e("language.Portuguese"),value:"pt"},{label:e("language.Russian"),value:"ru"},{label:e("language.Spanish"),value:"es"},{label:e("language.Thai"),value:"th"},{label:e("language.Turkish"),value:"tr"},{label:e("language.Vietnamese"),value:"vi"}],showSearch:!0},defaultValue:"default",value:d||"default",setValue:h,onChange:e=>{h(e);const t=globalThis.navigator.language.split("-")[0],s=new CustomEvent("language-changed",{detail:{language:"default"===e?t:e}});p("default"===e?t:e),document.dispatchEvent(s),console.log(globalThis.backendaioptions.get("selected_language"))}},...[globalThis.isElectron&&{type:"checkbox",title:e("usersettings.KeepLoginSessionInformation"),description:(0,x.jsx)(m.x6,{i18nKey:"usersettings.DescKeepLoginSessionInformation"}),defaultValue:!1,value:K,onChange:e=>{I(e.target.checked)}}].filter(Boolean),{type:"checkbox",title:e("usersettings.AutomaticUpdateCheck"),description:(0,x.jsx)(m.x6,{i18nKey:"usersettings.DescAutomaticUpdateCheck"}),defaultValue:!1,value:f,setValue:b,onChange:e=>{b(e.target.checked)}},{type:"checkbox",title:e("usersettings.AutoLogout"),description:e("usersettings.DescAutoLogout"),defaultValue:!1,value:j,setValue:k,onChange:e=>{k(e.target.checked)}},{type:"custom",title:e("usersettings.MyKeypairInfo"),description:e("usersettings.DescMyKeypairInfo"),children:(0,x.jsx)(g.Ay,{icon:(0,x.jsx)(Q.A,{}),onClick:()=>S(),children:e("button.Config")})},{type:"custom",title:e("usersettings.SSHKeypairManagement"),description:e("usersettings.DescSSHKeypairManagement"),children:(0,x.jsx)(g.Ay,{icon:(0,x.jsx)(Q.A,{}),onClick:()=>T(),children:e("button.Config")})},{type:"checkbox",title:e("usersettings.ClassicSessionLauncher"),description:e("usersettings.DescClassicSessionLauncher"),defaultValue:!1,value:r,onChange:e=>{o(e.target.checked)}}]},{title:e("usersettings.ShellEnvironments"),settingItems:[{type:"custom",title:e("usersettings.EditBootstrapScript"),children:(0,x.jsx)(g.Ay,{icon:(0,x.jsx)(Q.A,{}),onClick:()=>{q("bootstrap"),R()},children:e("button.Config")})},{type:"custom",title:e("usersettings.EditUserConfigScript"),children:(0,x.jsx)(g.Ay,{icon:(0,x.jsx)(Q.A,{}),onClick:()=>{q("userconfig"),R()},children:e("button.Config")})}]}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)($.A,{activeTabKey:t,onTabChange:e=>s(e),tabList:[{key:"general",label:e("usersettings.General")},{key:"logs",label:e("usersettings.Logs")}],bodyStyle:{padding:0},children:["general"===t&&(0,x.jsx)(B,{settingGroup:L}),"logs"===t&&(0,x.jsx)(n.default,{})]}),(0,x.jsx)(a.default,{open:C,onRequestClose:S}),(0,x.jsx)(A,{open:w,onRequestClose:T}),_&&(0,x.jsx)(G,{open:E,shellInfo:_,onRequestClose:()=>{R()},afterClose:()=>{q(void 0)}})]})}}}]);
//# sourceMappingURL=9198.a4b2b759.chunk.js.map