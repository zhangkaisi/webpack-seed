(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{123:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){__p+="\x3c!-- ejs模板测试 --\x3e\n";for(var i=0;i<index.length;i++)__p+='\n  <li class="ejs-dynamic-item">\n    <i class="'+(null==(__t=index[i].icon)?"":__t)+'"></i><br />\n    <a href="'+(null==(__t=index[i].link)?"":__t)+'">'+(null==(__t=index[i].key)?"":__t)+"</a>\n  </li>\n"}return __p}},299:function(n,i,t){"use strict";t.r(i);t(47),t(300);var o=t(59),e=t(10),l=t(123),c=t.n(l);Object(e.a)(".index-title").html(Object(o.b)());Object(e.a)(".ejs-dynamic-inject").html(c()({index:[{link:"html/test-demo.html",key:"测试页面",icon:"iconfont icon-rocket"},{link:"html/fonts-demo.html",key:"内置图标库",icon:"iconfont icon-Dollar"},{link:"html/login.html",key:"登录页面",icon:"iconfont icon-login"},{link:"html/news-tech.html",key:"多目录测试",icon:"iconfont icon-edit"}]}))},300:function(n,i,t){}},[[299,2,0,1]]]);