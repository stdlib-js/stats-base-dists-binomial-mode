"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=s(function(f,t){
var o=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/constants-float64-pinf/dist');function q(e,r){return i(e)||i(r)||r<0||r>1||!o(e)||e===v?NaN:n((e+1)*r)}t.exports=q
});var N=u();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
