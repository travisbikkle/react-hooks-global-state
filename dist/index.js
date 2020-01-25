var t=require("react");function n(){return(n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}var r=function(t,n){if(!t.includes(n))throw new Error("'"+n+"' not found. It must be provided in initialState as a property key.")},e="production"!==process.env.NODE_ENV?Symbol("UPDATE_STATE"):Symbol(),o=function(o,u){var i=Object.keys(u),c=u,a=null,f={};i.forEach(function(t){f[t]=new Set});var s=function(t,n){return n.type===e?n.r?n.r(t):n.e:o(t,n)},l=function(t,o){"production"!==process.env.NODE_ENV&&r(i,t);var u=function(r){var e,u;return n({},r,((e={})[t]="function"==typeof(u=o)?u(r[t]):u,e))};if(a){var s;a(((s={type:e}).r=u,s))}else{var l=(c=u(c))[t];f[t].forEach(function(t){return t(l)})}},v=function(t,n){i.forEach(function(r){var e=n[r];t[r]!==e&&f[r].forEach(function(t){return t(e)})})};return{useGlobalStateProvider:function(){var n=t.useReducer(s,c),r=n[0],o=n[1];t.useEffect(function(){var t;if(a)throw new Error("Only one global state provider is allowed");return a=o,o(((t={type:e}).e=c,t)),function(){a=null}},[]);var u=t.useRef(r);v(u.current,r),u.current=r,t.useEffect(function(){c=r},[r])},useGlobalState:function(n){"production"!==process.env.NODE_ENV&&r(i,n);var e=t.useState(c[n]),o=e[0],u=e[1];return t.useEffect(function(){return f[n].add(u),u(c[n]),function(){f[n].delete(u)}},[n]),[o,t.useCallback(function(t){return l(n,t)},[n])]},getGlobalState:function(t){return"production"!==process.env.NODE_ENV&&r(i,t),c[t]},setGlobalState:l,getState:function(){return c},setState:function(t){var n;a?a(((n={type:e}).e=t,n)):v(c,c=t)},dispatch:function(t){if(a)a(t);else{var n=c;c=o(c,t),v(n,c)}return t}}};exports.createGlobalState=function(t){return o(function(t,n){return t},t)},exports.createStore=function t(n,r,e){return void 0===r&&(r=n(void 0,{type:void 0})),e?e(t)(n,r):o(n,r)},exports.reduxDevToolsExt=function(){return window.__REDUX_DEVTOOLS_EXTENSION__?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.reduce(function(t,n){return function(){return t(n.apply(void 0,arguments))}})}(function(e){return function(o,u,i){if(t=o,r=u,i)return i(e)(o,u);var c=e(o,u);return n({},c,{useGlobalState:function(t){return[c.useGlobalState(t)[0],function(){throw new Error("Update is not allowed when using DevTools")}]}})}},window.__REDUX_DEVTOOLS_EXTENSION__(),function(e){return function(o,u,i){if(i)return i(e)(o,u);var c=e(t,r),a=n({},o(u,{type:"@@redux/INIT"}),{},r),f=[];return n({},c,{getState:function(){return a},dispatch:function(t){return a=o(a,t),c.setState(a.computedStates[a.currentStateIndex].state),f.forEach(function(t){return t()}),t},subscribe:function(t){return f.push(t),function(){var n=f.indexOf(t);f.splice(n,1)}}})}}):function(t){return t};var t,r};
//# sourceMappingURL=index.js.map
