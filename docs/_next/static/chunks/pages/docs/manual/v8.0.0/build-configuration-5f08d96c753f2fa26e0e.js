(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18337],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return a}})},8078:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(96156),o=t(17375),i=(t(67294),t(3905));function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l={};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",s(s(s({},l),t),{},{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",s({},{id:"configuration"}),"Configuration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," is the single, mandatory build meta file needed for bsb."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The complete configuration schema is ",(0,i.kt)("a",s({parentName:"strong"},{href:"https://bucklescript.github.io/bucklescript/docson/#build-schema.json"}),"here")),". We'll ",(0,i.kt)("em",{parentName:"p"},"non-exhaustively")," highlight the important parts in prose here."),(0,i.kt)("h2",s({},{id:"name-namespace"}),"name, namespace"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name"),' is the name of the library, used as its "namespace". You can activate namespacing through ',(0,i.kt)("inlineCode",{parentName:"p"},'"namespace": true')," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),". Namespacing is almost ",(0,i.kt)("strong",{parentName:"p"},"mandatory"),"; we haven't turned it on by default yet to preserve backward-compatibility."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation"),": by default, your files, once used as a third-party dependency, are available globally to the consumer. E.g. if you have an ",(0,i.kt)("inlineCode",{parentName:"p"},"Util.re")," and the consumer also has a file of the same name, they will clash. Turning on ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," avoids this by wrapping all your own project's files into an extra module layer; instead of a global ",(0,i.kt)("inlineCode",{parentName:"p"},"Util")," module, the consumer will see you as ",(0,i.kt)("inlineCode",{parentName:"p"},"MyProject.Util"),". ",(0,i.kt)("strong",{parentName:"p"},"The namespacing affects your consumers, not yourself"),"."),(0,i.kt)("p",null,'Aka, in Bsb, "namespace" is just a fancy term for an auto-generated module that wraps all your project\'s files (efficiently and correctly, of course!) for third-party consumption.'),(0,i.kt)("p",null,"We don't do folder-level namespacing for your own project; all your own file names must be unique. This is a constraint that enables several features such as fast search and easier project reorganization."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": the ",(0,i.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," should be the same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", to avoid confusing corner-cases. However, this means that you can't use a camelCased names such as ",(0,i.kt)("inlineCode",{parentName:"p"},"MyProject"),", since ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and npm forbid you to do so (some file systems are case-insensitive). To have the namespace/module as ",(0,i.kt)("inlineCode",{parentName:"p"},"MyProject"),", write ",(0,i.kt)("inlineCode",{parentName:"p"},'"name": "my-project"'),". Bsb will turn that into the camelCased name correctly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note on custom namespacing"),": if for some reason, you need a namespace that is different from what your ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," will produce, you can directly send a string to the ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," option. For example, if your package is a binding named ",(0,i.kt)("inlineCode",{parentName:"p"},"bs-some-thing"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},'"namespace": "some-thing"')," to get ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeThing")," namespace instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"BsSomeThing"),"."),(0,i.kt)("h2",s({},{id:"sources"}),"sources"),(0,i.kt)("p",null,"Your source files need to be specified explicitly (we don't want to accidentally drill down into some unrelated directories). Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "sources": ["src", "examples"]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "sources": {\n    "dir": "src",\n    "subdirs": ["page"]\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "sources": [\n    "examples",\n    {\n      "dir": "src",\n      "subdirs": true // recursively builds every subdirectory\n    }\n  ]\n}\n')),(0,i.kt)("p",null,'You can mark your directories as dev-only (for e.g. tests). These won\'t be built and exposed to third-parties, or even to other "dev" directories in the same project:'),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "sources" : {\n    "dir" : "test",\n    "type" : "dev"\n  }\n}\n')),(0,i.kt)("h2",s({},{id:"bs-dependencies-bs-dev-dependencies"}),"bs-dependencies, bs-dev-dependencies"),(0,i.kt)("p",null,"List of ReScript dependencies. Just like ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"'s dependencies, they'll be searched in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"Note that only sources marked with ",(0,i.kt)("inlineCode",{parentName:"p"},'"type":"dev"')," will be able to resolve modules from ",(0,i.kt)("inlineCode",{parentName:"p"},"bs-dev-dependencies"),"."),(0,i.kt)("h2",s({},{id:"reason-refmt-old"}),"reason, refmt (old)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reason")," config is enabled by default. To turn on JSX for ",(0,i.kt)("a",s({parentName:"p"},{href:"https://reasonml.github.io/reason-react/en/"}),"ReasonReact"),", specify:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "reason": {"react-jsx": 3},\n  "refmt": 3\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"refmt")," config ",(0,i.kt)("strong",{parentName:"p"},"should be explicitly specified")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("h2",s({},{id:"js-post-build"}),"js-post-build"),(0,i.kt)("p",null,"Hook that's invoked every time a file is recompiled. Good for JS build system interop, but please use it ",(0,i.kt)("strong",{parentName:"p"},"sparingly"),". Calling your custom command for every recompiled file slows down your build and worsens the building experience for even third-party users of your lib."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "js-post-build": {\n    "cmd": "/path/to/node ../../postProcessTheFile.js"\n  }\n}\n')),(0,i.kt)("p",null,"Note that the command's path resolution is done through the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/myCommand")," is resolved into ",(0,i.kt)("inlineCode",{parentName:"li"},"/myCommand")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myCommand/")," is resolved into ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/myCommand")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./myCommand")," is resolved into ",(0,i.kt)("inlineCode",{parentName:"li"},"myProjectRoot/myCommand")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myCommand")," is just called as ",(0,i.kt)("inlineCode",{parentName:"li"},"myCommand"),". But note that Bsb doesn't read into your environment, so if you put ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),", it won't find it unless you specify an absolute path. Alternatively, point to a script that has the header ",(0,i.kt)("inlineCode",{parentName:"li"},"#!/usr/local/bin/node"),".")),(0,i.kt)("p",null,"The command itself is called from inside ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/bs"),"."),(0,i.kt)("h2",s({},{id:"package-specs"}),"package-specs"),(0,i.kt)("p",null,"Output to either CommonJS (the default) or ES6 modules. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "package-specs": {\n    "module": "commonjs",\n    "in-source": true\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"module": "es6-global"')," resolves ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," using relative paths. Good for development-time usage of ES6 in conjunction with browsers like Safari and Firefox that support ES6 modules today. ",(0,i.kt)("strong",{parentName:"li"},"No more dev-time bundling"),"!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"in-source": true')," generates output alongside source files. If you omit it, it'll generate the artifacts into ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/js"),". The output directory is not configurable otherwise.")),(0,i.kt)("p",null,"This configuration only applies to you, when you develop the project. When the project is used as a third-party library, the consumer's own ",(0,i.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," ",(0,i.kt)("inlineCode",{parentName:"p"},"package-specs")," overrides the configuration here, logically."),(0,i.kt)("h2",s({},{id:"suffix"}),"suffix"),(0,i.kt)("p",null,"Either ",(0,i.kt)("inlineCode",{parentName:"p"},'".js"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'".bs.js"'),". Strongly prefer the latter."),(0,i.kt)("h3",s({},{id:"design-decisions"}),"Design Decisions"),(0,i.kt)("p",null,"Generating JS files with the ",(0,i.kt)("inlineCode",{parentName:"p"},".bs.js")," suffix means that, on the JS side, you can do ",(0,i.kt)("inlineCode",{parentName:"p"},"const myReScriptFile = require('./theFile.bs')"),". The benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's immediately clear that we're dealing with a generated JS file here."),(0,i.kt)("li",{parentName:"ul"},"It avoids clashes with a potential ",(0,i.kt)("inlineCode",{parentName:"li"},"theFile.js")," file in the same folder."),(0,i.kt)("li",{parentName:"ul"},"It avoids the need of using a build system loader for ReScript files. This + in-source build means integrating a ReScript project into your pure JS codebase ",(0,i.kt)("strong",{parentName:"li"},"basically doesn't touch anything in your build pipeline at all"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},".bs.js")," suffix ",(0,i.kt)("a",s({parentName:"li"},{href:"build-overview.md#tips-tricks"}),"lets bsb track JS artifacts much better"),".")),(0,i.kt)("h2",s({},{id:"warnings"}),"warnings"),(0,i.kt)("p",null,"Selectively turn on/off certain warnings and/or turn them into hard errors. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "warnings": {\n    "number": "-44-102",\n    "error": "+5"\n  }\n}\n')),(0,i.kt)("p",null,"Turn off warning ",(0,i.kt)("inlineCode",{parentName:"p"},"44")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"102")," (polymorphic comparison). Turn warning ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," (partial application whose result has function type and is ignored) into a hard error."),(0,i.kt)("p",null,"The warning number are shown in the build output when they're triggered. The complete list is ",(0,i.kt)("a",s({parentName:"p"},{href:"https://caml.inria.fr/pub/docs/manual-ocaml/comp.html#sec281"}),"here"),", a little bit below. ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and up are ReScript-specific."),(0,i.kt)("h2",s({},{id:"bsc-flags"}),"bsc-flags"),(0,i.kt)("p",null,"Extra flags to pass to the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"bsc")," call. Notably: ",(0,i.kt)("inlineCode",{parentName:"p"},'["-bs-super-errors"]')," for turning on cleaner error output. No need to pass this flag for a new ReScript project; it's enabled by default."),(0,i.kt)("h2",s({},{id:"environment-variables"}),"Environment Variables"),(0,i.kt)("p",null,"We heavily disrecommend the usage of environment variables, but for certain cases, they're justified."),(0,i.kt)("h3",s({},{id:"error-output-coloring-ninja_ansi_forced"}),"Error Output Coloring: ",(0,i.kt)("inlineCode",{parentName:"h3"},"NINJA_ANSI_FORCED")),(0,i.kt)("p",null,"This is mostly for other programmatic usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," where outputting colors is not desired."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"NINJA_ANSI_FORCED")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," produces color.\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"NINJA_ANSI_FORCED")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," doesn't produce color.\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"NINJA_ANSI_FORCED")," is not set: ",(0,i.kt)("inlineCode",{parentName:"p"},"bsb")," might or might not produce color, depending on a smart detection of where it's outputted."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that bsc, the barebone compiler, will always be passed ",(0,i.kt)("inlineCode",{parentName:"p"},"-color always"),". See more details in ",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/rescript-lang/rescript-compiler/issues/2984#issuecomment-410669163"}),"this issue"),".")),(0,i.kt)("h3",s({},{id:"bs_vscode-error-output-adapted-for-vscode"}),"BS_VSCODE error output adapted for VSCODE"),(0,i.kt)("p",null,"If you run bsb under VSCODE task runner like ",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/rescript-lang/rescript-compiler/blob/master/jscomp/bsb/templates/basic-reason/.vscode/tasks.json#L6"}),"this"),", it is recommended to have BS_VSCODE set"))}p.isMDXComponent=!0,p.frontmatter={title:"Build System Configuration",description:"Details about the configuration of the ReScript build system (bsconfig.json)",canonical:"/docs/manual/latest/build-configuration",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/build-configuration.mdx"}},36922:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/build-configuration",function(){return t(8078)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=36922,e(e.s=n);var n}));var n=e.O();_N_E=n}]);