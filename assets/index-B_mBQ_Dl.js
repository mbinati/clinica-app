const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardPage-DmCxn91w.js","assets/dateUtils-BmLoKA7c.js","assets/PieChart-QaGiz68K.js","assets/AgendaPage-wQc_qdD6.js","assets/StatusBadge-CqGkcgAn.js","assets/FormField-DYMtVXSh.js","assets/searchUtils-mGfLi5Dn.js","assets/save-B4K-ucig.js","assets/useMediaQuery-Dx941UvG.js","assets/chevron-right-DbY4J0TY.js","assets/plus-iEb9LljK.js","assets/PacientesPage-yVcmT2r6.js","assets/EmptyState-BYOtnGeE.js","assets/ProntuarioPage-G-WEyfoE.js","assets/trash-2-Bde7T-qG.js","assets/circle-check-big-BRTOfVi1.js","assets/FaturamentoPage-WwWknpwi.js","assets/ProfissionaisPage-BEDNogtY.js","assets/CatalogoPage-BMeL7o9N.js","assets/UsuariosPage-Cpa6GxH8.js","assets/AtendimentosPage-CpUiu5I8.js","assets/PagarReceberPage-ZxbmGnEx.js","assets/CaixaPage-Dc1WB49Y.js","assets/IndicadoresPage-D0ovCIEI.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var vb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Py(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function xb(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Wp={exports:{}},Sa={},Bp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),Ry=Symbol.for("react.portal"),Ay=Symbol.for("react.fragment"),Oy=Symbol.for("react.strict_mode"),Dy=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),My=Symbol.for("react.context"),Fy=Symbol.for("react.forward_ref"),Uy=Symbol.for("react.suspense"),zy=Symbol.for("react.memo"),jy=Symbol.for("react.lazy"),ff=Symbol.iterator;function Wy(t){return t===null||typeof t!="object"?null:(t=ff&&t[ff]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Hp={};function Jr(t,e,n){this.props=t,this.context=e,this.refs=Hp,this.updater=n||Vp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gp(){}Gp.prototype=Jr.prototype;function gu(t,e,n){this.props=t,this.context=e,this.refs=Hp,this.updater=n||Vp}var _u=gu.prototype=new Gp;_u.constructor=gu;$p(_u,Jr.prototype);_u.isPureReactComponent=!0;var hf=Array.isArray,Kp=Object.prototype.hasOwnProperty,yu={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kp.call(e,r)&&!Qp.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vs,type:t,key:s,ref:o,props:i,_owner:yu.current}}function By(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vu(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function Vy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pf=/\/+/g;function il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vy(""+t.key):e.toString(36)}function ro(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vs:case Ry:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+il(o,0):r,hf(i)?(n="",t!=null&&(n=t.replace(pf,"$&/")+"/"),ro(i,e,n,"",function(c){return c})):i!=null&&(vu(i)&&(i=By(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+il(s,a);o+=ro(s,e,n,l,i)}else if(l=Wy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+il(s,a++),o+=ro(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ms(t,e,n){if(t==null)return t;var r=[],i=0;return ro(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $y(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},io={transition:null},Hy={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:io,ReactCurrentOwner:yu};function Yp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Ms,forEach:function(t,e,n){Ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ms(t,function(){e++}),e},toArray:function(t){return Ms(t,function(e){return e})||[]},only:function(t){if(!vu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Jr;U.Fragment=Ay;U.Profiler=Dy;U.PureComponent=gu;U.StrictMode=Oy;U.Suspense=Uy;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;U.act=Yp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$p({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kp.call(e,l)&&!Qp.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vs,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:My,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ly,_context:t},t.Consumer=t};U.createElement=qp;U.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Fy,render:t}};U.isValidElement=vu;U.lazy=function(t){return{$$typeof:jy,_payload:{_status:-1,_result:t},_init:$y}};U.memo=function(t,e){return{$$typeof:zy,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=io.transition;io.transition={};try{t()}finally{io.transition=e}};U.unstable_act=Yp;U.useCallback=function(t,e){return De.current.useCallback(t,e)};U.useContext=function(t){return De.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return De.current.useDeferredValue(t)};U.useEffect=function(t,e){return De.current.useEffect(t,e)};U.useId=function(){return De.current.useId()};U.useImperativeHandle=function(t,e,n){return De.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return De.current.useMemo(t,e)};U.useReducer=function(t,e,n){return De.current.useReducer(t,e,n)};U.useRef=function(t){return De.current.useRef(t)};U.useState=function(t){return De.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return De.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return De.current.useTransition()};U.version="18.3.1";Bp.exports=U;var L=Bp.exports;const Fs=Py(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=L,Ky=Symbol.for("react.element"),Qy=Symbol.for("react.fragment"),qy=Object.prototype.hasOwnProperty,Yy=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qy.call(e,r)&&!Xy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ky,type:t,key:s,ref:o,props:i,_owner:Yy.current}}Sa.Fragment=Qy;Sa.jsx=Xp;Sa.jsxs=Xp;Wp.exports=Sa;var v=Wp.exports,Jp={exports:{}},Ke={},Zp={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,A){var O=I.length;I.push(A);e:for(;0<O;){var oe=O-1>>>1,fe=I[oe];if(0<i(fe,A))I[oe]=A,I[O]=fe,O=oe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],O=I.pop();if(O!==A){I[0]=O;e:for(var oe=0,fe=I.length,Ds=fe>>>1;oe<Ds;){var On=2*(oe+1)-1,rl=I[On],Dn=On+1,Ls=I[Dn];if(0>i(rl,O))Dn<fe&&0>i(Ls,rl)?(I[oe]=Ls,I[Dn]=O,oe=Dn):(I[oe]=rl,I[On]=O,oe=On);else if(Dn<fe&&0>i(Ls,O))I[oe]=Ls,I[Dn]=O,oe=Dn;else break e}}return A}function i(I,A){var O=I.sortIndex-A.sortIndex;return O!==0?O:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,m=!1,_=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=I)r(c),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(c)}}function x(I){if(y=!1,g(I),!_)if(n(l)!==null)_=!0,tl(C);else{var A=n(c);A!==null&&nl(x,A.startTime-I)}}function C(I,A){_=!1,y&&(y=!1,p(N),N=-1),m=!0;var O=f;try{for(g(A),u=n(l);u!==null&&(!(u.expirationTime>A)||I&&!rt());){var oe=u.callback;if(typeof oe=="function"){u.callback=null,f=u.priorityLevel;var fe=oe(u.expirationTime<=A);A=t.unstable_now(),typeof fe=="function"?u.callback=fe:u===n(l)&&r(l),g(A)}else r(l);u=n(l)}if(u!==null)var Ds=!0;else{var On=n(c);On!==null&&nl(x,On.startTime-A),Ds=!1}return Ds}finally{u=null,f=O,m=!1}}var b=!1,T=null,N=-1,se=5,z=-1;function rt(){return!(t.unstable_now()-z<se)}function ci(){if(T!==null){var I=t.unstable_now();z=I;var A=!0;try{A=T(!0,I)}finally{A?ui():(b=!1,T=null)}}else b=!1}var ui;if(typeof h=="function")ui=function(){h(ci)};else if(typeof MessageChannel<"u"){var df=new MessageChannel,Ny=df.port2;df.port1.onmessage=ci,ui=function(){Ny.postMessage(null)}}else ui=function(){S(ci,0)};function tl(I){T=I,b||(b=!0,ui())}function nl(I,A){N=S(function(){I(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,tl(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var O=f;f=A;try{return I()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=f;f=I;try{return A()}finally{f=O}},t.unstable_scheduleCallback=function(I,A,O){var oe=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?oe+O:oe):O=oe,I){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=O+fe,I={id:d++,callback:A,priorityLevel:I,startTime:O,expirationTime:fe,sortIndex:-1},O>oe?(I.sortIndex=O,e(c,I),n(l)===null&&I===n(c)&&(y?(p(N),N=-1):y=!0,nl(x,O-oe))):(I.sortIndex=fe,e(l,I),_||m||(_=!0,tl(C))),I},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(I){var A=f;return function(){var O=f;f=A;try{return I.apply(this,arguments)}finally{f=O}}}})(em);Zp.exports=em;var Jy=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=L,Ge=Jy;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,Bi={};function ir(t,e){Ur(t,e),Ur(t+"Capture",e)}function Ur(t,e){for(Bi[t]=e,t=0;t<e.length;t++)tm.add(e[t])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},gf={};function tv(t){return Jl.call(gf,t)?!0:Jl.call(mf,t)?!1:ev.test(t)?gf[t]=!0:(mf[t]=!0,!1)}function nv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rv(t,e,n,r){if(e===null||typeof e>"u"||nv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function wu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xu,wu);we[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xu,wu);we[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xu,wu);we[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eu(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rv(e,n,i,r)&&(n=null),r||i===null?tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kt=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),fr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),Cu=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),_f=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,sl;function Si(t){if(sl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sl=e&&e[1]||""}return`
`+sl+t}var ol=!1;function al(t,e){if(!t||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function iv(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=al(t.type,!1),t;case 11:return t=al(t.type.render,!1),t;case 1:return t=al(t.type,!0),t;default:return""}}function nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case fr:return"Portal";case Zl:return"Profiler";case Su:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rm:return(t.displayName||"Context")+".Consumer";case nm:return(t._context.displayName||"Context")+".Provider";case Cu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ku:return e=t.displayName||null,e!==null?e:nc(t.type)||"Memo";case Xt:e=t._payload,t=t._init;try{return nc(t(e))}catch{}}return null}function sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(e);case 8:return e===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ov(t){var e=sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zs(t){t._valueTracker||(t._valueTracker=ov(t))}function om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rc(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function am(t,e){e=e.checked,e!=null&&Eu(t,"checked",e,!1)}function ic(t,e){am(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&sc(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sc(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ci=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Ci(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function lm(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var js,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},av=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(t){av.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bi[e]=bi[t]})});function dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bi.hasOwnProperty(t)&&bi[t]?(""+e).trim():e+"px"}function fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lv=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(t,e){if(e){if(lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dc=null,br=null,Tr=null;function Ef(t){if(t=Es(t)){if(typeof dc!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Ta(e),dc(t.stateNode,t.type,e))}}function hm(t){br?Tr?Tr.push(t):Tr=[t]:br=t}function pm(){if(br){var t=br,e=Tr;if(Tr=br=null,Ef(t),e)for(t=0;t<e.length;t++)Ef(e[t])}}function mm(t,e){return t(e)}function gm(){}var ll=!1;function _m(t,e,n){if(ll)return t(e,n);ll=!0;try{return mm(t,e,n)}finally{ll=!1,(br!==null||Tr!==null)&&(gm(),pm())}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var r=Ta(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var fc=!1;if(zt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){fc=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{fc=!1}function cv(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ti=!1,ko=null,Io=!1,hc=null,uv={onError:function(t){Ti=!0,ko=t}};function dv(t,e,n,r,i,s,o,a,l){Ti=!1,ko=null,cv.apply(uv,arguments)}function fv(t,e,n,r,i,s,o,a,l){if(dv.apply(this,arguments),Ti){if(Ti){var c=ko;Ti=!1,ko=null}else throw Error(w(198));Io||(Io=!0,hc=c)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(t){if(sr(t)!==t)throw Error(w(188))}function hv(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sf(i),t;if(s===r)return Sf(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function vm(t){return t=hv(t),t!==null?xm(t):null}function xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xm(t);if(e!==null)return e;t=t.sibling}return null}var wm=Ge.unstable_scheduleCallback,Cf=Ge.unstable_cancelCallback,pv=Ge.unstable_shouldYield,mv=Ge.unstable_requestPaint,ae=Ge.unstable_now,gv=Ge.unstable_getCurrentPriorityLevel,bu=Ge.unstable_ImmediatePriority,Em=Ge.unstable_UserBlockingPriority,bo=Ge.unstable_NormalPriority,_v=Ge.unstable_LowPriority,Sm=Ge.unstable_IdlePriority,Ca=null,Et=null;function yv(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:wv,vv=Math.log,xv=Math.LN2;function wv(t){return t>>>=0,t===0?32:31-(vv(t)/xv|0)|0}var Ws=64,Bs=4194304;function ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function To(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ki(a):(s&=o,s!==0&&(r=ki(s)))}else o=n&~i,o!==0?r=ki(o):s!==0&&(r=ki(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ht(e),i=1<<n,r|=t[n],e&=~i;return r}function Ev(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ev(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cm(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function cl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=n}function Cv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,Nu,bm,Tm,Nm,mc=!1,Vs=[],ln=null,cn=null,un=null,Hi=new Map,Gi=new Map,Zt=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(e.pointerId)}}function hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Es(e),e!==null&&Nu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Iv(t,e,n,r,i){switch(e){case"focusin":return ln=hi(ln,t,e,n,r,i),!0;case"dragenter":return cn=hi(cn,t,e,n,r,i),!0;case"mouseover":return un=hi(un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hi.set(s,hi(Hi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gi.set(s,hi(Gi.get(s)||null,t,e,n,r,i)),!0}return!1}function Pm(t){var e=zn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,Nm(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=Es(n),e!==null&&Nu(e),t.blockedOn=n,!1;e.shift()}return!0}function If(t,e,n){so(t)&&n.delete(e)}function bv(){mc=!1,ln!==null&&so(ln)&&(ln=null),cn!==null&&so(cn)&&(cn=null),un!==null&&so(un)&&(un=null),Hi.forEach(If),Gi.forEach(If)}function pi(t,e){t.blockedOn===e&&(t.blockedOn=null,mc||(mc=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,bv)))}function Ki(t){function e(i){return pi(i,t)}if(0<Vs.length){pi(Vs[0],t);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ln!==null&&pi(ln,t),cn!==null&&pi(cn,t),un!==null&&pi(un,t),Hi.forEach(e),Gi.forEach(e),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&Zt.shift()}var Nr=Kt.ReactCurrentBatchConfig,No=!0;function Tv(t,e,n,r){var i=B,s=Nr.transition;Nr.transition=null;try{B=1,Pu(t,e,n,r)}finally{B=i,Nr.transition=s}}function Nv(t,e,n,r){var i=B,s=Nr.transition;Nr.transition=null;try{B=4,Pu(t,e,n,r)}finally{B=i,Nr.transition=s}}function Pu(t,e,n,r){if(No){var i=gc(t,e,n,r);if(i===null)vl(t,e,r,Po,n),kf(t,r);else if(Iv(i,t,e,n,r))r.stopPropagation();else if(kf(t,r),e&4&&-1<kv.indexOf(t)){for(;i!==null;){var s=Es(i);if(s!==null&&Im(s),s=gc(t,e,n,r),s===null&&vl(t,e,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vl(t,e,r,null,n)}}var Po=null;function gc(t,e,n,r){if(Po=null,t=Iu(r),t=zn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function Rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case bu:return 1;case Em:return 4;case bo:case _v:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var on=null,Ru=null,oo=null;function Am(){if(oo)return oo;var t,e=Ru,n=e.length,r,i="value"in on?on.value:on.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return oo=i.slice(t,1<r?1-r:void 0)}function ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $s(){return!0}function bf(){return!1}function Qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:bf,this.isPropagationStopped=bf,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),e}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Qe(Zr),ws=te({},Zr,{view:0,detail:0}),Pv=Qe(ws),ul,dl,mi,ka=te({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mi&&(mi&&t.type==="mousemove"?(ul=t.screenX-mi.screenX,dl=t.screenY-mi.screenY):dl=ul=0,mi=t),ul)},movementY:function(t){return"movementY"in t?t.movementY:dl}}),Tf=Qe(ka),Rv=te({},ka,{dataTransfer:0}),Av=Qe(Rv),Ov=te({},ws,{relatedTarget:0}),fl=Qe(Ov),Dv=te({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=Qe(Dv),Mv=te({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Qe(Mv),Uv=te({},Zr,{data:0}),Nf=Qe(Uv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wv[t])?!!e[t]:!1}function Ou(){return Bv}var Vv=te({},ws,{key:function(t){if(t.key){var e=zv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=Qe(Vv),Hv=te({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=Qe(Hv),Gv=te({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Kv=Qe(Gv),Qv=te({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=Qe(Qv),Yv=te({},ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Qe(Yv),Jv=[9,13,27,32],Du=zt&&"CompositionEvent"in window,Ni=null;zt&&"documentMode"in document&&(Ni=document.documentMode);var Zv=zt&&"TextEvent"in window&&!Ni,Om=zt&&(!Du||Ni&&8<Ni&&11>=Ni),Rf=" ",Af=!1;function Dm(t,e){switch(t){case"keyup":return Jv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function ex(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(Af=!0,Rf);case"textInput":return t=e.data,t===Rf&&Af?null:t;default:return null}}function tx(t,e){if(pr)return t==="compositionend"||!Du&&Dm(t,e)?(t=Am(),oo=Ru=on=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nx[t.type]:e==="textarea"}function Mm(t,e,n,r){hm(r),e=Ro(e,"onChange"),0<e.length&&(n=new Au("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Qi=null;function rx(t){Km(t,0)}function Ia(t){var e=_r(t);if(om(e))return t}function ix(t,e){if(t==="change")return e}var Fm=!1;if(zt){var hl;if(zt){var pl="oninput"in document;if(!pl){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),pl=typeof Df.oninput=="function"}hl=pl}else hl=!1;Fm=hl&&(!document.documentMode||9<document.documentMode)}function Lf(){Pi&&(Pi.detachEvent("onpropertychange",Um),Qi=Pi=null)}function Um(t){if(t.propertyName==="value"&&Ia(Qi)){var e=[];Mm(e,Qi,t,Iu(t)),_m(rx,e)}}function sx(t,e,n){t==="focusin"?(Lf(),Pi=e,Qi=n,Pi.attachEvent("onpropertychange",Um)):t==="focusout"&&Lf()}function ox(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ia(Qi)}function ax(t,e){if(t==="click")return Ia(e)}function lx(t,e){if(t==="input"||t==="change")return Ia(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:cx;function qi(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jl.call(e,i)||!gt(t[i],e[i]))return!1}return!0}function Mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ff(t,e){var n=Mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jm(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function Lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ux(t){var e=jm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(r!==null&&Lu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ff(n,s);var o=Ff(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dx=zt&&"documentMode"in document&&11>=document.documentMode,mr=null,_c=null,Ri=null,yc=!1;function Uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||mr==null||mr!==Co(r)||(r=mr,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&qi(Ri,r)||(Ri=r,r=Ro(_c,"onSelect"),0<r.length&&(e=new Au("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function Hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},ml={},Wm={};zt&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function ba(t){if(ml[t])return ml[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wm)return ml[t]=e[n];return t}var Bm=ba("animationend"),Vm=ba("animationiteration"),$m=ba("animationstart"),Hm=ba("transitionend"),Gm=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,e){Gm.set(t,e),ir(e,[t])}for(var gl=0;gl<zf.length;gl++){var _l=zf[gl],fx=_l.toLowerCase(),hx=_l[0].toUpperCase()+_l.slice(1);Nn(fx,"on"+hx)}Nn(Bm,"onAnimationEnd");Nn(Vm,"onAnimationIteration");Nn($m,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Hm,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function jf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fv(r,e,void 0,t),t.currentTarget=null}function Km(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jf(i,a,c),s=l}}}if(Io)throw t=hc,Io=!1,hc=null,t}function q(t,e){var n=e[Sc];n===void 0&&(n=e[Sc]=new Set);var r=t+"__bubble";n.has(r)||(Qm(e,t,2,!1),n.add(r))}function yl(t,e,n){var r=0;e&&(r|=4),Qm(n,t,r,e)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[Gs]){t[Gs]=!0,tm.forEach(function(n){n!=="selectionchange"&&(px.has(n)||yl(n,!1,t),yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gs]||(e[Gs]=!0,yl("selectionchange",!1,e))}}function Qm(t,e,n,r){switch(Rm(e)){case 1:var i=Tv;break;case 4:i=Nv;break;default:i=Pu}n=i.bind(null,e,n,t),i=void 0,!fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_m(function(){var c=s,d=Iu(n),u=[];e:{var f=Gm.get(t);if(f!==void 0){var m=Au,_=t;switch(t){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":m=$v;break;case"focusin":_="focus",m=fl;break;case"focusout":_="blur",m=fl;break;case"beforeblur":case"afterblur":m=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Kv;break;case Bm:case Vm:case $m:m=Lv;break;case Hm:m=qv;break;case"scroll":m=Pv;break;case"wheel":m=Xv;break;case"copy":case"cut":case"paste":m=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pf}var y=(e&4)!==0,S=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var h=c,g;h!==null;){g=h;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,p!==null&&(x=$i(h,p),x!=null&&y.push(Xi(h,x,g)))),S)break;h=h.return}0<y.length&&(f=new m(f,_,null,n,d),u.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==uc&&(_=n.relatedTarget||n.fromElement)&&(zn(_)||_[jt]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?zn(_):null,_!==null&&(S=sr(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=Tf,x="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Pf,x="onPointerLeave",p="onPointerEnter",h="pointer"),S=m==null?f:_r(m),g=_==null?f:_r(_),f=new y(x,h+"leave",m,n,d),f.target=S,f.relatedTarget=g,x=null,zn(d)===c&&(y=new y(p,h+"enter",_,n,d),y.target=g,y.relatedTarget=S,x=y),S=x,m&&_)t:{for(y=m,p=_,h=0,g=y;g;g=lr(g))h++;for(g=0,x=p;x;x=lr(x))g++;for(;0<h-g;)y=lr(y),h--;for(;0<g-h;)p=lr(p),g--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=lr(y),p=lr(p)}y=null}else y=null;m!==null&&Wf(u,f,m,y,!1),_!==null&&S!==null&&Wf(u,S,_,y,!0)}}e:{if(f=c?_r(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=ix;else if(Of(f))if(Fm)C=lx;else{C=ox;var b=sx}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=ax);if(C&&(C=C(t,c))){Mm(u,C,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&sc(f,"number",f.value)}switch(b=c?_r(c):window,t){case"focusin":(Of(b)||b.contentEditable==="true")&&(mr=b,_c=c,Ri=null);break;case"focusout":Ri=_c=mr=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Uf(u,n,d);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Uf(u,n,d)}var T;if(Du)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else pr?Dm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Om&&n.locale!=="ko"&&(pr||N!=="onCompositionStart"?N==="onCompositionEnd"&&pr&&(T=Am()):(on=d,Ru="value"in on?on.value:on.textContent,pr=!0)),b=Ro(c,N),0<b.length&&(N=new Nf(N,t,null,n,d),u.push({event:N,listeners:b}),T?N.data=T:(T=Lm(n),T!==null&&(N.data=T)))),(T=Zv?ex(t,n):tx(t,n))&&(c=Ro(c,"onBeforeInput"),0<c.length&&(d=new Nf("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=T))}Km(u,e)})}function Xi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$i(t,n),s!=null&&r.unshift(Xi(t,s,i)),s=$i(t,e),s!=null&&r.push(Xi(t,s,i))),t=t.return}return r}function lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=$i(n,s),l!=null&&o.unshift(Xi(n,l,a))):i||(l=$i(n,s),l!=null&&o.push(Xi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Bf(t){return(typeof t=="string"?t:""+t).replace(mx,`
`).replace(gx,"")}function Ks(t,e,n){if(e=Bf(e),Bf(t)!==e&&n)throw Error(w(425))}function Ao(){}var vc=null,xc=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(t){return Vf.resolve(null).then(t).catch(vx)}:Ec;function vx(t){setTimeout(function(){throw t})}function xl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ki(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ki(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $f(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),wt="__reactFiber$"+ei,Ji="__reactProps$"+ei,jt="__reactContainer$"+ei,Sc="__reactEvents$"+ei,xx="__reactListeners$"+ei,wx="__reactHandles$"+ei;function zn(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jt]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$f(t);t!==null;){if(n=t[wt])return n;t=$f(t)}return e}t=n,n=t.parentNode}return null}function Es(t){return t=t[wt]||t[jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Ta(t){return t[Ji]||null}var Cc=[],yr=-1;function Pn(t){return{current:t}}function Y(t){0>yr||(t.current=Cc[yr],Cc[yr]=null,yr--)}function Q(t,e){yr++,Cc[yr]=t.current,t.current=e}var Cn={},Te=Pn(Cn),ze=Pn(!1),Kn=Cn;function zr(t,e){var n=t.type.contextTypes;if(!n)return Cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function Oo(){Y(ze),Y(Te)}function Hf(t,e,n){if(Te.current!==Cn)throw Error(w(168));Q(Te,e),Q(ze,n)}function qm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,sv(t)||"Unknown",i));return te({},n,r)}function Do(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,Kn=Te.current,Q(Te,t),Q(ze,ze.current),!0}function Gf(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=qm(t,e,Kn),r.__reactInternalMemoizedMergedChildContext=t,Y(ze),Y(Te),Q(Te,t)):Y(ze),Q(ze,n)}var Rt=null,Na=!1,wl=!1;function Ym(t){Rt===null?Rt=[t]:Rt.push(t)}function Ex(t){Na=!0,Ym(t)}function Rn(){if(!wl&&Rt!==null){wl=!0;var t=0,e=B;try{var n=Rt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rt=null,Na=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(t+1)),wm(bu,Rn),i}finally{B=e,wl=!1}}return null}var vr=[],xr=0,Lo=null,Mo=0,qe=[],Ye=0,Qn=null,At=1,Ot="";function Ln(t,e){vr[xr++]=Mo,vr[xr++]=Lo,Lo=t,Mo=e}function Xm(t,e,n){qe[Ye++]=At,qe[Ye++]=Ot,qe[Ye++]=Qn,Qn=t;var r=At;t=Ot;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,At=1<<32-ht(e)+i|n<<i|r,Ot=s+t}else At=1<<s|n<<i|r,Ot=t}function Mu(t){t.return!==null&&(Ln(t,1),Xm(t,1,0))}function Fu(t){for(;t===Lo;)Lo=vr[--xr],vr[xr]=null,Mo=vr[--xr],vr[xr]=null;for(;t===Qn;)Qn=qe[--Ye],qe[Ye]=null,Ot=qe[--Ye],qe[Ye]=null,At=qe[--Ye],qe[Ye]=null}var He=null,$e=null,J=!1,at=null;function Jm(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,He=t,$e=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,He=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:At,overflow:Ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,He=t,$e=null,!0):!1;default:return!1}}function kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ic(t){if(J){var e=$e;if(e){var n=e;if(!Kf(t,e)){if(kc(t))throw Error(w(418));e=dn(n.nextSibling);var r=He;e&&Kf(t,e)?Jm(r,n):(t.flags=t.flags&-4097|2,J=!1,He=t)}}else{if(kc(t))throw Error(w(418));t.flags=t.flags&-4097|2,J=!1,He=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;He=t}function Qs(t){if(t!==He)return!1;if(!J)return Qf(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=$e)){if(kc(t))throw Zm(),Error(w(418));for(;e;)Jm(t,e),e=dn(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=He?dn(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=$e;t;)t=dn(t.nextSibling)}function jr(){$e=He=null,J=!1}function Uu(t){at===null?at=[t]:at.push(t)}var Sx=Kt.ReactCurrentBatchConfig;function gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function qs(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qf(t){var e=t._init;return e(t._payload)}function e0(t){function e(p,h){if(t){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=mn(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,x){return h===null||h.tag!==6?(h=Tl(g,p.mode,x),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,x){var C=g.type;return C===hr?d(p,h,g.props.children,x,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xt&&qf(C)===h.type)?(x=i(h,g.props),x.ref=gi(p,h,g),x.return=p,x):(x=mo(g.type,g.key,g.props,null,p.mode,x),x.ref=gi(p,h,g),x.return=p,x)}function c(p,h,g,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Nl(g,p.mode,x),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function d(p,h,g,x,C){return h===null||h.tag!==7?(h=Gn(g,p.mode,x,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function u(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Tl(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Us:return g=mo(h.type,h.key,h.props,null,p.mode,g),g.ref=gi(p,null,h),g.return=p,g;case fr:return h=Nl(h,p.mode,g),h.return=p,h;case Xt:var x=h._init;return u(p,x(h._payload),g)}if(Ci(h)||di(h))return h=Gn(h,p.mode,g,null),h.return=p,h;qs(p,h)}return null}function f(p,h,g,x){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(p,h,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:return g.key===C?l(p,h,g,x):null;case fr:return g.key===C?c(p,h,g,x):null;case Xt:return C=g._init,f(p,h,C(g._payload),x)}if(Ci(g)||di(g))return C!==null?null:d(p,h,g,x,null);qs(p,g)}return null}function m(p,h,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(g)||null,a(h,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Us:return p=p.get(x.key===null?g:x.key)||null,l(h,p,x,C);case fr:return p=p.get(x.key===null?g:x.key)||null,c(h,p,x,C);case Xt:var b=x._init;return m(p,h,g,b(x._payload),C)}if(Ci(x)||di(x))return p=p.get(g)||null,d(h,p,x,C,null);qs(h,x)}return null}function _(p,h,g,x){for(var C=null,b=null,T=h,N=h=0,se=null;T!==null&&N<g.length;N++){T.index>N?(se=T,T=null):se=T.sibling;var z=f(p,T,g[N],x);if(z===null){T===null&&(T=se);break}t&&T&&z.alternate===null&&e(p,T),h=s(z,h,N),b===null?C=z:b.sibling=z,b=z,T=se}if(N===g.length)return n(p,T),J&&Ln(p,N),C;if(T===null){for(;N<g.length;N++)T=u(p,g[N],x),T!==null&&(h=s(T,h,N),b===null?C=T:b.sibling=T,b=T);return J&&Ln(p,N),C}for(T=r(p,T);N<g.length;N++)se=m(T,p,N,g[N],x),se!==null&&(t&&se.alternate!==null&&T.delete(se.key===null?N:se.key),h=s(se,h,N),b===null?C=se:b.sibling=se,b=se);return t&&T.forEach(function(rt){return e(p,rt)}),J&&Ln(p,N),C}function y(p,h,g,x){var C=di(g);if(typeof C!="function")throw Error(w(150));if(g=C.call(g),g==null)throw Error(w(151));for(var b=C=null,T=h,N=h=0,se=null,z=g.next();T!==null&&!z.done;N++,z=g.next()){T.index>N?(se=T,T=null):se=T.sibling;var rt=f(p,T,z.value,x);if(rt===null){T===null&&(T=se);break}t&&T&&rt.alternate===null&&e(p,T),h=s(rt,h,N),b===null?C=rt:b.sibling=rt,b=rt,T=se}if(z.done)return n(p,T),J&&Ln(p,N),C;if(T===null){for(;!z.done;N++,z=g.next())z=u(p,z.value,x),z!==null&&(h=s(z,h,N),b===null?C=z:b.sibling=z,b=z);return J&&Ln(p,N),C}for(T=r(p,T);!z.done;N++,z=g.next())z=m(T,p,N,z.value,x),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?N:z.key),h=s(z,h,N),b===null?C=z:b.sibling=z,b=z);return t&&T.forEach(function(ci){return e(p,ci)}),J&&Ln(p,N),C}function S(p,h,g,x){if(typeof g=="object"&&g!==null&&g.type===hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:e:{for(var C=g.key,b=h;b!==null;){if(b.key===C){if(C=g.type,C===hr){if(b.tag===7){n(p,b.sibling),h=i(b,g.props.children),h.return=p,p=h;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xt&&qf(C)===b.type){n(p,b.sibling),h=i(b,g.props),h.ref=gi(p,b,g),h.return=p,p=h;break e}n(p,b);break}else e(p,b);b=b.sibling}g.type===hr?(h=Gn(g.props.children,p.mode,x,g.key),h.return=p,p=h):(x=mo(g.type,g.key,g.props,null,p.mode,x),x.ref=gi(p,h,g),x.return=p,p=x)}return o(p);case fr:e:{for(b=g.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Nl(g,p.mode,x),h.return=p,p=h}return o(p);case Xt:return b=g._init,S(p,h,b(g._payload),x)}if(Ci(g))return _(p,h,g,x);if(di(g))return y(p,h,g,x);qs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=Tl(g,p.mode,x),h.return=p,p=h),o(p)):n(p,h)}return S}var Wr=e0(!0),t0=e0(!1),Fo=Pn(null),Uo=null,wr=null,zu=null;function ju(){zu=wr=Uo=null}function Wu(t){var e=Fo.current;Y(Fo),t._currentValue=e}function bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){Uo=t,zu=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function et(t){var e=t._currentValue;if(zu!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(Uo===null)throw Error(w(308));wr=t,Uo.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var jn=null;function Bu(t){jn===null?jn=[t]:jn.push(t)}function n0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wt(t,r)}function Wt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wt(t,n)}return i=r.interleaved,i===null?(e.next=e,Bu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wt(t,n)}function lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tu(t,n)}}function Yf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zo(t,e,n,r){var i=t.updateQueue;Jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){u=_.call(m,u,f);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(m,u,f):_,f==null)break e;u=te({},u,f);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=u):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yn|=o,t.lanes=o,t.memoizedState=u}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Ss={},St=Pn(Ss),Zi=Pn(Ss),es=Pn(Ss);function Wn(t){if(t===Ss)throw Error(w(174));return t}function $u(t,e){switch(Q(es,e),Q(Zi,t),Q(St,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ac(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ac(e,t)}Y(St),Q(St,e)}function Br(){Y(St),Y(Zi),Y(es)}function i0(t){Wn(es.current);var e=Wn(St.current),n=ac(e,t.type);e!==n&&(Q(Zi,t),Q(St,n))}function Hu(t){Zi.current===t&&(Y(St),Y(Zi))}var Z=Pn(0);function jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var El=[];function Gu(){for(var t=0;t<El.length;t++)El[t]._workInProgressVersionPrimary=null;El.length=0}var co=Kt.ReactCurrentDispatcher,Sl=Kt.ReactCurrentBatchConfig,qn=0,ee=null,ce=null,pe=null,Wo=!1,Ai=!1,ts=0,Cx=0;function Se(){throw Error(w(321))}function Ku(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gt(t[n],e[n]))return!1;return!0}function Qu(t,e,n,r,i,s){if(qn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?Tx:Nx,t=n(r,i),Ai){s=0;do{if(Ai=!1,ts=0,25<=s)throw Error(w(301));s+=1,pe=ce=null,e.updateQueue=null,co.current=Px,t=n(r,i)}while(Ai)}if(co.current=Bo,e=ce!==null&&ce.next!==null,qn=0,pe=ce=ee=null,Wo=!1,e)throw Error(w(300));return t}function qu(){var t=ts!==0;return ts=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=t:pe=pe.next=t,pe}function tt(){if(ce===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=pe===null?ee.memoizedState:pe.next;if(e!==null)pe=e,ce=t;else{if(t===null)throw Error(w(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?ee.memoizedState=pe=t:pe=pe.next=t}return pe}function ns(t,e){return typeof e=="function"?e(t):e}function Cl(t){var e=tt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((qn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,ee.lanes|=d,Yn|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gt(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Yn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kl(t){var e=tt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gt(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s0(){}function o0(t,e){var n=ee,r=tt(),i=e(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Yu(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,rs(9,l0.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(w(349));qn&30||a0(n,e,i)}return i}function a0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,r){e.value=n,e.getSnapshot=r,u0(e)&&d0(t)}function c0(t,e,n){return n(function(){u0(e)&&d0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gt(t,n)}catch{return!0}}function d0(t){var e=Wt(t,1);e!==null&&pt(e,t,1,-1)}function Jf(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},e.queue=t,t=t.dispatch=bx.bind(null,ee,t),[e.memoizedState,t]}function rs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return tt().memoizedState}function uo(t,e,n,r){var i=xt();ee.flags|=t,i.memoizedState=rs(1|e,n,void 0,r===void 0?null:r)}function Pa(t,e,n,r){var i=tt();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&Ku(r,o.deps)){i.memoizedState=rs(e,n,s,r);return}}ee.flags|=t,i.memoizedState=rs(1|e,n,s,r)}function Zf(t,e){return uo(8390656,8,t,e)}function Yu(t,e){return Pa(2048,8,t,e)}function h0(t,e){return Pa(4,2,t,e)}function p0(t,e){return Pa(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4,4,m0.bind(null,e,t),n)}function Xu(){}function _0(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ku(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ku(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function v0(t,e,n){return qn&21?(gt(n,e)||(n=Cm(),ee.lanes|=n,Yn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function kx(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Sl.transition;Sl.transition={};try{t(!1),e()}finally{B=n,Sl.transition=r}}function x0(){return tt().memoizedState}function Ix(t,e,n){var r=pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w0(t))E0(e,n);else if(n=n0(t,e,n,r),n!==null){var i=Ae();pt(n,t,r,i),S0(n,e,r)}}function bx(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w0(t))E0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gt(a,o)){var l=e.interleaved;l===null?(i.next=i,Bu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=n0(t,e,i,r),n!==null&&(i=Ae(),pt(n,t,r,i),S0(n,e,r))}}function w0(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function E0(t,e){Ai=Wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tu(t,n)}}var Bo={readContext:et,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Tx={readContext:et,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:et,useEffect:Zf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uo(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return uo(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ix.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:Jf,useDebugValue:Xu,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=Jf(!1),e=t[0];return t=kx.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=xt();if(J){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),_e===null)throw Error(w(349));qn&30||a0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zf(c0.bind(null,r,s,t),[t]),r.flags|=2048,rs(9,l0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=_e.identifierPrefix;if(J){var n=Ot,r=At;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Nx={readContext:et,useCallback:_0,useContext:et,useEffect:Yu,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:y0,useReducer:Cl,useRef:f0,useState:function(){return Cl(ns)},useDebugValue:Xu,useDeferredValue:function(t){var e=tt();return v0(e,ce.memoizedState,t)},useTransition:function(){var t=Cl(ns)[0],e=tt().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:x0,unstable_isNewReconciler:!1},Px={readContext:et,useCallback:_0,useContext:et,useEffect:Yu,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:y0,useReducer:kl,useRef:f0,useState:function(){return kl(ns)},useDebugValue:Xu,useDeferredValue:function(t){var e=tt();return ce===null?e.memoizedState=t:v0(e,ce.memoizedState,t)},useTransition:function(){var t=kl(ns)[0],e=tt().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:x0,unstable_isNewReconciler:!1};function st(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ra={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=pn(t),s=Ft(r,i);s.payload=e,n!=null&&(s.callback=n),e=fn(t,s,i),e!==null&&(pt(e,t,i,r),lo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=pn(t),s=Ft(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fn(t,s,i),e!==null&&(pt(e,t,i,r),lo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=pn(t),i=Ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=fn(t,i,r),e!==null&&(pt(e,t,r,n),lo(e,t,r))}};function eh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qi(n,r)||!qi(i,s):!0}function C0(t,e,n){var r=!1,i=Cn,s=e.contextType;return typeof s=="object"&&s!==null?s=et(s):(i=je(e)?Kn:Te.current,r=e.contextTypes,s=(r=r!=null)?zr(t,i):Cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ra,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function th(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ra.enqueueReplaceState(e,e.state,null)}function Nc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=et(s):(s=je(e)?Kn:Te.current,i.context=zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ra.enqueueReplaceState(i,i.state,null),zo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vr(t,e){try{var n="",r=e;do n+=iv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Il(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$o||($o=!0,jc=r),Pc(t,e)},n}function I0(t,e,n){n=Ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pc(t,e),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hx.bind(null,t,e,n),e.then(t,t))}function rh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ih(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ft(-1,1),e.tag=2,fn(n,e,1))),n.lanes|=1),t)}var Ax=Kt.ReactCurrentOwner,Fe=!1;function Ne(t,e,n,r){e.child=t===null?t0(e,null,n,r):Wr(e,t.child,n,r)}function sh(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Qu(t,e,n,r,s,i),n=qu(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(J&&n&&Mu(e),e.flags|=1,Ne(t,e,r,i),e.child)}function oh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b0(t,e,s,r,i)):(t=mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(o,r)&&t.ref===e.ref)return Bt(t,e,i)}return e.flags|=1,t=mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function b0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qi(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Bt(t,e,i)}return Rc(t,e,n,r,i)}function T0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Sr,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Sr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Sr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Sr,Ve),Ve|=r;return Ne(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rc(t,e,n,r,i){var s=je(n)?Kn:Te.current;return s=zr(e,s),Pr(e,i),n=Qu(t,e,n,r,s,i),r=qu(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(J&&r&&Mu(e),e.flags|=1,Ne(t,e,n,i),e.child)}function ah(t,e,n,r,i){if(je(n)){var s=!0;Do(e)}else s=!1;if(Pr(e,i),e.stateNode===null)fo(t,e),C0(e,n,r),Nc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=et(c):(c=je(n)?Kn:Te.current,c=zr(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&th(e,o,r,c),Jt=!1;var f=e.memoizedState;o.state=f,zo(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ze.current||Jt?(typeof d=="function"&&(Tc(e,n,d,r),l=e.memoizedState),(a=Jt||eh(e,n,a,r,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,r0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:st(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=et(l):(l=je(n)?Kn:Te.current,l=zr(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&th(e,o,r,l),Jt=!1,f=e.memoizedState,o.state=f,zo(e,r,o,i);var _=e.memoizedState;a!==u||f!==_||ze.current||Jt?(typeof m=="function"&&(Tc(e,n,m,r),_=e.memoizedState),(c=Jt||eh(e,n,c,r,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ac(t,e,n,r,s,i)}function Ac(t,e,n,r,i,s){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gf(e,n,!1),Bt(t,e,s);r=e.stateNode,Ax.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wr(e,t.child,null,s),e.child=Wr(e,null,a,s)):Ne(t,e,a,s),e.memoizedState=r.state,i&&Gf(e,n,!0),e.child}function P0(t){var e=t.stateNode;e.pendingContext?Hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hf(t,e.context,!1),$u(t,e.containerInfo)}function lh(t,e,n,r,i){return jr(),Uu(i),e.flags|=256,Ne(t,e,n,r),e.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function Dc(t){return{baseLanes:t,cachePool:null,transitions:null}}function R0(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(Z,i&1),t===null)return Ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Da(o,r,0,null),t=Gn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dc(n),e.memoizedState=Oc,t):Ju(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ox(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mn(a,s):(s=Gn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oc,r}return s=t.child,t=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ju(t,e){return e=Da({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,r){return r!==null&&Uu(r),Wr(e,t.child,null,n),t=Ju(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ox(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Il(Error(w(422))),Ys(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Da({mode:"visible",children:r.children},i,0,null),s=Gn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wr(e,t.child,null,o),e.child.memoizedState=Dc(o),e.memoizedState=Oc,s);if(!(e.mode&1))return Ys(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=Il(s,r,void 0),Ys(t,e,o,r)}if(a=(o&t.childLanes)!==0,Fe||a){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(t,i),pt(r,t,i,-1))}return id(),r=Il(Error(w(421))),Ys(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Gx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=dn(i.nextSibling),He=e,J=!0,at=null,t!==null&&(qe[Ye++]=At,qe[Ye++]=Ot,qe[Ye++]=Qn,At=t.id,Ot=t.overflow,Qn=e),e=Ju(e,r.children),e.flags|=4096,e)}function ch(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bc(t.return,e,n)}function bl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function A0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ch(t,n,e);else if(t.tag===19)ch(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bl(e,!0,n,null,s);break;case"together":bl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dx(t,e,n){switch(e.tag){case 3:P0(e),jr();break;case 5:i0(e);break;case 1:je(e.type)&&Do(e);break;case 4:$u(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?R0(t,e,n):(Q(Z,Z.current&1),t=Bt(t,e,n),t!==null?t.sibling:null);Q(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return A0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,T0(t,e,n)}return Bt(t,e,n)}var O0,Lc,D0,L0;O0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};D0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wn(St.current);var s=null;switch(n){case"input":i=rc(t,i),r=rc(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=oc(t,i),r=oc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ao)}lc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&q("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};L0=function(t,e,n,r){n!==r&&(e.flags|=4)};function _i(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lx(t,e,n){var r=e.pendingProps;switch(Fu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return je(e.type)&&Oo(),Ce(e),null;case 3:return r=e.stateNode,Br(),Y(ze),Y(Te),Gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,at!==null&&(Vc(at),at=null))),Lc(t,e),Ce(e),null;case 5:Hu(e);var i=Wn(es.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ce(e),null}if(t=Wn(St.current),Qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[Ji]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)q(Ii[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":yf(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":xf(r,s),q("invalid",r)}lc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,a,t),i=["children",""+a]):Bi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":zs(r),vf(r,s,!0);break;case"textarea":zs(r),wf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[Ji]=r,O0(t,e,!1,!1),e.stateNode=t;e:{switch(o=cc(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)q(Ii[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":yf(t,r),i=rc(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),q("invalid",t);break;case"textarea":xf(t,r),i=oc(t,r),q("invalid",t);break;default:i=r}lc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vi(t,l):typeof l=="number"&&Vi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&q("scroll",t):l!=null&&Eu(t,s,l,o))}switch(n){case"input":zs(t),vf(t,r,!1);break;case"textarea":zs(t),wf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)L0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Wn(es.current),Wn(St.current),Qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=He,t!==null))switch(t.tag){case 3:Ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return Ce(e),null;case 13:if(Y(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&$e!==null&&e.mode&1&&!(e.flags&128))Zm(),jr(),e.flags|=98560,s=!1;else if(s=Qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[wt]=e}else jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else at!==null&&(Vc(at),at=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?de===0&&(de=3):id())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return Br(),Lc(t,e),t===null&&Yi(e.stateNode.containerInfo),Ce(e),null;case 10:return Wu(e.type._context),Ce(e),null;case 17:return je(e.type)&&Oo(),Ce(e),null;case 19:if(Y(Z),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_i(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jo(t),o!==null){for(e.flags|=128,_i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>$r&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304)}else{if(!r)if(t=jo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ce(e),null}else 2*ae()-s.renderingStartTime>$r&&n!==1073741824&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=Z.current,Q(Z,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Mx(t,e){switch(Fu(e),e.tag){case 1:return je(e.type)&&Oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),Y(ze),Y(Te),Gu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hu(e),null;case 13:if(Y(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Z),null;case 4:return Br(),null;case 10:return Wu(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Xs=!1,Ie=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,k=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Mc(t,e,n){try{n()}catch(r){ne(t,e,r)}}var uh=!1;function Ux(t,e){if(vc=No,t=jm(),Lu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var m;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)f=u,u=m;for(;;){if(u===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(m=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xc={focusedElem:t,selectionRange:n},No=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,S=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),S);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){ne(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=uh,uh=!1,_}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mc(e,n,s)}i=i.next}while(i!==r)}}function Aa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M0(t){var e=t.alternate;e!==null&&(t.alternate=null,M0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[Ji],delete e[Sc],delete e[xx],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F0(t){return t.tag===5||t.tag===3||t.tag===4}function dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ao));else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}var ye=null,ot=!1;function Qt(t,e,n){for(n=n.child;n!==null;)U0(t,e,n),n=n.sibling}function U0(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 5:Ie||Er(n,e);case 6:var r=ye,i=ot;ye=null,Qt(t,e,n),ye=r,ot=i,ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?xl(t.parentNode,n):t.nodeType===1&&xl(t,n),Ki(t)):xl(ye,n.stateNode));break;case 4:r=ye,i=ot,ye=n.stateNode.containerInfo,ot=!0,Qt(t,e,n),ye=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mc(n,e,o),i=i.next}while(i!==r)}Qt(t,e,n);break;case 1:if(!Ie&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,e,a)}Qt(t,e,n);break;case 21:Qt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Qt(t,e,n),Ie=r):Qt(t,e,n);break;default:Qt(t,e,n)}}function fh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fx),e.forEach(function(r){var i=Kx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,ot=!1;break e;case 3:ye=a.stateNode.containerInfo,ot=!0;break e;case 4:ye=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(ye===null)throw Error(w(160));U0(s,o,i),ye=null,ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),vt(t),r&4){try{Oi(3,t,t.return),Aa(3,t)}catch(y){ne(t,t.return,y)}try{Oi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:it(e,t),vt(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(it(e,t),vt(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{Vi(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&am(i,s),cc(a,o);var c=cc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?fm(i,u):d==="dangerouslySetInnerHTML"?um(i,u):d==="children"?Vi(i,u):Eu(i,d,u,c)}switch(a){case"input":ic(i,s);break;case"textarea":lm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ir(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ji]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(it(e,t),vt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(it(e,t),vt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:it(e,t),vt(t);break;case 13:it(e,t),vt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=ae())),r&4&&fh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(c=Ie)||d,it(e,t),Ie=c):it(e,t),vt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(u=k=d;k!==null;){switch(f=k,m=f.child,f.tag){case 0:case 11:case 14:case 15:Oi(4,f,f.return);break;case 1:Er(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Er(f,f.return);break;case 22:if(f.memoizedState!==null){ph(u);continue}}m!==null?(m.return=f,k=m):ph(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dm("display",o))}catch(y){ne(t,t.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){ne(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:it(e,t),vt(t),r&4&&fh(t);break;case 21:break;default:it(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vi(i,""),r.flags&=-33);var s=dh(t);zc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dh(t);Uc(t,a,o);break;default:throw Error(w(161))}}catch(l){ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zx(t,e,n){k=t,j0(t)}function j0(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=Xs;var c=Ie;if(Xs=o,(Ie=l)&&!c)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?mh(i):l!==null?(l.return=o,k=l):mh(i);for(;s!==null;)k=s,j0(s),s=s.sibling;k=i,Xs=a,Ie=c}hh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):hh(t)}}function hh(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Aa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Ki(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ie||e.flags&512&&Fc(e)}catch(f){ne(e,e.return,f)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function ph(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function mh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Aa(4,e)}catch(l){ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ne(e,i,l)}}var s=e.return;try{Fc(e)}catch(l){ne(e,s,l)}break;case 5:var o=e.return;try{Fc(e)}catch(l){ne(e,o,l)}}}catch(l){ne(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var jx=Math.ceil,Vo=Kt.ReactCurrentDispatcher,Zu=Kt.ReactCurrentOwner,Ze=Kt.ReactCurrentBatchConfig,j=0,_e=null,le=null,xe=0,Ve=0,Sr=Pn(0),de=0,is=null,Yn=0,Oa=0,ed=0,Di=null,Me=null,td=0,$r=1/0,Pt=null,$o=!1,jc=null,hn=null,Js=!1,an=null,Ho=0,Li=0,Wc=null,ho=-1,po=0;function Ae(){return j&6?ae():ho!==-1?ho:ho=ae()}function pn(t){return t.mode&1?j&2&&xe!==0?xe&-xe:Sx.transition!==null?(po===0&&(po=Cm()),po):(t=B,t!==0||(t=window.event,t=t===void 0?16:Rm(t.type)),t):1}function pt(t,e,n,r){if(50<Li)throw Li=0,Wc=null,Error(w(185));xs(t,n,r),(!(j&2)||t!==_e)&&(t===_e&&(!(j&2)&&(Oa|=n),de===4&&en(t,xe)),We(t,r),n===1&&j===0&&!(e.mode&1)&&($r=ae()+500,Na&&Rn()))}function We(t,e){var n=t.callbackNode;Sv(t,e);var r=To(t,t===_e?xe:0);if(r===0)n!==null&&Cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cf(n),e===1)t.tag===0?Ex(gh.bind(null,t)):Ym(gh.bind(null,t)),yx(function(){!(j&6)&&Rn()}),n=null;else{switch(km(r)){case 1:n=bu;break;case 4:n=Em;break;case 16:n=bo;break;case 536870912:n=Sm;break;default:n=bo}n=Q0(n,W0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W0(t,e){if(ho=-1,po=0,j&6)throw Error(w(327));var n=t.callbackNode;if(Rr()&&t.callbackNode!==n)return null;var r=To(t,t===_e?xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=j;j|=2;var s=V0();(_e!==t||xe!==e)&&(Pt=null,$r=ae()+500,Hn(t,e));do try{Vx();break}catch(a){B0(t,a)}while(!0);ju(),Vo.current=s,j=i,le!==null?e=0:(_e=null,xe=0,e=de)}if(e!==0){if(e===2&&(i=pc(t),i!==0&&(r=i,e=Bc(t,i))),e===1)throw n=is,Hn(t,0),en(t,r),We(t,ae()),n;if(e===6)en(t,r);else{if(i=t.current.alternate,!(r&30)&&!Wx(i)&&(e=Go(t,r),e===2&&(s=pc(t),s!==0&&(r=s,e=Bc(t,s))),e===1))throw n=is,Hn(t,0),en(t,r),We(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Mn(t,Me,Pt);break;case 3:if(en(t,r),(r&130023424)===r&&(e=td+500-ae(),10<e)){if(To(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ec(Mn.bind(null,t,Me,Pt),e);break}Mn(t,Me,Pt);break;case 4:if(en(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jx(r/1960))-r,10<r){t.timeoutHandle=Ec(Mn.bind(null,t,Me,Pt),r);break}Mn(t,Me,Pt);break;case 5:Mn(t,Me,Pt);break;default:throw Error(w(329))}}}return We(t,ae()),t.callbackNode===n?W0.bind(null,t):null}function Bc(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&(Hn(t,e).flags|=256),t=Go(t,e),t!==2&&(e=Me,Me=n,e!==null&&Vc(e)),t}function Vc(t){Me===null?Me=t:Me.push.apply(Me,t)}function Wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function en(t,e){for(e&=~ed,e&=~Oa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ht(e),r=1<<n;t[n]=-1,e&=~r}}function gh(t){if(j&6)throw Error(w(327));Rr();var e=To(t,0);if(!(e&1))return We(t,ae()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=pc(t);r!==0&&(e=r,n=Bc(t,r))}if(n===1)throw n=is,Hn(t,0),en(t,e),We(t,ae()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,Me,Pt),We(t,ae()),null}function nd(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&($r=ae()+500,Na&&Rn())}}function Xn(t){an!==null&&an.tag===0&&!(j&6)&&Rr();var e=j;j|=1;var n=Ze.transition,r=B;try{if(Ze.transition=null,B=1,t)return t()}finally{B=r,Ze.transition=n,j=e,!(j&6)&&Rn()}}function rd(){Ve=Sr.current,Y(Sr)}function Hn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_x(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Br(),Y(ze),Y(Te),Gu();break;case 5:Hu(r);break;case 4:Br();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:Wu(r.type._context);break;case 22:case 23:rd()}n=n.return}if(_e=t,le=t=mn(t.current,null),xe=Ve=e,de=0,is=null,ed=Oa=Yn=0,Me=Di=null,jn!==null){for(e=0;e<jn.length;e++)if(n=jn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jn=null}return t}function B0(t,e){do{var n=le;try{if(ju(),co.current=Bo,Wo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wo=!1}if(qn=0,pe=ce=ee=null,Ai=!1,ts=0,Zu.current=null,n===null||n.return===null){de=1,is=e,le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=rh(o);if(m!==null){m.flags&=-257,ih(m,o,a,s,e),m.mode&1&&nh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){nh(s,c,e),id();break e}l=Error(w(426))}}else if(J&&a.mode&1){var S=rh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ih(S,o,a,s,e),Uu(Vr(l,a));break e}}s=l=Vr(l,a),de!==4&&(de=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=k0(s,l,e);Yf(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hn===null||!hn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=I0(s,a,e);Yf(s,x);break e}}s=s.return}while(s!==null)}H0(n)}catch(C){e=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function V0(){var t=Vo.current;return Vo.current=Bo,t===null?Bo:t}function id(){(de===0||de===3||de===2)&&(de=4),_e===null||!(Yn&268435455)&&!(Oa&268435455)||en(_e,xe)}function Go(t,e){var n=j;j|=2;var r=V0();(_e!==t||xe!==e)&&(Pt=null,Hn(t,e));do try{Bx();break}catch(i){B0(t,i)}while(!0);if(ju(),j=n,Vo.current=r,le!==null)throw Error(w(261));return _e=null,xe=0,de}function Bx(){for(;le!==null;)$0(le)}function Vx(){for(;le!==null&&!pv();)$0(le)}function $0(t){var e=K0(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?H0(t):le=e,Zu.current=null}function H0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mx(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,le=null;return}}else if(n=Lx(n,e,Ve),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);de===0&&(de=5)}function Mn(t,e,n){var r=B,i=Ze.transition;try{Ze.transition=null,B=1,$x(t,e,n,r)}finally{Ze.transition=i,B=r}return null}function $x(t,e,n,r){do Rr();while(an!==null);if(j&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cv(t,s),t===_e&&(le=_e=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Q0(bo,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ze.transition,Ze.transition=null;var o=B;B=1;var a=j;j|=4,Zu.current=null,Ux(t,n),z0(n,t),ux(xc),No=!!vc,xc=vc=null,t.current=n,zx(n),mv(),j=a,B=o,Ze.transition=s}else t.current=n;if(Js&&(Js=!1,an=t,Ho=i),s=t.pendingLanes,s===0&&(hn=null),yv(n.stateNode),We(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,t=jc,jc=null,t;return Ho&1&&t.tag!==0&&Rr(),s=t.pendingLanes,s&1?t===Wc?Li++:(Li=0,Wc=t):Li=0,Rn(),null}function Rr(){if(an!==null){var t=km(Ho),e=Ze.transition,n=B;try{if(Ze.transition=null,B=16>t?16:t,an===null)var r=!1;else{if(t=an,an=null,Ho=0,j&6)throw Error(w(331));var i=j;for(j|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(k=c;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Oi(8,d,s)}var u=d.child;if(u!==null)u.return=d,k=u;else for(;k!==null;){d=k;var f=d.sibling,m=d.return;if(M0(d),d===c){k=null;break}if(f!==null){f.return=m,k=f;break}k=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var h=t.current;for(k=h;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=h;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Aa(9,a)}}catch(C){ne(a,a.return,C)}if(a===o){k=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,k=x;break e}k=a.return}}if(j=i,Rn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ca,t)}catch{}r=!0}return r}finally{B=n,Ze.transition=e}}return!1}function _h(t,e,n){e=Vr(n,e),e=k0(t,e,1),t=fn(t,e,1),e=Ae(),t!==null&&(xs(t,1,e),We(t,e))}function ne(t,e,n){if(t.tag===3)_h(t,t,n);else for(;e!==null;){if(e.tag===3){_h(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){t=Vr(n,t),t=I0(e,t,1),e=fn(e,t,1),t=Ae(),e!==null&&(xs(e,1,t),We(e,t));break}}e=e.return}}function Hx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(xe&n)===n&&(de===4||de===3&&(xe&130023424)===xe&&500>ae()-td?Hn(t,0):ed|=n),We(t,e)}function G0(t,e){e===0&&(t.mode&1?(e=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):e=1);var n=Ae();t=Wt(t,e),t!==null&&(xs(t,e,n),We(t,n))}function Gx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G0(t,n)}function Kx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),G0(t,n)}var K0;K0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,Dx(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,J&&e.flags&1048576&&Xm(e,Mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fo(t,e),t=e.pendingProps;var i=zr(e,Te.current);Pr(e,n),i=Qu(null,e,r,t,i,n);var s=qu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)?(s=!0,Do(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(e),i.updater=Ra,e.stateNode=i,i._reactInternals=e,Nc(e,r,t,n),e=Ac(null,e,r,!0,s,n)):(e.tag=0,J&&s&&Mu(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qx(r),t=st(r,t),i){case 0:e=Rc(null,e,r,t,n);break e;case 1:e=ah(null,e,r,t,n);break e;case 11:e=sh(null,e,r,t,n);break e;case 14:e=oh(null,e,r,st(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Rc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),ah(t,e,r,i,n);case 3:e:{if(P0(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,r0(t,e),zo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vr(Error(w(423)),e),e=lh(t,e,r,n,i);break e}else if(r!==i){i=Vr(Error(w(424)),e),e=lh(t,e,r,n,i);break e}else for($e=dn(e.stateNode.containerInfo.firstChild),He=e,J=!0,at=null,n=t0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){e=Bt(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return i0(e),t===null&&Ic(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wc(r,i)?o=null:s!==null&&wc(r,s)&&(e.flags|=32),N0(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&Ic(e),null;case 13:return R0(t,e,n);case 4:return $u(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wr(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),sh(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Fo,r._currentValue),r._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!ze.current){e=Bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ft(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=et(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),oh(t,e,r,i,n);case 15:return b0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),fo(t,e),e.tag=1,je(r)?(t=!0,Do(e)):t=!1,Pr(e,n),C0(e,r,i),Nc(e,r,i,n),Ac(null,e,r,!0,t,n);case 19:return A0(t,e,n);case 22:return T0(t,e,n)}throw Error(w(156,e.tag))};function Q0(t,e){return wm(t,e)}function Qx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new Qx(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cu)return 11;if(t===ku)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return Gn(n.children,i,s,e);case Su:o=8,i|=8;break;case Zl:return t=Xe(12,n,e,i|2),t.elementType=Zl,t.lanes=s,t;case ec:return t=Xe(13,n,e,i),t.elementType=ec,t.lanes=s,t;case tc:return t=Xe(19,n,e,i),t.elementType=tc,t.lanes=s,t;case im:return Da(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nm:o=10;break e;case rm:o=9;break e;case Cu:o=11;break e;case ku:o=14;break e;case Xt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Da(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=im,t.lanes=n,t.stateNode={isHidden:!1},t}function Tl(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Nl(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,a,l){return t=new Yx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(s),t}function Xx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return Cn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(je(n))return qm(t,n,e)}return e}function Y0(t,e,n,r,i,s,o,a,l){return t=od(n,r,!0,t,i,s,o,a,l),t.context=q0(null),n=t.current,r=Ae(),i=pn(n),s=Ft(r,i),s.callback=e??null,fn(n,s,i),t.current.lanes=i,xs(t,i,r),We(t,r),t}function La(t,e,n,r){var i=e.current,s=Ae(),o=pn(i);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ft(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fn(i,e,o),t!==null&&(pt(t,i,o,s),lo(t,i,o)),o}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ad(t,e){yh(t,e),(t=t.alternate)&&yh(t,e)}function Jx(){return null}var X0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}Ma.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));La(t,e,null,null)};Ma.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xn(function(){La(null,t,null,null)}),e[jt]=null}};function Ma(t){this._internalRoot=t}Ma.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zt.length&&e!==0&&e<Zt[n].priority;n++);Zt.splice(n,0,t),n===0&&Pm(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vh(){}function Zx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ko(o);s.call(c)}}var o=Y0(e,r,t,0,null,!1,!1,"",vh);return t._reactRootContainer=o,t[jt]=o.current,Yi(t.nodeType===8?t.parentNode:t),Xn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ko(l);a.call(c)}}var l=od(t,0,!1,null,null,!1,!1,"",vh);return t._reactRootContainer=l,t[jt]=l.current,Yi(t.nodeType===8?t.parentNode:t),Xn(function(){La(e,l,n,r)}),l}function Ua(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ko(o);a.call(l)}}La(e,o,t,i)}else o=Zx(n,e,t,i,r);return Ko(o)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ki(e.pendingLanes);n!==0&&(Tu(e,n|1),We(e,ae()),!(j&6)&&($r=ae()+500,Rn()))}break;case 13:Xn(function(){var r=Wt(t,1);if(r!==null){var i=Ae();pt(r,t,1,i)}}),ad(t,1)}};Nu=function(t){if(t.tag===13){var e=Wt(t,134217728);if(e!==null){var n=Ae();pt(e,t,134217728,n)}ad(t,134217728)}};bm=function(t){if(t.tag===13){var e=pn(t),n=Wt(t,e);if(n!==null){var r=Ae();pt(n,t,e,r)}ad(t,e)}};Tm=function(){return B};Nm=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};dc=function(t,e,n){switch(e){case"input":if(ic(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ta(r);if(!i)throw Error(w(90));om(r),ic(r,i)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};mm=nd;gm=Xn;var e1={usingClientEntryPoint:!1,Events:[Es,_r,Ta,hm,pm,nd]},yi={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{Ca=Zs.inject(t1),Et=Zs}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(w(200));return Xx(t,e,null,n)};Ke.createRoot=function(t,e){if(!cd(t))throw Error(w(299));var n=!1,r="",i=X0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[jt]=e.current,Yi(t.nodeType===8?t.parentNode:t),new ld(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Xn(t)};Ke.hydrate=function(t,e,n){if(!Fa(e))throw Error(w(200));return Ua(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!cd(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=X0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y0(e,null,t,1,n??null,i,!1,s,o),t[jt]=e.current,Yi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ma(e)};Ke.render=function(t,e,n){if(!Fa(e))throw Error(w(200));return Ua(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Fa(t))throw Error(w(40));return t._reactRootContainer?(Xn(function(){Ua(null,null,t,!1,function(){t._reactRootContainer=null,t[jt]=null})}),!0):!1};Ke.unstable_batchedUpdates=nd;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fa(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Ua(t,e,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(t){console.error(t)}}J0(),Jp.exports=Ke;var n1=Jp.exports,Z0,xh=n1;Z0=xh.createRoot,xh.hydrateRoot;const r1="modulepreload",i1=function(t){return"/clinica-app/"+t},wh={},nt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=i1(l),l in wh)return;wh[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":r1,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Eh=t=>{let e;const n=new Set,r=(c,d)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const f=e;e=d??(typeof u!="object"||u===null)?u:Object.assign({},e,u),n.forEach(m=>m(e,f))}},i=()=>e,a={setState:r,getState:i,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(r,i,a);return a},s1=t=>t?Eh(t):Eh,o1=t=>t;function a1(t,e=o1){const n=Fs.useSyncExternalStore(t.subscribe,Fs.useCallback(()=>e(t.getState()),[t,e]),Fs.useCallback(()=>e(t.getInitialState()),[t,e]));return Fs.useDebugValue(n),n}const Sh=t=>{const e=s1(t),n=r=>a1(e,r);return Object.assign(n,e),n},_t=t=>t?Sh(t):Sh;function l1(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const $c=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return $c(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return $c(r)(n)}}}},c1=(t,e)=>(n,r,i)=>{let s={storage:l1(()=>window.localStorage),partialize:S=>S,version:0,merge:(S,p)=>({...p,...S}),...e},o=!1,a=0;const l=new Set,c=new Set;let d=s.storage;if(!d)return t((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...S)},r,i);const u=()=>{const S=s.partialize({...r()});return d.setItem(s.name,{state:S,version:s.version})},f=i.setState;i.setState=(S,p)=>(f(S,p),u());const m=t((...S)=>(n(...S),u()),r,i);i.getInitialState=()=>m;let _;const y=()=>{var S,p;if(!d)return;const h=++a;o=!1,l.forEach(x=>{var C;return x((C=r())!=null?C:m)});const g=((p=s.onRehydrateStorage)==null?void 0:p.call(s,(S=r())!=null?S:m))||void 0;return $c(d.getItem.bind(d))(s.name).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==s.version){if(s.migrate){const C=s.migrate(x.state,x.version);return C instanceof Promise?C.then(b=>[!0,b]):[!0,C]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,x.state];return[!1,void 0]}).then(x=>{var C;if(h!==a)return;const[b,T]=x;if(_=s.merge(T,(C=r())!=null?C:m),n(_,!0),b)return u()}).then(()=>{h===a&&(g==null||g(_,void 0),_=r(),o=!0,c.forEach(x=>x(_)))}).catch(x=>{h===a&&(g==null||g(void 0,x))})};return i.persist={setOptions:S=>{s={...s,...S},S.storage&&(d=S.storage)},clearStorage:()=>{d==null||d.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:S=>(l.add(S),()=>{l.delete(S)}),onFinishHydration:S=>(c.add(S),()=>{c.delete(S)})},s.skipHydration||y(),_||m},bt=c1,Pe=_t()(bt(t=>({theme:"light",activePage:"dashboard",sidebarCollapsed:!1,selectedPacienteId:null,selectedProfissionalId:null,setActivePage:e=>t({activePage:e}),toggleTheme:()=>t(e=>({theme:e.theme==="dark"?"light":"dark"})),toggleSidebar:()=>t(e=>({sidebarCollapsed:!e.sidebarCollapsed})),setSelectedPaciente:e=>t({selectedPacienteId:e}),setSelectedProfissional:e=>t({selectedProfissionalId:e}),navigateToPaciente:(e,n)=>t({selectedPacienteId:e,activePage:n})}),{name:"clinica-app",partialize:t=>({theme:t.theme,sidebarCollapsed:t.sidebarCollapsed})}));function be(){return Math.random().toString(36).substring(2,11)+Date.now().toString(36)}function wb(t){return t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function Eb(t){if(!t)return"";const[e,n,r]=t.split("-");return`${r}/${n}/${e}`}function u1(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function Sb(t){const e=t.replace(/\D/g,"").slice(0,11);return e.length<=3?e:e.length<=6?`${e.slice(0,3)}.${e.slice(3)}`:e.length<=9?`${e.slice(0,3)}.${e.slice(3,6)}.${e.slice(6)}`:`${e.slice(0,3)}.${e.slice(3,6)}.${e.slice(6,9)}-${e.slice(9)}`}function Cb(t){const e=t.replace(/\D/g,"").slice(0,11);return e.length<=2?`(${e}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2)}`:`(${e.slice(0,2)}) ${e.slice(2,7)}-${e.slice(7)}`}function kb(t){const e=t.replace(/\D/g,"").slice(0,8);return e.length<=5?e:`${e.slice(0,5)}-${e.slice(5)}`}function Ch(){return u1(new Date)}function G(){return new Date().toISOString()}function Ib(t){if(!t)return"";const[e,n,r]=t.split("-").map(Number),i=new Date;let s=i.getFullYear()-e;const o=i.getMonth()+1;if((o<n||o===n&&i.getDate()<r)&&s--,s<1){const a=(i.getFullYear()-e)*12+o-n;return`${a} ${a===1?"mês":"meses"}`}return`${s} ${s===1?"ano":"anos"}`}function bb(t){if(!t)return"";const[e,n]=t.split(":").map(Number),r=new Date,i=new Date;i.setHours(e,n,0,0);const s=r.getTime()-i.getTime();if(s<0)return"";const o=Math.floor(s/6e4);return o<60?`há ${o}min`:`há ${Math.floor(o/60)}h${String(o%60).padStart(2,"0")}min`}function Pl(){const t=new Date;return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function Tb(t){return{agendado:"Agendado",confirmado:"Confirmado",em_atendimento:"Em Atendimento",atendido:"Atendido",presente:"Presente",finalizado:"Finalizado",cancelado:"Cancelado",faltou:"Faltou",pendente:"Pendente",pago:"Pago",parcial:"Parcial",aberta:"Em Aberto",vencida:"Vencida",aberto:"Aberto",fechado:"Fechado"}[t]||t}function Nb(t){return{agendado:"bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",confirmado:"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",em_atendimento:"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",atendido:"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",cancelado:"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",presente:"bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",finalizado:"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",faltou:"bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",pendente:"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",aberta:"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",vencida:"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",pago:"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",parcial:"bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"}[t]||"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"}const eg={},Pb=Object.freeze(Object.defineProperty({__proto__:null,default:eg},Symbol.toStringTag,{value:"Module"}));var Hc=null;function d1(t){try{return crypto.getRandomValues(new Uint8Array(t))}catch{}try{return eg.randomBytes(t)}catch{}if(!Hc)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Hc(t)}function f1(t){Hc=t}function ud(t,e){if(t=t||dd,typeof t!="number")throw Error("Illegal arguments: "+typeof t+", "+typeof e);t<4?t=4:t>31&&(t=31);var n=[];return n.push("$2b$"),t<10&&n.push("0"),n.push(t.toString()),n.push("$"),n.push(Qo(d1(ss),ss)),n.join("")}function tg(t,e,n){if(typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),typeof t>"u")t=dd;else if(typeof t!="number")throw Error("illegal arguments: "+typeof t);function r(i){ut(function(){try{i(null,ud(t))}catch(s){i(s)}})}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);r(n)}else return new Promise(function(i,s){r(function(o,a){if(o){s(o);return}i(a)})})}function ng(t,e){if(typeof e>"u"&&(e=dd),typeof e=="number"&&(e=ud(e)),typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return Gc(t,e)}function rg(t,e,n,r){function i(s){typeof t=="string"&&typeof e=="number"?tg(e,function(o,a){Gc(t,a,s,r)}):typeof t=="string"&&typeof e=="string"?Gc(t,e,s,r):ut(s.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)))}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(s,o){i(function(a,l){if(a){o(a);return}s(l)})})}function ig(t,e){for(var n=t.length^e.length,r=0;r<t.length;++r)n|=t.charCodeAt(r)^e.charCodeAt(r);return n===0}function h1(t,e){if(typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return e.length!==60?!1:ig(ng(t,e.substring(0,e.length-31)),e)}function p1(t,e,n,r){function i(s){if(typeof t!="string"||typeof e!="string"){ut(s.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)));return}if(e.length!==60){ut(s.bind(this,null,!1));return}rg(t,e.substring(0,29),function(o,a){o?s(o):s(null,ig(a,e))},r)}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(s,o){i(function(a,l){if(a){o(a);return}s(l)})})}function m1(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return parseInt(t.split("$")[2],10)}function g1(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);if(t.length!==60)throw Error("Illegal hash length: "+t.length+" != 60");return t.substring(0,29)}function _1(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return sg(t)>72}var ut=typeof setImmediate=="function"?setImmediate:typeof scheduler=="object"&&typeof scheduler.postTask=="function"?scheduler.postTask.bind(scheduler):setTimeout;function sg(t){for(var e=0,n=0,r=0;r<t.length;++r)n=t.charCodeAt(r),n<128?e+=1:n<2048?e+=2:(n&64512)===55296&&(t.charCodeAt(r+1)&64512)===56320?(++r,e+=4):e+=3;return e}function y1(t){for(var e=0,n,r,i=new Array(sg(t)),s=0,o=t.length;s<o;++s)n=t.charCodeAt(s),n<128?i[e++]=n:n<2048?(i[e++]=n>>6|192,i[e++]=n&63|128):(n&64512)===55296&&((r=t.charCodeAt(s+1))&64512)===56320?(n=65536+((n&1023)<<10)+(r&1023),++s,i[e++]=n>>18|240,i[e++]=n>>12&63|128,i[e++]=n>>6&63|128,i[e++]=n&63|128):(i[e++]=n>>12|224,i[e++]=n>>6&63|128,i[e++]=n&63|128);return i}var cr="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),qt=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function Qo(t,e){var n=0,r=[],i,s;if(e<=0||e>t.length)throw Error("Illegal len: "+e);for(;n<e;){if(i=t[n++]&255,r.push(cr[i>>2&63]),i=(i&3)<<4,n>=e){r.push(cr[i&63]);break}if(s=t[n++]&255,i|=s>>4&15,r.push(cr[i&63]),i=(s&15)<<2,n>=e){r.push(cr[i&63]);break}s=t[n++]&255,i|=s>>6&3,r.push(cr[i&63]),r.push(cr[s&63])}return r.join("")}function og(t,e){var n=0,r=t.length,i=0,s=[],o,a,l,c,d,u;if(e<=0)throw Error("Illegal len: "+e);for(;n<r-1&&i<e&&(u=t.charCodeAt(n++),o=u<qt.length?qt[u]:-1,u=t.charCodeAt(n++),a=u<qt.length?qt[u]:-1,!(o==-1||a==-1||(d=o<<2>>>0,d|=(a&48)>>4,s.push(String.fromCharCode(d)),++i>=e||n>=r)||(u=t.charCodeAt(n++),l=u<qt.length?qt[u]:-1,l==-1)||(d=(a&15)<<4>>>0,d|=(l&60)>>2,s.push(String.fromCharCode(d)),++i>=e||n>=r)));)u=t.charCodeAt(n++),c=u<qt.length?qt[u]:-1,d=(l&3)<<6>>>0,d|=c,s.push(String.fromCharCode(d)),++i;var f=[];for(n=0;n<i;n++)f.push(s[n].charCodeAt(0));return f}var ss=16,dd=10,v1=16,x1=100,kh=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Ih=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],ag=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function os(t,e,n,r){var i,s=t[e],o=t[e+1];return s^=n[0],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[1],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[2],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[3],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[4],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[5],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[6],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[7],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[8],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[9],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[10],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[11],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[12],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[13],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[14],i=r[s>>>24],i+=r[256|s>>16&255],i^=r[512|s>>8&255],i+=r[768|s&255],o^=i^n[15],i=r[o>>>24],i+=r[256|o>>16&255],i^=r[512|o>>8&255],i+=r[768|o&255],s^=i^n[16],t[e]=o^n[v1+1],t[e+1]=s,t}function dr(t,e){for(var n=0,r=0;n<4;++n)r=r<<8|t[e]&255,e=(e+1)%t.length;return{key:r,offp:e}}function bh(t,e,n){for(var r=0,i=[0,0],s=e.length,o=n.length,a,l=0;l<s;l++)a=dr(t,r),r=a.offp,e[l]=e[l]^a.key;for(l=0;l<s;l+=2)i=os(i,0,e,n),e[l]=i[0],e[l+1]=i[1];for(l=0;l<o;l+=2)i=os(i,0,e,n),n[l]=i[0],n[l+1]=i[1]}function w1(t,e,n,r){for(var i=0,s=[0,0],o=n.length,a=r.length,l,c=0;c<o;c++)l=dr(e,i),i=l.offp,n[c]=n[c]^l.key;for(i=0,c=0;c<o;c+=2)l=dr(t,i),i=l.offp,s[0]^=l.key,l=dr(t,i),i=l.offp,s[1]^=l.key,s=os(s,0,n,r),n[c]=s[0],n[c+1]=s[1];for(c=0;c<a;c+=2)l=dr(t,i),i=l.offp,s[0]^=l.key,l=dr(t,i),i=l.offp,s[1]^=l.key,s=os(s,0,n,r),r[c]=s[0],r[c+1]=s[1]}function Th(t,e,n,r,i){var s=ag.slice(),o=s.length,a;if(n<4||n>31)if(a=Error("Illegal number of rounds (4-31): "+n),r){ut(r.bind(this,a));return}else throw a;if(e.length!==ss)if(a=Error("Illegal salt length: "+e.length+" != "+ss),r){ut(r.bind(this,a));return}else throw a;n=1<<n>>>0;var l,c,d=0,u;typeof Int32Array=="function"?(l=new Int32Array(kh),c=new Int32Array(Ih)):(l=kh.slice(),c=Ih.slice()),w1(e,t,l,c);function f(){if(i&&i(d/n),d<n)for(var _=Date.now();d<n&&(d=d+1,bh(t,l,c),bh(e,l,c),!(Date.now()-_>x1)););else{for(d=0;d<64;d++)for(u=0;u<o>>1;u++)os(s,u<<1,l,c);var y=[];for(d=0;d<o;d++)y.push((s[d]>>24&255)>>>0),y.push((s[d]>>16&255)>>>0),y.push((s[d]>>8&255)>>>0),y.push((s[d]&255)>>>0);if(r){r(null,y);return}else return y}r&&ut(f)}if(typeof r<"u")f();else for(var m;;)if(typeof(m=f())<"u")return m||[]}function Gc(t,e,n,r){var i;if(typeof t!="string"||typeof e!="string")if(i=Error("Invalid string / salt: Not a string"),n){ut(n.bind(this,i));return}else throw i;var s,o;if(e.charAt(0)!=="$"||e.charAt(1)!=="2")if(i=Error("Invalid salt version: "+e.substring(0,2)),n){ut(n.bind(this,i));return}else throw i;if(e.charAt(2)==="$")s="\0",o=3;else{if(s=e.charAt(2),s!=="a"&&s!=="b"&&s!=="y"||e.charAt(3)!=="$")if(i=Error("Invalid salt revision: "+e.substring(2,4)),n){ut(n.bind(this,i));return}else throw i;o=4}if(e.charAt(o+2)>"$")if(i=Error("Missing salt rounds"),n){ut(n.bind(this,i));return}else throw i;var a=parseInt(e.substring(o,o+1),10)*10,l=parseInt(e.substring(o+1,o+2),10),c=a+l,d=e.substring(o+3,o+25);t+=s>="a"?"\0":"";var u=y1(t),f=og(d,ss);function m(_){var y=[];return y.push("$2"),s>="a"&&y.push(s),y.push("$"),c<10&&y.push("0"),y.push(c.toString()),y.push("$"),y.push(Qo(f,f.length)),y.push(Qo(_,ag.length*4-1)),y.join("")}if(typeof n>"u")return m(Th(u,f,c));Th(u,f,c,function(_,y){_?n(_,null):n(null,m(y))},r)}function E1(t,e){return Qo(t,e)}function S1(t,e){return og(t,e)}const lg={setRandomFallback:f1,genSaltSync:ud,genSalt:tg,hashSync:ng,hash:rg,compareSync:h1,compare:p1,getRounds:m1,getSalt:g1,truncates:_1,encodeBase64:E1,decodeBase64:S1},C1=10;async function Rl(t){return lg.hash(t,C1)}async function k1(t,e){return lg.compare(t,e)}const I1=12*60*60*1e3,Ar=_t()(bt((t,e)=>({usuarios:[],currentSession:null,get currentUser(){return e().currentSession},isSessionExpired:()=>{const n=e().currentSession;return n?new Date(n.expiraEm).getTime()<Date.now():!0},login:async(n,r)=>{await e()._ensureAdmin();const i=e().usuarios.find(l=>l.username.toLowerCase()===n.toLowerCase()&&l.ativo);if(!i)return{ok:!1,error:"Usuário ou senha inválidos"};if(!await k1(r,i.passwordHash))return{ok:!1,error:"Usuário ou senha inválidos"};const o=G(),a={userId:i.id,username:i.username,nomeCompleto:i.nomeCompleto,perfil:i.perfil,loginEm:o,expiraEm:new Date(Date.now()+I1).toISOString()};return t({currentSession:a,usuarios:e().usuarios.map(l=>l.id===i.id?{...l,ultimoLogin:o}:l)}),{ok:!0}},logout:()=>t({currentSession:null}),addUsuario:async({username:n,password:r,nomeCompleto:i,perfil:s})=>{if(e().usuarios.some(d=>d.username.toLowerCase()===n.toLowerCase()))return{ok:!1,error:"Nome de usuário já existe"};if(r.length<4)return{ok:!1,error:"Senha deve ter no mínimo 4 caracteres"};const a=await Rl(r),l=G(),c={id:be(),username:n,passwordHash:a,nomeCompleto:i,perfil:s,ativo:!0,criadoEm:l,atualizadoEm:l,ultimoLogin:null};return t(d=>({usuarios:[...d.usuarios,c]})),{ok:!0}},updateUsuario:(n,r)=>t(i=>({usuarios:i.usuarios.map(s=>s.id===n?{...s,...r,atualizadoEm:G()}:s)})),resetPassword:async(n,r)=>{const i=await Rl(r);t(s=>({usuarios:s.usuarios.map(o=>o.id===n?{...o,passwordHash:i,atualizadoEm:G()}:o)}))},_ensureAdmin:async()=>{if(e().usuarios.length===0){const n=await Rl("admin123"),r=G();t({usuarios:[{id:be(),username:"admin",passwordHash:n,nomeCompleto:"Administrador",perfil:"admin",ativo:!0,criadoEm:r,atualizadoEm:r,ultimoLogin:null}]})}}}),{name:"clinica-auth",partialize:t=>({usuarios:t.usuarios,currentSession:t.currentSession})}));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cg=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>L.createElement("svg",{ref:l,...T1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:cg("lucide",i),...a},[...o.map(([c,d])=>L.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(t,e)=>{const n=L.forwardRef(({className:r,...i},s)=>L.createElement(N1,{ref:s,iconNode:e,className:cg(`lucide-${b1(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=X("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=X("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=X("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=X("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=X("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=X("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=X("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=X("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=X("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=X("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=X("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=X("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=X("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=X("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=X("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=X("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=X("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=X("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=X("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=X("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$1=()=>{};var Nh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+yg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},H1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[d],n[u],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):H1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new G1;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(t){const e=vg(t);return hd.encodeByteArray(e,!0)},Yo=function(t){return xg(t).replace(/\./g,"")},Xo=function(t){try{return hd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){return wg(void 0,t)}function wg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Q1(n)||(t[n]=wg(t[n],e[n]));return t}function Q1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=()=>q1().__FIREBASE_DEFAULTS__,X1=()=>{if(typeof process>"u"||typeof Nh>"u")return;const t=Nh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},J1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xo(t[1]);return e&&JSON.parse(e)},pd=()=>{try{return $1()||Y1()||X1()||J1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eg=t=>{var e,n;return(n=(e=pd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Z1=t=>{const e=Eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sg=()=>{var t;return(t=pd())==null?void 0:t.config},Cg=t=>{var e;return(e=pd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rw(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iw(){return yg.NODE_ADMIN===!0}function sw(){try{return typeof indexedDB=="object"}catch{return!1}}function ow(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aw,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new An(i,a,r)}}function lw(t,e){return t.replace(cw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=as(Xo(s[0])||""),n=as(Xo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},uw=function(t){const e=Ig(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dw=function(t){const e=Ig(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ph(s)&&Ph(o)){if(!Jn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ph(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function hw(t,e){const n=new pw(t,e);return n.subscribe.bind(n)}class pw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Al),i.error===void 0&&(i.error=Al),i.complete===void 0&&(i.complete=Al);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}function gd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ja=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bg(t){return(await fetch(t,{credentials:"include"})).ok}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new za;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vw(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yw(t){return t===Fn?void 0:t}function vw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const ww={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Ew=V.INFO,Sw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Cw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=Ew,this._logHandler=Cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const kw=(t,e)=>e.some(n=>t instanceof n);let Rh,Ah;function Iw(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bw(){return Ah||(Ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tg=new WeakMap,qc=new WeakMap,Ng=new WeakMap,Ol=new WeakMap,yd=new WeakMap;function Tw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tg.set(n,t)}).catch(()=>{}),yd.set(e,t),e}function Nw(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ng.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pw(t){Yc=t(Yc)}function Rw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dl(this),e,...n);return Ng.set(r,e.sort?e.sort():[e]),gn(r)}:bw().includes(t)?function(...e){return t.apply(Dl(this),e),gn(Tg.get(this))}:function(...e){return gn(t.apply(Dl(this),e))}}function Aw(t){return typeof t=="function"?Rw(t):(t instanceof IDBTransaction&&Nw(t),kw(t,Iw())?new Proxy(t,Yc):t)}function gn(t){if(t instanceof IDBRequest)return Tw(t);if(Ol.has(t))return Ol.get(t);const e=Aw(t);return e!==t&&(Ol.set(t,e),yd.set(e,t)),e}const Dl=t=>yd.get(t);function Ow(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gn(o.result),l.oldVersion,l.newVersion,gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dw=["get","getKey","getAll","getAllKeys","count"],Lw=["put","add","delete","clear"],Ll=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ll.set(e,s),s}Pw(t=>({...t,get:(e,n,r)=>Oh(e,n)||t.get(e,n,r),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",Dh="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new _d("@firebase/app"),Uw="@firebase/app-compat",zw="@firebase/analytics-compat",jw="@firebase/analytics",Ww="@firebase/app-check-compat",Bw="@firebase/app-check",Vw="@firebase/auth",$w="@firebase/auth-compat",Hw="@firebase/database",Gw="@firebase/data-connect",Kw="@firebase/database-compat",Qw="@firebase/functions",qw="@firebase/functions-compat",Yw="@firebase/installations",Xw="@firebase/installations-compat",Jw="@firebase/messaging",Zw="@firebase/messaging-compat",eE="@firebase/performance",tE="@firebase/performance-compat",nE="@firebase/remote-config",rE="@firebase/remote-config-compat",iE="@firebase/storage",sE="@firebase/storage-compat",oE="@firebase/firestore",aE="@firebase/ai",lE="@firebase/firestore-compat",cE="firebase",uE="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",dE={[Xc]:"fire-core",[Uw]:"fire-core-compat",[jw]:"fire-analytics",[zw]:"fire-analytics-compat",[Bw]:"fire-app-check",[Ww]:"fire-app-check-compat",[Vw]:"fire-auth",[$w]:"fire-auth-compat",[Hw]:"fire-rtdb",[Gw]:"fire-data-connect",[Kw]:"fire-rtdb-compat",[Qw]:"fire-fn",[qw]:"fire-fn-compat",[Yw]:"fire-iid",[Xw]:"fire-iid-compat",[Jw]:"fire-fcm",[Zw]:"fire-fcm-compat",[eE]:"fire-perf",[tE]:"fire-perf-compat",[nE]:"fire-rc",[rE]:"fire-rc-compat",[iE]:"fire-gcs",[sE]:"fire-gcs-compat",[oE]:"fire-fst",[lE]:"fire-fst-compat",[aE]:"fire-vertex","fire-js":"fire-js",[cE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map,fE=new Map,Zc=new Map;function Lh(t,e){try{t.container.addComponent(e)}catch(n){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(Zc.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of Zo.values())Lh(n,t);for(const n of fE.values())Lh(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Cs("app","Firebase",hE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=uE;function Pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Jc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=Sg()),!n)throw _n.create("no-options");const s=Zo.get(i);if(s){if(Jn(n,s.options)&&Jn(r,s.config))return s;throw _n.create("duplicate-app",{appName:i})}const o=new xw(i);for(const l of Zc.values())o.addComponent(l);const a=new pE(n,r,o);return Zo.set(i,a),a}function Rg(t=Jc){const e=Zo.get(t);if(!e&&t===Jc&&Sg())return Pg();if(!e)throw _n.create("no-app",{appName:t});return e}function yn(t,e,n){let r=dE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(o.join(" "));return}Gr(new Zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="firebase-heartbeat-database",gE=1,ls="firebase-heartbeat-store";let Ml=null;function Ag(){return Ml||(Ml=Ow(mE,gE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Ml}async function _E(t){try{const n=(await Ag()).transaction(ls),r=await n.objectStore(ls).get(Og(t));return await n.done,r}catch(e){if(e instanceof An)Vt.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(n.message)}}}async function Mh(t,e){try{const r=(await Ag()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,Og(t)),await r.done}catch(n){if(n instanceof An)Vt.warn(n.message);else{const r=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vt.warn(r.message)}}}function Og(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=1024,vE=30;class xE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>vE){const o=SE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fh(),{heartbeatsToSend:r,unsentEntries:i}=wE(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vt.warn(n),""}}}function Fh(){return new Date().toISOString().substring(0,10)}function wE(t,e=yE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sw()?ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _E(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uh(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}function SE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){Gr(new Zn("platform-logger",e=>new Mw(e),"PRIVATE")),Gr(new Zn("heartbeat",e=>new xE(e),"PRIVATE")),yn(Xc,Dh,t),yn(Xc,Dh,"esm2020"),yn("fire-js","")}CE("");var kE="firebase",IE="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(kE,IE,"app");var zh={};const jh="@firebase/database",Wh="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg="";function bE(t){Dg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new TE(e)}}catch{}return new NE},Bn=Lg("localStorage"),PE=Lg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new _d("@firebase/database"),RE=function(){let t=1;return function(){return t++}}(),Mg=function(t){const e=gw(t),n=new fw;n.update(e);const r=n.digest();return hd.encodeByteArray(r)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Is.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let Mi=null,Bh=!0;const AE=function(t,e){E(!0,"Can't turn on custom loggers persistently."),Or.logLevel=V.VERBOSE,Mi=Or.log.bind(Or)},ve=function(...t){if(Bh===!0&&(Bh=!1,Mi===null&&PE.get("logging_enabled")===!0&&AE()),Mi){const e=Is.apply(null,t);Mi(e)}},bs=function(t){return function(...e){ve(t,...e)}},eu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);Or.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw Or.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Is(...t);Or.warn(e)},OE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},DE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kr="[MIN_NAME]",er="[MAX_NAME]",or=function(t,e){if(t===e)return 0;if(t===Kr||e===er)return-1;if(e===Kr||t===er)return 1;{const n=Vh(t),r=Vh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LE=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},wd=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ue(e[r]),n+=":",n+=wd(t[e[r]]);return n+="}",n},Fg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ee(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ug=function(t){E(!xd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},ME=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const zE=new RegExp("^-?(0*)\\d{1,10}$"),jE=-2147483648,WE=2147483647,Vh=function(t){if(zE.test(t)){const e=Number(t);if(e>=jE&&e<=WE)return e}return null},ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},BE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,lt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class go{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}go.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="5",zg="v",jg="s",Wg="r",Bg="f",Vg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$g="ls",Hg="p",tu="ac",Gg="websocket",Kg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qg(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Gg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HE(t)&&(n.ns=t.namespace);const i=[];return Ee(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return K1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={},Ul={};function Sd(t){const e=t.toString();return Fl[e]||(Fl[e]=new GE),Fl[e]}function KE(t,e){const n=t.toString();return Ul[n]||(Ul[n]=e()),Ul[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="start",qE="close",YE="pLPCommand",XE="pRTLPCB",Yg="id",Xg="pw",Jg="ser",JE="cb",ZE="seg",eS="ts",tS="d",nS="dframe",Zg=1870,e_=30,rS=Zg-e_,iS=25e3,sS=3e4;class Cr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=Sd(n),this.urlFn=l=>(this.appCheckToken&&(l[tu]=this.appCheckToken),qg(n,Kg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sS)),DE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cd((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$h)this.id=a,this.password=l;else if(o===qE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$h]="t",r[Jg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zg]=Ed,this.transportSessionId&&(r[jg]=this.transportSessionId),this.lastSessionId&&(r[$g]=this.lastSessionId),this.applicationId&&(r[Hg]=this.applicationId),this.appCheckToken&&(r[tu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vg.test(location.hostname)&&(r[Wg]=Bg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ME()&&!FE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xg(n),i=Fg(r,rS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nS]="t",r[Yg]=e,r[Xg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=RE(),window[YE+this.uniqueCallbackIdentifier]=e,window[XE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ve("frame writing exception"),a.stack&&ve(a.stack),ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yg]=this.myID,e[Xg]=this.myPW,e[Jg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+e_+r.length<=Zg;){const o=this.pendingSegs.shift();r=r+"&"+ZE+i+"="+o.seg+"&"+eS+i+"="+o.ts+"&"+tS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=16384,aS=45e3;let ea=null;typeof MozWebSocket<"u"?ea=MozWebSocket:typeof WebSocket<"u"&&(ea=WebSocket);class ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=Sd(n),this.connURL=ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[zg]=Ed,typeof location<"u"&&location.hostname&&Vg.test(location.hostname)&&(o[Wg]=Bg),n&&(o[jg]=n),r&&(o[$g]=r),i&&(o[tu]=i),s&&(o[Hg]=s),qg(e,Gg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;iw(),this.mySock=new ea(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ea!==null&&!ct.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=as(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Fg(n,oS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static get ALL_TRANSPORTS(){return[Cr,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ct&&ct.isAvailable();let r=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ct];else{const i=this.transports_=[];for(const s of cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=6e4,cS=5e3,uS=10*1024,dS=100*1024,zl="t",Hh="d",fS="s",Gh="r",hS="e",Kh="o",Qh="a",qh="n",Yh="p",pS="h";class mS{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zl in e){const n=e[zl];n===Qh?this.upgradeIfSecondaryHealthy_():n===Gh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(zl,e);if(Hh in e){const r=e[Hh];if(n===pS){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fS?this.onConnectionShutdown_(r):n===Gh?this.onReset_(r):n===hS?eu("Server Error: "+r):n===Kh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):eu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ed!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends n_{static getInstance(){return new ta}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=32,Jh=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new $("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function kd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function us(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function r_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Re(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _S(t,e){const n=us(t,0),r=us(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=or(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Id(t,e){if(kn(t)!==kn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Je(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(kn(t)>kn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class yS{constructor(e,n){this.errorPrefix_=n,this.parts_=us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ja(this.parts_[r]);i_(this)}}function vS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ja(e),i_(t)}function xS(t){const e=t.parts_.pop();t.byteLength_-=ja(e),t.parts_.length>0&&(t.byteLength_-=1)}function i_(t){if(t.byteLength_>Jh)throw new Error(t.errorPrefix_+"has a key path longer than "+Jh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xh+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends n_{static getInstance(){return new bd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=1e3,wS=60*5*1e3,Zh=30*1e3,ES=1.3,SS=3e4,CS="server_kill",ep=3;class Ut extends t_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xi,this.maxReconnectDelay_=wS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ta.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ue(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new za,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const r=Hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):eu("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SS&&(this.reconnectDelay_=xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ES)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new mS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Be(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(CS)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Be(u),l())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qc(this.interruptReasons_)&&(this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>wd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ep&&(this.reconnectDelay_=Zh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ep&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dg.replace(/\./g,"-")]=1,md()?e["framework.cordova"]=1:kg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ta.getInstance().currentlyOnline();return Qc(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new D(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new D(Kr,e),i=new D(Kr,n);return this.compare(r,i)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;class s_ extends Wa{static get __EMPTY_NODE(){return eo}static set __EMPTY_NODE(e){eo=e}compare(e,n){return or(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(er,eo)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,eo)}toString(){return".key"}}const Dr=new s_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class kS{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new to(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new to(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new kS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){return or(t.name,e.name)}function Td(t,e){return or(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;function bS(t){nu=t}const o_=function(t){return typeof t=="number"?"number:"+Ug(t):"string:"+t},a_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else E(t===nu||t.isEmpty(),"priority of unexpected type.");E(t===nu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp;class he{static set __childrenNodeConstructor(e){tp=e}static get __childrenNodeConstructor(){return tp}constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),a_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||kn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+o_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ug(this.value_):e+=this.value_,this.lazyHash_=Mg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l_,c_;function TS(t){l_=t}function NS(t){c_=t}class PS extends Wa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?or(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(er,new he("[PRIORITY-POST]",c_))}makePost(e,n){const r=l_(e);return new D(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new PS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=Math.log(2);class AS{constructor(e){const n=s=>parseInt(Math.log(s)/RS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const na=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new me(f,u.node,me.BLACK,null,null);{const m=parseInt(d/2,10)+l,_=i(l,m),y=i(m+1,c);return u=t[m],f=n?n(u):u,new me(f,u.node,me.BLACK,_,y)}},s=function(l){let c=null,d=null,u=t.length;const f=function(_,y){const S=u-_,p=u;u-=_;const h=i(S+1,p),g=t[S],x=n?n(g):g;m(new me(x,g.node,y,null,h))},m=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));y?f(S,me.BLACK):(f(S,me.BLACK),f(S,me.RED))}return d},o=new AS(t.length),a=s(o);return new Ue(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;const ur={};class Dt{static get Default(){return E(ur&&ie,"ChildrenNode.ts has not been loaded"),jl=jl||new Dt({".priority":ur},{".priority":ie}),jl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(D.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=na(r,e.getCompare()):a=ur;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Dt(d,c)}addToIndexes(e,n){const r=Jo(this.indexes_,(i,s)=>{const o=Hr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===ur)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),na(a,o.getCompare())}else return ur;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new Dt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jo(this.indexes_,i=>{if(i===ur)return i;{const s=n.get(e.name);return s?i.remove(new D(e.name,s)):i}});return new Dt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class P{static get EMPTY_NODE(){return wi||(wi=new P(new Ue(Td),null,Dt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&a_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wi:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new D(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wi:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{E(M(e)!==".priority"||kn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+o_(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Mg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new D(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OS extends P{constructor(){super(new Ue(Td),P.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ts=new OS;Object.defineProperties(D,{MIN:{value:new D(Kr,P.EMPTY_NODE)},MAX:{value:new D(er,Ts)}});s_.__EMPTY_NODE=P.EMPTY_NODE;he.__childrenNodeConstructor=P;bS(Ts);NS(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=!0;function ge(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ge(e))}if(!(t instanceof Array)&&DS){const n=[];let r=!1;if(Ee(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new D(o,l)))}}),n.length===0)return P.EMPTY_NODE;const s=na(n,IS,o=>o.name,Td);if(r){const o=na(n,ie.getCompare());return new P(s,ge(e),new Dt({".priority":o},{".priority":ie}))}else return new P(s,ge(e),Dt.Default)}else{let n=P.EMPTY_NODE;return Ee(t,(r,i)=>{if(Tt(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}TS(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS extends Wa{constructor(e){super(),this.indexPath_=e,E(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?or(e.name,n.name):s}makePost(e,n){const r=ge(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new D(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new D(er,e)}toString(){return us(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS extends Wa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?or(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const r=ge(e);return new D(n,r)}toString(){return".value"}}const FS=new MS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){return{type:"value",snapshotNode:t}}function Qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function US(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ds(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qr(n,r)):o.trackChildChange(fs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(ds(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fs(i,s,o))}else r.trackChildChange(Qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new Nd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new D(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,a)=>{s.matches(new D(o,a))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new D(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,m)=>u(m,f)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new D(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(fs(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ds(n,u));const y=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Qr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ds(c.name,c.node)),s.trackChildChange(Qr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Pd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jS(t){return t.loadsAllData()?new Nd(t.getIndex()):t.hasLimit()?new zS(t):new hs(t)}function np(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===FS?n="$value":t.index_===Dr?n="$key":(E(t.index_ instanceof LS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends t_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ra.getListenId_(e,r),a={};this.listens_[o]=a;const l=np(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Hr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=ra.getListenId_(e,n);delete this.listens_[r]}get(e){const n=np(e._queryParams),r=e._path.toString(),i=new za;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=as(a.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(){return{value:null,children:new Map}}function d_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,ia());const i=t.children.get(r);e=K(e),d_(i,e,n)}}function ru(t,e,n){t.value!==null?n(e,t.value):BS(t,(r,i)=>{const s=new $(e.toString()+"/"+r);ru(i,s,n)})}function BS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ee(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=10*1e3,$S=30*1e3,HS=5*60*1e3;class GS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VS(e);const r=ip+($S-ip)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ee(e,(i,s)=>{s>0&&Tt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*HS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function Rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Od(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=dt.ACK_USER_WRITE,this.source=Rd()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new sa(W(),n,this.revert)}}else return E(M(this.path)===e,"operationForChild called for unrelated child."),new sa(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new ps(this.source,W()):new ps(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=dt.OVERWRITE}operationForChild(e){return F(this.path)?new tr(this.source,W(),this.snap.getImmediateChild(e)):new tr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=dt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new tr(this.source,W(),n.value):new qr(this.source,W(),n)}else return E(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qr(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(US(o.childName,o.snapshotNode))}),Ei(t,i,"child_removed",e,r,n),Ei(t,i,"child_added",e,r,n),Ei(t,i,"child_moved",s,r,n),Ei(t,i,"child_changed",e,r,n),Ei(t,i,"value",e,r,n),i}function Ei(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>YS(t,a,l)),o.forEach(a=>{const l=qS(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function qS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YS(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new D(e.childName,e.snapshotNode),i=new D(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e){return{eventCache:t,serverCache:e}}function Ui(t,e,n,r){return Ba(new In(e,n,r),t.serverCache)}function f_(t,e,n,r){return Ba(t.eventCache,new In(e,n,r))}function oa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;const XS=()=>(Wl||(Wl=new Ue(LE)),Wl);class H{static fromObject(e){let n=new H(null);return Ee(e,(r,i)=>{n=n.set(new $(r),i)}),n}constructor(e,n=XS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:re(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new H(null)}}set(e,n){if(F(e))return new H(n,this.children);{const r=M(e),s=(this.children.get(r)||new H(null)).set(K(e),n),o=this.children.insert(r,s);return new H(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new H(null):new H(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(F(e))return n;{const r=M(e),s=(this.children.get(r)||new H(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new H(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(K(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),re(n,i),r):new H(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new H(null))}}function zi(t,e,n){if(F(e))return new mt(new H(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Re(i,e);return s=s.updateChild(o,n),new mt(t.writeTree_.set(i,s))}else{const i=new H(n),s=t.writeTree_.setTree(e,i);return new mt(s)}}}function iu(t,e,n){let r=t;return Ee(n,(i,s)=>{r=zi(r,re(e,i),s)}),r}function sp(t,e){if(F(e))return mt.empty();{const n=t.writeTree_.setTree(e,new H(null));return new mt(n)}}function su(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function op(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new D(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new D(r,i.value))}),e}function vn(t,e){if(F(e))return t;{const n=ar(t,e);return n!=null?new mt(new H(n)):new mt(t.writeTree_.subtree(e))}}function ou(t){return t.writeTree_.isEmpty()}function Yr(t,e){return h_(W(),t.writeTree_,e)}function h_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=h_(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e){return __(e,t)}function JS(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=r}function ZS(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=iu(t.visibleWrites,e,n),t.lastWriteId=r}function eC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function tC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nC(a,r.path)?i=!1:Je(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return rC(t),!0;if(r.snap)t.visibleWrites=sp(t.visibleWrites,r.path);else{const a=r.children;Ee(a,l=>{t.visibleWrites=sp(t.visibleWrites,re(r.path,l))})}return!0}else return!1}function nC(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(re(t.path,n),e))return!0;return!1}function rC(t){t.visibleWrites=p_(t.allWrites,iC,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iC(t){return t.visible}function p_(t,e,n){let r=mt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Je(n,o)?(a=Re(n,o),r=zi(r,a,s.snap)):Je(o,n)&&(a=Re(o,n),r=zi(r,W(),s.snap.getChild(a)));else if(s.children){if(Je(n,o))a=Re(n,o),r=iu(r,a,s.children);else if(Je(o,n))if(a=Re(o,n),F(a))r=iu(r,W(),s.children);else{const l=Hr(s.children,M(a));if(l){const c=l.getChild(K(a));r=zi(r,W(),c)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function m_(t,e,n,r,i){if(!r&&!i){const s=ar(t.visibleWrites,e);if(s!=null)return s;{const o=vn(t.visibleWrites,e);if(ou(o))return n;if(n==null&&!su(o,W()))return null;{const a=n||P.EMPTY_NODE;return Yr(o,a)}}}else{const s=vn(t.visibleWrites,e);if(!i&&ou(s))return n;if(!i&&n==null&&!su(s,W()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Je(c.path,e)||Je(e,c.path))},a=p_(t.allWrites,o,e),l=n||P.EMPTY_NODE;return Yr(a,l)}}}function sC(t,e,n){let r=P.EMPTY_NODE;const i=ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=Yr(vn(s,new $(o)),a);r=r.updateImmediateChild(o,l)}),op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vn(t.visibleWrites,e);return op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function oC(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(su(t.visibleWrites,s))return null;{const o=vn(t.visibleWrites,s);return ou(o)?i.getChild(n):Yr(o,i.getChild(n))}}function aC(t,e,n,r){const i=re(e,n),s=ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return Yr(o,r.getNode().getImmediateChild(n))}else return null}function lC(t,e){return ar(t.visibleWrites,e)}function cC(t,e,n,r,i,s,o){let a;const l=vn(t.visibleWrites,e),c=ar(l,W());if(c!=null)a=c;else if(n!=null)a=Yr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&d.length<i;)u(m,r)!==0&&d.push(m),m=f.getNext();return d}else return[]}function uC(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function aa(t,e,n,r){return m_(t.writeTree,t.treePath,e,n,r)}function Dd(t,e){return sC(t.writeTree,t.treePath,e)}function ap(t,e,n,r){return oC(t.writeTree,t.treePath,e,n,r)}function la(t,e){return lC(t.writeTree,re(t.treePath,e))}function dC(t,e,n,r,i,s){return cC(t.writeTree,t.treePath,e,n,r,i,s)}function Ld(t,e,n){return aC(t.writeTree,t.treePath,e,n)}function g_(t,e){return __(re(t.treePath,e),t.writeTree)}function __(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ds(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fs(r,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const y_=new hC;class Md{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new In(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ld(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nr(this.viewCache_),s=dC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){return{filter:t}}function mC(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gC(t,e,n,r,i){const s=new fC;let o,a;if(n.type===dt.OVERWRITE){const c=n;c.source.fromUser?o=au(t,e,c.path,c.snap,r,i,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=ca(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===dt.MERGE){const c=n;c.source.fromUser?o=yC(t,e,c.path,c.children,r,i,s):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=lu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===dt.ACK_USER_WRITE){const c=n;c.revert?o=wC(t,e,c.path,r,i,s):o=vC(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===dt.LISTEN_COMPLETE)o=xC(t,e,n.path,r,s);else throw ti("Unknown operation type: "+n.type);const l=s.getChanges();return _C(e,o,l),{viewCache:o,changes:l}}function _C(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=oa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(u_(oa(e)))}}function v_(t,e,n,r,i,s){const o=e.eventCache;if(la(r,n)!=null)return e;{let a,l;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nr(e),d=c instanceof P?c:P.EMPTY_NODE,u=Dd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=aa(r,nr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){E(kn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=ap(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=K(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ap(r,n,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=Ld(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Ui(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function ca(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),m,null)}else{const m=M(n);if(!l.isCompleteForPath(n)&&kn(n)>1)return e;const _=K(n),S=l.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?c=d.updatePriority(l.getNode(),S):c=d.updateChild(l.getNode(),m,S,_,y_,null)}const u=f_(e,c,l.isFullyInitialized()||F(n),d.filtersNodes()),f=new Md(i,u,s);return v_(t,u,n,i,f,a)}function au(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Md(i,e,s);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ui(e,c,!0,t.filter.filtersNodes());else{const u=M(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ui(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=K(n),m=a.getNode().getImmediateChild(u);let _;if(F(f))_=r;else{const y=d.getCompleteChild(u);y!=null?kd(f)===".priority"&&y.getChild(r_(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=P.EMPTY_NODE}if(m.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),u,_,f,d,o);l=Ui(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lp(t,e){return t.eventCache.isCompleteForChild(e)}function yC(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=re(n,l);lp(e,M(d))&&(a=au(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=re(n,l);lp(e,M(d))||(a=au(t,a,d,c,i,s,o))}),a}function cp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=r:c=new H(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),_=cp(t,m,f);l=ca(t,l,new $(u),_,i,s,o,a)}}),c.children.inorderTraversal((u,f)=>{const m=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!m){const _=e.serverCache.getNode().getImmediateChild(u),y=cp(t,_,f);l=ca(t,l,new $(u),y,i,s,o,a)}}),l}function vC(t,e,n,r,i,s,o){if(la(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ca(t,e,n,l.getNode().getChild(n),i,s,a,o);if(F(n)){let c=new H(null);return l.getNode().forEachChild(Dr,(d,u)=>{c=c.set(new $(d),u)}),lu(t,e,n,c,i,s,a,o)}else return e}else{let c=new H(null);return r.foreach((d,u)=>{const f=re(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),lu(t,e,n,c,i,s,a,o)}}function xC(t,e,n,r,i){const s=e.serverCache,o=f_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return v_(t,o,n,r,y_,i)}function wC(t,e,n,r,i,s){let o;if(la(r,n)!=null)return e;{const a=new Md(r,e,i),l=e.eventCache.getNode();let c;if(F(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=aa(r,nr(e));else{const u=e.serverCache.getNode();E(u instanceof P,"serverChildren would be complete if leaf node"),d=Dd(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=M(n);let u=Ld(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,K(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,P.EMPTY_NODE,K(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=aa(r,nr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||la(r,W())!=null,Ui(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Nd(r.getIndex()),s=jS(r);this.processor_=pC(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(P.EMPTY_NODE,a.getNode(),null),d=new In(l,o.isFullyInitialized(),i.filtersNodes()),u=new In(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ba(u,d),this.eventGenerator_=new KS(this.query_)}get query(){return this.query_}}function SC(t){return t.viewCache_.serverCache.getNode()}function CC(t){return oa(t.viewCache_)}function kC(t,e){const n=nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function up(t){return t.eventRegistrations_.length===0}function IC(t,e){t.eventRegistrations_.push(e)}function dp(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function fp(t,e,n,r){e.type===dt.MERGE&&e.source.queryId!==null&&(E(nr(t.viewCache_),"We should always have a full cache before handling merges"),E(oa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gC(t.processor_,i,e,n,r);return mC(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,x_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Qr(s,o))}),n.isFullyInitialized()&&r.push(u_(n.getNode())),x_(t,r,n.getNode(),e)}function x_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return QS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;class w_{constructor(){this.views=new Map}}function TC(t){E(!ua,"__referenceConstructor has already been defined"),ua=t}function NC(){return E(ua,"Reference.ts has not been loaded"),ua}function PC(t){return t.views.size===0}function Fd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),fp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(fp(o,e,n,r));return s}}function E_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=aa(n,i?r:null),l=!1;a?l=!0:r instanceof P?(a=Dd(n,r),l=!1):(a=P.EMPTY_NODE,l=!1);const c=Ba(new In(a,l,!1),new In(r,i,!1));return new EC(e,c)}return o}function RC(t,e,n,r,i,s){const o=E_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),IC(o,n),bC(o,n)}function AC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=bn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(dp(c,n,r)),up(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(dp(l,n,r)),up(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!bn(t)&&s.push(new(NC())(e._repo,e._path)),{removed:s,events:o}}function S_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const r of t.views.values())n=n||kC(r,e);return n}function C_(t,e){if(e._queryParams.loadsAllData())return $a(t);{const r=e._queryIdentifier;return t.views.get(r)}}function k_(t,e){return C_(t,e)!=null}function bn(t){return $a(t)!=null}function $a(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da;function OC(t){E(!da,"__referenceConstructor has already been defined"),da=t}function DC(){return E(da,"Reference.ts has not been loaded"),da}let LC=1;class hp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=uC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function MC(t,e,n,r,i){return JS(t.pendingWriteTree_,e,n,r,i),i?si(t,new tr(Rd(),e,n)):[]}function FC(t,e,n,r){ZS(t.pendingWriteTree_,e,n,r);const i=H.fromObject(n);return si(t,new qr(Rd(),e,i))}function Vn(t,e,n=!1){const r=eC(t.pendingWriteTree_,e);if(tC(t.pendingWriteTree_,e)){let s=new H(null);return r.snap!=null?s=s.set(W(),!0):Ee(r.children,o=>{s=s.set(new $(o),!0)}),si(t,new sa(r.path,s,n))}else return[]}function Ns(t,e,n){return si(t,new tr(Ad(),e,n))}function UC(t,e,n){const r=H.fromObject(n);return si(t,new qr(Ad(),e,r))}function zC(t,e){return si(t,new ps(Ad(),e))}function jC(t,e,n){const r=Ud(t,n);if(r){const i=zd(r),s=i.path,o=i.queryId,a=Re(s,e),l=new ps(Od(o),a);return jd(t,s,l)}else return[]}function fa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||k_(o,e))){const l=AC(o,e,n,r);PC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,m)=>bn(m));if(d&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=VC(f);for(let _=0;_<m.length;++_){const y=m[_],S=y.query,p=P_(t,y);t.listenProvider_.startListening(ji(S),ms(t,S),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ji(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(Ha(f));t.listenProvider_.stopListening(ji(f),m)}))}$C(t,c)}return a}function I_(t,e,n,r){const i=Ud(t,r);if(i!=null){const s=zd(i),o=s.path,a=s.queryId,l=Re(o,e),c=new tr(Od(a),l,n);return jd(t,o,c)}else return[]}function WC(t,e,n,r){const i=Ud(t,r);if(i){const s=zd(i),o=s.path,a=s.queryId,l=Re(o,e),c=H.fromObject(n),d=new qr(Od(a),l,c);return jd(t,o,d)}else return[]}function cu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const _=Re(f,i);s=s||xn(m,_),o=o||bn(m)});let a=t.syncPointTree_.get(i);a?(o=o||bn(a),s=s||xn(a,W())):(a=new w_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const y=xn(_,W());y&&(s=s.updateImmediateChild(m,y))}));const c=k_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ha(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=HC();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const d=Va(t.pendingWriteTree_,i);let u=RC(a,e,n,d,s,l);if(!c&&!o&&!r){const f=C_(a,e);u=u.concat(GC(t,e,f))}return u}function b_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Re(o,e),c=xn(a,l);if(c)return c});return m_(i,e,s,n,!0)}function BC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Re(c,n);r=r||xn(d,u)});let i=t.syncPointTree_.get(n);i?r=r||xn(i,W()):(i=new w_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new In(r,!0,!1):null,a=Va(t.pendingWriteTree_,e._path),l=E_(i,e,a,s?o.getNode():P.EMPTY_NODE,s);return CC(l)}function si(t,e){return T_(e,t.syncPointTree_,null,Va(t.pendingWriteTree_,W()))}function T_(t,e,n,r){if(F(t.path))return N_(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=xn(i,W()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=g_(r,o);s=s.concat(T_(a,l,c,d))}return i&&(s=s.concat(Fd(i,t,r,n))),s}}function N_(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=xn(i,W()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=g_(r,o),d=t.operationForChild(o);d&&(s=s.concat(N_(d,a,l,c)))}),i&&(s=s.concat(Fd(i,t,r,n))),s}function P_(t,e){const n=e.query,r=ms(t,n);return{hashFn:()=>(SC(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?jC(t,n._path,r):zC(t,n._path);{const s=UE(i,n);return fa(t,n,null,s)}}}}function ms(t,e){const n=Ha(e);return t.queryToTagMap.get(n)}function Ha(t){return t._path.toString()+"$"+t._queryIdentifier}function Ud(t,e){return t.tagToQueryMap.get(e)}function zd(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function jd(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Va(t.pendingWriteTree_,e);return Fd(r,n,i,null)}function VC(t){return t.fold((e,n,r)=>{if(n&&bn(n))return[$a(n)];{let i=[];return n&&(i=S_(n)),Ee(r,(s,o)=>{i=i.concat(o)}),i}})}function ji(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(DC())(t._repo,t._path):t}function $C(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ha(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function HC(){return LC++}function GC(t,e,n){const r=e._path,i=ms(t,e),s=P_(t,n),o=t.listenProvider_.startListening(ji(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)E(!bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!F(c)&&d&&bn(d))return[$a(d).query];{let f=[];return d&&(f=f.concat(S_(d).map(m=>m.query))),Ee(u,(m,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(ji(d),ms(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wd(n)}node(){return this.node_}}class Bd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new Bd(this.syncTree_,n)}node(){return b_(this.syncTree_,this.path_)}}const KC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qC(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},qC=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},R_=function(t,e,n,r){return Vd(e,new Bd(n,t),r)},YC=function(t,e,n){return Vd(t,new Wd(e),n)};function Vd(t,e,n){const r=t.getPriority().val(),i=pp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=pp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new he(a,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(ie,(a,l)=>{const c=Vd(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hd(t,e){let n=e instanceof $?e:new $(e),r=t,i=M(n);for(;i!==null;){const s=Hr(r.node.children,i)||{children:{},childCount:0};r=new $d(i,r,s),n=K(n),i=M(n)}return r}function oi(t){return t.node.value}function A_(t,e){t.node.value=e,uu(t)}function O_(t){return t.node.childCount>0}function XC(t){return oi(t)===void 0&&!O_(t)}function Ga(t,e){Ee(t.node.children,(n,r)=>{e(new $d(n,t,r))})}function D_(t,e,n,r){n&&e(t),Ga(t,i=>{D_(i,e,!0)})}function JC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ps(t){return new $(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function uu(t){t.parent!==null&&ZC(t.parent,t.name,t)}function ZC(t,e,n){const r=XC(n),i=Tt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,uu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,uu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=/[\[\].#$\/\u0000-\u001F\u007F]/,tk=/[\[\].#$\u0000-\u001F\u007F]/,Bl=10*1024*1024,Gd=function(t){return typeof t=="string"&&t.length!==0&&!ek.test(t)},L_=function(t){return typeof t=="string"&&t.length!==0&&!tk.test(t)},nk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),L_(t)},rk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!xd(t)||t&&typeof t=="object"&&Tt(t,".sv")},Kd=function(t,e,n){const r=n instanceof $?new yS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(xd(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>Bl/3&&ja(e)>Bl)throw new Error(t+"contains a string greater than "+Bl+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ee(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Gd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vS(r,o),Kd(t,a,r),xS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},ik=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=us(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Gd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_S);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Je(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},sk=function(t,e,n,r){const i=gd(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ee(e,(o,a)=>{const l=new $(o);if(Kd(i,a,re(n,l)),kd(l)===".priority"&&!rk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),ik(i,s)},M_=function(t,e,n,r){if(!L_(n))throw new Error(gd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ok=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),M_(t,e,n)},ak=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nk(n))throw new Error(gd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Id(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function F_(t,e,n){Qd(t,n),U_(t,r=>Id(r,e))}function It(t,e,n){Qd(t,n),U_(t,r=>Je(r,e)||Je(e,r))}function U_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ck(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ck(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mi&&ve("event: "+n.toString()),ii(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="repo_interrupt",dk=25;class fk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ia(),this.transactionQueueTree_=new $d,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hk(t,e,n){if(t.stats_=Sd(t.repoInfo_),t.forceRestClient_||BE())t.server_=new ra(t.repoInfo_,(r,i,s,o)=>{mp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(r,i,s,o)=>{mp(t,r,i,s,o)},r=>{gp(t,r)},r=>{mk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KE(t.repoInfo_,()=>new GS(t.stats_,t.server_)),t.infoData_=new WS,t.infoSyncTree_=new hp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ns(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yd(t,"connected",!1),t.serverSyncTree_=new hp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);It(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function pk(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function qd(t){return KC({timestamp:pk(t)})}function mp(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Jo(n,c=>ge(c));o=WC(t.serverSyncTree_,s,l,i)}else{const l=ge(n);o=I_(t.serverSyncTree_,s,l,i)}else if(r){const l=Jo(n,c=>ge(c));o=UC(t.serverSyncTree_,s,l)}else{const l=ge(n);o=Ns(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gs(t,s)),It(t.eventQueue_,a,o)}function gp(t,e){Yd(t,"connected",e),e===!1&&yk(t)}function mk(t,e){Ee(e,(n,r)=>{Yd(t,n,r)})}function Yd(t,e,n){const r=new $("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=Ns(t.infoSyncTree_,r,i);It(t.eventQueue_,r,s)}function z_(t){return t.nextWriteId_++}function gk(t,e,n){const r=BC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ge(i).withIndex(e._queryParams.getIndex());cu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,s);else{const a=ms(t.serverSyncTree_,e);o=I_(t.serverSyncTree_,e._path,s,a)}return It(t.eventQueue_,e._path,o),fa(t.serverSyncTree_,e,n,null,!0),s},i=>(Ka(t,"get for query "+ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function _k(t,e,n,r){Ka(t,"update",{path:e.toString(),value:n});let i=!0;const s=qd(t),o={};if(Ee(n,(a,l)=>{i=!1,o[a]=R_(re(e,a),ge(l),t.serverSyncTree_,s)}),i)ve("update() called with empty data.  Don't do anything."),_p(t,r,"ok",void 0);else{const a=z_(t),l=FC(t.serverSyncTree_,e,o,a);Qd(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Be("update at "+e+" failed: "+c);const f=Vn(t.serverSyncTree_,a,!u),m=f.length>0?gs(t,e):e;It(t.eventQueue_,m,f),_p(t,r,c,d)}),Ee(n,c=>{const d=$_(t,re(e,c));gs(t,d)}),It(t.eventQueue_,e,[])}}function yk(t){Ka(t,"onDisconnectEvents");const e=qd(t),n=ia();ru(t.onDisconnect_,W(),(i,s)=>{const o=R_(i,s,t.serverSyncTree_,e);d_(n,i,o)});let r=[];ru(n,W(),(i,s)=>{r=r.concat(Ns(t.serverSyncTree_,i,s));const o=$_(t,i);gs(t,o)}),t.onDisconnect_=ia(),It(t.eventQueue_,W(),r)}function vk(t,e,n){let r;M(e._path)===".info"?r=cu(t.infoSyncTree_,e,n):r=cu(t.serverSyncTree_,e,n),F_(t.eventQueue_,e._path,r)}function xk(t,e,n){let r;M(e._path)===".info"?r=fa(t.infoSyncTree_,e,n):r=fa(t.serverSyncTree_,e,n),F_(t.eventQueue_,e._path,r)}function wk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uk)}function Ka(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function _p(t,e,n,r){e&&ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function j_(t,e,n){return b_(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Xd(t,e=t.transactionQueueTree_){if(e||Qa(t,e),oi(e)){const n=B_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ek(t,Ps(e),n)}else O_(e)&&Ga(e,n=>{Xd(t,n)})}function Ek(t,e,n){const r=n.map(c=>c.currentWriteId),i=j_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Re(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ka(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Vn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Qa(t,Hd(t.transactionQueueTree_,e)),Xd(t,t.transactionQueueTree_),It(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)ii(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Be("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}gs(t,e)}},o)}function gs(t,e){const n=W_(t,e),r=Ps(n),i=B_(t,n);return Sk(t,i,r),r}function Sk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Re(n,l.path);let d=!1,u;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dk)d=!0,u="maxretry",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=j_(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Kd("transaction failed: Data returned ",m,l.path);let _=ge(m);typeof m=="object"&&m!=null&&Tt(m,".priority")||(_=_.updatePriority(f.getPriority()));const S=l.currentWriteId,p=qd(t),h=YC(_,f,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=h,l.currentWriteId=z_(t),o.splice(o.indexOf(S),1),i=i.concat(MC(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Vn(t.serverSyncTree_,S,!0))}else d=!0,u="nodata",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0))}It(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}Qa(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ii(r[a]);Xd(t,t.transactionQueueTree_)}function W_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&oi(r)===void 0;)r=Hd(r,n),e=K(e),n=M(e);return r}function B_(t,e){const n=[];return V_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function V_(t,e,n){const r=oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ga(e,i=>{V_(t,i,n)})}function Qa(t,e){const n=oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,A_(e,n.length>0?n:void 0)}Ga(e,r=>{Qa(t,r)})}function $_(t,e){const n=Ps(W_(t,e)),r=Hd(t.transactionQueueTree_,e);return JC(r,i=>{Vl(t,i)}),Vl(t,r),D_(r,i=>{Vl(t,i)}),n}function Vl(t,e){const n=oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?A_(e,void 0):n.length=s+1,It(t.eventQueue_,Ps(e),i);for(let o=0;o<r.length;o++)ii(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const yp=function(t,e){const n=Ik(t),r=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},Ik=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=Ck(t.substring(d,u)));const f=kk(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class G_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:kd(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=rp(this._queryParams),n=wd(e);return n==="{}"?"default":n}get _queryObject(){return rp(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Jd))return!1;const n=this._repo===e._repo,r=Id(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gS(this._path)}}class Nt extends Jd{constructor(e,n){super(e,n,new Pd,!1)}get parent(){const e=r_(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=pa(this.ref,e);return new Xr(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Xr(i,pa(this.ref,r),ie)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ha(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?pa(t._root,e):t._root}function pa(t,e){return t=yt(t),M(t._path)===null?ok("child","path",e):M_("child","path",e),new Nt(t._repo,re(t._path,e))}function Q_(t,e){sk("update",e,t._path);const n=new za;return _k(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function bk(t){t=yt(t);const e=new K_(()=>{}),n=new qa(e);return gk(t._repo,t,n).then(r=>new Xr(r,new Nt(t._repo,t._path),t._queryParams.getIndex()))}class qa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new H_("value",this,new Xr(e.snapshotNode,new Nt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G_(this,e,n):null}matches(e){return e instanceof qa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Zd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G_(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=pa(new Nt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new H_(e.type,this,new Xr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Zd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ef(t,e,n,r,i){const s=new K_(n,void 0),o=e==="value"?new qa(s):new Zd(e,s);return vk(t._repo,t,o),()=>xk(t._repo,t,o)}function Tk(t,e,n,r){return ef(t,"child_added",e)}function Nk(t,e,n,r){return ef(t,"child_changed",e)}function Pk(t,e,n,r){return ef(t,"child_removed",e)}TC(Nt);OC(Nt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="FIREBASE_DATABASE_EMULATOR_HOST",du={};let Ak=!1;function Ok(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ks(s);t.repoInfo_=new Qg(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Dk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yp(s,i),a=o.repoInfo,l;typeof process<"u"&&zh&&(l=zh[Rk]),l?(s=`http://${l}?ns=${a.namespace}`,o=yp(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new $E(t.name,t.options,e);ak("Invalid Firebase Database URL",o),F(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Mk(a,t,c,new VE(t,n));return new Fk(d,t)}function Lk(t,e){const n=du[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wk(t),delete n[t.key]}function Mk(t,e,n,r){let i=du[e.name];i||(i={},du[e.name]=i);let s=i[t.toURLString()];return s&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fk(t,Ak,n,r),i[t.toURLString()]=s,s}class Fk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function Uk(t=Rg(),e){const n=vd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Z1("database");r&&zk(n,...r)}return n}function zk(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Jn(r,s.repoInfo_.emulatorOptions))return;$t("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&$t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new go(go.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:ew(r.mockUserToken,t.app.options.projectId);o=new go(a)}ks(e)&&bg(e),Ok(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t){bE(ri),Gr(new Zn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Dk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yn(jh,Wh,t),yn(jh,Wh,"esm2020")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jk();function q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wk=q_,Y_=new Cs("auth","Firebase",q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new _d("@firebase/auth");function Bk(t,...e){ma.logLevel<=V.WARN&&ma.warn(`Auth (${ri}): ${t}`,...e)}function _o(t,...e){ma.logLevel<=V.ERROR&&ma.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw tf(t,...e)}function Ct(t,...e){return tf(t,...e)}function X_(t,e,n){const r={...Wk(),[e]:n};return new Cs("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return X_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Y_.create(t,...e)}function R(t,e,...n){if(!t)throw tf(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function Gt(t,e){t||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Vk(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vk()||nw()||"connection"in navigator)?navigator.onLine:!0}function Hk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=md()||kg()}get(){return $k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qk=new Rs(3e4,6e4);function Ya(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ai(t,e,n,r,i={}){return Z_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ni({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return tw()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ks(t.emulatorConfig.host)&&(c.credentials="include"),J_.fetch()(await ty(t,t.config.apiHost,n,a),c)})}async function Z_(t,e,n){t._canInitEmulator=!1;const r={...Gk,...e};try{const i=new qk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw no(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw X_(t,d,c);Ht(t,d)}}catch(i){if(i instanceof An)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function ey(t,e,n,r,i={}){const s=await ai(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ty(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`;return Kk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class qk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),Qk.get())})}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function ga(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=rf(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wi($l(i.auth_time)),issuedAtTime:Wi($l(i.iat)),expirationTime:Wi($l(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $l(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xo(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xp(t){const e=rf(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&Jk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){var u;const e=t.auth,n=await t.getIdToken(),r=await _s(t,ga(e,{idToken:n}));R(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?ny(i.providerUserInfo):[],o=tI(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new hu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function eI(t){const e=yt(t);await _a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ny(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){const n=await Z_(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ty(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ks(t.emulatorConfig.host)&&(l.credentials="include"),J_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rI(t,e){return ai(t,"POST","/v2/accounts:revokeToken",Ya(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){R(e.length!==0,"internal-error");const n=xp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Lr;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xk(this,e)}reload(){return eI(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await _s(this,Yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:f,isAnonymous:m,providerData:_,stsTokenManager:y}=n;R(u&&y,e,"internal-error");const S=Lr.fromJSON(this.name,y);R(typeof u=="string",e,"internal-error"),Yt(r,e.name),Yt(i,e.name),R(typeof f=="boolean",e,"internal-error"),R(typeof m=="boolean",e,"internal-error"),Yt(s,e.name),Yt(o,e.name),Yt(a,e.name),Yt(l,e.name),Yt(c,e.name),Yt(d,e.name);const p=new ft({uid:u,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:S,createdAt:c,lastLoginAt:d});return _&&Array.isArray(_)&&(p.providerData=_.map(h=>({...h}))),l&&(p._redirectEventId=l),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new Lr;i.updateFromServerResponse(n);const s=new ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];R(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ny(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Lr;a.updateFromIdToken(r);const l=new ft({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Map;function Mt(t){Gt(t instanceof Function,"Expected a class definition");let e=wp.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ry.type="NONE";const Ep=ry;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ga(this.auth,{idToken:e}).catch(()=>{});return n?ft._fromGetAccountInfoResponse(this.auth,n,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(Mt(Ep),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mt(Ep);const o=yo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const f=await ga(e,{idToken:d}).catch(()=>{});if(!f)break;u=await ft._fromGetAccountInfoResponse(e,f,d)}else u=ft._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Mr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cy(e))return"Blackberry";if(uy(e))return"Webos";if(sy(e))return"Safari";if((e.includes("chrome/")||oy(e))&&!e.includes("edge/"))return"Chrome";if(ly(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iy(t=Oe()){return/firefox\//i.test(t)}function sy(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oy(t=Oe()){return/crios\//i.test(t)}function ay(t=Oe()){return/iemobile/i.test(t)}function ly(t=Oe()){return/android/i.test(t)}function cy(t=Oe()){return/blackberry/i.test(t)}function uy(t=Oe()){return/webos/i.test(t)}function sf(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iI(t=Oe()){var e;return sf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function sI(){return rw()&&document.documentMode===10}function dy(t=Oe()){return sf(t)||ly(t)||uy(t)||cy(t)||/windows phone/i.test(t)||ay(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t,e=[]){let n;switch(t){case"Browser":n=Sp(Oe());break;case"Worker":n=`${Sp(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e={}){return ai(t,"GET","/v2/passwordPolicy",Ya(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=6;class cI{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??lI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cp(this),this.idTokenSubscription=new Cp(this),this.beforeStateQueue=new oI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ga(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(wn(this));const n=e?yt(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aI(this),n=new cI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Bk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xa(t){return yt(t)}class Cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=hw(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dI(t){of=t}function fI(t){return of.loadJS(t)}function hI(){return of.gapiScript}function pI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){const n=vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jn(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function gI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _I(t,e,n){const r=Xa(t);R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=hy(e),{host:o,port:a}=yI(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){R(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),R(Jn(c,r.config.emulator)&&Jn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ks(o)?bg(`${s}//${o}${l}`):vI()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return ey(t,"POST","/v1/accounts:signInWithIdp",Ya(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="http://localhost";class rr extends py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends my{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends As{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends As{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends As{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e){return ey(t,"POST","/v1/accounts:signUp",Ya(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ft._fromIdTokenResponse(e,r,i),o=Ip(r);return new Tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ip(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t){var i;if(lt(t.app))return Promise.reject(wn(t));const e=Xa(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Tn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await wI(e,{returnSecureToken:!0}),r=await Tn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends An{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ya.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ya(e,n,r,i)}}function gy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ya._fromErrorAndOperation(t,s,e,r):s})}async function SI(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e,n=!1){const{auth:r}=t;if(lt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await _s(t,gy(r,i,e,t),n);R(s.idToken,r,"internal-error");const o=rf(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),Tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e,n=!1){if(lt(t.app))return Promise.reject(wn(t));const r="signIn",i=await gy(t,r,e),s=await Tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function II(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function bI(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}const va="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=1e3,NI=10;class yy extends _y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yy.type="LOCAL";const PI=yy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends _y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vy.type="SESSION";const xy=vy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ja(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await RI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=af("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function OI(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function DI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function MI(){return wy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="firebaseLocalStorageDb",FI=1,xa="firebaseLocalStorage",Sy="fbase_key";class Os{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function UI(){const t=indexedDB.deleteDatabase(Ey);return new Os(t).toPromise()}function pu(){const t=indexedDB.open(Ey,FI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xa,{keyPath:Sy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xa)?e(r):(r.close(),await UI(),e(await pu()))})})}async function bp(t,e,n){const r=Za(t,!0).put({[Sy]:e,value:n});return new Os(r).toPromise()}async function zI(t,e){const n=Za(t,!1).get(e),r=await new Os(n).toPromise();return r===void 0?null:r.value}function Tp(t,e){const n=Za(t,!0).delete(e);return new Os(n).toPromise()}const jI=800,WI=3;class Cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ja._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new AI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await bp(e,va,"1"),await Tp(e,va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Za(i,!1).getAll();return new Os(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cy.type="LOCAL";const BI=Cy;new Rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t,e){return e?Mt(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends py{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $I(t){return kI(t.auth,new lf(t),t.bypassAuthState)}function HI(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),CI(n,new lf(t),t.bypassAuthState)}async function GI(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),SI(n,new lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $I;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:Ht(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Rs(2e3,1e4);class kr extends ky{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KI.get())};e()}}kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="pendingRedirect",vo=new Map;class qI extends ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await YI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YI(t,e){const n=ZI(e),r=JI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function XI(t,e){vo.set(t._key(),e)}function JI(t){return Mt(t._redirectPersistence)}function ZI(t){return yo(QI,t.config.apiKey,t.name)}async function e2(t,e,n=!1){if(lt(t.app))return Promise.reject(wn(t));const r=Xa(t),i=VI(r,e),o=await new qI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=10*60*1e3;class n2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Np(e))}saveEventToCache(e){this.cachedEventUids.add(Np(e)),this.lastProcessedEventTime=Date.now()}}function Np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o2=/^https?/;async function a2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i2(t);for(const n of e)try{if(l2(n))return}catch{}Ht(t,"unauthorized-domain")}function l2(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!o2.test(n))return!1;if(s2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=new Rs(3e4,6e4);function Pp(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function u2(t){return new Promise((e,n)=>{var i,s,o;function r(){Pp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pp(),n(Ct(t,"network-request-failed"))},timeout:c2.get()})}if((s=(i=kt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)r();else{const a=pI("iframefcb");return kt()[a]=()=>{gapi.load?r():n(Ct(t,"network-request-failed"))},fI(`${hI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xo=null,e})}let xo=null;function d2(t){return xo=xo||u2(t),xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=new Rs(5e3,15e3),h2="__/auth/iframe",p2="emulator/auth/iframe",m2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _2(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,p2):`https://${t.config.authDomain}/${h2}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=g2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function y2(t){const e=await d2(t),n=kt().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:_2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=kt().setTimeout(()=>{s(o)},f2.get());function l(){kt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x2=500,w2=600,E2="_blank",S2="http://localhost";class Rp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C2(t,e,n,r=x2,i=w2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...v2,width:r.toString(),height:i.toString(),top:s,left:o},c=Oe().toLowerCase();n&&(a=oy(c)?E2:n),iy(c)&&(e=e||S2,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[m,_])=>`${f}${m}=${_},`,"");if(iI(c)&&a!=="_self")return k2(e||"",a),new Rp(null);const u=window.open(e||"",a,d);R(u,t,"popup-blocked");try{u.focus()}catch{}return new Rp(u)}function k2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2="__/auth/handler",b2="emulator/auth/handler",T2=encodeURIComponent("fac");async function Ap(t,e,n,r,i,s){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof my){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof As){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${T2}=${encodeURIComponent(l)}`:"";return`${N2(t)}?${ni(a).slice(1)}${c}`}function N2({config:t}){return t.emulator?nf(t,b2):`https://${t.authDomain}/${I2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class P2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xy,this._completeRedirectFn=e2,this._overrideRedirectResult=XI}async _openPopup(e,n,r,i){var o;Gt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ap(e,n,r,fu(),i);return C2(e,s,af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ap(e,n,r,fu(),i);return OI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await y2(e),r=new n2(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Hl];s!==void 0&&n(!!s),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dy()||sy()||sf()}}const R2=P2;var Op="@firebase/auth",Dp="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D2(t){Gr(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fy(t)},c=new uI(r,i,s,l);return gI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new Zn("auth-internal",e=>{const n=Xa(e.getProvider("auth").getImmediate());return(r=>new A2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Op,Dp,O2(t)),yn(Op,Dp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=5*60,M2=Cg("authIdTokenMaxAge")||L2;let Lp=null;const F2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>M2)return;const i=n==null?void 0:n.token;Lp!==i&&(Lp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U2(t=Rg()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mI(t,{popupRedirectResolver:R2,persistence:[BI,PI,xy]}),r=Cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=F2(s.toString());bI(n,o,()=>o(n.currentUser)),II(n,a=>o(a))}}const i=Eg("auth");return i&&_I(n,`http://${i}`),n}function z2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}dI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",z2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D2("Browser");const mu={apiKey:"AIzaSyCqvEHnfxs7CvuSOBWDLBbQ4aJf_kADWnE",authDomain:"clinica-app-59844.firebaseapp.com",databaseURL:"https://clinica-app-59844-default-rtdb.firebaseio.com",projectId:"clinica-app-59844",storageBucket:"clinica-app-59844.firebasestorage.app",messagingSenderId:"80149247487",appId:"1:80149247487:web:8d3bc8746bcf4db17923ca"},by=!!mu.apiKey&&!!mu.databaseURL,wa=by?Pg(mu):null,En=wa?Uk(wa):null,Mp=wa?U2(wa):null,wo=by,cf="clinica-sync-id";function j2(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function li(){return localStorage.getItem(cf)}function W2(t){localStorage.setItem(cf,t.toUpperCase())}function B2(){localStorage.removeItem(cf)}const Eo=_t()(bt((t,e)=>({pacientes:[],addPaciente:n=>{const r=be(),i=G(),s=n.nome?n.nome.toUpperCase():n.nome;return t(o=>({pacientes:[...o.pacientes,{...n,nome:s,id:r,ativo:!0,criadoEm:i,atualizadoEm:i}]})),r},updatePaciente:(n,r)=>t(i=>({pacientes:i.pacientes.map(s=>s.id===n?{...s,...r,nome:r.nome?r.nome.toUpperCase():s.nome,atualizadoEm:G()}:s)})),removePaciente:n=>t(r=>({pacientes:r.pacientes.map(i=>i.id===n?{...i,ativo:!1}:i)})),getPaciente:n=>e().pacientes.find(r=>r.id===n)}),{name:"clinica-pacientes"})),So=_t()(bt((t,e)=>({profissionais:[],addProfissional:n=>{const r=be(),i=n.nome?n.nome.toUpperCase():n.nome;return t(s=>({profissionais:[...s.profissionais,{...n,nome:i,id:r,ativo:!0}]})),r},updateProfissional:(n,r)=>t(i=>({profissionais:i.profissionais.map(s=>s.id===n?{...s,...r,nome:r.nome?r.nome.toUpperCase():s.nome}:s)})),removeProfissional:n=>t(r=>({profissionais:r.profissionais.map(i=>i.id===n?{...i,ativo:!1}:i)})),getProfissional:n=>e().profissionais.find(r=>r.id===n)}),{name:"clinica-profissionais"})),Gl=_t()(bt((t,e)=>({agendamentos:[],addAgendamento:n=>{const r=be(),i=G();return t(s=>({agendamentos:[...s.agendamentos,{...n,id:r,criadoEm:i,atualizadoEm:i}]})),r},updateAgendamento:(n,r)=>t(i=>({agendamentos:i.agendamentos.map(s=>s.id===n?{...s,...r,atualizadoEm:G()}:s)})),removeAgendamento:n=>t(r=>({agendamentos:r.agendamentos.filter(i=>i.id!==n)})),getAgendamento:n=>e().agendamentos.find(r=>r.id===n),getAgendamentosByDate:n=>e().agendamentos.filter(r=>r.data===n),getAgendamentosByPaciente:n=>e().agendamentos.filter(r=>r.pacienteId===n)}),{name:"clinica-agenda"})),Kl=_t()(bt((t,e)=>({atendimentos:[],addAtendimento:n=>{const r=be(),i=G();return t(s=>({atendimentos:[...s.atendimentos,{...n,id:r,criadoEm:i,atualizadoEm:i}]})),r},updateAtendimento:(n,r)=>t(i=>({atendimentos:i.atendimentos.map(s=>s.id===n?{...s,...r,atualizadoEm:G()}:s)})),getAtendimentosDoDia:n=>e().atendimentos.filter(r=>r.data===n),getAtendimentoByAgendamento:n=>e().atendimentos.find(r=>r.agendamentoId===n),registrarChegada:n=>t(r=>({atendimentos:r.atendimentos.map(i=>i.id===n?{...i,status:"presente",horaChegada:Pl(),atualizadoEm:G()}:i)})),iniciarAtendimento:n=>t(r=>({atendimentos:r.atendimentos.map(i=>i.id===n?{...i,status:"em_atendimento",horaInicioAtendimento:Pl(),atualizadoEm:G()}:i)})),finalizarAtendimento:n=>t(r=>({atendimentos:r.atendimentos.map(i=>i.id===n?{...i,status:"finalizado",horaFimAtendimento:Pl(),atualizadoEm:G()}:i)}))}),{name:"clinica-atendimentos"})),Ql=_t()(bt((t,e)=>({anamneses:[],evolucoes:[],prescricoes:[],exames:[],anexos:[],secoes:[],addAnamnese:n=>{const r=be(),i=G();return t(s=>({anamneses:[...s.anamneses,{...n,id:r,criadoEm:i,atualizadoEm:i}]})),r},updateAnamnese:(n,r)=>t(i=>({anamneses:i.anamneses.map(s=>s.id===n?{...s,...r,atualizadoEm:G()}:s)})),getAnamnese:n=>e().anamneses.find(r=>r.pacienteId===n),addEvolucao:n=>{const r=be();return t(i=>({evolucoes:[...i.evolucoes,{...n,id:r,criadoEm:G()}]})),r},updateEvolucao:(n,r)=>t(i=>({evolucoes:i.evolucoes.map(s=>s.id===n?{...s,...r}:s)})),removeEvolucao:n=>t(r=>({evolucoes:r.evolucoes.filter(i=>i.id!==n)})),getEvolucoesByPaciente:n=>e().evolucoes.filter(r=>r.pacienteId===n).sort((r,i)=>i.data.localeCompare(r.data)),addPrescricao:n=>{const r=be();return t(i=>({prescricoes:[...i.prescricoes,{...n,id:r,criadoEm:G()}]})),r},getPrescricoesByPaciente:n=>e().prescricoes.filter(r=>r.pacienteId===n).sort((r,i)=>i.data.localeCompare(r.data)),addExame:n=>{const r=be();return t(i=>({exames:[...i.exames,{...n,id:r,criadoEm:G()}]})),r},getExamesByPaciente:n=>e().exames.filter(r=>r.pacienteId===n).sort((r,i)=>i.data.localeCompare(r.data)),addAnexo:n=>{const r=be();return t(i=>({anexos:[...i.anexos,{...n,id:r,criadoEm:G()}]})),r},removeAnexo:n=>t(r=>({anexos:r.anexos.filter(i=>i.id!==n)})),getAnexosByPaciente:n=>e().anexos.filter(r=>r.pacienteId===n),addSecao:n=>{const r=be(),i=G();return t(s=>({secoes:[...s.secoes,{...n,id:r,criadoEm:i,atualizadoEm:i}]})),r},updateSecao:(n,r)=>t(i=>({secoes:i.secoes.map(s=>s.id===n?{...s,...r,atualizadoEm:G()}:s)})),removeSecao:n=>t(r=>({secoes:r.secoes.filter(i=>i.id!==n)})),getSecoesByAtendimento:n=>e().secoes.filter(r=>r.atendimentoId===n).sort((r,i)=>r.criadoEm.localeCompare(i.criadoEm)),getSecoesByPaciente:n=>e().secoes.filter(r=>r.pacienteId===n).sort((r,i)=>i.criadoEm.localeCompare(r.criadoEm))}),{name:"clinica-prontuario"})),Fp=[{id:"proc-1",codigo:"10101012",nome:"Consulta em consultorio",categoria:"Consulta",valorParticular:250,ativo:!0},{id:"proc-2",codigo:"10101020",nome:"Consulta de retorno",categoria:"Consulta",valorParticular:150,ativo:!0},{id:"proc-3",codigo:"10102019",nome:"Consulta de urgencia",categoria:"Consulta",valorParticular:350,ativo:!0},{id:"proc-4",codigo:"20101015",nome:"Hemograma completo",categoria:"Exame",valorParticular:35,ativo:!0},{id:"proc-5",codigo:"20101023",nome:"Glicose",categoria:"Exame",valorParticular:15,ativo:!0},{id:"proc-6",codigo:"20101031",nome:"Colesterol total",categoria:"Exame",valorParticular:20,ativo:!0},{id:"proc-7",codigo:"20101040",nome:"Triglicerides",categoria:"Exame",valorParticular:20,ativo:!0},{id:"proc-8",codigo:"30101012",nome:"Eletrocardiograma",categoria:"Procedimento",valorParticular:80,ativo:!0},{id:"proc-9",codigo:"30101020",nome:"Raio-X de torax",categoria:"Procedimento",valorParticular:90,ativo:!0},{id:"proc-10",codigo:"30101039",nome:"Ultrassonografia abdominal",categoria:"Procedimento",valorParticular:200,ativo:!0},{id:"proc-11",codigo:"40101010",nome:"Curativo simples",categoria:"Procedimento",valorParticular:60,ativo:!0},{id:"proc-12",codigo:"40101029",nome:"Retirada de pontos",categoria:"Procedimento",valorParticular:50,ativo:!0}],Up=[{id:"conv-1",nome:"Unimed",registroANS:"302147",telefone:"0800 770 0777",ativo:!0},{id:"conv-2",nome:"Amil",registroANS:"326305",telefone:"0800 400 1006",ativo:!0},{id:"conv-3",nome:"Bradesco Saude",registroANS:"005711",telefone:"0800 770 7788",ativo:!0},{id:"conv-4",nome:"SulAmerica",registroANS:"006246",telefone:"0800 785 0015",ativo:!0},{id:"conv-5",nome:"Hapvida",registroANS:"368253",telefone:"0800 280 9130",ativo:!0},{id:"conv-6",nome:"NotreDame Intermedica",registroANS:"359017",telefone:"0800 011 7600",ativo:!0},{id:"conv-7",nome:"Particular",registroANS:"",telefone:"",ativo:!0}],ql=_t()(bt((t,e)=>({procedimentos:Fp,convenios:Up,addProcedimento:n=>{const r=be();return t(i=>({procedimentos:[...i.procedimentos,{...n,id:r,ativo:!0}]})),r},updateProcedimento:(n,r)=>t(i=>({procedimentos:i.procedimentos.map(s=>s.id===n?{...s,...r}:s)})),removeProcedimento:n=>t(r=>({procedimentos:r.procedimentos.map(i=>i.id===n?{...i,ativo:!1}:i)})),getProcedimento:n=>e().procedimentos.find(r=>r.id===n),addConvenio:n=>{const r=be();return t(i=>({convenios:[...i.convenios,{...n,id:r,ativo:!0}]})),r},updateConvenio:(n,r)=>t(i=>({convenios:i.convenios.map(s=>s.id===n?{...s,...r}:s)})),removeConvenio:n=>t(r=>({convenios:r.convenios.map(i=>i.id===n?{...i,ativo:!1}:i)})),getConvenio:n=>e().convenios.find(r=>r.id===n)}),{name:"clinica-catalogo",merge:(t,e)=>{var r,i;const n={...e,...t||{}};return(r=n.procedimentos)!=null&&r.length||(n.procedimentos=Fp),(i=n.convenios)!=null&&i.length||(n.convenios=Up),n}})),Yl=_t()(bt((t,e)=>({faturas:[],pagamentos:[],addFatura:n=>{const r=be(),i=G();return t(s=>({faturas:[...s.faturas,{...n,id:r,criadoEm:i,atualizadoEm:i}]})),r},updateFatura:(n,r)=>t(i=>({faturas:i.faturas.map(s=>s.id===n?{...s,...r,atualizadoEm:G()}:s)})),removeFatura:n=>t(r=>({faturas:r.faturas.map(i=>i.id===n?{...i,status:"cancelado"}:i)})),getFatura:n=>e().faturas.find(r=>r.id===n),getFaturasByPaciente:n=>e().faturas.filter(r=>r.pacienteId===n).sort((r,i)=>i.data.localeCompare(r.data)),addPagamento:n=>{const r=be();t(s=>({pagamentos:[...s.pagamentos,{...n,id:r,criadoEm:G()}]}));const i=e().faturas.find(s=>s.id===n.faturaId);if(i){const o=e().pagamentos.filter(a=>a.faturaId===n.faturaId).reduce((a,l)=>a+l.valor,0)+n.valor>=i.valorFinal?"pago":"parcial";t(a=>({faturas:a.faturas.map(l=>l.id===n.faturaId?{...l,status:o,atualizadoEm:G()}:l)}))}return r},getPagamentosByFatura:n=>e().pagamentos.filter(r=>r.faturaId===n).sort((r,i)=>i.data.localeCompare(r.data))}),{name:"clinica-faturamento"})),Xl=_t()(bt(t=>({contas:[],caixas:[],movimentos:[],addConta:e=>t(n=>({contas:[...n.contas,{...e,id:crypto.randomUUID(),criadoEm:new Date().toISOString(),atualizadoEm:new Date().toISOString()}]})),updateConta:(e,n)=>t(r=>({contas:r.contas.map(i=>i.id===e?{...i,...n,atualizadoEm:new Date().toISOString()}:i)})),removeConta:e=>t(n=>({contas:n.contas.filter(r=>r.id!==e)})),abrirCaixa:(e,n)=>t(r=>({caixas:[...r.caixas,{id:crypto.randomUUID(),dataAbertura:Ch(),dataFechamento:null,saldoInicial:e,saldoFinal:null,status:"aberto",responsavelId:n,observacoes:"",criadoEm:new Date().toISOString()}]})),fecharCaixa:(e,n)=>t(r=>({caixas:r.caixas.map(i=>i.id===e?{...i,status:"fechado",saldoFinal:n,dataFechamento:Ch()}:i)})),addMovimento:e=>t(n=>({movimentos:[...n.movimentos,{...e,id:crypto.randomUUID(),criadoEm:new Date().toISOString()}]}))}),{name:"clinica-financeiro"})),uf=localStorage.getItem("clinica-device-id")||(()=>{const t=Math.random().toString(36).substring(2,10);return localStorage.setItem("clinica-device-id",t),t})();let $n=!1,Ea=[];function V2(){return[{getState:Eo.getState,setState:Eo.setState,subscribe:Eo.subscribe,arrays:[{key:"pacientes",collection:"pacientes",timestampField:"atualizadoEm"}]},{getState:So.getState,setState:So.setState,subscribe:So.subscribe,arrays:[{key:"profissionais",collection:"profissionais",timestampField:"atualizadoEm"}]},{getState:Gl.getState,setState:Gl.setState,subscribe:Gl.subscribe,arrays:[{key:"agendamentos",collection:"agendamentos",timestampField:"atualizadoEm"}]},{getState:Kl.getState,setState:Kl.setState,subscribe:Kl.subscribe,arrays:[{key:"atendimentos",collection:"atendimentos",timestampField:"atualizadoEm"}]},{getState:Ql.getState,setState:Ql.setState,subscribe:Ql.subscribe,arrays:[{key:"evolucoes",collection:"evolucoes",timestampField:"criadoEm"},{key:"prescricoes",collection:"prescricoes",timestampField:"criadoEm"},{key:"secoes",collection:"secoes",timestampField:"atualizadoEm"},{key:"anamneses",collection:"anamneses",timestampField:"criadoEm"},{key:"exames",collection:"exames",timestampField:"criadoEm"}]},{getState:ql.getState,setState:ql.setState,subscribe:ql.subscribe,arrays:[{key:"procedimentos",collection:"procedimentos",timestampField:"atualizadoEm"},{key:"convenios",collection:"convenios",timestampField:"atualizadoEm"}]},{getState:Yl.getState,setState:Yl.setState,subscribe:Yl.subscribe,arrays:[{key:"faturas",collection:"faturas",timestampField:"atualizadoEm"},{key:"pagamentos",collection:"pagamentos",timestampField:"criadoEm"}]},{getState:Xl.getState,setState:Xl.setState,subscribe:Xl.subscribe,arrays:[{key:"contas",collection:"contas",timestampField:"atualizadoEm"},{key:"caixas",collection:"caixas",timestampField:"criadoEm"},{key:"movimentos",collection:"movimentos",timestampField:"criadoEm"}]}]}function ys(t){return`clinics/${li()}/${t}`}function $2(t){let e=null,n={};const r=t.getState();for(const i of t.arrays){const s=r[i.key]||[],o=new Map;s.forEach(a=>o.set(a.id,JSON.stringify(a))),n[i.key]=o}return t.subscribe(i=>{$n||(e&&clearTimeout(e),e=setTimeout(()=>{if(!En||!li())return;const s={};for(const o of t.arrays){const a=i[o.key]||[],l=new Map;a.forEach(d=>l.set(d.id,JSON.stringify(d)));const c=n[o.key]||new Map;for(const[d,u]of l)if(c.get(d)!==u){const f=JSON.parse(u);s[`${ys(o.collection)}/${d}`]={...f,_lastWriter:uf}}for(const d of c.keys())l.has(d)||(s[`${ys(o.collection)}/${d}`]=null);n[o.key]=l}if(Object.keys(s).length>0){const o=ha(En);Q_(o,s).catch(a=>{console.error("[Sync] Erro ao enviar para Firebase:",a)})}},500))})}function H2(t){if(!En||!li())return[];const e=[];for(const n of t.arrays){const r=ha(En,ys(n.collection)),i=o=>{const a=o.val();if(!a||a._lastWriter===uf)return;const{_lastWriter:l,...c}=a,f=(t.getState()[n.key]||[]).find(_=>_.id===c.id),m=n.timestampField;f&&f[m]>=c[m]||($n=!0,f?t.setState(_=>({[n.key]:_[n.key].map(y=>y.id===c.id?c:y)})):t.setState(_=>({[n.key]:[..._[n.key]||[],c]})),$n=!1)},s=o=>{const a=o.key;a&&($n=!0,t.setState(l=>({[n.key]:(l[n.key]||[]).filter(c=>c.id!==a)})),$n=!1)};e.push(Tk(r,i),Nk(r,i),Pk(r,s))}return e}async function G2(t){if(!(!En||!li()))for(const e of t.arrays){const n=ha(En,ys(e.collection)),i=(await bk(n)).val()||{},o=t.getState()[e.key]||[],a=new Map;o.forEach(u=>a.set(u.id,u));const l=e.timestampField,c=[...o],d={};for(const[u,f]of Object.entries(i)){const{_lastWriter:m,..._}=f,y=a.get(u);if(!y)c.push(_);else if(_[l]>y[l]){const S=c.findIndex(p=>p.id===u);S>=0&&(c[S]=_)}}for(const u of o)i[u.id]||(d[`${ys(e.collection)}/${u.id}`]={...u,_lastWriter:uf});if($n=!0,t.setState(()=>({[e.key]:c})),$n=!1,Object.keys(d).length>0){const u=ha(En);await Q_(u,d).catch(f=>{console.error("[Sync] Erro no sync inicial:",f)})}}}let ke=null;function K2(t){ke=t}async function zp(){if(!wo||!En||!Mp||!li())return ke==null||ke("disconnected"),!1;try{ke==null||ke("connecting"),await EI(Mp);const t=V2();for(const e of t)await G2(e);for(const e of t){const n=H2(e);Ea.push(...n)}for(const e of t){const n=$2(e);Ea.push(n)}return ke==null||ke("connected"),!0}catch(t){return console.error("[Sync] Erro ao iniciar sync:",t),ke==null||ke("error"),!1}}function jp(){Ea.forEach(t=>t()),Ea=[],ke==null||ke("disconnected")}function el(){const[t,e]=L.useState("disconnected"),[n,r]=L.useState(li());L.useEffect(()=>(K2(e),n&&wo&&zp(),()=>{jp()}),[]);const i=L.useCallback(o=>{const a=(o==null?void 0:o.toUpperCase())||j2();return W2(a),r(a),wo&&zp(),a},[]),s=L.useCallback(()=>{jp(),B2(),r(null)},[]);return{status:t,clinicCode:n,isConnected:t==="connected",isSyncing:t==="connecting",isConfigured:wo,enableSync:i,disableSync:s}}function Ty({onClose:t}){const{clinicCode:e,isConnected:n,isSyncing:r,isConfigured:i,enableSync:s,disableSync:o}=el(),[a,l]=L.useState(""),[c,d]=L.useState(!1),[u,f]=L.useState("menu");if(!i)return v.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:v.jsxs("div",{className:"bg-white dark:bg-bg-card rounded-2xl shadow-xl max-w-md w-full p-6",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("h2",{className:"text-lg font-bold text-gray-800 dark:text-text-primary",children:"Sincronização"}),v.jsx("button",{onClick:t,className:"p-1 rounded hover:bg-gray-100 dark:hover:bg-bg-hover",children:v.jsx(Kc,{size:18})})]}),v.jsx("p",{className:"text-sm text-gray-500 dark:text-text-secondary",children:"Sincronização não configurada. As chaves do Firebase precisam ser adicionadas ao arquivo .env do projeto."})]})});const m=()=>{s(),f("menu")},_=()=>{a.length>=4&&(s(a),f("menu"))},y=()=>{e&&(navigator.clipboard.writeText(e),d(!0),setTimeout(()=>d(!1),2e3))},S=()=>{o(),f("menu")};return v.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:v.jsxs("div",{className:"bg-white dark:bg-bg-card rounded-2xl shadow-xl max-w-md w-full p-6",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("h2",{className:"text-lg font-bold text-gray-800 dark:text-text-primary flex items-center gap-2",children:[n?v.jsx(fd,{size:20,className:"text-accent"}):v.jsx(qo,{size:20,className:"text-gray-400"}),"Sincronização"]}),v.jsx("button",{onClick:t,className:"p-1 rounded hover:bg-gray-100 dark:hover:bg-bg-hover",children:v.jsx(Kc,{size:18})})]}),v.jsx("div",{className:`mb-4 px-3 py-2 rounded-lg text-sm font-medium ${n?"bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400":r?"bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400":"bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`,children:n?"Conectado — dados sincronizando em tempo real":r?"Conectando...":e?"Desconectado":"Não configurado"}),e&&v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"text-xs text-gray-500 dark:text-text-secondary block mb-1",children:"Código da clínica"}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"flex-1 bg-gray-100 dark:bg-bg-secondary px-4 py-3 rounded-lg text-center font-mono text-2xl font-bold tracking-[0.3em] text-gray-800 dark:text-text-primary",children:e}),v.jsx("button",{onClick:y,className:"p-3 rounded-lg bg-gray-100 dark:bg-bg-secondary hover:bg-gray-200 dark:hover:bg-bg-hover transition-colors",title:"Copiar código",children:c?v.jsx(R1,{size:18,className:"text-accent"}):v.jsx(O1,{size:18})})]}),v.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Digite este código nos outros dispositivos para sincronizar"})]}),e?v.jsxs("div",{className:"flex gap-2",children:[v.jsxs("button",{onClick:()=>{o(),s()},className:"flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 dark:border-border text-sm text-gray-600 dark:text-text-secondary hover:bg-gray-50 dark:hover:bg-bg-hover",children:[v.jsx(z1,{size:14})," Reconectar"]}),v.jsxs("button",{onClick:S,className:"flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-red-200 text-sm text-red-600 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-900/20",children:[v.jsx(qo,{size:14})," Desconectar"]})]}):v.jsxs("div",{className:"space-y-3",children:[u==="menu"&&v.jsxs(v.Fragment,{children:[v.jsx("button",{onClick:m,className:"w-full py-3 px-4 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors",children:"Criar código (primeiro dispositivo)"}),v.jsx("button",{onClick:()=>f("join"),className:"w-full py-3 px-4 rounded-lg border border-gray-200 dark:border-border text-gray-700 dark:text-text-primary font-medium hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors",children:"Digitar código (conectar a outra clínica)"})]}),u==="join"&&v.jsxs("div",{className:"space-y-3",children:[v.jsx("input",{value:a,onChange:p=>l(p.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)),placeholder:"Digite o código...",className:"w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-secondary text-center font-mono text-2xl font-bold tracking-[0.3em] focus:ring-2 focus:ring-accent/50 focus:border-accent",autoFocus:!0,maxLength:6}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:()=>f("menu"),className:"flex-1 py-2 rounded-lg border border-gray-200 dark:border-border text-sm",children:"Voltar"}),v.jsx("button",{onClick:_,disabled:a.length<4,className:"flex-1 py-2 rounded-lg bg-accent text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:"Conectar"})]})]})]})]})})}const Q2=[{label:"Clínica",items:[{id:"dashboard",label:"Dashboard",icon:fg},{id:"agenda",label:"Agenda",icon:ug},{id:"atendimentos",label:"Atendimentos",icon:gg},{id:"pacientes",label:"Pacientes",icon:_g},{id:"prontuario",label:"Prontuário",icon:A1}]},{label:"Financeiro",items:[{id:"faturamento",label:"Faturamento",icon:dg},{id:"pagar_receber",label:"Pagar e Receber",icon:V1},{id:"caixa",label:"Caixa",icon:D1},{id:"indicadores",label:"Indicadores",icon:P1},{id:"catalogo",label:"Catálogo",icon:M1}]},{label:"Gestão",items:[{id:"profissionais",label:"Profissionais",icon:B1}]}];function q2(){const t=Pe(m=>m.activePage),e=Pe(m=>m.sidebarCollapsed),n=Pe(m=>m.setActivePage),r=Pe(m=>m.toggleSidebar),i=Ar(m=>m.currentSession),s=Ar(m=>m.logout),o=(i==null?void 0:i.perfil)==="admin",{status:a,isConfigured:l}=el(),[c,d]=L.useState(!1),u=i!=null&&i.nomeCompleto?i.nomeCompleto.split(" ").map(m=>m[0]).slice(0,2).join("").toUpperCase():"?",f=(m,_,y)=>{const S=t===m;return v.jsxs("button",{onClick:()=>n(m),title:e?_:void 0,className:`w-full flex items-center gap-3 px-3 py-2 rounded-r-lg text-sm transition-all
          ${S?"border-l-[3px] border-accent bg-accent/10 text-accent font-medium":"border-l-[3px] border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-bg-hover hover:text-gray-900 dark:hover:text-white"}`,children:[v.jsx(y,{size:18,className:"shrink-0"}),!e&&v.jsx("span",{className:"truncate",children:_})]},m)};return v.jsxs(v.Fragment,{children:[v.jsxs("aside",{className:`${e?"w-16":"w-56"} transition-all duration-200 flex-col
      bg-white dark:bg-bg-secondary border-r border-gray-200 dark:border-border h-full hidden md:flex`,children:[v.jsxs("div",{className:`flex items-center gap-2 px-3 ${e?"h-14":"h-16"} border-b border-gray-200 dark:border-border transition-all duration-200`,children:[e?v.jsx("img",{src:"./logo.png",alt:"aimê",className:"w-8 h-8 rounded-lg object-cover shrink-0"}):v.jsx("img",{src:"./logo.png",alt:"aimê",className:"h-10 w-auto object-contain shrink-0"}),!e&&v.jsx("div",{className:"flex-1"}),v.jsx("button",{onClick:r,title:e?"Expandir menu":"Ocultar menu",className:"w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-bg-hover transition-colors shrink-0",children:e?v.jsx(U1,{size:18}):v.jsx(F1,{size:18})})]}),v.jsxs("nav",{className:"flex-1 py-3 overflow-y-auto",children:[Q2.map((m,_)=>v.jsxs("div",{children:[_>0&&v.jsx("div",{className:"border-t border-gray-100 dark:border-border/50 my-2 mx-3"}),!e&&v.jsx("p",{className:"px-4 pt-2 pb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider",children:m.label}),v.jsx("div",{className:"space-y-0.5 px-1",children:m.items.map(({id:y,label:S,icon:p})=>f(y,S,p))})]},m.label)),o&&v.jsxs("div",{children:[v.jsx("div",{className:"border-t border-gray-100 dark:border-border/50 my-2 mx-3"}),!e&&v.jsx("p",{className:"px-4 pt-2 pb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider",children:"Admin"}),v.jsx("div",{className:"space-y-0.5 px-1",children:f("usuarios","Usuários",W1)})]})]}),v.jsxs("div",{className:"px-3 py-3 border-t border-gray-200 dark:border-border",children:[!e&&i?v.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0",children:u}),v.jsxs("div",{className:"min-w-0 flex-1",children:[v.jsx("p",{className:"text-sm text-gray-700 dark:text-text-primary font-medium truncate",children:i.nomeCompleto}),v.jsx("p",{className:"text-[10px] text-gray-400 dark:text-text-secondary truncate",children:i.username})]})]}):e&&i?v.jsx("div",{className:"flex justify-center mb-2",children:v.jsx("div",{className:"w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold",title:i.nomeCompleto,children:u})}):null,l&&v.jsxs("button",{onClick:()=>d(!0),title:a==="connected"?"Sincronizado":"Configurar sync",className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors mb-1 ${a==="connected"?"text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20":a==="connecting"?"text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20":"text-gray-400 hover:bg-gray-100 dark:hover:bg-bg-hover"} ${e?"justify-center":""}`,children:[a==="connected"?v.jsx(fd,{size:18,className:"shrink-0"}):a==="connecting"?v.jsx(hg,{size:18,className:"shrink-0 animate-spin"}):v.jsx(qo,{size:18,className:"shrink-0"}),!e&&v.jsx("span",{children:a==="connected"?"Sincronizado":a==="connecting"?"Conectando...":"Sync"})]}),v.jsxs("button",{onClick:s,title:"Sair",className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 dark:hover:text-red-400 transition-colors ${e?"justify-center":""}`,children:[v.jsx(L1,{size:18,className:"shrink-0"}),!e&&v.jsx("span",{children:"Sair"})]})]})]}),c&&v.jsx(Ty,{onClose:()=>d(!1)})]})}const Y2={dashboard:"Dashboard",agenda:"Agenda",pacientes:"Pacientes",prontuario:"Prontuário",faturamento:"Faturamento",profissionais:"Profissionais",catalogo:"Catálogo de Serviços",usuarios:"Gerenciamento de Usuários",atendimentos:"Atendimentos do Dia",pagar_receber:"Pagar e Receber",caixa:"Caixa",indicadores:"Indicadores Financeiros"};function X2(){const t=Pe(y=>y.activePage),e=Pe(y=>y.theme),n=Pe(y=>y.toggleTheme),r=Pe(y=>y.setActivePage),i=Ar(y=>y.currentSession),s=Eo(y=>y.pacientes),o=So(y=>y.profissionais),[a,l]=L.useState(""),[c,d]=L.useState(!1),u=i!=null&&i.nomeCompleto?i.nomeCompleto.split(" ").map(y=>y[0]).slice(0,2).join("").toUpperCase():"?",f=L.useMemo(()=>{if(!a.trim()||a.length<2)return[];const y=a.toLowerCase(),S=[];return s.forEach(p=>{(p.nome.toLowerCase().includes(y)||p.cpf&&p.cpf.includes(y))&&S.push({label:p.nome,sublabel:"Paciente",page:"pacientes"})}),o.forEach(p=>{(p.nome.toLowerCase().includes(y)||p.especialidade&&p.especialidade.toLowerCase().includes(y))&&S.push({label:p.nome,sublabel:p.especialidade||"Profissional",page:"profissionais"})}),S.slice(0,8)},[a,s,o]),m=c&&a.length>=2&&f.length>0,_=y=>{r(y),l(""),d(!1)};return v.jsxs("header",{className:"h-14 border-b border-gray-200 dark:border-border bg-white dark:bg-bg-secondary items-center justify-between px-6 hidden md:flex",children:[v.jsxs("div",{className:"flex items-center gap-6 flex-1",children:[v.jsx("h1",{className:"text-lg font-semibold text-gray-800 dark:text-text-primary whitespace-nowrap",children:Y2[t]}),v.jsxs("div",{className:"relative max-w-md w-full",children:[v.jsx(j1,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),v.jsx("input",{value:a,onChange:y=>l(y.target.value),onFocus:()=>d(!0),onBlur:()=>setTimeout(()=>d(!1),200),placeholder:"Buscar paciente, profissional...",className:"w-full pl-9 pr-8 py-1.5 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-card text-sm text-gray-700 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent focus:bg-white dark:focus:bg-bg-card transition-colors"}),a&&v.jsx("button",{onClick:()=>l(""),className:"absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600",children:v.jsx(Kc,{size:14})}),m&&v.jsx("div",{className:"absolute top-full left-0 right-0 mt-1 bg-white dark:bg-bg-secondary border border-gray-200 dark:border-border rounded-lg shadow-lg z-50 overflow-hidden",children:f.map((y,S)=>v.jsx("button",{onMouseDown:()=>_(y.page),className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left transition-colors",children:v.jsxs("div",{children:[v.jsx("p",{className:"text-sm text-gray-800 dark:text-text-primary",children:y.label}),v.jsx("p",{className:"text-xs text-gray-400",children:y.sublabel})]})},S))})]})]}),v.jsxs("div",{className:"flex items-center gap-3 ml-4",children:[v.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 dark:text-text-secondary transition-colors",title:e==="dark"?"Modo claro":"Modo escuro",children:e==="dark"?v.jsx(mg,{size:18}):v.jsx(pg,{size:18})}),i&&v.jsxs("div",{className:"flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-border",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold",children:u}),v.jsx("span",{className:"text-sm text-gray-600 dark:text-text-secondary hidden lg:block",children:i.nomeCompleto})]})]})]})}const J2=[{id:"dashboard",label:"Home",icon:fg},{id:"agenda",label:"Agenda",icon:ug},{id:"atendimentos",label:"Atendimento",icon:gg},{id:"pacientes",label:"Pacientes",icon:_g},{id:"faturamento",label:"Financeiro",icon:dg}];function Z2(){const t=Pe(n=>n.activePage),e=Pe(n=>n.setActivePage);return v.jsx("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-bg-secondary border-t border-gray-200 dark:border-border pb-safe",children:v.jsx("div",{className:"flex items-center justify-around h-16",children:J2.map(({id:n,label:r,icon:i})=>{const s=t===n;return v.jsxs("button",{onClick:()=>e(n),className:`flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[56px] transition-colors
                ${s?"text-accent":"text-gray-400 dark:text-text-secondary"}`,children:[v.jsx(i,{size:22}),v.jsx("span",{className:"text-[10px] font-medium",children:r})]},n)})})})}const eb={dashboard:"Dashboard",agenda:"Agenda",pacientes:"Pacientes",prontuario:"Prontuário",faturamento:"Faturamento",profissionais:"Profissionais",catalogo:"Catálogo",usuarios:"Usuários",atendimentos:"Atendimentos",pagar_receber:"Pagar e Receber",caixa:"Caixa",indicadores:"Indicadores"};function tb(){const t=Pe(a=>a.activePage),e=Pe(a=>a.theme),n=Pe(a=>a.toggleTheme),{status:r,isConfigured:i}=el(),[s,o]=L.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsxs("header",{className:"md:hidden h-12 border-b border-gray-200 dark:border-border bg-white dark:bg-bg-secondary flex items-center justify-between px-4 pt-safe",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"./logo.png",alt:"aimê",className:"h-8 w-auto object-contain"}),v.jsx("h1",{className:"text-base font-semibold text-gray-800 dark:text-text-primary",children:eb[t]})]}),v.jsxs("div",{className:"flex items-center gap-1",children:[i&&v.jsx("button",{onClick:()=>o(!0),className:`p-2 rounded-lg transition-colors ${r==="connected"?"text-green-500":r==="connecting"?"text-yellow-500":"text-gray-400"}`,children:r==="connected"?v.jsx(fd,{size:16}):r==="connecting"?v.jsx(hg,{size:16,className:"animate-spin"}):v.jsx(qo,{size:16})}),v.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 dark:text-text-secondary transition-colors",children:e==="dark"?v.jsx(mg,{size:16}):v.jsx(pg,{size:16})})]})]}),s&&v.jsx(Ty,{onClose:()=>o(!1)})]})}const nb=L.lazy(()=>nt(()=>import("./DashboardPage-DmCxn91w.js"),__vite__mapDeps([0,1,2]))),rb=L.lazy(()=>nt(()=>import("./AgendaPage-wQc_qdD6.js"),__vite__mapDeps([3,1,4,5,6,7,8,9,10]))),ib=L.lazy(()=>nt(()=>import("./PacientesPage-yVcmT2r6.js"),__vite__mapDeps([11,6,12,5,8,10]))),sb=L.lazy(()=>nt(()=>import("./ProntuarioPage-G-WEyfoE.js"),__vite__mapDeps([13,6,12,5,10,14,15,7]))),ob=L.lazy(()=>nt(()=>import("./FaturamentoPage-WwWknpwi.js"),__vite__mapDeps([16,6,4,12,5,14,8,10]))),ab=L.lazy(()=>nt(()=>import("./ProfissionaisPage-BEDNogtY.js"),__vite__mapDeps([17,12,5,1,10]))),lb=L.lazy(()=>nt(()=>import("./CatalogoPage-BMeL7o9N.js"),__vite__mapDeps([18,12,5,8,10]))),cb=L.lazy(()=>nt(()=>import("./UsuariosPage-Cpa6GxH8.js"),__vite__mapDeps([19,5,12,10]))),ub=L.lazy(()=>nt(()=>import("./AtendimentosPage-CpUiu5I8.js"),__vite__mapDeps([20,4,12,9,10,15]))),db=L.lazy(()=>nt(()=>import("./PagarReceberPage-ZxbmGnEx.js"),__vite__mapDeps([21,12,10]))),fb=L.lazy(()=>nt(()=>import("./CaixaPage-Dc1WB49Y.js"),__vite__mapDeps([22,12]))),hb=L.lazy(()=>nt(()=>import("./IndicadoresPage-D0ovCIEI.js"),__vite__mapDeps([23,2]))),pb={dashboard:nb,agenda:rb,pacientes:ib,prontuario:sb,faturamento:ob,profissionais:ab,catalogo:lb,usuarios:cb,atendimentos:ub,pagar_receber:db,caixa:fb,indicadores:hb};function mb(){return v.jsx("div",{className:"flex-1 flex items-center justify-center",children:v.jsx("div",{className:"w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"})})}function gb(){const t=Pe(n=>n.activePage),e=pb[t];return v.jsxs("div",{className:"flex h-screen bg-gray-50 dark:bg-bg-primary text-gray-900 dark:text-text-primary",children:[v.jsx(q2,{}),v.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[v.jsx(X2,{}),v.jsx(tb,{}),v.jsxs("main",{className:"flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6 relative",children:[v.jsx("img",{src:"./logo.png",alt:"","aria-hidden":"true",draggable:!1,className:"pointer-events-none select-none fixed inset-0 w-full h-full object-cover opacity-[0.12] dark:opacity-[0.15]",style:{zIndex:0}}),v.jsx(L.Suspense,{fallback:v.jsx(mb,{}),children:v.jsx("div",{className:"relative",style:{zIndex:1},children:v.jsx(e,{})})})]})]}),v.jsx(Z2,{})]})}const _b=_t(t=>({checked:!1,licensed:!1,machineId:"",check:async()=>{if(!window.electronAPI){t({checked:!0,licensed:!0});return}const[e,n]=await Promise.all([window.electronAPI.getLicenseStatus(),window.electronAPI.getMachineId()]);t({checked:!0,licensed:e.ok,machineId:n,client:e.client,expiresAt:e.expiresAt})},activate:async e=>{if(!window.electronAPI)return{ok:!1,error:"Fora do Electron"};const n=await window.electronAPI.activateLicense(e);return n.ok&&t({licensed:!0,client:n.client,expiresAt:n.expiresAt}),n}}));function yb(){const t=Pe(a=>a.theme),e=Ar(a=>a.currentSession),n=Ar(a=>a.isSessionExpired),r=Ar(a=>a.logout),{checked:i,licensed:s,check:o}=_b();return el(),L.useEffect(()=>{o()},[o]),L.useEffect(()=>{t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),L.useEffect(()=>{const a=setInterval(()=>{e&&n()&&r()},6e4);return()=>clearInterval(a)},[e,n,r]),i?v.jsx(gb,{}):null}Z0(document.getElementById("root")).render(v.jsx(L.StrictMode,{children:v.jsx(yb,{})}));export{A1 as A,Ar as B,ug as C,dg as D,W1 as E,bb as F,Tb as G,Nb as H,Xl as I,P1 as J,D1 as L,M1 as P,Fs as R,j1 as S,_g as U,V1 as W,Kc as X,Pb as _,Gl as a,Kl as b,X as c,Yl as d,gg as e,wb as f,Ib as g,So as h,ql as i,v as j,R1 as k,u1 as l,kb as m,Cb as n,Sb as o,Pe as p,Ql as q,L as r,be as s,Ch as t,Eo as u,Py as v,xb as w,vb as x,Eb as y,B1 as z};
