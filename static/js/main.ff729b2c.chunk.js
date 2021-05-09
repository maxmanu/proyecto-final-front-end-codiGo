(this.webpackJsonpplataforma=this.webpackJsonpplataforma||[]).push([[0],{41:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(17),i=t.n(a),n=(t(41),t(4)),r=t(3),l=t(6),o=t(9),d=t.n(o),j="GET_ALL_POSTS",b="GET_ALL_SPECIALITIES",m="GET_ALL_COURSES",u="GET_ALL_TEACHERS",h="GET_POST",O="GET_SPECIALITY",p="GET_COURSE",x="GET_FRAGMENT",g="http://localhost:3001",f=function(e){return function(c){d.a.get("".concat(g,"/cursos/").concat(e)).then((function(e){return c({type:p,course:e.data})}))}},v=t(15),N=t(33),y=t(34),_=t(5),w=Object(v.createStore)(Object(v.combineReducers)({postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return c.type===j?Object(_.a)(Object(_.a)({},e),{},{posts:c.posts}):c.type===h?Object(_.a)(Object(_.a)({},e),{},{post:c.post}):e},specialityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return c.type===b?Object(_.a)(Object(_.a)({},e),{},{specialities:c.specialities}):c.type===O?Object(_.a)(Object(_.a)({},e),{},{speciality:c.speciality}):e},courseReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return c.type===m?Object(_.a)(Object(_.a)({},e),{},{courses:c.courses}):c.type===p?Object(_.a)(Object(_.a)({},e),{},{course:c.course}):e},teacherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return c.type===u?Object(_.a)(Object(_.a)({},e),{},{teachers:c.teachers}):e},fragmentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return c.type===x?Object(_.a)(Object(_.a)({},e),{},{fragment:c.fragment}):e}}),Object(N.composeWithDevTools)(Object(v.applyMiddleware)(y.a))),E=t(0),k=function(e){var c=e.color,t=e.image,s=e.title,a=e.subtitle,i=e.home,r=e.poster,l=e.courseBanner,o=e.especialidad,d=e.info;return Object(E.jsx)("div",{className:"main-banner img-container l-block ".concat(c),children:Object(E.jsx)("div",{className:"ed-grid",children:Object(E.jsxs)("div",{children:[Object(E.jsx)("img",{src:t.src,className:"main-banner__img",alt:t.alt}),i?Object(E.jsxs)("div",{className:"ed-grid m-grid-2",children:[Object(E.jsxs)("div",{className:"main-banner__data",children:[Object(E.jsx)("h1",{className:"main-banner__title",children:s}),Object(E.jsx)("p",{children:a}),Object(E.jsx)(n.b,{to:"/cursos",className:"button second-color",children:"Ver cursos"})]}),Object(E.jsx)("div",{className:"img-container s-ratio-16-9",children:Object(E.jsx)("img",{src:r,alt:"Curso actual"})})]}):l?Object(E.jsxs)("div",{className:"ed-grid m-grid-3",children:[Object(E.jsxs)("div",{className:"main-banner__data m-cols-2",children:[Object(E.jsx)("h1",{className:"main-banner__title s-mb-0",children:s}),Object(E.jsx)("p",{className:"s-opacity-5",children:a}),Object(E.jsx)("p",{children:d}),o&&Object(E.jsxs)("p",{children:["Este curso forma parte de la especialidad"," ",Object(E.jsx)(n.b,{to:"/especialidades",children:o})]})]}),Object(E.jsx)("div",{className:"img-container s-ratio-16-9 m-cols-1",children:Object(E.jsx)("img",{src:r,alt:"Curso actual"})})]}):Object(E.jsxs)("div",{className:"main-banner__data s-center",children:[Object(E.jsx)("h1",{className:"main-banner__title",children:s}),Object(E.jsx)("p",{children:a})]})]})})})},I=function(e){var c=e.title,t=e.author,s=e.fecha,a=e.content;return Object(E.jsx)("article",{className:"publication l-block",children:Object(E.jsxs)("div",{className:"publication__container",children:[Object(E.jsx)("h2",{className:"publication__title t3",children:c}),Object(E.jsxs)("span",{children:[Object(E.jsx)("b",{children:t})," a las ",s]}),Object(E.jsx)("div",{className:"publication__content",children:Object(E.jsx)("p",{children:a})})]})})},C=Object(l.b)((function(e){return{posts:e.postReducer.posts}}),{})((function(e){var c=e.posts;return Object(s.useEffect)((function(){w.dispatch((function(e){d.a.get("".concat(g,"/posts")).then((function(c){return e({type:j,posts:c.data})}))}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{color:"dark-color",image:"",title:"Bienvenido a la experiencia m\xe1s incre\xedble de educaci\xf3n online. Comienza hoy mismo a  aprender.",subtitle:"Plataforma de educaci\xf3n m\xe1s innovadora.",home:!0,poster:""}),Object(E.jsxs)("main",{className:"ed-grid m-grid-3",children:[Object(E.jsxs)("div",{className:"l-section m-cols-2",children:[Object(E.jsx)("h2",{children:"\xdaltimas Publicaciones"}),c?Object(E.jsx)("div",{children:c.map((function(e){return Object(E.jsx)(I,{title:e.title,author:e.author,fecha:e.fecha,content:e.content},e.id)}))}):Object(E.jsx)("p",{children:"No existen publicaciones por el momento"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"Lista de categor\xedas"}),Object(E.jsxs)("ul",{className:"feature-list",children:[Object(E.jsx)("li",{children:Object(E.jsx)("span",{children:"React.js"})}),Object(E.jsx)("li",{children:Object(E.jsx)("span",{children:"React Native"})}),Object(E.jsx)("li",{children:Object(E.jsx)("span",{children:"Angular"})}),Object(E.jsx)("li",{children:Object(E.jsx)("span",{children:"Html"})}),Object(E.jsx)("li",{children:Object(E.jsx)("span",{children:"Css"})}),Object(E.jsx)("li",{children:Object(E.jsx)("span",{children:"Python"})})]})]})]})]})})),R=function(e){var c=e.picture,t=e.name,s=e.cardId,a=e.path;return Object(E.jsxs)("article",{className:"card s-border",children:[Object(E.jsx)("div",{className:"img-container s-ratio-16-9",children:Object(E.jsx)(n.b,{to:"/".concat(a,"/").concat(s),children:Object(E.jsx)("img",{src:c,alt:t})})}),Object(E.jsx)("div",{className:"card__data s-pxy-2",children:Object(E.jsx)("h3",{className:"t4 center",children:t})})]})},S=Object(l.b)((function(e){return{specialities:e.specialityReducer.specialities}}),{})((function(e){var c=e.specialities;return Object(s.useEffect)((function(){w.dispatch((function(e){d.a.get("".concat(g,"/especialidades")).then((function(c){return e({type:b,specialities:c.data})}))}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{color:"first-color",image:{src:"https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"Banner especialidades"},title:"Especialidades",subtitle:"Domina una tecnlog\xeda con las rutas de aprendizaje que te ofrecemos"}),c&&Object(E.jsx)("main",{className:"ed-grid m-grid-3",children:c.map((function(e){return Object(E.jsx)(R,{path:"especialidades",picture:e.picture,name:e.name,cardId:e.id},e.id)}))})]})})),T=Object(l.b)((function(e){return{speciality:e.specialityReducer.speciality}}),{})((function(e){var c=e.speciality;return Object(s.useEffect)((function(){var e;w.dispatch((e=1,function(c){d.a.get("".concat(g,"/especialidad/").concat(e)).then((function(e){return c({type:O,speciality:e.data})}))}))}),[]),Object(E.jsx)(E.Fragment,{children:c&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{color:"dark-color",title:c.data.name,subtitle:c.data.subtitle,image:{src:"https://via.placeholder.com/1920x600?text=Foto+ Banner",alt:c.data.name},courseBanner:!0,poster:c.data.picture,info:c.data.information}),Object(E.jsx)("main",{className:"ed-grid lg-grid-10",children:Object(E.jsxs)("div",{className:"lg-cols-7",children:[Object(E.jsxs)("div",{className:"course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 s-radius s-bg-white s-shadow-bottom",children:[Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)("h3",{className:"t4",children:"\xbfQu\xe9 aprender\xe1s?"}),c.data.abilities.map((function(e){return Object(E.jsx)("li",{children:e.description},e.id)}))]}),Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)("h3",{className:"t4",children:"Conociminetos previos"}),Object(E.jsx)("ul",{children:c.data.knowledge.map((function(e){return Object(E.jsx)("li",{children:e.description},e.id)}))})]}),Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)("h3",{className:"t4",children:"Nivel"}),Object(E.jsx)("p",{children:c.data.level})]})]}),Object(E.jsx)("h2",{children:"Temario de la especialidad"}),Object(E.jsx)("div",{className:"s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom",children:c.data.courses.map((function(e){return Object(E.jsx)("div",{className:"course-class l-section",children:Object(E.jsxs)("div",{className:"ed-grid m-grid-3",children:[Object(E.jsx)("img",{src:e.picture,alt:e.name}),Object(E.jsxs)("div",{className:"m-cols-2",children:[Object(E.jsx)("h3",{children:e.name}),Object(E.jsx)("p",{children:e.information})]})]})},e.id)}))})]})})]})})})),F=Object(l.b)((function(e){return{courses:e.courseReducer.courses}}),{})((function(e){var c=e.courses;return Object(s.useEffect)((function(){w.dispatch((function(e){d.a.get("".concat(g,"/cursos")).then((function(c){return e({type:m,courses:c.data})}))}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{color:"dark-color",image:{src:"https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"Banner especialidades"},title:"Nuestros cursos",subtitle:"Comienza desde cero hoy mismo en tu camino a dominar la tecnolog\xeda"}),c&&Object(E.jsx)("main",{className:"ed-grid m-grid-5",children:c.map((function(e){return Object(E.jsx)(R,{path:"cursos",picture:e.picture,name:e.name,cardId:e.id},e.id)}))})]})})),L=Object(l.b)((function(e){return{course:e.courseReducer.course}}),{})((function(e){var c=e.course;return Object(s.useEffect)((function(){w.dispatch(f(1))}),[]),Object(E.jsx)(E.Fragment,{children:c&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{color:"dark-color",title:c.name,subtitle:c.subtitle,image:{src:"https://via.placeholder.com/1920x600?text=Foto+ Banner",alt:c.name},courseBanner:!0,poster:c.picture,especialidad:c.data.specialities[0].name,info:c.information}),Object(E.jsxs)("main",{className:"ed-grid lg-grid-10",children:[Object(E.jsxs)("div",{className:"lg-cols-7",children:[Object(E.jsxs)("div",{className:"course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 s-radius s-bg-white s-shadow-bottom",children:[Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)("h3",{className:"t4",children:"\xbfQu\xe9 aprender\xe1s?"}),Object(E.jsx)("ul",{dangerouslySetInnerHTML:{__html:c.you_learn}})]}),Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)("h3",{className:"t4",children:"Conociminetos previos"}),Object(E.jsx)("ul",{dangerouslySetInnerHTML:{__html:c.requirements}})]}),Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)("h3",{className:"t4",children:"Nivel"}),Object(E.jsx)("p",{children:c.level})]})]}),Object(E.jsx)("h2",{children:"Temario del curso"}),Object(E.jsx)("div",{className:"s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom",children:c.data.classes.map((function(e){return Object(E.jsxs)("div",{className:"course-class l-section",children:[Object(E.jsx)("h3",{children:e.class.title}),Object(E.jsx)("p",{children:e.class.description}),Object(E.jsx)("ul",{className:"data-list",children:e.subjects.map((function(e){return Object(E.jsx)("li",{children:Object(E.jsx)(n.b,{to:"/clase/".concat(e.subject.id),className:"color dark-color",children:e.subject.title})},e.subject.id)}))})]},e.class.id)}))})]}),Object(E.jsxs)("div",{className:"lg-cols-3",children:[Object(E.jsx)("h2",{className:"t3",children:"Profesor"}),Object(E.jsx)("p",{children:"Beto Quiroga"})]})]})]})})})),B=function(e){var c=e.picture,t=e.name,s=e.country;return Object(E.jsxs)("article",{children:[Object(E.jsx)("div",{className:"s-px-4",children:Object(E.jsx)("div",{className:"img-container circle s-mb-2",children:Object(E.jsx)("img",{src:c,alt:t})})}),Object(E.jsxs)("div",{className:"s-center",children:[Object(E.jsx)("p",{className:"t3 s-mb-1",children:t}),Object(E.jsx)("p",{children:s})]})]})},A=Object(l.b)((function(e){return{teachers:e.teacherReducer.teachers}}),{})((function(e){var c=e.match,t=e.teachers;return Object(s.useEffect)((function(){w.dispatch((function(e){d.a.get("".concat(g,"/profesores")).then((function(c){return e({type:u,teachers:c.data})}))}))}),[c]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k,{color:"second-color",image:{src:"https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"Banner profesores"},title:"Nuestros profesores",subtitle:"Este plantel docente est\xe1 altamaente calificado para guiarte en tu educaci\xf3n"}),t&&Object(E.jsx)("main",{className:"ed-grid m-grid-3 lg-grid-4 row-gap",children:t.map((function(e){return Object(E.jsx)(B,{picture:e.picture,name:e.name,country:e.country},e.id)}))})]})})),G=t(35),P=Object(l.b)((function(e){return{fragment:e.fragmentReducer.fragment,course:e.courseReducer.course}}),{})((function(e){var c=e.fragment,t=e.course;return Object(s.useEffect)((function(){var e;w.dispatch(f(1)),w.dispatch((e=123,function(c){d.a.get("".concat(g,"/clase/").concat(e)).then((function(e){return c({type:x,fragment:e.data})}))}))}),[]),Object(E.jsx)("div",{className:"class-page-container background dark-color s-pxy-4",children:c&&t&&Object(E.jsxs)("div",{className:"ed-grid lg-grid-12",children:[Object(E.jsxs)("div",{className:"lg-cols-8",children:[Object(E.jsx)("div",{children:Object(E.jsx)(G.a,{video:c.video,width:780})}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{className:"color second-color s-mb-0",children:c.name}),Object(E.jsx)("span",{children:t.name})]})]}),Object(E.jsx)("div",{className:"lg-cols-4",children:Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{className:"color light-color",children:"Temario del curso"}),Object(E.jsx)("ul",{className:"data-list",children:t.data.classes.map((function(e){return Object(E.jsxs)("div",{className:"course-class l-section",children:[Object(E.jsx)("h3",{className:"color light-color",children:e.class.title}),Object(E.jsx)("ul",{className:"data-list",children:e.subjects.map((function(e){return Object(E.jsx)("li",{children:Object(E.jsx)(n.b,{to:"/clase/".concat(e.subject.id),className:"color light-color",children:e.subject.title})},e.subject.id)}))})]},e.class.id)}))})]})})]})})})),q=function(e){e.preventDefault();var c=e.target,t={email:c.email.value,password:c.password.value};d.a.post("https://api-edteam.alejogs4.now.sh/login",t).then((function(e){localStorage.setItem("token",e.data.token),window.location="/"})).catch((function(e){alert("Error al iniciar sesi\xf3n")}))},D=function(){return Object(E.jsxs)("div",{className:"ed-grid",children:[Object(E.jsx)("div",{className:"l-block"}),Object(E.jsxs)("div",{className:"m-to-center m-60 lg-30",children:[Object(E.jsx)("h1",{className:"center",children:"Iniciar Sesi\xf3n"}),Object(E.jsxs)("form",{onSubmit:q.bind(),children:[Object(E.jsx)("div",{className:"form__item",children:Object(E.jsxs)("label",{htmlFor:"email",children:["Correo electr\xf3nico",Object(E.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Ingrese su email",required:!0})]})}),Object(E.jsx)("div",{className:"form__item",children:Object(E.jsxs)("label",{htmlFor:"password",children:["Contrase\xf1a",Object(E.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Ingrese su contrase\xf1a",required:!0})]})}),Object(E.jsx)("div",{className:"form_item",children:Object(E.jsx)("input",{type:"submit",className:"button full",value:"Iniciar sesi\xf3n"})})]}),Object(E.jsx)("div",{className:"center",children:Object(E.jsxs)("p",{children:["\xbfNo tienes cuenta de usuario? ",Object(E.jsx)(n.b,{to:"/registro",children:"Crear cuenta"})]})})]})]})},H=function(e){e.preventDefault();var c=e.target,t={email:c.email.value,name:c.fullname.value,password:c.password.value};d.a.post("".concat("https://api-edteam.alejogs4.now.sh","/signup"),t).then((function(){alert("Usuario creado"),window.location="/login"})).catch((function(){return alert("Error al crear el usuario")}))},M=function(){return Object(E.jsxs)("div",{className:"ed-grid",children:[Object(E.jsx)("div",{className:"l-block"}),Object(E.jsxs)("div",{className:"m-to-center m-60 lg-30",children:[Object(E.jsx)("h1",{className:"center",children:"Crear cuenta"}),Object(E.jsxs)("form",{onSubmit:H.bind(),children:[Object(E.jsx)("div",{className:"form__item",children:Object(E.jsxs)("label",{htmlFor:"fullname",children:["Nombre completo",Object(E.jsx)("input",{type:"text",name:"fullname",id:"fullname",placeholder:"Ingrese su nombre",required:!0})]})}),Object(E.jsx)("div",{className:"form__item",children:Object(E.jsxs)("label",{htmlFor:"email",children:["Correo electr\xf3nico",Object(E.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Ingrese su email",required:!0})]})}),Object(E.jsx)("div",{className:"form__item",children:Object(E.jsxs)("label",{htmlFor:"password",children:["Contrase\xf1a",Object(E.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Ingrese su contrase\xf1a",required:!0})]})}),Object(E.jsx)("div",{className:"form_item",children:Object(E.jsx)("input",{type:"submit",className:"button full",value:"Iniciar sesi\xf3n"})})]}),Object(E.jsx)("div",{className:"center",children:Object(E.jsxs)("p",{children:["\xbfYa tienes cuenta de usuario? ",Object(E.jsx)(n.b,{to:"/login",children:"Iniciar sesi\xf3n"})]})})]})]})},z=function(){return Object(E.jsx)("div",{className:"ed-grid",children:Object(E.jsx)("h1",{children:"404 Not found"})})},Q=t(19),U=function(e){var c=e.component,t=Object(Q.a)(e,["component"]);return localStorage.getItem("token")?Object(E.jsx)(r.b,Object(_.a)(Object(_.a)({},t),{},{component:c})):Object(E.jsx)(r.a,{to:"/login"})},J=function(e){var c=e.component,t=Object(Q.a)(e,["component"]);return localStorage.getItem("token")?Object(E.jsx)(r.a,{to:"/"}):Object(E.jsx)(r.b,Object(_.a)(Object(_.a)({},t),{},{component:c}))},Y=function(){return Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)(n.c,{exact:!0,to:"/",children:"Inicio"})}),Object(E.jsx)("li",{children:Object(E.jsx)(n.c,{to:"/especialidades",children:"Especialidades"})}),Object(E.jsx)("li",{children:Object(E.jsx)(n.c,{to:"/cursos",children:"Cursos"})}),Object(E.jsx)("li",{children:Object(E.jsx)(n.c,{to:"/profesores",children:"Profesores"})}),Object(E.jsx)("li",{children:Object(E.jsx)("span",{onClick:function(){return localStorage.removeItem("token"),void(window.location="/login")},children:"Cerra Sesi\xf3n"})})]})},V=function(){return Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)(n.c,{exact:!0,to:"/login",children:"Login"})}),Object(E.jsx)("li",{children:Object(E.jsx)(n.c,{to:"/registro",children:"Registro"})})]})},W=Object(s.createRef)(),K=function(){return Object(E.jsx)("header",{className:"main-header",children:Object(E.jsxs)("div",{className:"ed-grid s-grid-5 lg-grid-4",children:[Object(E.jsx)("div",{className:"s-cols-4 lg-cols-1 s-cross-center",children:Object(E.jsx)(n.c,{to:"/",children:Object(E.jsx)("img",{className:"main-logo",src:"logo_brain.svg",alt:"Brain-Logo"})})}),Object(E.jsxs)("div",{className:"s-cols-1 lg-cols-3 s-cross-center s-main-end",children:[Object(E.jsx)("nav",{className:"main-menu",ref:W,children:localStorage.getItem("token")?Object(E.jsx)(Y,{}):Object(E.jsx)(V,{})}),Object(E.jsx)("div",{className:"main-menu-toggle to-l",onClick:function(){return W.current.classList.toggle("show")}})]})]})})},X=function(){return Object(E.jsxs)(n.a,{children:[Object(E.jsx)(K,{}),Object(E.jsxs)(r.d,{children:[Object(E.jsx)(U,{path:"/",exact:!0,component:C}),Object(E.jsx)(U,{path:"/especialidades",exact:!0,component:S}),Object(E.jsx)(U,{path:"/especialidades/:id",exact:!0,component:T}),Object(E.jsx)(U,{path:"/cursos",exact:!0,component:F}),Object(E.jsx)(U,{path:"/cursos/:id",exact:!0,component:L}),Object(E.jsx)(U,{path:"/profesores",exact:!0,component:A}),Object(E.jsx)(U,{path:"/clase/:id",exact:!0,component:P}),Object(E.jsx)(J,{path:"/login",exact:!0,component:D}),Object(E.jsx)(J,{path:"/registro",exact:!0,component:M}),Object(E.jsx)(r.b,{component:z})]})]})};i.a.render(Object(E.jsx)(l.a,{store:w,children:Object(E.jsx)(X,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.ff729b2c.chunk.js.map