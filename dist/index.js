"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=n(function(w,v){
var l=require('@stdlib/math-base-special-log1p/dist'),c=require('@stdlib/math-base-special-exp/dist');function y(r){return r<=18?l(c(r)):r>33.3?r:r+c(-r)}v.exports=y
});var q=n(function(x,p){
var a=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/constants-float64-ninf/dist'),z=u();function F(r,e,t){var i;return a(r)||a(e)||a(t)||t<0?NaN:t===0?r<e?d:0:(i=(r-e)/t,-z(-i))}p.exports=F
});var N=n(function(A,s){
var I=require('@stdlib/utils-constant-function/dist'),O=require('@stdlib/stats-base-dists-degenerate-logcdf/dist').factory,o=require('@stdlib/math-base-assert-is-nan/dist'),R=u();function b(r,e){if(o(r)||o(e)||e<0)return I(NaN);if(e===0)return O(r);return t;function t(i){var f;return o(i)?NaN:(f=(i-r)/e,-R(-f))}}s.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=q(),j=N();h(g,"factory",j);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
