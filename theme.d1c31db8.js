parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qwQt":[function(require,module,exports) {
const e={LIGHT:"light-theme",DARK:"dark-theme"},t=document.querySelector("#theme-switch-toggle");function c(e){e.currentTarget.checked?o():n()}function o(){document.body.classList.add(e.DARK),document.body.classList.remove(e.LIGHT),localStorage.setItem("theme",e.DARK),t.checked=!0}function n(){document.body.classList.add(e.LIGHT),document.body.classList.remove(e.DARK),localStorage.setItem("theme",e.LIGHT),t.checked=!1}function d(){const t=localStorage.getItem("theme");t!==e.LIGHT&&null!==t?t!==e.DARK||o():n()}t.addEventListener("change",c),d();
},{}]},{},["qwQt"], null)
//# sourceMappingURL=/goit-js-hw-10-food-service/theme.d1c31db8.js.map