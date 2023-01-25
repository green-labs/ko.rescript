(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85242],{17375:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})},41289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(17375),r=n(96156),a=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",l({},t))}},s=p("Intro"),d=p("UrlBox"),u={};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",l(l(l({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"blogpost-guide"}),"Blogpost Guide"),(0,a.kt)(s,{mdxType:"Intro"},"Here you can find all the information needed to write and publish a new blog post on rescript-lang.org."),(0,a.kt)("h2",l({},{id:"requirements"}),"Requirements"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",l({parentName:"p"},{href:"https://github.com/reason-association/rescript-lang.org"}),"rescript-lang.org repo")," and follow the README instructions to run the local development server."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("a",l({parentName:"p"},{href:"/blog"}),"localhost:3000/blog")," page to see the blog page."),(0,a.kt)("h2",l({},{id:"create-a-new-file"}),"Create a new file"),(0,a.kt)("p",null,"Blogposts are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"./_blogposts")," directory. File name starts with the date to maintain a natural sort order:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"_blogposts/YYYY-MM-DD-[title].mdx\n")),(0,a.kt)("p",null,"For example, let's create a new file:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"touch _blogposts/2020-01-30-my-new-blog-post.mdx\n")),(0,a.kt)("p",null,"Refresh your browser within ",(0,a.kt)("a",l({parentName:"p"},{href:"/blog"}),"/blog"),". You should now see a warning for some malformed frontmatter data. Let's fix this!"),(0,a.kt)("h2",l({},{id:"add-frontmatter-data"}),"Add Frontmatter Data"),(0,a.kt)("p",null,'Each blogpost requires a certain set of meta information (so called\n"frontmatter"), otherwise it can\'t be displayed in the blog.'),(0,a.kt)("p",null,"Frontmatter is put ",(0,a.kt)("strong",{parentName:"p"},"on the top of your file"),". Here is a fully working example\nof all available attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'---\nauthor: hongbo\nco-authors:\n  - chenglou\n  - ryyppy\ndate: "2017-10-01"\npreviewImg:\nbadge: release\ntitle: Bloomberg announces BuckleScript 1.0\ndescription: |\n  some multiline\n  description\n---\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"author"),": An author alias as defined in ",(0,a.kt)("inlineCode",{parentName:"li"},"./data/blog_authors.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"co-authors"),": A list of co-author aliases (same aliases allowed as in the ",(0,a.kt)("inlineCode",{parentName:"li"},"author")," field)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date"),": A ",(0,a.kt)("strong",{parentName:"li"},"string")," date (always make sure to use the ",(0,a.kt)("inlineCode",{parentName:"li"},'"'),", otherwise yaml\nwill parse it as a ",(0,a.kt)("inlineCode",{parentName:"li"},"date"),"). The date format is ",(0,a.kt)("inlineCode",{parentName:"li"},'"YYYY-MM-DD hh:mm"'),". All blog\nposts are ordered ascending by date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"previewImg"),": The image shown in the blog overview, which will also be used\nas a link preview image"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"badge"),": An additional badge on the blog, on top of the preview image.\nAvailable values are ",(0,a.kt)("inlineCode",{parentName:"li"},"release"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"testing"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"preview"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"roadmap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title"),": The title of the article (h1 headline)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description"),": A description, which will be shown in the Featured blog post\nin the blog overview, and also as an introductory text in the blog article")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"For Maintainers:")," The implementation for the frontmatter logic can be found in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"common/BlogFrontmatter.res")," module.")),(0,a.kt)("h3",l({},{id:"writing-markdown-content"}),"Writing Markdown Content"),(0,a.kt)("p",null,"You can use all the markdown features available to this documentation platform."),(0,a.kt)(d,{text:"Markdown Guide",href:"/markdown-guide",mdxType:"UrlBox"},(0,a.kt)("p",null,"Check out our markdown guide to get an overview\nover all available UI components.")),(0,a.kt)("h2",l({},{id:"special-_blogpostsarchive-directory"}),"Special ",(0,a.kt)("inlineCode",{parentName:"h2"},"_blogposts/archive")," directory"),(0,a.kt)("p",null,"All blog posts that are put into the ",(0,a.kt)("inlineCode",{parentName:"p"},"_blogposts/archive")," directory will be flagged as ",(0,a.kt)("em",{parentName:"p"},"archived")," and not show up on the blog overview page."),(0,a.kt)("p",null,"We keep this directory around to hide old blog posts."))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/blogpost-guide.mdx"}},82972:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogpost-guide",function(){return n(41289)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=82972,e(e.s=t);var t}));var t=e.O();_N_E=t}]);