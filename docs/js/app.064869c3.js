(function(e){function n(n){for(var r,o,c=n[0],i=n[1],l=n[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==u[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-03202232":"32e40bea","chunk-2e082a41":"6a56ece5","chunk-58898a7a":"8a19ab8e","chunk-596540ec":"327b7af0","chunk-820c1b48":"d508ee57"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-03202232":1,"chunk-2e082a41":1,"chunk-58898a7a":1,"chunk-596540ec":1,"chunk-820c1b48":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-03202232":"ea9e916b","chunk-2e082a41":"8728686b","chunk-58898a7a":"0d5ba236","chunk-596540ec":"f296e96f","chunk-820c1b48":"46e0b5b2"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===u))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],f=l.getAttribute("data-href");if(f===r||f===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var d=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}u[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var s=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1315:function(e,n,t){"use strict";var r=t("74d6"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"SYNC_CURRENT_TIME",(function(){return w})),t.d(r,"HIDE_SELF",(function(){return E}));t("96cf");var o=t("3b8d"),u=(t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),a=(t("ac6a"),t("d225")),c=function e(n){var t=this;Object(a["a"])(this,e),["info","warn"].forEach((function(e){t[e]=function(){var t;return n?(t=console)[e].apply(t,arguments):""}})),this.error=console.error},i={install:function(e,n){var t=n.debug,r=new c(t);e.$log=r,e.prototype.$log=r}},l=t("5c96"),f=t.n(l);t("0fae"),t("c5f6");function d(){var e=192;function n(){var n=document.documentElement.clientWidth/1920;document.documentElement.style.fontSize="".concat(e*n,"px"),Number(document.documentElement.style.fontSize.slice(0,-2))<=130&&(document.documentElement.style.fontSize="130px")}n(),window.addEventListener("resize",n)}var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},p=[],h=(t("1315"),t("2877")),m={},v=Object(h["a"])(m,s,p,!1,null,null,null),b=v.exports,g=t("8c4f");u["default"].use(g["a"]);var y=new g["a"]({routes:[{path:"/",redirect:"/3d-rotate"},{path:"/2d-round",name:"2d-round",component:function(){return t.e("chunk-596540ec").then(t.bind(null,"38fa"))}},{path:"/3d-rotate",name:"3D-rotate",component:function(){return t.e("chunk-2e082a41").then(t.bind(null,"1b70"))}},{path:"/3d-wordCloud",name:"3D-wordCloud",component:function(){return t.e("chunk-03202232").then(t.bind(null,"3d19"))}},{path:"/grayscale",name:"grayscale",component:function(){return t.e("chunk-58898a7a").then(t.bind(null,"a720"))}},{path:"/leafletMap",name:"leafletMap",component:function(){return t.e("chunk-820c1b48").then(t.bind(null,"596a"))}}]}),k=t("2f62"),w=function(e){},E=function(e,n){e.hideSelf[n]=!0},S=t("63e0");u["default"].use(k["a"]);var _=new k["a"].Store({state:{hideSelf:[]},mutations:r,actions:S,strict:!1});u["default"].use(i,{debug:!1}),u["default"].use(f.a),u["default"].config.productionTip=!1,u["default"].$log.info("vue-eslint launch..."),d(),new u["default"]({router:y,store:_,render:function(e){return e(b)},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$log.info("vue-eslint ready..."),setInterval((function(){n.$store.commit("SYNC_CURRENT_TIME")}),1e3);case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}).$mount("#app")},"63e0":function(e,n){},"74d6":function(e,n,t){}});