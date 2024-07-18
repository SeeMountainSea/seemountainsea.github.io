(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{408:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",[a("p",[t._v("山海DBDoc-数据库模型文档生成利器（支持国产信创）")]),t._v(" "),a("p",[t._v("ShanHaiDBDoc-A Swiss Army Knife for generating data model documents (supports exporting Word/Excel)\n  ")]),a("p",[a("a",{attrs:{href:"https://github.com/SeeMountainSea/shanhai-dbdoc-maven-plugin/releases/latest"}},[a("img",{attrs:{alt:"GitHub release (latest by date)",src:"https://img.shields.io/github/v/release/SeeMountainSea/shanhai-dbdoc-maven-plugin"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/SeeMountainSea/shanhai-dbdoc-maven-plugin/issues"}},[a("img",{attrs:{alt:"GitHub closed issues",src:"https://img.shields.io/github/issues/SeeMountainSea/shanhai-dbdoc-maven-plugin?color=009688"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/topics/java"}},[a("img",{attrs:{alt:"GitHub top language",src:"https://img.shields.io/github/languages/top/SeeMountainSea/shanhai-dbdoc-maven-plugin?color=eb8031"}})]),t._v(" "),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/SeeMountainSea/shanhai-dbdoc-maven-plugin/find/master"}},[a("img",{attrs:{alt:"GitHub Code Size",src:"https://img.shields.io/github/languages/code-size/SeeMountainSea/shanhai-dbdoc-maven-plugin?color=795548"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/SeeMountainSea/shanhai-dbdoc-maven-plugin/find/master"}},[a("img",{attrs:{alt:"GitHub Code Lines",src:"https://img.shields.io/tokei/lines/github/SeeMountainSea/shanhai-dbdoc-maven-plugin?color=37474F"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/SeeMountainSea/shanhai-dbdoc-maven-plugin/blob/master/LICENSE"}},[a("img",{attrs:{alt:"GitHub License",src:"https://img.shields.io/github/license/SeeMountainSea/shanhai-dbdoc-maven-plugin?color=534BAE"}})])])]),t._v(" "),a("h2",{attrs:{id:"组件能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件能力"}},[t._v("#")]),t._v(" 组件能力")]),t._v(" "),a("ul",[a("li",[t._v("支持全类型数据库导出Word版本数据模型文档")]),t._v(" "),a("li",[t._v("支持全类型数据库导出Excel版本数据模型文档")]),t._v(" "),a("li",[t._v("原生支持国产信创数据库（只要你有数据库驱动，理论上兼容后续各类数据库）")]),t._v(" "),a("li",[t._v("导出模型文档时建议使用单库进行（例如oracle）")]),t._v(" "),a("li",[t._v("如果有更多Ideal,欢迎大家提PR")])]),t._v(" "),a("h2",{attrs:{id:"_1-引入插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入插件"}},[t._v("#")]),t._v(" 1.引入插件")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.wangshanhai.dbdoc"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dbdoc-maven-plugin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jdbcUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jdbcUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--自己项目配置的JDBC URL--\x3e")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据库用户名--\x3e")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据库密码--\x3e")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxxx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据库驱动定义--\x3e")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("driverFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/db/mysql.jar"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("driverFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据库驱动文件位置--\x3e")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("outPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/db/doc/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("outPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据模型导出目录--\x3e")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-数据模型导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据模型导出"}},[t._v("#")]),t._v(" 2.数据模型导出")]),t._v(" "),a("p",[t._v("如下图所示：\n")]),a("div",{attrs:{align:"left"}},[a("p",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/dbdoc-examples-00.png",alt:"examples-00"}})])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_3-数据模型导出预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据模型导出预览"}},[t._v("#")]),t._v(" 3.数据模型导出预览")]),t._v(" "),a("p",[t._v("Word如下图所示：\n")]),a("div",{attrs:{align:"left"}},[a("p",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/dbdoc-examples-02.png",alt:"examples-00"}})])]),a("p"),t._v(" "),a("p",[t._v("Excel如下图所示：\n")]),a("div",{attrs:{align:"left"}},[a("p",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/dbdoc-examples-01.png",alt:"examples-00"}})])]),a("p")])}),[],!1,null,null,null);a.default=e.exports}}]);