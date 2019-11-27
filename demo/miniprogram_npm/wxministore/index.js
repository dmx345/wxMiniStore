module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; var desp = Object.getOwnPropertyDescriptor(m.exports, k); if(desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1574841217998, function(require, module, exports) {
var TYPE_ARRAY="[object Array]",TYPE_OBJECT="[object Object]",_typeOf=function(e){return Object.prototype.toString.call(e)},_deepClone=function(e){return JSON.parse(JSON.stringify(e))},diff=function(e,t){var n=0<arguments.length&&void 0!==e?e:{},o=1<arguments.length&&void 0!==t?t:{},r={};return updateDiff(n,o,"",r),nullDiff(n,o,"",r),r},updateDiff=function a(e,t,n,o){var i=0<arguments.length&&void 0!==e?e:{},s=1<arguments.length&&void 0!==t?t:{},f=2<arguments.length&&void 0!==n?n:"",c=3<arguments.length&&void 0!==o?o:{};return Object.entries(i).forEach(function(e){var t=e[0],n=e[1],o=""===f?t:f+"."+t;if(_typeOf(i)===TYPE_ARRAY&&(o=""===f?t:f+"["+t+"]"),s.hasOwnProperty(t))_typeOf(s[t])===TYPE_OBJECT&&_typeOf(i[t])===TYPE_OBJECT||_typeOf(s[t])===TYPE_ARRAY&&_typeOf(i[t])===TYPE_ARRAY?a(i[t],s[t],o,c):s[t]!==i[t]&&(c[o]=n);else if(_typeOf(i)===TYPE_ARRAY){var r=_deepClone(i);r[t]=n,Object.keys(c).forEach(function(e){(~e.indexOf(f+"[")||~e.indexOf(f+"."))&&delete c[e]}),c[f]=r}else c[o]=n}),c},nullDiff=function r(e,t,n,o){var a=0<arguments.length&&void 0!==e?e:{},i=1<arguments.length&&void 0!==t?t:{},s=2<arguments.length&&void 0!==n?n:"",f=3<arguments.length&&void 0!==o?o:{};return Object.entries(i).forEach(function(e){var t=e[0],n=""===s?t:s+"."+t;if(_typeOf(a)===TYPE_ARRAY&&(n=""===s?t:s+"["+t+"]"),a.hasOwnProperty(t))(_typeOf(i[t])===TYPE_OBJECT&&_typeOf(a[t])===TYPE_OBJECT||_typeOf(i[t])===TYPE_ARRAY&&_typeOf(a[t])===TYPE_ARRAY)&&r(a[t],i[t],n,f);else if(_typeOf(a)===TYPE_ARRAY){var o=_deepClone(a);o.splice(t,1),Object.keys(f).forEach(function(e){(~e.indexOf(s+"[")||~e.indexOf(s+"."))&&delete f[e]}),f[s]=o}else f[n]=null}),f},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},Version="1.2.8",Store=function(){function c(e){classCallCheck(this,c),this.version=Version,this.$state={},this.$r=[];var t=e.openPart,n=void 0!==t&&t,l=e.behavior,o=e.methods,u=void 0===o?{}:o,r=e.pageLisener,i=void 0===r?{}:r,a=e.nonWritable,s=void 0!==a&&a;this.$state={},_typeOf(e.state)===TYPE_OBJECT&&(this.$state=Object.assign({},_deepClone(e.state))),this.$r=[];function h(e,t){var n=1<arguments.length&&void 0!==t?t:{};e.$store={};var o=n.useProp;n.hasOwnProperty("useProp")&&(o&&"string"==typeof o||_typeOf(o)===TYPE_ARRAY?e.$store.useProp=[].concat(o):e.$store.useProp=[]),e.$store.useStore=v(n),v(n)&&(d.$r.push(e),e.$store.useProp?e.setData({$state:_filterKey(d.$state,e.$store.useProp,function(e,t){return e===t})}):e.setData({$state:d.$state}))}function p(t){var e=d.$r.findIndex(function(e){return e===t});-1<e&&d.$r.splice(e,1)}this.$openPart=n;var d=this,y=["data","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap"],v=function(e){return!0===n&&!0===(0<arguments.length&&void 0!==e?e:{}).useStore||!n},f=Page,O=Component;if(App.Page=function(){for(var e=arguments.length,t=Array(1<e?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};v(o)&&(o.data=Object.assign(o.data||{},{$state:d.$state})),Object.keys(u).forEach(function(t){"function"!=typeof u[t]||y.some(function(e){return e===t})||(o[t]=u[t])});var r=o.onLoad;o.onLoad=function(){h(this,o),r&&r.apply(this,arguments)};var a=o.onUnload;o.onUnload=function(){p(this),a&&a.apply(this,arguments)},Object.keys(i).forEach(function(t){if("function"==typeof i[t]&&y.some(function(e){return e===t})){var e=o[t];o[t]=function(){i[t].apply(this,arguments),e&&e.apply(this,arguments)}}}),f.apply(void 0,[o].concat(t))},!s)try{Page=App.Page}catch(e){}if(App.Component=function(){for(var e=arguments.length,t=Array(1<e?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};v(o)&&(o.data=Object.assign(o.data||{},{$state:d.$state})),Object.keys(u).forEach(function(t){"function"!=typeof u[t]||y.some(function(e){return e===t})||(o.methods||(o.methods={}),o.methods[t]=u[t])}),l&&(o.behaviors=[l].concat(toConsumableArray(o.behaviors||[])));function r(){h(this,o),f&&f.apply(this,arguments)}function a(){p(this),c&&c.apply(this,arguments)}var i=o.lifetimes,s=void 0===i?{}:i,f=s.attached||o.attached,c=s.detached||o.detached;_typeOf(o.lifetimes)===TYPE_OBJECT?(o.lifetimes.attached=r,o.lifetimes.detached=a):(o.attached=r,o.detached=a),O.apply(void 0,[o].concat(t))},!s)try{Component=App.Component}catch(e){}}return createClass(c,[{key:"setState",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:function(){};if(_typeOf(e)!==TYPE_OBJECT)throw new Error("setState的第一个参数须为object!");console.time&&console.time("setState");var o=this.$state,r=setData(e,o);if(this.$state=r,0<this.$r.length){var a=diff(r,o);console.log("diff后实际设置的值：",_deepClone(a));var i=Object.keys(a);if(0<i.length){var s={};i.forEach(function(e){s["$state."+e]=a[e]});var f=this.$r.map(function(t){if(t.$store.hasOwnProperty("useProp")){var n=_filterKey(s,t.$store.useProp,function(e,t){return e==="$state."+t||!!e.match(new RegExp("^[$]state."+t+"[.|[]","g"))});return 0<Object.keys(n).length?new Promise(function(e){t.setData(n,e)}):Promise.resolve()}return new Promise(function(e){t.setData(s,e)})});Promise.all(f).then(n)}else n()}else n();console.timeEnd&&console.timeEnd("setState")}},{key:"getState",value:function(){return _deepClone(this.$state)}}]),c}(),_filterKey=function(t,e,n){var o=1<arguments.length&&void 0!==e?e:[],r=n,a={};return Object.keys(t).filter(function(t){return o.some(function(e){return r(t,e)})}).forEach(function(e){a[e]=t[e]}),a},setData=function(e,t){var n=_deepClone(t),o=_deepClone(e);return Object.keys(o).forEach(function(e){dataHandler(e,o[e],n)}),n},dataHandler=function(e,t,n){for(var o=pathHandler(e),r=n,a=0;a<o.length-1;a++)keyToData(o[a],o[a+1],r),r=r[o[a]];r[o[o.length-1]]=t},pathHandler=function(e){for(var t="",n=[],o=0,r=e.length;o<r;o++){if("["===e[0])throw new Error("key值不能以[]开头");e[o].match(/\.|\[/g)&&(cleanAndPush(t,n),t=""),t+=e[o]}return cleanAndPush(t,n),n},cleanAndPush=function(e,t){var n=cleanKey(e);""!==n&&t.push(n)},keyToData=function(e,t,n){if(""!==e){var o=_typeOf(n[e]);"number"==typeof t&&o!==TYPE_ARRAY?n[e]=[]:"string"==typeof t&&o!==TYPE_OBJECT&&(n[e]={})}},cleanKey=function(e){if(e.match(/\[\S+\]/g)){var t=e.replace(/\[|\]/g,"");if(Number.isNaN(parseInt(t)))throw new Error("[]中必须为数字");return+t}return e.replace(/\[|\.|\]| /g,"")};module.exports=Store;
//# sourceMappingURL=store.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1574841217998);
})()
//# sourceMappingURL=index.js.map