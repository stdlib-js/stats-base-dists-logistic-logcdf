// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logcdf@v0.2.2-esm/index.mjs";function m(t){return t<=18?n(i(t)):t>33.3?t:t+i(-t)}function o(t,n,i){return s(t)||s(n)||s(i)||i<0?NaN:0===i?t<n?e:0:-m(-((t-n)/i))}function a(t,e){return s(t)||s(e)||e<0?r(NaN):0===e?d(t):function(n){if(s(n))return NaN;return-m(-((n-t)/e))}}t(o,"factory",a);export{o as default,a as factory};
//# sourceMappingURL=index.mjs.map