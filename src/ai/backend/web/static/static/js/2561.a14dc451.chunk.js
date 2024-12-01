"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[2561],{82561:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p});var l,s=a(94126),i=a(15634),o=a(77918),r=a(43373),t=a(88789),d=a(73689);const u=e=>{let{sessionId:n,afterClose:s}=e;const u=(0,i.hd)(),[c,m]=(0,r.useState)(!0),{compute_session_node:g}=(0,t.useLazyLoadQuery)(void 0!==l?l:l=a(10049),{sessionId:n,project_id:u.id});return g&&(0,d.jsx)(o.A,{maskTransitionName:c?"":void 0,transitionName:c?"":void 0,sessionFrgmt:g,open:c,onCancel:()=>{m(!1)},afterClose:()=>{null===s||void 0===s||s()}})};var c=a(77757),m=a(34948),g=a(12121);const p=()=>{const[e,n]=(0,g.useQueryParam)("sessionDetail",g.StringParam),[a,l]=(0,r.useState)();return(0,r.useEffect)((()=>{const e=e=>{l(e.detail)};return document.addEventListener("bai-open-session-log",e),()=>{document.removeEventListener("bai-open-session-log",e)}}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.A,{open:!e,sessionId:e||void 0,onClose:()=>{n(null,"replaceIn")}}),a&&(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(s.A,{open:!0,width:"100%",styles:{header:{width:"100%"},body:{height:"calc(100vh - 100px)",maxHeight:"calc(100vh - 100px)"}},footer:null,children:(0,d.jsx)(m.A,{active:!0})}),children:(0,d.jsx)(u,{sessionId:a,afterClose:()=>{l(void 0)}})})]})}},10049:(e,n,a)=>{a.r(n),a.d(n,{default:()=>s});const l=function(){var e={defaultValue:null,kind:"LocalArgument",name:"project_id"},n={defaultValue:null,kind:"LocalArgument",name:"sessionId"},a=[{kind:"Variable",name:"id",variableName:"sessionId"},{kind:"Variable",name:"project_id",variableName:"project_id"}],l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"row_id",storageKey:null};return{fragment:{argumentDefinitions:[e,n],kind:"Fragment",metadata:null,name:"ContainerLogModalWithLazyQueryLoaderQuery",selections:[{alias:null,args:a,concreteType:"ComputeSessionNode",kind:"LinkedField",name:"compute_session_node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ContainerLogModalFragment"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,e],kind:"Operation",name:"ContainerLogModalWithLazyQueryLoaderQuery",selections:[{alias:null,args:a,concreteType:"ComputeSessionNode",kind:"LinkedField",name:"compute_session_node",plural:!1,selections:[l,s,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"access_key",storageKey:null},{alias:null,args:null,concreteType:"KernelConnection",kind:"LinkedField",name:"kernel_nodes",plural:!1,selections:[{alias:null,args:null,concreteType:"KernelEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"KernelNode",kind:"LinkedField",name:"node",plural:!1,selections:[l,s,{alias:null,args:null,kind:"ScalarField",name:"container_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cluster_idx",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cluster_role",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"7b98b0ea1543062a5dec07d96bbad320",id:null,metadata:{},name:"ContainerLogModalWithLazyQueryLoaderQuery",operationKind:"query",text:"query ContainerLogModalWithLazyQueryLoaderQuery(\n  $sessionId: GlobalIDField!\n  $project_id: UUID!\n) {\n  compute_session_node(id: $sessionId, project_id: $project_id) {\n    ...ContainerLogModalFragment\n    id\n  }\n}\n\nfragment ContainerLogModalFragment on ComputeSessionNode {\n  id\n  row_id\n  name\n  status\n  access_key\n  kernel_nodes {\n    edges {\n      node {\n        id\n        row_id\n        container_id\n        cluster_idx\n        cluster_role\n      }\n    }\n  }\n}\n"}}}();l.hash="6c9b5934d5fea075e571c13b1c070bd1";const s=l}}]);
//# sourceMappingURL=2561.a14dc451.chunk.js.map