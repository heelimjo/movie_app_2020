(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),i=a(7),c=a(6),l=a(16),m=a.n(l),u=a(30),p=a(10),v=a(11),d=a(13),E=a(12),f=a(14),h=a(31),_=a.n(h);a(57);function b(e){var t=e.poster,a=e.alt;return r.a.createElement("img",{src:t,alt:a,title:a,className:"Movie__Poster"})}function g(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t)}var y=function(e){var t=e.id,a=e.title,n=e.synopsis,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(b,{poster:o,alt:a})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{title:a,synopsis:n,poster:o,genres:s}}},r.a.createElement("h1",null,a)),r.a.createElement("div",{className:"Movie__Genres"},s.map((function(e,t){return r.a.createElement(g,{genre:e,key:t})}))),r.a.createElement("div",{className:"Movie__Synopsis"},n.slice(0,140),"...")))},N=(a(63),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(u.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading..")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,title:e.title,synopsis:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));var j=function(){return r.a.createElement("span",null,"\ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders \uc720\ud29c\ube0c \uac15\uc758\ub97c \ubcf4\uace0 \ub530\ub77c\ud55c \uccab \ubc88\uc9f8 \ubb34\ube44 \uc571! ")},M=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);a(64);var O=function(){return r.a.createElement("div",{className:"navi"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};a(65);var k=function(){return r.a.createElement(i.a,null,r.a.createElement(O,null),"  ",r.a.createElement(c.a,{path:"/",exact:!0,component:N}),r.a.createElement(c.a,{path:"/about",component:j}),r.a.createElement(c.a,{path:"/movie/:id",component:M}))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.792244c6.chunk.js.map