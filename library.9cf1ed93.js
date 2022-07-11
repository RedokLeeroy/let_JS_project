!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("hGNcL",(function(e,n){t(e.exports,"getApiList",(function(){return p})),t(e.exports,"handleSuccess",(function(){return h})),t(e.exports,"handlePagination",(function(){return g}));var r=a("f5LFc"),o=a("6gYyp"),i=a("i464J"),c=a("bOuzt"),l=a("aJeoa"),u=document.querySelector(".gallery"),s=document.querySelector(".pagination-container"),d=new(0,r.ThemoviedbAPI),f=1;function p(){d.getMovies().then((function(t){var e=h(t);(0,i.renderModalFilm)(e)}))}function h(t){t.inLocalStorage||t.results.forEach((function(t){!function(t,e){var n=t;n.genre_name=e,n.isWatched=!1,n.isQueued=!1}(t,(0,l.serchGenre)(t.genre_ids))}));var e=t.results;return u.innerHTML=(0,o.createCard)(t.results),(0,c.renderPagination)(t.page,t.total_pages),s.addEventListener("click",g),e}function g(t){if("LI"===t.target.tagName&&"..."!==t.target.textContent){var e=t.target.textContent;f="⇽"===e?Number(f)-1:"⇾"===e?Number(f)+1:e,d.getMovies(f).then((function(t){var e=h(t);(0,i.renderModalFilm)(e)}))}}})),a.register("f5LFc",(function(n,r){t(n.exports,"ThemoviedbAPI",(function(){return f}));var o=a("bpxeT"),i=a("8MBJY"),c=a("8MQK7"),l=a("a2hTj"),u=a("2TvXO"),s=new WeakMap,d=new WeakMap,f=function(){"use strict";function t(){e(i)(this,t),e(c)(this,s,{writable:!0,value:"https://api.themoviedb.org/3/"}),e(c)(this,d,{writable:!0,value:"?api_key=7a4cd4317772102a9b88ef6a54b71590"}),this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="?api_key=7a4cd4317772102a9b88ef6a54b71590"}return e(l)(t,[{key:"getMovies",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page,n=this;return e(o)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending","movie","day",e.prev=3,e.next=6,fetch("".concat(n.BASE_URL).concat("trending","/").concat("movie","/").concat("day").concat(n.API_KEY,"&page=").concat(t)).then((function(t){return t.json()}));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),r,null,[[3,9]])})))()}},{key:"getSearchMovie",value:function(t,n){var r=this;return e(o)(e(u).mark((function o(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(r.BASE_URL,"search/movie").concat(r.API_KEY,"&query=").concat(t,"&page=").concat(n)).then((function(t){return t.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),o,null,[[0,6]])})))()}},{key:"getGanres",value:function(){var t=this;return e(o)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"genre","movie","list",e.prev=3,e.next=6,fetch("".concat(t.BASE_URL).concat("genre","/").concat("movie","/").concat("list").concat(t.API_KEY)).then((function(t){return t.json()}));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),n,null,[[3,9]])})))()}},{key:"resetPage",value:function(){this.page=1}}]),t}()})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}})),a.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),a.register("8MQK7",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){r.default(t,e),e.set(t,n)};var n,r=(n=a("5k7tO"))&&n.__esModule?n:{default:n}})),a.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("a2hTj",(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e&&n(t.prototype,e);r&&n(t,r);return t}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=q(i,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?h:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};l(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(k([])));w&&w!==n&&r.call(w,a)&&(b=w);var x=y.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function q(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,q(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=y,l(x,"constructor",y),l(y,"constructor",m),m.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S(L.prototype),l(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new L(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("6gYyp",(function(e,n){t(e.exports,"createCard",(function(){return r}));new(0,a("f5LFc").ThemoviedbAPI);function r(t){return t.map((function(t){var e,n,r=t.id,o=t.poster_path,a=t.release_date,i=t.title,c=t.vote_average,l=t.genre_name,u=c.toString().slice(0,3);e=new Date(a).getFullYear();var s='<span class="vertical-line">|</span>';l.length>3?n=l.slice(0,2).join(", ")+", Other":0===l.length?(s="",n=""):n=l.join(", ");var d="https://image.tmdb.org/t/p/w500".concat(o);return o||(d="https://i.ibb.co/JyBCdzw/sinema-empty.jpg"),e||(e="Info is not available"),'\n          <li class="card_item grid-item" id='.concat(r,'>\n            <div class="card__image">\n              <img class="image" src=').concat(d,' alt="').concat(i,'" loading="lazy" />\n              </div>\n\n            <h1 class="card__title">').concat(i,'</h1>\n            <div class="card__info">\n              <div class="card__genres">\n                <span class="genre">').concat(n,"</span>\n              </div>\n              ").concat(s,'\n              <span class="card__year">').concat(e,"</span>\n              <span class='card__average on-library'>").concat(u,"</span>\n            </div>\n          </li>\n        ")})).join("")}})),a.register("i464J",(function(e,n){t(e.exports,"renderModalFilm",(function(){return g}));var r,o,i,c=a("2mU1w"),l=a("3wncY"),u="library-watched",s="library-queie",d=document.querySelector(".modal-film"),f=document.querySelector(".gallery"),p=document.querySelector("html");document.querySelector("[data-page]"),document.querySelector(".active__watched"),document.querySelector(".active__queued");function h(t){t.target.closest("li")&&(!function(t){var e=JSON.parse(localStorage.getItem(u)),n=JSON.parse(localStorage.getItem(s)),r=i.find((function(e){return e.id===Number(t)}));o=r;var a=r.original_title,c=r.popularity,l=r.vote_average,f=r.vote_count,p=r.overview,h=r.poster_path,g=r.title,v=r.genre_name,m="https://i.ibb.co/JyBCdzw/sinema-empty.jpg";"https://image.tmdb.org/t/p/w500".concat(h);h||m;var y=e.find((function(e){return e.id===Number(t)})),b=n.find((function(e){return e.id===Number(t)})),_=l.toString().slice(0,3),w=Math.floor(c),x=v.join(", "),S="\n  <div class='backdrop'>\n    <div class='modal-container'>\n      <button class=\"btn-close\" type=\"button\" data-action='close-modal-1'></button>\n      <div class='cont-preview' >\n        <img class='cont-prew__image' src=\"https://image.tmdb.org/t/p/w500".concat(h,'" alt="').concat(g,"\" loading=\"lazy\" />\n      </div>\n      \n      <div class='modal-content'>\n        <h3 class='film-title'>").concat(a,"</h3>\n          <table class='table'>\n        <tbody>\n          <tr>\n            <td><p class='table-text__left'>Vote / Votes</p></td>\n            <td>\n              <p class='table-text__right'>\n                <span class='average'>").concat(_,"</span>\n                <span class='awerage-dot'> /</span> ").concat(f,"\n              </p>\n            </td>\n            </tr>\n          <tr>\n            <td><p class='table-text__left'>Popularity</p></td>\n            <td><p class='table-text__right'>").concat(w,"</p></td>\n          </tr>\n            <tr>\n            <td><p class='table-text__left'>Original Title</p></td>\n            <td><p class='table-text__right '>").concat(a,"</p></td>\n          </tr>\n            <tr>\n            <td><p class='table-text__left'>").concat(x.length?"Genre":"","</p></td>\n            <td><p class='table-text__right '>").concat(x,"</p></td>\n          </tr>\n        </tbody>\n        </table>\n          <p class='descr-text'>About</p>\n          <p class='descr-text-content '> ").concat(p,"</p>\n        <ul class='btn-list'>\n          <li class='btn-list__item'>\n           <button class='btn-list__item-btn--add' type=\"button\">").concat(y?"remove":"add to watched","</button>\n          </li>\n          <li class='btn-list__item'>\n            <button class='btn-list__item-btn--queie' type=\"button\">").concat(b?"remove":"add to queued","</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  ");d.insertAdjacentHTML("afterbegin",S)}(t.target.closest("li").id),(0,l.default)(o),r=window.pageYOffset||document.documentElement.scrollTop,(0,c.default)(r),p.style.top=" -".concat(r,"px"),p.style.left="0px",p.classList.add("hidden"))}function g(t){f.addEventListener("click",h),i=t}})),a.register("2mU1w",(function(e,n){function r(t){var e=document.querySelector('[data-action="close-modal-1"]'),n=document.querySelector(".modal-film"),r=document.querySelector(".backdrop"),o=document.querySelector("html");e.addEventListener("click",(function(e){n.innerHTML="",o.style.top=null,o.style.left=null,o.classList.remove("hidden"),window.scrollTo({top:t})})),r.addEventListener("click",(function(e){e.currentTarget===e.target&&(n.innerHTML="",o.style.top=null,o.style.left=null,o.classList.remove("hidden"),window.scrollTo({top:t}))})),window.addEventListener("keydown",(function e(r){"Escape"===r.code&&(n.innerHTML="",window.removeEventListener("keydown",e),o.style.top=null,o.style.left=null,o.classList.remove("hidden"),window.scrollTo({top:t}))}))}t(e.exports,"default",(function(){return r}))})),a.register("3wncY",(function(e,n){t(e.exports,"default",(function(){return i}));var r=a("6q1DG"),o=(r=a("6q1DG"),a("iGpqP"));o=a("iGpqP");function i(t){var e=JSON.parse(localStorage.getItem("library-watched")),n=JSON.parse(localStorage.getItem("library-queie")),a=[],i=[];e.map((function(t){a.push(t.id)})),n.map((function(t){i.push(t.id)})),a.find((function(e){return e===t.id}))?(0,o.removeFromWatch)(t):(0,r.addToWatch)(t),i.find((function(e){return e===t.id}))?(0,o.removeFromQueue)(t):(0,r.addQueue)(t)}})),a.register("6q1DG",(function(e,n){t(e.exports,"addToWatch",(function(){return c})),t(e.exports,"addQueue",(function(){return l}));var r=a("iGpqP"),o=(r=a("iGpqP"),"library-watched"),i="library-queie";function c(t){var e=[],n=document.querySelector(".btn-list__item-btn--add");n.textContent="add to watched",n.addEventListener("click",(function(){var a=document.querySelector("[data-page]");t.inLocalStorage=!0,t.isWatched=!0,n.textContent="Added!",n.disabled=!0;var i=JSON.parse(localStorage.getItem(o));e=i;var c=[];i.map((function(t){c.push(t.id)})),c.find((function(e){return e===t.id}))||(e.push(t),localStorage.setItem(o,JSON.stringify(e)),"home"===a.dataset.page&&(n.disabled=!1,(0,r.removeFromWatch)(t)))}))}function l(t){var e=[],n=document.querySelector(".btn-list__item-btn--queie");n.textContent="add to queued",n.addEventListener("click",(function(){var o=document.querySelector("[data-page]");t.inLocalStorage=!0,t.isQueued=!0,n.textContent="Added!",n.disabled=!0;var a=JSON.parse(localStorage.getItem(i));e=a;var c=[];a.map((function(t){c.push(t.id)})),c.find((function(e){return e===t.id}))||(e.push(t),localStorage.setItem(i,JSON.stringify(e)),"home"===o.dataset.page&&(n.disabled=!1,(0,r.removeFromQueue)(t)))}))}})),a.register("iGpqP",(function(e,n){t(e.exports,"removeFromWatch",(function(){return l})),t(e.exports,"removeFromQueue",(function(){return u}));var r=a("hGNcL"),o=a("6q1DG"),i=(o=a("6q1DG"),"library-watched"),c="library-queie";function l(t){var e=document.querySelector(".btn-list__item-btn--add"),n=document.querySelector(".btn-list__item-btn--queie"),a=document.querySelector("[data-page]"),c=document.querySelector(".placeholder"),l=JSON.parse(localStorage.getItem(i)),u=document.querySelector(".active__queued");t.isWatched&&(e.textContent="Remove"),u||"library"!==a.dataset.page||(n.disabled=!0),e.addEventListener("click",(function(){var n=[],u=l.filter((function(e){return e.id!==t.id}));if(l.map((function(t){n.push(t.id)})),n.find((function(e){return e===t.id}))){u.length||"library"!==a.dataset.page||(c.style.display="block");var s={page:1,results:u,total_pages:0,inLocalStorage:!1,isWatched:!1};"library"===a.dataset.page&&(0,r.handleSuccess)(s),e.textContent="Removed!",e.disabled=!0,localStorage.setItem(i,JSON.stringify(u)),"home"===a.dataset.page&&(e.disabled=!1,(0,o.addToWatch)(t))}}))}function u(t){var e=document.querySelector(".btn-list__item-btn--add"),n=document.querySelector(".btn-list__item-btn--queie"),a=document.querySelector("[data-page]"),i=document.querySelector(".placeholder"),l=(document.querySelector(".modal-film"),document.querySelector(".active__watched")),u=JSON.parse(localStorage.getItem(c));t.isQueued&&(n.textContent="Remove"),l||"library"!==a.dataset.page||(e.disabled=!0),n.addEventListener("click",(function(){var e=[],l=u.filter((function(e){return e.id!==t.id}));if(u.map((function(t){e.push(t.id)})),e.find((function(e){return e===t.id}))){l.length||"library"!==a.dataset.page||(i.style.display="block");var s={page:1,results:l,total_pages:0,inLocalStorage:!1,isQueued:!1};"library"===a.dataset.page&&(0,r.handleSuccess)(s),n.textContent="Removed!",n.disabled=!0,localStorage.setItem(c,JSON.stringify(l)),"home"===a.dataset.page&&(n.disabled=!1,(0,o.addQueue)(t))}}))}})),a.register("bOuzt",(function(e,n){t(e.exports,"renderPagination",(function(){return o}));var r={container:document.querySelector(".pagination-container"),leftArrow:document.querySelector(".left-arrow"),rightArrow:document.querySelector(".rightArrow")};function o(t,e){if(t&&e&&1!==e){var n="",o=t-1,a=t+1,i=t+2;t>1&&(n+='<li class="button style_color">&loarr;</li>'),t>2&&(n+='<li class="button style_enpty">1</li>'),t>4&&(n+='<li class="button">&middot&middot&middot</li>'),t>3&&(n+='<li class="button style_enpty">'.concat(t-2,"</li>")),t>1&&(n+='<li class="button style_enpty">'.concat(o,"</li>")),n+="<li class = 'pagination-active'>".concat(t,"</li>"),t+1<e&&(n+='<li class="button style_enpty">'.concat(a,"</li>")),t+2<e&&(n+='<li class="button style_enpty">'.concat(i,"</li>")),e>t+3&&(n+='<li class="button">&middot&middot&middot</li>'),e>t&&(n+='<li class="button style_enpty">'.concat(e,"</li>")),e>t&&(n+='<li class="button style_color">&roarr;</li>'),r.container.innerHTML=n}}})),a.register("aJeoa",(function(e,n){var r;function o(t){var e=[];return t.forEach((function(t){var n=r.find((function(e){return e.id===t}));e.push(n)})),e.map((function(t){return t.name}))}t(e.exports,"serchGenre",(function(){return o})),(new(0,a("f5LFc").ThemoviedbAPI)).getGanres().then((function(t){r=t.genres}))})),a.register("3NnGQ",(function(t,e){var n=document.querySelector("#return-to-top");function r(t){(t.target.closest("li")||"A"===t.currentTarget.tagName)&&window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".pagination-container").addEventListener("click",r),n.addEventListener("click",r),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?n.style.display="block":n.style.display="none"}}))}();
//# sourceMappingURL=library.9cf1ed93.js.map