(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16440],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},90887:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(17375),r=t(96156),l=(t(67294),t(3905));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o,i=(o="CodeTab",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",s({},e))}),c={};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",s(s(s({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"\u60f0\u6027\u503c"}),"\u60f0\u6027\u503c"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e9b\u6602\u8d35\u7684\u8ba1\u7b97\uff0c\u4f60\u60f3",(0,l.kt)("strong",{parentName:"p"},"\u5ef6\u540e\u8ba1\u7b97\u5e76\u4e14\u7f13\u5b58\u7ed3\u679c"),", \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"lazy")," \u5305\u88c5\u5b83\uff1a"),(0,l.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'// Read the directory, only once\nlet expensiveFilesRead = lazy({\n  Js.log("Reading dir")\n  Node.Fs.readdirSync("./pages")\n})\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Fs = require("fs");\n\nvar expensiveFilesRead = {\n  LAZY_DONE: false,\n  VAL: (function () {\n    console.log("Reading dir");\n    return Fs.readdirSync("./pages");\n  })\n};\n'))),(0,l.kt)("p",null,"\u68c0\u67e5 JS \u8f93\u51fa\u6807\u7b7e\u9875\uff1a\u5c3d\u7ba1\u4f60\u5df2\u7ecf\u58f0\u660e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"expensiveFilesRead"),"\uff0c\u4f46\u5b83\u7684\u4ee3\u7801\u8fd8\u6ca1\u6709\u6267\u884c\uff01\u4f60\u53ef\u4ee5\u968f\u624b\u62ff\u7740\u5b83\uff0c\u4e0d\u7528\u62c5\u5fc3\u5b83\u8fdb\u884c\u76ee\u5f55\u8bfb\u53d6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u60f0\u6027\u503c\u662f",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u662f"),"\u4e00\u4e2a",(0,l.kt)("a",s({parentName:"p"},{href:"shared-data-types.md"}),"\u5171\u4eab\u6570\u636e\u7c7b\u578b"),"\u3002\u4e0d\u8981\u5728\u4f60\u7684 JavaScript \u4ee3\u7801\u4e2d\u4f9d\u8d56\u5b83\u7684\u8fd0\u884c\u65f6\u8868\u793a\u3002"),(0,l.kt)("h2",s({},{id:"\u6267\u884c\u60f0\u6027\u8ba1\u7b97"}),"\u6267\u884c\u60f0\u6027\u8ba1\u7b97"),(0,l.kt)("p",null,"\u8981\u5b9e\u9645\u8fd0\u884c\u60f0\u6027\u503c\u7684\u8ba1\u7b97\uff0c\u8bf7\u4f7f\u7528\u5168\u5c40\u6a21\u5757 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy.force"),"\uff1a"),(0,l.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// First call. The computation happens\nJs.log(Lazy.force(expensiveFilesRead)) // logs "Reading dir" and the directory content\n\n// Second call. Will just return the already calculated result\nJs.log(Lazy.force(expensiveFilesRead)) // logs the directory content\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"console.log(CamlinternalLazy.force(expensiveFilesRead));\n\nconsole.log(CamlinternalLazy.force(expensiveFilesRead));\n"))),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy.force")," \u65f6\uff0c\u8fdb\u884c\u4e86\u6602\u8d35\u7684\u8ba1\u7b97\uff0c\u800c\u4e14\u7ed3\u679c\u88ab",(0,l.kt)("strong",{parentName:"p"},"\u7f13\u5b58"),"\u4e86\u3002\u7b2c\u4e8c\u6b21\u8c03\u7528\u4f1a\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\u7684\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u540e\u4f60\u65e0\u6cd5\u91cd\u65b0\u89e6\u53d1\u8ba1\u7b97"),"\u3002\u786e\u4fdd\u4f60\u53ea\u5728\u8ba1\u7b97\u7ed3\u679c\u4e0d\u6539\u53d8\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u60f0\u6027\u503c\uff08\u4f8b\u5982\uff0c\u4e00\u4e2a\u6602\u8d35\u7684\u670d\u52a1\u5668\u8bf7\u6c42\uff0c\u5b83\u7684\u54cd\u5e94\u603b\u662f\u76f8\u540c\u7684\uff09\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy.force"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("a",s({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"\u6a21\u5f0f\u5339\u914d"),"\u6765\u89e6\u53d1\u8ba1\u7b97\uff1a"),(0,l.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"switch expensiveFilesRead {\n| lazy(result) => Js.log(result)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var result = CamlinternalLazy.force(expensiveFilesRead);\n"))),(0,l.kt)("p",null,"\u56e0\u4e3a\u6a21\u5f0f\u5339\u914d\u4e5f\u53ef\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u7ed1\u5b9a\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,l.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let lazy(result) = expensiveFilesRead\nJs.log(result)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var result = CamlinternalLazy.force(expensiveFilesRead);\nconsole.log(result);\n"))),(0,l.kt)("h2",s({},{id:"\u5904\u7406\u5f02\u5e38"}),"\u5904\u7406\u5f02\u5e38"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5b8c\u6574\u8d77\u89c1\uff0c\u6211\u4eec\u7684\u6587\u4ef6\u8bfb\u53d6\u4f8b\u5b50\u53ef\u80fd\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"readdirSync")," \u800c\u5f15\u53d1\u4e00\u4e2a\u5f02\u5e38\u3002\u4e0b\u9762\u662f\u5904\u7406\u65b9\u5f0f\uff1a"),(0,l.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let result = try {\n  Lazy.force(expensiveFilesRead)\n} catch {\n| Not_found => [] // empty array of files\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var result;\n\ntry {\n  result = CamlinternalLazy.force(expensiveFilesRead);\n} catch (raw_exn) {\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    result = [];\n  } else {\n    throw exn;\n  }\n}\n'))),(0,l.kt)("p",null,"\u4e0d\u8fc7\u4f60\u5e94\u8be5\u5728\u60f0\u6027\u8ba1\u7b97\u5185\u90e8\u5904\u7406\u8fd9\u4e2a\u5f02\u5e38\u3002"))}u.isMDXComponent=!0,u.frontmatter={title:"\u60f0\u6027\u503c",description:"Data type for deferred computation in ReScript",canonical:"/docs/manual/latest/lazy-values",__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/lazy-values.mdx"}},53809:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/lazy-values",function(){return t(90887)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=53809,e(e.s=n);var n}));var n=e.O();_N_E=n}]);