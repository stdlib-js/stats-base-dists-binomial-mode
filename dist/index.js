"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(c,t){
var o=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/constants-float64-pinf/dist');function n(e,r){return i(e)||i(r)||r<0||r>1||!o(e)||e===v?NaN:s((e+1)*r)}t.exports=n
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
