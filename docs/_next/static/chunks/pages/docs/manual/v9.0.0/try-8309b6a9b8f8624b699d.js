(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30185],{17375:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})},50171:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(96156),a=t(17375),i=(t(67294),t(3905));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",l(l(l({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",l({},{id:"try-online"}),"Try Online"),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",l({parentName:"p"},{href:"/try"}),"Playground")," lets you try ReScript online, and comes with ",(0,i.kt)("a",l({parentName:"p"},{href:"/docs/react/latest/introduction"}),"ReScript-React")," preinstalled."),(0,i.kt)("h2",l({},{id:"quickly-evaluate-code-in-terminal"}),"Quickly Evaluate Code In Terminal"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"bsc -e"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"\u276f bsc -e 'let add = (x, y) => x + y'\n// Generated by ReScript, PLEASE EDIT WITH CARE\n'use strict';\n\n\nfunction add(x, y) {\n  return x + y | 0;\n}\n\nexports.add = add;\n/* No side effect */\n")),(0,i.kt)("p",null,"You can pipe the output to Node to run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"\u276f bsc -e 'let add = (x, y) => x + y; Js.log(add(1, 2))' | node\n3\n")),(0,i.kt)("h2",l({},{id:"quickly-compile-a-single-file"}),"Quickly Compile A Single File"),(0,i.kt)("p",null,"You can compile a file directly via ",(0,i.kt)("inlineCode",{parentName:"p"},"bsc MyFile.res"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"// MyFile.res\nlet rec fib = n => {\n  switch n {\n  | 0 | 1 => n\n  | n => fib(n - 1) + fib(n - 2)\n  }\n}\nJs.log(fib(0))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"\u276f bsc MyFile.res\n// Generated by ReScript, PLEASE EDIT WITH CARE\n'use strict';\n\n\nfunction fib(n) {\n  if (n === 0 || n === 1) {\n    return n;\n  } else {\n    return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;\n  }\n}\n\nconsole.log(fib(0));\n\nexports.fib = fib;\n/*  Not a pure module */\n")),(0,i.kt)("p",null,"You can also get the inferred type signatures directly via ",(0,i.kt)("inlineCode",{parentName:"p"},"bsc -i MyFile.res")),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"\u276f bsc -i MyFile.res\nlet fib: int => int\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," that this is for quick tests. For real projects, use our ",(0,i.kt)("a",l({parentName:"p"},{href:"build-overview.md"}),"build system"),"."),(0,i.kt)("h2",l({},{id:"format-code"}),"Format Code"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"\u276f bsc -format MyFile.res\nlet rec fib = n => {\n  switch n {\n  | 0 | 1 => n\n  | n => fib(n - 1) + fib(n - 2)\n  }\n}\nJs.log(fib(0))\n")),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",l({parentName:"p"},{href:"editor-plugins.md"}),"editor plugins")," come with formatting by default."))}s.isMDXComponent=!0,s.frontmatter={title:"Try",description:"Try ReScript via Command Line",canonical:"/docs/manual/latest/try",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/try.mdx"}},14990:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/try",function(){return t(50171)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=14990,e(e.s=n);var n}));var n=e.O();_N_E=n}]);