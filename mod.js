// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor,n=r;var t=function(r){return n(r)===r&&r>=0};var u=function(r){return r!=r},a=Number.POSITIVE_INFINITY;function e(n,e){return u(n)||u(e)||e<0||e>1||!t(n)||n===a?NaN:r((n+1)*e)}export{e as default};
//# sourceMappingURL=mod.js.map
