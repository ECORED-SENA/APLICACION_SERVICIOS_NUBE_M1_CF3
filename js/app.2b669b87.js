(function(e){function n(n){for(var a,o,s=n[0],c=n[1],u=n[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,o=1;o<t.length;o++){var s=t[o];0!==i[s]&&(a=!1)}a&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"11acacb8","chunk-18abf34a":"07cb1daa","chunk-29460b1d":"c3a9beb5","chunk-2d0c031e":"5ecd1c91","chunk-2d0c1cc1":"0c45e1b7","chunk-46763a27":"c254c58a","chunk-6f26cf2c":"c5a80fcd","chunk-6f971c89":"ce89d876","chunk-7a8dacf9":"246650ad","chunk-7cc2f876":"f246a655","chunk-7ffbae07":"85b99ad8","chunk-c30fa626":"6d413ded","chunk-cde99bde":"b9dffea3",comple:"f091df5e",creditos:"44577ce8",glosario:"3950ca90",intro:"00aeac79",referencias:"e7632e8d",tema1:"51e98339",tema2:"b9459d79"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={actividad:1,"chunk-18abf34a":1,"chunk-29460b1d":1,"chunk-6f26cf2c":1,"chunk-7a8dacf9":1,"chunk-7cc2f876":1,"chunk-7ffbae07":1,"chunk-c30fa626":1,"chunk-cde99bde":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var a="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"8a2029ee","chunk-18abf34a":"d2aa2336","chunk-29460b1d":"4fc86c55","chunk-2d0c031e":"31d6cfe0","chunk-2d0c1cc1":"31d6cfe0","chunk-46763a27":"31d6cfe0","chunk-6f26cf2c":"bb1f6de8","chunk-6f971c89":"31d6cfe0","chunk-7a8dacf9":"c0b9870d","chunk-7cc2f876":"c0b9870d","chunk-7ffbae07":"c0b9870d","chunk-c30fa626":"c292226d","chunk-cde99bde":"c0b9870d",comple:"96082a48",creditos:"8a2029ee",glosario:"bc9ffe7c",intro:"c37b18bb",referencias:"c52400f5",tema1:"8a2029ee",tema2:"8a2029ee"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===i)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var a=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],m.parentNode.removeChild(m),t(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=i[e]=[n,t]}));n.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(m);var t=i[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,t[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var m=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0462":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[e._m(0)])},o=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"row align-items-center justify-content-center"},[a("div",{staticClass:"col-auto mb-2 mb-sm-0"},[a("img",{attrs:{src:t("52e5")}})]),a("div",{staticClass:"col-12 col-sm"},[a("p",{staticClass:"mb-0 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")])])])}],i={name:"Footer",props:{allRound:{type:Boolean,default:!1}}},r=i,s=(t("04b1"),t("2877")),c=Object(s["a"])(r,a,o,!1,null,"350fb762",null);n["a"]=c.exports},"04b1":function(e,n,t){"use strict";t("36e0")},"21b2":function(e,n,t){"use strict";t("f7db")},"25aa":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"creditos"},[e._m(0),t("div",{staticClass:"mb-4"},[t("p",[t("span",{staticClass:"text-bold"},[e._v(e._s(e.creditosData.liderEquipo.nombre))]),t("br"),e._v(e._s(e.creditosData.liderEquipo.cargo))])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"creditos__titulo mb-3"},[e._v("CONTENIDO INSTRUCCIONAL")]),t("div",{staticClass:"row"},e._l(e.contenidoInstruccional,(function(n,a){return t("div",{key:"inst-"+a,staticClass:"col-lg-6"},e._l(n,(function(e,n){return t("CreditosItem",{key:"inst-col-"+a+n,attrs:{item:e}})})),1)})),0)]),t("div",{staticClass:"col-lg-4"},[t("p",{staticClass:"creditos__titulo mb-3"},[e._v("DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES ")]),e._l(e.creditosData.desarrolloProducto,(function(e,n){return t("CreditosItem",{key:"desa-"+n,attrs:{item:e}})})),t("p",{staticClass:"creditos__titulo mb-3"},[e._v("GESTORES DE REPOSITORIO")]),e._l(e.creditosData.gestoresRepositorio,(function(e,n){return t("CreditosItem",{key:"repo-"+n,attrs:{item:e}})}))],2)])])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mb-3"},[t("p",{staticClass:"text-bold"},[e._v("ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES")])])}],i=t("2909"),r=(t("a434"),t("cdd9")),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mb-3"},["object"===typeof e.item.nombre?[e._l(e.item.nombre,(function(n){return[t("span",{staticClass:"text-bold"},[e._v(e._s(n))]),t("br")]}))]:e.item.nombre?[t("span",{staticClass:"text-bold"},[e._v(e._s(e.item.nombre))]),t("br")]:e._e(),"object"===typeof e.item.cargo?[e._l(e.item.cargo,(function(n){return[t("span",[e._v(e._s(n))]),t("br")]}))]:e.item.cargo?[t("span",[e._v(e._s(e.item.cargo))]),e.item.centro||e.item.regional?t("br"):e._e()]:e._e(),e.item.centro?[t("span",[e._v(e._s(e.item.centro))]),e.item.regional?t("br"):e._e()]:e._e(),e.item.regional?[t("span",[e._v(e._s(e.item.regional))])]:e._e()],2)},c=[],u={name:"CreditosItem",props:{item:{type:Object,default:function(){return{}}}}},l=u,d=t("2877"),m=Object(d["a"])(l,s,c,!1,null,"2e88dcde",null),f=m.exports,p={name:"CreditosComp",components:{CreditosItem:f},data:function(){return{creditosData:r["b"]}},computed:{contenidoInstruccional:function(){var e=this.creditosData.contenidoInstruccional,n=Math.round(e.length/2),t=Object(i["a"])(e).splice(0,n),a=Object(i["a"])(e).splice(n,e.length);return[t,a]}}},b=p,h=(t("4d3f"),Object(d["a"])(b,a,o,!1,null,"ce32b7bc",null));n["a"]=h.exports},"2ec0":function(e,n,t){"use strict";t("2f1b")},"2f1b":function(e,n,t){},"352c":function(e,n,t){},"36e0":function(e,n,t){},"4d3f":function(e,n,t){"use strict";t("c02a")},"52e5":function(e,n,t){e.exports=t.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("Header"),t("div",{staticClass:"contenedor-principal"},[t("AsideMenu"),t("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[t("router-view"),t("footer")],1)],1),t("BarraAvance")],1)},i=[],r=t("cdd9"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("aside",{staticClass:"aside-menu",class:{"aside-menu--open":e.menuOpen}},[t("nav",{staticClass:"aside-menu__content"},[e._m(0),t("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(n,a){return[t("li",{key:"menu-item-"+a,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==n.nombreRuta}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[n.hasOwnProperty("numero")?t("span",[t("strong",[e._v(e._s(n.numero))])]):e._e(),t("span",[t("strong",[e._v(e._s(n.titulo))])])])],1),n.hasOwnProperty("subMenu")&&n.subMenu.length?e._l(n.subMenu,(function(o,i){return t("li",{key:"submenu-item-"+a+"-"+i,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+o.hash}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta,hash:"#"+o.hash}}},[t("i",{class:o.icono}),t("span",[e._v(e._s(o.numero))]),t("span",[e._v(e._s(o.titulo))])])],1)})):e._e()]}))],2),t("ul",{staticClass:"aside-menu__sec-menu"},e._l(e.subMenuData,(function(n,a){return t("li",{key:"SecMenu-item-"+a,staticClass:"aside-menu__sec-menu__item"},[n.hasOwnProperty("download")?t("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(n.download),target:"_blank"}},[t("i",{class:n.icono}),t("span",[e._v(e._s(n.titulo))])]):t("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[t("i",{class:n.icono}),t("span",[e._v(e._s(n.titulo))])])],1)})),0)])])},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"aside-menu__header"},[t("div",{staticClass:"h5"},[e._v("Desarrollo de contenidos")])])}],u=(t("b0c0"),{name:"AsideMenu",data:function(){return{menuData:r["e"]&&r["e"].menu,subMenuData:r["e"]&&r["e"].subMenu}},computed:{menuOpen:function(){return this.$store.getters.isMenuOpen}},watch:{$route:function(e){"inicio"===e.name&&this.toggleMenu(!1)}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}}),l=u,d=(t("2ec0"),t("2877")),m=Object(d["a"])(l,s,c,!1,null,"32945cac",null),f=m.exports,p=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("header",{staticClass:"header container-fluid"},[a("div",{staticClass:"row align-items-center justify-content-between"},[a("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=e.$route.name?a("div",{staticClass:"header__menu me-5",on:{click:function(n){return e.toggleMenu(!e.menuOpen)}}},[a("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":e.menuOpen}},[a("div",{staticClass:"line-2"}),a("div",{staticClass:"line-1"}),a("div",{staticClass:"line-3"})]),a("span",[e._v("MENÚ")])]):e._e(),a("img",{staticClass:"header__logo me-sm-5",attrs:{src:t("9eb5")}}),e.isInicio?a("div",{staticClass:"d-none d-md-flex align-items-center"},[a("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[e._v("Contenidos")]),a("a",{attrs:{href:"#creditos"}},[e._v("Créditos")])]):a("div",{staticClass:"header__componente-formativo"},[a("span",[e._v(e._s(e.globalData.componenteFormativo))])])]),e.isInicio?a("div",{staticClass:"col-auto"},[a("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[a("span",{staticClass:"me-1"},[e._v("Iniciar")]),a("i",{staticClass:"fas fa-angle-right"})])],1):e._e()])])},b=[],h=(t("7db0"),{data:function(){return{menuData:r["e"].menu}},methods:{},computed:{iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),n=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||n}}}),_={name:"Header",mixins:[h],data:function(){return{globalData:r["c"]}},computed:{isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}},g=_,v=(t("5cc8"),Object(d["a"])(g,p,b,!1,null,"3524e9ca",null)),C=v.exports,k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"barra-avance",class:[e.showBarra?"barra-avance--open":"barra-avance--close"]},[t("router-link",{staticClass:"boton barra-avance__boton--regresar",class:[!e.controlLinks.back.name&&"barra-avance__boton--disable"],attrs:{to:{name:e.controlLinks.back.name,hash:e.controlLinks.back.hash?"#"+e.controlLinks.back.hash:""}}},[t("i",{staticClass:"me-2 fas fa-angle-left"}),t("span",[e._v("Regresar")])]),t("router-link",{staticClass:"boton",class:[!e.controlLinks.next.name&&"barra-avance__boton--disable"],attrs:{to:{name:e.controlLinks.next.name,hash:e.controlLinks.next.hash?"#"+e.controlLinks.next.hash:""}}},[t("span",{staticClass:"me-2"},[e._v("Continuar")]),t("i",{staticClass:"fas fa-angle-right"})])],1)},y=[],E=(t("d81d"),t("caad"),t("2532"),{name:"BarraAvance",data:function(){return{menuData:r["e"].menu,cursoSelection:null,idSelecctionArr:[]}},computed:{showBarra:function(){var e=this.controlLinks.next&&this.controlLinks.next.name||this.controlLinks.back&&this.controlLinks.back.name;return!this.menuOpen&&e},controlLinks:function(){var e=this,n=this.menuData.find((function(n){return n.nombreRuta===e.$route.name}));if("introduccion"===this.$route.name){var t=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return{next:{name:t.nombreRuta,hash:""},back:{name:"",hash:""}}}if(n){var a={},o=this.menuData.map((function(e){return e.nombreRuta})).indexOf(this.$route.name),i=this.menuData[o-1],r=i&&i.nombreRuta.includes("tema"),s=i&&i.nombreRuta.includes("introduccion");a.back=r||s?{name:i.nombreRuta,hash:""}:{name:"",hash:""};var c=this.menuData[o+1],u=c&&c.nombreRuta.includes("tema");return a.next=u?{name:c.nombreRuta,hash:""}:{name:"",hash:""},a}return{next:{name:"",hash:""},back:{name:"",hash:""}}},menuOpen:function(){return this.$store.getters.isMenuOpen}}}),w=E,O=(t("21b2"),Object(d["a"])(w,k,y,!1,null,"32887be8",null)),R=O.exports,x={name:"App",components:{AsideMenu:f,Header:C,BarraAvance:R},data:function(){return{menuOpen:!1,globalData:r["c"]}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},created:function(){document.title=this.globalData.componenteFormativo}},S=x,j=(t("cf25"),Object(d["a"])(S,o,i,!1,null,null,null)),D=j.exports,M=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("BannerPrincipal"),t("div",{staticClass:"pb-5",attrs:{id:"contenidos"}}),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5"},[e._m(0),t("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[t("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(n){return t("router-link",{key:"desarrollo-"+n.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:n.nombreRuta}}},[t("div",{staticClass:"desarrollo-contenidos__item__texto"},[n.hasOwnProperty("numero")?t("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(n.numero))]):t("i",{staticClass:"desarrollo-contenidos__item__icono",class:n.icono}),t("span",[e._v(e._s(n.titulo))])]),t("a",{staticClass:"boton--sm d-none d-md-block"},[t("span",[e._v("Ver más")])])])})),1)])]),t("div",{staticClass:"pb-5",attrs:{id:"creditos"}}),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 mb-5"},[e._m(1),t("CreditosComp")],1),t("Footer")],1)},P=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h6"},[e._v("Desarrollo"),t("br"),e._v("de contenidos")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h6"},[e._v("Créditos")])])}],L=t("2909"),A=(t("99af"),t("4de4"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"banner-principal"},[t("div",{staticClass:"container tarjeta p-4 ps-sm-5 pe-sm-5 pt-sm-5 pb-0",style:{"background-image":"url("+e.globalData.fondoBannerPrincipal+")"}},[t("div",{staticClass:"row justify-content-around"},[t("div",{staticClass:"col-lg-7 col-xxl-5 banner-principal__info pb-4 pb-sm-5"},[t("div",{staticClass:"banner-principal__componente"},[t("h1",{staticClass:"mb-0"},[e._v(e._s(e.globalData.componenteFormativo))])]),t("div",{staticClass:"banner-principal__descripcion"},[t("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),t("div",{staticClass:"banner-principal__accion"},[t("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[t("span",{staticClass:"me-1"},[e._v("Iniciar")]),t("i",{staticClass:"fas fa-angle-right"})])],1)]),t("div",{staticClass:"d-none d-lg-block col-lg-5 align-self-center"},[t("img",{attrs:{src:e.globalData.imagenBannerPrincipal}})])])])])}),T=[],q={name:"BannerPrincipal",mixins:[h],data:function(){return{globalData:r["c"]}}},$=q,B=(t("b988"),Object(d["a"])($,A,T,!1,null,"9389cda0",null)),z=B.exports,N=t("25aa"),U=t("0462"),F={name:"Inicio",components:{BannerPrincipal:z,CreditosComp:N["a"],Footer:U["a"]},data:function(){return{menuPrincipalData:r["e"]}},computed:{desarrolloContenidosData:function(){var e=[].concat(Object(L["a"])(this.menuPrincipalData.menu),Object(L["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},G=F,V=(t("b684"),Object(d["a"])(G,I,P,!1,null,"d8a00f74",null)),J=V.exports,H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"curso",attrs:{id:"curso"}},[t("router-view")],1)},X=[],K={name:"Curso"},Y=K,W=Object(d["a"])(Y,H,X,!1,null,"d1ebcac6",null),Z=W.exports;a["a"].use(M["a"]);var Q=new M["a"]({routes:[{path:"/",name:"inicio",component:J},{path:"/introduccion",name:"introduccion",component:function(){return t.e("intro").then(t.bind(null,"5167"))}},{path:"/curso",name:"curso",component:Z,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return t.e("tema1").then(t.bind(null,"b14e"))}},{path:"tema2",name:"tema2",component:function(){return t.e("tema2").then(t.bind(null,"5b0d"))}}]},{path:"/actividad/:index?",name:"actividad",component:function(){return t.e("actividad").then(t.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return t.e("glosario").then(t.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return t.e("comple").then(t.bind(null,"dbb5"))}},{path:"/referencias",name:"referencias",component:function(){return t.e("referencias").then(t.bind(null,"7c1e"))}},{path:"/creditos",name:"creditos",component:function(){return t.e("creditos").then(t.bind(null,"ef72"))}}],scrollBehavior:function(e,n){if(e.hash){var t={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?t:new Promise((function(e){setTimeout((function(){e(t)}),500)}))}return{x:0,y:0,behavior:"auto"}}}),ee=Q,ne=t("2f62");a["a"].use(ne["a"]);var te=new ne["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:function(e){return!!e.loading},isMenuOpen:function(e){return e.menuOpen}},mutations:{toggleMenu:function(e,n){e.menuOpen=n},increment:function(e){e.loading++},decrease:function(e){e.loading--}},actions:{toggleMenu:function(e,n){var t=e.commit;t("toggleMenu",n)},increment:function(e){var n=e.commit;n("increment")},decrease:function(e){var n=e.commit;n("decrease")}}});t("becf"),t("7b17"),t("ab8b"),t("a3a0");a["a"].component("AcordionA",(function(){return t.e("chunk-6f26cf2c").then(t.bind(null,"3997"))})),a["a"].component("TabsA",(function(){return t.e("chunk-29460b1d").then(t.bind(null,"67eb"))})),a["a"].component("TabsB",(function(){return t.e("chunk-6f971c89").then(t.bind(null,"fd2f"))})),a["a"].component("TabsC",(function(){return t.e("chunk-46763a27").then(t.bind(null,"58a2"))})),a["a"].component("LineaTiempoA",(function(){return t.e("chunk-2d0c031e").then(t.bind(null,"416a"))})),a["a"].component("LineaTiempoB",(function(){return t.e("chunk-c30fa626").then(t.bind(null,"b269"))})),a["a"].component("PasosA",(function(){return t.e("chunk-18abf34a").then(t.bind(null,"926a"))})),a["a"].component("SlyderA",(function(){return t.e("chunk-7a8dacf9").then(t.bind(null,"b198"))})),a["a"].component("SlyderB",(function(){return t.e("chunk-cde99bde").then(t.bind(null,"aae4"))})),a["a"].component("SlyderC",(function(){return t.e("chunk-7cc2f876").then(t.bind(null,"5dc7"))})),a["a"].component("SlyderD",(function(){return t.e("chunk-7ffbae07").then(t.bind(null,"bedf"))})),a["a"].component("ModalA",(function(){return t.e("chunk-2d0c1cc1").then(t.bind(null,"4829"))}));t("1276"),t("ac1f");a["a"].mixin({methods:{obtenerLink:function(e){var n=window.location.href,t=n.includes("/index.html#")?"index.html#":"#/",a=n.split(t)[0];return a+e}}}),a["a"].config.productionTip=!1,new a["a"]({router:ee,store:te,render:function(e){return e(D)}}).$mount("#app")},"5cc8":function(e,n,t){"use strict";t("352c")},7738:function(e,n,t){},"9eb5":function(e,n,t){e.exports=t.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,t){},ae0a:function(e,n,t){e.exports=t.p+"img/banner-princiapal.7f994a04.svg"},b684:function(e,n,t){"use strict";t("7738")},b988:function(e,n,t){"use strict";t("dfe8")},c02a:function(e,n,t){},cdd9:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return r})),t.d(n,"d",(function(){return s})),t.d(n,"a",(function(){return c}));var a={programaFormacion:"Construcción de requisitos del software",componenteFormativo:"Análisis y especificación de requisitos",descripcionCurso:"En este componente formativo se abordan el análisis de requisitos (priorización, descomposición funcional, matriz de trazabilidad) y estándares, y/o guías existentes para la especificación formal de los mismos dependiendo del tipo de marco de trabajo usado (tradición o ágil).",imagenBannerPrincipal:t("ae0a"),fondoBannerPrincipal:t("e6b0")},o={menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Técnicas de análisis de requisitos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Priorización de requisitos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Matriz de trazabilidad",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Descomposición funcional",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Especificación de requisitos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Estándar IEEE 830",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Estándar IEEE 29148:2018",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"La especificación de requisitos a través de marcos de trabajo ágiles",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Scrum y la especificación de requisitos",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Kanban y la especificación de requisitos",hash:"t_2_5"}]}],subMenu:[{nombreRuta:"actividad",icono:"fas fa-tasks",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},i={liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro industrial del diseño y la manufactura",regional:"Regional Santander"},{nombre:["Jonathan Guerrero Astaiza","Zulema Yidney León Escobar"],cargo:"Expertos temáticos",centro:"Centro de teleinformática y producción industrial",regional:"Regional Cauca"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñadora instruccional",centro:"Centro de gestión industrial",regional:"Regional Bogotá"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro industrial del diseño y la manufactura",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de comercio y servicios",regional:"Regional Tolima"},{nombre:["José Jaime Luis Tang Pinzón","Juan Daniel Polanco Muñoz","Luis Gabriel Urueta Alvarez","Nelson Iván Vera Briceño","Wilson Andres Arenales Cáceres"],cargo:"Diseño web y Producción Audiovisual"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Desarrollo Front-End"},{nombre:["Rafael Augusto Mantilla"],cargo:"Revisor de contenidos"},{centro:"Centro industrial del diseño y la manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:["Milady Tatiana Villamil Castellanos"],cargo:["Validación de recursos"],centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},r=[{referencia:"830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). IEEE Standard | IEEE Xplore.",link:"https://ieeexplore.ieee.org/document/720574"},{referencia:"Pantaleo, L., y Rinaudo. (2018). Ingeniería de software. Alfaomega.",link:""},{referencia:"Penzenstadler, B. (s. f.). Requirements engineering. CSU Long Beach.",link:"https://bit.ly/3rtBKXN "},{referencia:"Porfirio, C. (2021). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades.",link:"https://bit.ly/3cvumqz"},{referencia:"Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29.",link:"https://doi.org/10.22305/ict-unpa.v5i1.66"},{referencia:"Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.). ScrumStudy.",link:"https://www.scrumstudy.com"},{referencia:"Sommerville I. (2011). Ingeniería del software. Addison-Wesley.",link:""}],s=[{termino:"Estándar",significado:"referencia, patrón o modelo que es utilizado a nivel general en un determinado ámbito."},{termino:"Marcos de trabajo ágiles",significado:"conjunto de estándares, metodologías, técnicas, frameworks o guías que rigen un proceso de desarrollo de software basadas en principios y/o valores ágiles como, por ejemplo: Scrum, Lean Software, XP, TDD, entre otros."},{termino:"Marcos de trabajo tradicionales",significado:"conjunto de estándares, metodologías, técnicas, frameworks o guías que rigen un proceso de desarrollo de software basadas en el ciclo de vida tradicional del software como, por ejemplo: RUP, CMMI, ISO 9001, Microsoft Solution Framework, entre otros. "},{termino:"Metodología",significado:"síntesis de un conjunto de técnicas, métodos y procedimientos que se deben seguir durante el desarrollo de un proyecto."},{termino:"Pruebas unitarias",significado:"forma de comprobar el correcto funcionamiento de una unidad de código."},{termino:"Pruebas de integración",significado:"prueba que se ejecuta una vez se aprueban las pruebas unitarias y lo que busca es verificar que el conjunto de fragmentos de código funciona junto de forma correcta. Es una prueba de conjunto."},{termino:"Técnica",significado:"manera en la que un conjunto de procedimientos es aplicado en una tarea específica, con base en un conocimiento para obtener un resultado específico."}],c=[{texto:"UMNG. (2019). Elementos de la norma IEEE 830. [Video]. YouTube.",tipo:"Video",link:"https://youtu.be/LjBOTZdd_iE"},{texto:"California State University Long Beach. (2021). Requirements Engineering, CSU Long Beach, Penzenstadler. ",tipo:"Página web",link:"https://bit.ly/3rtBKXN"},{texto:"830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). IEEE Standard | IEEE Xplore.",tipo:"Página web",link:"https://ieeexplore.ieee.org/document/720574 "},{texto:"SO/IEC/IEEE 29148:2011. (s. f.). ISO. ",tipo:"Página web",link:"https://www.iso.org/standard/45171.html"},{texto:"Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.).",tipo:"Video",link:"https://www.scrumstudy.com"}]},cf25:function(e,n,t){"use strict";t("fea6")},dfe8:function(e,n,t){},e6b0:function(e,n,t){e.exports=t.p+"img/fondo-banner-principal.0636cf4e.png"},f7db:function(e,n,t){},fea6:function(e,n,t){}});
//# sourceMappingURL=app.2b669b87.js.map