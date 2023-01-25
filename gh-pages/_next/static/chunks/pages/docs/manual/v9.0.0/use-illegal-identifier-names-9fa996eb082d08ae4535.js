(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7220],{17375:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})},60491:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(17375),a=t(96156),l=(t(67294),t(3905));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s,c=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",i({},e))}),u={};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",i(i(i({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",i({},{id:"use-illegal-identifier-names"}),"Use Illegal Identifier Names"),(0,l.kt)("p",null,"Sometime, for e.g. a let binding or a record field, you might want to use:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A capitalized name."),(0,l.kt)("li",{parentName:"ul"},"A name that contains illegal characters (e.g. emojis, hyphen, space)."),(0,l.kt)("li",{parentName:"ul"},"A name that's one of ReScript's reserved keywords.")),(0,l.kt)("p",null,"We provide an escape hatch syntax for these cases:"),(0,l.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let \\"my-\ud83c\udf4e" = 10\n\ntype element = {\n  \\"aria-label": string\n}\n\nlet myElement = {\n  \\"aria-label": "close"\n}\n\nlet label = myElement.\\"aria-label"\n\nlet calculate = (~\\"Props") => {\n  \\"Props" + 1\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var my$$unknown$unknown$unknown$unknown = 10;\n\nvar myElement = {\n  "aria-label": "close"\n};\n\nvar label = myElement["aria-label"];\n\nfunction calculate(Props) {\n  return Props + 1 | 0;\n}\n'))),(0,l.kt)("p",null,"See the output. ",(0,l.kt)("strong",{parentName:"p"},"Use them only when necessary"),", for interop with JavaScript. This is a last-resort feature. If you abuse this, many of the compiler guarantees will go away."))}p.isMDXComponent=!0,p.frontmatter={title:"Use Illegal Identifier Names",description:"Handling (JS) naming collisions in ReScript",canonical:"/docs/manual/latest/use-illegal-identifier-names",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/use-illegal-identifier-names.mdx"}},51967:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/use-illegal-identifier-names",function(){return t(60491)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=51967,e(e.s=n);var n}));var n=e.O();_N_E=n}]);