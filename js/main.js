!function(e){var n={};function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(l,c,function(n){return e[n]}.bind(null,c));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports){eval("const saveBtn = document.querySelector('.save-btn-js');\nconst loadBtn = document.querySelector('.load-btn-js');\nconst clearBtn = document.querySelector('.clear-btn-js');\nconst removeBtn = document.querySelector('.remove-btn-js');\nconst textArea = document.querySelector('.textarea-js')\nsaveBtn.addEventListener('click', (e) => {\n  localStorage.setItem('textInput', textArea.value);\n})\nloadBtn.addEventListener('click', (e) => {\n  textArea.value = localStorage.getItem('textInput');\n})\nclearBtn.addEventListener('click', (e) => {\n  textArea.value = \"\";\n})\nremoveBtn.addEventListener('click', (e) => {\n  localStorage.removeItem('textInput');\n})\n\nif (localStorage.getItem('textInput')) {\n  textArea.value = localStorage.getItem('textInput');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1idG4tanMnKTtcbmNvbnN0IGxvYWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZC1idG4tanMnKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ0bi1qcycpO1xuY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1idG4tanMnKTtcbmNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhLWpzJylcbnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGV4dElucHV0JywgdGV4dEFyZWEudmFsdWUpO1xufSlcbmxvYWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICB0ZXh0QXJlYS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXh0SW5wdXQnKTtcbn0pXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHRleHRBcmVhLnZhbHVlID0gXCJcIjtcbn0pXG5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGV4dElucHV0Jyk7XG59KVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHRJbnB1dCcpKSB7XG4gIHRleHRBcmVhLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHRJbnB1dCcpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);