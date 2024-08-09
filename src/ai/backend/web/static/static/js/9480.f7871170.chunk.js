"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[9480],{10840:(n,e,c)=>{c.d(e,{A:()=>o});var t=c(13353),a=c(76998),i=c(22226);const o=function(n){void 0===n&&(n=[]);var e=(0,a.useRef)(-1),c=(0,a.useRef)([]),o=(0,a.useCallback)((function(n){e.current+=1,c.current.splice(n,0,e.current)}),[]),r=(0,t.zs)((0,a.useState)((function(){return n.forEach((function(n,e){o(e)})),n})),2),l=r[0],d=r[1],u=(0,a.useCallback)((function(n){c.current=[],d((function(){return n.forEach((function(n,e){o(e)})),n}))}),[]),s=(0,a.useCallback)((function(n,e){d((function(c){var a=(0,t.fX)([],(0,t.zs)(c),!1);return a.splice(n,0,e),o(n),a}))}),[]),h=(0,a.useCallback)((function(n){return c.current[n]}),[]),g=(0,a.useCallback)((function(n){return c.current.findIndex((function(e){return e===n}))}),[]),f=(0,a.useCallback)((function(n,e){d((function(c){var a=(0,t.fX)([],(0,t.zs)(c),!1);return e.forEach((function(e,c){o(n+c)})),a.splice.apply(a,(0,t.fX)([n,0],(0,t.zs)(e),!1)),a}))}),[]),m=(0,a.useCallback)((function(n,e){d((function(c){var a=(0,t.fX)([],(0,t.zs)(c),!1);return a[n]=e,a}))}),[]),k=(0,a.useCallback)((function(n){d((function(e){var a=(0,t.fX)([],(0,t.zs)(e),!1);a.splice(n,1);try{c.current.splice(n,1)}catch(i){console.error(i)}return a}))}),[]),b=(0,a.useCallback)((function(n){Array.isArray(n)?n.length&&d((function(e){var t=[],a=e.filter((function(e,c){var a=!n.includes(c);return a&&t.push(h(c)),a}));return c.current=t,a})):i.A&&console.error('`indexes` parameter of `batchRemove` function expected to be an array, but got "'.concat(typeof n,'".'))}),[]),p=(0,a.useCallback)((function(n,e){n!==e&&d((function(a){var i=(0,t.fX)([],(0,t.zs)(a),!1),o=i.filter((function(e,c){return c!==n}));o.splice(e,0,i[n]);try{var r=c.current.filter((function(e,c){return c!==n}));r.splice(e,0,c.current[n]),c.current=r}catch(l){console.error(l)}return o}))}),[]),S=(0,a.useCallback)((function(n){d((function(e){return o(e.length),e.concat([n])}))}),[]),v=(0,a.useCallback)((function(){try{c.current=c.current.slice(0,c.current.length-1)}catch(n){console.error(n)}d((function(n){return n.slice(0,n.length-1)}))}),[]),C=(0,a.useCallback)((function(n){d((function(e){return o(0),[n].concat(e)}))}),[]),I=(0,a.useCallback)((function(){try{c.current=c.current.slice(1,c.current.length)}catch(n){console.error(n)}d((function(n){return n.slice(1,n.length)}))}),[]),w=(0,a.useCallback)((function(n){return n.map((function(n,e){return{key:e,item:n}})).sort((function(n,e){return g(n.key)-g(e.key)})).filter((function(n){return!!n.item})).map((function(n){return n.item}))}),[]);return{list:l,insert:s,merge:f,replace:m,remove:k,batchRemove:b,getKey:h,getIndex:g,move:p,push:S,pop:v,unshift:C,shift:I,sortList:w,resetList:u}}},82745:(n,e,c)=>{c.d(e,{A:()=>D});var t=c(76998),a=c(28983),i=c(34156),o=c.n(i),r=c(58168),l=c(64467),d=c(5544),u=c(80045),s=c(23551),h=c(36782),g=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],f=t.forwardRef((function(n,e){var c,a=n.prefixCls,i=void 0===a?"rc-switch":a,f=n.className,m=n.checked,k=n.defaultChecked,b=n.disabled,p=n.loadingIcon,S=n.checkedChildren,v=n.unCheckedChildren,C=n.onClick,I=n.onChange,w=n.onKeyDown,y=(0,u.A)(n,g),z=(0,s.A)(!1,{value:m,defaultValue:k}),A=(0,d.A)(z,2),E=A[0],M=A[1];function x(n,e){var c=E;return b||(M(c=n),null===I||void 0===I||I(c,e)),c}var q=o()(i,f,(c={},(0,l.A)(c,"".concat(i,"-checked"),E),(0,l.A)(c,"".concat(i,"-disabled"),b),c));return t.createElement("button",(0,r.A)({},y,{type:"button",role:"switch","aria-checked":E,disabled:b,className:q,ref:e,onKeyDown:function(n){n.which===h.A.LEFT?x(!1,n):n.which===h.A.RIGHT&&x(!0,n),null===w||void 0===w||w(n)},onClick:function(n){var e=x(!E,n);null===C||void 0===C||C(e,n)}}),p,t.createElement("span",{className:"".concat(i,"-inner")},t.createElement("span",{className:"".concat(i,"-inner-checked")},S),t.createElement("span",{className:"".concat(i,"-inner-unchecked")},v)))}));f.displayName="Switch";const m=f;var k=c(45127),b=c(28037),p=c(8565),S=c(67295),v=c(17996),C=c(16420),I=c(64663),w=c(55864),y=c(89514);const z=n=>{const{componentCls:e,trackHeightSM:c,trackPadding:t,trackMinWidthSM:a,innerMinMarginSM:i,innerMaxMarginSM:o,handleSizeSM:r,calc:l}=n,d="".concat(e,"-inner"),u=(0,v.zA)(l(r).add(l(t).mul(2)).equal()),s=(0,v.zA)(l(o).mul(2).equal());return{[e]:{["&".concat(e,"-small")]:{minWidth:a,height:c,lineHeight:(0,v.zA)(c),["".concat(e,"-inner")]:{paddingInlineStart:o,paddingInlineEnd:i,["".concat(d,"-checked, ").concat(d,"-unchecked")]:{minHeight:c},["".concat(d,"-checked")]:{marginInlineStart:"calc(-100% + ".concat(u," - ").concat(s,")"),marginInlineEnd:"calc(100% - ".concat(u," + ").concat(s,")")},["".concat(d,"-unchecked")]:{marginTop:l(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},["".concat(e,"-handle")]:{width:r,height:r},["".concat(e,"-loading-icon")]:{top:l(l(r).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize},["&".concat(e,"-checked")]:{["".concat(e,"-inner")]:{paddingInlineStart:i,paddingInlineEnd:o,["".concat(d,"-checked")]:{marginInlineStart:0,marginInlineEnd:0},["".concat(d,"-unchecked")]:{marginInlineStart:"calc(100% - ".concat(u," + ").concat(s,")"),marginInlineEnd:"calc(-100% + ".concat(u," - ").concat(s,")")}},["".concat(e,"-handle")]:{insetInlineStart:"calc(100% - ".concat((0,v.zA)(l(r).add(t).equal()),")")}},["&:not(".concat(e,"-disabled):active")]:{["&:not(".concat(e,"-checked) ").concat(d)]:{["".concat(d,"-unchecked")]:{marginInlineStart:l(n.marginXXS).div(2).equal(),marginInlineEnd:l(n.marginXXS).mul(-1).div(2).equal()}},["&".concat(e,"-checked ").concat(d)]:{["".concat(d,"-checked")]:{marginInlineStart:l(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:l(n.marginXXS).div(2).equal()}}}}}}},A=n=>{const{componentCls:e,handleSize:c,calc:t}=n;return{[e]:{["".concat(e,"-loading-icon").concat(n.iconCls)]:{position:"relative",top:t(t(c).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"},["&".concat(e,"-checked ").concat(e,"-loading-icon")]:{color:n.switchColor}}}},E=n=>{const{componentCls:e,trackPadding:c,handleBg:t,handleShadow:a,handleSize:i,calc:o}=n,r="".concat(e,"-handle");return{[e]:{[r]:{position:"absolute",top:c,insetInlineStart:c,width:i,height:i,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:t,borderRadius:o(i).div(2).equal(),boxShadow:a,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}},["&".concat(e,"-checked ").concat(r)]:{insetInlineStart:"calc(100% - ".concat((0,v.zA)(o(i).add(c).equal()),")")},["&:not(".concat(e,"-disabled):active")]:{["".concat(r,"::before")]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},["&".concat(e,"-checked ").concat(r,"::before")]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},M=n=>{const{componentCls:e,trackHeight:c,trackPadding:t,innerMinMargin:a,innerMaxMargin:i,handleSize:o,calc:r}=n,l="".concat(e,"-inner"),d=(0,v.zA)(r(o).add(r(t).mul(2)).equal()),u=(0,v.zA)(r(i).mul(2).equal());return{[e]:{[l]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i,paddingInlineEnd:a,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out"),["".concat(l,"-checked, ").concat(l,"-unchecked")]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none",minHeight:c},["".concat(l,"-checked")]:{marginInlineStart:"calc(-100% + ".concat(d," - ").concat(u,")"),marginInlineEnd:"calc(100% - ".concat(d," + ").concat(u,")")},["".concat(l,"-unchecked")]:{marginTop:r(c).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},["&".concat(e,"-checked ").concat(l)]:{paddingInlineStart:a,paddingInlineEnd:i,["".concat(l,"-checked")]:{marginInlineStart:0,marginInlineEnd:0},["".concat(l,"-unchecked")]:{marginInlineStart:"calc(100% - ".concat(d," + ").concat(u,")"),marginInlineEnd:"calc(-100% + ".concat(d," - ").concat(u,")")}},["&:not(".concat(e,"-disabled):active")]:{["&:not(".concat(e,"-checked) ").concat(l)]:{["".concat(l,"-unchecked")]:{marginInlineStart:r(t).mul(2).equal(),marginInlineEnd:r(t).mul(-1).mul(2).equal()}},["&".concat(e,"-checked ").concat(l)]:{["".concat(l,"-checked")]:{marginInlineStart:r(t).mul(-1).mul(2).equal(),marginInlineEnd:r(t).mul(2).equal()}}}}}},x=n=>{const{componentCls:e,trackHeight:c,trackMinWidth:t}=n;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,I.dF)(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t,height:c,lineHeight:"".concat((0,v.zA)(c)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none",["&:hover:not(".concat(e,"-disabled)")]:{background:n.colorTextTertiary}}),(0,I.K8)(n)),{["&".concat(e,"-checked")]:{background:n.switchColor,["&:hover:not(".concat(e,"-disabled)")]:{background:n.colorPrimaryHover}},["&".concat(e,"-loading, &").concat(e,"-disabled")]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},["&".concat(e,"-rtl")]:{direction:"rtl"}})}},q=(0,w.OF)("Switch",(n=>{const e=(0,y.h1)(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:n.calc(n.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(n.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[x(e),M(e),E(e),A(e),z(e)]}),(n=>{const{fontSize:e,lineHeight:c,controlHeight:t,colorWhite:a}=n,i=e*c,o=t/2,r=i-4,l=o-4;return{trackHeight:i,trackHeightSM:o,trackMinWidth:2*r+8,trackMinWidthSM:2*l+4,trackPadding:2,handleBg:a,handleSize:r,handleSizeSM:l,handleShadow:"0 2px 4px 0 ".concat(new C.q("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:r/2,innerMaxMargin:r+2+4,innerMinMarginSM:l/2,innerMaxMarginSM:l+2+4}}));var O=function(n,e){var c={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(c[t]=n[t]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(c[t[a]]=n[t[a]])}return c};const H=t.forwardRef(((n,e)=>{const{prefixCls:c,size:i,disabled:r,loading:l,className:d,rootClassName:u,style:h,checked:g,value:f,defaultChecked:v,defaultValue:C,onChange:I}=n,w=O(n,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[y,z]=(0,s.A)(!1,{value:null!==g&&void 0!==g?g:f,defaultValue:null!==v&&void 0!==v?v:C}),{getPrefixCls:A,direction:E,switch:M}=t.useContext(b.QO),x=t.useContext(p.A),H=(null!==r&&void 0!==r?r:x)||l,N=A("switch",c),D=t.createElement("div",{className:"".concat(N,"-handle")},l&&t.createElement(a.A,{className:"".concat(N,"-loading-icon")})),[X,j,L]=q(N),R=(0,S.A)(i),P=o()(null===M||void 0===M?void 0:M.className,{["".concat(N,"-small")]:"small"===R,["".concat(N,"-loading")]:l,["".concat(N,"-rtl")]:"rtl"===E},d,u,j,L),T=Object.assign(Object.assign({},null===M||void 0===M?void 0:M.style),h);return X(t.createElement(k.A,{component:"Switch"},t.createElement(m,Object.assign({},w,{checked:y,onChange:function(){z(arguments.length<=0?void 0:arguments[0]),null===I||void 0===I||I.apply(void 0,arguments)},prefixCls:N,className:P,style:T,disabled:H,ref:e,loadingIcon:D}))))})),N=H;N.__ANT_SWITCH=!0;const D=N}}]);
//# sourceMappingURL=9480.f7871170.chunk.js.map