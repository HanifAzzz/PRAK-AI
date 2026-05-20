var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,M=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function N(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=N(n))):i=N(o):i=N(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=N(n))):i=N(o)):i=N(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:P(n),(n&(e.suspendedLanes|t))===0?n:0}function P(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var lt=Math.random().toString(36).slice(2),ut=`__reactFiber$`+lt,dt=`__reactProps$`+lt,ft=`__reactContainer$`+lt,pt=`__reactEvents$`+lt,mt=`__reactListeners$`+lt,ht=`__reactHandles$`+lt,gt=`__reactResources$`+lt,_t=`__reactMarker$`+lt;function vt(e){delete e[ut],delete e[dt],delete e[pt],delete e[mt],delete e[ht]}function yt(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ut])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function bt(e){if(e=e[ut]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function St(e){var t=e[gt];return t||=e[gt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ct(e){e[_t]=!0}var wt=new Set,Tt={};function Et(e,t){Dt(e,t),Dt(e+`Capture`,t)}function Dt(e,t){for(Tt[e]=t,e=0;e<t.length;e++)wt.add(t[e])}var Ot=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),kt={},At={};function jt(e){return De.call(At,e)?!0:De.call(kt,e)?!1:Ot.test(e)?At[e]=!0:(kt[e]=!0,!1)}function Mt(e,t,n){if(jt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Nt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Pt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ft(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function It(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Lt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function F(e){if(!e._valueTracker){var t=It(e)?`checked`:`value`;e._valueTracker=Lt(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=It(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ft(t)):e.value!==``+Ft(t)&&(e.value=``+Ft(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Ft(n)):Wt(e,o,Ft(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ft(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){F(e);return}n=n==null?``:``+Ft(n),t=t==null?n:``+Ft(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),F(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ft(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ft(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),F(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Xt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Xt(e,o,t[o])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=bt(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[dt]||null;if(!a)throw Error(i(90));Ht(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(bu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,`passive`,{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=h({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,I=h({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),An=Sn(I),jn=Sn(h({},I,{dataTransfer:0})),Mn=Sn(h({},Tn,{relatedTarget:0})),Nn=Sn(h({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=Sn(h({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Fn=Sn(h({},Cn,{data:0})),In={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Ln={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Rn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rn[e])?!!t[e]:!1}function Bn(){return zn}var Vn=Sn(h({},Tn,{key:function(e){if(e.key){var t=In[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Ln[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Hn=Sn(h({},I,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=Sn(h({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn})),Wn=Sn(h({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Gn=Sn(h({},I,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Kn=Sn(h({},Cn,{newState:0,oldState:0})),qn=[9,13,27,32],L=fn&&`CompositionEvent`in window,Jn=null;fn&&`documentMode`in document&&(Jn=document.documentMode);var Yn=fn&&`TextEvent`in window&&!Jn,Xn=fn&&(!L||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!L&&$n(e,t)?(e=vn(),_n=gn=hn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ed(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){yd(e,0)}function ur(e){if(Rt(xt(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(fn){var pr;if(fn){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,an(e)),un(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=fn&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==zt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Ed(Mr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};fn&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),Et(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},R=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=R[t];R[t++]=null;var r=R[t];R[t++]=null;var i=R[t];R[t++]=null;var a=R[t];if(R[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){R[Qr++]=e,R[Qr++]=t,R[Qr++]=n,R[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),ai(e)}function ri(e,t){return ti(e,null,null,t),ai(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ai(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,r){return new si(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ui(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)li(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=ci(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ci(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=ci(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=ci(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function hi(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,Ei=1,Di=``;function Oi(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function ki(e,t,n){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ti=e;var r=Ei;e=Di;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ei=1<<32-Ue(t)+i|n<<i|r,Di=a+e}else Ei=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Di=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null}function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ei=t.id,Di=t.overflow,Ti=e}var Ni=null,z=null,B=!1,Pi=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ut]=e,t[dt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Ni=Ni.return}}function Bi(e){if(e!==Ni)return!1;if(!B)return zi(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&z&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=uf(e)}else t===27?(t=z,Zd(e.type)?(e=lf,lf=null,z=e):z=t):z=Ni?cf(e.stateNode.nextSibling):null;return!0}function Vi(){z=Ni=null,B=!1}function Hi(){var e=Pi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Pi=null),e}function Ui(e){Pi===null?Pi=[e]:Pi.push(e)}var Wi=ue(null),Gi=null,Ki=null;function qi(e,t,n){j(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,de(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=dd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=k.S;k.S=function(e,t){eu=M(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=ue(null);function va(){var e=_a.current;return e===null?q.pooledCache:e}function ya(e,t){t===null?j(_a,_a.current):j(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ui(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=fi(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case D:return t=Da(t),f(e,t,n)}if(oe(t)||re(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Da(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Da(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Na(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Fa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&Oi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Da(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Na(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=b(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ai(e),ii(e,null,n),t}return ti(e,r,t,n),ai(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:za=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=ue(null),Qa=ue(0);function $a(e,t){e=Ul,j(Qa,e),j(Za,t),Ul=e|t.baseLanes}function eo(){j(Qa,Ul),j(Za,Za.current)}function to(){Ul=Qa.current,de(Za),de(Qa)}var no=ue(null),ro=null;function io(e){var t=e.alternate;j(lo,lo.current&1),j(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){j(lo,lo.current),j(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(j(lo,lo.current),j(no,e),ro===null&&(ro=e)):so(e)}function so(){j(lo,lo.current),j(no,no.current)}function co(e){de(no),ro===e&&(ro=null),de(lo)}var lo=ue(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function U(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?zs:Bs,go=!1,a=n(r,i),go=!1,ho&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){k.H=Rs;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&Qi(e)&&(rc=!0))}function wo(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Vs,o=t(n,r)}while(ho);return o}function To(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Eo(){var e=_o!==0;return _o=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function Ao(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),H,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((fo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Gl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(rc=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=V,a=Ao(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||fo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=jo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Wo(e){var t=ri(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),go){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,H,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(B){var n=q.formState;if(n!==null){a:{var r=V;if(B){if(z){b:{for(var i=z,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=cf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,V,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,V,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),H,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===xa?Ca:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=H;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=jo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();V.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&xo(r,H.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(V.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=jo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),go){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||fo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),V.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Cr(n,t)?n:Za.current===null?!(fo&42)||fo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),V.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Cr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ps(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ha(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,se,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ea(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ha(n);var r=Ua(t,e,n);r!==null&&(hu(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ni(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return ti(e,t,i,0),q===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===V||t!==null&&t===V}function Is(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Rs={readContext:ea,use:No,useCallback:U,useContext:U,useEffect:U,useImperativeHandle:U,useLayoutEffect:U,useInsertionEffect:U,useMemo:U,useReducer:U,useRef:U,useState:U,useDebugValue:U,useDeferredValue:U,useTransition:U,useSyncExternalStore:U,useId:U,useHostTransitionStatus:U,useFormState:U,useActionState:U,useOptimistic:U,useMemoCache:U,useCacheRefresh:U};Rs.useEffectEvent=U;var zs={readContext:ea,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(go){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(go){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,V,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=ko();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(B){var n=Di,r=Ei;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,V)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ea,use:No,useCallback:vs,useContext:ea,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),H.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),H,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:ea,use:No,useCallback:vs,useContext:ea,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return H===null?bs(n,e,t):xs(n,H.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,H,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(hu(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(hu(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(hu(t,e,n),Wa(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Zr(e)}function Js(e){console.error(e)}function Ys(e){Zr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ha(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(B)return t=no.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=Qs(e.stateNode,r,a),Ga(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(B&&s&&Ai(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return La(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(ao(t),(e=z)?(e=rf(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,z=cf(s.nextSibling),Ni=t,B=!0,Pi=null,Fi=!1,e!==null&&Mi(t,e),t=dc(t,r),t.flags|=4096;return t}return e=ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return $i(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(B&&r&&Ai(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(B&&r&&Ai(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if($i(t),t.stateNode===null){var a=oi,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=oi,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=za||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=oi,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=za||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Vi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ba()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(B){if(a?io(t):so(t),(e=z)?(e=rf(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Li(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(io(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,z=cf(c.nextSibling),Ni=t,B=!0,Pi=null,Fi=!1,e!==null&&Mi(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ui(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=ui(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return La(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(lo,o),ic(e,t,r,n),r=B?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(lo,lo.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,B&&t.flags&1048576&&ki(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)li(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Ui(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=cf(e.firstChild),Ni=t,B=!0,Pi=null,Fi=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[ut]=t,r[dt]=e,Pd(r,n,e),Ct(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&B&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Ni=t,Fi=!0,a=z,Zd(t.type)?(lf=a,z=cf(r.firstChild)):z=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=tf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Ni=t,z=cf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=nf(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Ni=t,z=null,e=!0)),e||Li(t)),null;case 13:return Sc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=q,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Oa=wa,Sa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=fe.current,Bi(t)?Ri(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=fe.current,Bi(t))Ri(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ut]=t,o[dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Li(t,!0)}else e=Bd(e).createTextNode(r),e[ut]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ut]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ut]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Ji(t.type),W(t),null;case 19:if(de(lo),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)di(n,e),n=n.sibling;return j(lo,lo.current&1|2),B&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&M()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!B)return W(t),null}else 2*M()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,n=lo.current,j(lo,a?n&1|2:n&1),B&&Oi(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(lo),null;case 4:return _e(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&de(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Bc(e,t){switch(ji(t),t.tag){case 3:Ji(oa),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:de(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&de(_a);break;case 24:Ji(oa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[dt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ut]=e,t[dt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[_t]||o[ut]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ut]=e,Ct(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ut]=e,Ct(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Jt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Jt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:k.T===null?st():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||B){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912;return e=no.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),tt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-M(),10<a)){if(yu(r,t,Jl,!Bl),Xe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},jl(t,a,d);var m=(a&62914560)===a?$l-M():(a&4194048)===a?eu-M():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ki=Gi=null,Oo(e),ja=null,Ma=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=ui(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ze(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ei(),n}function Cu(e,t){V=null,k.H=Rs,t===xa||t===Ca?(t=ka(),X=3):t===Sa?(t=ka(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,vi(t,e.current)))}function wu(){var e=no.current;return e===null?!0:(Y&4194048)===Y?ro===null:(Y&62914560)===Y||Y&536870912?e===ro:!1}function Tu(){var e=k.H;return k.H=Rs,e===null?Rs:e}function Eu(){var e=k.A;return k.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&no.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,K=r,k.H=i,k.A=a,J===null&&(q=null,Y=0,ei()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=M()+500,Su(e,t)):Vl=Ze(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ta(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ta(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ki=Gi=null,k.H=r,k.A=a,K=n,J===null?(q=null,Y=0,ei(),Wl):0}function ju(){for(;J!==null&&!Ae();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=di(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ki=Gi=null,Oo(t),ja=null,Ma=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,vi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,vi(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,nt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ot(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ot(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=vi(n,t),t=Qs(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=vi(n,e),n=$s(2),r=Ua(t,n,2),r!==null&&(ec(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>M()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=$e()),e=ri(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Xe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=M(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),ot(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Xe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,M()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Oe(Ne,ad):od()})}function dd(){if(nd===0){var e=da;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[dt]||null).action),o=r.submitter;o&&(t=(t=o[dt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Yr.length;hd++){var gd=Yr[hd];Xr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),Dt(`onMouseEnter`,[`mouseout`,`mouseover`]),Dt(`onMouseLeave`,[`mouseout`,`mouseover`]),Dt(`onPointerEnter`,[`pointerout`,`pointerover`]),Dt(`onPointerLeave`,[`pointerout`,`pointerover`]),Et(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Et(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Et(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Et(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Et(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[pt];n===void 0&&(n=t[pt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,wt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=yt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=an(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=Vn;break;case`focusin`:u=`focus`,l=Mn;break;case`focusout`:u=`blur`,l=Mn;break;case`beforeblur`:case`afterblur`:l=Mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=An;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Un;break;case Vr:case Hr:case Ur:l=Nn;break;case qr:l=Wn;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=Gn;break;case`copy`:case`cut`:case`paste`:l=Pn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Hn;break;case`toggle`:case`beforetoggle`:l=Kn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(yt(u)||u[ft]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?yt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=An,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Hn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:xt(l),h=u==null?c:xt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,yt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?xt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c))if(fr)v=xr;else{v=yr;var y=vr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Qt(r.elementType)&&(v=dr):v=br;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?xt(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(L)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Fn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Fn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=dn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Nt(e,`class`,r);break;case`tabIndex`:Nt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Nt(e,n,r);break;case`style`:Zt(e,r,o);break;case`data`:if(t!==`object`){Nt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Mt(e,`popover`,r);break;case`xlinkActuate`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Pt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Pt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Mt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,Mt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Zt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Tt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[dt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Mt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ut(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Ht(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[_t]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),vt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[_t])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=bt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ct(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ct(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=St(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ct(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=St(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ct(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=St(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=St(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=St(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Vt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ct(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Vt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,Ct(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ct(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ct(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ct(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ct(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ct(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[_t]||a[ut]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ct(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ct(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ci(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function tp(e){return e?(e=oi,e):oi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(hu(n,e,t),Wa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=P(t);var n=ri(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=bt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=N(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=M()+500,id(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=yt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=yt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=bt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=bt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[dt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[dt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ft]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ft]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/`+e},x={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=b(t,n),t in x)return;x[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:y,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:O(t)}return ie(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||D(),mask:i}}function O({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:O(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function oe(e,t,n=`/`){return k(e,t,n,!1)}function k(e,t,n,r,i){let a=Ce((typeof t==`string`?re(t):t).pathname||`/`,n);if(a==null)return null;let o=i??se(e),s=null,c=Se(a);for(let e=0;s==null&&e<o.length;++e)s=ye(o[e],c,r);return s}function A(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function se(e){let t=ce(e);return ue(t),t}function ce(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=M([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ce(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:_e(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of le(e.path))a(e,t,!0,n)}),t}function le(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=le(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ve(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,j=3,fe=2,pe=1,me=10,he=-2,ge=e=>e===`*`;function _e(e,t){let n=e.split(`/`),r=n.length;return n.some(ge)&&(r+=he),t&&(r+=fe),n.filter(e=>!ge(e)).reduce((e,t)=>e+(de.test(t)?j:t===``?pe:me),r)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ye(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:M([a,u.pathname]),pathnameBase:Ne(M([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=M([a,u.pathnameBase]))}return o}function be(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function xe(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Te(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e,a;return n?(n=je(n),a=n.startsWith(`/`)?Ee(n.substring(1),`/`):Ee(n,t)):a=t,{pathname:a,search:Pe(r),hash:Fe(i)}}function Ee(e,t){let n=Me(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function De(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ke(e){let t=Oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ae(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),De(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),De(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),De(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Te(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var je=e=>e.replace(/\/\/+/g,`/`),M=e=>je(e.join(`/`)),Me=e=>e.replace(/\/+$/,``),Ne=e=>Me(e).replace(/^\/*/,`/`),Pe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Fe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ie=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Le(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Re(e){return M(e.map(e=>e.route.path).filter(Boolean))||`/`}var ze=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Be(e,t){let n=e;if(typeof n!=`string`||!we.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ze)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ce(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ve=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ve);var He=[`GET`,...Ve];new Set(He);var Ue=_.createContext(null);Ue.displayName=`DataRouter`;var We=_.createContext(null);We.displayName=`DataRouterState`;var Ge=_.createContext(!1);function Ke(){return _.useContext(Ge)}var qe=_.createContext({isTransitioning:!1});qe.displayName=`ViewTransition`;var Je=_.createContext(new Map);Je.displayName=`Fetchers`;var Ye=_.createContext(null);Ye.displayName=`Await`;var N=_.createContext(null);N.displayName=`Navigation`;var Xe=_.createContext(null);Xe.displayName=`Location`;var Ze=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ze.displayName=`Route`;var Qe=_.createContext(null);Qe.displayName=`RouteError`;var $e=`REACT_ROUTER_ERROR`,et=`REDIRECT`,tt=`ROUTE_ERROR_RESPONSE`;function nt(e){if(e.startsWith(`${$e}:${et}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function rt(e){if(e.startsWith(`${$e}:${tt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ie(t.status,t.statusText,t.data)}catch{}}function it(e,{relative:t}={}){T(at(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(N),{hash:i,pathname:a,search:o}=pt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:M([n,a])),r.createHref({pathname:s,search:o,hash:i})}function at(){return _.useContext(Xe)!=null}function P(){return T(at(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Xe).location}var ot=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function st(e){_.useContext(N).static||_.useLayoutEffect(e)}function ct(){let{isDataRoute:e}=_.useContext(Ze);return e?Mt():lt()}function lt(){T(at(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Ue),{basename:t,navigator:n}=_.useContext(N),{matches:r}=_.useContext(Ze),{pathname:i}=P(),a=JSON.stringify(ke(r)),o=_.useRef(!1);return st(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(E(o.current,ot),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ae(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:M([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var ut=_.createContext(null);function dt(e){let t=_.useContext(Ze).outlet;return _.useMemo(()=>t&&_.createElement(ut.Provider,{value:e},t),[t,e])}function ft(){let{matches:e}=_.useContext(Ze);return e[e.length-1]?.params??{}}function pt(e,{relative:t}={}){let{matches:n}=_.useContext(Ze),{pathname:r}=P(),i=JSON.stringify(ke(n));return _.useMemo(()=>Ae(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function mt(e,t){return ht(e,t)}function ht(e,t,n){T(at(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(N),{matches:i}=_.useContext(Ze),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Pt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=P(),d;if(t){let e=typeof t==`string`?re(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=St(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:M([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:M([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Xe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function gt(){let e=jt(),t=Le(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var _t=_.createElement(gt,null),vt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=rt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(Ze.Provider,{value:this.props.routeContext},_.createElement(Qe.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(bt,{error:e},t):t}};vt.contextType=Ge;var yt=new WeakMap;function bt({children:e,error:t}){let{basename:n}=_.useContext(N);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=nt(t.digest);if(e){let r=yt.get(t);if(r)throw r;let i=Be(e.location,n);if(ze&&!yt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw yt.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function xt({routeContext:e,match:t,children:n}){let r=_.useContext(Ue);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Ze.Provider,{value:e},n)}function St(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Re(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||_t,o&&(s<0&&c===0?(Pt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(xt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(vt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wt(e){let t=_.useContext(Ue);return T(t,Ct(e)),t}function Tt(e){let t=_.useContext(We);return T(t,Ct(e)),t}function Et(e){let t=_.useContext(Ze);return T(t,Ct(e)),t}function Dt(e){let t=Et(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return Dt(`useRouteId`)}function kt(){return Tt(`useNavigation`).navigation}function At(){let{matches:e,loaderData:t}=Tt(`useMatches`);return _.useMemo(()=>e.map(e=>A(e,t)),[e,t])}function jt(){let e=_.useContext(Qe),t=Tt(`useRouteError`),n=Dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Mt(){let{router:e}=wt(`useNavigate`),t=Dt(`useNavigate`),n=_.useRef(!1);return st(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{E(n.current,ot),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Nt={};function Pt(e,t,n){!t&&!Nt[e]&&(Nt[e]=!0,E(!1,n))}_.memo(Ft);function Ft({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return ht(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function It({to:e,replace:t,state:n,relative:r}){T(at(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=_.useContext(N);E(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=_.useContext(Ze),{pathname:o}=P(),s=ct(),c=Ae(e,ke(a),o,r===`path`),l=JSON.stringify(c);return _.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Lt(e){return dt(e.context)}function F(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Rt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!at(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=re(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Ce(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(N.Provider,{value:c},_.createElement(Xe.Provider,{children:t,value:h}))}function zt({children:e,location:t}){return mt(Bt(e),t)}_.Component;function Bt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Bt(e.props.children,i));return}T(e.type===F,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Bt(e.props.children,i)),n.push(a)}),n}var Vt=`get`,Ht=`application/x-www-form-urlencoded`;function Ut(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Wt(e){return Ut(e)&&e.tagName.toLowerCase()===`button`}function Gt(e){return Ut(e)&&e.tagName.toLowerCase()===`form`}function Kt(e){return Ut(e)&&e.tagName.toLowerCase()===`input`}function qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jt(e,t){return e.button===0&&(!t||t===`_self`)&&!qt(e)}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Gt(e)){let o=e.getAttribute(`action`);r=o?Ce(o,t):null,n=e.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`enctype`))||Ht,a=new FormData(e)}else if(Wt(e)||Kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ce(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Ht,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ut(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Vt,r=null,i=Ht,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ce(i.pathname,t)===`/`?i.pathname=`${Me(t)}/_root.${r}`:i.pathname=`${Me(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=_.useContext(Ue);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=_.useContext(We);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=_.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=_.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=_.useContext(_n),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=Ke(),{router:r}=hn(),i=_.useMemo(()=>oe(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?_.createElement(Cn,{page:e,matches:i,...t}):_.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=P(),{future:i}=vn(),{basename:a}=hn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=P(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=_.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.15.0`)}catch{}function Dn({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Rt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function On({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Rt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(N),y=typeof l==`string`&&kn.test(l),b=Be(l,h);l=b.to;let x=it(l,{relative:r}),S=P(),C=null;if(o){let e=Ae(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:M([h,e.pathname])),C=g.createHref(e)}let[w,ee,T]=yn(n,p),E=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function D(t){e&&e(t),t.defaultPrevented||E(t)}let te=!(b.isExternal||i),ne=_.createElement(`a`,{...p,...T,href:(te?C:void 0)||b.absoluteURL||x,onClick:te?D:e,ref:Tn(m,ee),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,ne,_.createElement(xn,{page:x})):ne});I.displayName=`Link`;var An=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=pt(a,{relative:c.relative}),d=P(),f=_.useContext(We),{navigator:p,basename:m}=_.useContext(N),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ce(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,ee;ee=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(C):i;return _.createElement(I,{...c,"aria-current":w,className:ee,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(C):s)});An.displayName=`NavLink`;var jn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Vt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(N),g=zn(),v=Bn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&kn.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});jn.displayName=`Form`;function Mn({getKey:e,storageKey:t,...n}){let r=_.useContext(_n),{basename:i}=_.useContext(N),a=P(),o=At();Wn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Un(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Vn))}, ${nn(JSON.stringify(s))})`}})}Mn.displayName=`ScrollRestoration`;function Nn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pn(e){let t=_.useContext(Ue);return T(t,Nn(e)),t}function Fn(e){let t=_.useContext(We);return T(t,Nn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ct(),d=P(),f=pt(e,{relative:o});return _.useCallback(p=>{if(Jt(p,t)){p.preventDefault();let t=n===void 0?O(d)===O(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Pn(`useSubmit`),{basename:t}=_.useContext(N),n=Ot(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||Rn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=_.useContext(N),r=_.useContext(Ze);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...pt(e||`.`,{relative:t})},o=P();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:M([n,a.pathname])),O(a)}var Vn=`react-router-scroll-positions`,Hn={};function Un(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ce(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Wn({getKey:e,storageKey:t}={}){let{router:n}=Pn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Fn(`useScrollRestoration`),{basename:a}=_.useContext(N),o=P(),s=At(),c=kt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Gn(_.useCallback(()=>{if(c.state===`idle`){let t=Un(o,s,a,e);Hn[t]=window.scrollY}try{sessionStorage.setItem(t||Vn,JSON.stringify(Hn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Vn);e&&(Hn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Hn,()=>window.scrollY,e?(t,n)=>Un(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Gn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Kn(e,{relative:t}={}){let n=_.useContext(qe);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Pn(`useViewTransitionState`),i=pt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ce(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ce(n.nextLocation.pathname,r)||n.nextLocation.pathname;return be(i.pathname,o)!=null||be(i.pathname,a)!=null}var qn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),L=o(((e,t)=>{t.exports=qn()}))(),Jn=()=>{let e=P().pathname.toLowerCase();return e===`/signin`||e===`/register`?null:(0,L.jsx)(`nav`,{className:`navbar`,children:(0,L.jsxs)(`div`,{className:`navbar-container`,children:[(0,L.jsx)(`div`,{className:`navbar-logo`,children:(0,L.jsx)(I,{to:`/`,className:`logo-icon`,children:(0,L.jsx)(`img`,{src:`/img/Group2.png`,className:`logo-img`,alt:`Logo`})})}),(0,L.jsxs)(`ul`,{className:`navbar-menu`,children:[(0,L.jsx)(`li`,{className:`menu-item ${e===`/`?`active`:``}`,children:(0,L.jsx)(I,{to:`/`,children:`Home`})}),(0,L.jsx)(`li`,{className:`menu-item ${e===`/news`?`active`:``}`,children:(0,L.jsx)(I,{to:`/news`,children:`News`})}),(0,L.jsx)(`li`,{className:`menu-item ${e===`/trending`?`active`:``}`,children:(0,L.jsx)(I,{to:`/trending`,children:`Trending`})}),(0,L.jsx)(`li`,{className:`menu-item ${e===`/saved`?`active`:``}`,children:(0,L.jsx)(I,{to:`/saved`,children:`Saved`})})]}),(0,L.jsxs)(`div`,{className:`navbar-actions`,children:[(0,L.jsxs)(`div`,{className:`search-container`,children:[(0,L.jsx)(`input`,{type:`text`,placeholder:`Search...`,className:`search-input`}),(0,L.jsx)(`button`,{type:`button`,className:`search-icon-wrapper`,style:{cursor:`pointer`,border:`none`,background:`none`,display:`flex`,alignItems:`center`},children:(0,L.jsx)(`img`,{src:`/img/search.png`,className:`search-icon-img icon-black`,alt:`search`})})]}),(0,L.jsxs)(`div`,{className:`icon-group`,children:[(0,L.jsx)(I,{to:`/notifications`,style:{display:`flex`},children:(0,L.jsx)(`button`,{className:`icon-btn`,children:(0,L.jsx)(`img`,{src:`/img/notif.png`,className:`icon-img`,alt:`notif`})})}),(0,L.jsx)(I,{to:`/signin`,style:{display:`flex`},children:(0,L.jsx)(`button`,{className:`icon-btn profile-btn`,children:(0,L.jsx)(`img`,{src:`/img/acc.png`,className:`icon-img account-img`,alt:`account`})})})]})]})]})})},Yn=()=>{let e=P().pathname.toLowerCase();return e.includes(`register`)||e.includes(`signin`)||e.includes(`dashboard`)?null:(0,L.jsx)(`footer`,{className:`footer-container-custom`,children:(0,L.jsxs)(`div`,{className:`footer-content-wrapper`,children:[(0,L.jsxs)(`div`,{className:`footer-logo-box`,children:[(0,L.jsx)(`img`,{src:`/img/logoregist.png`,className:`footer-icon-final`,alt:`Icon`}),(0,L.jsx)(`img`,{src:`/img/Group 2.png`,className:`footer-text-final`,alt:`Paham.ID`})]}),(0,L.jsxs)(`div`,{className:`footer-links-row`,children:[(0,L.jsx)(I,{to:`/about`,children:`ABOUT US`}),(0,L.jsx)(I,{to:`/privacy`,children:`PRIVACY POLICY`}),(0,L.jsx)(I,{to:`/contact`,children:`CONTACT`})]}),(0,L.jsx)(`p`,{className:`footer-copyright-text`,children:`© 2026 THE EDITORIAL AUTHORITY. ALL RIGHTS RESERVED.`})]})})},Xn=`/api`,Zn=Xn.replace(/\/api\/?$/,``);function Qn(){return localStorage.getItem(`access`)||localStorage.getItem(`accessToken`)||localStorage.getItem(`pahamAccessToken`)||``}function $n(e,t={}){let n=globalThis.location?.origin||`http://127.0.0.1:8000`,r=new URL(`${Xn}${e}`,n);return Object.entries(t).forEach(([e,t])=>{t!=null&&t!==``&&r.searchParams.set(e,t)}),r.toString()}async function er(e,{params:t,auth:n=!1,...r}={}){let i=new Headers(r.headers||{}),a=Qn();if(i.has(`Accept`)||i.set(`Accept`,`application/json`),n&&!a)throw Error(`Silakan login terlebih dahulu.`);!i.has(`Content-Type`)&&r.body&&i.set(`Content-Type`,`application/json`),n&&a&&i.set(`Authorization`,`Bearer ${a}`);let o=await fetch($n(e,t),{...r,headers:i});if(o.status===401||o.status===403)throw Error(`Tidak memiliki akses.`);if(!o.ok)throw Error(`API gagal: ${o.status}`);return o.status===204?null:o.json()}function tr(e){return Array.isArray(e)?e:Array.isArray(e?.results)?e.results:[]}function nr(e){return e?/^https?:\/\//i.test(e)?e:`${Zn}${e.startsWith(`/`)?e:`/${e}`}`:``}function rr(e){return e?new Intl.DateTimeFormat(`id-ID`,{day:`2-digit`,month:`short`,year:`numeric`}).format(new Date(e)):``}function ir(e){if(!e)return``;let t=Date.now()-new Date(e).getTime(),n=Math.max(1,Math.round(t/36e5));return n<24?`${n} jam yang lalu`:`${Math.round(n/24)} hari yang lalu`}function ar(e){return{id:e.id_komentar,author:e.user_detail?.nama_lengkap||`User`,avatar:nr(e.user_detail?.foto_profil),text:e.isi_komentar,time:ir(e.tgl_komentar)}}function or(e){let t=e.kategori_detail?.nama_kategori||`General`,n=nr(e.gambar_url),r=Array.isArray(e.komentar)?e.komentar.map(ar):[],i=e.reaksi_summary||{},a=Object.values(i).reduce((e,t)=>e+Number(t||0),0);return{id:e.id_berita,apiId:e.id_berita,title:e.judul,heroTitle:e.judul,category:t,image:n,thumbnail:n,cover:n,author:e.penulis_detail||`Redaksi Paham.ID`,authorImage:``,date:rr(e.tanggal_publikasi||e.created_at),timeAgo:ir(e.tanggal_publikasi||e.created_at),readTime:e.read_time||`2 min read`,description:e.ringkasan||``,excerpt:e.ringkasan||``,summary:e.ringkasan||``,content:e.isi_lengkap||``,status:e.status,reads:Number(e.view_count||0),likes:a,comments:r.length,commentItems:r,reactions:{clap:Number(i.wow||0),light:Number(i.idea||0),think:Number(i.thinking||0),heart:Number(i.love||0),bookmark:Number(e.share_count||0)}}}async function sr(e={}){return tr(await er(`/berita/`,{params:e})).map(or)}async function cr(e,t){let n=await er(`/auth/login/`,{method:`POST`,body:JSON.stringify({username:e,password:t})});return localStorage.setItem(`access`,n.access),localStorage.setItem(`refresh`,n.refresh),localStorage.setItem(`pahamUser`,JSON.stringify({username:n.username,email:n.email,role:n.role,nama_lengkap:n.nama_lengkap,foto_profil:n.foto_profil||``})),n}async function lr(e){return er(`/auth/register/`,{method:`POST`,body:JSON.stringify(e)})}async function ur(e){return or(await er(`/berita/${e}/`))}async function dr(){return Qn()?tr(await er(`/bookmark/`,{auth:!0})).map(e=>({id:e.id_bookmark,archived:e.is_archived,beritaId:e.berita,...or(e.berita_detail)})):[]}async function fr(e){return er(`/bookmark/${e}/`,{method:`DELETE`,auth:!0})}async function pr(e,t){return er(`/bookmark/${e}/`,{method:`PATCH`,auth:!0,body:JSON.stringify(t)})}async function mr(){return Qn()?tr(await er(`/notifikasi/`,{auth:!0})).map(e=>({id:e.id_notifikasi,title:e.judul,excerpt:e.pesan,unread:!e.is_read,time:ir(e.tgl_notifikasi),type:e.tipe})):[]}function hr(e={}){let[t,n]=(0,_.useState)([]),[r,i]=(0,_.useState)(!0),[a,o]=(0,_.useState)(``);return(0,_.useEffect)(()=>{i(!0),o(``);let t=window.setTimeout(()=>{n([]),o(`Koneksi API terlalu lama merespons.`),i(!1)},1e4);return(async()=>{try{let r=await sr(e);window.clearTimeout(t),n(r),o(``)}catch(e){window.clearTimeout(t),n([]),o(e.message||`Gagal memuat berita.`)}finally{i(!1)}})(),()=>window.clearTimeout(t)},[JSON.stringify(e)]),{articles:t,loading:r,error:a}}function gr(e){let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!0),[a,o]=(0,_.useState)(``);return(0,_.useEffect)(()=>{if(!e)return;let t=!0;return i(!0),ur(e).then(e=>{t&&(n(e),o(``))}).catch(e=>{t&&(n(null),o(e.message||`Artikel tidak ditemukan.`))}).finally(()=>{t&&i(!1)}),()=>{t=!1}},[e]),{article:t,loading:r,error:a}}function _r(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{let e=!0;return dr().then(n=>{e&&t(n)}).finally(()=>{e&&r(!1)}),()=>{e=!1}},[]),{bookmarks:e,setBookmarks:t,loading:n}}function vr(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{let e=!0;return mr().then(n=>{e&&t(n)}).finally(()=>{e&&r(!1)}),()=>{e=!1}},[]),{notifications:e,loading:n}}var yr=`https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1200&q=80`;function br(){let{articles:e}=hr(),t=e[0],n=e[1],r=e[2];if(!t)return null;let i=e=>e?.image||e?.thumbnail||e?.cover||yr,a=(e,t)=>e?.heroTitle||e?.title||t;return(0,L.jsx)(`section`,{className:`main-hero-section`,children:(0,L.jsxs)(`div`,{className:`main-hero-grid`,children:[(0,L.jsx)(I,{to:`/news/${t.id}`,className:`main-hero-link`,children:(0,L.jsx)(`article`,{className:`main-hero-card`,style:{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.16) 38%, rgba(0,0,0,0.92) 100%), url("${i(t)}")`},children:(0,L.jsxs)(`div`,{className:`main-hero-content`,children:[(0,L.jsx)(`span`,{className:`main-special-badge`,children:`SPECIAL REPORT`}),(0,L.jsx)(`h1`,{className:`main-hero-title`,children:a(t,`PEMERINTAH TETAPKAN TARGET PENGURANGAN EMISI KARBON`)}),(0,L.jsx)(`p`,{className:`main-hero-desc`,children:(e=>e?.excerpt||e?.description||`Pemerintah mengumumkan target ambisius untuk mengurangi emisi karbon sebesar 45% pada tahun 2030.`)(t)}),(0,L.jsxs)(`div`,{className:`main-hero-footer`,children:[(0,L.jsx)(`span`,{className:`main-read-button`,children:`Baca Selengkapnya`}),(0,L.jsxs)(`span`,{className:`main-hero-meta`,children:[t.readTime||`4 MIN READ`,` · BY`,` `,(t.author||`REDAKSI PAHAM.ID`).toUpperCase()]})]})]})})}),(0,L.jsxs)(`div`,{className:`main-side-grid`,children:[n&&(0,L.jsx)(I,{to:`/news/${n.id}`,className:`main-side-link`,children:(0,L.jsx)(`article`,{className:`main-side-card`,style:{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.82) 100%), url("${i(n)}")`},children:(0,L.jsxs)(`div`,{className:`main-side-content`,children:[(0,L.jsx)(`span`,{className:`main-side-badge`,children:n.category||`TECHNOLOGY`}),(0,L.jsx)(`h3`,{children:a(n,`Teknologi AI Terbaru Mengubah Industri Kesehatan`)})]})})}),r&&(0,L.jsx)(I,{to:`/news/${r.id}`,className:`main-side-link`,children:(0,L.jsx)(`article`,{className:`main-side-card`,style:{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.82) 100%), url("${i(r)}")`},children:(0,L.jsxs)(`div`,{className:`main-side-content`,children:[(0,L.jsx)(`span`,{className:`main-side-badge`,children:r.category||`POLITICS`}),(0,L.jsx)(`h3`,{children:a(r,`Parlemen Menyetujui Undang-Undang Perlindungan Privasi Data`)})]})})})]})]})})}function xr(){let{articles:e}=hr(),t=e.slice().sort((e,t)=>Number(t.reads||0)-Number(e.reads||0)).slice(0,3);return(0,L.jsxs)(`aside`,{className:`trending-sidebar`,children:[(0,L.jsxs)(`div`,{className:`sidebar-section popular-box`,children:[(0,L.jsx)(`h4`,{className:`sidebar-title`,children:`SERING DIBACA`}),(0,L.jsx)(`div`,{className:`popular-list`,children:t.map(e=>(0,L.jsxs)(`div`,{className:`popular-item`,style:{cursor:`pointer`},children:[(0,L.jsx)(`div`,{className:`pop-circle`}),(0,L.jsxs)(`div`,{className:`pop-info`,children:[(0,L.jsxs)(`span`,{className:`reads`,children:[Number(e.reads||0)>=1e3?`${(Number(e.reads||0)/1e3).toFixed(1)}K`:Number(e.reads||0),` `,`READS`]}),(0,L.jsx)(I,{to:`/news/${e.id}`,style:{textDecoration:`none`,color:`inherit`},onClick:e=>e.stopPropagation(),children:(0,L.jsx)(`p`,{children:e.title})})]})]},e.id))})]}),(0,L.jsxs)(`div`,{className:`sidebar-section social-box`,children:[(0,L.jsx)(`h4`,{className:`sidebar-title`,children:`STAY CONNECTED`}),(0,L.jsxs)(`div`,{className:`social-icons`,style:{display:`flex`,gap:`15px`,marginTop:`15px`},children:[(0,L.jsx)(`div`,{className:`icon-item`,children:(0,L.jsx)(`img`,{src:`/img/mdi_at.png`,alt:`At`,width:24,height:24})}),(0,L.jsx)(`div`,{className:`icon-item`,children:(0,L.jsx)(`img`,{src:`/img/ri_rss-fill.png`,alt:`RSS`,width:24,height:24})}),(0,L.jsx)(`div`,{className:`icon-item`,children:(0,L.jsx)(`img`,{src:`/img/share.png`,alt:`Share`,width:24,height:24})}),(0,L.jsx)(`div`,{className:`icon-item`,children:(0,L.jsx)(`img`,{src:`/img/comment.png`,alt:`Chat`,width:24,height:24})})]})]})]})}var Sr=`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`;function Cr(){let{articles:e}=hr(),t=e.slice(3,7),n=e=>e?.image||e?.thumbnail||e?.cover||Sr;return(0,L.jsx)(`section`,{className:`main-trending-section`,children:(0,L.jsxs)(`div`,{className:`main-trending-layout`,children:[(0,L.jsxs)(`div`,{className:`main-trending-left`,children:[(0,L.jsxs)(`div`,{className:`main-trending-header`,children:[(0,L.jsx)(`h2`,{className:`main-trending-title`,children:`Trending News`}),(0,L.jsx)(`div`,{className:`main-trending-line`}),(0,L.jsx)(I,{to:`/trending`,className:`main-view-all`,children:`VIEW ALL`})]}),(0,L.jsx)(`div`,{className:`main-trending-grid`,children:t.map(e=>(0,L.jsx)(I,{to:`/news/${e.id}`,className:`main-trending-card-link`,children:(0,L.jsxs)(`article`,{className:`main-trending-card`,children:[(0,L.jsx)(`img`,{src:n(e),alt:e.title,className:`main-trending-card-img`,onError:e=>{e.currentTarget.src=Sr}}),(0,L.jsx)(`span`,{className:`main-trending-category`,children:e.category||`ENVIRONMENT`}),(0,L.jsx)(`h3`,{className:`main-trending-card-title`,children:e.title}),(0,L.jsx)(`p`,{className:`main-trending-card-desc`,children:e.description||e.excerpt||`Mengulas peran penting hutan lintang tinggi dalam siklus karbon global seiring meningkatnya suhu bumi.`}),(0,L.jsxs)(`div`,{className:`main-trending-meta`,children:[(0,L.jsx)(`span`,{children:e.readTime||`2 MIN READ`}),(0,L.jsx)(`span`,{children:`·`}),(0,L.jsx)(`span`,{children:e.timeAgo||`2 hours ago`})]})]})},e.id))})]}),(0,L.jsx)(`aside`,{className:`main-trending-right`,children:(0,L.jsx)(xr,{})})]})})}function wr(){return(0,L.jsx)(`section`,{className:`newsletter-wrapper`,children:(0,L.jsxs)(`div`,{className:`newsletter-card`,children:[(0,L.jsx)(`div`,{className:`newsletter-icon`,children:(0,L.jsx)(`img`,{src:`/img/mail.png`,alt:`Newsletter`})}),(0,L.jsx)(`h2`,{className:`newsletter-title`,children:`The Monday Briefing`}),(0,L.jsx)(`p`,{className:`newsletter-desc`,children:`Join 150,000+ subscribers who start their week with our curated analysis of global affairs, culture, and innovation.`}),(0,L.jsx)(I,{to:`/register`,children:(0,L.jsx)(`button`,{className:`btn-signup`,children:`SIGN UP`})})]})})}function Tr(){return(0,L.jsxs)(`main`,{className:`homepage`,children:[(0,L.jsx)(br,{}),(0,L.jsx)(`section`,{className:`homepage-content`,children:(0,L.jsx)(Cr,{})}),(0,L.jsx)(`section`,{className:`homepage-newsletter`,children:(0,L.jsx)(wr,{})})]})}var Er=[`ALL`,`ENVIRONMENT`,`POLITICS`,`TECHNOLOGY`,`SOCIAL`,`ECONOMICS`,`EDUCATION`],Dr=`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`,Or=`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@500;600;700;800&display=swap");

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    background: #f5f8fc;
  }

  .news-page-wrapper,
  .news-page-wrapper * {
    box-sizing: border-box;
  }

  .news-page-wrapper {
    width: 100%;
    background: #f5f8fc;
    color: #111827;
    font-family: "Inter", sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }

  .news-page-wrapper a {
    color: inherit;
    text-decoration: none;
  }

  .category-nav-wrapper {
    width: 100%;
    background: #f5f8fc;
    border-top: 1px solid #d7dde6;
    border-bottom: 1px solid #cfd6df;
    margin: 0;
  }

  .category-nav-content {
    width: min(1180px, calc(100% - 72px));
    height: 46px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 22px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .category-nav-content::-webkit-scrollbar {
    display: none;
  }

  .sections-label {
    color: #7b8796;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    white-space: nowrap;
  }

  .category-link {
    appearance: none;
    -webkit-appearance: none;
    border: 0;
    background: transparent;
    padding: 0 0 8px;
    color: #6b7280;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    box-shadow: none;
  }

  .category-link.active {
    color: #061e34;
  }

  .category-link.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    height: 2px;
    background: #061e34;
  }

  .news-container {
    width: min(1180px, calc(100% - 72px));
    margin: 0 auto !important;
    padding: 58px 0 42px !important;
    background: #f5f8fc;
  }

  .featured-article {
    margin-bottom: 72px;
  }

  .featured-link-wrapper {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 42px;
    color: inherit;
    text-decoration: none;
    align-items: center;
  }

  .featured-image-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 28px;
    box-shadow: 0 18px 35px rgba(15, 23, 42, 0.1);
  }

  .headline-img-large {
    width: 100%;
    height: 360px;
    object-fit: cover;
    display: block;
  }

  .featured-content .category-tag {
    display: inline-block;
    margin-bottom: 14px;
    color: #004da3;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .featured-content h1 {
    margin: 0 0 18px;
    color: #111827;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 44px;
    line-height: 1.08;
    font-weight: 500;
    letter-spacing: -0.035em;
  }

  .featured-content p {
    margin: 0 0 26px;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.75;
  }

  .author-meta {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .author-avatar {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    object-fit: cover;
  }

  .meta-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .author-name {
    color: #111827;
    font-size: 12px;
    font-weight: 800;
  }

  .post-date {
    margin: 0 !important;
    color: #6b7280 !important;
    font-size: 10px !important;
    line-height: 1.2 !important;
    text-transform: uppercase;
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 58px 44px;
  }

  .article-card {
    min-width: 0;
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .card-cat {
    color: #061e34 !important;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-transform: capitalize;
  }

  .lihat-semua {
    appearance: none;
    -webkit-appearance: none;
    border: 0 !important;
    outline: 0 !important;
    background: transparent !important;
    padding: 0;
    margin: 0;
    color: #0072df;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: none !important;
  }

  .lihat-semua:hover {
    text-decoration: underline;
  }

  .article-card-link {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  .article-card-link:visited,
  .article-card-link:hover,
  .article-card-link:active {
    color: inherit;
    text-decoration: none;
  }

  .article-img-standard {
    width: 100%;
    height: 210px;
    object-fit: cover;
    display: block;
    border-radius: 18px;
    background: #dbe3ed;
  }

  .article-card-title {
    margin: 28px 0 16px;
    color: #111827 !important;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 26px;
    line-height: 1.16;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .article-card-desc {
    margin: 0;
    color: #374151;
    font-size: 15px;
    line-height: 1.65;
  }

  .news-list-vertical {
    width: 100%;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }

  .category-list-item {
    border-bottom: 1px solid #d8dee7;
    padding: 0 0 42px;
    margin-bottom: 42px;
  }

  .category-list-item:last-of-type {
    margin-bottom: 0;
  }

  .list-item-link {
    display: grid;
    grid-template-columns: 292px minmax(0, 1fr);
    gap: 32px;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }

  .list-item-link:visited,
  .list-item-link:hover,
  .list-item-link:active {
    color: inherit;
    text-decoration: none;
  }

  .list-image-container {
    width: 292px;
    height: 210px;
    overflow: hidden;
    background: #dbe3ed;
  }

  .list-image-container .article-img-standard {
    width: 292px;
    height: 210px;
    border-radius: 0;
  }

  .list-content-container {
    min-width: 0;
  }

  .list-date {
    display: block;
    margin-bottom: 12px;
    color: #0f4c81;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .list-title {
    margin: 0 0 14px;
    color: #171b22;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 34px;
    line-height: 1.08;
    font-weight: 500;
    letter-spacing: -0.035em;
  }

  .list-desc {
    max-width: 760px;
    margin: 0 0 18px;
    color: #536173;
    font-size: 14px;
    line-height: 1.65;
    font-weight: 500;
  }

  .list-footer-meta {
    display: flex;
    align-items: center;
    gap: 18px;
    color: #111827;
    font-size: 10px;
    font-weight: 700;
  }

  .list-footer-meta .author-name,
  .list-footer-meta .read-time {
    color: #111827;
    font-size: 10px;
    font-weight: 700;
  }

  .pagination-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 9px;
    padding-top: 34px;
    padding-bottom: 70px;
    margin-bottom: 0;
  }

  .page-number,
  .btn-next {
    height: 34px;
    min-width: 34px;
    border: 1px solid #ccd4df;
    background: #ffffff;
    color: #6b7280;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
  }

  .page-number.active {
    background: #10275b;
    color: #ffffff;
    border-color: #10275b;
  }

  .page-number:disabled,
  .btn-next:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .page-dots {
    color: #6b7280;
    font-size: 12px;
    padding: 0 4px;
  }

  .btn-next {
    min-width: 118px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .newsletter-wrapper {
    margin-top: 92px;
    margin-bottom: 0 !important;
  }

  .news-page-wrapper + footer,
  .news-page-wrapper + .footer,
  .news-page-wrapper + .site-footer,
  .news-page-wrapper ~ footer,
  .news-page-wrapper ~ .footer,
  .news-page-wrapper ~ .site-footer {
    margin-top: 0 !important;
  }

  footer,
  .footer,
  .site-footer {
    margin-top: 0 !important;
  }

  @media (max-width: 1024px) {
    .category-nav-content,
    .news-container {
      width: calc(100% - 44px);
    }

    .featured-link-wrapper {
      grid-template-columns: 1fr;
    }

    .headline-img-large {
      height: 320px;
    }

    .articles-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .list-item-link {
      grid-template-columns: 250px minmax(0, 1fr);
      gap: 26px;
    }

    .list-image-container,
    .list-image-container .article-img-standard {
      width: 250px;
      height: 180px;
    }

    .list-title {
      font-size: 28px;
    }
  }

  @media (max-width: 720px) {
    .category-nav-content,
    .news-container {
      width: calc(100% - 28px);
    }

    .news-container {
      padding-top: 38px !important;
      padding-bottom: 32px !important;
    }

    .articles-grid {
      grid-template-columns: 1fr;
    }

    .article-img-standard {
      height: 220px;
    }

    .list-item-link {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .list-image-container,
    .list-image-container .article-img-standard {
      width: 100%;
      height: 220px;
    }

    .list-title {
      font-size: 25px;
    }

    .pagination-container {
      justify-content: center;
      padding-bottom: 56px;
      flex-wrap: wrap;
    }
  }
`;function kr(){let{articles:e,loading:t,error:n}=hr(),[r,i]=(0,_.useState)(`ALL`),[a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(1),c=r===`ALL`,l=(0,_.useMemo)(()=>c?e:e.filter(e=>e.category?.toUpperCase()===r),[r,c,e]),u=Math.max(1,Math.ceil(l.length/4)),d=(0,_.useMemo)(()=>{let e=(o-1)*4,t=e+4;return l.slice(e,t)},[l,o]),f=l[0],p=l.slice(1,7),m=e=>{i(e),s(1)},h=e=>{e<1||e>u||(s(e),window.scrollTo({top:0,behavior:`smooth`}))},g=e=>{e.currentTarget.src=Dr};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:Or}),(0,L.jsxs)(`div`,{className:`news-page-wrapper`,children:[(0,L.jsx)(`nav`,{className:`category-nav-wrapper`,children:(0,L.jsxs)(`div`,{className:`category-nav-content`,children:[(0,L.jsx)(`span`,{className:`sections-label`,children:`SECTIONS:`}),Er.map(e=>(0,L.jsx)(`button`,{type:`button`,onClick:()=>m(e),className:`category-link ${r===e?`active`:``}`,children:e},e))]})}),(0,L.jsxs)(`main`,{className:`news-container`,children:[t&&(0,L.jsx)(`div`,{className:`trending-empty`,children:`Memuat berita...`}),!t&&n&&(0,L.jsx)(`div`,{className:`trending-empty`,children:n}),!t&&!n&&l.length===0&&(0,L.jsx)(`div`,{className:`trending-empty`,children:`Belum ada berita dari database.`}),!t&&!n&&l.length>0&&c?(0,L.jsxs)(L.Fragment,{children:[f&&(0,L.jsx)(`section`,{className:`featured-article`,children:(0,L.jsxs)(I,{to:`/news/${f.id}`,className:`featured-link-wrapper`,children:[(0,L.jsx)(`div`,{className:`featured-image-wrapper`,children:(0,L.jsx)(`img`,{src:f.image||f.thumbnail||f.cover||Dr,alt:f.title,className:`headline-img-large`,onError:g})}),(0,L.jsxs)(`div`,{className:`featured-content`,children:[(0,L.jsx)(`span`,{className:`category-tag`,children:f.category}),(0,L.jsx)(`h1`,{children:f.title}),(0,L.jsx)(`p`,{children:f.description||f.excerpt||f.summary||`Deskripsi artikel belum tersedia.`}),(0,L.jsxs)(`div`,{className:`author-meta`,children:[(0,L.jsx)(`img`,{src:f.authorImage||`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop`,alt:f.author||`Author`,className:`author-avatar`,onError:g}),(0,L.jsxs)(`div`,{className:`meta-text`,children:[(0,L.jsx)(`strong`,{className:`author-name`,children:f.author||`Redaksi Paham.ID`}),(0,L.jsxs)(`p`,{className:`post-date`,children:[f.date||`12 Mei 2024`,` •`,` `,f.readTime||`4 MIN READ`]})]})]})]})]})}),(0,L.jsx)(`div`,{className:`articles-grid`,children:p.map(e=>(0,L.jsxs)(`article`,{className:`article-card`,children:[(0,L.jsxs)(`div`,{className:`card-top`,children:[(0,L.jsx)(`span`,{className:`card-cat`,children:e.category}),(0,L.jsx)(`button`,{type:`button`,className:`lihat-semua`,onClick:()=>m(e.category?.toUpperCase()),children:`LIHAT SEMUA`})]}),(0,L.jsxs)(I,{to:`/news/${e.id}`,className:`article-card-link`,children:[(0,L.jsx)(`img`,{src:e.image||e.thumbnail||e.cover||Dr,alt:e.title,className:`article-img-standard`,onError:g}),(0,L.jsx)(`h3`,{className:`article-card-title`,children:e.title})]}),(0,L.jsx)(`p`,{className:`article-card-desc`,children:e.description||e.excerpt||e.summary||`Deskripsi artikel belum tersedia.`})]},e.id))}),!a&&(0,L.jsx)(wr,{})]}):!t&&!n&&l.length>0?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`news-list-vertical`,children:[d.map(e=>(0,L.jsx)(`div`,{className:`category-list-item`,children:(0,L.jsxs)(I,{to:`/news/${e.id}`,className:`list-item-link`,children:[(0,L.jsx)(`div`,{className:`list-image-container`,children:(0,L.jsx)(`img`,{src:e.image||e.thumbnail||e.cover||Dr,alt:e.title,className:`article-img-standard`,onError:g})}),(0,L.jsxs)(`div`,{className:`list-content-container`,children:[(0,L.jsx)(`span`,{className:`list-date`,children:e.date||`08 OKT 2025`}),(0,L.jsx)(`h2`,{className:`list-title`,children:e.title}),(0,L.jsx)(`p`,{className:`list-desc`,children:e.description||e.excerpt||e.summary||`Deskripsi artikel belum tersedia.`}),(0,L.jsxs)(`div`,{className:`list-footer-meta`,children:[(0,L.jsxs)(`span`,{className:`author-name`,children:[`♙ `,e.author||`Redaksi Paham.ID`]}),(0,L.jsxs)(`span`,{className:`read-time`,children:[`◷ `,e.readTime||`2 min read`]})]})]})]})},e.id)),a&&(0,L.jsxs)(`div`,{className:`pagination-container`,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn-next`,disabled:o===1,onClick:()=>h(o-1),children:`←`}),(u<=3?Array.from({length:u},(e,t)=>t+1):o<=2?[1,2,3]:o>=u-1?[u-2,u-1,u]:[o-1,o,o+1]).map(e=>(0,L.jsx)(`button`,{type:`button`,className:`page-number ${o===e?`active`:``}`,onClick:()=>h(e),children:e},e)),u>3&&o<u-1&&(0,L.jsx)(`span`,{className:`page-dots`,children:`...`}),u>3&&o<u-1&&(0,L.jsx)(`button`,{type:`button`,className:`page-number`,onClick:()=>h(u),children:u}),(0,L.jsx)(`button`,{type:`button`,className:`btn-next`,disabled:o===u,onClick:()=>h(o+1),children:`BERIKUTNYA →`})]})]}),!a&&(0,L.jsx)(wr,{})]}):null]})]})]})}var Ar=`https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80`,jr=`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80`;function Mr(e){return e?.image||e?.thumbnail||e?.cover||Ar}function Nr(e,t){return e&&String(e).trim()!==``?e:t}function Pr({articles:e,currentId:t}){let n=e.filter(e=>String(e.id)!==String(t)).slice(0,3);return(0,L.jsxs)(`section`,{className:`detail-sidebar-box popular-today-box`,children:[(0,L.jsxs)(`h4`,{className:`detail-sidebar-title`,children:[(0,L.jsx)(`span`,{className:`sidebar-title-line`}),`POPULAR TODAY`]}),(0,L.jsx)(`div`,{className:`popular-detail-list`,children:n.map(e=>(0,L.jsxs)(I,{to:`/news/${e.id}`,className:`popular-detail-item`,children:[(0,L.jsx)(`span`,{className:`popular-detail-category`,children:e.category||`Environment`}),(0,L.jsx)(`h5`,{children:e.title}),(0,L.jsx)(`small`,{children:e.readTime||`2 MIN READ`})]},e.id))})]})}function Fr(){return(0,L.jsxs)(`section`,{className:`detail-auth-sidebar`,children:[(0,L.jsx)(`h3`,{children:`Menyelam Lebih Dalam di Paham.id?`}),(0,L.jsx)(`p`,{children:`Dapatkan pemberitahuan langsung setiap berita baru`}),(0,L.jsx)(I,{to:`/register`,className:`detail-auth-sidebar-btn`,children:`DAFTAR SEKARANG`})]})}function Ir({articles:e,category:t,currentId:n}){let r=e.filter(e=>String(e.id)!==String(n)&&e.category?.toLowerCase()===t?.toLowerCase()).slice(0,3),i=e.filter(e=>String(e.id)!==String(n)).slice(0,3),a=r.length>0?r:i;return(0,L.jsxs)(`section`,{className:`detail-more-section`,children:[(0,L.jsxs)(`h4`,{className:`detail-more-label`,children:[`MORE FROM `,t||`ENVIRONMENT`]}),(0,L.jsx)(`div`,{className:`detail-more-list`,children:a.map(e=>(0,L.jsxs)(I,{to:`/news/${e.id}`,className:`detail-more-item`,children:[(0,L.jsx)(`img`,{src:Mr(e),alt:e.title,onError:e=>{e.currentTarget.src=Ar}}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h5`,{children:e.title}),(0,L.jsx)(`span`,{children:e.date||`12 Januari 2026`})]})]},e.id))})]})}function Lr(){return(0,L.jsxs)(`div`,{className:`detail-auth-footer`,children:[(0,L.jsx)(`h3`,{children:`Want to join the conversation?`}),(0,L.jsxs)(`div`,{className:`detail-auth-footer-actions`,children:[(0,L.jsx)(I,{to:`/signin`,className:`detail-auth-login`,children:`Login`}),(0,L.jsx)(I,{to:`/register`,className:`detail-auth-register`,children:`Register`})]})]})}function Rr({comments:e=[],isLoggedIn:t}){return(0,L.jsxs)(`section`,{className:`comment-section`,children:[(0,L.jsxs)(`div`,{className:`comment-header-row`,children:[(0,L.jsx)(`h2`,{className:`comment-title`,children:`Komentar`}),(0,L.jsxs)(`span`,{className:`comment-badge`,children:[e.length,` Comments`]})]}),(0,L.jsxs)(`div`,{className:`comment-input-card`,children:[(0,L.jsxs)(`div`,{className:`comment-input-top`,children:[(0,L.jsx)(`img`,{src:`/img/author.png`,className:`comment-avatar`,alt:`User`,onError:e=>{e.currentTarget.src=jr}}),(0,L.jsx)(`textarea`,{className:`comment-textarea`,placeholder:`Add to the conversation...`,disabled:!t})]}),(0,L.jsx)(`div`,{className:`comment-input-bottom`,children:t?(0,L.jsx)(`button`,{type:`button`,className:`comment-post-btn`,children:`Post Comment`}):(0,L.jsx)(I,{to:`/signin`,className:`comment-post-btn`,children:`Login to Comment`})})]}),(0,L.jsx)(`div`,{className:`comments-list`,children:e.map(e=>(0,L.jsxs)(`div`,{className:`comment-item-row`,children:[(0,L.jsx)(`img`,{src:e.avatar||`/img/author.png`,className:`comment-avatar`,alt:e.author||`User`,onError:e=>{e.currentTarget.src=jr}}),(0,L.jsxs)(`div`,{className:`comment-bubble`,children:[(0,L.jsxs)(`div`,{className:`comment-meta`,children:[(0,L.jsx)(`strong`,{children:e.author||`User`}),(0,L.jsx)(`span`,{children:`•`}),(0,L.jsx)(`span`,{children:e.time||`2 hours ago`})]}),(0,L.jsx)(`p`,{children:e.text||`Komentar belum tersedia.`})]})]},e.id))}),!t&&(0,L.jsx)(Lr,{})]})}function zr(){let{id:e}=ft(),{article:t,loading:n}=gr(e),{articles:r}=hr(),[i,a]=(0,_.useState)(!1),[o]=(0,_.useState)(!0);if((0,_.useEffect)(()=>{window.scrollTo(0,0),a(!1)},[e]),n)return(0,L.jsx)(`main`,{className:`article-detail-wrapper`,children:(0,L.jsx)(`div`,{className:`article-error-box`,children:`Memuat artikel...`})});if(!t)return(0,L.jsx)(`main`,{className:`article-detail-wrapper`,children:(0,L.jsx)(`div`,{className:`article-error-box`,children:`Artikel Tidak Ditemukan`})});let s=t.reactions||{};return(0,L.jsx)(`main`,{className:`article-detail-wrapper`,children:(0,L.jsxs)(`div`,{className:`article-detail-container`,children:[(0,L.jsx)(`section`,{className:`article-main-column`,children:(0,L.jsxs)(`article`,{className:`article-detail-card`,children:[(0,L.jsxs)(`div`,{className:`article-hero-box`,children:[(0,L.jsx)(`span`,{className:`article-floating-badge`,children:t.category||`Environment`}),(0,L.jsx)(`img`,{src:Mr(t),alt:t.title,className:`article-hero-image`,onError:e=>{e.currentTarget.src=Ar}})]}),(0,L.jsx)(`h1`,{className:`article-detail-title`,children:Nr(t.title,`Heningnya Udara Hutan Kalimantan Timur Menarik Minat Investor BUMS`)}),(0,L.jsxs)(`div`,{className:`article-meta-row`,children:[(0,L.jsxs)(`div`,{className:`article-author-box`,children:[(0,L.jsx)(`img`,{src:t.authorImage||`/img/author.png`,alt:t.author||`Author`,className:`article-author-avatar`,onError:e=>{e.currentTarget.src=jr}}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h4`,{className:`article-author-name`,children:t.author||`Redaksi Paham.ID`}),(0,L.jsx)(`p`,{className:`article-author-role`,children:t.role||`Jurnalisme Junior`})]})]}),(0,L.jsxs)(`div`,{className:`article-date-box`,children:[(0,L.jsx)(`span`,{className:`article-date`,children:t.date||`12 April 2026`}),(0,L.jsx)(`span`,{className:`article-read-summary`,children:t.readTime||`2 MIN READ SUMMARY`})]})]}),(0,L.jsxs)(`div`,{className:`article-body`,children:[(0,L.jsx)(`p`,{children:t.description||`Hutan Kalimantan Timur kembali menarik perhatian, bukan hanya karena keanekaragaman hayatinya, tetapi juga kualitas udaranya yang masih alami. Suasana hening dan udara bersih di kawasan ini mulai dilirik oleh investor sebagai peluang baru di sektor ekowisata.`}),i&&(0,L.jsxs)(`div`,{className:`article-full-text`,children:[(0,L.jsx)(`p`,{children:t.summary||`Sejumlah rencana pengembangan mulai bermunculan, seperti pembangunan eco-lodge, jalur trekking terbatas, hingga program edukasi lingkungan. Konsepnya menekankan wisata berkelanjutan, memberi pengalaman dekat dengan alam tanpa merusak ekosistem.`}),(0,L.jsx)(`p`,{children:t.content||`Pemerintah daerah menyatakan dukungan dengan syarat adanya keseimbangan antara ekonomi dan pelestarian. Kolaborasi antara investor, pemerintah, dan masyarakat lokal dinilai menjadi kunci. Fenomena ini menunjukkan bahwa hutan bukan hanya aset alam, tetapi juga peluang selama dikelola dengan bijak.`})]}),(0,L.jsx)(`div`,{className:`article-view-full-wrap`,children:(0,L.jsx)(`button`,{type:`button`,className:`article-view-full-btn`,onClick:()=>a(e=>!e),children:i?`SHOW SUMMARY`:`VIEW FULL ARTICLE`})})]}),(0,L.jsx)(`div`,{className:`article-interaction-section`,children:(0,L.jsxs)(`div`,{className:`article-reactions-row`,children:[(0,L.jsx)(`span`,{className:`article-reaction-label`,children:`REACTIONS:`}),(0,L.jsxs)(`button`,{type:`button`,className:`article-reaction-pill`,children:[`👏 `,s.clap||142]}),(0,L.jsxs)(`button`,{type:`button`,className:`article-reaction-pill`,children:[`💡 `,s.light||86]}),(0,L.jsxs)(`button`,{type:`button`,className:`article-reaction-pill`,children:[`🤔 `,s.think||s.idea||54]}),(0,L.jsxs)(`button`,{type:`button`,className:`article-reaction-pill`,children:[`💙 `,s.bookmark||12]}),(0,L.jsxs)(`button`,{type:`button`,className:`article-reaction-pill`,children:[`❤️ `,s.heart||210]})]})}),(0,L.jsxs)(`div`,{className:`article-share-section`,children:[(0,L.jsx)(`span`,{className:`article-share-label`,children:`SHARE THIS STORY:`}),(0,L.jsxs)(`div`,{className:`article-share-actions`,children:[(0,L.jsx)(`button`,{type:`button`,className:`article-icon-round`,children:(0,L.jsx)(`img`,{src:`/img/share.png`,alt:`Share`})}),(0,L.jsx)(`button`,{type:`button`,className:`article-icon-round`,children:(0,L.jsx)(`img`,{src:`/img/simpan.png`,alt:`Save`})})]})]}),(0,L.jsx)(Rr,{comments:t.commentItems||[],isLoggedIn:o})]})}),(0,L.jsxs)(`aside`,{className:`article-sidebar-column`,children:[(0,L.jsx)(Pr,{articles:r,currentId:t.id}),!o&&(0,L.jsx)(Fr,{}),(0,L.jsx)(Ir,{articles:r,category:t.category,currentId:t.id})]})]})})}var Br=`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap");

  .trending-page-container,
  .trending-page-container * {
    box-sizing: border-box;
  }

  .trending-page-container {
    width: 100%;
    background: #f6f9fd;
    color: #071927;
    font-family: "Inter", sans-serif;
    padding: 42px 0 36px;
  }

  .trending-content-wrapper {
    width: min(1180px, calc(100% - 72px));
    margin: 0 auto;
  }

  .trending-page-header {
    margin-bottom: 62px;
  }

  .trending-main-title {
    margin: 0;
    color: #071927;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(56px, 5.2vw, 78px);
    font-weight: 800;
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  .trending-filter-row {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 28px;
    flex-wrap: wrap;
  }

  .filter-pill {
    height: 40px;
    min-width: 116px;
    padding: 0 24px;
    border: 1px solid #dce4ef;
    border-radius: 999px;
    background: #ffffff;
    color: #74839b;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(15, 23, 42, 0.08);
    transition: 0.2s ease;
  }

  .filter-pill:hover {
    transform: translateY(-1px);
  }

  .filter-pill.active {
    background: #041f39;
    color: #ffffff;
    border-color: #041f39;
    box-shadow: 0 10px 20px rgba(4, 31, 57, 0.22);
  }

  .trending-news-list {
    display: flex;
    flex-direction: column;
  }

  .trending-card-link {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  .trending-news-card {
    display: grid;
    grid-template-columns: 285px minmax(0, 1fr);
    gap: 42px;
    align-items: center;
    padding: 0 0 54px;
    margin-bottom: 54px;
    border-bottom: 1px solid #eadde1;
  }

  /* Ini yang ngilangin garis di atas Load More */
  .trending-card-link.last-visible-card .trending-news-card {
    border-bottom: none;
    margin-bottom: 28px;
    padding-bottom: 28px;
  }

  .trending-image-box {
    position: relative;
    width: 285px;
    height: 150px;
    background: #dbe3ed;
    overflow: hidden;
    border-radius: 3px;
    flex-shrink: 0;
  }

  .trending-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .badge-trending {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 28px;
    padding: 0 14px;
    background: #c8104f;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.03em;
    line-height: 1;
    box-shadow: 0 8px 16px rgba(200, 16, 79, 0.18);
  }

  .trending-text-box {
    min-width: 0;
  }

  .trending-news-category {
    display: block;
    margin-bottom: 12px;
    color: #b61d37;
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .trending-news-headline {
    margin: 0 0 18px;
    max-width: 820px;
    color: #171b22;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(27px, 2.3vw, 35px);
    font-weight: 600;
    line-height: 1.14;
    letter-spacing: -0.035em;
  }

  .trending-news-summary {
    margin: 0;
    max-width: 850px;
    color: #42536b;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
  }

  .load-more-wrapper {
    display: flex;
    justify-content: center;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .load-more-btn {
    height: 42px;
    min-width: 124px;
    border: none;
    border-radius: 7px;
    background: #041f39;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(4, 31, 57, 0.24);
    transition: 0.2s ease;
  }

  .load-more-btn:hover {
    transform: translateY(-1px);
    background: #0a2744;
  }

  .trending-empty {
    padding: 42px 0;
    color: #64748b;
    text-align: center;
    font-size: 14px;
  }

  /*
    Ini buat bantu ngilangin gap putih sebelum footer.
    Kalau footer kamu punya class lain, tinggal samain background footer-nya ke #e9eef4 / warna footer asli kamu.
  */
  .trending-page-container + footer,
  .trending-page-container + .footer,
  .trending-page-container + .site-footer {
    margin-top: 0 !important;
  }

  @media (max-width: 1100px) {
    .trending-content-wrapper {
      width: calc(100% - 48px);
    }

    .trending-news-card {
      grid-template-columns: 250px minmax(0, 1fr);
      gap: 30px;
    }

    .trending-image-box {
      width: 250px;
      height: 135px;
    }

    .trending-news-headline {
      font-size: 28px;
    }

    .trending-news-summary {
      font-size: 13px;
    }
  }

  @media (max-width: 760px) {
    .trending-page-container {
      padding: 30px 0 36px;
    }

    .trending-content-wrapper {
      width: calc(100% - 28px);
    }

    .trending-page-header {
      margin-bottom: 42px;
    }

    .trending-main-title {
      font-size: 42px;
    }

    .trending-filter-row {
      gap: 10px;
      margin-top: 22px;
    }

    .filter-pill {
      height: 34px;
      min-width: 92px;
      padding: 0 16px;
      font-size: 10px;
    }

    .trending-news-card {
      grid-template-columns: 1fr;
      gap: 20px;
      padding-bottom: 38px;
      margin-bottom: 38px;
    }

    .trending-card-link.last-visible-card .trending-news-card {
      padding-bottom: 22px;
      margin-bottom: 22px;
    }

    .trending-image-box {
      width: 100%;
      height: 210px;
    }

    .trending-news-headline {
      font-size: 26px;
      line-height: 1.18;
    }

    .trending-news-summary {
      font-size: 13px;
      line-height: 1.65;
    }
  }
`,Vr=`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`;function Hr(){let{articles:e}=hr(),[t,n]=(0,_.useState)(`TODAY`),[r,i]=(0,_.useState)(4),a=(0,_.useMemo)(()=>{let n=Array.isArray(e)?e:[];return t===`TODAY`?n:t===`THIS WEEK`?[...n.slice(2),...n.slice(0,2)]:t===`THIS MONTH`?[...n].sort((e,t)=>Number(t.reads||0)-Number(e.reads||0)):n},[t,e]),o=a.slice(0,r),s=r<a.length,c=()=>{i(e=>Math.min(e+4,a.length))},l=e=>{n(e),i(4)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:Br}),(0,L.jsx)(`div`,{className:`trending-page-container`,children:(0,L.jsxs)(`div`,{className:`trending-content-wrapper`,children:[(0,L.jsxs)(`header`,{className:`trending-page-header`,children:[(0,L.jsx)(`h1`,{className:`trending-main-title`,children:`What's Trending Now?`}),(0,L.jsx)(`div`,{className:`trending-filter-row`,children:[`TODAY`,`THIS WEEK`,`THIS MONTH`].map(e=>(0,L.jsx)(`button`,{type:`button`,className:`filter-pill ${t===e?`active`:``}`,onClick:()=>l(e),children:e},e))})]}),(0,L.jsxs)(`main`,{className:`trending-news-list`,children:[o.length===0&&(0,L.jsx)(`div`,{className:`trending-empty`,children:`Belum ada berita trending.`}),o.map((e,t)=>{let n=t===o.length-1;return(0,L.jsx)(I,{to:`/news/${e.id}`,className:`trending-card-link ${n?`last-visible-card`:``}`,children:(0,L.jsxs)(`article`,{className:`trending-news-card`,children:[(0,L.jsxs)(`div`,{className:`trending-image-box`,children:[t===0&&(0,L.jsx)(`span`,{className:`badge-trending`,children:`#1 TRENDING`}),(0,L.jsx)(`img`,{src:e.image||e.thumbnail||e.cover||Vr,alt:e.title||`Trending news`,className:`trending-img`,onError:e=>{e.currentTarget.src=Vr}})]}),(0,L.jsxs)(`div`,{className:`trending-text-box`,children:[(0,L.jsx)(`span`,{className:`trending-news-category`,children:(e.category||`GENERAL`).toUpperCase()}),(0,L.jsx)(`h2`,{className:`trending-news-headline`,children:e.title||`Judul berita belum tersedia`}),(0,L.jsx)(`p`,{className:`trending-news-summary`,children:e.excerpt||e.description||e.synopsis||`Ringkasan berita belum tersedia.`})]})]})},e.id||t)}),s&&(0,L.jsx)(`div`,{className:`load-more-wrapper`,children:(0,L.jsx)(`button`,{type:`button`,className:`load-more-btn`,onClick:c,children:`Load More`})})]})]})})]})}var Ur=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Wr=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Gr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Kr=e=>{let t=Gr(e);return t.charAt(0).toUpperCase()+t.slice(1)},qr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Jr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Yr=(0,_.createContext)({}),Xr=()=>(0,_.useContext)(Yr),Zr=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Xr()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...qr,width:t??l??qr.width,height:t??l??qr.height,stroke:e??f,strokeWidth:m,className:Ur(`lucide`,p,i),...!a&&!Jr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),R=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(Zr,{ref:i,iconNode:t,className:Ur(`lucide-${Wr(Kr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Kr(e),n},Qr=R(`at-sign`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`,key:`7n84p3`}]]),$r=R(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ei=R(`chart-no-axes-column`,[[`path`,{d:`M5 21v-6`,key:`1hz6c0`}],[`path`,{d:`M12 21V3`,key:`1lcnhd`}],[`path`,{d:`M19 21V9`,key:`unv183`}]]),ti=R(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ni=R(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),ri=R(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),ii=R(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),ai=R(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),oi=R(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),si=R(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),ci=R(`heart-handshake`,[[`path`,{d:`M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,key:`17lmqv`}]]),li=R(`history`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]]),ui=R(`landmark`,[[`path`,{d:`M10 18v-7`,key:`wt116b`}],[`path`,{d:`M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z`,key:`1m329m`}],[`path`,{d:`M14 18v-7`,key:`vav6t3`}],[`path`,{d:`M18 18v-7`,key:`aexdmj`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M6 18v-7`,key:`1ivflk`}]]),di=R(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),fi=R(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),pi=R(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),mi=R(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),hi=R(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),gi=R(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),_i=R(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),vi=R(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]);function yi(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(!1);return(0,L.jsxs)(`main`,{className:`signin-page`,children:[(0,L.jsx)(`div`,{className:`signin-bg-container`}),(0,L.jsxs)(`div`,{className:`signin-form-wrapper`,children:[(0,L.jsx)(`div`,{className:`signin-logo-container`,children:(0,L.jsx)(`img`,{src:`/img/logoregist.png`,alt:`Paham.ID`,className:`signin-logo-circle-custom`})}),(0,L.jsx)(`h1`,{className:`signin-title`,children:`Sign In`}),(0,L.jsxs)(`form`,{className:`signin-form`,onSubmit:async e=>{e.preventDefault(),l(!0),s(``);try{let e=await cr(n,i);window.location.href=e.role===`admin`?`/admin-dashboard`:`/dashboard`}catch(e){s(e.message||`Login gagal.`)}finally{l(!1)}},children:[(0,L.jsxs)(`div`,{className:`signin-input-group`,children:[(0,L.jsxs)(`label`,{children:[`Email `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`signin-input-wrap`,children:[(0,L.jsx)(fi,{size:18,className:`signin-icon`}),(0,L.jsx)(`input`,{type:`text`,placeholder:`Enter your username`,value:n,onChange:e=>r(e.target.value),required:!0})]})]}),(0,L.jsxs)(`div`,{className:`signin-input-group`,children:[(0,L.jsxs)(`label`,{children:[`Password `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`signin-input-wrap`,children:[(0,L.jsx)(di,{size:18,className:`signin-icon`}),(0,L.jsx)(`input`,{type:e?`text`:`password`,placeholder:`Enter your password`,value:i,onChange:e=>a(e.target.value),required:!0}),(0,L.jsx)(`button`,{type:`button`,className:`signin-eye-btn`,onClick:()=>t(e=>!e),children:e?(0,L.jsx)(ii,{size:16}):(0,L.jsx)(ai,{size:16})})]})]}),o&&(0,L.jsx)(`p`,{className:`signin-footer`,children:o}),(0,L.jsx)(`button`,{type:`submit`,className:`signin-btn`,disabled:c,children:c?`Signing In...`:`Sign In`})]}),(0,L.jsxs)(`p`,{className:`signin-footer`,children:[`Don't have an account? `,(0,L.jsx)(I,{to:`/register`,children:`Register Now`})]})]})]})}function bi(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)({full_name:``,username:``,email:``,password:``,confirm_password:``}),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(!1),u=e=>t=>{a(n=>({...n,[e]:t.target.value}))};return(0,L.jsxs)(`main`,{className:`register-page`,children:[(0,L.jsx)(`div`,{className:`register-bg-full`}),(0,L.jsxs)(`div`,{className:`register-container`,children:[(0,L.jsx)(`div`,{className:`register-left-branding`,children:(0,L.jsxs)(`div`,{className:`branding-stack`,children:[(0,L.jsx)(`img`,{src:`/img/logoregist.png`,alt:`Paham.ID Logo`,className:`logo-square-style`}),(0,L.jsx)(`img`,{src:`/img/tulisanregist.png`,alt:`Paham.ID Text`,className:`branding-text-img`})]})}),(0,L.jsx)(`div`,{className:`register-right-form`,children:(0,L.jsxs)(`div`,{className:`register-box`,children:[(0,L.jsx)(`h1`,{className:`register-header-text`,children:`Create Account`}),(0,L.jsx)(`p`,{className:`register-sub`,children:`Please fill the details below`}),(0,L.jsxs)(`form`,{className:`form-content`,onSubmit:async e=>{e.preventDefault(),l(!0),s(``);try{await lr(i),s(`Akun berhasil dibuat. Silakan sign in.`)}catch(e){s(e.message||`Register gagal.`)}finally{l(!1)}},children:[(0,L.jsxs)(`div`,{className:`input-field-group`,children:[(0,L.jsxs)(`label`,{children:[`Full name `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`input-icon-wrap`,children:[(0,L.jsx)(_i,{size:18,className:`icon-left`}),(0,L.jsx)(`input`,{type:`text`,placeholder:`Enter your full name`,value:i.full_name,onChange:u(`full_name`),required:!0})]})]}),(0,L.jsxs)(`div`,{className:`input-field-group`,children:[(0,L.jsxs)(`label`,{children:[`Username `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`input-icon-wrap`,children:[(0,L.jsx)(Qr,{size:18,className:`icon-left`}),(0,L.jsx)(`input`,{type:`text`,placeholder:`Enter your username`,value:i.username,onChange:u(`username`),required:!0})]})]}),(0,L.jsxs)(`div`,{className:`input-field-group`,children:[(0,L.jsxs)(`label`,{children:[`Email `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`input-icon-wrap`,children:[(0,L.jsx)(fi,{size:18,className:`icon-left`}),(0,L.jsx)(`input`,{type:`email`,placeholder:`Enter your email`,value:i.email,onChange:u(`email`),required:!0})]})]}),(0,L.jsxs)(`div`,{className:`input-field-group`,children:[(0,L.jsxs)(`label`,{children:[`Password `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`input-icon-wrap`,children:[(0,L.jsx)(di,{size:18,className:`icon-left`}),(0,L.jsx)(`input`,{type:e?`text`:`password`,placeholder:`Create a password`,value:i.password,onChange:u(`password`),required:!0}),(0,L.jsx)(`button`,{type:`button`,className:`eye-toggle`,onClick:()=>t(!e),children:e?(0,L.jsx)(ii,{size:16}):(0,L.jsx)(ai,{size:16})})]})]}),(0,L.jsxs)(`div`,{className:`input-field-group`,children:[(0,L.jsxs)(`label`,{children:[`Confirm Password `,(0,L.jsx)(`span`,{className:`req`,children:`*`})]}),(0,L.jsxs)(`div`,{className:`input-icon-wrap`,children:[(0,L.jsx)(di,{size:18,className:`icon-left`}),(0,L.jsx)(`input`,{type:n?`text`:`password`,placeholder:`Confirm your password`,value:i.confirm_password,onChange:u(`confirm_password`),required:!0}),(0,L.jsx)(`button`,{type:`button`,className:`eye-toggle`,onClick:()=>r(!n),children:n?(0,L.jsx)(ii,{size:16}):(0,L.jsx)(ai,{size:16})})]})]}),o&&(0,L.jsx)(`p`,{className:`login-footer`,children:o}),(0,L.jsx)(`button`,{type:`submit`,className:`submit-btn-orange`,disabled:c,children:c?`Creating...`:`Create Account`})]}),(0,L.jsxs)(`p`,{className:`login-footer`,children:[`Already have an account? `,(0,L.jsx)(I,{to:`/signin`,className:`signin-link`,children:`Sign In`})]})]})})]})]})}var xi=`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@500;600;700;800&display=swap");

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
    background: #f6f9fd;
  }

  .saved-page,
  .saved-page * {
    box-sizing: border-box;
  }

  .saved-page {
    background: #f6f9fd;
    font-family: "Inter", sans-serif;
    color: #111827;
    margin: 0;
  }

  .saved-page a {
    text-decoration: none;
  }

  .saved-inner {
    width: min(980px, calc(100% - 64px));
    margin: 0 auto;
  }

  /*
    Fix gap putih sebelum footer.
    Ini cuma target footer yang muncul setelah SavedPage.
  */
  .saved-page + footer,
  .saved-page + .footer,
  .saved-page + .site-footer {
    margin-top: 0 !important;
  }

  /* =========================
     BELUM LOGIN
  ========================= */

  .saved-auth-page {
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 32px 120px;
  }

  .saved-auth-card {
    width: min(920px, 100%);
    min-height: 165px;
    border-radius: 38px;
    background: linear-gradient(100deg, #152657 0%, #7281b5 100%);
    box-shadow: 0 8px 10px rgba(15, 23, 42, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .saved-auth-title {
    margin: 0 0 24px;
    color: #ffffff;
    font-size: clamp(26px, 2.4vw, 36px);
    line-height: 1.15;
    font-weight: 800;
    letter-spacing: 0.01em;
    text-align: center;
  }

  .saved-auth-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .saved-auth-btn {
    height: 31px;
    min-width: 78px;
    border: 0;
    border-radius: 999px;
    padding: 0 20px;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .saved-auth-btn:hover {
    transform: translateY(-1px);
  }

  .saved-login-btn {
    background: #edf4ff;
    color: #172554;
  }

  .saved-register-btn {
    background: #e94b82;
    color: #ffffff;
  }

  /* =========================
     LOGIN TAPI KOSONG
  ========================= */

  .saved-empty-page {
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 150px 24px 90px;
  }

  .saved-empty-content {
    width: min(680px, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .saved-oops-img {
    width: min(350px, 70vw);
    height: auto;
    display: block;
    margin-bottom: 36px;
  }

  .saved-hand-img {
    width: min(360px, 70vw);
    height: auto;
    display: block;
    margin-bottom: 38px;
  }

  .saved-empty-title {
    margin: 0 0 30px;
    color: #18245a;
    font-size: clamp(25px, 2.8vw, 38px);
    line-height: 1.15;
    font-weight: 900;
    letter-spacing: -0.03em;
    text-shadow: 0 4px 3px rgba(24, 36, 90, 0.18);
  }

  .saved-add-btn {
    width: min(280px, 70vw);
    height: 70px;
    border: 0;
    border-radius: 999px;
    background: linear-gradient(90deg, #5ca5c4 0%, #b9deed 100%);
    color: #ffffff;
    font-size: clamp(26px, 2.8vw, 38px);
    font-weight: 900;
    cursor: pointer;
    box-shadow: 0 5px 4px rgba(15, 23, 42, 0.3);
    transition: transform 0.2s ease;
  }

  .saved-add-btn:hover {
    transform: translateY(-2px);
  }

  /* =========================
     ADA SAVED NEWS
  ========================= */

  .saved-list-page {
    min-height: calc(100vh - 72px);
    padding: 54px 0 70px;
  }

  .saved-title {
    margin: 0 0 48px;
    color: #172252;
    font-size: clamp(42px, 4vw, 58px);
    line-height: 1;
    font-weight: 900;
    letter-spacing: -0.075em;
    text-shadow: 0 5px 4px rgba(23, 34, 82, 0.22);
  }

  .saved-tabs {
    display: flex;
    align-items: center;
    gap: 34px;
    padding-left: 12px;
    margin-bottom: 13px;
  }

  .saved-tab {
    position: relative;
    border: 0;
    background: transparent;
    padding: 0 0 13px;
    color: #5d4b4b;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.17em;
    cursor: pointer;
  }

  .saved-tab.active {
    color: #9b1c24;
  }

  .saved-tab.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 36px;
    height: 2px;
    background: #9b1c24;
  }

  .saved-top-line {
    height: 1px;
    background: #8b9bb1;
    opacity: 0.75;
    margin-bottom: 26px;
  }

  .saved-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .saved-item {
    display: grid;
    grid-template-columns: 245px minmax(0, 1fr);
    gap: 30px;
    align-items: start;
    padding: 0 0 60px;
  }

  .saved-item:last-child {
    padding-bottom: 20px;
  }

  .saved-item-img {
    width: 245px;
    height: 118px;
    object-fit: cover;
    display: block;
    background: #e2e8f0;
  }

  .saved-item-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: #8b7c7f;
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .saved-item-category {
    color: #b12a3a;
  }

  .saved-item-dot {
    color: #b6aaad;
  }

  .saved-item-title {
    margin: 0 0 15px;
    max-width: 620px;
    color: #252529;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(22px, 2vw, 29px);
    line-height: 1.08;
    font-weight: 500;
    letter-spacing: -0.035em;
  }

  .saved-item-desc {
    margin: 0 0 24px;
    max-width: 560px;
    color: #625f64;
    font-size: 12.5px;
    line-height: 1.55;
    font-weight: 600;
  }

  .saved-item-actions {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .saved-small-action {
    border: 0;
    background: transparent;
    color: #8d8588;
    padding: 0;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .saved-small-action:hover {
    color: #172252;
  }

  .saved-action-icon {
    width: 10px;
    height: 10px;
    display: inline-block;
  }

  .saved-list-empty {
    padding: 70px 0;
    color: #64748b;
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 900px) {
    .saved-inner {
      width: calc(100% - 40px);
    }

    .saved-list-page {
      padding-top: 44px;
    }

    .saved-title {
      font-size: 48px;
      margin-bottom: 42px;
    }

    .saved-item {
      grid-template-columns: 220px minmax(0, 1fr);
      gap: 24px;
      padding-bottom: 52px;
    }

    .saved-item-img {
      width: 220px;
      height: 112px;
    }

    .saved-item-title {
      font-size: 25px;
    }
  }

  @media (max-width: 680px) {
    .saved-inner {
      width: calc(100% - 28px);
    }

    .saved-list-page {
      padding-top: 34px;
      padding-bottom: 48px;
    }

    .saved-title {
      font-size: 40px;
      margin-bottom: 34px;
    }

    .saved-tabs {
      gap: 24px;
      padding-left: 0;
    }

    .saved-tab {
      font-size: 12px;
    }

    .saved-item {
      grid-template-columns: 1fr;
      gap: 17px;
      padding-bottom: 44px;
    }

    .saved-item-img {
      width: 100%;
      height: 200px;
    }

    .saved-item-title {
      font-size: 25px;
    }

    .saved-item-desc {
      font-size: 13px;
    }

    .saved-auth-page {
      padding: 110px 18px 120px;
    }

    .saved-auth-card {
      min-height: 160px;
      border-radius: 28px;
      padding: 28px 18px;
    }

    .saved-auth-title {
      font-size: 25px;
      margin-bottom: 20px;
    }

    .saved-empty-page {
      padding-top: 120px;
      padding-bottom: 80px;
    }

    .saved-oops-img {
      margin-bottom: 30px;
    }

    .saved-hand-img {
      margin-bottom: 34px;
    }

    .saved-add-btn {
      height: 64px;
    }
  }
`,Si=()=>(0,L.jsxs)(`svg`,{className:`saved-action-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M3 6h18`}),(0,L.jsx)(`path`,{d:`M8 6V4h8v2`}),(0,L.jsx)(`path`,{d:`M19 6l-1 15H6L5 6`}),(0,L.jsx)(`path`,{d:`M10 11v6`}),(0,L.jsx)(`path`,{d:`M14 11v6`})]}),Ci=()=>(0,L.jsxs)(`svg`,{className:`saved-action-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M21 8v13H3V8`}),(0,L.jsx)(`path`,{d:`M1 3h22v5H1z`}),(0,L.jsx)(`path`,{d:`M10 13h4`})]});function wi(){let{bookmarks:e,setBookmarks:t}=_r(),[n]=(0,_.useState)(!!Qn()),[r,i]=(0,_.useState)(`all`),[a,o]=(0,_.useState)([]);(0,_.useEffect)(()=>{o(e)},[e]);let s=a.length>0,c=(0,_.useMemo)(()=>r===`archived`?a.filter(e=>e.archived===!0):a,[r,a]),l=async e=>{let n=a.filter(t=>t.id!==e);o(n),t(n),await fr(e)},u=async e=>{let n=a.map(t=>t.id===e?{...t,archived:!0}:t);o(n),t(n),await pr(e,{is_archived:!0}),i(`archived`)},d=async e=>{let n=a.map(t=>t.id===e?{...t,archived:!1}:t);o(n),t(n),await pr(e,{is_archived:!1}),i(`all`)};return n?s?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:xi}),(0,L.jsx)(`main`,{className:`saved-page saved-list-page`,children:(0,L.jsxs)(`div`,{className:`saved-inner`,children:[(0,L.jsx)(`h1`,{className:`saved-title`,children:`Saved News`}),(0,L.jsxs)(`div`,{className:`saved-tabs`,children:[(0,L.jsx)(`button`,{type:`button`,className:`saved-tab ${r===`all`?`active`:``}`,onClick:()=>i(`all`),children:`ALL`}),(0,L.jsx)(`button`,{type:`button`,className:`saved-tab ${r===`archived`?`active`:``}`,onClick:()=>i(`archived`),children:`ARCHIVED`})]}),(0,L.jsx)(`div`,{className:`saved-top-line`}),(0,L.jsx)(`section`,{className:`saved-list`,children:c.length===0?(0,L.jsx)(`div`,{className:`saved-list-empty`,children:`Belum ada artikel pada tab ini.`}):c.map(e=>(0,L.jsxs)(`article`,{className:`saved-item`,children:[(0,L.jsx)(`img`,{src:e.image,alt:e.title,className:`saved-item-img`}),(0,L.jsxs)(`div`,{className:`saved-item-body`,children:[(0,L.jsxs)(`div`,{className:`saved-item-meta`,children:[(0,L.jsx)(`span`,{className:`saved-item-category`,children:e.category}),(0,L.jsx)(`span`,{className:`saved-item-dot`,children:`•`}),(0,L.jsx)(`span`,{children:e.date})]}),(0,L.jsx)(`h2`,{className:`saved-item-title`,children:e.title}),(0,L.jsx)(`p`,{className:`saved-item-desc`,children:e.description}),(0,L.jsxs)(`div`,{className:`saved-item-actions`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`saved-small-action`,onClick:()=>l(e.id),children:[(0,L.jsx)(Si,{}),`Remove`]}),e.archived?(0,L.jsxs)(`button`,{type:`button`,className:`saved-small-action`,onClick:()=>d(e.id),children:[(0,L.jsx)(Ci,{}),`Unarchive`]}):(0,L.jsxs)(`button`,{type:`button`,className:`saved-small-action`,onClick:()=>u(e.id),children:[(0,L.jsx)(Ci,{}),`Archive`]})]})]})]},e.id))})]})})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:xi}),(0,L.jsx)(`main`,{className:`saved-page saved-empty-page`,children:(0,L.jsxs)(`section`,{className:`saved-empty-content`,children:[(0,L.jsx)(`img`,{src:`/img/Oooopsss!!.png`,alt:`Oooopsss!!`,className:`saved-oops-img`}),(0,L.jsx)(`img`,{src:`/img/tangan.png`,alt:`Ilustrasi tangan dan buku`,className:`saved-hand-img`}),(0,L.jsx)(`h1`,{className:`saved-empty-title`,children:`Anda Belum Memiliki Daftar Bacaan`}),(0,L.jsx)(`button`,{type:`button`,className:`saved-add-btn`,onClick:()=>i(`all`),children:`Tambah`})]})})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:xi}),(0,L.jsx)(`main`,{className:`saved-page saved-auth-page`,children:(0,L.jsxs)(`section`,{className:`saved-auth-card`,children:[(0,L.jsx)(`h1`,{className:`saved-auth-title`,children:`Ingin Menambahkan Daftar Bacaan?`}),(0,L.jsxs)(`div`,{className:`saved-auth-actions`,children:[(0,L.jsx)(I,{to:`/signin`,className:`saved-auth-btn saved-login-btn`,children:`Login`}),(0,L.jsx)(I,{to:`/register`,className:`saved-auth-btn saved-register-btn`,children:`Register`})]})]})})]})}var Ti=()=>(0,L.jsxs)(`div`,{className:`contact-page-container`,children:[(0,L.jsxs)(`div`,{className:`contact-header`,children:[(0,L.jsx)(`h1`,{children:`Contact Us`}),(0,L.jsx)(`p`,{children:`Get in touch with us for any questions, feedback, or collaboration.`})]}),(0,L.jsxs)(`div`,{className:`contact-content`,children:[(0,L.jsxs)(`div`,{className:`contact-card`,children:[(0,L.jsx)(`div`,{className:`contact-icon-wrapper`,children:(0,L.jsx)(fi,{size:32,color:`#0ea5e9`})}),(0,L.jsx)(`h3`,{children:`EMAIL REDAKSI`}),(0,L.jsx)(`a`,{href:`mailto:paham.id@gmail.com`,className:`contact-email-text`,children:`paham.id@gmail.com`})]}),(0,L.jsxs)(`div`,{className:`contact-card`,children:[(0,L.jsx)(`h3`,{children:`IKUTI KAMI`}),(0,L.jsxs)(`div`,{className:`social-icons-container`,children:[(0,L.jsxs)(`div`,{className:`social-item`,children:[(0,L.jsx)(`div`,{className:`social-icon-circle`,children:(0,L.jsx)(fi,{size:20})}),(0,L.jsx)(`a`,{href:`https://instagram.com/paham.id`,className:`social-link`,target:`_blank`,rel:`noopener noreferrer`,children:`@paham.id`})]}),(0,L.jsxs)(`div`,{className:`social-item`,children:[(0,L.jsx)(`div`,{className:`social-icon-circle`,children:(0,L.jsx)(fi,{size:20})}),(0,L.jsx)(`a`,{href:`https://twitter.com/id_paham`,className:`social-link`,target:`_blank`,rel:`noopener noreferrer`,children:`@id_paham`})]})]})]})]})]}),Ei=()=>(0,L.jsxs)(`div`,{className:`about-page-container`,children:[(0,L.jsxs)(`div`,{className:`about-header`,children:[(0,L.jsx)(`h1`,{children:`About Us`}),(0,L.jsxs)(`p`,{children:[`We provide concise `,(0,L.jsx)(`span`,{className:`about-highlight`,children:`2-minute read`}),` news and full articles to help users stay informed quickly and efficiently.`]})]}),(0,L.jsxs)(`div`,{className:`about-content`,children:[(0,L.jsx)(`h2`,{className:`about-values-title`,children:`Our Core Values`}),(0,L.jsxs)(`div`,{className:`about-cards-container`,children:[(0,L.jsxs)(`div`,{className:`about-card`,children:[(0,L.jsx)(`div`,{className:`about-card-icon-wrapper`,children:(0,L.jsx)(ni,{size:24,color:`#1d4ed8`})}),(0,L.jsx)(`h3`,{children:`Efficiency`}),(0,L.jsx)(`p`,{children:`Every second counts. Our proprietary summarization ensures you get the core facts without the fluff in record time.`})]}),(0,L.jsxs)(`div`,{className:`about-card`,children:[(0,L.jsx)(`div`,{className:`about-card-icon-wrapper`,children:(0,L.jsx)(ai,{size:24,color:`#1d4ed8`})}),(0,L.jsx)(`h3`,{children:`Clarity`}),(0,L.jsx)(`p`,{children:`Simple language, profound impact. We strip away jargon to present news that is accessible to everyone, everywhere.`})]}),(0,L.jsxs)(`div`,{className:`about-card`,children:[(0,L.jsx)(`div`,{className:`about-card-icon-wrapper`,children:(0,L.jsx)(gi,{size:24,color:`#1d4ed8`})}),(0,L.jsx)(`h3`,{children:`Integrity`}),(0,L.jsx)(`p`,{children:`Fact-checked and unbiased. Our editorial standards are built on the bedrock of traditional journalistic ethics.`})]})]})]})]}),Di=()=>(0,L.jsxs)(`div`,{className:`privacy-page-container`,children:[(0,L.jsxs)(`div`,{className:`privacy-header`,children:[(0,L.jsx)(`h1`,{children:`Privacy Policy`}),(0,L.jsx)(`p`,{children:`Privasi Anda adalah prioritas kami. Kami berkomitmen untuk melindungi data pribadi Anda dengan standar keamanan editorial tertinggi.`})]}),(0,L.jsxs)(`div`,{className:`privacy-content`,children:[(0,L.jsxs)(`div`,{className:`privacy-section`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(ci,{size:20}),(0,L.jsx)(`h3`,{children:`1. Pendahuluan`})]}),(0,L.jsx)(`p`,{className:`privacy-text`,children:`Insight Editorial sangat menghargai kepercayaan Anda. Bagian ini menjelaskan komitmen kami dalam menjaga dan memproses data pribadi Anda dengan integritas dan transparansi penuh sesuai dengan standar industri media global.`})]}),(0,L.jsxs)(`div`,{className:`privacy-section`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(ri,{size:20}),(0,L.jsx)(`h3`,{children:`2. Informasi yang Kami Kumpulkan`})]}),(0,L.jsxs)(`div`,{className:`privacy-subcard`,children:[(0,L.jsx)(_i,{size:18,className:`privacy-subcard-icon`}),(0,L.jsxs)(`div`,{className:`privacy-subcard-content`,children:[(0,L.jsx)(`h4`,{children:`Data Akun`}),(0,L.jsx)(`p`,{children:`Informasi dasar seperti alamat email, nama pengguna, dan preferensi akun yang Anda berikan saat pendaftaran.`})]})]}),(0,L.jsxs)(`div`,{className:`privacy-subcard`,children:[(0,L.jsx)(oi,{size:18,className:`privacy-subcard-icon`}),(0,L.jsxs)(`div`,{className:`privacy-subcard-content`,children:[(0,L.jsx)(`h4`,{children:`Konten Buatan Pengguna`}),(0,L.jsx)(`p`,{children:`Semua artikel, draf, komentar, dan aset media yang Anda unggah ke dalam platform Insight Editorial.`})]})]}),(0,L.jsxs)(`div`,{className:`privacy-subcard`,children:[(0,L.jsx)(ei,{size:18,className:`privacy-subcard-icon`}),(0,L.jsxs)(`div`,{className:`privacy-subcard-content`,children:[(0,L.jsx)(`h4`,{children:`Data Penggunaan`}),(0,L.jsx)(`p`,{children:`Informasi tentang bagaimana Anda berinteraksi dengan layanan kami, termasuk log akses, perangkat yang digunakan, dan durasi sesi.`})]})]})]}),(0,L.jsxs)(`div`,{className:`privacy-section`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(mi,{size:20}),(0,L.jsx)(`h3`,{children:`3. Penggunaan Informasi`})]}),(0,L.jsx)(`p`,{className:`privacy-text`,children:`Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:`}),(0,L.jsxs)(`ul`,{className:`privacy-list`,children:[(0,L.jsx)(`li`,{children:`Mengelola dan memverifikasi akun pengguna Anda.`}),(0,L.jsx)(`li`,{children:`Meningkatkan fungsionalitas layanan dan pengalaman pengguna melalui analitik.`}),(0,L.jsx)(`li`,{children:`Menampilkan dan mendistribusikan konten sesuai dengan pengaturan privasi Anda.`}),(0,L.jsx)(`li`,{children:`Mengirimkan notifikasi penting terkait keamanan dan pembaruan sistem.`})]})]}),(0,L.jsxs)(`div`,{className:`privacy-highlight-card`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(gi,{size:20}),(0,L.jsx)(`h3`,{children:`4. Perlindungan Data`})]}),(0,L.jsx)(`p`,{children:`Keamanan data Anda adalah prioritas utama. Kami menggunakan enkripsi kelas industri untuk menyimpan kata sandi (hashed) dan menerapkan protokol akses yang ketat untuk mencegah akses tidak sah, perubahan, atau kebocoran data.`})]}),(0,L.jsxs)(`div`,{className:`privacy-section`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(hi,{size:20}),(0,L.jsx)(`h3`,{children:`5. Berbagi Informasi`})]}),(0,L.jsxs)(`p`,{className:`privacy-text`,children:[`Kami memiliki kebijakan ketat: `,(0,L.jsx)(`strong`,{children:`Insight Editorial tidak pernah menjual data pribadi Anda kepada pihak ketiga.`}),(0,L.jsx)(`br`,{}),`Informasi hanya akan dibagikan kepada pihak berwenang jika diwajibkan oleh hukum yang berlaku atau untuk melindungi hak-hak hukum kami.`]})]}),(0,L.jsxs)(`div`,{className:`privacy-grid`,children:[(0,L.jsxs)(`div`,{className:`privacy-border-card`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(vi,{size:20}),(0,L.jsx)(`h3`,{children:`6. Hak Pengguna`})]}),(0,L.jsx)(`p`,{className:`privacy-text`,style:{margin:0},children:`Anda memiliki hak penuh untuk mengakses, memperbarui, atau menambahkan artikel berita Anda kapan saja melalui dashboard pengguna.`})]}),(0,L.jsxs)(`div`,{className:`privacy-border-card`,children:[(0,L.jsxs)(`div`,{className:`privacy-section-title`,children:[(0,L.jsx)(li,{size:20}),(0,L.jsx)(`h3`,{children:`7. Perubahan Kebijakan`})]}),(0,L.jsx)(`p`,{className:`privacy-text`,style:{margin:0},children:`Kebijakan ini dapat diperbarui secara berkala. Kami akan memberikan notifikasi melalui platform jika terdapat perubahan signifikan yang mempengaruhi hak-hak Anda.`})]})]})]})]}),Oi=()=>{let e=ct(),{notifications:t}=vr(),n=e=>({ENVIRONMENT:$r,TECHNOLOGY:si,POLITICS:ui,SOCIAL:_i})[e]||$r,r=t.map((e,t)=>({...e,icon:e.type===`comment`?pi:n(e.type),bgClass:[`bg-red-light`,`bg-yellow-light`,`bg-green-light`,`bg-blue-light`,`bg-purple-light`][t%5]})),i=r.slice(0,2),a=r.slice(2,4),o=r[4];return(0,L.jsxs)(`div`,{className:`notifications-page-container`,children:[(0,L.jsxs)(`div`,{className:`notifications-header`,children:[(0,L.jsx)(`button`,{className:`back-button`,onClick:()=>e(-1),children:(0,L.jsx)(ti,{size:32})}),(0,L.jsxs)(`div`,{className:`notifications-title-container`,children:[(0,L.jsx)(`h1`,{children:`Notifications`}),(0,L.jsx)(`span`,{className:`notifications-badge`,children:`+2`})]})]}),(0,L.jsxs)(`div`,{className:`notifications-section`,children:[(0,L.jsx)(`div`,{className:`notifications-section-title`,children:`HARI INI`}),i.length===0&&(0,L.jsx)(`div`,{className:`notification-item`,children:(0,L.jsxs)(`div`,{className:`notification-content`,children:[(0,L.jsx)(`h4`,{children:`Belum ada notifikasi`}),(0,L.jsx)(`p`,{children:`Notifikasi dari database akan muncul di sini.`})]})}),i.map(e=>{let t=e.icon;return(0,L.jsxs)(`div`,{className:`notification-item ${e.unread?`unread`:``}`,children:[(0,L.jsx)(`div`,{className:`notification-icon-wrapper ${e.bgClass}`,children:(0,L.jsx)(t,{size:24})}),(0,L.jsxs)(`div`,{className:`notification-content`,children:[(0,L.jsx)(`h4`,{children:e.title}),(0,L.jsx)(`p`,{children:e.excerpt})]}),(0,L.jsx)(`div`,{className:`notification-time`,children:e.time})]},e.id)})]}),(0,L.jsxs)(`div`,{className:`notifications-section`,children:[(0,L.jsx)(`div`,{className:`notifications-section-title`,children:`MINGGU INI`}),a.map(e=>{let t=e.icon;return(0,L.jsxs)(`div`,{className:`notification-item ${e.unread?`unread`:``}`,children:[(0,L.jsx)(`div`,{className:`notification-icon-wrapper ${e.bgClass}`,children:(0,L.jsx)(t,{size:24})}),(0,L.jsxs)(`div`,{className:`notification-content`,children:[(0,L.jsx)(`h4`,{children:e.title}),(0,L.jsx)(`p`,{children:e.excerpt})]}),(0,L.jsx)(`div`,{className:`notification-time`,children:e.time})]},e.id)}),o&&(0,L.jsxs)(`div`,{className:`notification-item`,children:[(0,L.jsx)(`div`,{className:`notification-icon-wrapper bg-purple-light`,children:(0,L.jsx)(pi,{size:24})}),(0,L.jsxs)(`div`,{className:`notification-content`,children:[(0,L.jsxs)(`h4`,{children:[`Komentar Baru : `,o.title]}),(0,L.jsx)(`p`,{children:o.excerpt})]}),(0,L.jsx)(`div`,{className:`notification-time`,children:o.time})]})]})]})},ki=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --dashboard-sidebar-width: 260px;
    --dashboard-header-height: 76px;
  }

  .pa-header {
    position: fixed;
    top: 0;
    left: var(--dashboard-sidebar-width);
    right: 0;
    height: var(--dashboard-header-height);
    background: #ffffff;
    border-bottom: 1px solid #eef2f7;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.12);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 34px;
    z-index: 90;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .pa-header-logo {
    display: inline-flex;
    align-items: center;
    min-width: 132px;
    text-decoration: none;
  }

  .pa-header-logo img {
    width: auto;
    height: 46px;
    display: block;
    object-fit: contain;
  }

  .pa-header-profile {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 34px;
    border-left: 1px solid #eef2f7;
  }

  .pa-header-user {
    min-width: 88px;
    text-align: right;
  }

  .pa-header-name {
    margin: 0;
    color: #111827;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.18;
  }

  .pa-header-username {
    margin: 3px 0 0;
    color: #4b5563;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
  }

  .pa-header-avatar {
    width: 42px;
    height: 42px;
    border: 2px solid #1f3164;
    border-radius: 50%;
    background: #f8fafc;
    color: #1f3164;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 14px;
    font-weight: 800;
  }

  .pa-header-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;function Ai(e=``){return e.split(` `).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()}function ji({user:e={name:`Faiz Sani`,username:`@faizzini12`,avatar:``}}){let t=Ai(e.name)||`U`;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:ki}),(0,L.jsxs)(`header`,{className:`pa-header`,children:[(0,L.jsx)(`a`,{href:`/dashboard`,className:`pa-header-logo`,children:(0,L.jsx)(`img`,{src:`/img/Group2.png`,alt:`Paham.ID`})}),(0,L.jsxs)(`div`,{className:`pa-header-profile`,children:[(0,L.jsxs)(`div`,{className:`pa-header-user`,children:[(0,L.jsx)(`p`,{className:`pa-header-name`,children:e.name}),(0,L.jsx)(`p`,{className:`pa-header-username`,children:e.username})]}),(0,L.jsx)(`div`,{className:`pa-header-avatar`,children:e.avatar?(0,L.jsx)(`img`,{src:e.avatar,alt:e.name}):t})]})]})]})}var Mi=[`All`,`Draft`,`Pending`,`Published`,`Rejected`],Ni=[`Gunakan judul yang jelas dan faktual.`,`Pastikan ringkasan memuat inti berita.`,`Tambahkan sumber atau konteks penting sebelum publikasi.`],z={user:{title:`DASHBOARD`,items:[{key:`dashboard`,label:`Dashboard`,path:`/dashboard`,match:[`/dashboard`],iconKey:`grid`},{key:`my-articles`,label:`My Articles`,path:`/my-articles`,match:[`/my-articles`,`/edit-article`],iconKey:`file`},{key:`write`,label:`Write News`,path:`/write-news`,match:[`/write`,`/write-news`],iconKey:`edit`}]},admin:{title:`ADMIN`,items:[{key:`admin-dashboard`,label:`Dashboard`,path:`/admin-dashboard`,match:[`/admin-dashboard`],iconKey:`grid`},{key:`manage-news`,label:`Manage News`,path:`/admin/manage-news`,match:[`/admin/manage-news`,`/manage-news`,`/admin/edit-news`,`/edit-news`],iconKey:`folder`},{key:`pending`,label:`Pending Approval`,path:`/admin/pending`,match:[`/admin/pending`,`/pending`],iconKey:`check`},{key:`write`,label:`Write News`,path:`/admin/write-news`,match:[`/admin/write`,`/admin/write-news`],iconKey:`edit`}]}},B=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --dashboard-sidebar-width: 260px;
    --dashboard-header-height: 76px;
  }

  .dh-sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    width: var(--dashboard-sidebar-width);
    height: 100vh;
    background: #ffffff;
    border-right: 1px solid #edf1f6;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    z-index: 100;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .dh-sidebar-title {
    margin: 112px 24px 48px 28px;
    color: #14245b;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .dh-nav {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;
    padding: 0 0 0 24px;
    box-sizing: border-box;
  }

  .dh-nav-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: #566171;
    cursor: pointer;
    font: 700 14px/1 'Plus Jakarta Sans', sans-serif;
    text-align: left;
  }

  .dh-nav-item:hover {
    background: #f4f8fd;
    color: #14245b;
  }

  .dh-nav-item.active {
    background: #edf5ff;
    color: #14245b;
    font-weight: 800;
  }

  .dh-nav-item.active::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 4px;
    background: #1f316f;
  }

  .dh-nav-item svg {
    width: 19px;
    height: 19px;
    flex: 0 0 19px;
    color: currentColor;
  }

  .dh-logout-wrapper {
    padding: 0 26px 28px 24px;
    box-sizing: border-box;
  }

  .dh-logout {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    min-height: 56px;
    border: 0;
    border-radius: 999px;
    background: linear-gradient(135deg, #23326d 0%, #3154c9 100%);
    color: #ffffff;
    cursor: pointer;
    font: 700 14px/1 'Plus Jakarta Sans', sans-serif;
  }

  .dh-logout svg {
    width: 18px;
    height: 18px;
  }
`,Pi=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1.5`})]}),Fi=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,L.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,L.jsx)(`line`,{x1:`8`,y1:`13`,x2:`16`,y2:`13`}),(0,L.jsx)(`line`,{x1:`8`,y1:`17`,x2:`16`,y2:`17`})]}),Ii=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M12 20h9`}),(0,L.jsx)(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z`})]}),Li=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8.2L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z`}),(0,L.jsx)(`path`,{d:`M12 12h5`}),(0,L.jsx)(`path`,{d:`M14.5 9.5v5`})]}),Ri=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M9 11l3 3L22 4`}),(0,L.jsx)(`path`,{d:`M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11`})]}),zi=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,children:[(0,L.jsx)(`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`}),(0,L.jsx)(`polyline`,{points:`16 17 21 12 16 7`}),(0,L.jsx)(`line`,{x1:`21`,y1:`12`,x2:`9`,y2:`12`})]}),Bi={grid:(0,L.jsx)(Pi,{}),file:(0,L.jsx)(Fi,{}),edit:(0,L.jsx)(Ii,{}),folder:(0,L.jsx)(Li,{}),check:(0,L.jsx)(Ri,{})};function Vi({role:e=`user`,onLogout:t=()=>{}}){let n=P(),r=ct(),i=String(e).toLowerCase(),a=z[i]||z.user,o=a.items,s=e=>(e.match||[e.path]).some(e=>n.pathname===e||n.pathname.startsWith(`${e}/`));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:B}),(0,L.jsxs)(`aside`,{className:`dh-sidebar`,children:[(0,L.jsx)(`div`,{className:`dh-sidebar-title`,children:a.title}),(0,L.jsx)(`nav`,{className:`dh-nav`,children:o.map(e=>(0,L.jsxs)(`button`,{className:`dh-nav-item${s(e)?` active`:``}`,type:`button`,onClick:()=>r(e.path,{state:{role:i}}),children:[Bi[e.iconKey],e.label]},e.key))}),(0,L.jsx)(`div`,{className:`dh-logout-wrapper`,children:(0,L.jsxs)(`button`,{className:`dh-logout`,type:`button`,onClick:t,children:[(0,L.jsx)(zi,{}),`Logout`]})})]})]})}var Hi=`/api`,Ui=Hi.replace(/\/api\/?$/,``),Wi=`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`;function Gi(){return localStorage.getItem(`access`)||localStorage.getItem(`accessToken`)||localStorage.getItem(`pahamAccessToken`)||``}function Ki(e,t={}){let n=globalThis.location?.origin||`http://127.0.0.1:8000`,r=new URL(`${Hi}${e}`,n);return Object.entries(t).forEach(([e,t])=>{t!=null&&t!==``&&r.searchParams.set(e,t)}),r.toString()}async function qi(e,{params:t,auth:n=!1,...r}={}){let i=new Headers(r.headers||{}),a=Gi();if(i.has(`Accept`)||i.set(`Accept`,`application/json`),n&&!a)throw Error(`Silakan login terlebih dahulu.`);!i.has(`Content-Type`)&&r.body&&i.set(`Content-Type`,`application/json`),n&&a&&i.set(`Authorization`,`Bearer ${a}`);let o=await fetch(Ki(e,t),{...r,headers:i});if(o.status===401||o.status===403)throw Error(`Tidak memiliki akses.`);if(!o.ok)throw Error(`API gagal: ${o.status}`);return o.status===204?null:o.json()}function Ji(e){return Array.isArray(e)?e:Array.isArray(e?.results)?e.results:[]}function Yi(e){return e?/^https?:\/\//i.test(e)?e:`${Ui}${e.startsWith(`/`)?e:`/${e}`}`:Wi}function Xi(e){return e?new Intl.DateTimeFormat(`id-ID`,{day:`2-digit`,month:`short`,year:`numeric`}).format(new Date(e)):``}function Zi(e={}){let t=Yi(e.gambar_url||e.image||e.thumbnail),n=Array.isArray(e.komentar)?e.komentar.length:Number(e.comments||0),r=e.reaksi_summary||{},i=Object.values(r).reduce((e,t)=>e+Number(t||0),Number(e.likes||0));return{id:e.id_berita||e.id,apiId:e.id_berita||e.apiId||e.id,title:e.judul||e.title||`Untitled Article`,category:e.kategori_detail?.nama_kategori||e.category||`General`,categoryId:e.id_kategori||e.categoryId,excerpt:e.ringkasan||e.excerpt||e.synopsis||``,synopsis:e.ringkasan||e.synopsis||e.excerpt||``,body:e.isi_lengkap||e.body||e.content||``,content:e.isi_lengkap||e.content||e.body||``,image:t,thumbnail:t,readTime:e.read_time||e.readTime||`2 min read`,status:String(e.status||`draft`).toLowerCase(),author:e.penulis_detail||e.author||`Redaksi Paham.ID`,authorAvatar:e.authorAvatar||``,date:Xi(e.tanggal_publikasi||e.created_at||e.date),likes:i,comments:n,rejectionReason:e.feedback_admin||e.rejectionReason||null}}function Qi(e={}){return{id:e.id_kategori,apiId:e.id_kategori,name:e.nama_kategori,slug:e.slug,description:e.deskripsi||``,order:e.urutan_tampil||1,count:e.jumlah_artikel||0,updatedAt:Xi(e.tgl_diperbarui)}}async function $i(e={}){return Gi(),Ji(await qi(`/berita/`,{params:e,auth:!!(e.all||e.author)})).map(Zi)}async function ea(){return Ji(await qi(`/kategori/`)).map(Qi)}async function ta(){let e=await qi(`/dashboard/summary/`,{auth:!0});return e&&!Array.isArray(e)?e:null}async function na(e){return qi(`/berita/${e}/`,{method:`DELETE`,auth:!0})}async function ra(e){return qi(`/berita/`,{method:`POST`,auth:!0,body:JSON.stringify(e)})}async function ia(e,t){return qi(`/berita/${e}/`,{method:`PATCH`,auth:!0,body:JSON.stringify(t)})}async function aa(e){return qi(`/kategori/`,{method:`POST`,auth:!0,body:JSON.stringify(e)})}async function oa(e,t){return qi(`/kategori/${e}/`,{method:`PATCH`,auth:!0,body:JSON.stringify(t)})}async function sa(e){return qi(`/kategori/${e}/`,{method:`DELETE`,auth:!0})}var ca=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --dashboard-sidebar-width: 260px;
    --dashboard-header-height: 76px;
  }

  .db-page-content {
    min-height: calc(100vh - var(--dashboard-header-height));
    margin-left: var(--dashboard-sidebar-width);
    margin-top: var(--dashboard-header-height);
    padding: 30px 32px 48px;
    background: #f7f7f8;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .db-stats-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 32px;
  }

  .db-stat-card {
    min-height: 116px;
    padding: 24px;
    border: 1px solid #eef1f6;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .db-stat-label {
    margin: 0 0 10px;
    color: #697386;
    font-size: 15px;
    font-weight: 500;
  }

  .db-stat-value {
    margin: 0;
    color: #0646a8;
    font-size: 30px;
    font-weight: 800;
    line-height: 1;
  }

  .db-stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 48px;
  }

  .db-stat-icon svg {
    width: 22px;
    height: 22px;
  }

  .db-stat-icon-blue { background: #dfe7ff; color: #0646a8; }
  .db-stat-icon-steel { background: #dbe3f0; color: #5f6b7a; }
  .db-stat-icon-coral { background: #ffd8cf; color: #bb4b47; }

  .db-cta-banner {
    min-height: 296px;
    margin-bottom: 32px;
    padding: 56px 32px;
    border-radius: 10px;
    background: linear-gradient(115deg, #0646a8 0%, #0b4eb3 55%, #1f5fb7 100%);
    box-shadow: 0 16px 26px rgba(3, 36, 91, 0.18);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    box-sizing: border-box;
  }

  .db-cta-left {
    width: min(100%, 380px);
  }

  .db-cta-title {
    margin: 0 0 22px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.35;
  }

  .db-cta-desc {
    max-width: 320px;
    margin: 0 0 26px;
    color: rgba(255, 255, 255, 0.86);
    font-size: 16px;
    line-height: 1.52;
  }

  .db-cta-btn {
    min-width: 194px;
    min-height: 48px;
    padding: 0 24px;
    border: 0;
    border-radius: 7px;
    background: #ffffff;
    color: #0646a8;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font: 600 16px/1 'Plus Jakarta Sans', sans-serif;
  }

  .db-cta-btn svg {
    width: 20px;
    height: 20px;
  }

  .db-cta-right {
    width: min(100%, 270px);
    min-height: 72px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.13);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
  }

  .db-cta-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 10px 8px;
    text-align: center;
  }

  .db-cta-stat-label,
  .db-cta-stat-value {
    margin: 0;
    color: #ffffff;
  }

  .db-cta-stat-label {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.88;
  }

  .db-cta-stat-value {
    font-size: 16px;
    font-weight: 700;
  }

  .db-recent-panel {
    overflow: hidden;
    border: 1px solid #edf1f6;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
  }

  .db-recent-header {
    min-height: 72px;
    padding: 0 24px;
    border-bottom: 1px solid #eef1f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-sizing: border-box;
  }

  .db-recent-title {
    margin: 0;
    color: #24272f;
    font-size: 15px;
    font-weight: 500;
  }

  .db-recent-viewall {
    border: 0;
    background: transparent;
    color: #0646a8;
    cursor: pointer;
    font: 500 15px/1 'Plus Jakarta Sans', sans-serif;
  }

  .db-article-row {
    min-height: 128px;
    padding: 24px;
    border-bottom: 1px solid #eef1f6;
    display: grid;
    grid-template-columns: 80px minmax(0, 1fr) 190px;
    align-items: center;
    gap: 24px;
    box-sizing: border-box;
  }

  .db-article-row:last-child {
    border-bottom: 0;
  }

  .db-article-thumb {
    width: 80px;
    height: 80px;
    border-radius: 7px;
    object-fit: cover;
    background: #111827;
    display: block;
  }

  .db-article-meta {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .db-article-category {
    min-height: 20px;
    padding: 3px 10px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
  }

  .cat-technology { background: #e6efff; color: #0646a8; }
  .cat-economics { background: #fff0e8; color: #a83d13; }
  .cat-environment { background: #e7f8ed; color: #0d8b45; }
  .cat-politics { background: #fff5dc; color: #986a0d; }
  .cat-social { background: #fce8f3; color: #a82064; }
  .cat-education { background: #edf0ff; color: #3f46a9; }

  .db-article-date {
    position: relative;
    padding-left: 12px;
    color: #596575;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1;
  }

  .db-article-date::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #596575;
    transform: translateY(-50%);
  }

  .db-article-title-text {
    max-width: 590px;
    margin: 0;
    color: #20242b;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .db-article-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 34px;
  }

  .db-status-badge {
    min-width: 86px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #566171;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
  }

  .db-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
  }

  .status-published { color: #2ebd68; }
  .status-pending { color: #ff8c34; }
  .status-draft { color: #566171; }
  .status-rejected { color: #d94848; }

  .db-article-actions {
    display: inline-flex;
    align-items: center;
    gap: 18px;
  }

  .db-action-icon-btn {
    width: 22px;
    height: 22px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #566171;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .db-action-icon-btn svg {
    width: 20px;
    height: 20px;
  }
`,la=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,L.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,L.jsx)(`line`,{x1:`8`,y1:`13`,x2:`16`,y2:`13`}),(0,L.jsx)(`line`,{x1:`8`,y1:`17`,x2:`16`,y2:`17`})]}),ua=()=>(0,L.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,L.jsx)(`path`,{d:`M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z`})}),da=()=>(0,L.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,L.jsx)(`path`,{d:`M20 3H4a2 2 0 0 0-2 2v15.2a.8.8 0 0 0 1.34.59L7.2 17H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z`})}),fa=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,L.jsx)(`path`,{d:`M12 20h9`}),(0,L.jsx)(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z`})]}),pa=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`polyline`,{points:`3 6 5 6 21 6`}),(0,L.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}),(0,L.jsx)(`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`})]});function ma(e=0){let t=Number(e)||0;return t>=1e3?`${(t/1e3).toFixed(1).replace(/\.0$/,``)}K`:String(t)}function ha(e=``){return e.toLowerCase().split(` `).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function ga(e=``){let t=e.toLowerCase();return t===`technology`?`cat-technology`:t===`economics`?`cat-economics`:t===`environment`?`cat-environment`:t===`politics`?`cat-politics`:t===`social`?`cat-social`:t===`education`?`cat-education`:`cat-technology`}function _a(e=``){let t=e.toLowerCase();return t===`published`?{label:`Published`,cls:`status-published`}:t===`pending`?{label:`Pending`,cls:`status-pending`}:t===`draft`?{label:`Draft`,cls:`status-draft`}:t===`rejected`?{label:`Rejected`,cls:`status-rejected`}:{label:e||`Draft`,cls:`status-draft`}}function va({dashboardData:e,user:t,articles:n,onCreateArticle:r,onViewAll:i,onEditArticle:a,onDeleteArticle:o}){let s=ct(),[c,l]=(0,_.useState)({profile:{name:`User`,username:`@user`,totalArticles:0,totalLikes:0,totalComments:0},articles:[],recentArticles:[],stats:{totalArticles:0,totalLikes:0,totalComments:0,drafts:0,pending:0,published:0,rejected:0},cta:{title:`Tulis berita baru untuk dibaca publik.`,description:`Kelola draft, ajukan artikel, dan pantau status publikasi dari dashboard ini.`,buttonLabel:`Write News`},recentLimit:3});(0,_.useEffect)(()=>{let e=!0;return Promise.all([ta().catch(()=>null),$i({author:`me`}).catch(()=>[])]).then(([t,n])=>{if(!e)return;let r=t?.stats||{};l(e=>({...e,articles:n,recentArticles:t?.recent_articles?t.recent_articles.map(Zi):n.slice(0,3),stats:{totalArticles:r.total_articles??n.length,totalLikes:r.total_likes??0,totalComments:r.total_comments??0,drafts:n.filter(e=>e.status===`draft`).length,pending:n.filter(e=>e.status===`pending`).length,published:n.filter(e=>e.status===`published`).length,rejected:n.filter(e=>e.status===`rejected`).length}}))}),()=>{e=!1}},[]);let u=e||c,d=t||u.profile,f=n||u.recentArticles||u.articles||[],p=u.stats||{},m=u.cta||{},h=p.totalArticles??d.totalArticles??f.length,g=p.totalLikes??d.totalLikes??0,v=p.totalComments??d.totalComments??0,y=p.drafts??0,b=p.pending??0,x=p.published??0,S=f.slice(0,u.recentLimit||3);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:ca}),(0,L.jsxs)(`main`,{className:`db-page-content`,children:[(0,L.jsxs)(`section`,{className:`db-stats-row`,children:[(0,L.jsxs)(`article`,{className:`db-stat-card`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{className:`db-stat-label`,children:`Total Articles`}),(0,L.jsx)(`h2`,{className:`db-stat-value`,children:h})]}),(0,L.jsx)(`div`,{className:`db-stat-icon db-stat-icon-blue`,children:(0,L.jsx)(la,{})})]}),(0,L.jsxs)(`article`,{className:`db-stat-card`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{className:`db-stat-label`,children:`Likes`}),(0,L.jsx)(`h2`,{className:`db-stat-value`,children:ma(g)})]}),(0,L.jsx)(`div`,{className:`db-stat-icon db-stat-icon-steel`,children:(0,L.jsx)(ua,{})})]}),(0,L.jsxs)(`article`,{className:`db-stat-card`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{className:`db-stat-label`,children:`Comments`}),(0,L.jsx)(`h2`,{className:`db-stat-value`,children:v})]}),(0,L.jsx)(`div`,{className:`db-stat-icon db-stat-icon-coral`,children:(0,L.jsx)(da,{})})]})]}),(0,L.jsxs)(`section`,{className:`db-cta-banner`,children:[(0,L.jsxs)(`div`,{className:`db-cta-left`,children:[(0,L.jsx)(`h2`,{className:`db-cta-title`,children:m.title}),(0,L.jsx)(`p`,{className:`db-cta-desc`,children:m.description}),(0,L.jsxs)(`button`,{className:`db-cta-btn`,type:`button`,onClick:r||(()=>s(`/write`)),children:[(0,L.jsx)(fa,{}),m.buttonLabel]})]}),(0,L.jsxs)(`div`,{className:`db-cta-right`,children:[(0,L.jsxs)(`div`,{className:`db-cta-stat`,children:[(0,L.jsx)(`p`,{className:`db-cta-stat-label`,children:`Drafts`}),(0,L.jsx)(`h3`,{className:`db-cta-stat-value`,children:y})]}),(0,L.jsxs)(`div`,{className:`db-cta-stat`,children:[(0,L.jsx)(`p`,{className:`db-cta-stat-label`,children:`Pending`}),(0,L.jsx)(`h3`,{className:`db-cta-stat-value`,children:b})]}),(0,L.jsxs)(`div`,{className:`db-cta-stat`,children:[(0,L.jsx)(`p`,{className:`db-cta-stat-label`,children:`Published`}),(0,L.jsx)(`h3`,{className:`db-cta-stat-value`,children:x})]})]})]}),(0,L.jsxs)(`section`,{className:`db-recent-panel`,children:[(0,L.jsxs)(`div`,{className:`db-recent-header`,children:[(0,L.jsx)(`h3`,{className:`db-recent-title`,children:`Recent Articles`}),(0,L.jsx)(`button`,{className:`db-recent-viewall`,type:`button`,onClick:i||(()=>s(`/my-articles`)),children:`View all >`})]}),S.map(e=>{let t=_a(e.status),n=ga(e.category);return(0,L.jsxs)(`article`,{className:`db-article-row`,children:[(0,L.jsx)(`img`,{className:`db-article-thumb`,src:e.thumbnail||e.image,alt:e.title}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{className:`db-article-meta`,children:[(0,L.jsx)(`span`,{className:`db-article-category ${n}`,children:ha(e.category)}),(0,L.jsx)(`span`,{className:`db-article-date`,children:e.date})]}),(0,L.jsx)(`p`,{className:`db-article-title-text`,children:e.title})]}),(0,L.jsxs)(`div`,{className:`db-article-right`,children:[(0,L.jsxs)(`span`,{className:`db-status-badge ${t.cls}`,children:[(0,L.jsx)(`span`,{className:`db-status-dot`}),t.label]}),(0,L.jsxs)(`div`,{className:`db-article-actions`,children:[(0,L.jsx)(`button`,{className:`db-action-icon-btn`,type:`button`,title:`Edit`,onClick:()=>a?a(e):s(`/edit-article/${e.id}`,{state:{article:e}}),children:(0,L.jsx)(fa,{})}),(0,L.jsx)(`button`,{className:`db-action-icon-btn`,type:`button`,title:`Delete`,onClick:()=>o?o(e):console.log(`Delete article`,e.id),children:(0,L.jsx)(pa,{})})]})]})]},e.id)})]})]})]})}var ya=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --dashboard-sidebar-width: 260px;
    --dashboard-header-height: 76px;
  }

  .ea-page *,
  .ea-page *::before,
  .ea-page *::after,
  .rv-page *,
  .rv-page *::before,
  .rv-page *::after {
    box-sizing: border-box;
  }

  .ea-page,
  .rv-page {
    min-height: calc(100vh - var(--dashboard-header-height));
    margin-left: var(--dashboard-sidebar-width);
    margin-top: var(--dashboard-header-height);
    padding: 32px 42px 64px 60px;
    background: #f8f9fb;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #0f172a;
  }

  .ea-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }

  .ea-breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
  }

  .ea-breadcrumb-link {
    border: 0;
    background: transparent;
    padding: 0;
    color: #1d4ed8;
    font: inherit;
    cursor: pointer;
  }

  .ea-breadcrumb-sep {
    color: #cbd5e1;
  }

  .ea-save-top {
    min-width: 198px;
    height: 48px;
    border: 0;
    border-radius: 999px;
    background: #2f4bc8;
    color: #ffffff;
    font: 800 15px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    cursor: pointer;
    box-shadow: 0 10px 22px rgba(47, 75, 200, 0.18);
  }

  .ea-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 326px;
    gap: 26px;
    align-items: start;
  }

  .ea-left,
  .ea-right {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .ea-card {
    background: #ffffff;
    border: 1px solid #dce3ef;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.02);
  }

  .ea-card.compact {
    padding: 22px;
  }

  .ea-title-card {
    min-height: 144px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ea-synopsis-card {
    min-height: 248px;
  }

  .ea-body-card {
    min-height: 420px;
  }

  .ea-label {
    margin: 0 0 14px;
    color: #96a3b8;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .ea-section-title {
    margin: 0 0 5px;
    color: #020617;
    font-size: 18px;
    font-weight: 800;
  }

  .ea-section-subtitle {
    margin: 0 0 18px;
    color: #8b98ad;
    font-size: 14px;
    font-weight: 500;
  }

  .ea-title-input {
    width: 100%;
    min-height: 42px;
    border: 0;
    outline: 0;
    resize: none;
    background: transparent;
    color: #071426;
    font: 800 24px/1.35 'Plus Jakarta Sans', sans-serif;
  }

  .ea-textarea {
    width: 100%;
    border: 0;
    outline: 0;
    resize: none;
    background: transparent;
    color: #142033;
    font: 500 16px/1.75 'Plus Jakarta Sans', sans-serif;
  }

  .ea-title-input::placeholder,
  .ea-textarea::placeholder {
    color: #cbd5e1;
  }

  .ea-synopsis-box {
    width: 100%;
    min-height: 134px;
    border: 1px solid #e6ebf3;
    border-radius: 10px;
    padding: 18px 16px;
    background: #ffffff;
  }

  .ea-synopsis-box .ea-textarea {
    min-height: 96px;
  }

  .ea-body-textarea {
    min-height: 230px;
  }

  .ea-toolbar {
    height: 42px;
    margin: 8px 0 18px;
    padding: 0 12px;
    border-top: 1px solid #eef2f7;
    border-bottom: 1px solid #eef2f7;
    background: #fbfcfe;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .ea-tool-btn {
    width: 22px;
    height: 22px;
    border: 0;
    background: transparent;
    color: #64748b;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .ea-thumb {
    width: 100%;
    height: 164px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .ea-thumb-placeholder {
    width: 100%;
    height: 164px;
    border: 2px dashed #cbd5e1;
    border-radius: 10px;
    background: #f8fafc;
    margin-bottom: 12px;
    color: #94a3b8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
  }

  .ea-file-input {
    display: none;
  }

  .ea-upload-btn {
    width: 100%;
    height: 42px;
    border: 1px solid #dce3ef;
    border-radius: 9px;
    background: #ffffff;
    color: #334155;
    font: 700 14px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .ea-category-list {
    min-height: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .ea-category-tag {
    min-height: 28px;
    padding: 0 10px;
    border-radius: 7px;
    background: #e7edff;
    color: #2447d8;
    font-size: 12px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    text-transform: uppercase;
  }

  .ea-category-remove {
    border: 0;
    background: transparent;
    color: #64748b;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    line-height: 1;
  }

  .ea-category-form {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  .ea-category-select {
    width: 100%;
    height: 39px;
    border: 1px solid #dce3ef;
    border-radius: 8px;
    background: #f8fafc;
    color: #334155;
    padding: 0 12px;
    font: 500 13px/1 'Plus Jakarta Sans', sans-serif;
    outline: none;
  }

  .ea-check-title {
    margin: 0 0 18px;
    color: #020617;
    font-size: 16px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ea-check-ok {
    color: #22c55e;
    display: inline-flex;
  }

  .ea-metric-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 10px;
  }

  .ea-metric-label {
    color: #8b98ad;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 3px;
  }

  .ea-metric-value {
    color: #22c55e;
    font-size: 26px;
    font-weight: 800;
    line-height: 1;
  }

  .ea-metric-value.red {
    color: #dc2626;
  }

  .ea-metric-sub {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
  }

  .ea-progress {
    height: 6px;
    border-radius: 999px;
    background: #dbe3ef;
    overflow: hidden;
  }

  .ea-progress-fill {
    height: 100%;
    border-radius: 999px;
    background: #22c55e;
  }

  .ea-progress-fill.red {
    background: #dc2626;
  }

  .ea-warning {
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: #fee2e2;
    color: #dc2626;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .ea-action-stack {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ea-primary-btn {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 10px;
    font: 800 15px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    cursor: pointer;
  }

  .ea-primary-btn.save {
    background: #3155f6;
    color: #ffffff;
  }

  .ea-primary-btn.submit {
    background: #dfe6f0;
    color: #94a3b8;
    cursor: default;
    pointer-events: none;
  }

  .ea-primary-btn.submit.enabled {
    background: #8f8f8f;
    color: #ffffff;
    cursor: pointer;
    pointer-events: auto;
  }

  .ea-tips-title {
    margin: 0 0 14px;
    color: #111827;
    font-size: 16px;
    font-weight: 800;
  }

  .ea-tip {
    display: grid;
    grid-template-columns: 16px 1fr;
    gap: 8px;
    color: #4b5563;
    font-size: 11px;
    line-height: 1.35;
    margin-bottom: 11px;
  }

  .ea-tip:last-child {
    margin-bottom: 0;
  }

  .ea-tip-icon {
    width: 15px;
    height: 15px;
    border: 1.8px solid #2563eb;
    color: #2563eb;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
  }

  .rv-breadcrumb {
    margin-bottom: 18px;
  }

  .rv-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fef2f2;
    border: 1px solid #fca5a5;
    color: #dc2626;
    border-radius: 12px;
    padding: 12px 18px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .rv-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 326px;
    gap: 26px;
    align-items: start;
  }

  .rv-main {
    background: #ffffff;
    border: 1px solid #dce3ef;
    border-radius: 14px;
    overflow: hidden;
  }

  .rv-image {
    width: 100%;
    max-height: 330px;
    object-fit: cover;
    display: block;
  }

  .rv-body-label {
    padding: 20px 24px 0;
    color: #0f172a;
    font-size: 15px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rv-body-text {
    padding: 16px 24px 26px;
    color: #334155;
    font-size: 15px;
    line-height: 1.8;
  }

  .rv-body-text p {
    margin: 0 0 14px;
  }

  .rv-body-text p:last-child {
    margin-bottom: 0;
  }

  .rv-side {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .rv-action-title {
    margin: 0 0 12px;
    font-size: 15px;
    font-weight: 800;
  }

  .rv-action-btn {
    width: 100%;
    height: 44px;
    border: 0;
    border-radius: 10px;
    font: 800 14px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .rv-action-btn.edit {
    background: #eef2ff;
    color: #2447d8;
  }

  .rv-action-btn.delete {
    background: #fee2e2;
    color: #dc2626;
  }

  .ea-toast-wrap {
    position: fixed;
    top: 88px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    pointer-events: none;
  }

  .ea-toast {
    min-width: 220px;
    padding: 12px 18px;
    border-radius: 999px;
    background: #294bd6;
    color: #ffffff;
    font-size: 13px;
    font-weight: 800;
    text-align: center;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.18);
  }

  @media (max-width: 1120px) {
    .ea-page,
    .rv-page {
      margin-left: 0;
      padding: 24px;
    }

    .ea-layout,
    .rv-layout {
      grid-template-columns: 1fr;
    }

    .ea-right,
    .rv-side {
      width: 100%;
    }
  }
`,ba=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z`}),(0,L.jsx)(`polyline`,{points:`17 21 17 13 7 13 7 21`}),(0,L.jsx)(`polyline`,{points:`7 3 7 8 15 8`})]}),xa=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`line`,{x1:`22`,y1:`2`,x2:`11`,y2:`13`}),(0,L.jsx)(`polygon`,{points:`22 2 15 22 11 13 2 9 22 2`})]}),Sa=()=>(0,L.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#94a3b8`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),(0,L.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),(0,L.jsx)(`polyline`,{points:`21 15 16 10 5 21`})]}),Ca=()=>(0,L.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,L.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),wa=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`}),(0,L.jsx)(`line`,{x1:`12`,y1:`9`,x2:`12`,y2:`13`}),(0,L.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]}),Ta=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M12 20h9`}),(0,L.jsx)(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z`})]}),Ea=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`polyline`,{points:`3 6 5 6 21 6`}),(0,L.jsx)(`path`,{d:`M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6`}),(0,L.jsx)(`path`,{d:`M10 11v6`}),(0,L.jsx)(`path`,{d:`M14 11v6`}),(0,L.jsx)(`path`,{d:`M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2`})]}),Da=()=>(0,L.jsxs)(`svg`,{width:`26`,height:`26`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#94a3b8`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,L.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,L.jsx)(`line`,{x1:`8`,y1:`13`,x2:`16`,y2:`13`}),(0,L.jsx)(`line`,{x1:`8`,y1:`17`,x2:`12`,y2:`17`})]});function Oa(e){return e?.trim()?e.trim().split(/\s+/).length:0}function ka(e,t){return{id:e?.id||t||`article_${Date.now()}`,apiId:e?.apiId||e?.id||t,title:e?.title||``,synopsis:e?.synopsis||e?.excerpt||``,body:e?.body||``,thumbnail:e?.thumbnail||e?.image||``,image:e?.image||e?.thumbnail||``,category:e?.category||`General`,categoryId:e?.categoryId,excerpt:e?.excerpt||e?.synopsis||``,wordCount:e?.wordCount||0,readTime:e?.readTime||`0 min`,status:e?.status||`draft`,rejectionReason:e?.rejectionReason||null,date:e?.date||new Date().toLocaleDateString(`id-ID`)}}function Aa(){let[e,t]=(0,_.useState)(``);return{toast:e,showToast:e=>{t(e),setTimeout(()=>{t(``)},2200)}}}function ja(){let e=ct(),t=P(),{id:n}=ft(),r=(0,_.useRef)(null),{toast:i,showToast:a}=Aa(),o=t.state?.article,s=(0,_.useMemo)(()=>ka(o,n),[o,n]),[c,l]=(0,_.useState)(s.title),[u,d]=(0,_.useState)(s.synopsis),[f,p]=(0,_.useState)(s.body),[m,h]=(0,_.useState)(s.thumbnail),[g,v]=(0,_.useState)(s.category),[y,b]=(0,_.useState)(!!s.category),[x,S]=(0,_.useState)([]);(0,_.useEffect)(()=>{let e=!0;return ea().then(t=>{e&&(S(t),!s.category&&t[0]?.name&&(v(t[0].name),b(!0)))}).catch(()=>{e&&S([])}),()=>{e=!1}},[s.category]);let C=Oa(u),w=C>400,ee=Math.min(100,C/400*100),T=C===0?0:Math.max(1,Math.ceil(C/200)),E=!w&&C>=30&&c.trim().length>0,D=e=>{v(e.target.value),b(!0)},te=()=>{b(!1)},ne=()=>{r.current?.click()},O=e=>{if(e){if(![`image/jpeg`,`image/jpg`,`image/png`].includes(e.type)){a(`Format gambar harus JPG atau PNG`);return}if(e.size>2097152){a(`Ukuran gambar maksimal 2MB`);return}h(URL.createObjectURL(e))}},re=e=>{let t=e.target.files?.[0];O(t),e.target.value=``},ie=e=>{e.preventDefault();let t=e.dataTransfer.files?.[0];O(t)},ae=(e={})=>({...s,title:c,synopsis:u,body:f,thumbnail:m,image:m,category:y?g:`General`,excerpt:u.slice(0,120)||s.excerpt||``,wordCount:C,readTime:`${T} min`,updatedAt:new Date().toISOString(),...e}),oe=e=>{let t=x.find(t=>t.name===e.category);return ia(s.apiId||s.id,{judul:e.title,ringkasan:e.synopsis,isi_lengkap:e.body,status:e.status,id_kategori:t?.apiId||s.categoryId,read_time:e.readTime})},k=()=>{let t=ae({status:`draft`,rejectionReason:null});oe(t).catch(()=>{}),a(`Artikel Berhasil Diperbarui`),setTimeout(()=>{e(`/my-articles`,{state:{updatedArticle:t}})},800)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:ya}),i&&(0,L.jsx)(`div`,{className:`ea-toast-wrap`,children:(0,L.jsx)(`div`,{className:`ea-toast`,children:i})}),(0,L.jsxs)(`main`,{className:`ea-page`,children:[(0,L.jsxs)(`div`,{className:`ea-topbar`,children:[(0,L.jsxs)(`div`,{className:`ea-breadcrumb`,children:[(0,L.jsx)(`button`,{className:`ea-breadcrumb-link`,type:`button`,onClick:()=>{e(-1)},children:`My Articles`}),(0,L.jsx)(`span`,{className:`ea-breadcrumb-sep`,children:`›`}),(0,L.jsx)(`span`,{children:`Edit Article`})]}),(0,L.jsxs)(`button`,{className:`ea-save-top`,type:`button`,onClick:k,children:[(0,L.jsx)(ba,{}),`Save Changes`]})]}),s.rejectionReason&&(0,L.jsxs)(`div`,{className:`rv-banner`,children:[(0,L.jsx)(wa,{}),s.rejectionReason]}),(0,L.jsxs)(`div`,{className:`ea-layout`,children:[(0,L.jsxs)(`section`,{className:`ea-left`,children:[(0,L.jsxs)(`div`,{className:`ea-card ea-title-card`,children:[(0,L.jsx)(`p`,{className:`ea-label`,children:`Judul Artikel`}),(0,L.jsx)(`textarea`,{className:`ea-title-input`,rows:2,value:c,onChange:e=>l(e.target.value),placeholder:`Masukkan judul yang menarik...`})]}),(0,L.jsxs)(`div`,{className:`ea-card ea-synopsis-card`,children:[(0,L.jsx)(`h2`,{className:`ea-section-title`,children:`Ringkasan (Paham 2 Menit)`}),(0,L.jsx)(`p`,{className:`ea-section-subtitle`,children:`Tulis inti berita untuk pembaca cepat.`}),(0,L.jsx)(`div`,{className:`ea-synopsis-box`,children:(0,L.jsx)(`textarea`,{className:`ea-textarea`,value:u,onChange:e=>d(e.target.value),placeholder:`Tuliskan ringkasan singkat di sini...`,style:w?{color:`#dc2626`}:{}})})]}),(0,L.jsxs)(`div`,{className:`ea-card ea-body-card`,children:[(0,L.jsx)(`h2`,{className:`ea-section-title`,children:`Artikel Lengkap`}),(0,L.jsx)(`p`,{className:`ea-section-subtitle`,children:`Tuliskan versi lengkap artikel di sini.`}),(0,L.jsxs)(`div`,{className:`ea-toolbar`,children:[(0,L.jsx)(`button`,{className:`ea-tool-btn`,type:`button`,style:{fontWeight:800},children:`B`}),(0,L.jsx)(`button`,{className:`ea-tool-btn`,type:`button`,style:{fontStyle:`italic`},children:`I`}),(0,L.jsx)(`button`,{className:`ea-tool-btn`,type:`button`,children:`≡`}),(0,L.jsx)(`button`,{className:`ea-tool-btn`,type:`button`,children:`→`}),(0,L.jsx)(`button`,{className:`ea-tool-btn`,type:`button`,children:`“`})]}),(0,L.jsx)(`textarea`,{className:`ea-textarea ea-body-textarea`,value:f,onChange:e=>p(e.target.value),placeholder:`Mulai menulis detail berita...`})]})]}),(0,L.jsxs)(`aside`,{className:`ea-right`,children:[(0,L.jsxs)(`div`,{className:`ea-card compact`,children:[(0,L.jsx)(`p`,{className:`ea-label`,children:`Gambar Unggulan`}),m?(0,L.jsx)(`img`,{className:`ea-thumb`,src:m,alt:c,onClick:ne}):(0,L.jsxs)(`button`,{className:`ea-thumb-placeholder`,type:`button`,onClick:ne,onDragOver:e=>e.preventDefault(),onDrop:ie,children:[(0,L.jsx)(Sa,{}),(0,L.jsx)(`span`,{children:`Klik atau seret gambar ke sini`}),(0,L.jsx)(`span`,{style:{fontSize:10,color:`#cbd5e1`},children:`JPG, PNG (Maks. 2MB)`})]}),(0,L.jsx)(`input`,{ref:r,className:`ea-file-input`,type:`file`,accept:`image/jpeg,image/jpg,image/png`,onChange:re}),(0,L.jsx)(`button`,{className:`ea-upload-btn`,type:`button`,onClick:ne,children:`Ganti Gambar`})]}),(0,L.jsxs)(`div`,{className:`ea-card compact`,children:[(0,L.jsx)(`p`,{className:`ea-label`,children:`Kategori`}),(0,L.jsx)(`div`,{className:`ea-category-list`,children:y?(0,L.jsxs)(`span`,{className:`ea-category-tag`,children:[g,(0,L.jsx)(`button`,{className:`ea-category-remove`,type:`button`,onClick:te,children:`×`})]}):(0,L.jsx)(`span`,{style:{fontSize:12,color:`#94a3b8`},children:`Belum ada kategori`})}),(0,L.jsx)(`div`,{className:`ea-category-form`,children:(0,L.jsx)(`select`,{className:`ea-category-select`,value:g,onChange:D,children:x.map(e=>(0,L.jsx)(`option`,{value:e.name,children:e.name},e.id))})})]}),(0,L.jsxs)(`div`,{className:`ea-card compact`,children:[(0,L.jsxs)(`h2`,{className:`ea-check-title`,children:[`Pemeriksaan Publikasi Ringkasan`,!w&&C>0&&(0,L.jsx)(`span`,{className:`ea-check-ok`,children:(0,L.jsx)(Ca,{})})]}),(0,L.jsxs)(`div`,{className:`ea-metric-row`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`ea-metric-label`,children:`Word Count`}),(0,L.jsxs)(`div`,{className:`ea-metric-value${w?` red`:``}`,children:[C,` `,(0,L.jsxs)(`span`,{className:`ea-metric-sub`,children:[`/ `,400]})]})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`ea-metric-label`,children:`Read Time`}),(0,L.jsxs)(`div`,{className:`ea-metric-value${w?` red`:``}`,children:[T,` `,(0,L.jsx)(`span`,{className:`ea-metric-sub`,children:`min`})]})]})]}),(0,L.jsx)(`div`,{className:`ea-progress`,children:(0,L.jsx)(`div`,{className:`ea-progress-fill${w?` red`:``}`,style:{width:`${ee}%`}})}),w&&(0,L.jsxs)(`div`,{className:`ea-warning`,children:[(0,L.jsx)(wa,{}),`Article exceeds 2-minute reading limit.`]}),(0,L.jsxs)(`div`,{className:`ea-action-stack`,children:[(0,L.jsxs)(`button`,{className:`ea-primary-btn save`,type:`button`,onClick:k,children:[(0,L.jsx)(ba,{}),`Save Draft`]}),(0,L.jsxs)(`button`,{className:`ea-primary-btn submit${E?` enabled`:``}`,type:`button`,onClick:()=>{if(!E)return;let t=ae({status:`pending`,rejectionReason:null});oe(t).catch(()=>{}),a(`Artikel Berhasil Dikirim`),setTimeout(()=>{e(`/my-articles`,{state:{updatedArticle:t}})},800)},disabled:!E,children:[(0,L.jsx)(xa,{}),`Submit to Admin`]})]})]}),(0,L.jsxs)(`div`,{className:`ea-card compact`,children:[(0,L.jsx)(`h2`,{className:`ea-tips-title`,children:`Tips Menulis 💡`}),Ni.map(e=>(0,L.jsxs)(`div`,{className:`ea-tip`,children:[(0,L.jsx)(`span`,{className:`ea-tip-icon`,children:(0,L.jsx)(Ca,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`strong`,{children:[e.title,`:`]}),` `,e.tip]})]},e.id))]})]})]})]})]})}function Ma({article:e,onEdit:t,onDelete:n,onBack:r}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:ya}),(0,L.jsxs)(`main`,{className:`rv-page`,children:[(0,L.jsxs)(`div`,{className:`ea-breadcrumb rv-breadcrumb`,children:[(0,L.jsx)(`button`,{className:`ea-breadcrumb-link`,type:`button`,onClick:r,children:`My Articles`}),(0,L.jsx)(`span`,{className:`ea-breadcrumb-sep`,children:`›`}),(0,L.jsx)(`span`,{children:`Detail Artikel`})]}),(0,L.jsxs)(`div`,{className:`rv-banner`,children:[(0,L.jsx)(wa,{}),e.rejectionReason||`Artikel Ditolak oleh Admin`]}),(0,L.jsxs)(`div`,{className:`rv-layout`,children:[(0,L.jsxs)(`section`,{className:`rv-main`,children:[(0,L.jsx)(`img`,{className:`rv-image`,src:e.thumbnail||e.image||`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,alt:e.title}),(0,L.jsxs)(`div`,{className:`rv-body-label`,children:[(0,L.jsx)(Da,{}),`Artikel Lengkap`]}),(0,L.jsx)(`div`,{className:`rv-body-text`,children:(e.body||``).split(`

`).map((e,t)=>(0,L.jsx)(`p`,{children:e},t))})]}),(0,L.jsxs)(`aside`,{className:`rv-side`,children:[(0,L.jsxs)(`div`,{className:`ea-card compact`,children:[(0,L.jsx)(`h2`,{className:`rv-action-title`,children:`Quick Action`}),(0,L.jsxs)(`button`,{className:`rv-action-btn edit`,type:`button`,onClick:()=>t(e),children:[(0,L.jsx)(Ta,{}),`Edit`]}),(0,L.jsxs)(`button`,{className:`rv-action-btn delete`,type:`button`,onClick:()=>n(e),children:[(0,L.jsx)(Ea,{}),`Hapus`]})]}),(0,L.jsxs)(`div`,{className:`ea-card compact`,children:[(0,L.jsx)(`h2`,{className:`ea-tips-title`,children:`Tips Menulis 💡`}),Ni.map(e=>(0,L.jsxs)(`div`,{className:`ea-tip`,children:[(0,L.jsx)(`span`,{className:`ea-tip-icon`,children:(0,L.jsx)(Ca,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`strong`,{children:[e.title,`:`]}),` `,e.tip]})]},e.id))]})]})]})]})]})}var Na=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --dashboard-sidebar-width: 260px;
    --dashboard-header-height: 76px;
  }

  .ma-page {
    min-height: calc(100vh - var(--dashboard-header-height));
    margin-left: var(--dashboard-sidebar-width);
    margin-top: var(--dashboard-header-height);
    padding: 30px 85px 56px;
    background: #f8f8f9;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .ma-shell {
    width: 1074px;
    max-width: 100%;
    box-sizing: border-box;
  }

  .ma-top {
    width: 1074px;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 36px;
  }

  .ma-heading {
    width: 360px;
    flex: 0 0 360px;
  }

  .ma-title {
    margin: 0 0 10px;
    color: #171923;
    font-size: 15px;
    font-weight: 500;
  }

  .ma-subtitle {
    margin: 0;
    color: #5f6b7a;
    font-size: 15px;
    line-height: 1.5;
  }

  .ma-tabs {
    width: 600px;
    height: 48px;
    margin-left: auto;
    padding: 4px;
    border: 1px solid #d8dee8;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.16);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    box-sizing: border-box;
    flex: 0 0 600px;
  }

  .ma-tab {
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #566171;
    cursor: pointer;
    font: 500 14px/1 'Plus Jakarta Sans', sans-serif;
  }

  .ma-tab.active {
    background: #0646a8;
    color: #ffffff;
  }

  .ma-grid {
    width: 1074px;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 342px);
    gap: 30px 24px;
    align-items: start;
    justify-content: start;
  }

  .ma-card,
  .ma-new-card {
    width: 342px;
    height: 456px;
    box-sizing: border-box;
  }

  .ma-card {
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 14px 26px rgba(15, 23, 42, 0.07);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .ma-thumb {
    position: relative;
    height: 190px;
    background: #e5e7eb;
    overflow: hidden;
    flex-shrink: 0;
  }

  .ma-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .ma-badge {
    position: absolute;
    top: 14px;
    right: 16px;
    min-height: 28px;
    padding: 5px 14px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .ma-badge.draft {
    background: #e9f0ff;
    color: #0646d8;
  }

  .ma-badge.pending {
    background: #fff1c9;
    color: #cf7100;
  }

  .ma-badge.published {
    background: #d9f8e2;
    color: #168a3a;
  }

  .ma-badge.rejected {
    background: #ffe0df;
    color: #e1272d;
  }

  .ma-body {
    padding: 22px 24px 14px;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
  }

  .ma-card-title {
    height: 48px;
    margin: 0 0 12px;
    color: #161923;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ma-excerpt {
    height: 60px;
    margin: 0 0 15px;
    color: #5f6b7a;
    font-size: 14px;
    line-height: 1.48;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ma-meta {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    color: #465464;
    font-size: 12px;
    margin-bottom: 14px;
  }

  .ma-meta span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .ma-footer {
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid #eef1f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .ma-actions {
    display: inline-flex;
    align-items: center;
    gap: 16px;
  }

  .ma-icon-btn {
    width: 22px;
    height: 22px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #465464;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .ma-icon-btn:hover {
    color: #0646a8;
  }

  .ma-icon-btn.danger {
    color: #e1272d;
  }

  .ma-status-btn {
    min-width: 120px;
    height: 40px;
    padding: 0 14px;
    border: 0;
    border-radius: 8px;
    color: #4b5563;
    background: #e6edf8;
    font: 500 14px/1 'Plus Jakarta Sans', sans-serif;
    cursor: default;
  }

  .ma-status-btn.submit {
    color: #ffffff;
    background: #064fe0;
    cursor: pointer;
  }

  .ma-status-btn.live {
    background: #f0eeee;
    color: #4b5563;
  }

  .ma-new-card {
    border: 2px dashed #c6cfdf;
    border-radius: 8px;
    background: transparent;
    color: #111827;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .ma-new-inner {
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ma-new-icon {
    width: 62px;
    height: 62px;
    margin-bottom: 18px;
    border-radius: 50%;
    background: #ececec;
    color: #0646a8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ma-new-title {
    margin: 0 0 12px;
    color: #171923;
    font-size: 16px;
    font-weight: 500;
  }

  .ma-new-text {
    margin: 0;
    color: #5f6b7a;
    font-size: 14px;
    line-height: 1.45;
  }

  .ma-modal-layer {
    position: fixed;
    inset: 0;
    z-index: 300;
    background: rgba(17, 24, 39, 0.48);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ma-modal {
    width: min(560px, calc(100vw - 40px));
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.24);
    overflow: hidden;
  }

  .ma-modal-body {
    padding: 32px 30px 36px;
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 22px;
    align-items: start;
  }

  .ma-modal-icon {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #fee2e2;
    color: #e1272d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ma-modal-title {
    margin: 0 0 28px;
    color: #111827;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 26px;
    font-weight: 800;
  }

  .ma-modal-text {
    margin: 0;
    color: #566171;
    font-size: 18px;
    line-height: 1.6;
  }

  .ma-modal-footer {
    padding: 22px 30px 20px;
    background: #f8fafc;
    display: flex;
    justify-content: flex-end;
    gap: 14px;
  }

  .ma-modal-btn {
    min-width: 110px;
    min-height: 56px;
    border-radius: 8px;
    font: 700 18px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .ma-modal-btn.cancel {
    border: 1px solid #cfd6df;
    background: #ffffff;
    color: #374151;
  }

  .ma-modal-btn.delete {
    border: 0;
    background: #e1272d;
    color: #ffffff;
  }

  .ma-toast-wrap {
    position: fixed;
    top: 86px;
    left: 50%;
    z-index: 400;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
  }

  .ma-toast {
    min-height: 46px;
    padding: 0 24px;
    border-radius: 999px;
    color: #ffffff;
    background: #16a34a;
    box-shadow: 0 12px 26px rgba(15, 23, 42, 0.25);
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 800;
  }

  .ma-toast.deleted {
    background: #ef4444;
  }

  .ma-toast.submitted {
    background: #1d9bf0;
  }

  .ma-toast.updated {
    background: #16a34a;
  }

  @media (max-width: 1120px) {
    .ma-page {
      margin-left: 0;
      padding: 24px;
    }

    .ma-shell,
    .ma-top,
    .ma-grid {
      width: 100%;
      max-width: 100%;
    }

    .ma-top {
      flex-direction: column;
    }

    .ma-heading {
      width: 100%;
      flex-basis: auto;
    }

    .ma-tabs {
      width: min(600px, 100%);
      flex-basis: auto;
      margin-left: 0;
    }

    .ma-grid {
      grid-template-columns: repeat(2, 342px);
      justify-content: start;
    }
  }

  @media (max-width: 760px) {
    .ma-grid {
      grid-template-columns: 1fr;
    }

    .ma-card,
    .ma-new-card {
      width: 100%;
    }
  }
`,Pa=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M12 20h9`}),(0,L.jsx)(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z`})]}),Fa=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`polyline`,{points:`3 6 5 6 21 6`}),(0,L.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}),(0,L.jsx)(`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`})]}),Ia=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 26 26`,width:`20`,height:`20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M8 11v10`}),(0,L.jsx)(`path`,{d:`M8 11H5.5A1.8 1.8 0 0 0 3.7 12.8v6.4A1.8 1.8 0 0 0 5.5 21H8`}),(0,L.jsx)(`path`,{d:`M8 11l4.4-6.4c.6-.8 1.9-.4 1.9.7V10h5.2c1.3 0 2.2 1.1 1.9 2.4L20 18.8A2.7 2.7 0 0 1 17.4 21H8`})]}),La=()=>(0,L.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,L.jsx)(`path`,{d:`M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`})}),Ra=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`28`,height:`28`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,children:[(0,L.jsx)(`path`,{d:`M12 5v14`}),(0,L.jsx)(`path`,{d:`M5 12h14`})]}),za=()=>(0,L.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,children:[(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,L.jsx)(`path`,{d:`m8.5 12.3 2.2 2.2 4.8-5`})]});function Ba(e){let t=String(e.status||`draft`).toLowerCase(),n=t===`rejected`;return{...e,status:t,thumbnail:e.thumbnail||e.image||`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`,image:e.image||e.thumbnail||`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80`,likes:Number(e.likes??e.reactions?.likes??0),comments:Number(e.comments??e.reactions?.comments??0),excerpt:e.excerpt||e.synopsis||``,rejectionReason:n?e.rejectionReason||`Artikel Terlalu Panjang Dan Bertele-tele`:null}}function Va(e){return e===`draft`?`Submit to Admin`:e===`published`?`Live on Site`:e===`rejected`?`Rejected`:`Reviewing`}function Ha(e){return e===`deleted`?`Artikel Berhasil Dihapus`:e===`submitted`?`Artikel Berhasil Dikirim`:`Artikel Berhasil Diperbarui`}function Ua({article:e,onEdit:t,onDelete:n,onSubmit:r,onRejectedDetail:i}){let a=e.status===`draft`,o=e.status===`rejected`,s=e.status===`published`;return(0,L.jsxs)(`article`,{className:`ma-card`,children:[(0,L.jsxs)(`div`,{className:`ma-thumb`,onClick:()=>o&&i(e),style:{cursor:o?`pointer`:`default`},children:[(0,L.jsx)(`img`,{src:e.thumbnail,alt:e.title}),(0,L.jsx)(`span`,{className:`ma-badge ${e.status}`,children:e.status})]}),(0,L.jsxs)(`div`,{className:`ma-body`,children:[(0,L.jsx)(`h3`,{className:`ma-card-title`,children:e.title}),(0,L.jsx)(`p`,{className:`ma-excerpt`,children:e.excerpt}),(0,L.jsxs)(`div`,{className:`ma-meta`,children:[(0,L.jsxs)(`span`,{children:[(0,L.jsx)(Ia,{}),e.likes]}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(La,{}),e.comments]})]}),(0,L.jsxs)(`div`,{className:`ma-footer`,children:[(0,L.jsxs)(`div`,{className:`ma-actions`,children:[(0,L.jsx)(`button`,{className:`ma-icon-btn`,type:`button`,onClick:()=>t(e),title:`Edit`,children:(0,L.jsx)(Pa,{})}),(0,L.jsx)(`button`,{className:`ma-icon-btn danger`,type:`button`,onClick:()=>n(e),title:`Delete`,children:(0,L.jsx)(Fa,{})})]}),(0,L.jsx)(`button`,{className:`ma-status-btn${a?` submit`:s?` live`:``}`,type:`button`,onClick:()=>a&&r(e),children:Va(e.status)})]})]})]})}function Wa({onClick:e}){return(0,L.jsx)(`button`,{className:`ma-new-card`,type:`button`,onClick:e,children:(0,L.jsxs)(`span`,{className:`ma-new-inner`,children:[(0,L.jsx)(`span`,{className:`ma-new-icon`,children:(0,L.jsx)(Ra,{})}),(0,L.jsx)(`span`,{className:`ma-new-title`,children:`Write New Article`}),(0,L.jsx)(`span`,{className:`ma-new-text`,children:`Draft a fresh story and reach your audience today.`})]})})}function Ga(){let e=ct(),t=P(),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(`All`),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),u=(0,_.useMemo)(()=>i===`All`?n:n.filter(e=>e.status===i.toLowerCase()),[i,n]),d=e=>{l(e),window.setTimeout(()=>l(null),2600)};(0,_.useEffect)(()=>{let e=!0;return $i({author:`me`}).then(t=>{e&&r(t.map(Ba))}).catch(()=>{e&&r([])}),()=>{e=!1}},[]),(0,_.useEffect)(()=>{let n=t.state||{};if(n.toastType||n.updatedArticle||n.deletedArticleId){if(n.updatedArticle){let e=Ba(n.updatedArticle);r(t=>t.some(t=>t.id===e.id)?t.map(t=>t.id===e.id?e:t):[e,...t])}n.deletedArticleId&&r(e=>e.filter(e=>e.id!==n.deletedArticleId)),n.toastType&&d(n.toastType),e(t.pathname,{replace:!0,state:null})}},[t.pathname,t.state,e]);let f=t=>{e(`/edit-article/${t.id}`,{state:{article:t,viewRejected:!0,forceEdit:!1}})},p=t=>{e(`/edit-article/${t.id}`,{state:{article:t,viewRejected:!1,forceEdit:!0}})},m=e=>{if(e.status===`rejected`){f(e);return}p(e)},h=e=>{f(e)},g=e=>{ia(e.apiId||e.id,{status:`pending`}).catch(()=>{}),r(t=>t.map(t=>t.id===e.id?{...t,status:`pending`}:t)),d(`submitted`)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:Na}),c&&(0,L.jsx)(`div`,{className:`ma-toast-wrap`,children:(0,L.jsxs)(`div`,{className:`ma-toast ${c}`,children:[(0,L.jsx)(za,{}),Ha(c)]})}),o&&(0,L.jsx)(`div`,{className:`ma-modal-layer`,onClick:()=>s(null),children:(0,L.jsxs)(`div`,{className:`ma-modal`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`ma-modal-body`,children:[(0,L.jsx)(`div`,{className:`ma-modal-icon`,children:(0,L.jsx)(Fa,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h2`,{className:`ma-modal-title`,children:`Hapus Artikel?`}),(0,L.jsxs)(`p`,{className:`ma-modal-text`,children:[`Apakah Anda yakin ingin menghapus artikel ini?`,(0,L.jsx)(`br`,{}),`Tindakan ini tidak dapat dibatalkan.`]})]})]}),(0,L.jsxs)(`div`,{className:`ma-modal-footer`,children:[(0,L.jsx)(`button`,{className:`ma-modal-btn cancel`,type:`button`,onClick:()=>s(null),children:`Batal`}),(0,L.jsx)(`button`,{className:`ma-modal-btn delete`,type:`button`,onClick:()=>{o&&(na(o.apiId||o.id).catch(()=>{}),r(e=>e.filter(e=>e.id!==o.id)),s(null),d(`deleted`))},children:`Hapus`})]})]})}),(0,L.jsx)(`main`,{className:`ma-page`,children:(0,L.jsxs)(`div`,{className:`ma-shell`,children:[(0,L.jsxs)(`section`,{className:`ma-top`,children:[(0,L.jsxs)(`div`,{className:`ma-heading`,children:[(0,L.jsx)(`h1`,{className:`ma-title`,children:`My Articles`}),(0,L.jsx)(`p`,{className:`ma-subtitle`,children:`Manage and track your editorial contributions.`})]}),(0,L.jsx)(`div`,{className:`ma-tabs`,children:Mi.map(e=>(0,L.jsx)(`button`,{className:`ma-tab${i===e?` active`:``}`,type:`button`,onClick:()=>a(e),children:e},e))})]}),(0,L.jsxs)(`section`,{className:`ma-grid`,children:[u.map(e=>(0,L.jsx)(Ua,{article:e,onEdit:m,onDelete:s,onSubmit:g,onRejectedDetail:h},e.id)),(0,L.jsx)(Wa,{onClick:()=>e(`/write-news`)})]})]})})]})}var Ka=400,qa=[{id:1,title:`Gunakan Kalimat Aktif`,tip:`Hindari pemborosan kata dengan struktur kalimat yang langsung pada intinya.`},{id:2,title:`Satu Paragraf, Satu Ide`,tip:`Pastikan setiap paragraf tetap pendek dan fokus agar lebih mudah dipindai pembaca.`},{id:3,title:`Potong Kata yang Tidak Perlu`,tip:`Hapus kata keterangan atau penghubung yang berlebihan untuk menghemat waktu baca.`},{id:4,title:`Fokus pada Inti Berita`,tip:`Sampaikan informasi terpenting di awal artikel (metode piramida terbalik).`}],Ja=e=>e.trim()?e.trim().split(/\s+/).length:0,Ya=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .wn-wrap *, .wn-wrap *::before, .wn-wrap *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .wn-wrap {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #f8f9fb;
    min-height: 100vh;
    padding: 24px 28px 60px;
  }

  .wn-content-area {
    margin-left: 240px;
    margin-top: 64px;
    flex: 1;
    min-width: 0;
  }

  .wn-layout {
    display: flex;
    gap: 22px;
    align-items: flex-start;
  }

  .wn-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 0;
  }

  .wn-right {
    width: 300px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .wn-card,
  .wn-side-card {
    background: #fff;
    border: 1.5px solid #e2e8f0;
    border-radius: 14px;
    padding: 22px;
  }

  .wn-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #94a3b8;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .wn-sublabel {
    font-size: 13px;
    color: #94a3b8;
    margin-bottom: 14px;
  }

  .wn-title-input {
    width: 100%;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 22px;
    font-weight: 700;
    color: #1e293b;
    background: transparent;
    resize: none;
    line-height: 1.4;
  }

  .wn-title-input::placeholder {
    color: #cbd5e1;
    font-weight: 700;
  }

  .wn-textarea {
    width: 100%;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 14px;
    color: #334155;
    background: transparent;
    resize: none;
    line-height: 1.7;
    min-height: 110px;
  }

  .wn-textarea::placeholder {
    color: #cbd5e1;
  }

  .wn-body-area {
    min-height: 270px;
  }

  .wn-toolbar {
    display: flex;
    gap: 14px;
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #edf2f7;
  }

  .wn-tool-btn {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: serif;
    font-size: 14px;
    font-weight: 700;
    color: #334155;
    transition: background 0.1s;
    padding: 0;
  }

  .wn-tool-btn:hover {
    background: #f1f5f9;
  }

  .wn-thumb-placeholder {
    width: 100%;
    height: 160px;
    border-radius: 12px;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #94a3b8;
    font-family: inherit;
    font-size: 13px;
    margin-bottom: 12px;
    border: 2px dashed #cbd5e1;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    text-align: center;
  }

  .wn-thumb-placeholder:hover {
    border-color: #2347c5;
    background: #eef2ff;
  }

  .wn-thumb-preview {
    width: 100%;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    display: block;
    margin-bottom: 12px;
    background: #e2e8f0;
    cursor: pointer;
  }

  .wn-file-input {
    display: none;
  }

  .wn-upload-btn {
    width: 100%;
    padding: 10px 0;
    border: 1.5px solid #e2e8f0;
    border-radius: 9px;
    background: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    cursor: pointer;
    text-align: center;
    transition: background 0.1s, border-color 0.1s;
  }

  .wn-upload-btn:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  .wn-category-block {
    margin-top: 26px;
  }

  .wn-cat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .wn-cat-plus-mini {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    border: 1.5px solid #e2e8f0;
    background: #fff;
    color: #64748b;
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .wn-cat-plus-mini:hover {
    background: #f8fafc;
    color: #2347c5;
    border-color: #cbd5e1;
  }

  .wn-cat-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    min-height: 24px;
  }

  .wn-cat-empty {
    font-size: 13px;
    color: #94a3b8;
  }

  .wn-cat-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #eef2ff;
    color: #2f4fd0;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 700;
  }

  .wn-cat-remove {
    background: none;
    border: none;
    cursor: pointer;
    color: #64748b;
    font-size: 14px;
    line-height: 1;
    padding: 0;
  }

  .wn-cat-remove:hover {
    color: #dc2626;
  }

  .wn-cat-menu {
    margin-top: 10px;
    display: flex;
    gap: 8px;
  }

  .wn-cat-select {
    flex: 1;
    border: 1.5px solid #e2e8f0;
    border-radius: 9px;
    font-family: inherit;
    font-size: 13px;
    padding: 9px 10px;
    outline: none;
    color: #334155;
    background: #fff;
  }

  .wn-cat-add-btn {
    width: 42px;
    border: none;
    border-radius: 9px;
    background: #2347c5;
    color: #fff;
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .wn-pub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .wn-wc-row {
    display: flex;
    gap: 28px;
  }

  .wn-wc-col {
    flex: 1;
  }

  .wn-wc-label {
    font-size: 12px;
    color: #94a3b8;
    margin-bottom: 4px;
  }

  .wn-wc-val {
    font-size: 22px;
    font-weight: 800;
  }

  .wn-wc-val.green {
    color: #16a34a;
  }

  .wn-wc-val.red {
    color: #dc2626;
  }

  .wn-wc-sub {
    font-size: 13px;
    color: #94a3b8;
    font-weight: 600;
  }

  .wn-progress {
    height: 5px;
    border-radius: 999px;
    background: #e2e8f0;
    margin-top: 12px;
    overflow: hidden;
  }

  .wn-progress-fill {
    height: 100%;
    border-radius: 999px;
    background: #16a34a;
    transition: width 0.3s ease;
  }

  .wn-progress-fill.red {
    background: #dc2626;
  }

  .wn-over-alert {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fef2f2;
    border: 1.5px solid #fca5a5;
    color: #dc2626;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 12.5px;
    font-weight: 600;
    margin-bottom: 16px;
    animation: wnAlertIn 0.25s ease;
  }

  @keyframes wnAlertIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .wn-over-alert svg {
    flex-shrink: 0;
  }

  .wn-submit-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

  .wn-primary-btn {
    width: 100%;
    padding: 13px 0;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: opacity 0.15s, background 0.15s;
  }

  .wn-primary-btn:hover {
    opacity: 0.9;
  }

  .wn-primary-btn.draft {
    background: #294bd6;
    color: #fff;
  }

  .wn-primary-btn.submit {
    background: #e2e8f0;
    color: #94a3b8;
    cursor: default;
    pointer-events: none;
  }

  .wn-primary-btn.submit.on {
    background: #1e293b;
    color: #fff;
    cursor: pointer;
    pointer-events: auto;
  }

  .wn-tip-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 11.5px;
    color: #64748b;
    line-height: 1.45;
    margin-bottom: 9px;
  }

  .wn-tip-item:last-child {
    margin-bottom: 0;
  }

  .wn-tip-check {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #e0f2fe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    color: #2563eb;
  }

  .wn-toast-wrap {
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    pointer-events: none;
  }

  .wn-toast {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 20px;
    border-radius: 999px;
    font-size: 13.5px;
    font-weight: 600;
    box-shadow: 0 8px 30px rgba(0,0,0,0.14);
    animation: wnToastIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .wn-toast.saved {
    background: #475569;
    color: #fff;
  }

  .wn-toast.submitted {
    background: #2347c5;
    color: #fff;
  }

  @keyframes wnToastIn {
    from {
      opacity: 0;
      transform: translateY(-12px) scale(0.92);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes wnToastOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }

  .wn-toast.hiding {
    animation: wnToastOut 0.25s ease forwards;
  }

  @media (max-width: 1100px) {
    .wn-content-area {
      margin-left: 0;
      margin-top: 64px;
    }

    .wn-layout {
      flex-direction: column;
    }

    .wn-right {
      width: 100%;
    }
  }
`,Xa=()=>(0,L.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z`}),(0,L.jsx)(`polyline`,{points:`17 21 17 13 7 13 7 21`}),(0,L.jsx)(`polyline`,{points:`7 3 7 8 15 8`})]}),Za=()=>(0,L.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`line`,{x1:`22`,y1:`2`,x2:`11`,y2:`13`}),(0,L.jsx)(`polygon`,{points:`22 2 15 22 11 13 2 9 22 2`})]}),Qa=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#94a3b8`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),(0,L.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),(0,L.jsx)(`polyline`,{points:`21 15 16 10 5 21`})]}),$a=()=>(0,L.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,L.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),eo=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`}),(0,L.jsx)(`line`,{x1:`12`,y1:`9`,x2:`12`,y2:`13`}),(0,L.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]});function to(){let[e,t]=(0,_.useState)([]);return{toasts:e,show:(e,n=`saved`)=>{let r=Date.now();t(t=>[...t,{id:r,message:e,type:n,hiding:!1}]),setTimeout(()=>{t(e=>e.map(e=>e.id===r?{...e,hiding:!0}:e)),setTimeout(()=>{t(e=>e.filter(e=>e.id!==r))},300)},2800)}}}function no(){let e=ct(),t=(0,_.useRef)(null),{toasts:n,show:r}=to(),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)([]),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=!0;return ea().then(t=>{e&&(h(t),v(t[0]?.name||``))}).catch(()=>{e&&h([])}),()=>{e=!1}},[]);let x=Ja(o),S=x>Ka,C=Math.min(100,x/Ka*100),w=Math.max(1,Math.ceil(x/200)),ee=i.trim().length>0&&!!(f[0]||g),T=!S&&x>=30&&ee,E=()=>{t.current?.click()},D=e=>{if(e){if(![`image/jpeg`,`image/jpg`,`image/png`].includes(e.type)){r(`Format gambar harus JPG atau PNG`,`saved`);return}if(e.size>2097152){r(`Ukuran gambar maksimal 2MB`,`saved`);return}d(URL.createObjectURL(e)),r(`Gambar berhasil dipilih`,`submitted`)}},te=e=>{let t=e.target.files?.[0];D(t),e.target.value=``},ne=e=>{e.preventDefault();let t=e.dataTransfer.files?.[0];D(t)},O=()=>{g&&(f.includes(g)||p([...f,g]),b(!1))},re=e=>{p(f.filter(t=>t!==e))},ie=e=>({id:`user_${Date.now()}`,title:i,synopsis:o,body:c,thumbnail:u,image:u,category:f[0]||`General`,excerpt:o.slice(0,120)||`Tulis ringkasan singkat artikel di sini`,wordCount:x,readTime:`${w} min`,status:e,likes:0,comments:0,rejectionReason:null,date:new Date().toLocaleDateString(`id-ID`)}),ae=e=>{let t=ie(e),n=m.find(e=>e.name===t.category);if(!n?.apiId)throw Error(`Pilih kategori terlebih dahulu`);return ra({judul:t.title,ringkasan:t.synopsis,isi_lengkap:t.body,status:t.status,id_kategori:n?.apiId,read_time:t.readTime})};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:Ya}),(0,L.jsx)(`div`,{className:`wn-toast-wrap`,children:n.map(e=>(0,L.jsxs)(`div`,{className:`wn-toast ${e.type}${e.hiding?` hiding`:``}`,children:[(0,L.jsx)($a,{}),` `,e.message]},e.id))}),(0,L.jsx)(`div`,{className:`wn-content-area`,children:(0,L.jsxs)(`div`,{className:`wn-wrap`,children:[S&&(0,L.jsxs)(`div`,{className:`wn-over-alert`,children:[(0,L.jsx)(eo,{}),`Ringkasan melebihi batas `,Ka,` kata! Harap kurangi agar artikel bisa dikirim ke admin.`]}),(0,L.jsxs)(`div`,{className:`wn-layout`,children:[(0,L.jsxs)(`div`,{className:`wn-left`,children:[(0,L.jsxs)(`div`,{className:`wn-card`,children:[(0,L.jsx)(`div`,{className:`wn-label`,children:`Judul Artikel`}),(0,L.jsx)(`textarea`,{className:`wn-title-input`,rows:2,value:i,onChange:e=>a(e.target.value),placeholder:`Masukkan judul yang menarik...`})]}),(0,L.jsxs)(`div`,{className:`wn-card`,children:[(0,L.jsx)(`div`,{style:{fontWeight:800,fontSize:16,marginBottom:4},children:`Ringkasan (Paham 2 Menit)`}),(0,L.jsxs)(`div`,{className:`wn-sublabel`,children:[`Tulis inti berita untuk pembaca cepat. Maks. `,Ka,` kata.`]}),(0,L.jsx)(`textarea`,{className:`wn-textarea`,rows:5,value:o,onChange:e=>s(e.target.value),placeholder:`Tuliskan ringkasan singkat di sini...`,style:S?{color:`#dc2626`}:{}})]}),(0,L.jsxs)(`div`,{className:`wn-card`,children:[(0,L.jsx)(`div`,{style:{fontWeight:800,fontSize:16,marginBottom:4},children:`Artikel Lengkap`}),(0,L.jsx)(`div`,{className:`wn-sublabel`,children:`Tuliskan versi lengkap artikel di sini.`}),(0,L.jsx)(`div`,{className:`wn-toolbar`,children:[{label:`B`,style:{fontWeight:`bold`}},{label:`I`,style:{fontStyle:`italic`}},{label:`≡`,style:{}},{label:`⇒`,style:{}},{label:`❝`,style:{}}].map((e,t)=>(0,L.jsx)(`button`,{type:`button`,className:`wn-tool-btn`,style:e.style,children:e.label},t))}),(0,L.jsx)(`textarea`,{className:`wn-textarea wn-body-area`,value:c,onChange:e=>l(e.target.value),placeholder:`Mulai menulis detail berita...`})]})]}),(0,L.jsxs)(`div`,{className:`wn-right`,children:[(0,L.jsxs)(`div`,{className:`wn-side-card`,children:[(0,L.jsx)(`div`,{className:`wn-label`,children:`Gambar Unggulan`}),(0,L.jsx)(`input`,{ref:t,className:`wn-file-input`,type:`file`,accept:`image/jpeg,image/jpg,image/png`,onChange:te}),u?(0,L.jsx)(`img`,{src:u,alt:`thumb`,className:`wn-thumb-preview`,onClick:E,onError:e=>{e.target.style.display=`none`}}):(0,L.jsxs)(`button`,{type:`button`,className:`wn-thumb-placeholder`,onClick:E,onDragOver:e=>e.preventDefault(),onDrop:ne,children:[(0,L.jsx)(Qa,{}),(0,L.jsx)(`span`,{children:`Klik atau seret gambar ke sini`}),(0,L.jsx)(`span`,{style:{fontSize:11,color:`#cbd5e1`},children:`JPG, PNG (Maks. 2MB)`})]}),(0,L.jsx)(`button`,{type:`button`,className:`wn-upload-btn`,onClick:E,children:`Ganti Gambar`}),(0,L.jsxs)(`div`,{className:`wn-category-block`,children:[(0,L.jsxs)(`div`,{className:`wn-cat-header`,children:[(0,L.jsx)(`div`,{className:`wn-label`,style:{marginBottom:0},children:`Kategori`}),(0,L.jsx)(`button`,{type:`button`,className:`wn-cat-plus-mini`,onClick:()=>b(e=>!e),children:`+`})]}),(0,L.jsxs)(`div`,{className:`wn-cat-wrap`,children:[f.map(e=>(0,L.jsxs)(`span`,{className:`wn-cat-tag`,children:[e,(0,L.jsx)(`button`,{type:`button`,className:`wn-cat-remove`,onClick:()=>re(e),children:`×`})]},e)),f.length===0&&(0,L.jsx)(`span`,{className:`wn-cat-empty`,children:`Belum ada kategori`})]}),y&&(0,L.jsxs)(`div`,{className:`wn-cat-menu`,children:[(0,L.jsx)(`select`,{className:`wn-cat-select`,value:g,onChange:e=>v(e.target.value),children:m.map(e=>(0,L.jsx)(`option`,{value:e.name,children:e.name},e.id))}),(0,L.jsx)(`button`,{type:`button`,className:`wn-cat-add-btn`,onClick:O,children:`+`})]})]})]}),(0,L.jsxs)(`div`,{className:`wn-side-card`,children:[(0,L.jsxs)(`div`,{className:`wn-pub-header`,children:[(0,L.jsx)(`span`,{style:{fontSize:15,fontWeight:800,color:`#0f172a`},children:`Pemeriksaan Publikasi`}),!S&&x>0&&(0,L.jsx)(`span`,{style:{color:`#16a34a`},children:(0,L.jsx)($a,{})}),S&&(0,L.jsx)(`span`,{style:{color:`#dc2626`},children:(0,L.jsx)(eo,{})})]}),(0,L.jsxs)(`div`,{className:`wn-wc-row`,children:[(0,L.jsxs)(`div`,{className:`wn-wc-col`,children:[(0,L.jsx)(`div`,{className:`wn-wc-label`,children:`Word Count`}),(0,L.jsxs)(`div`,{className:`wn-wc-val ${S?`red`:`green`}`,children:[x,` `,(0,L.jsxs)(`span`,{className:`wn-wc-sub`,children:[`/ `,Ka]})]})]}),(0,L.jsxs)(`div`,{className:`wn-wc-col`,children:[(0,L.jsx)(`div`,{className:`wn-wc-label`,children:`Read Time`}),(0,L.jsxs)(`div`,{className:`wn-wc-val ${S?`red`:`green`}`,children:[x===0?0:w,` `,(0,L.jsx)(`span`,{className:`wn-wc-sub`,children:`min`})]})]})]}),(0,L.jsx)(`div`,{className:`wn-progress`,children:(0,L.jsx)(`div`,{className:`wn-progress-fill${S?` red`:``}`,style:{width:`${C}%`}})}),S&&(0,L.jsxs)(`div`,{style:{background:`#fee2e2`,color:`#dc2626`,borderRadius:8,padding:`7px 10px`,fontSize:12,fontWeight:600,marginTop:10,display:`flex`,alignItems:`center`,gap:6},children:[(0,L.jsx)(eo,{}),` Article exceeds 2-minute reading limit.`]}),(0,L.jsxs)(`div`,{className:`wn-submit-area`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`wn-primary-btn draft`,onClick:async()=>{if(!ee){r(`Judul dan kategori wajib diisi`,`saved`);return}try{await ae(`draft`)}catch(e){r(e.message||`Gagal menyimpan draft`,`saved`);return}r(`Draft Tersimpan`,`saved`),setTimeout(()=>{e(`/my-articles`)},1e3)},disabled:!ee,children:[(0,L.jsx)(Xa,{}),` Save Draft`]}),(0,L.jsxs)(`button`,{type:`button`,className:`wn-primary-btn submit${T?` on`:``}`,onClick:async()=>{if(T){try{await ae(`pending`)}catch(e){r(e.message||`Gagal mengirim artikel`,`saved`);return}r(`Artikel Berhasil Dikirim`,`submitted`),setTimeout(()=>{e(`/my-articles`)},1e3)}},disabled:!T,children:[(0,L.jsx)(Za,{}),` Submit to Admin`]})]})]}),(0,L.jsxs)(`div`,{className:`wn-side-card`,children:[(0,L.jsx)(`div`,{style:{fontSize:15,fontWeight:800,marginBottom:14},children:`Tips Menulis 💡`}),qa.map(e=>(0,L.jsxs)(`div`,{className:`wn-tip-item`,children:[(0,L.jsx)(`div`,{className:`wn-tip-check`,children:(0,L.jsx)($a,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`strong`,{children:[e.title,`:`]}),` `,e.tip]})]},e.id))]})]})]})]})})]})}var ro=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root { --dashboard-sidebar-width: 260px; --dashboard-header-height: 76px; }

  .adp-page *, .adp-page *::before, .adp-page *::after { box-sizing: border-box; }

  .adp-page {
    min-height: calc(100vh - var(--dashboard-header-height));
    margin-left: var(--dashboard-sidebar-width);
    margin-top: var(--dashboard-header-height);
    padding: 72px 60px 58px 74px;
    background: #f8f9fb;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #111827;
  }

  .adp-page button { font-family: inherit; }
  .adp-shell { width: 100%; }

  .adp-title { margin: 0 0 8px; font-size: 30px; line-height: 1.18; font-weight: 800; color: #202124; }
  .adp-subtitle { margin: 0; font-size: 15px; line-height: 1.6; color: #4b5563; font-weight: 500; }

  .adp-summary {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 30px;
    margin: 32px 0 30px;
  }

  .adp-stat-card {
    min-height: 164px;
    background: #fff;
    border: 1px solid #dce3ef;
    border-radius: 14px;
    padding: 24px 25px;
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.04);
  }

  .adp-stat-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 18px; }
  .adp-stat-icon { width: 42px; height: 42px; border-radius: 11px; display: grid; place-items: center; }

  .adp-badge {
    height: 24px;
    padding: 0 11px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 800;
  }

  .adp-badge.green { background: #dcfce7; color: #16a34a; }
  .adp-badge.red { background: #ffe4e8; color: #e11d48; }
  .adp-badge.gray { background: #f1f5f9; color: #94a3b8; }

  .adp-stat-label { margin-bottom: 8px; color: #4b5563; font-size: 14px; font-weight: 500; }
  .adp-stat-value { color: #202124; font-size: 24px; line-height: 1; font-weight: 800; }

  .adp-main-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 382px;
    gap: 30px;
    align-items: start;
  }

  .adp-panel, .adp-topics, .adp-quick {
    border-radius: 14px;
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.04);
  }

  .adp-panel {
    background: #fff;
    border: 1px solid #dce3ef;
    overflow: hidden;
  }

  .adp-panel-header {
    min-height: 80px;
    padding: 0 24px;
    border-bottom: 1px solid #edf1f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .adp-panel-title { margin: 0; font-size: 22px; font-weight: 800; color: #202124; }
  .adp-panel-link { border: 0; background: transparent; color: #0047ab; font-size: 13px; font-weight: 800; cursor: pointer; }

  .adp-activity-item {
    min-height: 92px;
    padding: 18px 24px;
    border-bottom: 1px solid #edf1f6;
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 16px;
    align-items: center;
  }

  .adp-activity-item:last-child { border-bottom: 0; }
  .adp-activity-dot { width: 40px; height: 40px; border-radius: 999px; display: grid; place-items: center; }

  .dot-blue { background: #eef5ff; color: #0056d6; }
  .dot-green { background: #ecfdf5; color: #16a34a; }
  .dot-red { background: #fee2e2; color: #dc2626; }
  .dot-indigo { background: #eef2ff; color: #4f46e5; }

  .adp-activity-text { color: #202124; font-size: 15px; line-height: 1.45; font-weight: 500; }
  .adp-activity-time { margin-top: 4px; color: #64748b; font-size: 13px; font-weight: 500; }
  .adp-empty { padding: 34px 24px; color: #94a3b8; font-size: 14px; }

  .adp-right { display: flex; flex-direction: column; gap: 30px; }

  .adp-topics { background: #fff; border: 1px solid #dce3ef; padding: 24px; }
  .adp-topics-title { margin-bottom: 14px; color: #202124; font-size: 15px; font-weight: 800; }
  .adp-topic-grid { display: flex; flex-wrap: wrap; gap: 10px; }

  .adp-topic-pill {
    height: 28px;
    padding: 0 13px;
    border: 1px solid #d8e0eb;
    border-radius: 999px;
    background: #e9eef6;
    color: #334155;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }

  .adp-quick { background: #0047ab; padding: 26px 24px 24px; color: #fff; }
  .adp-quick-title { margin: 0 0 8px; font-size: 24px; line-height: 1.15; font-weight: 800; }
  .adp-quick-sub { margin: 0 0 18px; color: rgba(255,255,255,.9); font-size: 14px; font-weight: 500; }

  .adp-quick-btn {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    padding: 0 15px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 7px;
    background: rgba(255,255,255,.1);
    color: #fff;
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
  }

  .adp-quick-btn:hover { background: rgba(255,255,255,.18); }
  .adp-quick-btn:last-child { margin-bottom: 0; }

  .adp-breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 56px;
    color: #64748b;
    font-size: 14px;
  }

  .adp-breadcrumb-btn {
    border: 0;
    background: transparent;
    padding: 0;
    color: #64748b;
    font: inherit;
    cursor: pointer;
  }

  .adp-breadcrumb-current { color: #0047ab; font-weight: 700; }
  .adp-full-panel { max-width: 900px; }

  @media (max-width: 1180px) { .adp-main-grid { grid-template-columns: 1fr; } }
  @media (max-width: 980px) { .adp-summary { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 640px) {
    .adp-page { margin-left: 0; padding: 32px 18px; }
    .adp-summary { grid-template-columns: 1fr; }
  }
`,io=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,L.jsx)(`path`,{d:`M14 2v6h6`}),(0,L.jsx)(`path`,{d:`M8 13h8`}),(0,L.jsx)(`path`,{d:`M8 17h6`})]}),ao=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M9 11l3 3L22 4`}),(0,L.jsx)(`path`,{d:`M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11`})]}),oo=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,L.jsx)(`path`,{d:`M9 12l2 2 4-5`})]}),so=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`}),(0,L.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,L.jsx)(`path`,{d:`M23 21v-2a4 4 0 0 0-3-3.87`}),(0,L.jsx)(`path`,{d:`M16 3.13a4 4 0 0 1 0 7.75`})]}),co=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M12 20h9`}),(0,L.jsx)(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z`})]}),lo=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M12 19V5`}),(0,L.jsx)(`path`,{d:`M5 12l7-7 7 7`})]}),uo=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M3 6h18`}),(0,L.jsx)(`path`,{d:`M19 6l-1 14H6L5 6`}),(0,L.jsx)(`path`,{d:`M10 11v6`}),(0,L.jsx)(`path`,{d:`M14 11v6`})]}),fo=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,L.jsx)(`path`,{d:`M12 8v8`}),(0,L.jsx)(`path`,{d:`M8 12h8`})]}),V=e=>Array.isArray(e)?e:[],H=e=>String(e?.status||`published`).toLowerCase(),po=e=>e?String(e).charAt(0).toUpperCase()+String(e).slice(1).toLowerCase():``,mo=e=>{let t=new Map;return e.forEach((e,n)=>{if(!e)return;let r=e.id||`${e.title}-${n}`;t.has(r)||t.set(r,e)}),Array.from(t.values())},ho=(e=[])=>({totalArticles:e.length,pending:e.filter(e=>H(e)===`pending`).length,published:e.filter(e=>H(e)===`published`).length,totalUsers:0}),go=[`Technology`,`Politics`,`Economics`,`Environment`,`Social`,`Education`],_o=(e=[])=>{let t=V(e).map(e=>po(e.name||e)).filter(Boolean),n=go.filter(e=>t.includes(e)),r=t.filter(e=>!n.includes(e));return[...n,...r]},vo={edit:{dotClass:`dot-blue`,Icon:co},published:{dotClass:`dot-green`,Icon:lo},deleted:{dotClass:`dot-red`,Icon:uo},category:{dotClass:`dot-indigo`,Icon:fo}};function yo({item:e}){return e.type===`category`?(0,L.jsxs)(L.Fragment,{children:[e.action,`: `,(0,L.jsx)(`b`,{children:e.title})]}):e.type===`published`?(0,L.jsxs)(L.Fragment,{children:[`Artikel `,(0,L.jsxs)(`b`,{children:[`"`,e.title,`"`]}),` telah diterbitkan oleh Admin`]}):e.type===`deleted`?(0,L.jsxs)(L.Fragment,{children:[`Artikel `,(0,L.jsxs)(`b`,{children:[`"`,e.title,`"`]}),` telah dihapus oleh Admin`]}):(0,L.jsxs)(L.Fragment,{children:[e.action,` `,(0,L.jsxs)(`b`,{children:[`"`,e.title,`"`]})]})}function bo({activities:e,limit:t}){let n=t?e.slice(0,t):e;return n.length===0?(0,L.jsx)(`div`,{className:`adp-empty`,children:`Belum ada aktivitas.`}):n.map(e=>{let t=vo[e.type]||vo.category,n=t.Icon;return(0,L.jsxs)(`div`,{className:`adp-activity-item`,children:[(0,L.jsx)(`div`,{className:`adp-activity-dot ${t.dotClass}`,children:(0,L.jsx)(n,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`adp-activity-text`,children:(0,L.jsx)(yo,{item:e})}),(0,L.jsx)(`div`,{className:`adp-activity-time`,children:e.time})]})]},e.id)})}function U({stats:e,activities:t,topics:n,onWriteNews:r,onPendingApproval:i,onManageNews:a}){let o=ct(),[s,c]=(0,_.useState)(`dashboard`),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=!0;return Promise.all([ta().catch(()=>null),$i({all:`true`}).catch(()=>[]),ea().catch(()=>[])]).then(([t,n,r])=>{e&&(m(t?.stats||null),u(mo(n)),f(r))}),()=>{e=!1}},[]);let h=ho(l),g={totalArticles:e?.totalArticles??p?.total_articles??h.totalArticles??0,pending:e?.pending??p?.pending_articles??h.pending??0,published:e?.published??p?.published_articles??h.published??0,totalUsers:e?.totalUsers??p?.total_users??h.totalUsers??0},v=V(t),y=n||_o(d);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:ro}),(0,L.jsx)(`main`,{className:`adp-page`,children:s===`activity`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`adp-breadcrumb`,children:[(0,L.jsx)(`button`,{className:`adp-breadcrumb-btn`,type:`button`,onClick:()=>c(`dashboard`),children:`Dashboard`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`span`,{className:`adp-breadcrumb-current`,children:`Ringkasan Aktivitas`})]}),(0,L.jsxs)(`section`,{className:`adp-panel adp-full-panel`,children:[(0,L.jsx)(`div`,{className:`adp-panel-header`,children:(0,L.jsx)(`h1`,{className:`adp-panel-title`,children:`Ringkasan Aktivitas`})}),(0,L.jsx)(bo,{activities:v})]})]}):(0,L.jsxs)(`div`,{className:`adp-shell`,children:[(0,L.jsxs)(`section`,{children:[(0,L.jsx)(`h1`,{className:`adp-title`,children:`Ringkasan Dashboard`}),(0,L.jsx)(`p`,{className:`adp-subtitle`,children:`Selamat datang kembali. Berikut adalah status publikasi hari ini.`})]}),(0,L.jsxs)(`section`,{className:`adp-summary`,children:[(0,L.jsxs)(`div`,{className:`adp-stat-card`,children:[(0,L.jsxs)(`div`,{className:`adp-stat-top`,children:[(0,L.jsx)(`div`,{className:`adp-stat-icon`,style:{background:`#eef5ff`,color:`#0056d6`},children:(0,L.jsx)(io,{})}),(0,L.jsxs)(`span`,{className:`adp-badge green`,children:[`+`,g.totalArticles]})]}),(0,L.jsx)(`div`,{className:`adp-stat-label`,children:`Total Artikel`}),(0,L.jsx)(`div`,{className:`adp-stat-value`,children:g.totalArticles.toLocaleString()})]}),(0,L.jsxs)(`div`,{className:`adp-stat-card`,children:[(0,L.jsxs)(`div`,{className:`adp-stat-top`,children:[(0,L.jsx)(`div`,{className:`adp-stat-icon`,style:{background:`#fff1f2`,color:`#e11d48`},children:(0,L.jsx)(ao,{})}),(0,L.jsx)(`span`,{className:`adp-badge red`,children:`Penting`})]}),(0,L.jsx)(`div`,{className:`adp-stat-label`,children:`Artikel Menunggu`}),(0,L.jsx)(`div`,{className:`adp-stat-value`,children:g.pending.toLocaleString()})]}),(0,L.jsxs)(`div`,{className:`adp-stat-card`,children:[(0,L.jsxs)(`div`,{className:`adp-stat-top`,children:[(0,L.jsx)(`div`,{className:`adp-stat-icon`,style:{background:`#eef5ff`,color:`#0056d6`},children:(0,L.jsx)(oo,{})}),(0,L.jsx)(`span`,{className:`adp-badge gray`,children:`Stabil`})]}),(0,L.jsx)(`div`,{className:`adp-stat-label`,children:`Artikel Terbit`}),(0,L.jsx)(`div`,{className:`adp-stat-value`,children:g.published.toLocaleString()})]}),(0,L.jsxs)(`div`,{className:`adp-stat-card`,children:[(0,L.jsxs)(`div`,{className:`adp-stat-top`,children:[(0,L.jsx)(`div`,{className:`adp-stat-icon`,style:{background:`#eef5ff`,color:`#2563eb`},children:(0,L.jsx)(so,{})}),(0,L.jsxs)(`span`,{className:`adp-badge green`,children:[`+`,g.totalUsers]})]}),(0,L.jsx)(`div`,{className:`adp-stat-label`,children:`Total Pengguna`}),(0,L.jsx)(`div`,{className:`adp-stat-value`,children:g.totalUsers.toLocaleString()})]})]}),(0,L.jsxs)(`section`,{className:`adp-main-grid`,children:[(0,L.jsxs)(`div`,{className:`adp-panel`,children:[(0,L.jsxs)(`div`,{className:`adp-panel-header`,children:[(0,L.jsx)(`h2`,{className:`adp-panel-title`,children:`Ringkasan Aktivitas`}),(0,L.jsx)(`button`,{className:`adp-panel-link`,type:`button`,onClick:()=>c(`activity`),children:`Lihat Semua`})]}),(0,L.jsx)(bo,{activities:v,limit:4})]}),(0,L.jsxs)(`aside`,{className:`adp-right`,children:[(0,L.jsxs)(`div`,{className:`adp-topics`,children:[(0,L.jsx)(`div`,{className:`adp-topics-title`,children:`Topics`}),(0,L.jsx)(`div`,{className:`adp-topic-grid`,children:y.length>0?y.map(e=>(0,L.jsx)(`button`,{className:`adp-topic-pill`,type:`button`,children:e},e)):(0,L.jsx)(`span`,{style:{color:`#94a3b8`,fontSize:13},children:`Belum ada topic.`})})]}),(0,L.jsxs)(`div`,{className:`adp-quick`,children:[(0,L.jsx)(`h2`,{className:`adp-quick-title`,children:`Quick Actions`}),(0,L.jsx)(`p`,{className:`adp-quick-sub`,children:`Quickly access important features`}),(0,L.jsxs)(`button`,{className:`adp-quick-btn`,type:`button`,onClick:()=>r?r():o(`/admin/write`),children:[(0,L.jsx)(fo,{}),`Write News`]}),(0,L.jsxs)(`button`,{className:`adp-quick-btn`,type:`button`,onClick:()=>i?i():o(`/admin/pending`),children:[(0,L.jsx)(ao,{}),`Pending Approval`]}),(0,L.jsxs)(`button`,{className:`adp-quick-btn`,type:`button`,onClick:()=>a?a():o(`/admin/manage-news`),children:[(0,L.jsx)(io,{}),`Manage News`]})]})]})]})]})})]})}var xo=5,So=5,Co=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --mn-sidebar: 260px;
    --mn-header: 76px;
    --mn-blue: #263875;
    --mn-action: #0047ab;
    --mn-dark: #142052;
  }

  .mn-page *,
  .mn-page *::before,
  .mn-page *::after {
    box-sizing: border-box;
  }

  .mn-page {
    margin-left: var(--mn-sidebar);
    margin-top: var(--mn-header);
    min-height: calc(100vh - var(--mn-header));
    padding: 62px 48px 60px 64px;
    background: #fbfaf9;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #111827;
  }

  .mn-page button,
  .mn-page input,
  .mn-page textarea,
  .mn-page select {
    font-family: inherit;
  }

  .mn-shell {
    max-width: 1040px;
    margin: 0 auto;
  }

  .mn-top-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 268px;
    gap: 24px;
    margin-bottom: 24px;
  }

  .mn-stat-card,
  .mn-panel,
  .mn-cat-card,
  .mn-form-card,
  .mn-note-card {
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 16px 28px rgba(15, 23, 42, 0.08);
  }

  .mn-stat-card {
    min-height: 178px;
    padding: 42px 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mn-stat-title {
    font-size: 15px;
    font-weight: 800;
    color: #132052;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .mn-stat-link {
    color: #0047ab;
    font-size: 14px;
    font-weight: 600;
  }

  .mn-stat-metrics {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .mn-stat-metric {
    min-width: 76px;
    text-align: center;
  }

  .mn-stat-metric + .mn-stat-metric {
    border-left: 1px solid #eef2f7;
    padding-left: 28px;
  }

  .mn-stat-label {
    color: #64748b;
    font-size: 12px;
    margin-bottom: 3px;
  }

  .mn-stat-value {
    font-size: 26px;
    font-weight: 800;
    color: #202124;
  }

  .mn-stat-value.orange {
    color: #c2410c;
  }

  .mn-cat-card {
    min-height: 178px;
    padding: 28px 22px;
    background: linear-gradient(145deg, #0047ab 0%, #0f6be8 100%);
    color: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .mn-cat-title {
    font-size: 16px;
    font-weight: 800;
  }

  .mn-cat-sub {
    font-size: 14px;
    line-height: 1.45;
    opacity: 0.9;
  }

  .mn-cat-btn {
    height: 44px;
    border: 0;
    border-radius: 8px;
    background: #ffffff;
    color: #0047ab;
    font: 800 16px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
  }

  .mn-panel {
    overflow: visible;
  }

  .mn-table-top {
    height: 86px;
    padding: 0 24px;
    background: var(--mn-blue);
    border-radius: 12px 12px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mn-tabs {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .mn-tab {
    min-width: 88px;
    height: 36px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: #ffffff;
    font: 700 14px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .mn-tab.active {
    background: #a9bdf0;
    color: #16244f;
  }

  .mn-tools {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mn-tool-wrap {
    position: relative;
  }

  .mn-tool-btn {
    height: 38px;
    padding: 0 18px;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.75);
    background: transparent;
    color: #ffffff;
    font: 700 14px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
  }

  .mn-dropdown {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    width: 400px;
    z-index: 30;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.18);
    padding: 28px 28px 26px;
  }

  .mn-dropdown.sort {
    width: 190px;
    padding: 0;
    overflow: hidden;
  }

  .mn-sort-item {
    height: 46px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #eef2f7;
    background: #ffffff;
    color: #334155;
    text-align: left;
    padding: 0 16px;
    font: 600 14px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .mn-sort-item:hover {
    background: #f8fafc;
  }

  .mn-filter-title {
    font-size: 20px;
    font-weight: 800;
    color: #111827;
    margin-bottom: 24px;
  }

  .mn-filter-label {
    display: block;
    color: #6b7280;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }

  .mn-input {
    width: 100%;
    height: 48px;
    border: 1px solid #dbe2ec;
    border-radius: 9px;
    padding: 0 16px;
    color: #334155;
    font: 500 15px/1 'Plus Jakarta Sans', sans-serif;
    outline: none;
    background: #ffffff;
  }

  .mn-input::placeholder {
    color: #94a3b8;
  }

  .mn-filter-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 0;
  }

  .mn-filter-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    margin-top: 28px;
  }

  .mn-reset-btn,
  .mn-apply-btn {
    height: 44px;
    border: 0;
    border-radius: 8px;
    padding: 0 18px;
    font: 800 14px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .mn-reset-btn {
    background: transparent;
    color: #64748b;
  }

  .mn-apply-btn {
    min-width: 150px;
    background: #5b7db8;
    color: #ffffff;
  }

  .mn-table-head,
  .mn-row {
    display: grid;
    grid-template-columns: minmax(300px, 1.8fr) 150px 120px 120px 86px;
    align-items: center;
    column-gap: 16px;
  }

  .mn-table-head {
    height: 46px;
    padding: 0 28px;
    background: #fbfbfc;
    border-bottom: 1px solid #edf1f6;
    color: #6b7280;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .mn-row {
    min-height: 88px;
    padding: 0 28px;
    border-bottom: 1px solid #edf1f6;
  }

  .mn-article-cell {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }

  .mn-thumb {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .mn-title {
    color: #111827;
    font: 700 14px/1.25 Georgia, serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mn-meta {
    color: #6b7280;
    font-size: 11px;
    margin-top: 4px;
  }

  .mn-author {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #111827;
    font-weight: 600;
  }

  .mn-avatar {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    object-fit: cover;
    background: #e5e7eb;
  }

  .mn-status {
    width: fit-content;
    min-width: 86px;
    height: 20px;
    padding: 0 12px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
  }

  .mn-status.published {
    background: #dcfce7;
    color: #16a34a;
  }

  .mn-status.pending {
    background: #fff7ed;
    color: #ea580c;
  }

  .mn-date {
    color: #64748b;
    font-size: 14px;
    line-height: 1.25;
  }

  .mn-actions {
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .mn-icon-btn {
    width: 24px;
    height: 24px;
    border: 0;
    background: transparent;
    color: #9aa6b7;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .mn-icon-btn:hover {
    color: #142052;
  }

  .mn-pagination {
    height: 82px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #64748b;
    font-size: 14px;
  }

  .mn-page-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mn-page-btn {
    width: 40px;
    height: 40px;
    border: 1px solid #dbe2ec;
    border-radius: 8px;
    background: #ffffff;
    color: #334155;
    font-weight: 700;
    cursor: pointer;
  }

  .mn-page-btn.active {
    background: #eaf3ff;
    color: #0056d6;
    border-color: #eaf3ff;
  }

  .mn-page-btn:disabled {
    opacity: 0.45;
    cursor: default;
  }

  .mn-toast {
    position: fixed;
    top: 116px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 80;
    height: 46px;
    padding: 0 28px;
    border-radius: 999px;
    color: #ffffff;
    font: 800 14px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.18);
  }

  .mn-toast.success {
    background: #16a34a;
  }

  .mn-toast.error {
    background: #ef4444;
  }

  .mn-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mn-modal {
    width: 530px;
    overflow: hidden;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.32);
    z-index: 10000;
  }

  .mn-modal-body {
    padding: 34px 30px 34px;
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 20px;
    align-items: start;
  }

  .mn-modal-icon {
    width: 52px;
    height: 52px;
    border-radius: 999px;
    background: #fee2e2;
    color: #ef4444;
    display: grid;
    place-items: center;
  }

  .mn-modal-title {
    margin: 0 0 22px;
    color: #111827;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 26px;
    font-weight: 800;
  }

  .mn-modal-text {
    color: #64748b;
    line-height: 1.65;
    font-size: 16px;
    margin: 0;
  }

  .mn-modal-footer {
    height: 92px;
    background: #f8fafc;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
  }

  .mn-modal-btn {
    height: 54px;
    min-width: 104px;
    border-radius: 8px;
    font: 800 18px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .mn-modal-btn.cancel {
    background: #ffffff;
    border: 1px solid #d1d9e6;
    color: #374151;
  }

  .mn-modal-btn.delete {
    background: #e7252d;
    border: 0;
    color: #ffffff;
  }

  .mn-breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 18px;
  }

  .mn-breadcrumb button {
    border: 0;
    background: transparent;
    padding: 0;
    color: #64748b;
    font: inherit;
    cursor: pointer;
  }

  .mn-breadcrumb strong {
    color: #111827;
  }

  .mn-cat-add-panel {
    background: #ffffff;
    border-radius: 12px;
    padding: 26px 24px 24px;
    margin-bottom: 22px;
    box-shadow: 0 16px 28px rgba(15, 23, 42, 0.06);
  }

  .mn-cat-add-title {
    margin: 0 0 6px;
    font-size: 24px;
    font-weight: 800;
  }

  .mn-cat-add-sub {
    margin: 0 0 18px;
    color: #64748b;
    font-size: 14px;
  }

  .mn-cat-add-row {
    display: grid;
    grid-template-columns: minmax(0, 448px) 1fr 228px;
    gap: 20px;
    align-items: end;
  }

  .mn-field-label {
    display: block;
    font-size: 13px;
    font-weight: 800;
    color: #374151;
    margin-bottom: 8px;
  }

  .mn-big-btn {
    height: 50px;
    border: 0;
    border-radius: 7px;
    background: var(--mn-dark);
    color: #ffffff;
    font: 700 16px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
    box-shadow: 0 10px 18px rgba(15, 23, 42, 0.16);
  }

  .mn-category-panel {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 16px 28px rgba(15, 23, 42, 0.06);
  }

  .mn-category-header {
    min-height: 80px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mn-category-title {
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }

  .mn-total-pill {
    height: 22px;
    padding: 0 12px;
    border-radius: 999px;
    background: #dfe7f2;
    color: #64748b;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
  }

  .mn-cat-head,
  .mn-cat-row {
    display: grid;
    grid-template-columns: minmax(260px, 1.4fr) 190px 230px 90px;
    align-items: center;
    column-gap: 16px;
    padding: 0 24px;
  }

  .mn-cat-head {
    height: 50px;
    background: #fbfbfc;
    color: #6b7280;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }

  .mn-cat-row {
    min-height: 94px;
    border-bottom: 1px solid #edf1f6;
  }

  .mn-cat-name {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: 800;
  }

  .mn-cat-icon-box {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #eef5ff;
    color: #0056d6;
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  .mn-cat-stat,
  .mn-cat-updated {
    color: #374151;
    font-size: 15px;
  }

  .mn-cat-footer {
    height: 62px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #64748b;
    font-size: 14px;
  }

  .mn-form-title {
    margin: 0 0 8px;
    font-size: 30px;
    font-weight: 800;
  }

  .mn-form-sub {
    margin: 0 0 26px;
    color: #6b7280;
  }

  .mn-form-grid {
    display: grid;
    grid-template-columns: minmax(0, 602px) 308px;
    gap: 34px;
    align-items: start;
  }

  .mn-form-card {
    padding: 32px;
  }

  .mn-form-group {
    margin-bottom: 22px;
  }

  .mn-form-input,
  .mn-form-textarea,
  .mn-form-select {
    width: 100%;
    border: 1px solid #cfd8e5;
    border-radius: 8px;
    background: #ffffff;
    color: #374151;
    font: 500 15px/1 'Plus Jakarta Sans', sans-serif;
    outline: none;
  }

  .mn-form-input,
  .mn-form-select {
    height: 50px;
    padding: 0 16px;
  }

  .mn-form-textarea {
    min-height: 98px;
    padding: 16px;
    resize: none;
    line-height: 1.55;
  }

  .mn-disabled {
    background: #f8fafc;
    color: #94a3b8;
  }

  .mn-form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 32px;
  }

  .mn-secondary-btn,
  .mn-primary-btn {
    height: 46px;
    border-radius: 7px;
    padding: 0 24px;
    font: 700 15px/1 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
  }

  .mn-secondary-btn {
    background: #ffffff;
    border: 1px solid #cfd8e5;
    color: #475569;
  }

  .mn-primary-btn {
    background: var(--mn-dark);
    border: 0;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .mn-note-card {
    padding: 26px;
    background: #dbeafe;
    border-color: #93c5fd;
    box-shadow: none;
    color: #172554;
  }

  .mn-note-top {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .mn-note-icon {
    width: 44px;
    height: 44px;
    border-radius: 11px;
    background: #ffffff;
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  .mn-note-title {
    font-size: 16px;
    font-weight: 800;
    margin-top: 6px;
  }

  .mn-note-list {
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .mn-note-list li {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 10px;
    font-size: 14px;
    line-height: 1.55;
  }

  @media (max-width: 1180px) {
    .mn-page {
      margin-left: 0;
      padding: 36px 24px;
    }

    .mn-shell {
      max-width: none;
    }

    .mn-top-grid,
    .mn-form-grid {
      grid-template-columns: 1fr;
    }

    .mn-cat-add-row {
      grid-template-columns: 1fr;
    }

    .mn-table-head,
    .mn-row {
      grid-template-columns: minmax(260px, 1.7fr) 140px 100px 100px 80px;
    }
  }
`,wo=({size:e=22})=>(0,L.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M9 18h6`}),(0,L.jsx)(`path`,{d:`M10 22h4`}),(0,L.jsx)(`path`,{d:`M8.5 14.5c-1.5-1.1-2.5-2.9-2.5-4.9A6 6 0 0 1 18 9.6c0 2-1 3.8-2.5 4.9-.8.6-1.2 1.4-1.2 2.3H9.7c0-.9-.4-1.7-1.2-2.3Z`})]}),To=({size:e=21})=>(0,L.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`4`,y:`4`,width:`6`,height:`6`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`14`,y:`4`,width:`6`,height:`6`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`4`,y:`14`,width:`6`,height:`6`,rx:`1.5`}),(0,L.jsx)(`path`,{d:`M15 15h5`}),(0,L.jsx)(`path`,{d:`M17.5 12.5v5`})]}),Eo=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`4`,y:`5`,width:`16`,height:`11`,rx:`1.8`}),(0,L.jsx)(`path`,{d:`M2.5 19h19`})]}),Do=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M3 10h18`}),(0,L.jsx)(`path`,{d:`M5 10v9`}),(0,L.jsx)(`path`,{d:`M9 10v9`}),(0,L.jsx)(`path`,{d:`M15 10v9`}),(0,L.jsx)(`path`,{d:`M19 10v9`}),(0,L.jsx)(`path`,{d:`M3 19h18`}),(0,L.jsx)(`path`,{d:`M12 4 4 8h16l-8-4Z`})]}),Oo=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`6`,width:`18`,height:`12`,rx:`2`}),(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`}),(0,L.jsx)(`path`,{d:`M6.5 9.5v5`}),(0,L.jsx)(`path`,{d:`M17.5 9.5v5`})]}),ko=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M3 9l9-5 9 5-9 5-9-5Z`}),(0,L.jsx)(`path`,{d:`M7 12v4c2.8 2 7.2 2 10 0v-4`}),(0,L.jsx)(`path`,{d:`M21 9v6`})]}),Ao=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`circle`,{cx:`8`,cy:`8`,r:`2`}),(0,L.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`}),(0,L.jsx)(`path`,{d:`M5 18c.6-2 2-3 3-3s2.4 1 3 3`}),(0,L.jsx)(`path`,{d:`M13 18c.6-2 2-3 3-3s2.4 1 3 3`})]}),jo=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M20 4c-7.5.4-12 4-12 10 0 3 2 5 5 5 5.7 0 7-6.5 7-15Z`}),(0,L.jsx)(`path`,{d:`M4 20c2.7-5 6.2-8.1 11-10`})]}),Mo=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M12 20h9`}),(0,L.jsx)(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z`})]}),No=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M3 6h18`}),(0,L.jsx)(`path`,{d:`M19 6l-1 14H6L5 6`}),(0,L.jsx)(`path`,{d:`M10 11v6`}),(0,L.jsx)(`path`,{d:`M14 11v6`})]}),Po=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M3 5h18`}),(0,L.jsx)(`path`,{d:`M7 12h10`}),(0,L.jsx)(`path`,{d:`M10 19h4`})]}),Fo=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`}),(0,L.jsx)(`path`,{d:`M16 2v4`}),(0,L.jsx)(`path`,{d:`M8 2v4`}),(0,L.jsx)(`path`,{d:`M3 10h18`})]}),Io=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,style:{marginRight:7,verticalAlign:-2},children:[(0,L.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,L.jsx)(`path`,{d:`M14 2v6h6`}),(0,L.jsx)(`path`,{d:`M8 13h8`}),(0,L.jsx)(`path`,{d:`M8 17h5`})]}),Lo=()=>(0,L.jsxs)(`svg`,{width:`21`,height:`21`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1.5`}),(0,L.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1.5`})]}),Ro=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#172554`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,L.jsx)(`path`,{d:`M12 11v5`}),(0,L.jsx)(`path`,{d:`M12 8h.01`})]}),zo=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,L.jsx)(`path`,{d:`M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z`}),(0,L.jsx)(`path`,{d:`M17 21v-8H7v8`}),(0,L.jsx)(`path`,{d:`M7 3v5h8`})]}),Bo=()=>(0,L.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,children:[(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,L.jsx)(`path`,{d:`m8.5 12.2 2.2 2.2 4.8-5`})]}),Vo=e=>{let t=String(e||``).toLowerCase();return t.includes(`tech`)||t.includes(`teknologi`)?(0,L.jsx)(Eo,{}):t.includes(`politic`)||t.includes(`politik`)?(0,L.jsx)(Do,{}):t.includes(`economic`)||t.includes(`ekonomi`)?(0,L.jsx)(Oo,{}):t.includes(`education`)||t.includes(`edukasi`)||t.includes(`pendidikan`)?(0,L.jsx)(ko,{}):t.includes(`social`)||t.includes(`sosial`)?(0,L.jsx)(Ao,{}):t.includes(`environment`)||t.includes(`lingkungan`)?(0,L.jsx)(jo,{}):(0,L.jsx)(Lo,{})},Ho=e=>String(e||``).toLowerCase().replace(/\b\w/g,e=>e.toUpperCase()),Uo=e=>String(e?.status||`published`).toLowerCase()===`pending`?`Pending`:`Published`,Wo=(e=[])=>e.map((e,t)=>({id:e.id||`admin_news_${t}`,apiId:e.apiId||e.id,title:e.title||`Untitled Article`,category:Ho(e.category||`General`),readTime:e.readTime||`2 Menit Baca`,author:e.author||`Redaksi Paham.ID`,authorAvatar:e.authorAvatar||``,status:Uo(e),date:e.date?.split(`,`)[0]||`24 Okt 2025`,image:e.thumbnail||e.image||`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=160&q=70`,synopsis:e.synopsis||e.excerpt||``,body:e.body||``})),Go=(e=[],t=[])=>e.map((e,n)=>{let r=Ho(e.name||e.nama_kategori),i=t.filter(e=>Ho(e.category)===r).length;return{id:e.id||e.id_kategori||`cat_${r}`,apiId:e.apiId||e.id_kategori||e.id,name:r,slug:e.slug||r.toLowerCase().replace(/\s+/g,`-`),description:e.description||e.deskripsi||``,order:e.order||e.urutan_tampil||n+1,count:e.count??e.jumlah_artikel??i,updatedAt:e.updatedAt||e.tgl_diperbarui||``}});function Ko(){let e=ct(),t=(0,_.useMemo)(()=>Wo([]),[]),[n,r]=(0,_.useState)(t),[i,a]=(0,_.useState)(()=>Go([],t)),[o,s]=(0,_.useState)(`news`),[c,l]=(0,_.useState)(`All`),[u,d]=(0,_.useState)(`Terbaru`),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[ee,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(1),[te,ne]=(0,_.useState)(1),[O,re]=(0,_.useState)(``),[ie,ae]=(0,_.useState)(``),[oe,k]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=!0;return Promise.all([$i({all:`true`}).catch(()=>[]),ea().catch(()=>[])]).then(([t,n])=>{if(!e)return;let i=Wo(t);r(i),a(Go(n,i))}),()=>{e=!1}},[]);let A=[...n.filter(e=>!(c!==`All`&&e.status!==c||f&&!e.author.toLowerCase().includes(f.toLowerCase())))].sort((e,t)=>u===`Terlama`?String(e.id).localeCompare(String(t.id)):u===`Judul (A-Z)`?e.title.localeCompare(t.title):u===`Judul (Z-A)`?t.title.localeCompare(e.title):String(t.id).localeCompare(String(e.id))),se=A.length,ce=Math.max(1,Math.ceil(se/So)),le=Math.min(E,ce),ue=(le-1)*So,de=ue+So,j=A.slice(ue,de),fe=se===0?0:ue+1,pe=Math.min(de,se),me=n.filter(e=>e.status===`Published`).length,he=n.filter(e=>e.status===`Pending`).length,ge=n.length,_e=Math.max(1,Math.ceil(i.length/xo)),ve=Math.min(te,_e),ye=(ve-1)*xo,be=i.slice(ye,ye+xo),xe=i.length===0?0:ye+1,Se=Math.min(ye+xo,i.length),Ce=(e,t=`success`)=>{T({message:e,type:t}),window.setTimeout(()=>T(null),2500)},we=()=>{C&&(na(C.apiId||C.id).catch(()=>{}),r(e=>e.filter(e=>e.id!==C.id)),w(null),Ce(`Artikel Berhasil Dihapus`,`error`))},Te=t=>{e(`/admin/edit-news/${t.id}`,{state:{article:{...t,thumbnail:t.image,image:t.image,excerpt:t.synopsis,date:`${t.date}, 14:20 WIB`},authorMeta:{name:t.author,category:t.category,date:`${t.date}, 14:20 WIB`}}})},Ee=async()=>{let e=O.trim();if(!e)return;let t=Go([await aa({nama_kategori:e,deskripsi:ie.trim(),urutan_tampil:i.length+1})],n)[0];a(e=>[...e,t]),re(``),ae(``),ne(Math.ceil((i.length+1)/xo)),s(`categories`),Ce(`Kategori Berhasil Ditambahkan`,`success`)},De=async()=>{if(!oe?.name?.trim())return;let e=Go([await oa(oe.apiId||oe.id,{nama_kategori:oe.name,deskripsi:oe.description,urutan_tampil:oe.order})],n)[0];a(t=>t.map(t=>t.id===oe.id?e:t)),k(null),s(`categories`),Ce(`Kategori Berhasil Diperbarui`,`success`)},Oe=e=>{let t=i.find(t=>t.id===e);t&&sa(t.apiId||t.id).catch(()=>{});let n=i.filter(t=>t.id!==e);a(n),ne(e=>Math.min(e,Math.max(1,Math.ceil(n.length/xo)))),Ce(`Kategori Berhasil Dihapus`,`error`)},ke=()=>{s(`categories`),ne(1)},Ae=()=>ce<=5?Array.from({length:ce},(e,t)=>t+1):le<=3?[1,2,3,`dots`,ce]:le>=ce-2?[1,`dots`,ce-2,ce-1,ce]:[1,`dots-start`,le-1,le,le+1,`dots-end`,ce],je=()=>(0,L.jsxs)(`div`,{className:`mn-pagination`,children:[(0,L.jsxs)(`span`,{children:[`Menampilkan `,fe,`-`,pe,` dari`,` `,se.toLocaleString(),` artikel`]}),(0,L.jsxs)(`div`,{className:`mn-page-controls`,children:[(0,L.jsx)(`button`,{className:`mn-page-btn`,type:`button`,disabled:le===1,onClick:()=>D(e=>Math.max(1,e-1)),children:`‹`}),Ae().map((e,t)=>String(e).startsWith(`dots`)?(0,L.jsx)(`span`,{style:{padding:`0 5px`},children:`...`},`${e}-${t}`):(0,L.jsx)(`button`,{className:`mn-page-btn${le===e?` active`:``}`,type:`button`,onClick:()=>D(e),children:e},e)),(0,L.jsx)(`button`,{className:`mn-page-btn`,type:`button`,disabled:le===ce,onClick:()=>D(e=>Math.min(ce,e+1)),children:`›`})]})]});return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:Co}),(0,L.jsxs)(`main`,{className:`mn-page`,children:[ee&&(0,L.jsxs)(`div`,{className:`mn-toast ${ee.type}`,children:[`✓ `,ee.message]}),o===`news`&&(0,L.jsx)(()=>(0,L.jsxs)(`div`,{className:`mn-shell`,children:[(0,L.jsxs)(`div`,{className:`mn-top-grid`,children:[(0,L.jsxs)(`section`,{className:`mn-stat-card`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`mn-stat-title`,children:`Total Publikasi`}),(0,L.jsxs)(`div`,{className:`mn-stat-link`,children:[ge.toLocaleString(),` Artikel`]})]}),(0,L.jsxs)(`div`,{className:`mn-stat-metrics`,children:[(0,L.jsxs)(`div`,{className:`mn-stat-metric`,children:[(0,L.jsx)(`div`,{className:`mn-stat-label`,children:`Published`}),(0,L.jsx)(`div`,{className:`mn-stat-value`,children:me.toLocaleString()})]}),(0,L.jsxs)(`div`,{className:`mn-stat-metric`,children:[(0,L.jsx)(`div`,{className:`mn-stat-label`,children:`Menunggu`}),(0,L.jsx)(`div`,{className:`mn-stat-value orange`,children:he.toLocaleString()})]})]})]}),(0,L.jsxs)(`section`,{className:`mn-cat-card`,children:[(0,L.jsx)(`div`,{className:`mn-cat-title`,children:`Organize News Categories`}),(0,L.jsx)(`div`,{className:`mn-cat-sub`,children:`Create and manage news categories easily`}),(0,L.jsxs)(`button`,{className:`mn-cat-btn`,type:`button`,onClick:ke,children:[(0,L.jsx)(To,{}),`Manage Categories`]})]})]}),(0,L.jsxs)(`section`,{className:`mn-panel`,children:[(0,L.jsxs)(`div`,{className:`mn-table-top`,children:[(0,L.jsx)(`div`,{className:`mn-tabs`,children:[`All`,`Pending`,`Published`].map(e=>(0,L.jsx)(`button`,{className:`mn-tab${c===e?` active`:``}`,type:`button`,onClick:()=>{l(e),D(1)},children:e},e))}),(0,L.jsxs)(`div`,{className:`mn-tools`,children:[(0,L.jsxs)(`div`,{className:`mn-tool-wrap`,children:[(0,L.jsxs)(`button`,{className:`mn-tool-btn`,type:`button`,onClick:()=>{b(e=>!e),S(!1)},children:[(0,L.jsx)(Po,{}),` Filter Lanjut`]}),y&&(0,L.jsxs)(`div`,{className:`mn-dropdown`,children:[(0,L.jsx)(`div`,{className:`mn-filter-title`,children:`Filter Lanjut`}),(0,L.jsx)(`label`,{className:`mn-filter-label`,children:`Penulis`}),(0,L.jsx)(`input`,{className:`mn-input`,value:f,placeholder:`Nama penulis...`,onChange:e=>p(e.target.value)}),(0,L.jsx)(`label`,{className:`mn-filter-label`,style:{marginTop:20},children:`Rentang Tanggal`}),(0,L.jsxs)(`div`,{className:`mn-filter-row`,children:[(0,L.jsx)(`input`,{className:`mn-input`,type:`date`,value:m,onChange:e=>h(e.target.value)}),(0,L.jsx)(`input`,{className:`mn-input`,type:`date`,value:g,onChange:e=>v(e.target.value)})]}),(0,L.jsxs)(`div`,{className:`mn-filter-actions`,children:[(0,L.jsx)(`button`,{className:`mn-reset-btn`,type:`button`,onClick:()=>{p(``),h(``),v(``),D(1),b(!1)},children:`Reset`}),(0,L.jsx)(`button`,{className:`mn-apply-btn`,type:`button`,onClick:()=>{D(1),b(!1)},children:`Terapkan Filter`})]})]})]}),(0,L.jsxs)(`div`,{className:`mn-tool-wrap`,children:[(0,L.jsxs)(`button`,{className:`mn-tool-btn`,type:`button`,onClick:()=>{S(e=>!e),b(!1)},children:[(0,L.jsx)(Fo,{}),` Urutkan`]}),x&&(0,L.jsx)(`div`,{className:`mn-dropdown sort`,children:[`Terbaru`,`Terlama`,`Judul (A-Z)`,`Judul (Z-A)`].map(e=>(0,L.jsx)(`button`,{className:`mn-sort-item`,type:`button`,onClick:()=>{d(e),S(!1),D(1)},children:e},e))})]})]})]}),(0,L.jsxs)(`div`,{className:`mn-table-head`,children:[(0,L.jsx)(`span`,{children:`Judul Artikel`}),(0,L.jsx)(`span`,{children:`Penulis`}),(0,L.jsx)(`span`,{children:`Status`}),(0,L.jsx)(`span`,{children:`Tanggal`}),(0,L.jsx)(`span`,{children:`Aksi`})]}),j.map(e=>(0,L.jsxs)(`div`,{className:`mn-row`,children:[(0,L.jsxs)(`div`,{className:`mn-article-cell`,children:[(0,L.jsx)(`img`,{className:`mn-thumb`,src:e.image,alt:``}),(0,L.jsxs)(`div`,{style:{minWidth:0},children:[(0,L.jsx)(`div`,{className:`mn-title`,children:e.title}),(0,L.jsxs)(`div`,{className:`mn-meta`,children:[e.category,` • `,e.readTime]})]})]}),(0,L.jsxs)(`div`,{className:`mn-author`,children:[(0,L.jsx)(`img`,{className:`mn-avatar`,src:e.authorAvatar,alt:``}),(0,L.jsx)(`span`,{children:e.author})]}),(0,L.jsx)(`span`,{className:`mn-status ${e.status.toLowerCase()}`,children:e.status}),(0,L.jsx)(`span`,{className:`mn-date`,children:e.date}),(0,L.jsxs)(`div`,{className:`mn-actions`,children:[(0,L.jsx)(`button`,{className:`mn-icon-btn`,type:`button`,onClick:()=>Te(e),children:(0,L.jsx)(Mo,{})}),(0,L.jsx)(`button`,{className:`mn-icon-btn`,type:`button`,onClick:()=>w(e),children:(0,L.jsx)(No,{})})]})]},e.id)),je()]})]}),{}),o===`categories`&&(0,L.jsx)(()=>(0,L.jsxs)(`div`,{className:`mn-shell`,children:[(0,L.jsxs)(`div`,{className:`mn-breadcrumb`,children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>s(`news`),children:`Manage News`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`strong`,{children:`Manage Categories`})]}),(0,L.jsxs)(`section`,{className:`mn-cat-add-panel`,children:[(0,L.jsx)(`h1`,{className:`mn-cat-add-title`,children:`Tambah Kategori Baru`}),(0,L.jsx)(`p`,{className:`mn-cat-add-sub`,children:`Buat kategori baru untuk mengorganisir artikel`}),(0,L.jsxs)(`div`,{className:`mn-cat-add-row`,children:[(0,L.jsxs)(`label`,{children:[(0,L.jsx)(`span`,{className:`mn-field-label`,children:`Nama Kategori`}),(0,L.jsx)(`input`,{className:`mn-input`,value:O,placeholder:`Masukkan nama kategori (e.g. Gaya Hidup)`,onChange:e=>re(e.target.value)})]}),(0,L.jsx)(`span`,{}),(0,L.jsxs)(`button`,{className:`mn-big-btn`,type:`button`,onClick:()=>s(`addCategory`),children:[(0,L.jsx)(To,{}),`Add New Category`]})]})]}),(0,L.jsxs)(`section`,{className:`mn-category-panel`,children:[(0,L.jsxs)(`div`,{className:`mn-category-header`,children:[(0,L.jsx)(`h2`,{className:`mn-category-title`,children:`Daftar Kategori`}),(0,L.jsxs)(`span`,{className:`mn-total-pill`,children:[`Total `,i.length,` Kategori`]})]}),(0,L.jsxs)(`div`,{className:`mn-cat-head`,children:[(0,L.jsx)(`span`,{children:`Kategori`}),(0,L.jsx)(`span`,{children:`Statistik`}),(0,L.jsx)(`span`,{children:`Terakhir Diperbarui`}),(0,L.jsx)(`span`,{children:`Aksi`})]}),be.map(e=>(0,L.jsxs)(`div`,{className:`mn-cat-row`,children:[(0,L.jsxs)(`div`,{className:`mn-cat-name`,children:[(0,L.jsx)(`span`,{className:`mn-cat-icon-box`,children:Vo(e.name)}),e.name]}),(0,L.jsxs)(`div`,{className:`mn-cat-stat`,children:[(0,L.jsx)(Io,{}),` `,e.count,` Artikel`]}),(0,L.jsx)(`div`,{className:`mn-cat-updated`,children:e.updatedAt}),(0,L.jsxs)(`div`,{className:`mn-actions`,children:[(0,L.jsx)(`button`,{className:`mn-icon-btn`,type:`button`,onClick:()=>{k(e),s(`editCategory`)},children:(0,L.jsx)(Mo,{})}),(0,L.jsx)(`button`,{className:`mn-icon-btn`,type:`button`,onClick:()=>Oe(e.id),children:(0,L.jsx)(No,{})})]})]},e.id)),(0,L.jsxs)(`div`,{className:`mn-cat-footer`,children:[(0,L.jsxs)(`span`,{children:[`Menampilkan `,xe,`-`,Se,` dari`,` `,i.length,` kategori`]}),(0,L.jsxs)(`div`,{className:`mn-page-controls`,children:[(0,L.jsx)(`button`,{className:`mn-page-btn`,type:`button`,disabled:ve===1,onClick:()=>ne(e=>Math.max(1,e-1)),children:`‹`}),(0,L.jsx)(`button`,{className:`mn-page-btn`,type:`button`,disabled:ve===_e,onClick:()=>ne(e=>Math.min(_e,e+1)),children:`›`})]})]})]})]}),{}),o===`addCategory`&&(0,L.jsx)(()=>(0,L.jsxs)(`div`,{className:`mn-shell`,children:[(0,L.jsxs)(`div`,{className:`mn-breadcrumb`,children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>s(`news`),children:`Manage News`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`button`,{type:`button`,onClick:ke,children:`Manage Categories`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`strong`,{children:`Add New Category`})]}),(0,L.jsx)(`h1`,{className:`mn-form-title`,children:`Tambah Kategori Baru`}),(0,L.jsx)(`p`,{className:`mn-form-sub`,children:`Buat kategori baru untuk mengorganisir artikel dan memudahkan pembaca menemukan konten yang relevan.`}),(0,L.jsxs)(`div`,{className:`mn-form-grid`,children:[(0,L.jsxs)(`section`,{className:`mn-form-card`,children:[(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsx)(`label`,{className:`mn-field-label`,children:`Nama Kategori`}),(0,L.jsx)(`input`,{className:`mn-form-input`,value:O,placeholder:`Masukkan nama kategori, contoh: Teknologi`,onChange:e=>re(e.target.value)})]}),(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsx)(`label`,{className:`mn-field-label`,children:`Slug Kategori`}),(0,L.jsx)(`input`,{className:`mn-form-input mn-disabled`,value:O?O.toLowerCase().replace(/\s+/g,`-`):`newsportal.com/category/`,readOnly:!0}),(0,L.jsx)(`div`,{style:{color:`#94a3b8`,fontSize:12,marginTop:8},children:`ⓘ Slug dihasilkan secara otomatis dari nama kategori, tetapi dapat diubah secara manual.`})]}),(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsxs)(`label`,{className:`mn-field-label`,children:[`Deskripsi Singkat `,(0,L.jsx)(`span`,{style:{color:`#94a3b8`},children:`(Opsional)`})]}),(0,L.jsx)(`textarea`,{className:`mn-form-textarea`,value:ie,placeholder:`Berikan deskripsi singkat tentang kategori ini...`,onChange:e=>ae(e.target.value)})]}),(0,L.jsxs)(`div`,{className:`mn-form-actions`,style:{justifyContent:`flex-start`},children:[(0,L.jsxs)(`button`,{className:`mn-primary-btn`,type:`button`,onClick:Ee,children:[(0,L.jsx)(zo,{}),`Simpan Kategori`]}),(0,L.jsx)(`button`,{className:`mn-secondary-btn`,type:`button`,onClick:ke,children:`Batal`})]})]}),(0,L.jsxs)(`aside`,{className:`mn-note-card`,children:[(0,L.jsxs)(`div`,{className:`mn-note-top`,children:[(0,L.jsx)(`span`,{className:`mn-note-icon`,children:(0,L.jsx)(wo,{})}),(0,L.jsx)(`div`,{className:`mn-note-title`,children:`Tips Kategori`})]}),(0,L.jsxs)(`ul`,{className:`mn-note-list`,children:[(0,L.jsxs)(`li`,{children:[(0,L.jsx)(Bo,{}),(0,L.jsx)(`span`,{children:`Gunakan nama yang singkat dan deskriptif.`})]}),(0,L.jsxs)(`li`,{children:[(0,L.jsx)(Bo,{}),(0,L.jsx)(`span`,{children:`Pastikan kategori belum pernah dibuat sebelumnya.`})]}),(0,L.jsxs)(`li`,{children:[(0,L.jsx)(Bo,{}),(0,L.jsx)(`span`,{children:`Deskripsi membantu mesin pencari memahami topik konten Anda.`})]})]})]})]})]}),{}),o===`editCategory`&&(0,L.jsx)(()=>(0,L.jsxs)(`div`,{className:`mn-shell`,children:[(0,L.jsxs)(`div`,{className:`mn-breadcrumb`,children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>s(`news`),children:`Manage News`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`button`,{type:`button`,onClick:ke,children:`Manage Categories`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`strong`,{children:`Edit Category`})]}),(0,L.jsx)(`h1`,{className:`mn-form-title`,children:`Edit Kategori`}),(0,L.jsx)(`p`,{className:`mn-form-sub`,children:`Perbarui informasi kategori berita untuk pengorganisasian konten yang lebih baik.`}),(0,L.jsxs)(`div`,{className:`mn-form-grid`,children:[(0,L.jsxs)(`section`,{className:`mn-form-card`,children:[(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsx)(`label`,{className:`mn-field-label`,children:`Nama Kategori`}),(0,L.jsx)(`input`,{className:`mn-form-input`,value:oe?.name||``,onChange:e=>k(t=>({...t,name:e.target.value}))})]}),(0,L.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16},children:[(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsx)(`label`,{className:`mn-field-label`,children:`Slug Kategori (Otomatis)`}),(0,L.jsx)(`input`,{className:`mn-form-input mn-disabled`,value:oe?.name?oe.name.toLowerCase().replace(/\s+/g,`-`):``,readOnly:!0})]}),(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsx)(`label`,{className:`mn-field-label`,children:`Urutan Tampil`}),(0,L.jsx)(`select`,{className:`mn-form-select`,value:oe?.order||1,onChange:e=>k(t=>({...t,order:Number(e.target.value)})),children:i.map((e,t)=>(0,L.jsx)(`option`,{value:t+1,children:t+1},t))})]})]}),(0,L.jsxs)(`div`,{className:`mn-form-group`,children:[(0,L.jsx)(`label`,{className:`mn-field-label`,children:`Deskripsi Singkat`}),(0,L.jsx)(`textarea`,{className:`mn-form-textarea`,value:oe?.description||``,onChange:e=>k(t=>({...t,description:e.target.value}))})]}),(0,L.jsxs)(`div`,{className:`mn-form-actions`,children:[(0,L.jsx)(`button`,{className:`mn-secondary-btn`,type:`button`,onClick:ke,children:`Batal`}),(0,L.jsxs)(`button`,{className:`mn-primary-btn`,type:`button`,onClick:De,children:[(0,L.jsx)(zo,{}),`Simpan Perubahan`]})]})]}),(0,L.jsxs)(`aside`,{className:`mn-note-card`,children:[(0,L.jsxs)(`div`,{className:`mn-note-top`,children:[(0,L.jsx)(`span`,{className:`mn-note-icon`,children:(0,L.jsx)(Ro,{})}),(0,L.jsx)(`div`,{className:`mn-note-title`,children:`Catatan Editorial`})]}),(0,L.jsx)(`p`,{style:{margin:0,fontSize:14,lineHeight:1.55},children:`Perubahan nama kategori akan secara otomatis memperbarui label pada semua artikel yang menggunakan kategori ini. Pastikan perubahan sudah sesuai dengan pedoman editorial Insight News.`})]})]})]}),{})]}),C&&(0,L.jsx)(`div`,{className:`mn-overlay`,onClick:()=>w(null),children:(0,L.jsxs)(`div`,{className:`mn-modal`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`mn-modal-body`,children:[(0,L.jsx)(`div`,{className:`mn-modal-icon`,children:(0,L.jsx)(No,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h2`,{className:`mn-modal-title`,children:`Hapus Artikel?`}),(0,L.jsxs)(`p`,{className:`mn-modal-text`,children:[`Apakah Anda yakin ingin menghapus artikel ini?`,(0,L.jsx)(`br`,{}),`Tindakan ini tidak dapat dibatalkan.`]})]})]}),(0,L.jsxs)(`div`,{className:`mn-modal-footer`,children:[(0,L.jsx)(`button`,{className:`mn-modal-btn cancel`,type:`button`,onClick:()=>w(null),children:`Batal`}),(0,L.jsx)(`button`,{className:`mn-modal-btn delete`,type:`button`,onClick:we,children:`Hapus`})]})]})})]})}var qo=`
  .pa-simple {
    min-height: calc(100vh - var(--dashboard-header-height));
    margin-left: var(--dashboard-sidebar-width);
    margin-top: var(--dashboard-header-height);
    padding: 32px 48px 56px;
    background: #fbfaf9;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #111827;
  }

  .pa-simple-shell {
    max-width: 1080px;
    margin: 0 auto;
  }

  .pa-simple-title {
    margin: 0 0 8px;
    color: #162052;
    font-size: 30px;
    font-weight: 800;
  }

  .pa-simple-subtitle {
    margin: 0 0 28px;
    color: #64748b;
    font-size: 15px;
  }

  .pa-simple-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 18px;
  }

  .pa-simple-count,
  .pa-simple-panel {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
  }

  .pa-simple-count {
    padding: 18px 22px;
    color: #1f316f;
    font-weight: 800;
  }

  .pa-simple-search {
    width: min(360px, 100%);
    height: 42px;
    border: 1px solid #d8dee8;
    border-radius: 9px;
    padding: 0 14px;
    font: 500 14px/1 'Plus Jakarta Sans', sans-serif;
  }

  .pa-simple-panel {
    overflow: hidden;
  }

  .pa-simple-head,
  .pa-simple-row {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) 170px 150px 210px;
    gap: 18px;
    align-items: center;
  }

  .pa-simple-head {
    padding: 18px 22px;
    background: #263875;
    color: #ffffff;
    font-size: 13px;
    font-weight: 800;
  }

  .pa-simple-row {
    padding: 20px 22px;
    border-bottom: 1px solid #eef2f7;
  }

  .pa-simple-row:last-child {
    border-bottom: 0;
  }

  .pa-simple-article {
    display: flex;
    gap: 14px;
    align-items: center;
    min-width: 0;
  }

  .pa-simple-thumb {
    width: 72px;
    height: 56px;
    border-radius: 8px;
    object-fit: cover;
    background: #e5e7eb;
    flex: 0 0 72px;
  }

  .pa-simple-article h3 {
    margin: 0 0 6px;
    color: #111827;
    font-size: 15px;
    line-height: 1.35;
  }

  .pa-simple-article p,
  .pa-simple-meta {
    margin: 0;
    color: #64748b;
    font-size: 12px;
  }

  .pa-simple-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .pa-simple-btn {
    height: 36px;
    border: 0;
    border-radius: 8px;
    padding: 0 14px;
    color: #ffffff;
    cursor: pointer;
    font: 800 13px/1 'Plus Jakarta Sans', sans-serif;
  }

  .pa-simple-approve {
    background: #15803d;
  }

  .pa-simple-reject {
    background: #b91c1c;
  }

  .pa-simple-empty {
    padding: 42px 22px;
    color: #64748b;
    text-align: center;
  }

  @media (max-width: 920px) {
    .pa-simple {
      margin-left: 0;
      padding: 24px;
    }

    .pa-simple-head {
      display: none;
    }

    .pa-simple-row {
      grid-template-columns: 1fr;
    }

    .pa-simple-actions {
      justify-content: flex-start;
    }
  }
`;function Jo(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(``),c=()=>{a(!0),$i({all:`true`,status:`pending`}).then(t).catch(()=>t([])).finally(()=>a(!1))};(0,_.useEffect)(()=>{c()},[]);let l=(0,_.useMemo)(()=>{let t=n.trim().toLowerCase();return t?e.filter(e=>[e.title,e.author,e.category].join(` `).toLowerCase().includes(t)):e},[e,n]),u=async(e,n)=>{await ia(e.apiId||e.id,{status:n,feedback_admin:n===`rejected`?`Artikel ditolak oleh admin.`:null}),t(t=>t.filter(t=>t.id!==e.id)),s(n===`published`?`Artikel berhasil diterbitkan.`:`Artikel berhasil ditolak.`),window.setTimeout(()=>s(``),2400)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:qo}),(0,L.jsx)(`main`,{className:`pa-simple`,children:(0,L.jsxs)(`div`,{className:`pa-simple-shell`,children:[(0,L.jsx)(`h1`,{className:`pa-simple-title`,children:`Persetujuan Artikel`}),(0,L.jsx)(`p`,{className:`pa-simple-subtitle`,children:`Tinjau artikel berstatus pending dari database.`}),(0,L.jsxs)(`div`,{className:`pa-simple-toolbar`,children:[(0,L.jsx)(`div`,{className:`pa-simple-count`,children:i?`Memuat...`:`${l.length} artikel pending`}),(0,L.jsx)(`input`,{className:`pa-simple-search`,value:n,onChange:e=>r(e.target.value),placeholder:`Cari antrean...`})]}),o&&(0,L.jsx)(`div`,{className:`pa-simple-count`,children:o}),(0,L.jsxs)(`section`,{className:`pa-simple-panel`,children:[(0,L.jsxs)(`div`,{className:`pa-simple-head`,children:[(0,L.jsx)(`span`,{children:`Artikel`}),(0,L.jsx)(`span`,{children:`Penulis`}),(0,L.jsx)(`span`,{children:`Kategori`}),(0,L.jsx)(`span`,{children:`Aksi`})]}),l.length===0?(0,L.jsx)(`div`,{className:`pa-simple-empty`,children:i?`Memuat antrean...`:`Belum ada artikel pending.`}):l.map(e=>(0,L.jsxs)(`article`,{className:`pa-simple-row`,children:[(0,L.jsxs)(`div`,{className:`pa-simple-article`,children:[(0,L.jsx)(`img`,{className:`pa-simple-thumb`,src:e.thumbnail||e.image,alt:``}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.excerpt||e.synopsis||`Tanpa ringkasan.`})]})]}),(0,L.jsx)(`div`,{className:`pa-simple-meta`,children:e.author}),(0,L.jsx)(`div`,{className:`pa-simple-meta`,children:e.category}),(0,L.jsxs)(`div`,{className:`pa-simple-actions`,children:[(0,L.jsx)(`button`,{className:`pa-simple-btn pa-simple-approve`,type:`button`,onClick:()=>u(e,`published`),children:`Setujui`}),(0,L.jsx)(`button`,{className:`pa-simple-btn pa-simple-reject`,type:`button`,onClick:()=>u(e,`rejected`),children:`Tolak`})]})]},e.id))]})]})})]})}var Yo=400,Xo=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --dashboard-sidebar-width: 260px;
    --dashboard-header-height: 76px;
  }

  .en-page *,
  .en-page *::before,
  .en-page *::after {
    box-sizing: border-box;
  }

  .en-page {
    min-height: calc(100vh - var(--dashboard-header-height));
    margin-left: var(--dashboard-sidebar-width);
    margin-top: var(--dashboard-header-height);
    padding: 28px 42px 64px 38px;
    background: #f8f9fb;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #0f172a;
  }

  .en-topbar {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 22px;
  }

  .en-breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #64748b;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .en-breadcrumb button {
    border: 0;
    background: transparent;
    padding: 0;
    color: #64748b;
    font: inherit;
    cursor: pointer;
  }

  .en-breadcrumb strong {
    color: #0f172a;
    font-weight: 800;
  }

  .en-meta {
    display: flex;
    align-items: center;
    gap: 18px;
    color: #64748b;
    font-size: 13px;
    font-weight: 600;
  }

  .en-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .en-meta-sep {
    width: 1px;
    height: 22px;
    background: #e2e8f0;
  }

  .en-meta-pill {
    min-height: 28px;
    padding: 0 14px;
    border-radius: 999px;
    background: #e8eef8;
    color: #64748b;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }

  .en-save-top {
    min-width: 198px;
    height: 52px;
    border: 0;
    border-radius: 999px;
    background: #8ea4ed;
    color: #ffffff;
    font: 800 15px/1 'Plus Jakarta Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    cursor: pointer;
    box-shadow: 0 10px 22px rgba(47, 75, 200, 0.14);
  }

  .en-save-top:hover {
    background: #3155f6;
  }

  .en-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 306px;
    gap: 32px;
    align-items: start;
  }

  .en-left,
  .en-right {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .en-card {
    background: #ffffff;
    border: 1px solid #dce3ef;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.04);
  }

  .en-card.compact {
    padding: 22px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  .en-title-card {
    min-height: 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .en-synopsis-card {
    min-height: 250px;
  }

  .en-body-card {
    min-height: 455px;
  }

  .en-label {
    margin: 0 0 12px;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .en-title-input {
    width: 100%;
    min-height: 52px;
    border: 0;
    outline: 0;
    resize: none;
    background: transparent;
    color: #071426;
    font: 800 24px/1.2 'Plus Jakarta Sans', sans-serif;
  }

  .en-section-title {
    margin: 0 0 4px;
    color: #020617;
    font-size: 16px;
    font-weight: 800;
  }

  .en-section-subtitle {
    margin: 0 0 18px;
    color: #8b98ad;
    font-size: 13px;
    font-weight: 500;
  }

  .en-textarea {
    width: 100%;
    border: 0;
    outline: 0;
    resize: none;
    background: transparent;
    color: #142033;
    font: 500 16px/1.7 'Plus Jakarta Sans', sans-serif;
  }

  .en-title-input::placeholder,
  .en-textarea::placeholder {
    color: #cbd5e1;
  }

  .en-synopsis-box {
    width: 100%;
    min-height: 142px;
    border: 1px solid #e6ebf3;
    border-radius: 10px;
    padding: 18px 16px;
    background: #ffffff;
  }

  .en-synopsis-box .en-textarea {
    min-height: 104px;
  }

  .en-body-textarea {
    min-height: 260px;
  }

  .en-toolbar {
    height: 42px;
    margin: 8px 0 18px;
    padding: 0 12px;
    border-top: 1px solid #eef2f7;
    border-bottom: 1px solid #eef2f7;
    background: #fbfcfe;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .en-tool-btn {
    width: 22px;
    height: 22px;
    border: 0;
    background: transparent;
    color: #64748b;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .en-thumb {
    width: 100%;
    height: 104px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
    margin-bottom: 18px;
    cursor: pointer;
  }

  .en-thumb-placeholder {
    width: 100%;
    height: 104px;
    border: 2px dashed #cbd5e1;
    border-radius: 10px;
    background: #f8fafc;
    margin-bottom: 18px;
    color: #94a3b8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
  }

  .en-file-input {
    display: none;
  }

  .en-category-list {
    min-height: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .en-category-tag {
    min-height: 26px;
    padding: 0 10px;
    border-radius: 7px;
    background: #e7edff;
    color: #2447d8;
    font-size: 11px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .en-category-remove {
    border: 0;
    background: transparent;
    color: #64748b;
    cursor: pointer;
    padding: 0;
    font-size: 13px;
    line-height: 1;
  }

  .en-category-form {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  .en-category-select {
    width: 100%;
    height: 38px;
    border: 1px solid #dce3ef;
    border-radius: 8px;
    background: #f8fafc;
    color: #334155;
    padding: 0 12px;
    font: 500 13px/1 'Plus Jakarta Sans', sans-serif;
    outline: none;
  }

  .en-check-title {
    margin: 0 0 18px;
    color: #020617;
    font-size: 15px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .en-check-ok {
    color: #22c55e;
    display: inline-flex;
  }

  .en-metric-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 10px;
  }

  .en-metric-label {
    color: #8b98ad;
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .en-metric-value {
    color: #22c55e;
    font-size: 26px;
    font-weight: 800;
    line-height: 1;
  }

  .en-metric-value.red {
    color: #dc2626;
  }

  .en-metric-sub {
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
  }

  .en-progress {
    height: 6px;
    border-radius: 999px;
    background: #dbe3ef;
    overflow: hidden;
  }

  .en-progress-fill {
    height: 100%;
    border-radius: 999px;
    background: #22c55e;
  }

  .en-progress-fill.red {
    background: #dc2626;
  }

  .en-warning {
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: #fee2e2;
    color: #dc2626;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .en-tips-title {
    margin: 0 0 14px;
    color: #111827;
    font-size: 16px;
    font-weight: 800;
  }

  .en-tip {
    display: grid;
    grid-template-columns: 16px 1fr;
    gap: 8px;
    color: #4b5563;
    font-size: 11px;
    line-height: 1.35;
    margin-bottom: 11px;
  }

  .en-tip:last-child {
    margin-bottom: 0;
  }

  .en-tip-icon {
    width: 15px;
    height: 15px;
    border: 1.8px solid #2563eb;
    color: #2563eb;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
  }

  .en-toast-wrap {
    position: fixed;
    top: 88px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    pointer-events: none;
  }

  .en-toast {
    min-width: 220px;
    padding: 12px 18px;
    border-radius: 999px;
    background: #294bd6;
    color: #ffffff;
    font-size: 13px;
    font-weight: 800;
    text-align: center;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.18);
  }

  @media (max-width: 1120px) {
    .en-page {
      margin-left: 0;
      padding: 24px;
    }

    .en-layout {
      grid-template-columns: 1fr;
    }

    .en-right {
      width: 100%;
    }
  }
`,Zo=()=>(0,L.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z`}),(0,L.jsx)(`polyline`,{points:`17 21 17 13 7 13 7 21`}),(0,L.jsx)(`polyline`,{points:`7 3 7 8 15 8`})]}),Qo=()=>(0,L.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#94a3b8`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),(0,L.jsx)(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),(0,L.jsx)(`polyline`,{points:`21 15 16 10 5 21`})]}),$o=()=>(0,L.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,L.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),es=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`}),(0,L.jsx)(`line`,{x1:`12`,y1:`9`,x2:`12`,y2:`13`}),(0,L.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]}),ts=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`path`,{d:`M20 21a8 8 0 0 0-16 0`}),(0,L.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]}),ns=()=>(0,L.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,L.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`}),(0,L.jsx)(`line`,{x1:`16`,y1:`2`,x2:`16`,y2:`6`}),(0,L.jsx)(`line`,{x1:`8`,y1:`2`,x2:`8`,y2:`6`}),(0,L.jsx)(`line`,{x1:`3`,y1:`10`,x2:`21`,y2:`10`})]});function rs(e){return e?.trim()?e.trim().split(/\s+/).length:0}function is(e,t){return{id:e?.id||t||`news_${Date.now()}`,apiId:e?.apiId||e?.id||t,author:e?.author||`Redaksi Paham.ID`,title:e?.title||``,synopsis:e?.synopsis||e?.excerpt||``,body:e?.body||``,thumbnail:e?.thumbnail||e?.image||``,image:e?.image||e?.thumbnail||``,category:e?.category||`General`,categoryId:e?.categoryId,excerpt:e?.excerpt||e?.synopsis||``,wordCount:e?.wordCount||0,readTime:e?.readTime||`2 min`,status:e?.status||`draft`,date:e?.date||new Date().toLocaleDateString(`id-ID`)}}function as(){let[e,t]=(0,_.useState)(``);return{toast:e,showToast:e=>{t(e),setTimeout(()=>{t(``)},2200)}}}function os(){let e=ct(),t=P(),{id:n}=ft(),r=(0,_.useRef)(null),{toast:i,showToast:a}=as(),o=t.state?.article,s=(0,_.useMemo)(()=>is(o,n),[o,n]),[c,l]=(0,_.useState)(s.title),[u,d]=(0,_.useState)(s.synopsis),[f,p]=(0,_.useState)(s.body),[m,h]=(0,_.useState)(s.thumbnail),[g,v]=(0,_.useState)(s.category),[y,b]=(0,_.useState)(!!s.category),[x,S]=(0,_.useState)([]);(0,_.useEffect)(()=>{let e=!0;return ea().then(t=>{e&&(S(t),!s.category&&t[0]?.name&&(v(t[0].name),b(!0)))}).catch(()=>{e&&S([])}),()=>{e=!1}},[s.category]);let C=rs(u),w=C>Yo,ee=Math.min(100,C/Yo*100),T=C===0?0:Math.max(1,Math.ceil(C/200)),E=()=>{r.current?.click()},D=e=>{if(e){if(![`image/jpeg`,`image/jpg`,`image/png`].includes(e.type)){a(`Format gambar harus JPG atau PNG`);return}if(e.size>2097152){a(`Ukuran gambar maksimal 2MB`);return}h(URL.createObjectURL(e))}},te=e=>{let t=e.target.files?.[0];D(t),e.target.value=``},ne=e=>{e.preventDefault(),D(e.dataTransfer.files?.[0])},O=()=>{b(!1)},re=e=>{v(e.target.value),b(!0)},ie=()=>({...s,title:c,synopsis:u,body:f,thumbnail:m,image:m,category:y?g:`General`,excerpt:u.slice(0,120),wordCount:C,readTime:`${T} min`,status:s.status||`draft`,updatedAt:new Date().toISOString()});return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`style`,{children:Xo}),i&&(0,L.jsx)(`div`,{className:`en-toast-wrap`,children:(0,L.jsx)(`div`,{className:`en-toast`,children:i})}),(0,L.jsxs)(`main`,{className:`en-page`,children:[(0,L.jsxs)(`div`,{className:`en-topbar`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{className:`en-breadcrumb`,children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>e(`/manage-news`),children:`Manage News`}),(0,L.jsx)(`span`,{children:`›`}),(0,L.jsx)(`strong`,{children:`Edit News`})]}),(0,L.jsxs)(`div`,{className:`en-meta`,children:[(0,L.jsxs)(`span`,{className:`en-meta-item`,children:[(0,L.jsx)(ts,{}),s.author]}),(0,L.jsx)(`span`,{className:`en-meta-sep`}),(0,L.jsx)(`span`,{className:`en-meta-pill`,children:y?g:`General`}),(0,L.jsx)(`span`,{className:`en-meta-sep`}),(0,L.jsxs)(`span`,{className:`en-meta-item`,children:[(0,L.jsx)(ns,{}),s.date]})]})]}),(0,L.jsxs)(`button`,{className:`en-save-top`,type:`button`,onClick:()=>{let t=ie(),n=x.find(e=>e.name===t.category);ia(s.apiId||s.id,{judul:t.title,ringkasan:t.synopsis,isi_lengkap:t.body,status:t.status,id_kategori:n?.apiId||s.categoryId,read_time:t.readTime}).catch(()=>{}),a(`Perubahan berhasil disimpan`),setTimeout(()=>{e(`/manage-news`,{state:{toastType:`updated`,updatedArticle:t}})},800)},children:[(0,L.jsx)(Zo,{}),`Save Changes`]})]}),(0,L.jsxs)(`div`,{className:`en-layout`,children:[(0,L.jsxs)(`section`,{className:`en-left`,children:[(0,L.jsxs)(`div`,{className:`en-card en-title-card`,children:[(0,L.jsx)(`p`,{className:`en-label`,children:`Judul Artikel`}),(0,L.jsx)(`textarea`,{className:`en-title-input`,rows:2,value:c,onChange:e=>l(e.target.value),placeholder:`Masukkan judul yang menarik...`})]}),(0,L.jsxs)(`div`,{className:`en-card en-synopsis-card`,children:[(0,L.jsx)(`h2`,{className:`en-section-title`,children:`Ringkasan (Paham 2 Menit)`}),(0,L.jsx)(`p`,{className:`en-section-subtitle`,children:`Tulis inti berita untuk pembaca cepat.`}),(0,L.jsx)(`div`,{className:`en-synopsis-box`,children:(0,L.jsx)(`textarea`,{className:`en-textarea`,value:u,onChange:e=>d(e.target.value),placeholder:`Tuliskan ringkasan singkat di sini...`,style:w?{color:`#dc2626`}:{}})})]}),(0,L.jsxs)(`div`,{className:`en-card en-body-card`,children:[(0,L.jsx)(`h2`,{className:`en-section-title`,children:`Artikel Lengkap`}),(0,L.jsx)(`p`,{className:`en-section-subtitle`,children:`Tuliskan versi lengkap artikel di sini.`}),(0,L.jsxs)(`div`,{className:`en-toolbar`,children:[(0,L.jsx)(`button`,{className:`en-tool-btn`,type:`button`,style:{fontWeight:800},children:`B`}),(0,L.jsx)(`button`,{className:`en-tool-btn`,type:`button`,style:{fontStyle:`italic`},children:`I`}),(0,L.jsx)(`button`,{className:`en-tool-btn`,type:`button`,children:`≡`}),(0,L.jsx)(`button`,{className:`en-tool-btn`,type:`button`,children:`🔗`}),(0,L.jsx)(`button`,{className:`en-tool-btn`,type:`button`,children:`❞`})]}),(0,L.jsx)(`textarea`,{className:`en-textarea en-body-textarea`,value:f,onChange:e=>p(e.target.value),placeholder:`Mulai menulis detail berita...`})]})]}),(0,L.jsxs)(`aside`,{className:`en-right`,children:[(0,L.jsxs)(`div`,{className:`en-card compact`,children:[(0,L.jsx)(`p`,{className:`en-label`,children:`Gambar Unggulan`}),(0,L.jsx)(`input`,{ref:r,className:`en-file-input`,type:`file`,accept:`image/jpeg,image/jpg,image/png`,onChange:te}),m?(0,L.jsx)(`img`,{className:`en-thumb`,src:m,alt:c,onClick:E}):(0,L.jsxs)(`button`,{className:`en-thumb-placeholder`,type:`button`,onClick:E,onDragOver:e=>e.preventDefault(),onDrop:ne,children:[(0,L.jsx)(Qo,{}),(0,L.jsx)(`span`,{children:`Klik atau seret gambar ke sini`}),(0,L.jsx)(`span`,{style:{fontSize:10,color:`#cbd5e1`},children:`JPG, PNG (Maks. 2MB)`})]}),(0,L.jsx)(`p`,{className:`en-label`,style:{marginTop:18},children:`Kategori`}),(0,L.jsx)(`div`,{className:`en-category-list`,children:y?(0,L.jsxs)(`span`,{className:`en-category-tag`,children:[g,(0,L.jsx)(`button`,{className:`en-category-remove`,type:`button`,onClick:O,children:`×`})]}):(0,L.jsx)(`span`,{style:{fontSize:12,color:`#94a3b8`},children:`Belum ada kategori`})}),(0,L.jsx)(`div`,{className:`en-category-form`,children:(0,L.jsx)(`select`,{className:`en-category-select`,value:g,onChange:re,children:x.map(e=>(0,L.jsx)(`option`,{value:e.name,children:e.name},e.id))})})]}),(0,L.jsxs)(`div`,{className:`en-card compact`,children:[(0,L.jsxs)(`h2`,{className:`en-check-title`,children:[`Pemeriksaan Publikasi`,!w&&C>0&&(0,L.jsx)(`span`,{className:`en-check-ok`,children:(0,L.jsx)($o,{})})]}),(0,L.jsxs)(`div`,{className:`en-metric-row`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`en-metric-label`,children:`Word Count`}),(0,L.jsxs)(`div`,{className:`en-metric-value${w?` red`:``}`,children:[C,` `,(0,L.jsxs)(`span`,{className:`en-metric-sub`,children:[`/ `,Yo]})]})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`en-metric-label`,children:`Read Time`}),(0,L.jsxs)(`div`,{className:`en-metric-value${w?` red`:``}`,children:[T,` `,(0,L.jsx)(`span`,{className:`en-metric-sub`,children:`min`})]})]})]}),(0,L.jsx)(`div`,{className:`en-progress`,children:(0,L.jsx)(`div`,{className:`en-progress-fill${w?` red`:``}`,style:{width:`${ee}%`}})}),w&&(0,L.jsxs)(`div`,{className:`en-warning`,children:[(0,L.jsx)(es,{}),`Article exceeds 2-minute reading limit.`]})]}),(0,L.jsxs)(`div`,{className:`en-card compact`,children:[(0,L.jsx)(`h2`,{className:`en-tips-title`,children:`Tips Menulis 💡`}),Ni.map(e=>(0,L.jsxs)(`div`,{className:`en-tip`,children:[(0,L.jsx)(`span`,{className:`en-tip-icon`,children:(0,L.jsx)($o,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`strong`,{children:[e.title,`:`]}),` `,e.tip]})]},e.id))]})]})]})]})]})}var ss={name:`User`,username:`@user`,avatar:``};function cs(){try{let e=JSON.parse(localStorage.getItem(`pahamUser`)||`{}`);return{name:e.nama_lengkap||e.username||ss.name,username:e.username?`@${e.username}`:ss.username,avatar:e.foto_profil||``}}catch{return ss}}var ls=[`/admin`,`/admin-dashboard`,`/manage-news`,`/pending`,`/edit-news`];function us(){return(0,L.jsx)(Dn,{children:(0,L.jsx)(ds,{})})}function ds(){let e=P(),t=e.pathname===`/notifications`||e.pathname===`/dashboard`||e.pathname===`/admin-dashboard`||e.pathname===`/my-articles`||e.pathname.startsWith(`/admin/`)||e.pathname.startsWith(`/edit-article`)||e.pathname.startsWith(`/edit-news`)||e.pathname===`/write-news`||e.pathname===`/write`||e.pathname===`/manage-news`||e.pathname===`/pending`||e.pathname===`/admin-activity`;return(0,L.jsxs)(L.Fragment,{children:[!t&&(0,L.jsx)(Jn,{}),(0,L.jsxs)(zt,{children:[(0,L.jsx)(F,{path:`/`,element:(0,L.jsx)(Tr,{})}),(0,L.jsx)(F,{path:`/news`,element:(0,L.jsx)(kr,{})}),(0,L.jsx)(F,{path:`/news/:id`,element:(0,L.jsx)(zr,{})}),(0,L.jsx)(F,{path:`/trending`,element:(0,L.jsx)(Hr,{})}),(0,L.jsx)(F,{path:`/signin`,element:(0,L.jsx)(yi,{})}),(0,L.jsx)(F,{path:`/register`,element:(0,L.jsx)(bi,{})}),(0,L.jsx)(F,{path:`/saved`,element:(0,L.jsx)(wi,{})}),(0,L.jsx)(F,{path:`/contact`,element:(0,L.jsx)(Ti,{})}),(0,L.jsx)(F,{path:`/about`,element:(0,L.jsx)(Ei,{})}),(0,L.jsx)(F,{path:`/privacy`,element:(0,L.jsx)(Di,{})}),(0,L.jsx)(F,{path:`/notifications`,element:(0,L.jsx)(Oi,{})}),(0,L.jsxs)(F,{element:(0,L.jsx)(fs,{}),children:[(0,L.jsx)(F,{path:`/dashboard`,element:(0,L.jsx)(va,{})}),(0,L.jsx)(F,{path:`/my-articles`,element:(0,L.jsx)(Ga,{})}),(0,L.jsx)(F,{path:`/edit-article/:id`,element:(0,L.jsx)(ms,{})}),(0,L.jsx)(F,{path:`/write`,element:(0,L.jsx)(no,{})}),(0,L.jsx)(F,{path:`/write-news`,element:(0,L.jsx)(no,{})}),(0,L.jsx)(F,{path:`/admin-dashboard`,element:(0,L.jsx)(ps,{})}),(0,L.jsx)(F,{path:`/admin/manage-news`,element:(0,L.jsx)(Ko,{})}),(0,L.jsx)(F,{path:`/manage-news`,element:(0,L.jsx)(Ko,{})}),(0,L.jsx)(F,{path:`/admin/edit-news/:id`,element:(0,L.jsx)(os,{})}),(0,L.jsx)(F,{path:`/edit-news/:id`,element:(0,L.jsx)(os,{})}),(0,L.jsx)(F,{path:`/admin/pending`,element:(0,L.jsx)(Jo,{})}),(0,L.jsx)(F,{path:`/pending`,element:(0,L.jsx)(Jo,{})}),(0,L.jsx)(F,{path:`/admin/write`,element:(0,L.jsx)(no,{})}),(0,L.jsx)(F,{path:`/admin/write-news`,element:(0,L.jsx)(no,{})})]})]}),!t&&(0,L.jsx)(Yn,{})]})}function fs(){let e=ct(),t=P();if(!(localStorage.getItem(`access`)||localStorage.getItem(`accessToken`)||localStorage.getItem(`pahamAccessToken`)))return(0,L.jsx)(It,{to:`/signin`,replace:!0});let n=String(t.state?.role||``).toLowerCase(),r=ls.some(e=>t.pathname===e||t.pathname.startsWith(`${e}/`)),i=n===`admin`||r?`admin`:`user`;return(0,L.jsxs)(`div`,{className:`dashboard-app-container`,style:{minHeight:`100vh`,background:`#f7f7f8`},children:[(0,L.jsx)(ji,{user:cs()}),(0,L.jsx)(Vi,{role:i,onLogout:()=>{localStorage.removeItem(`access`),localStorage.removeItem(`refresh`),localStorage.removeItem(`pahamUser`),e(`/signin`)}}),(0,L.jsx)(Lt,{})]})}function ps(){let e=ct();return(0,L.jsx)(U,{user:cs(),onWriteNews:()=>e(`/admin/write`),onPendingApproval:()=>e(`/admin/pending`),onManageNews:()=>e(`/admin/manage-news`),onLogout:()=>e(`/signin`)})}function ms(){let e=ct(),t=P(),n=ft(),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!t.state?.article),s=t.state?.article||r;if((0,_.useEffect)(()=>{if(t.state?.article)return;let e=!0;return $i({author:`me`}).then(t=>{e&&i(t.find(e=>String(e.id)===String(n.id))||null)}).catch(()=>{e&&i(null)}).finally(()=>{e&&o(!1)}),()=>{e=!1}},[t.state?.article,n.id]),a)return null;if(!s)return(0,L.jsx)(It,{to:`/my-articles`,replace:!0});let c=String(s?.status||``).toLowerCase();return t.state?.viewRejected===!0&&t.state?.forceEdit!==!0?(0,L.jsx)(Ma,{article:s,onEdit:t=>{e(`/edit-article/${t.id}`,{replace:!0,state:{article:t,viewRejected:!1,forceEdit:!0}})},onDelete:t=>{e(`/my-articles`,{state:{toastType:`deleted`,deletedArticleId:t?.id}})},onBack:()=>e(`/my-articles`)}):(0,L.jsx)(ja,{article:s,onBack:()=>{if(c===`rejected`){e(`/edit-article/${s.id}`,{replace:!0,state:{article:s,viewRejected:!0,forceEdit:!1}});return}e(`/my-articles`)},onSave:t=>e(`/my-articles`,{state:{toastType:`updated`,updatedArticle:t}}),onSubmit:t=>e(`/my-articles`,{state:{toastType:`submitted`,updatedArticle:{...t,status:`pending`,rejectionReason:null}}}),showToast:()=>{}})}(0,v.createRoot)(document.getElementById(`root`)).render((0,L.jsx)(_.StrictMode,{children:(0,L.jsx)(us,{})}));