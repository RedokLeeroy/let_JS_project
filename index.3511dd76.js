!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var a="library-watched",r="library-queie",i=JSON.parse(localStorage.getItem(a)),l=JSON.parse(localStorage.getItem(r)),c=[],d=[];function s(e){console.log("add watch");var t=document.querySelector(".btn-list__item-btn--add");t.addEventListener("click",(function(){e.inLocalStorage=!0,e.isWatched=!0,t.textContent="Added!",t.disabled=!0;var n=JSON.parse(localStorage.getItem(a)),o=[];n.map((function(e){o.push(e.id)})),o.find((function(t){return t===e.id}))||(c.push(e),localStorage.setItem(a,JSON.stringify(c)))}))}function u(e){console.log("add queue");var t=document.querySelector(".btn-list__item-btn--queie");t.addEventListener("click",(function(){e.inLocalStorage=!0,e.isQueued=!0,t.textContent="Added!",t.disabled=!0;var n=JSON.parse(localStorage.getItem(r)),o=[];n.map((function(e){o.push(e.id)})),o.find((function(t){return t===e.id}))||(d.push(e),localStorage.setItem(r,JSON.stringify(d)))}))}i||localStorage.setItem(a,JSON.stringify(c)),i.length?c=JSON.parse(localStorage.getItem(a)):localStorage.setItem(a,JSON.stringify(c)),l||localStorage.setItem(r,JSON.stringify(d)),l.length?d=JSON.parse(localStorage.getItem(r)):localStorage.setItem(r,JSON.stringify(d));var m,f=o("f5LFc"),g=o("6gYyp"),p=(f=o("f5LFc"),{container:document.querySelector(".pagination-container"),leftArrow:document.querySelector(".left-arrow"),rightArrow:document.querySelector(".rightArrow")});new(0,f.ThemoviedbAPI);function v(e,t){if(e&&t&&1!==t){var n="",o=e-1,a=e+1,r=e+2;e>1&&(n+='<li class="button style_color">&loarr;</li>'),e>2&&(n+='<li class="button style_enpty">1</li>'),e>4&&(n+='<li class="button">&middot&middot&middot</li>'),e>3&&(n+='<li class="button style_enpty">'.concat(e-2,"</li>")),e>1&&(n+='<li class="button style_enpty">'.concat(o,"</li>")),n+="<li class = 'pagination-active'>".concat(e,"</li>"),e+1<t&&(n+='<li class="button style_enpty">'.concat(a,"</li>")),e+2<t&&(n+='<li class="button style_enpty">'.concat(r,"</li>")),t>e+3&&(n+='<li class="button">&middot&middot&middot</li>'),t>e&&(n+='<li class="button style_enpty">'.concat(t,"</li>")),t>e&&(n+='<li class="button style_color">&roarr;</li>'),p.container.innerHTML=n}}(new(0,(f=o("f5LFc")).ThemoviedbAPI)).getGanres().then((function(e){m=e.genres}));var b=document.querySelector(".gallery"),y=document.querySelector(".pagination-container"),S=new(0,f.ThemoviedbAPI),h=1;function _(e){e.inLocalStorage||e.results.forEach((function(e){var t,n,o=(t=e.genre_ids,n=[],t.forEach((function(e){var t=m.find((function(t){return t.id===e}));n.push(t)})),n.map((function(e){return e.name})));!function(e,t){var n=e;n.genre_name=t,n.isWatched=!1,n.isQueued=!1}(e,o)}));var t=e.results;return b.innerHTML=(0,g.createCard)(e.results),v(e.page,e.total_pages),y.addEventListener("click",L),t}function L(e){if("LI"===e.target.tagName&&"..."!==e.target.textContent){var t=e.target.textContent;h="⇽"===t?Number(h)-1:"⇾"===t?Number(h)+1:t,S.getMovies(h).then((function(e){k(_(e))}))}}var q="library-watched",w="library-queie";function N(e){console.log("remove watch");var t=document.querySelector(".btn-list__item-btn--add"),n=document.querySelector("[data-page]"),o=JSON.parse(localStorage.getItem(q));e.isWatched&&(t.textContent="Remove"),t.addEventListener("click",(function(){var a=[],r=o.filter((function(t){return t.id!==e.id}));if(o.map((function(e){a.push(e.id)})),a.find((function(t){return t===e.id}))){var i={page:1,results:r,total_pages:0,inLocalStorage:!1,isWatched:!1};"library"===n.dataset.page&&_(i),t.textContent="Removed!",t.disabled=!0,localStorage.setItem(q,JSON.stringify(r))}}))}function x(e){console.log("remove queue");var t=document.querySelector(".btn-list__item-btn--queie"),n=document.querySelector("[data-page]"),o=JSON.parse(localStorage.getItem(w));e.isQueued&&(t.textContent="Remove"),t.addEventListener("click",(function(){var a=[],r=o.filter((function(t){return t.id!==e.id}));if(o.map((function(e){a.push(e.id)})),a.find((function(t){return t===e.id}))){var i={page:1,results:r,total_pages:0,inLocalStorage:!1,isQueued:!1};"library"===n.dataset.page&&_(i),t.textContent="Removed!",t.disabled=!0,localStorage.setItem(w,JSON.stringify(r))}}))}function I(e){var t=JSON.parse(localStorage.getItem("library-watched")),n=JSON.parse(localStorage.getItem("library-queie")),o=[],a=[];t.map((function(e){o.push(e.id)})),n.map((function(e){a.push(e.id)})),o.find((function(t){return t===e.id}))?N(e):s(e),a.find((function(t){return t===e.id}))?x(e):u(e)}var E,O,M=document.querySelector(".modal-film"),T=document.querySelector(".gallery");function J(e){var t,n,o;e.target.closest("li")&&(!function(e){var t=O.find((function(t){return t.id===Number(e)}));E=t;var n=t.original_title,o=t.popularity,a=t.vote_average,r=t.vote_count,i=t.overview,l=t.poster_path,c=t.title,d=t.genre_name,s=a.toString().slice(0,3),u=Math.floor(o),m=d.join(", "),f="\n  <div class='backdrop'>\n    <div class='modal-container'>\n      <button class=\"btn-close\" type=\"button\" data-action='close-modal-1'></button>\n      <div class='cont-preview' >\n        <img class='cont-prew__image' src=\"https://image.tmdb.org/t/p/w500".concat(l,'" alt="').concat(c,"\" loading=\"lazy\" />\n      </div>\n      \n      <div class='modal-content'>\n        <h3 class='film-title'>").concat(n,"</h3>\n          <table class='table'>\n        <tbody>\n          <tr>\n            <td><p class='table-text__left'>Vote / Votes</p></td>\n            <td>\n              <p class='table-text__right'>\n                <span class='average'>").concat(s,"</span>\n                <span class='awerage-dot'> /</span> ").concat(r,"\n              </p>\n            </td>\n            </tr>\n          <tr>\n            <td><p class='table-text__left'>Popularity</p></td>\n            <td><p class='table-text__right'>").concat(u,"</p></td>\n          </tr>\n            <tr>\n            <td><p class='table-text__left'>Original Title</p></td>\n            <td><p class='table-text__right '>").concat(n,"</p></td>\n          </tr>\n            <tr>\n            <td><p class='table-text__left'>Genre</p></td>\n            <td><p class='table-text__right '>").concat(m,"</p></td>\n          </tr>\n        </tbody>\n        </table>\n          <p class='descr-text'>About</p>\n          <p class='descr-text-content '> ").concat(i,"</p>\n        <ul class='btn-list'>\n          <li class='btn-list__item'>\n           <button class='btn-list__item-btn--add' type=\"button\">add to Watched</button>\n          </li>\n          <li class='btn-list__item'>\n            <button class='btn-list__item-btn--queie' type=\"button\">add to queue</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  ");M.insertAdjacentHTML("afterbegin",f)}(e.target.closest("li").id),t=document.querySelector('[data-action="close-modal-1"]'),n=document.querySelector(".modal-film"),o=document.querySelector(".backdrop"),t.addEventListener("click",(function(e){n.innerHTML="",document.body.classList.remove("hidden")})),o.addEventListener("click",(function(e){e.currentTarget===e.target&&(n.innerHTML="",document.body.classList.remove("hidden"))})),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(n.innerHTML="",window.removeEventListener("keydown",e),document.body.classList.remove("hidden"))})),I(E),document.body.classList.add("hidden"))}function k(e){T.addEventListener("click",J),O=e}var C={openModalBtn:document.querySelector(".open-btn"),closeModalBtn:document.querySelector(".close-btn"),modal:document.querySelector(".modal")};function A(e){e.preventDefault(),C.modal.classList.toggle("is-hidden"),C.closeModalBtn.addEventListener("click",A),"hidden"===document.body.style.overflow?document.body.style.overflow="auto":document.body.style.overflow="hidden"}C.openModalBtn.addEventListener("click",A);f=o("f5LFc");var H=document.querySelector(".load-wrapp");function P(e){"show"===e&&H.classList.remove("is-hidden"),"hide"===e&&H.classList.add("is-hidden")}var R=new(0,f.ThemoviedbAPI),F=document.querySelector(".search-input"),W=(document.querySelector(".gallery"),document.querySelector(".error")),B=document.querySelector(".pagination-container"),D=1;function Q(e){return 0===e.total_results||""===F.value.trim()?(B.innerHTML="",W.innerHTML="Search result not successful. Enter the correct movie name and"):v(e.page,e.total_pages),k(_(e)),B.removeEventListener("click",L),B.addEventListener("click",j),e.results}function j(e){if("LI"===e.target.tagName&&"..."!==e.target.textContent){var t=e.target.textContent;D="⇽"===t?Number(D)-1:"⇾"===t?Number(D)+1:t,R.getSearchMovie(F.value,D).then(Q)}}document.querySelector(".search-form").addEventListener("submit",(function(e){if(e.preventDefault(),""===F.value.trim())return void(W.innerHTML="Please enter any text");W.innerHTML="",D=1,P("show"),R.getSearchMovie(F.value,D).then((function(e){if(0===e.total_results)return W.innerHTML="Search result not successful. Enter the correct movie name and",void P("hide");var t=_(e);Q(e),k(t),P("hide")}))})),S.getMovies().then((function(e){k(_(e))}))}();
//# sourceMappingURL=index.3511dd76.js.map
