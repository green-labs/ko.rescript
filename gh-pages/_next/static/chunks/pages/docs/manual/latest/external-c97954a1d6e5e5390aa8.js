(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9331],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},76334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,p=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",l({},e))}),u={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",l(l(l({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",l({},{id:"external-bind-to-any-js-library"}),"External (Bind to Any JS Library)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"external")," is the primary ReScript features for bringing in and using JavaScript values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"external")," is like a let binding, but:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The right side of ",(0,o.kt)("inlineCode",{parentName:"li"},"=")," isn't a value; it's the name of the JS value you're referring to."),(0,o.kt)("li",{parentName:"ul"},"The type for the binding is mandatory, since we need to know what the type of that JS value is."),(0,o.kt)("li",{parentName:"ul"},"Can only exist at the top level of a file or module.")),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external setTimeout: (unit => unit, int) => float = "setTimeout"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"There are several kinds of ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),"s, differentiated and/or augmented through the ",(0,o.kt)("a",l({parentName:"p"},{href:"attribute.md"}),"attribute")," they carry. This page deals with the general, shared mechanism behind most ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),"s. The different are documented in their respective pages later. A few notable ones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@val"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"@scope"),": ",(0,o.kt)("a",l({parentName:"li"},{href:"bind-to-global-js-values"}),"bind to global JS values"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@module"),": ",(0,o.kt)("a",l({parentName:"li"},{href:"import-from-export-to-js"}),"bind to JS imported/exported values"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@send"),": ",(0,o.kt)("a",l({parentName:"li"},{href:"bind-to-js-function"}),"bind to JS methods"),".")),(0,o.kt)("p",null,"You can also use our ",(0,o.kt)("a",l({parentName:"p"},{href:"/syntax-lookup"}),"Syntax Lookup")," tool to find them."),(0,o.kt)("p",null,"Related: see also our ",(0,o.kt)("a",l({parentName:"p"},{href:"interop-cheatsheet#list-of-decorators"}),"list of external decorators"),"."),(0,o.kt)("h2",l({},{id:"usage"}),"Usage"),(0,o.kt)("p",null,"Once declared, you can use an ",(0,o.kt)("inlineCode",{parentName:"p"},"external")," as a normal value, just like a let binding."),(0,o.kt)("h2",l({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"external")," + ReScript objects are a wonderful combination for quick prototyping. Check the JS output tab:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// The type of document is just some random type \'a\n// that we won\'t bother to specify\n@val external document: \'a = "document"\n\n// call a method\ndocument["addEventListener"](."mouseup", _event => {\n  Js.log("clicked!")\n})\n\n// get a property\nlet loc = document["location"]\n\n// set a property\ndocument["location"]["href"] = "rescript-lang.org"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-js"}),'document.addEventListener("mouseup", function(_event) {\n  console.log("clicked!");\n});\n\nvar loc = document.location;\n\ndocument.location.href = "rescript-lang.org";\n'))),(0,o.kt)("p",null,"We've specified ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"'s type as ",(0,o.kt)("inlineCode",{parentName:"p"},"'a"),", aka a placeholder type that's polymorphic. Any value can be passed there, so you're not getting much type safety (except the inferences at various call sites). However, this is excellent for quickly getting started using a JavaScript library in ReScript ",(0,o.kt)("strong",{parentName:"p"},"without needing the equivalent of a repository of typed bindings")," like TypeScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"DefinitelyTyped")," repo."),(0,o.kt)("p",null,"However, if you want to more rigidly bind to the JavaScript library you want, keep reading the next few interop pages."),(0,o.kt)("h2",l({},{id:"performance--output-readability"}),"Performance & Output Readability"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"external"),"s declarations are inlined into their callers during compilation, ",(0,o.kt)("strong",{parentName:"p"},"and completely disappear from the JS output"),". This means any time you use one, you can be sure that you're not incurring extra JavaScript <-> ReScript conversion cost."),(0,o.kt)("p",null,"Additionally, no extra ReScript-specific runtime is better for output readability."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," do also use ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),"s and the ",(0,o.kt)("inlineCode",{parentName:"p"},"@blabla")," attributes in the interface files. Otherwise the inlining won't happen.")),(0,o.kt)("h2",l({},{id:"design-decisions"}),"Design Decisions"),(0,o.kt)("p",null,"ReScript takes interoperating with existing code very seriously. Our type system has very strong guarantees. However, such strong feature also means that, without a great interop system, it'd be very hard to gradually convert a codebase over to ReScript. Fortunately, our interop are comprehensive and cooperate very well with most existing JavaScript code."),(0,o.kt)("p",null,"The combination of a sound type system + great interop means that we get the benefits of a traditional gradual type system regarding incremental codebase coverage & conversion, without the downside of such gradual type system: complex features to support existing patterns, slow analysis, diminishing return in terms of type coverage, etc."))}c.isMDXComponent=!0,c.frontmatter={title:"External (Bind to Any JS Library)",description:"The external keyword",canonical:"/docs/manual/latest/external",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/external.mdx"}},22066:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/external",function(){return n(76334)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=22066,e(e.s=t);var t}));var t=e.O();_N_E=t}]);