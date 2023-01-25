(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61441],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},77593:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),r=n(96156),l=(n(67294),n(3905));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i,p=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",s({},e))}),u={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",s(s(s({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"lazy-value"}),"Lazy Value"),(0,l.kt)("p",null,"If you have some expensive computations you'd like to ",(0,l.kt)("strong",{parentName:"p"},"defer and cache")," subsequently, you can wrap it with ",(0,l.kt)("inlineCode",{parentName:"p"},"lazy"),":"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'// Read the directory, only once\nlet expensiveFilesRead = lazy({\n  Js.log("Reading dir")\n  Node.Fs.readdirSync("./pages")\n})\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Fs = require("fs");\n\nvar expensiveFilesRead = {\n  LAZY_DONE: false,\n  VAL: (function () {\n    console.log("Reading dir");\n    return Fs.readdirSync("./pages");\n  })\n};\n'))),(0,l.kt)("p",null,"Check the JS Output tab: that ",(0,l.kt)("inlineCode",{parentName:"p"},"expensiveFilesRead"),"'s code isn't executed yet, even though you declared it! You can carry it around without fearing that it'll run the directory read."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": a lazy value is ",(0,l.kt)("strong",{parentName:"p"},"not")," a ",(0,l.kt)("a",s({parentName:"p"},{href:"shared-data-types.md"}),"shared data type"),". Don't rely on its runtime representation in your JavaScript code."),(0,l.kt)("h2",s({},{id:"execute-the-lazy-computation"}),"Execute The Lazy Computation"),(0,l.kt)("p",null,"To actually run the lazy value's computation, use ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy.force")," from the globally available ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy")," module:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// First call. The computation happens\nJs.log(Lazy.force(expensiveFilesRead)) // logs "Reading dir" and the directory content\n\n// Second call. Will just return the already calculated result\nJs.log(Lazy.force(expensiveFilesRead)) // logs the directory content\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"console.log(CamlinternalLazy.force(expensiveFilesRead));\n\nconsole.log(CamlinternalLazy.force(expensiveFilesRead));\n"))),(0,l.kt)("p",null,"The first time ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy.force")," is called, the expensive computation happens and the result is ",(0,l.kt)("strong",{parentName:"p"},"cached"),". The second time, the cached value is directly used."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You can't re-trigger the computation after the first ",(0,l.kt)("inlineCode",{parentName:"strong"},"force")," call"),". Make sure you only use a lazy value with computations whose results don't change (e.g. an expensive server request whose response is always the same)."),(0,l.kt)("p",null,"Instead of using ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy.force"),", you can also use ",(0,l.kt)("a",s({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"pattern matching")," to trigger the computation:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"switch expensiveFilesRead {\n| lazy(result) => Js.log(result)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var result = CamlinternalLazy.force(expensiveFilesRead);\n"))),(0,l.kt)("p",null,"Since pattern matching also works on a ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," binding, you can also do:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let lazy(result) = expensiveFilesRead\nJs.log(result)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var result = CamlinternalLazy.force(expensiveFilesRead);\nconsole.log(result);\n"))),(0,l.kt)("h2",s({},{id:"exception-handling"}),"Exception Handling"),(0,l.kt)("p",null,"For completeness' sake, our files read example might raise an exception because of ",(0,l.kt)("inlineCode",{parentName:"p"},"readdirSync"),". Here's how you'd handle it:"),(0,l.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let result = try {\n  Lazy.force(expensiveFilesRead)\n} catch {\n| Not_found => [] // empty array of files\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var result;\n\ntry {\n  result = CamlinternalLazy.force(expensiveFilesRead);\n} catch (raw_exn) {\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    result = [];\n  } else {\n    throw exn;\n  }\n}\n'))),(0,l.kt)("p",null,"Though you should probably handle the exception inside the lazy computation itself."))}c.isMDXComponent=!0,c.frontmatter={title:"Lazy Value",description:"Data type for deferred computation in ReScript",canonical:"/docs/manual/latest/lazy-values",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/lazy-values.mdx"}},89272:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/lazy-values",function(){return n(77593)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=89272,e(e.s=t);var t}));var t=e.O();_N_E=t}]);