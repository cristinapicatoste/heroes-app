(this["webpackJsonp06-heroes-app"]=this["webpackJsonp06-heroes-app"]||[]).push([[0],{16:function(e,r,a){},30:function(e,r,a){},31:function(e,r,a){},32:function(e,r,a){},50:function(e,r,a){},51:function(e,r,a){},52:function(e,r,a){"use strict";a.r(r);var t=a(0),c=a(1),n=a.n(c),s=a(22),i=a.n(s),o=(a(30),a(10)),l=(a(31),"/marvel"),h="/search",u=a(5),j=a(2),d=Object(c.createContext)(),p="[auth] login",b="[auth] logout",m=function(e){var r=e.history,a=Object(c.useContext)(d).dispatch;return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)("button",{className:"blue",onClick:function(){var e=localStorage.getItem("lastPath")||"/";a({type:p,payload:{name:"Cristina"}}),r.replace(e)},children:"Login"})]})},O=(a(32),function(){var e=Object(c.useContext)(d),r=e.user.name,a=e.dispatch,n=Object(j.g)();return Object(t.jsxs)("nav",{className:"nav",children:[Object(t.jsxs)("div",{className:"nav-left",children:[Object(t.jsx)(u.c,{exact:!0,activeClassName:"activeNav",to:"/",children:"Home"}),Object(t.jsx)(u.c,{exact:!0,activeClassName:"activeNav",to:l,children:"Marvel"}),Object(t.jsx)(u.c,{exact:!0,activeClassName:"activeNav",to:"/dc",children:"DC"}),Object(t.jsx)(u.c,{exact:!0,activeClassName:"activeNav",to:h,children:"Search"})]}),Object(t.jsxs)("div",{className:"nav-right",children:[Object(t.jsx)("p",{className:"text",children:r}),Object(t.jsx)("span",{onClick:function(){a({type:b}),n.replace("/login")},className:"logout",children:"Logout"})]})]})}),v=a(3),x=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],f=(a(16),function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),n=e.first_appearance;e.characters;return Object(t.jsxs)("div",{className:"card-wrap",children:[Object(t.jsx)("div",{className:"card-img",children:Object(t.jsx)("img",{src:"./assets/".concat(r,".jpg"),alt:a,className:"img"})}),Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h3",{children:a}),Object(t.jsx)("p",{children:c}),Object(t.jsx)("pre",{children:n}),Object(t.jsx)(u.b,{to:"./heroes/".concat(r),children:"More..."})]})]})}),g=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" not valid'));return x.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(t.jsx)("div",{className:"card-list",children:a.map((function(e){return Object(t.jsx)(f,Object(v.a)({},e),e.id)}))})},C=function(){return Object(t.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(t.jsx)("h1",{children:"MARVEL HEROES"}),Object(t.jsx)(g,{publisher:"Marvel Comics"})]})},_=function(){return Object(t.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(t.jsx)("h1",{children:"DC HEROES"}),Object(t.jsx)(g,{publisher:"DC Comics"})]})},y=function(e){var r=e.history,a=Object(j.i)().heroeId,n=Object(c.useMemo)((function(){return e=a,x.find((function(r){return r.id===e}));var e}),[a]);if(!n)return Object(t.jsx)(j.a,{to:"/"});var s=n.superhero,i=n.publisher,o=n.alter_ego,l=n.first_appearance,h=n.characters;return Object(t.jsxs)("div",{className:"hero-wrap",children:[Object(t.jsx)("img",{src:"../assets/".concat(a,".jpg"),className:"img-thumb animate__animated animate__zoomIn",alt:s}),Object(t.jsxs)("div",{className:"text-wrap",children:[Object(t.jsx)("h1",{children:s}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:["Alter ego: ",o]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("li",{children:["Publisher: ",i]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("li",{children:["First appearance: ",l]})]}),o!==h&&Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Characters"}),Object(t.jsx)("p",{children:h})]}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{className:"blue mg-top-30",onClick:function(){r.length<=2?r.push("/"):r.goBack()},children:"Return"})})]})]})},M=function(){return Object(t.jsx)("div",{children:Object(t.jsx)("h1",{children:"Logout"})})},N=a(24),S=a.n(N),D=a(12),k=(a(50),function(e){var r=e.history,a=Object(j.h)(),n=S.a.parse(a.search).q,s=void 0===n?"":n,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(o.a)(r,2),t=a[0],n=a[1];return[t,function(e){var r=e.target;n(Object(v.a)(Object(v.a)({},t),{},Object(D.a)({},r.name,r.value)))},function(){n(e)}]}({searchText:""}),l=Object(o.a)(i,2),h=l[0],u=l[1],d=h.searchText,p=Object(c.useMemo)((function(){return""===(e=s)?[]:(e=e.toLocaleLowerCase(),x.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})));var e}),[s]),b=function(e){r.push("?q=".concat(d))};return Object(t.jsxs)("div",{className:"search-wrap animate__animated animate__fadeIn",children:[Object(t.jsxs)("div",{className:"search",children:[Object(t.jsx)("h1",{children:"Search"}),Object(t.jsx)("input",{type:"text",name:"searchText",value:d,placeholder:"Find your hero",className:"form",onChange:u,onKeyUp:function(e){"Enter"===e.key&&b()}}),Object(t.jsx)("button",{className:"blue mg-top-30",onClick:b,children:"Search"})]}),Object(t.jsxs)("div",{className:"result",children:[Object(t.jsx)("h1",{children:"Results"}),""!==s&&0===p.length&&Object(t.jsxs)("div",{className:"",children:["There's no a hero with ",s]}),p.map((function(e){return Object(t.jsx)(f,Object(v.a)({},e),e.id)}))]})]})}),w=(a(51),function(){for(var e=[],r=0;r<x.length;r++){var a=Math.floor(Math.random()*x.length);e.push(x[a])}return Object(t.jsxs)("div",{className:"home-wrap animate__animated animate__fadeIn",children:[Object(t.jsx)("h1",{children:"HEROES APP"}),x.map((function(e){return Object(t.jsx)(f,Object(v.a)({},e),e.id)}))]})}),A=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(O,{}),Object(t.jsx)("div",{children:Object(t.jsxs)(j.d,{children:[Object(t.jsx)(j.b,{exact:!0,path:"/",component:w}),Object(t.jsx)(j.b,{exact:!0,path:l,component:C}),Object(t.jsx)(j.b,{exact:!0,path:"/dc",component:_}),Object(t.jsx)(j.b,{exact:!0,path:"/heroes/:heroeId",component:y}),Object(t.jsx)(j.b,{exact:!0,path:"/logout",component:M}),Object(t.jsx)(j.b,{exact:!0,path:h,component:k}),Object(t.jsx)(j.a,{to:"/marvel"})]})})]})},B=a(13),F=function(e){var r=e.isAuth,a=e.component,c=Object(B.a)(e,["isAuth","component"]);return console.log(c.location.pathname),localStorage.setItem("lastPath",c.location.pathname),Object(t.jsx)(j.b,Object(v.a)(Object(v.a)({},c),{},{component:function(e){return r?Object(t.jsx)(a,Object(v.a)({},e)):Object(t.jsx)(j.a,{to:"/login"})}}))},T=function(e){var r=e.isAuth,a=e.component,c=Object(B.a)(e,["isAuth","component"]);return Object(t.jsx)(j.b,Object(v.a)(Object(v.a)({},c),{},{component:function(e){return r?Object(t.jsx)(j.a,{to:"/"}):Object(t.jsx)(a,Object(v.a)({},e))}}))},I=function(){var e=Object(c.useContext)(d).user;return Object(t.jsx)(u.a,{children:Object(t.jsxs)(j.d,{children:[Object(t.jsx)(T,{exact:!0,path:"/login",component:m,isAuth:e.logged}),Object(t.jsx)(F,{path:"/",component:A,isAuth:e.logged})]})})},J=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(v.a)(Object(v.a)({},e.payload),{},{logged:!0});case b:return{logged:!1};default:return}},P=function(){return JSON.parse(localStorage.getItem("user"))||{loggeg:!1}};var R=function(){var e=Object(c.useReducer)(J,{},P),r=Object(o.a)(e,2),a=r[0],n=r[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(d.Provider,{value:{user:a,dispatch:n},children:Object(t.jsx)(I,{})})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(r){var a=r.getCLS,t=r.getFID,c=r.getFCP,n=r.getLCP,s=r.getTTFB;a(e),t(e),c(e),n(e),s(e)}))};i.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(R,{})}),document.getElementById("root")),E()}},[[52,1,2]]]);
//# sourceMappingURL=main.76d7b45a.chunk.js.map