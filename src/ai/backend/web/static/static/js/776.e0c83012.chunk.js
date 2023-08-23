/*! For license information please see 776.e0c83012.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[776],{2842:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(7462),r=t(4519),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},o=t(9491),c=function(e,n){return r.createElement(o.Z,(0,i.Z)({},e,{ref:n,icon:a}))};var l=r.forwardRef(c)},374:function(e,n,t){t.d(n,{Z:function(){return a}});Object.create;function i(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var i,r,a=t.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(i=a.next()).done;)o.push(i.value)}catch(c){r={error:c}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(r)throw r.error}}return o}Object.create;var r=t(4519);var a=function(e,n){void 0===e&&(e=!1);var t=i((0,r.useState)(e),2),a=t[0],o=t[1];return[a,(0,r.useMemo)((function(){var t=void 0===n?!e:n;return{toggle:function(){return o((function(n){return n===e?t:e}))},set:function(e){return o(e)},setLeft:function(){return o(e)},setRight:function(){return o(t)}}}),[])]}},2272:function(e,n,t){t.d(n,{Z:function(){return j}});var i,r,a=t(4942),o=t(9439),c=t(2842),l=t(3270),s=t.n(l),u=t(5671),d=t(3144),h=t(7762),f=t(4519),g=Object.defineProperty,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,M=function(e,n,t){return n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},p=function(e,n){for(var t in n||(n={}))m.call(n,t)&&M(e,t,n[t]);if(v){var i,r=(0,h.Z)(v(n));try{for(r.s();!(i=r.n()).done;){t=i.value;w.call(n,t)&&M(e,t,n[t])}}catch(a){r.e(a)}finally{r.f()}}return e},E=function(e,n){var t={};for(var i in e)m.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&v){var r,a=(0,h.Z)(v(e));try{for(a.s();!(r=a.n()).done;){i=r.value;n.indexOf(i)<0&&w.call(e,i)&&(t[i]=e[i])}}catch(o){a.e(o)}finally{a.f()}}return t};!function(e){var n=function(){function n(e,t,i,r){if((0,u.Z)(this,n),this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var o=[],c=0;c<this.size;c++)o.push(!1);for(var l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var s=this.addEccAndInterleave(i);if(this.drawCodewords(s),-1==r)for(var d=1e9,h=0;h<8;h++){this.applyMask(h),this.drawFormatBits(h);var f=this.getPenaltyScore();f<d&&(r=h,d=f),this.applyMask(h)}a(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}return(0,d.Z)(n,[{key:"getModule",value:function(e,n){return 0<=e&&e<this.size&&0<=n&&n<this.size&&this.modules[n][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var n=this.getAlignmentPatternPositions(),t=n.length,i=0;i<t;i++)for(var r=0;r<t;r++)0==i&&0==r||0==i&&r==t-1||i==t-1&&0==r||this.drawAlignmentPattern(n[i],n[r]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var n=this.errorCorrectionLevel.formatBits<<3|e,t=n,i=0;i<10;i++)t=t<<1^1335*(t>>>9);var o=21522^(n<<10|t);a(o>>>15==0);for(var c=0;c<=5;c++)this.setFunctionModule(8,c,r(o,c));this.setFunctionModule(8,7,r(o,6)),this.setFunctionModule(8,8,r(o,7)),this.setFunctionModule(7,8,r(o,8));for(var l=9;l<15;l++)this.setFunctionModule(14-l,8,r(o,l));for(var s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,r(o,s));for(var u=8;u<15;u++)this.setFunctionModule(8,this.size-15+u,r(o,u));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,n=0;n<12;n++)e=e<<1^7973*(e>>>11);var t=this.version<<12|e;a(t>>>18==0);for(var i=0;i<18;i++){var o=r(t,i),c=this.size-11+i%3,l=Math.floor(i/3);this.setFunctionModule(c,l,o),this.setFunctionModule(l,c,o)}}}},{key:"drawFinderPattern",value:function(e,n){for(var t=-4;t<=4;t++)for(var i=-4;i<=4;i++){var r=Math.max(Math.abs(i),Math.abs(t)),a=e+i,o=n+t;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,2!=r&&4!=r)}}},{key:"drawAlignmentPattern",value:function(e,n){for(var t=-2;t<=2;t++)for(var i=-2;i<=2;i++)this.setFunctionModule(e+i,n+t,1!=Math.max(Math.abs(i),Math.abs(t)))}},{key:"setFunctionModule",value:function(e,n,t){this.modules[n][e]=t,this.isFunction[n][e]=!0}},{key:"addEccAndInterleave",value:function(e){var t=this.version,i=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,i))throw new RangeError("Invalid argument");for(var r=n.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[i.ordinal][t],c=Math.floor(n.getNumRawDataModules(t)/8),l=r-c%r,s=Math.floor(c/r),u=[],d=n.reedSolomonComputeDivisor(o),h=0,f=0;h<r;h++){var g=e.slice(f,f+s-o+(h<l?0:1));f+=g.length;var v=n.reedSolomonComputeRemainder(g,d);h<l&&g.push(0),u.push(g.concat(v))}for(var m=[],w=function(e){u.forEach((function(n,t){(e!=s-o||t>=l)&&m.push(n[e])}))},M=0;M<u[0].length;M++)w(M);return a(m.length==c),m}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,i=this.size-1;i>=1;i-=2){6==i&&(i=5);for(var o=0;o<this.size;o++)for(var c=0;c<2;c++){var l=i-c,s=0==(i+1&2)?this.size-1-o:o;!this.isFunction[s][l]&&t<8*e.length&&(this.modules[s][l]=r(e[t>>>3],7-(7&t)),t++)}}a(t==8*e.length)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var n=0;n<this.size;n++)for(var t=0;t<this.size;t++){var i=void 0;switch(e){case 0:i=(t+n)%2==0;break;case 1:i=n%2==0;break;case 2:i=t%3==0;break;case 3:i=(t+n)%3==0;break;case 4:i=(Math.floor(t/3)+Math.floor(n/2))%2==0;break;case 5:i=t*n%2+t*n%3==0;break;case 6:i=(t*n%2+t*n%3)%2==0;break;case 7:i=((t+n)%2+t*n%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[n][t]&&i&&(this.modules[n][t]=!this.modules[n][t])}}},{key:"getPenaltyScore",value:function(){for(var e=0,t=0;t<this.size;t++){for(var i=!1,r=0,o=[0,0,0,0,0,0,0],c=0;c<this.size;c++)this.modules[t][c]==i?5==++r?e+=n.PENALTY_N1:r>5&&e++:(this.finderPenaltyAddHistory(r,o),i||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),i=this.modules[t][c],r=1);e+=this.finderPenaltyTerminateAndCount(i,r,o)*n.PENALTY_N3}for(var l=0;l<this.size;l++){for(var s=!1,u=0,d=[0,0,0,0,0,0,0],f=0;f<this.size;f++)this.modules[f][l]==s?5==++u?e+=n.PENALTY_N1:u>5&&e++:(this.finderPenaltyAddHistory(u,d),s||(e+=this.finderPenaltyCountPatterns(d)*n.PENALTY_N3),s=this.modules[f][l],u=1);e+=this.finderPenaltyTerminateAndCount(s,u,d)*n.PENALTY_N3}for(var g=0;g<this.size-1;g++)for(var v=0;v<this.size-1;v++){var m=this.modules[g][v];m==this.modules[g][v+1]&&m==this.modules[g+1][v]&&m==this.modules[g+1][v+1]&&(e+=n.PENALTY_N2)}var w,M=0,p=(0,h.Z)(this.modules);try{for(p.s();!(w=p.n()).done;){M=w.value.reduce((function(e,n){return e+(n?1:0)}),M)}}catch(C){p.e(C)}finally{p.f()}var E=this.size*this.size,y=Math.ceil(Math.abs(20*M-10*E)/E)-1;return a(0<=y&&y<=9),a(0<=(e+=y*n.PENALTY_N4)&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,n=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),t=[6],i=this.size-7;t.length<e;i-=n)t.splice(1,0,i);return t}},{key:"finderPenaltyCountPatterns",value:function(e){var n=e[1];a(n<=3*this.size);var t=n>0&&e[2]==n&&e[3]==3*n&&e[4]==n&&e[5]==n;return(t&&e[0]>=4*n&&e[6]>=n?1:0)+(t&&e[6]>=4*n&&e[0]>=n?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,n,t){return e&&(this.finderPenaltyAddHistory(n,t),n=0),n+=this.size,this.finderPenaltyAddHistory(n,t),this.finderPenaltyCountPatterns(t)}},{key:"finderPenaltyAddHistory",value:function(e,n){0==n[0]&&(e+=this.size),n.pop(),n.unshift(e)}}],[{key:"encodeText",value:function(t,i){var r=e.QrSegment.makeSegments(t);return n.encodeSegments(r,i)}},{key:"encodeBinary",value:function(t,i){var r=e.QrSegment.makeBytes(t);return n.encodeSegments([r],i)}},{key:"encodeSegments",value:function(e,t){var r,c,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,d=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(n.MIN_VERSION<=l&&l<=s&&s<=n.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");for(r=l;;r++){var f=8*n.getNumDataCodewords(r,t),g=o.getTotalBits(e,r);if(g<=f){c=g;break}if(r>=s)throw new RangeError("Data too long")}for(var v=0,m=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];v<m.length;v++){var w=m[v];d&&c<=8*n.getNumDataCodewords(r,w)&&(t=w)}var M,p=[],E=(0,h.Z)(e);try{for(E.s();!(M=E.n()).done;){var y=M.value;i(y.mode.modeBits,4,p),i(y.numChars,y.mode.numCharCountBits(r),p);var C,S=(0,h.Z)(y.getData());try{for(S.s();!(C=S.n()).done;){var I=C.value;p.push(I)}}catch(x){S.e(x)}finally{S.f()}}}catch(x){E.e(x)}finally{E.f()}a(p.length==c);var k=8*n.getNumDataCodewords(r,t);a(p.length<=k),i(0,Math.min(4,k-p.length),p),i(0,(8-p.length%8)%8,p),a(p.length%8==0);for(var b=236;p.length<k;b^=253)i(b,8,p);for(var P=[];8*P.length<p.length;)P.push(0);return p.forEach((function(e,n){return P[n>>>3]|=e<<7-(7&n)})),new n(r,t,P,u)}},{key:"getNumRawDataModules",value:function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var i=Math.floor(e/7)+2;t-=(25*i-10)*i-55,e>=7&&(t-=36)}return a(208<=t&&t<=29648),t}},{key:"getNumDataCodewords",value:function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],i=0;i<e-1;i++)t.push(0);t.push(1);for(var r=1,a=0;a<e;a++){for(var o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],r),o+1<t.length&&(t[o]^=t[o+1]);r=n.reedSolomonMultiply(r,2)}return t}},{key:"reedSolomonComputeRemainder",value:function(e,t){var i,r=t.map((function(e){return 0})),a=(0,h.Z)(e);try{var o=function(){var e=i.value^r.shift();r.push(0),t.forEach((function(t,i){return r[i]^=n.reedSolomonMultiply(t,e)}))};for(a.s();!(i=a.n()).done;)o()}catch(c){a.e(c)}finally{a.f()}return r}},{key:"reedSolomonMultiply",value:function(e,n){if(e>>>8!=0||n>>>8!=0)throw new RangeError("Byte out of range");for(var t=0,i=7;i>=0;i--)t=t<<1^285*(t>>>7),t^=(n>>>i&1)*e;return a(t>>>8==0),t}}]),n}(),t=n;function i(e,n,t){if(n<0||n>31||e>>>n!=0)throw new RangeError("Value out of range");for(var i=n-1;i>=0;i--)t.push(e>>>i&1)}function r(e,n){return 0!=(e>>>n&1)}function a(e){if(!e)throw new Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;var o=function(){function e(n,t,i){if((0,u.Z)(this,e),this.mode=n,this.numChars=t,this.bitData=i,t<0)throw new RangeError("Invalid argument");this.bitData=i.slice()}return(0,d.Z)(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(n){var t,r=[],a=(0,h.Z)(n);try{for(a.s();!(t=a.n()).done;){i(t.value,8,r)}}catch(o){a.e(o)}finally{a.f()}return new e(e.Mode.BYTE,n.length,r)}},{key:"makeNumeric",value:function(n){if(!e.isNumeric(n))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<n.length;){var a=Math.min(n.length-r,3);i(parseInt(n.substr(r,a),10),3*a+1,t),r+=a}return new e(e.Mode.NUMERIC,n.length,t)}},{key:"makeAlphanumeric",value:function(n){if(!e.isAlphanumeric(n))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t,r=[];for(t=0;t+2<=n.length;t+=2){var a=45*e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t));i(a+=e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t+1)),11,r)}return t<n.length&&i(e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t)),6,r),new e(e.Mode.ALPHANUMERIC,n.length,r)}},{key:"makeSegments",value:function(n){return""==n?[]:e.isNumeric(n)?[e.makeNumeric(n)]:e.isAlphanumeric(n)?[e.makeAlphanumeric(n)]:[e.makeBytes(e.toUtf8ByteArray(n))]}},{key:"makeEci",value:function(n){var t=[];if(n<0)throw new RangeError("ECI assignment value out of range");if(n<128)i(n,8,t);else if(n<16384)i(2,2,t),i(n,14,t);else{if(!(n<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,t),i(n,21,t)}return new e(e.Mode.ECI,0,t)}},{key:"isNumeric",value:function(n){return e.NUMERIC_REGEX.test(n)}},{key:"isAlphanumeric",value:function(n){return e.ALPHANUMERIC_REGEX.test(n)}},{key:"getTotalBits",value:function(e,n){var t,i=0,r=(0,h.Z)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value,o=a.mode.numCharCountBits(n);if(a.numChars>=1<<o)return 1/0;i+=4+o+a.bitData.length}}catch(c){r.e(c)}finally{r.f()}return i}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var n=[],t=0;t<e.length;t++)"%"!=e.charAt(t)?n.push(e.charCodeAt(t)):(n.push(parseInt(e.substr(t+1,2),16)),t+=2);return n}}]),e}();o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=o}(i||(i={})),function(e){var n=(0,d.Z)((function e(n,t){(0,u.Z)(this,e),this.ordinal=n,this.formatBits=t})),t=n;t.LOW=new n(0,1),t.MEDIUM=new n(1,0),t.QUARTILE=new n(2,3),t.HIGH=new n(3,2),e.Ecc=t}((r=i||(i={})).QrCode||(r.QrCode={})),function(e){!function(e){var n=function(){function e(n,t){(0,u.Z)(this,e),this.modeBits=n,this.numBitsCharCount=t}return(0,d.Z)(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}(),t=n;t.NUMERIC=new n(1,[10,12,14]),t.ALPHANUMERIC=new n(2,[9,11,13]),t.BYTE=new n(4,[8,16,16]),t.KANJI=new n(8,[8,10,12]),t.ECI=new n(7,[0,0,0]),e.Mode=t}(e.QrSegment||(e.QrSegment={}))}(i||(i={}));var y=i,C={L:y.QrCode.Ecc.LOW,M:y.QrCode.Ecc.MEDIUM,Q:y.QrCode.Ecc.QUARTILE,H:y.QrCode.Ecc.HIGH},S="#FFFFFF",I="#000000",k=4,b=.1;function P(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[];return e.forEach((function(e,i){var r=null;e.forEach((function(a,o){if(!a&&null!==r)return t.push("M".concat(r+n," ").concat(i+n,"h").concat(o-r,"v1H").concat(r+n,"z")),void(r=null);if(o!==e.length-1)a&&null===r&&(r=o);else{if(!a)return;null===r?t.push("M".concat(o+n,",").concat(i+n," h1v1H").concat(o+n,"z")):t.push("M".concat(r+n,",").concat(i+n," h").concat(o+1-r,"v1H").concat(r+n,"z"))}}))})),t.join("")}function x(e,n){return e.slice().map((function(e,t){return t<n.y||t>=n.y+n.h?e:e.map((function(e,t){return(t<n.x||t>=n.x+n.w)&&e}))}))}function R(e,n,t,i){if(null==i)return null;var r=t?k:0,a=e.length+2*r,o=Math.floor(n*b),c=a/n,l=(i.width||o)*c,s=(i.height||o)*c,u=null==i.x?e.length/2-l/2:i.x*c,d=null==i.y?e.length/2-s/2:i.y*c,h=null;if(i.excavate){var f=Math.floor(u),g=Math.floor(d);h={x:f,y:g,w:Math.ceil(l+u-f),h:Math.ceil(s+d-g)}}return{x:u,y:d,h:s,w:l,excavation:h}}var Z=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function N(e){var n=e,t=n.value,i=n.size,r=void 0===i?128:i,a=n.level,c=void 0===a?"L":a,l=n.bgColor,s=void 0===l?S:l,u=n.fgColor,d=void 0===u?I:u,h=n.includeMargin,g=void 0!==h&&h,v=n.style,m=n.imageSettings,w=E(n,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),M=null==m?void 0:m.src,b=(0,f.useRef)(null),N=(0,f.useRef)(null),A=(0,f.useState)(!1),z=(0,o.Z)(A,2),O=(z[0],z[1]);(0,f.useEffect)((function(){if(null!=b.current){var e=b.current,n=e.getContext("2d");if(!n)return;var i=y.QrCode.encodeText(t,C[c]).getModules(),a=g?k:0,o=i.length+2*a,l=R(i,r,g,m),u=N.current,h=null!=l&&null!==u&&u.complete&&0!==u.naturalHeight&&0!==u.naturalWidth;h&&null!=l.excavation&&(i=x(i,l.excavation));var f=window.devicePixelRatio||1;e.height=e.width=r*f;var v=r/o*f;n.scale(v,v),n.fillStyle=s,n.fillRect(0,0,o,o),n.fillStyle=d,Z?n.fill(new Path2D(P(i,a))):i.forEach((function(e,t){e.forEach((function(e,i){e&&n.fillRect(i+a,t+a,1,1)}))})),h&&n.drawImage(u,l.x+a,l.y+a,l.w,l.h)}})),(0,f.useEffect)((function(){O(!1)}),[M]);var _=p({height:r,width:r},v),H=null;return null!=M&&(H=f.createElement("img",{src:M,key:M,style:{display:"none"},onLoad:function(){O(!0)},ref:N})),f.createElement(f.Fragment,null,f.createElement("canvas",p({style:_,height:r,width:r,ref:b},w)),H)}function A(e){var n=e,t=n.value,i=n.size,r=void 0===i?128:i,a=n.level,o=void 0===a?"L":a,c=n.bgColor,l=void 0===c?S:c,s=n.fgColor,u=void 0===s?I:s,d=n.includeMargin,h=void 0!==d&&d,g=n.imageSettings,v=E(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),m=y.QrCode.encodeText(t,C[o]).getModules(),w=h?k:0,M=m.length+2*w,b=R(m,r,h,g),Z=null;null!=g&&null!=b&&(null!=b.excavation&&(m=x(m,b.excavation)),Z=f.createElement("image",{xlinkHref:g.src,height:b.h,width:b.w,x:b.x+w,y:b.y+w,preserveAspectRatio:"none"}));var N=P(m,w);return f.createElement("svg",p({height:r,width:r,viewBox:"0 0 ".concat(M," ").concat(M)},v),f.createElement("path",{fill:l,d:"M0,0 h".concat(M,"v").concat(M,"H0z"),shapeRendering:"crispEdges"}),f.createElement("path",{fill:u,d:N,shapeRendering:"crispEdges"}),Z)}var z=t(2513),O=t(564),_=t(6951),H=t(7171),L=t(4036),T=t(1480),D=t(111),F=t(1157),B=(0,D.Z)("QRCode",(function(e){return function(e){var n,t,i=e.componentCls;return t={},(0,a.Z)(t,i,Object.assign(Object.assign({},(0,T.Wf)(e)),(n={display:"flex",justifyContent:"center",alignItems:"center",padding:e.paddingSM,backgroundColor:e.colorWhite,borderRadius:e.borderRadiusLG,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),position:"relative",width:"100%",height:"100%",overflow:"hidden"},(0,a.Z)(n,"& > ".concat(i,"-mask"),(0,a.Z)({position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:e.colorText,lineHeight:e.lineHeight,background:e.QRCodeMaskBackgroundColor,textAlign:"center"},"& > ".concat(i,"-expired"),{color:e.QRCodeExpiredTextColor})),(0,a.Z)(n,"&-icon",{marginBlockEnd:e.marginXS,fontSize:e.controlHeight}),n))),(0,a.Z)(t,"".concat(i,"-borderless"),{borderColor:"transparent"}),t}((0,F.TS)(e,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"}))})),Q=L.Z.useToken;var j=function(e){var n=Q().token,t=e.value,i=e.type,r=void 0===i?"canvas":i,l=e.icon,u=void 0===l?"":l,d=e.size,h=void 0===d?160:d,g=e.iconSize,v=void 0===g?40:g,m=e.color,w=void 0===m?n.colorText:m,M=e.errorLevel,p=void 0===M?"M":M,E=e.status,y=void 0===E?"active":E,C=e.bordered,S=void 0===C||C,I=e.onRefresh,k=e.style,b=e.className,P=e.rootClassName,x=e.prefixCls,R=e.bgColor,Z=void 0===R?"transparent":R,L=(0,(0,f.useContext)(O.E_).getPrefixCls)("qrcode",x),T=B(L),D=(0,o.Z)(T,2),F=D[0],j=D[1],U={src:u,x:void 0,y:void 0,height:v,width:v,excavate:!0},W={value:t,size:h-2*(n.paddingSM+n.lineWidth),level:p,bgColor:Z,fgColor:w,imageSettings:u?U:void 0},X=(0,_.Z)("QRCode"),V=(0,o.Z)(X,1)[0];if(!t)return null;var Y=s()(L,b,P,j,(0,a.Z)({},"".concat(L,"-borderless"),!S));return F(f.createElement("div",{style:Object.assign(Object.assign({},k),{width:h,height:h,backgroundColor:Z}),className:Y},"active"!==y&&f.createElement("div",{className:"".concat(L,"-mask")},"loading"===y&&f.createElement(H.Z,null),"expired"===y&&f.createElement(f.Fragment,null,f.createElement("p",{className:"".concat(L,"-expired")},null===V||void 0===V?void 0:V.expired),I&&f.createElement(z.ZP,{type:"link",icon:f.createElement(c.Z,null),onClick:I},null===V||void 0===V?void 0:V.refresh))),"canvas"===r?f.createElement(N,Object.assign({},W)):f.createElement(A,Object.assign({},W))))}},2708:function(e,n,t){t.d(n,{Z:function(){return A}});var i=t(4942),r=t(9439),a=t(2064),o=t(3270),c=t.n(o),l=t(7462),s=t(4925),u=t(4519),d=t(269),h=t(3714),f=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],g=u.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,g=e.className,v=e.checked,m=e.defaultChecked,w=e.disabled,M=e.loadingIcon,p=e.checkedChildren,E=e.unCheckedChildren,y=e.onClick,C=e.onChange,S=e.onKeyDown,I=(0,s.Z)(e,f),k=(0,d.Z)(!1,{value:v,defaultValue:m}),b=(0,r.Z)(k,2),P=b[0],x=b[1];function R(e,n){var t=P;return w||(x(t=e),null===C||void 0===C||C(t,n)),t}var Z=c()(o,g,(t={},(0,i.Z)(t,"".concat(o,"-checked"),P),(0,i.Z)(t,"".concat(o,"-disabled"),w),t));return u.createElement("button",(0,l.Z)({},I,{type:"button",role:"switch","aria-checked":P,disabled:w,className:Z,ref:n,onKeyDown:function(e){e.which===h.Z.LEFT?R(!1,e):e.which===h.Z.RIGHT&&R(!0,e),null===S||void 0===S||S(e)},onClick:function(e){var n=R(!P,e);null===y||void 0===y||y(n,e)}}),M,u.createElement("span",{className:"".concat(o,"-inner")},u.createElement("span",{className:"".concat(o,"-inner-checked")},p),u.createElement("span",{className:"".concat(o,"-inner-unchecked")},E)))}));g.displayName="Switch";var v=g,m=t(9495),w=t(564),M=t(6963),p=t(6569),E=t(989),y=t(1480),C=t(111),S=t(1157),I=function(e){var n,t,r,a,o,c=e.componentCls,l="".concat(c,"-inner");return(0,i.Z)({},c,(0,i.Z)({},"&".concat(c,"-small"),(o={minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:"".concat(e.switchHeightSM,"px")},(0,i.Z)(o,"".concat(c,"-inner"),(n={paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM},(0,i.Z)(n,"".concat(l,"-checked"),{marginInlineStart:"calc(-100% + ".concat(e.switchPinSizeSM+2*e.switchPadding,"px - ").concat(2*e.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(100% - ".concat(e.switchPinSizeSM+2*e.switchPadding,"px + ").concat(2*e.switchInnerMarginMaxSM,"px)")}),(0,i.Z)(n,"".concat(l,"-unchecked"),{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),n)),(0,i.Z)(o,"".concat(c,"-handle"),{width:e.switchPinSizeSM,height:e.switchPinSizeSM}),(0,i.Z)(o,"".concat(c,"-loading-icon"),{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize}),(0,i.Z)(o,"&".concat(c,"-checked"),(r={},(0,i.Z)(r,"".concat(c,"-inner"),(t={paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM},(0,i.Z)(t,"".concat(l,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,i.Z)(t,"".concat(l,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(e.switchPinSizeSM+2*e.switchPadding,"px + ").concat(2*e.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(-100% + ".concat(e.switchPinSizeSM+2*e.switchPadding,"px - ").concat(2*e.switchInnerMarginMaxSM,"px)")}),t)),(0,i.Z)(r,"".concat(c,"-handle"),{insetInlineStart:"calc(100% - ".concat(e.switchPinSizeSM+e.switchPadding,"px)")}),r)),(0,i.Z)(o,"&:not(".concat(c,"-disabled):active"),(a={},(0,i.Z)(a,"&:not(".concat(c,"-checked) ").concat(l),(0,i.Z)({},"".concat(l,"-unchecked"),{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2})),(0,i.Z)(a,"&".concat(c,"-checked ").concat(l),(0,i.Z)({},"".concat(l,"-checked"),{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2})),a)),o)))},k=function(e){var n,t=e.componentCls;return(0,i.Z)({},t,(n={},(0,i.Z)(n,"".concat(t,"-loading-icon").concat(e.iconCls),{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"}),(0,i.Z)(n,"&".concat(t,"-checked ").concat(t,"-loading-icon"),{color:e.switchColor}),n))},b=function(e){var n,t,r=e.componentCls,a=e.motion,o="".concat(r,"-handle");return(0,i.Z)({},r,(t={},(0,i.Z)(t,o,{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:"all ".concat(e.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:"all ".concat(e.switchDuration," ease-in-out"),content:'""'}}),(0,i.Z)(t,"&".concat(r,"-checked ").concat(o),{insetInlineStart:"calc(100% - ".concat(e.switchPinSize+e.switchPadding,"px)")}),(0,i.Z)(t,"&:not(".concat(r,"-disabled):active"),a?(n={},(0,i.Z)(n,"".concat(o,"::before"),{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0}),(0,i.Z)(n,"&".concat(r,"-checked ").concat(o,"::before"),{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}),n):{}),t))},P=function(e){var n,t,r,a,o=e.componentCls,c="".concat(o,"-inner");return(0,i.Z)({},o,(a={},(0,i.Z)(a,c,(n={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:"padding-inline-start ".concat(e.switchDuration," ease-in-out, padding-inline-end ").concat(e.switchDuration," ease-in-out")},(0,i.Z)(n,"".concat(c,"-checked, ").concat(c,"-unchecked"),{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:"margin-inline-start ".concat(e.switchDuration," ease-in-out, margin-inline-end ").concat(e.switchDuration," ease-in-out"),pointerEvents:"none"}),(0,i.Z)(n,"".concat(c,"-checked"),{marginInlineStart:"calc(-100% + ".concat(e.switchPinSize+2*e.switchPadding,"px - ").concat(2*e.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(100% - ".concat(e.switchPinSize+2*e.switchPadding,"px + ").concat(2*e.switchInnerMarginMax,"px)")}),(0,i.Z)(n,"".concat(c,"-unchecked"),{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}),n)),(0,i.Z)(a,"&".concat(o,"-checked ").concat(c),(t={paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax},(0,i.Z)(t,"".concat(c,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,i.Z)(t,"".concat(c,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(e.switchPinSize+2*e.switchPadding,"px + ").concat(2*e.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(-100% + ".concat(e.switchPinSize+2*e.switchPadding,"px - ").concat(2*e.switchInnerMarginMax,"px)")}),t)),(0,i.Z)(a,"&:not(".concat(o,"-disabled):active"),(r={},(0,i.Z)(r,"&:not(".concat(o,"-checked) ").concat(c),(0,i.Z)({},"".concat(c,"-unchecked"),{marginInlineStart:2*e.switchPadding,marginInlineEnd:2*-e.switchPadding})),(0,i.Z)(r,"&".concat(o,"-checked ").concat(c),(0,i.Z)({},"".concat(c,"-checked"),{marginInlineStart:2*-e.switchPadding,marginInlineEnd:2*e.switchPadding})),r)),a))},x=function(e){var n,t=e.componentCls;return(0,i.Z)({},t,Object.assign(Object.assign(Object.assign(Object.assign({},(0,y.Wf)(e)),(0,i.Z)({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:"".concat(e.switchHeight,"px"),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(t,"-disabled)"),{background:e.colorTextTertiary})),(0,y.Qy)(e)),(n={},(0,i.Z)(n,"&".concat(t,"-checked"),(0,i.Z)({background:e.switchColor},"&:hover:not(".concat(t,"-disabled)"),{background:e.colorPrimaryHover})),(0,i.Z)(n,"&".concat(t,"-loading, &").concat(t,"-disabled"),{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),(0,i.Z)(n,"&".concat(t,"-rtl"),{direction:"rtl"}),n)))},R=(0,C.Z)("Switch",(function(e){var n=e.fontSize*e.lineHeight,t=e.controlHeight/2,i=n-4,r=t-4,a=(0,S.TS)(e,{switchMinWidth:2*i+8,switchHeight:n,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:i/2,switchInnerMarginMax:i+2+4,switchPadding:2,switchPinSize:i,switchBg:e.colorBgContainer,switchMinWidthSM:2*r+4,switchHeightSM:t,switchInnerMarginMinSM:r/2,switchInnerMarginMaxSM:r+2+4,switchPinSizeSM:r,switchHandleShadow:"0 2px 4px 0 ".concat(new E.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:.75*e.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(e.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[x(a),P(a),b(a),k(a),I(a)]})),Z=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t},N=u.forwardRef((function(e,n){var t,o=e.prefixCls,l=e.size,s=e.disabled,d=e.loading,h=e.className,f=e.rootClassName,g=e.style,E=Z(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),y=u.useContext(w.E_),C=y.getPrefixCls,S=y.direction,I=y.switch,k=u.useContext(M.Z),b=(null!==s&&void 0!==s?s:k)||d,P=C("switch",o),x=u.createElement("div",{className:"".concat(P,"-handle")},d&&u.createElement(a.Z,{className:"".concat(P,"-loading-icon")})),N=R(P),A=(0,r.Z)(N,2),z=A[0],O=A[1],_=(0,p.Z)(l),H=c()(null===I||void 0===I?void 0:I.className,(t={},(0,i.Z)(t,"".concat(P,"-small"),"small"===_),(0,i.Z)(t,"".concat(P,"-loading"),d),(0,i.Z)(t,"".concat(P,"-rtl"),"rtl"===S),t),h,f,O),L=Object.assign(Object.assign({},null===I||void 0===I?void 0:I.style),g);return z(u.createElement(m.Z,{component:"Switch"},u.createElement(v,Object.assign({},E,{prefixCls:P,className:H,style:L,disabled:b,ref:n,loadingIcon:x}))))}));N.__ANT_SWITCH=!0;var A=N}}]);
//# sourceMappingURL=776.e0c83012.chunk.js.map