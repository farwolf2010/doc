(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(a,t,e){a.exports=e.p+"assets/img/envmac.df2f393b.png"},206:function(a,t,e){a.exports=e.p+"assets/img/envwin.aec480b4.png"},207:function(a,t,e){a.exports=e.p+"assets/img/pod.a686baff.png"},218:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),r("h2",{attrs:{id:"自动搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" 自动搭建")]),a._v(" "),r("blockquote",[r("p",[a._v("安装node.js。")])]),a._v(" "),r("p",[a._v("安装nodejs "),r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网的安装包"),r("OutboundLink")],1),a._v("。")]),a._v(" "),r("p",[a._v("依次执行以下命令,然后按照提示操作")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" weexplus -g\nweexplus "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v("\n")])])]),r("p",[a._v("最终跑完看到以下界面\nmac:\n"),r("img",{attrs:{src:e(205),alt:""}})]),a._v(" "),r("p",[a._v("win：\n"),r("img",{attrs:{src:e(206),alt:""}}),a._v("\n如果自动安装报错，请手动搭建")]),a._v(" "),r("h2",{attrs:{id:"手动搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手动搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" 手动搭建")]),a._v(" "),r("p",[a._v("如果自动搭建不成功才需要手动搭建")]),a._v(" "),r("h3",{attrs:{id:"前端环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端环境")]),a._v(" "),r("blockquote",[r("p",[a._v("安装node.js。")])]),a._v(" "),r("p",[a._v("最简单的安装方法就是直接安装"),r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网的安装包"),r("OutboundLink")],1),a._v("，至于其它的使用包管理或者源码安装的方法请自行搜索。")]),a._v(" "),r("blockquote",[r("p",[a._v("安装weex基础环境。")])]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" weex-toolkit -g\n"),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" weex-builder -g\n")])])]),r("blockquote",[r("p",[a._v("安装weexplus-cli")])]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" weexplus -g\n")])])]),r("h3",{attrs:{id:"原生环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原生环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 原生环境")]),a._v(" "),r("blockquote",[r("p",[a._v("如果暂时不打包可以先不配置原生环境，可以暂时下载开发包调试看效果")])]),a._v(" "),r("h4",{attrs:{id:"android环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" android环境搭建")]),a._v(" "),r("ol",[r("li",[a._v("安装jdk "),r("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载地址"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("下载并安装"),r("a",{attrs:{href:"https://developer.android.google.cn/studio/#downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("android studio"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("配置java环境变量 "),r("a",{attrs:{href:"https://www.cnblogs.com/xch-yang/p/7629351.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("windows 配置"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://www.jianshu.com/p/7d6c056c04e6",target:"_blank",rel:"noopener noreferrer"}},[a._v("mac 配置"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("配置adb环境变量\n"),r("a",{attrs:{href:"https://blog.csdn.net/shengmer/article/details/79027828",target:"_blank",rel:"noopener noreferrer"}},[a._v("windows 配置adb"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://blog.csdn.net/qq_26287435/article/details/81513649",target:"_blank",rel:"noopener noreferrer"}},[a._v("mac 配置adb"),r("OutboundLink")],1)])]),a._v(" "),r("h4",{attrs:{id:"ios环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ios环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" ios环境搭建")]),a._v(" "),r("p",[a._v("ios相对简单")]),a._v(" "),r("ol",[r("li",[a._v("下载XCode,商店下载安装即可\n"),r("img",{attrs:{src:"https://images2018.cnblogs.com/blog/652536/201805/652536-20180525180714610-1333822957.png",alt:""}})]),a._v(" "),r("li",[a._v("安装"),r("a",{attrs:{href:"https://www.jianshu.com/p/ab6411a05bc2",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cocopod"),r("OutboundLink")],1),a._v("\n打开控制台输入")])]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("pod search \n")])])]),r("p",[a._v("出现如下图说明pod环境已经好了")]),a._v(" "),r("p",[r("img",{attrs:{src:e(207),alt:""}})])])},[],!1,null,null,null);t.default=s.exports}}]);