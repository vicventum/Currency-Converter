parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"k2bb":[function(require,module,exports) {

},{}],"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"agGE":[function(require,module,exports) {
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(a){return void o(a)}c.done?t(v):Promise.resolve(v).then(r,e)}function t(t){return function(){var o=this,r=arguments;return new Promise(function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)})}}module.exports=t;
},{}],"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"IxO8":[function(require,module,exports) {
function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=e;
},{}],"dtFk":[function(require,module,exports) {
module.exports={USD:{name:"US Dollar",symbol_native:"$"},VEF:{name:"Venezuelan Bolívar",symbol_native:"Bs.F."},CAD:{name:"Canadian Dollar",symbol_native:"$"},EUR:{name:"Euro",symbol_native:"€"},AED:{name:"United Arab Emirates Dirham",symbol_native:"د.إ.‏"},AFN:{name:"Afghan Afghani",symbol_native:"؋"},ALL:{name:"Albanian Lek",symbol_native:"Lek"},AMD:{name:"Armenian Dram",symbol_native:"դր."},ARS:{name:"Argentine Peso",symbol_native:"$"},AUD:{name:"Australian Dollar",symbol_native:"$"},AZN:{name:"Azerbaijani Manat",symbol_native:"ман."},BAM:{name:"Bosnia-Herzegovina Convertible Mark",symbol_native:"KM"},BDT:{name:"Bangladeshi Taka",symbol_native:"৳"},BGN:{name:"Bulgarian Lev",symbol_native:"лв."},BHD:{name:"Bahraini Dinar",symbol_native:"د.ب.‏"},BIF:{name:"Burundian Franc",symbol_native:"FBu"},BND:{name:"Brunei Dollar",symbol_native:"$"},BOB:{name:"Bolivian Boliviano",symbol_native:"Bs"},BRL:{name:"Brazilian Real",symbol_native:"R$"},BWP:{name:"Botswanan Pula",symbol_native:"P"},BYN:{name:"Belarusian Ruble",symbol_native:"руб."},BZD:{name:"Belize Dollar",symbol_native:"$"},CDF:{name:"Congolese Franc",symbol_native:"FrCD"},CHF:{name:"Swiss Franc",symbol_native:"CHF"},CLP:{name:"Chilean Peso",symbol_native:"$"},CNY:{name:"Chinese Yuan",symbol_native:"CN¥"},COP:{name:"Colombian Peso",symbol_native:"$"},CRC:{name:"Costa Rican Colón",symbol_native:"₡"},CVE:{name:"Cape Verdean Escudo",symbol_native:"CV$"},CZK:{name:"Czech Republic Koruna",symbol_native:"Kč"},DJF:{name:"Djiboutian Franc",symbol_native:"Fdj"},DKK:{name:"Danish Krone",symbol_native:"kr"},DOP:{name:"Dominican Peso",symbol_native:"RD$"},DZD:{name:"Algerian Dinar",symbol_native:"د.ج.‏"},EEK:{name:"Estonian Kroon",symbol_native:"kr"},EGP:{name:"Egyptian Pound",symbol_native:"ج.م.‏"},ERN:{name:"Eritrean Nakfa",symbol_native:"Nfk"},ETB:{name:"Ethiopian Birr",symbol_native:"Br"},GBP:{name:"British Pound Sterling",symbol_native:"£"},GEL:{name:"Georgian Lari",symbol_native:"GEL"},GHS:{name:"Ghanaian Cedi",symbol_native:"GH₵"},GNF:{name:"Guinean Franc",symbol_native:"FG"},GTQ:{name:"Guatemalan Quetzal",symbol_native:"Q"},HKD:{name:"Hong Kong Dollar",symbol_native:"$"},HNL:{name:"Honduran Lempira",symbol_native:"L"},HRK:{name:"Croatian Kuna",symbol_native:"kn"},HUF:{name:"Hungarian Forint",symbol_native:"Ft"},IDR:{name:"Indonesian Rupiah",symbol_native:"Rp"},ILS:{name:"Israeli New Sheqel",symbol_native:"₪"},INR:{name:"Indian Rupee",symbol_native:"টকা"},IQD:{name:"Iraqi Dinar",symbol_native:"د.ع.‏"},IRR:{name:"Iranian Rial",symbol_native:"﷼"},ISK:{name:"Icelandic Króna",symbol_native:"kr"},JMD:{name:"Jamaican Dollar",symbol_native:"$"},JOD:{name:"Jordanian Dinar",symbol_native:"د.أ.‏"},JPY:{name:"Japanese Yen",symbol_native:"￥"},KES:{name:"Kenyan Shilling",symbol_native:"Ksh"},KHR:{name:"Cambodian Riel",symbol_native:"៛"},KMF:{name:"Comorian Franc",symbol_native:"FC"},KRW:{name:"South Korean Won",symbol_native:"₩"},KWD:{name:"Kuwaiti Dinar",symbol_native:"د.ك.‏"},KZT:{name:"Kazakhstani Tenge",symbol_native:"тңг."},LBP:{name:"Lebanese Pound",symbol_native:"ل.ل.‏"},LKR:{name:"Sri Lankan Rupee",symbol_native:"SL Re"},LTL:{name:"Lithuanian Litas",symbol_native:"Lt"},LVL:{name:"Latvian Lats",symbol_native:"Ls"},LYD:{name:"Libyan Dinar",symbol_native:"د.ل.‏"},MAD:{name:"Moroccan Dirham",symbol_native:"د.م.‏"},MDL:{name:"Moldovan Leu",symbol_native:"MDL"},MGA:{name:"Malagasy Ariary",symbol_native:"MGA"},MKD:{name:"Macedonian Denar",symbol_native:"MKD"},MMK:{name:"Myanma Kyat",symbol_native:"K"},MOP:{name:"Macanese Pataca",symbol_native:"MOP$"},MUR:{name:"Mauritian Rupee",symbol_native:"MURs"},MXN:{name:"Mexican Peso",symbol_native:"$"},MYR:{name:"Malaysian Ringgit",symbol_native:"RM"},MZN:{name:"Mozambican Metical",symbol_native:"MTn"},NAD:{name:"Namibian Dollar",symbol_native:"N$"},NGN:{name:"Nigerian Naira",symbol_native:"₦"},NIO:{name:"Nicaraguan Córdoba",symbol_native:"C$"},NOK:{name:"Norwegian Krone",symbol_native:"kr"},NPR:{name:"Nepalese Rupee",symbol_native:"नेरू"},NZD:{name:"New Zealand Dollar",symbol_native:"$"},OMR:{name:"Omani Rial",symbol_native:"ر.ع.‏"},PAB:{name:"Panamanian Balboa",symbol_native:"B/."},PEN:{name:"Peruvian Nuevo Sol",symbol_native:"S/."},PHP:{name:"Philippine Peso",symbol_native:"₱"},PKR:{name:"Pakistani Rupee",symbol_native:"₨"},PLN:{name:"Polish Zloty",symbol_native:"zł"},PYG:{name:"Paraguayan Guarani",symbol_native:"₲"},QAR:{name:"Qatari Rial",symbol_native:"ر.ق.‏"},RON:{name:"Romanian Leu",symbol_native:"RON"},RSD:{name:"Serbian Dinar",symbol_native:"дин."},RUB:{name:"Russian Ruble",symbol_native:"₽."},RWF:{name:"Rwandan Franc",symbol_native:"FR"},SAR:{name:"Saudi Riyal",symbol_native:"ر.س.‏"},SDG:{name:"Sudanese Pound",symbol_native:"SDG"},SEK:{name:"Swedish Krona",symbol_native:"kr"},SGD:{name:"Singapore Dollar",symbol_native:"$"},SOS:{name:"Somali Shilling",symbol_native:"Ssh"},SYP:{name:"Syrian Pound",symbol_native:"ل.س.‏"},THB:{name:"Thai Baht",symbol_native:"฿"},TND:{name:"Tunisian Dinar",symbol_native:"د.ت.‏"},TOP:{name:"Tongan Paʻanga",symbol_native:"T$"},TRY:{name:"Turkish Lira",symbol_native:"TL"},TTD:{name:"Trinidad and Tobago Dollar",symbol_native:"$"},TWD:{name:"New Taiwan Dollar",symbol_native:"NT$"},TZS:{name:"Tanzanian Shilling",symbol_native:"TSh"},UAH:{name:"Ukrainian Hryvnia",symbol_native:"₴"},UGX:{name:"Ugandan Shilling",symbol_native:"USh"},UYU:{name:"Uruguayan Peso",symbol_native:"$"},UZS:{name:"Uzbekistan Som",symbol_native:"UZS"},VND:{name:"Vietnamese Dong",symbol_native:"₫"},XAF:{name:"CFA Franc BEAC",symbol_native:"FCFA"},XOF:{name:"CFA Franc BCEAO",symbol_native:"CFA"},YER:{name:"Yemeni Rial",symbol_native:"ر.ي.‏"},ZAR:{name:"South African Rand",symbol_native:"R"},ZMK:{name:"Zambian Kwacha",symbol_native:"ZK"},ZWL:{name:"Zimbabwean Dollar",symbol_native:"ZWL$"}};
},{}],"hgtU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.API=void 0;var e=s(require("@babel/runtime/regenerator")),t=s(require("@babel/runtime/helpers/asyncToGenerator")),r=s(require("@babel/runtime/helpers/classCallCheck")),n=s(require("@babel/runtime/helpers/createClass")),a=s(require("@babel/runtime/helpers/defineProperty")),u=s(require("./db/db.min.json"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(){function s(){(0,r.default)(this,s),(0,a.default)(this,"DB_CURRENCY","https://gist.githubusercontent.com/vicventum/af3d829794d25d3f29741aaa21c0c147/raw/e436df97aa0990df7b50772780f5c12e36ac1654/Common-Currency.min.json"),(0,a.default)(this,"API_KEY","f901ivabhvt4pMh4W2wStKhVEGrkfOz2tR6E7wGHgalcU"),(0,a.default)(this,"currencyList",{}),(0,a.default)(this,"changeValue",void 0),(0,a.default)(this,"value1xIn",void 0),(0,a.default)(this,"value1xOut",void 0)}return(0,n.default)(s,[{key:"getCurrencyCodes",value:function(){var r=(0,t.default)(e.default.mark(function t(){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default;case 3:this.currencyList=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},t,this,[[0,6]])}));return function(){return r.apply(this,arguments)}}()},{key:"getCurrencyValue",value:function(){var r=(0,t.default)(e.default.mark(function t(r,n){var a,u;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fcsapi.com/api-v2/forex/converter?pair1=".concat(r,"&pair2=").concat(n,"&amount=1&access_key=").concat(this.API_KEY));case 3:return a=e.sent,e.next=6,a.json();case 6:u=e.sent,console.log(u),this.changeValue=u.response.total,this.value1xIn=u.response["price_1x_".concat(r)],this.value1xOut=u.response["price_1x_".concat(n)],console.log(this.changeValue,this.value1xIn,this.value1xOut),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}},t,this,[[0,14]])}));return function(e,t){return r.apply(this,arguments)}}()},{key:"getChangeValue",get:function(){return this.changeValue}},{key:"getCurrencyList",get:function(){return this.currencyList}},{key:"setData",set:function(e){this.data=Object.assign({},e)}}]),s}();exports.API=c;
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/defineProperty":"IxO8","./db/db.min.json":"dtFk"}],"UxDa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UI=void 0;var e=u(require("@babel/runtime/regenerator")),t=u(require("@babel/runtime/helpers/asyncToGenerator")),n=u(require("@babel/runtime/helpers/classCallCheck")),r=u(require("@babel/runtime/helpers/createClass")),c=u(require("@babel/runtime/helpers/defineProperty"));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(){function u(){(0,n.default)(this,u),(0,c.default)(this,"currencyIn",document.getElementById("currencyIn")),(0,c.default)(this,"currencyOut",document.getElementById("currencyOut")),(0,c.default)(this,"input",document.getElementById("input")),(0,c.default)(this,"screen",document.getElementById("screen")),(0,c.default)(this,"rootStylesGet",window.getComputedStyle(document.documentElement)),(0,c.default)(this,"prevOut",void 0),(0,c.default)(this,"prevIn",void 0),(0,c.default)(this,"currencyOutSelected",void 0),(0,c.default)(this,"currencyInSelected",void 0),(0,c.default)(this,"symbolOut",void 0)}return(0,r.default)(u,[{key:"validate",value:function(e){e.target.value.match(/^[\d\.\s]+$/gi)?input.classList.remove("input--invalid"):input.classList.add("input--invalid")}},{key:"cleanInput",value:function(e){""===e.target.value&&input.classList.remove("input--invalid")}},{key:"fillList",value:function(e){var t=document.createDocumentFragment(),n=document.createDocumentFragment(),r=0;for(var c in e){var u=document.createElement("option"),s=e[c].name;u.textContent=s,u.setAttribute("data-code",c),u.setAttribute("data-symbol",e[c].symbol_native),u.id="in-".concat(r),t.appendChild(u.cloneNode(!0)),u.id="out-".concat(r),n.appendChild(u.cloneNode(!0)),r++}console.log(t),console.log(n),this.currencyIn.appendChild(t.cloneNode(!0)),this.currencyOut.appendChild(n.cloneNode(!0)),this.currencyIn.options[this.currencyIn.selectedIndex].setAttribute("selected",!0),this.currencyOut.options[this.currencyOut.selectedIndex+1].setAttribute("selected",!0),this.prevIn=currencyIn.options[currencyIn.selectedIndex],this.prevOut=currencyOut.options[currencyOut.selectedIndex],this.saveSelectedIndex()}},{key:"saveSelectedIndex",value:function(){this.currencyInSelected=this.currencyIn.options[this.currencyIn.selectedIndex].value,this.currencyOutSelected=this.currencyOut.options[this.currencyOut.selectedIndex].value}},{key:"changeOption",value:function(){var n=(0,t.default)(e.default.mark(function t(n){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.clearList(n),"in"===n?(currencyIn.options[currencyIn.selectedIndex].setAttribute("selected",!0),this.prevIn=currencyIn.options[currencyIn.selectedIndex]):(currencyOut.options[currencyOut.selectedIndex].setAttribute("selected",!0),this.prevOut=currencyOut.options[currencyOut.selectedIndex]);case 2:case"end":return e.stop()}},t,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"changeCurrency",value:function(){var e=this.currencyIn.selectedIndex,t=this.currencyOut.selectedIndex;console.log(e,t),this.clearLists(),this.currencyIn.selectedIndex=t,this.currencyOut.selectedIndex=e,currencyIn.options[currencyIn.selectedIndex].setAttribute("selected",!0),currencyOut.options[currencyOut.selectedIndex].setAttribute("selected",!0),this.prevIn=currencyIn.options[currencyIn.selectedIndex],this.prevOut=currencyOut.options[currencyOut.selectedIndex]}},{key:"clearLists",value:function(){this.clearList("in"),this.clearList("out")}},{key:"clearList",value:function(e){"in"===e?this.prevIn.removeAttribute("selected"):this.prevOut.removeAttribute("selected")}},{key:"render",value:function(e){if(e){var t=e.toString(),n=t.split(".")[0],r=t.split(".")[1];console.log(n);var c=Math.ceil(n.length/3);console.log(">>>"+c);for(var u=[],s=-3,i=1;i<=c;i++){var o=s+3===0?void 0:s+3;u.unshift(n.slice(s,o)),s-=3,console.log("> "+s)}var l=u.join(" ");console.log(l),t.length>6?this.screen.style.fontSize="3rem":this.screen.style.fontSize=this.rootStylesGet.getPropertyValue("--f-big"),console.log(this.rootStylesGet.getPropertyValue("--f-big")),this.screen.textContent="".concat(this.symbolOut," ").concat(l,".").concat(r)}else this.screen.style.fontSize="3rem",this.screen.textContent="No Internet :("}},{key:"resetValues",value:function(){this.screen.textContent=0,this.input.value=""}},{key:"getCurrencySelected",get:function(){return this.symbolOut=currencyOut.options[currencyOut.selectedIndex].dataset.symbol,{inSelected:currencyIn.options[currencyIn.selectedIndex].dataset.code,outSelected:currencyOut.options[currencyOut.selectedIndex].dataset.code}}},{key:"getValueToChange",get:function(){return input.valueAsNumber}}]),u}();exports.UI=s;
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/defineProperty":"IxO8"}],"dVUU":[function(require,module,exports) {
"use strict";var e=u(require("@babel/runtime/regenerator")),t=u(require("@babel/runtime/helpers/asyncToGenerator")),n=require("./API"),r=require("./UI");function u(e){return e&&e.__esModule?e:{default:e}}var a=document.getElementById("input"),c=document.getElementById("currencyIn"),i=document.getElementById("currencyOut"),d=document.getElementById("change"),l=document.querySelectorAll(".btn--suggestion"),s=document.getElementById("reset"),o=document.getElementById("submit"),f=new n.API,p=new r.UI;function g(e){p.validate(e)}function y(e){p.cleanInput(e)}function h(){return v.apply(this,arguments)}function v(){return(v=(0,t.default)(e.default.mark(function t(){var n;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getCurrencyCodes();case 2:n=f.currencyList,p.fillList(n),I();case 5:case"end":return e.stop()}},t)}))).apply(this,arguments)}function m(e){return E.apply(this,arguments)}function E(){return(E=(0,t.default)(e.default.mark(function t(n){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),p.changeCurrency();case 2:case"end":return e.stop()}},t)}))).apply(this,arguments)}function C(e){"currencyIn"===e.target.id?p.changeOption("in"):p.changeOption("out")}function I(){return w.apply(this,arguments)}function w(){return(w=(0,t.default)(e.default.mark(function t(){var n,r,u;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.getCurrencySelected,r=n.inSelected,u=n.outSelected,e.next=3,f.getCurrencyValue(r,u);case 3:p.render(f.getChangeValue);case 4:case"end":return e.stop()}},t)}))).apply(this,arguments)}function L(e){return k.apply(this,arguments)}function k(){return(k=(0,t.default)(e.default.mark(function t(n){var r,u,a,c;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=p.getCurrencySelected,u=r.inSelected,a=r.outSelected,e.next=4,f.getCurrencyValue(u,a);case 4:c=p.getValueToChange*f.getChangeValue,p.render(c);case 6:case"end":return e.stop()}},t)}))).apply(this,arguments)}function x(e){return S.apply(this,arguments)}function S(){return(S=(0,t.default)(e.default.mark(function t(n){var r,u,c,i,d;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=parseInt(n.target.textContent),a.value=r,u=p.getCurrencySelected,c=u.inSelected,i=u.outSelected,e.next=6,f.getCurrencyValue(c,i);case 6:d=r*f.getChangeValue,p.render(d);case 8:case"end":return e.stop()}},t)}))).apply(this,arguments)}function V(e){e.preventDefault(),p.resetValues()}addEventListener("DOMContentLoaded",h),a.addEventListener("keyup",g),a.addEventListener("blur",y),c.addEventListener("change",C),i.addEventListener("change",C),d.addEventListener("click",m),l.forEach(function(e){return e.addEventListener("click",x)}),s.addEventListener("click",V),o.addEventListener("click",L);
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","./API":"hgtU","./UI":"UxDa"}],"Focm":[function(require,module,exports) {
"use strict";require("./app/scss/main.scss"),require("./app/js/app");
},{"./app/scss/main.scss":"k2bb","./app/js/app":"dVUU"}]},{},["Focm"], null)
//# sourceMappingURL=/src.7d4223a4.js.map