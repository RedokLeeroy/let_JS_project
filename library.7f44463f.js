!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("6gYyp"),l=document.querySelector(".gallery"),a=JSON.parse(localStorage.getItem("library-watched")),i=JSON.parse(localStorage.getItem("library-queie")),d=document.getElementById("watched-button"),u=document.getElementById("queue-button");d.addEventListener("click",(function(e){e.preventDefault(),l.innerHTML=(0,o.createCard)(a)})),u.addEventListener("click",(function(e){e.preventDefault(),l.innerHTML=(0,o.createCard)(i)}))}();
//# sourceMappingURL=library.7f44463f.js.map
