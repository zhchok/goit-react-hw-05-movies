"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{1687:function(e,t,n){n.d(t,{TP:function(){return f},XT:function(){return l},bV:function(){return i},tx:function(){return d},z5:function(){return o},zv:function(){return p}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="https://image.tmdb.org/t/p/w200/",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/all/day?api_key=97f9d78f20e5fcb9506a240d7e33de31");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"?api_key=97f9d78f20e5fcb9506a240d7e33de31&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"/credits?api_key=97f9d78f20e5fcb9506a240d7e33de31&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"/reviews?api_key=97f9d78f20e5fcb9506a240d7e33de31&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=97f9d78f20e5fcb9506a240d7e33de31&query=".concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},593:function(e,t,n){n.r(t);var r=n(885),a=n(1687),u=n(9924),c=n(2791),s=n(6871),i=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),o=n[0],f=n[1];return(0,c.useEffect)((function(){(0,a.zv)(e).then((function(e){f(e)}))}),[e]),(0,i.jsx)(u.x,{children:(0,i.jsx)("ul",{children:o.map((function(e){return(0,i.jsxs)("li",{children:[e.profile_path?(0,i.jsx)("img",{width:"120",src:a.bV+e.profile_path,alt:"Actor"}):(0,i.jsx)("img",{width:"120",src:"https://cdn-icons-png.flaticon.com/512/25/25333.png",alt:"Actor"}),(0,i.jsxs)("p",{children:[" ",e.name]}),(0,i.jsxs)("span",{children:["Character: ",e.character]})]},e.cast_id)}))})})}}}]);
//# sourceMappingURL=593.ddd0bd66.chunk.js.map