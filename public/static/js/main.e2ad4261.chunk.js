(this["webpackJsonpcrm-mern"]=this["webpackJsonpcrm-mern"]||[]).push([[0],{174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(18),c=a.n(r),o=a(5),s=a(16),i=a(4),u=a(7),l=a.n(u),j=a(13),b=a(6),d=a.n(b),h="https://notas-mern-oscar.herokuapp.com/api",p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(h,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})},m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(h,"/").concat(e),r=localStorage.getItem("x-token");return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-token":r}})},O="[ui] Abrir Modal",f="[ui] Cerrar Modal",x="[notas] Agregar",v="[notas] Borrar",_="[notas] Editar",g="[notas] Limpiar",N="[notas] Activar",y="[notas] Mostrar",k="[auth] Login",w="[auth] Checking",C="[auth] Logout",E=a(3),S=a(33),T=a.n(S),A=function(e){return e.fecha=T()(e.fecha).format("YYYY-MM-DD"),e},D=function(e){return e.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{fecha:T()(e.fecha).format("YYYY-MM-DD")})}))},I=function(e){return{type:y,payload:e}},M=function(e){return{type:x,payload:e}},Y=function(e){return{type:v,payload:e}},L=function(e){return{type:_,payload:e}},P=function(){return{type:g}},G=function(e){return{type:k,payload:e}},R=function(){return{type:w}},J=function(){return{type:C}},U=function(){return{type:O}},q=function(){return{type:f}},B=a(0),V=function(){var e=Object(o.b)();return Object(B.jsx)("button",{className:"boton__agregar",onClick:function(){e(U())},children:"+ Agregar Tarea"})},X=a(15),F=a(34),z=a.n(F),H=a(23),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(X.a)(t,2),r=a[0],c=a[1],o=function(e){c(Object(E.a)(Object(E.a)({},r),{},Object(H.a)({},e.target.name,e.target.value)))},s=function(){c(e)};return[r,o,c,s]},Q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notas.notaActiva}))._id;return Object(B.jsx)("button",{className:"boton__borrar",onClick:function(){var a;e((a=t,function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("crud/".concat(a),{},"DELETE");case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.ok&&t(Y(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),d.a.fire({title:e.t0,icon:"error"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),e(q())},children:"Eliminar"})},W={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};z.a.setAppElement("#root");var Z=function(){var e=Object(o.c)((function(e){return e.ui})).isOpen,t=Object(o.c)((function(e){return e.notas})).notaActiva,a=Object(o.b)(),r=function(){a(q()),a(P())},c=K({titulo:"",nota:"",fecha:"",nivel:""}),s=Object(X.a)(c,4),i=s[0],u=s[1],b=s[2],h=s[3];Object(n.useEffect)((function(){b(t||{titulo:"",nota:"",fecha:"",nivel:""})}),[b,t]);var p=function(){return 0===O.trim().length?(d.a.fire({title:"Coloca el titulo de la nota",icon:"error"}),!1):0===f.trim().length?(d.a.fire({title:"Coloca la nota",icon:"error"}),!1):""===v?(d.a.fire({title:"Coloca el nivel de la nota",icon:"error"}),!1):""!==x||(d.a.fire({title:"Coloca la fecha de la nota",icon:"error"}),!1)},O=i.titulo,f=i.nota,x=i.fecha,v=i.nivel;return Object(B.jsxs)(z.a,{isOpen:e,onRequestClose:r,closeTimeoutMS:200,style:W,className:"modal",overlayClassName:"modal-fondo",children:[Object(B.jsx)("h1",{className:"form__titulo",children:"Agrega una Nota"}),Object(B.jsx)("hr",{}),Object(B.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),p()&&(a(t?function(e){return function(){var t=Object(j.a)(l.a.mark((function t(a,n){var r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n().notas.notaActiva._id,c=A(e),t.next=5,m("crud/".concat(r),c,"PUT");case 5:return o=t.sent,t.next=8,o.json();case 8:t.sent.ok&&a(L(c)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),d.a.fire({title:t.t0,icon:"error"});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(i):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(a,n){var r,c,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n().auth,c=r.uid,o=r.nombre,t.next=4,m("crud",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.notaNueva._id,e.usuario={uid:c,nombre:o},a(M(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),d.a.fire({title:t.t0,icon:"error"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(i)),h(),a(P()),r())},children:[Object(B.jsxs)("div",{className:"form__pregunta",children:[Object(B.jsx)("label",{className:"form__label",children:"Titulo"}),Object(B.jsx)("input",{type:"text",placeholder:"Tirar la basura....",className:"form__input",name:"titulo",value:O,onChange:u})]}),Object(B.jsxs)("div",{className:"form__pregunta",children:[Object(B.jsx)("label",{className:"form__label",children:"Descripci\xf3n"}),Object(B.jsx)("textarea",{className:"form__input",name:"nota",value:f,onChange:u})]}),Object(B.jsxs)("div",{className:"form__pregunta",children:[Object(B.jsx)("label",{className:"form__label",children:"Fecha"}),Object(B.jsx)("input",{type:"date",className:"form__input",name:"fecha",value:x,onChange:u})]}),Object(B.jsx)("div",{className:"form__pregunta",children:Object(B.jsxs)("select",{className:"form__input",name:"nivel",value:v,onChange:u,children:[Object(B.jsx)("option",{value:"",children:"Importancia:"}),Object(B.jsx)("option",{value:"urgente",children:"Urgente"}),Object(B.jsx)("option",{value:"medio",children:"Medio"}),Object(B.jsx)("option",{value:"nourgente",children:"No Urgente"})]})}),Object(B.jsx)("button",{className:"form__boton",type:"submit",children:t?"Guardar cambios":"Agregar"}),t&&Object(B.jsx)(Q,{})]})]})},$=function(){var e=Object(o.b)();return Object(B.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(B.jsx)("div",{className:"container-fluid",children:Object(B.jsx)("button",{className:"navbar-brand btn",children:"Tareas App"})}),Object(B.jsx)("button",{className:"btn btn-outline-danger mx-5",onClick:function(){e((function(e){localStorage.clear(),e(J()),e(P())}))},children:"Salir"})]})},ee=function(e){var t=e.notaComp,a=Object(o.b)(),n=t.titulo,r=t.nota,c=t.fecha,s=t.nivel;return Object(B.jsxs)("div",{className:"tarea__contenedor",onClick:function(){a(U()),a(function(e){return{type:N,payload:e}}(t))},children:[Object(B.jsx)("h2",{className:"tarea__titulo",children:n}),Object(B.jsxs)("h3",{className:"tarea__nivel",children:["Nivel: ",Object(B.jsx)("span",{className:"tarea__nivel-texto",children:s})]}),Object(B.jsx)("p",{className:"tarea__texto",children:r}),Object(B.jsxs)("h3",{className:"tarea__creada",children:["Creada: ",Object(B.jsx)("span",{className:"tarea__creada-fecha",children:c})]})]})},te=function(){var e=Object(o.c)((function(e){return e.notas})).notas;return Object(B.jsx)("div",{className:"tareas",children:e.map((function(e){return Object(B.jsx)(ee,{notaComp:e},e.titulo)}))})},ae=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("crud");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=D(n.notas),n.ok&&t(I(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),d.a.fire({title:e.t0,icon:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(B.jsx)("div",{children:Object(B.jsxs)("div",{children:[Object(B.jsx)($,{}),Object(B.jsx)(V,{}),Object(B.jsx)("h1",{className:"crm",children:"Mi Lista de Tareas"}),Object(B.jsx)(te,{}),Object(B.jsx)(Z,{})]})})},ne=function(){return Object(B.jsx)("div",{className:"contenedor__carga",children:Object(B.jsxs)("div",{className:"carga__principal",children:[Object(B.jsx)("div",{className:"carga1"}),Object(B.jsx)("div",{className:"carga2"}),Object(B.jsx)("div",{className:"carga3"})]})})},re=a(25),ce=a.n(re),oe=function(){var e=Object(o.b)(),t=K({correo:"",password:""}),a=Object(X.a)(t,2),n=a[0],r=a[1],c=function(){return!!ce.a.isEmail(i)||(d.a.fire({title:"Ingresa un email v\xe1lido",icon:"error"}),!1)},i=n.correo,u=n.password;return Object(B.jsx)("div",{className:"auth__login",children:Object(B.jsxs)("form",{className:"auth__contenedor",onSubmit:function(t){var a;t.preventDefault(),c()&&e((a=n,function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth",a,"POST");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),r.ok?(localStorage.setItem("x-token",r.token),t(G({uid:r.usuario.uid,nombre:r.usuario.nombre}))):d.a.fire({title:"Email y/o Contrase\xf1a incorrecto",icon:"error"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(B.jsx)("h3",{className:"auth__titulo",children:"Ingresa a tu perfil"}),Object(B.jsxs)("div",{className:"auth__preg",children:[Object(B.jsx)("label",{className:"auth__label",children:"email"}),Object(B.jsx)("input",{type:"email",placeholder:"Email",className:"auth__input",name:"correo",value:i,onChange:r})]}),Object(B.jsxs)("div",{className:"auth__preg",children:[Object(B.jsx)("label",{className:"auth__label",children:"password"}),Object(B.jsx)("input",{type:"password",placeholder:"Password",className:"auth__input",name:"password",value:u,onChange:r})]}),Object(B.jsx)("button",{className:"auth__boton",type:"submit",children:"Ingresar"}),Object(B.jsxs)("p",{className:"auth__texto",children:["\xbfNo tienes cuenta? ",Object(B.jsx)(s.b,{className:"auth__texto-esp",to:"/auth/registro",children:"Registrate"})]})]})})},se=function(){var e=Object(o.b)(),t=K({nombre:"",correo:"",password:"",password2:""}),a=Object(X.a)(t,2),n=a[0],r=a[1],c=function(){return 0===i.trim().length?(d.a.fire({title:"Coloque su nombre",icon:"error"}),!1):ce.a.isEmail(u)?b.length<=6?(d.a.fire({title:"La contrase\xf1as debe contener numeros y letras, con 6 caracteres",icon:"error"}),!1):b===h||(d.a.fire({title:"Las contrase\xf1as no coinciden",icon:"error"}),!1):(d.a.fire({title:"Ingresa un email correcto",icon:"error"}),!1)},i=n.nombre,u=n.correo,b=n.password,h=n.password2;return Object(B.jsx)("div",{className:"auth__login",children:Object(B.jsxs)("form",{className:"auth__contenedor",onSubmit:function(t){var a;t.preventDefault(),c()&&e((a={nombre:i,correo:u,password:b},function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/nuevo",a,"POST");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),r.ok&&(localStorage.setItem("x-token",r.token),t(G({uid:r.usuario.uid,nombre:r.usuario.nombre})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(B.jsx)("h3",{className:"auth__titulo",children:"Crea una cuenta"}),Object(B.jsxs)("div",{className:"auth__preg",children:[Object(B.jsx)("label",{className:"auth__label",children:"nombre"}),Object(B.jsx)("input",{type:"text",placeholder:"Nombre",className:"auth__input",name:"nombre",value:i,onChange:r})]}),Object(B.jsxs)("div",{className:"auth__preg",children:[Object(B.jsx)("label",{className:"auth__label",children:"email"}),Object(B.jsx)("input",{type:"email",placeholder:"Email",className:"auth__input",name:"correo",value:u,onChange:r})]}),Object(B.jsxs)("div",{className:"auth__preg",children:[Object(B.jsx)("label",{className:"auth__label",children:"password"}),Object(B.jsx)("input",{type:"password",placeholder:"Password",className:"auth__input",name:"password",value:b,onChange:r})]}),Object(B.jsxs)("div",{className:"auth__preg",children:[Object(B.jsx)("label",{className:"auth__label",children:"password"}),Object(B.jsx)("input",{type:"password",placeholder:"Repite el Password",className:"auth__input",name:"password2",value:h,onChange:r})]}),Object(B.jsx)("button",{className:"auth__boton",type:"submit",children:"Crear"}),Object(B.jsxs)("p",{className:"auth__texto",children:["Ya tienes cuenta? ",Object(B.jsx)(s.b,{className:"auth__texto-esp",to:"/auth/login",children:"Volver"})]})]})})},ie=function(){return Object(B.jsx)("div",{className:"auth__fondo",children:Object(B.jsxs)(i.d,{children:[Object(B.jsx)(i.b,{exact:!0,path:"/auth/login",component:oe}),Object(B.jsx)(i.b,{exact:!0,path:"/auth/registro",component:se}),Object(B.jsx)(i.a,{to:"/auth/login"})]})})},ue=a(26),le=["auth","component"],je=function(e){var t=e.auth,a=e.component,n=Object(ue.a)(e,le);return Object(B.jsx)(i.b,Object(E.a)(Object(E.a)({},n),{},{component:function(e){return t?Object(B.jsx)(a,Object(E.a)({},e)):Object(B.jsx)(i.a,{to:"/auth/login"})}}))},be=["auth","component"],de=function(e){var t=e.auth,a=e.component,n=Object(ue.a)(e,be);return Object(B.jsx)(i.b,Object(E.a)(Object(E.a)({},n),{},{component:function(e){return t?Object(B.jsx)(i.a,{to:"/"}):Object(B.jsx)(a,Object(E.a)({},e))}}))},he=function(){var e=Object(o.c)((function(e){return e.auth})),t=e.checking,a=e.uid,r=Object(o.b)();return Object(n.useEffect)((function(){r(function(){var e=Object(j.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth/revalidar");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("x-token",n.token),t(G({uid:n.uid,nombre:n.nombre}))):t(R());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]),t?Object(B.jsx)(ne,{}):Object(B.jsx)(s.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(i.d,{children:[Object(B.jsx)(je,{exact:!0,path:"/",component:ae,auth:!!a}),Object(B.jsx)(de,{path:"/auth",component:ie,auth:!!a}),Object(B.jsx)(i.a,{to:"/auth/login"})]})})})},pe=a(21),me=a(60),Oe=a(37),fe={notas:[],notaActiva:null},xe=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(E.a)(Object(E.a)({},e),{},{isOpen:!0});case f:return Object(E.a)(Object(E.a)({},e),{},{isOpen:!1});default:return e}},notas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(E.a)(Object(E.a)({},e),{},{notaActiva:Object(E.a)({},t.payload)});case x:return Object(E.a)(Object(E.a)({},e),{},{notas:[].concat(Object(Oe.a)(e.notas),[t.payload]),notaActiva:null});case g:return Object(E.a)(Object(E.a)({},e),{},{notaActiva:null});case v:return Object(E.a)(Object(E.a)({},e),{},{notas:e.notas.filter((function(e){return e._id!==t.payload})),notaActiva:null});case _:return Object(E.a)(Object(E.a)({},e),{},{notas:e.notas.map((function(e){return e._id===t.payload._id?t.payload:e})),notaActiva:null});case y:return Object(E.a)(Object(E.a)({},e),{},{notas:Object(Oe.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{checking:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(E.a)(Object(E.a)({},e),{},{checking:!1},t.payload);case w:return Object(E.a)(Object(E.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,_e=Object(pe.d)(xe,ve(Object(pe.a)(me.a))),ge=function(){return Object(B.jsx)(o.a,{store:_e,children:Object(B.jsx)(he,{})})};a(174);c.a.render(Object(B.jsx)(ge,{}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.e2ad4261.chunk.js.map