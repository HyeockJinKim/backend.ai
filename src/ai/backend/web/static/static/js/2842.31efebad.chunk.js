"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[2842],{82842:(e,l,a)=>{a.r(l),a.d(l,{default:()=>C});var n,i=a(51593),r=a(11899),s=a(60881),o=a(94126),t=a(45719),u=a(11393),d=a(58879),c=a(69056),m=a(89608),p=a.n(m),g=a(56762),y=a(88789),_=a(73689);const k=e=>{let{...l}=e;const{t:i}=(0,g.Bd)(),{user_resource_policies:r}=(0,y.useLazyLoadQuery)(void 0!==n?n:n=a(14648),{},{fetchPolicy:"store-and-network"});return(0,_.jsx)(c.A,{showSearch:!0,placeholder:i("credential.SelectPolicy"),options:p().map(r,(e=>({value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name}))).sort(((e,l)=>(0,d._f)(null===e||void 0===e?void 0:e.label,null===l||void 0===l?void 0:l.label))),...l})};var v,S,f,F=a(67592),b=a(55731),K=a(50868),h=a(44733),A=a(85029),T=a(23702),x=a(67378),M=a(15480),w=a(52515),U=a(43373);const P={active:"Active",inactive:"Inactive","before-verification":"Before Verification",deleted:"Deleted"},N={superadmin:["superadmin","admin","user","monitor"],admin:["admin","user","monitor"]},C=e=>{let{extraFetchKey:l="",...n}=e;const{value:d,dispatchEvent:m}=(0,t.useWebComponentInfo)();let C;try{C=JSON.parse(d||"")}catch(ie){C={open:!1,userEmail:""}}const{open:L,userEmail:O}=C,{t:j}=(0,g.Bd)(),{token:E}=K.A.useToken(),{modal:$}=h.A.useApp(),V=(0,U.useRef)(null),I=(0,r.Am)(),R=(0,i.eZ)(),D=(0,i.CX)(),q=null===D||void 0===D?void 0:D.supports("sudo-session-enabled"),{isTOTPSupported:B,isLoading:Q}=(0,r.F4)(),[z,{toggle:G}]=(0,b.A)(!1),[W,Y]=(0,i.Tw)("initial-fetch"),Z=(0,U.useDeferredValue)(W+l),{user:J}=(0,y.useLazyLoadQuery)(void 0!==v?v:v=a(95842),{email:null!==O&&void 0!==O?O:"",isNotSupportSudoSessionEnabled:!q,isNotSupportTotp:!B},{fetchKey:Z,fetchPolicy:"network-only"}),[X,H]=(0,y.useMutation)(void 0!==S?S:S=a(41935)),[ee,le]=(0,y.useMutation)(void 0!==f?f:f=a(2297)),ae=(0,s.ET)({mutationFn:e=>D.remove_totp(e)}),ne={email:"",username:"",need_password_change:!1,full_name:"",description:"",status:"active",domain_name:R,role:"user",is_active:!0,resource_policy:"default"};return(0,_.jsxs)(o.A,{open:L,onCancel:()=>{m("cancel",null)},centered:!0,title:j(J?"credential.ModifyUserDetail":"credential.CreateUser"),destroyOnClose:!0,onOk:()=>{var e;null===(e=V.current)||void 0===e||e.validateFields().then((async e=>{if(J){const l=p().omitBy(p().omit(e,["email","password_confirm"]),p().isEmpty);X({variables:{email:(null===e||void 0===e?void 0:e.email)||"",props:l,isNotSupportSudoSessionEnabled:!q,isNotSupportTotp:!B},onCompleted:(e,l)=>{var a,n;if(null===e||void 0===e||null===(a=e.modify_user)||void 0===a||!a.ok)return A.Ay.error(j("dialog.ErrorOccurred")),console.error(null===e||void 0===e||null===(n=e.modify_user)||void 0===n?void 0:n.msg),void m("cancel",null);if(l&&l.length>0){const e=p().map(l,(e=>e.message));for(const l of e)A.Ay.error(l,2.5);m("cancel",null)}A.Ay.success(j("environment.SuccessfullyModified")),m("ok",null)},onError:e=>{A.Ay.error(j("dialog.ErrorOccurred")),console.error(e)}})}else{const l=[await D.group.list().then((e=>{var l;return null===(l=p().find(e.groups,{name:"default"}))||void 0===l?void 0:l.id}))],a={...p().omit(e,["email","password_confirm"]),password:e.password,need_password_change:e.need_password_change,username:(null===e||void 0===e?void 0:e.username)||p().split(e.email,"@")[0],full_name:(null===e||void 0===e?void 0:e.full_name)||p().split(e.email,"@")[0],description:(null===e||void 0===e?void 0:e.description)||`${p().split(e.email,"@")[0]}'s Account`,group_ids:l};ee({variables:{email:(null===e||void 0===e?void 0:e.email)||"",props:a,isNotSupportSudoSessionEnabled:!q,isNotSupportTotp:!B},onCompleted:(e,l)=>{var a,n,i,r;if(null===e||void 0===e||null===(a=e.create_user)||void 0===a||!a.ok)return A.Ay.error(null!==(n=e.create_user)&&void 0!==n&&null!==(i=n.msg)&&void 0!==i&&i.includes("already exists")?j("credential.UserAccountCreatedError"):j("dialog.ErrorOccurred")),console.error(null===e||void 0===e||null===(r=e.create_user)||void 0===r?void 0:r.msg),void m("cancel",null);if(l&&l.length>0){const e=p().map(l,(e=>e.message));for(const l of e)A.Ay.error(l,2.5);m("cancel",null)}A.Ay.success(j("environment.SuccessfullyCreated")),m("ok",null)},onError:e=>{A.Ay.error(j("dialog.ErrorOccurred")),console.error(e)}})}})).catch((e=>console.error(e)))},confirmLoading:H||le,...n,children:[(0,_.jsxs)(T.A,{ref:V,preserve:!1,labelCol:{span:10},wrapperCol:{span:20},validateTrigger:["onChange","onBlur"],style:{marginBottom:40,marginTop:E.marginMD},initialValues:J?{...J}:ne,children:[(0,_.jsx)(T.A.Item,{name:"email",label:j("credential.UserID"),rules:[{required:!J},{type:"email"}],children:(0,_.jsx)(x.A,{disabled:!!J})}),(0,_.jsx)(T.A.Item,{name:"username",label:j("credential.UserName"),rules:[{max:64}],children:(0,_.jsx)(x.A,{placeholder:j("maxLength.64chars")})}),(0,_.jsx)(T.A.Item,{name:"full_name",label:j("credential.FullName"),rules:[{max:64}],children:(0,_.jsx)(x.A,{placeholder:j("maxLength.64chars")})}),(0,_.jsx)(T.A.Item,{name:"password",label:j(J?"general.NewPassword":"general.Password"),rules:[{required:!J},{pattern:/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[_\W]).{8,}$/,message:j("webui.menu.InvalidPasswordMessage")}],children:(0,_.jsx)(x.A.Password,{})}),(0,_.jsx)(T.A.Item,{name:"password_confirm",dependencies:["password"],label:j(J?"webui.menu.NewPasswordAgain":"general.ConfirmPassword"),rules:[{required:!J,message:""},e=>{let{getFieldValue:l}=e;return{validator:(e,a)=>!a&&l("password")?Promise.reject(new Error(j("webui.menu.PleaseConfirmYourPassword"))):a&&l("password")!==a?Promise.reject(new Error(j("environment.PasswordsDoNotMatch"))):Promise.resolve()}}],children:(0,_.jsx)(x.A.Password,{})}),(0,_.jsx)(T.A.Item,{name:"description",label:j("credential.Description"),rules:[{max:500}],children:(0,_.jsx)(x.A.TextArea,{placeholder:j("maxLength.500chars")})}),(0,_.jsx)(T.A.Item,{name:"status",label:j("credential.UserStatus"),children:(0,_.jsx)(c.A,{options:p().map(P,((e,l)=>({value:l,label:e})))})}),!(null===J||void 0===J||!J.role)&&!!I&&I in N&&(0,_.jsx)(T.A.Item,{name:"role",label:j("credential.Role"),children:(0,_.jsx)(c.A,{options:p().map(N[I],(e=>({value:e,label:e})))})}),(0,_.jsx)(T.A.Item,{name:"need_password_change",label:j("credential.DescRequirePasswordChange"),valuePropName:"checked",children:(0,_.jsx)(M.A,{})}),!!q&&(0,_.jsx)(T.A.Item,{name:"sudo_session_enabled",label:j("credential.EnableSudoSession"),valuePropName:"checked",children:(0,_.jsx)(M.A,{})}),!!B&&(0,_.jsx)(T.A.Item,{name:"totp_activated",label:j("webui.menu.TotpActivated"),valuePropName:"checked",extra:(null===J||void 0===J?void 0:J.email)!==(null===D||void 0===D?void 0:D.email)&&(0,_.jsx)(w.A.Text,{type:"secondary",style:{fontSize:E.fontSizeSM},children:j("credential.AdminCanOnlyRemoveTotp")}),children:(0,_.jsx)(M.A,{loading:Q||ae.isPending,disabled:(null===J||void 0===J?void 0:J.email)!==(null===D||void 0===D?void 0:D.email)&&!(null!==J&&void 0!==J&&J.totp_activated),onChange:e=>{var l;e?G():null!==J&&void 0!==J&&J.totp_activated&&(null===(l=V.current)||void 0===l||l.setFieldValue("totp_activated",!0),$.confirm({title:j("totp.TurnOffTotp"),icon:(0,_.jsx)(F.A,{}),content:j("totp.ConfirmTotpRemovalBody"),okText:j("button.Yes"),okType:"danger",cancelText:j("button.No"),onOk(){ae.mutate((null===J||void 0===J?void 0:J.email)||"",{onSuccess:()=>{var e;A.Ay.success(j("totp.RemoveTotpSetupCompleted")),Y(),null===(e=V.current)||void 0===e||e.setFieldValue("totp_activated",!1)},onError:e=>{console.log(e)}})},onCancel(){var e;null===(e=V.current)||void 0===e||e.setFieldValue("totp_activated",!0)}}))}})}),(0,_.jsx)(T.A.Item,{name:"resource_policy",label:j("resourcePolicy.ResourcePolicy"),rules:[{required:!J}],children:(0,_.jsx)(k,{})})]}),!!B&&(0,_.jsx)(u.A,{userFrgmt:J,open:z,onRequestClose:e=>{var l;e?Y():null===(l=V.current)||void 0===l||l.setFieldValue("totp_activated",!1);G()}})]})}},14648:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});const n=function(){var e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"max_vfolder_count",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"max_session_count_per_model_session",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"max_quota_scope_size",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"max_customized_image_count",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UserResourcePolicySelectorQuery",selections:[{alias:null,args:null,concreteType:"UserResourcePolicy",kind:"LinkedField",name:"user_resource_policies",plural:!0,selections:[e,l,a,n,i,r,s,{args:null,kind:"FragmentSpread",name:"UserResourcePolicySettingModalFragment"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"UserResourcePolicySelectorQuery",selections:[{alias:null,args:null,concreteType:"UserResourcePolicy",kind:"LinkedField",name:"user_resource_policies",plural:!0,selections:[e,l,a,n,i,r,s],storageKey:null}]},params:{cacheID:"5c0bb0244594feb3fc33aadcac7ffb2f",id:null,metadata:{},name:"UserResourcePolicySelectorQuery",operationKind:"query",text:'query UserResourcePolicySelectorQuery {\n  user_resource_policies {\n    id\n    name\n    created_at\n    max_vfolder_count @since(version: "23.09.6")\n    max_session_count_per_model_session @since(version: "23.09.10")\n    max_quota_scope_size @since(version: "23.09.2")\n    max_customized_image_count @since(version: "24.03.0")\n    ...UserResourcePolicySettingModalFragment\n  }\n}\n\nfragment UserResourcePolicySettingModalFragment on UserResourcePolicy {\n  id\n  name\n  max_vfolder_count @since(version: "23.09.6")\n  max_session_count_per_model_session @since(version: "23.09.10")\n  max_quota_scope_size @since(version: "23.09.2")\n  max_customized_image_count @since(version: "24.03.0")\n}\n'}}}();n.hash="df2a28e16edd8e8b4791053a89f9917f";const i=n},2297:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});const n=function(){var e={defaultValue:null,kind:"LocalArgument",name:"email"},l={defaultValue:null,kind:"LocalArgument",name:"isNotSupportSudoSessionEnabled"},a={defaultValue:null,kind:"LocalArgument",name:"isNotSupportTotp"},n={defaultValue:null,kind:"LocalArgument",name:"props"},i=[{kind:"Variable",name:"email",variableName:"email"},{kind:"Variable",name:"props",variableName:"props"}],r={alias:null,args:null,kind:"ScalarField",name:"ok",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"msg",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},_={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"sudo_session_enabled",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null};return{fragment:{argumentDefinitions:[e,l,a,n],kind:"Fragment",metadata:null,name:"UserSettingModalCreateMutation",selections:[{alias:null,args:i,concreteType:"CreateUser",kind:"LinkedField",name:"create_user",plural:!1,selections:[r,s,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[o,t,u,d,c,m,p,g,y,_,k,v,S,{args:null,kind:"FragmentSpread",name:"TOTPActivateModalFragment"}],storageKey:null}],storageKey:null}],type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,n,l,a],kind:"Operation",name:"UserSettingModalCreateMutation",selections:[{alias:null,args:i,concreteType:"CreateUser",kind:"LinkedField",name:"create_user",plural:!1,selections:[r,s,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[o,t,u,d,c,m,p,g,y,_,k,v,S],storageKey:null}],storageKey:null}]},params:{cacheID:"b78883f2b7e7a10f064f61e031445525",id:null,metadata:{},name:"UserSettingModalCreateMutation",operationKind:"mutation",text:"mutation UserSettingModalCreateMutation(\n  $email: String!\n  $props: UserInput!\n  $isNotSupportSudoSessionEnabled: Boolean!\n  $isNotSupportTotp: Boolean!\n) {\n  create_user(email: $email, props: $props) {\n    ok\n    msg\n    user {\n      id\n      email\n      username\n      need_password_change\n      full_name\n      description\n      status\n      domain_name\n      role\n      groups {\n        id\n        name\n      }\n      resource_policy\n      sudo_session_enabled @skipOnClient(if: $isNotSupportSudoSessionEnabled)\n      totp_activated @skipOnClient(if: $isNotSupportTotp)\n      ...TOTPActivateModalFragment\n    }\n  }\n}\n\nfragment TOTPActivateModalFragment on User {\n  email\n  totp_activated @skipOnClient(if: $isNotSupportTotp)\n}\n"}}}();n.hash="da6a0b51b106d3285d157ffa3bae33e9";const i=n},41935:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});const n=function(){var e={defaultValue:null,kind:"LocalArgument",name:"email"},l={defaultValue:null,kind:"LocalArgument",name:"isNotSupportSudoSessionEnabled"},a={defaultValue:null,kind:"LocalArgument",name:"isNotSupportTotp"},n={defaultValue:null,kind:"LocalArgument",name:"props"},i=[{kind:"Variable",name:"email",variableName:"email"},{kind:"Variable",name:"props",variableName:"props"}],r={alias:null,args:null,kind:"ScalarField",name:"ok",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"msg",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},_={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"sudo_session_enabled",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null};return{fragment:{argumentDefinitions:[e,l,a,n],kind:"Fragment",metadata:null,name:"UserSettingModalModifyMutation",selections:[{alias:null,args:i,concreteType:"ModifyUser",kind:"LinkedField",name:"modify_user",plural:!1,selections:[r,s,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[o,t,u,d,c,m,p,g,y,_,k,v,S,{args:null,kind:"FragmentSpread",name:"TOTPActivateModalFragment"}],storageKey:null}],storageKey:null}],type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,n,l,a],kind:"Operation",name:"UserSettingModalModifyMutation",selections:[{alias:null,args:i,concreteType:"ModifyUser",kind:"LinkedField",name:"modify_user",plural:!1,selections:[r,s,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[o,t,u,d,c,m,p,g,y,_,k,v,S],storageKey:null}],storageKey:null}]},params:{cacheID:"3c14d927cc4b33a11b36b4164a99b4b3",id:null,metadata:{},name:"UserSettingModalModifyMutation",operationKind:"mutation",text:"mutation UserSettingModalModifyMutation(\n  $email: String!\n  $props: ModifyUserInput!\n  $isNotSupportSudoSessionEnabled: Boolean!\n  $isNotSupportTotp: Boolean!\n) {\n  modify_user(email: $email, props: $props) {\n    ok\n    msg\n    user {\n      id\n      email\n      username\n      need_password_change\n      full_name\n      description\n      status\n      domain_name\n      role\n      groups {\n        id\n        name\n      }\n      resource_policy\n      sudo_session_enabled @skipOnClient(if: $isNotSupportSudoSessionEnabled)\n      totp_activated @skipOnClient(if: $isNotSupportTotp)\n      ...TOTPActivateModalFragment\n    }\n  }\n}\n\nfragment TOTPActivateModalFragment on User {\n  email\n  totp_activated @skipOnClient(if: $isNotSupportTotp)\n}\n"}}}();n.hash="bc8377f1ce18b00d8a7a4eacc523d362";const i=n},95842:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});const n=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"email"},{defaultValue:null,kind:"LocalArgument",name:"isNotSupportSudoSessionEnabled"},{defaultValue:null,kind:"LocalArgument",name:"isNotSupportTotp"}],l=[{kind:"Variable",name:"email",variableName:"email"}],a={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"sudo_session_enabled",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"UserSettingModalQuery",selections:[{alias:null,args:l,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[a,n,i,r,s,o,t,u,c,m,p,g,{args:null,kind:"FragmentSpread",name:"TOTPActivateModalFragment"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"UserSettingModalQuery",selections:[{alias:null,args:l,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[a,n,i,r,s,o,t,u,c,m,p,g,d],storageKey:null}]},params:{cacheID:"bac70fdc2febe6e71fe3e2e68dd70136",id:null,metadata:{},name:"UserSettingModalQuery",operationKind:"query",text:"query UserSettingModalQuery(\n  $email: String\n  $isNotSupportSudoSessionEnabled: Boolean!\n  $isNotSupportTotp: Boolean!\n) {\n  user(email: $email) {\n    email\n    username\n    need_password_change\n    full_name\n    description\n    status\n    domain_name\n    role\n    groups {\n      id\n      name\n    }\n    resource_policy\n    sudo_session_enabled @skipOnClient(if: $isNotSupportSudoSessionEnabled)\n    totp_activated @skipOnClient(if: $isNotSupportTotp)\n    ...TOTPActivateModalFragment\n    id\n  }\n}\n\nfragment TOTPActivateModalFragment on User {\n  email\n  totp_activated @skipOnClient(if: $isNotSupportTotp)\n}\n"}}}();n.hash="69a4050361fa30fd6cbc230a027ae19d";const i=n}}]);
//# sourceMappingURL=2842.31efebad.chunk.js.map