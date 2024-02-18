"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5798],{5798:(J,u,a)=>{a.r(u),a.d(u,{NewsModule:()=>k});var g=a(1779),c=a(3071),e=a(6738),l=a(7827),m=a(946),p=a(6895),_=a(4333);const d=function(t){return["/news",t]};function w(t,s){if(1&t&&(e.TgZ(0,"a",7)(1,"p",8),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",9),e._UZ(5,"img",10),e.qZA(),e.TgZ(6,"div",11)(7,"p",12),e._uU(8),e.qZA(),e._UZ(9,"p",13),e.qZA()()),2&t){const n=s.$implicit;e.Q6J("routerLink",e.VKq(8,d,n.id)),e.xp6(2),e.Oqu(e.xi3(3,5,n.date,"dd.MM.yyyy")),e.xp6(3),e.Q6J("src",n.fimg_url,e.LSH),e.xp6(3),e.Oqu(n.title.rendered),e.xp6(1),e.Q6J("innerHTML",n.excerpt.rendered,e.oJD)}}const r=function(){return[]};function f(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){e.CHM(n),e.oxw(2);const o=e.MAs(8);return e.KtG(o.setCurrent(1))}),e.O4$(),e.TgZ(1,"svg",20),e._UZ(2,"path",21)(3,"path",22),e.qZA()()}2&t&&e.Q6J("routerLink",e.DdM(1,r))}function h(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"a",23),e.NdJ("click",function(){e.CHM(n),e.oxw(2);const o=e.MAs(8);return e.KtG(o.previous())}),e.O4$(),e.TgZ(1,"svg",24),e._UZ(2,"path",25),e.qZA()()}2&t&&e.Q6J("routerLink",e.DdM(1,r))}function L(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){const C=e.CHM(n).$implicit;e.oxw(2);const A=e.MAs(8);return e.KtG(A.setCurrent(C.value))}),e._uU(1),e.qZA()}if(2&t){const n=s.$implicit;e.oxw(2);const i=e.MAs(8);e.ekj("current",i.getCurrent()===n.value),e.Q6J("routerLink",e.DdM(4,r)),e.xp6(1),e.Oqu(n.label)}}function v(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"a",26),e.NdJ("click",function(){e.CHM(n),e.oxw(2);const o=e.MAs(8);return e.KtG(o.next())}),e.O4$(),e.TgZ(1,"svg",24),e._UZ(2,"path",27),e.qZA()()}2&t&&e.Q6J("routerLink",e.DdM(1,r))}function N(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){e.CHM(n),e.oxw(2);const o=e.MAs(8);return e.KtG(o.setCurrent(o.getLastPage()))}),e.O4$(),e.TgZ(1,"svg",20),e._UZ(2,"path",28)(3,"path",29),e.qZA()()}2&t&&e.Q6J("routerLink",e.DdM(1,r))}function Z(t,s){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,f,4,2,"a",15),e.YNc(2,h,3,2,"a",16),e.YNc(3,L,2,5,"a",17),e.YNc(4,v,3,2,"a",18),e.YNc(5,N,4,2,"a",15),e.qZA()),2&t){e.oxw();const n=e.MAs(8);e.xp6(1),e.Q6J("ngIf",!n.isFirstPage()),e.xp6(1),e.Q6J("ngIf",!n.isFirstPage()),e.xp6(1),e.Q6J("ngForOf",n.pages),e.xp6(1),e.Q6J("ngIf",!n.isLastPage()),e.xp6(1),e.Q6J("ngIf",!n.isLastPage())}}const M=function(t,s){return{itemsPerPage:t,currentPage:s}},x=[{path:"",component:(()=>{class t{constructor(n,i,o){this.activatedRoute=n,this.api=i,this.authService=o,this.news=[],this.itemsPerPage=8,this.currentPage=1,this.authorized=!1}ngOnInit(){this.activatedRoute.queryParams.subscribe(n=>{let i;this.authorized=this.authService.isAuthorized,i=this.authorized?4:3,this.loadNews(i)})}pageChange(n){this.currentPage=n}loadNews(n){return this.api.getNews(n).subscribe(i=>{this.news=i})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.gz),e.Y36(l.s),e.Y36(m.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-news-page"]],decls:10,vars:8,consts:[[1,"news-page"],[1,"container"],[1,"news__items"],["class","news__item",3,"routerLink",4,"ngFor","ngForOf"],[3,"pageChange"],["p","paginationApi"],["class","pagination__items",4,"ngIf"],[1,"news__item",3,"routerLink"],[1,"news__item-date"],[1,"news__item-img"],["alt","",3,"src"],[1,"news__item-info"],[1,"news__item-name"],[1,"news__item-descr",3,"innerHTML"],[1,"pagination__items"],["class","pagination__item page",3,"routerLink","click",4,"ngIf"],["class","pagination__item prev-page",3,"routerLink","click",4,"ngIf"],["class","pagination__item page",3,"routerLink","current","click",4,"ngFor","ngForOf"],["class","pagination__item next-page",3,"routerLink","click",4,"ngIf"],[1,"pagination__item","page",3,"routerLink","click"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","viewBox","0 0 22 22","fill","none"],["d","M10.12 10.53L20 0.659999C20.1913 0.496173 20.4374 0.410567 20.689 0.420288C20.9407 0.430009 21.1795 0.534342 21.3576 0.712436C21.5356 0.890531 21.64 1.12927 21.6497 1.38095C21.6594 1.63262 21.5738 1.8787 21.41 2.07L12.35 11.13L21.15 19.93C21.3362 20.1174 21.4408 20.3708 21.4408 20.635C21.4408 20.8992 21.3362 21.1526 21.15 21.34V21.34C21.057 21.4337 20.9464 21.5081 20.8246 21.5589C20.7027 21.6097 20.572 21.6358 20.44 21.6358C20.308 21.6358 20.1773 21.6097 20.0554 21.5589C19.9336 21.5081 19.823 21.4337 19.73 21.34L10.12 11.73C9.96122 11.5707 9.87207 11.3549 9.87207 11.13C9.87207 10.9051 9.96122 10.6893 10.12 10.53V10.53Z"],["d","M0.540034 10.53L10.42 0.66C10.5097 0.555318 10.62 0.470298 10.7441 0.410274C10.8681 0.350251 11.0033 0.316521 11.141 0.311201C11.2787 0.305882 11.416 0.329088 11.5444 0.379362C11.6727 0.429637 11.7892 0.505895 11.8867 0.60335C11.9841 0.700804 12.0604 0.817352 12.1107 0.945677C12.1609 1.074 12.1842 1.21133 12.1788 1.34905C12.1735 1.48677 12.1398 1.62191 12.0798 1.74597C12.0197 1.87003 11.9347 1.98035 11.83 2.07L2.77003 11.13L11.57 19.93C11.7563 20.1174 11.8608 20.3708 11.8608 20.635C11.8608 20.8992 11.7563 21.1526 11.57 21.34C11.3827 21.5263 11.1292 21.6308 10.865 21.6308C10.6008 21.6308 10.3474 21.5263 10.16 21.34L0.540034 11.73C0.381264 11.5707 0.292114 11.3549 0.292114 11.13C0.292114 10.9051 0.381264 10.6893 0.540034 10.53V10.53Z"],[1,"pagination__item","prev-page",3,"routerLink","click"],["xmlns","http://www.w3.org/2000/svg","width","12","height","22","viewBox","0 0 12 22","fill","none"],["d","M0.24792 10.2195L10.1279 0.349543C10.2176 0.244862 10.3279 0.159841 10.452 0.0998181C10.576 0.0397948 10.7111 0.00606467 10.8489 0.000745179C10.9866 -0.00457431 11.1239 0.0186316 11.2522 0.0689062C11.3806 0.119181 11.4971 0.195439 11.5946 0.292893C11.692 0.390348 11.7683 0.506896 11.8186 0.635221C11.8688 0.763546 11.892 0.900878 11.8867 1.0386C11.8814 1.17632 11.8477 1.31145 11.7876 1.43551C11.7276 1.55958 11.6426 1.6699 11.5379 1.75954L2.47792 10.8195L11.2779 19.6195C11.4642 19.8069 11.5687 20.0604 11.5687 20.3245C11.5687 20.5887 11.4642 20.8422 11.2779 21.0295C11.0906 21.2158 10.8371 21.3203 10.5729 21.3203C10.3087 21.3203 10.0553 21.2158 9.86792 21.0295L0.24792 11.4195C0.0891498 11.2602 0 11.0445 0 10.8195C0 10.5946 0.0891498 10.3789 0.24792 10.2195V10.2195Z"],[1,"pagination__item","next-page",3,"routerLink","click"],["d","M11.5305 10.1105L1.65046 0.240457C1.45916 0.0766307 1.21308 -0.00897537 0.961404 0.000745782C0.709728 0.0104669 0.470989 0.114799 0.292894 0.292894C0.1148 0.470988 0.0104669 0.709728 0.000745778 0.961404C-0.00897538 1.21308 0.0766312 1.45916 0.240458 1.65046L9.30046 10.7105L0.500458 19.5105C0.314207 19.6978 0.209664 19.9513 0.209664 20.2155C0.209664 20.4796 0.314207 20.7331 0.500458 20.9205C0.68782 21.1067 0.941272 21.2113 1.20546 21.2113C1.46964 21.2113 1.7231 21.1067 1.91046 20.9205L11.5305 11.3105C11.6892 11.1511 11.7784 10.9354 11.7784 10.7105C11.7784 10.4855 11.6892 10.2698 11.5305 10.1105V10.1105Z"],["d","M11.8799 10.53L1.99994 0.659999C1.80864 0.496173 1.56257 0.410567 1.31089 0.420288C1.05921 0.430009 0.820476 0.534342 0.642381 0.712436C0.464287 0.890531 0.359954 1.12927 0.350233 1.38095C0.340512 1.63262 0.426118 1.8787 0.589944 2.07L9.64994 11.13L0.849944 19.93C0.663693 20.1174 0.559152 20.3708 0.559152 20.635C0.559152 20.8992 0.663693 21.1526 0.849944 21.34V21.34C0.942907 21.4337 1.05351 21.5081 1.17537 21.5589C1.29723 21.6097 1.42793 21.6358 1.55994 21.6358C1.69196 21.6358 1.82266 21.6097 1.94452 21.5589C2.06638 21.5081 2.17698 21.4337 2.26994 21.34L11.8799 11.73C12.0387 11.5707 12.1279 11.3549 12.1279 11.13C12.1279 10.9051 12.0387 10.6893 11.8799 10.53V10.53Z"],["d","M21.4599 10.53L11.5799 0.659999C11.3886 0.496173 11.1425 0.410567 10.8908 0.420288C10.6392 0.430009 10.4004 0.534342 10.2223 0.712436C10.0442 0.890531 9.93991 1.12927 9.93019 1.38095C9.92047 1.63262 10.0061 1.8787 10.1699 2.07L19.2299 11.13L10.4299 19.93C10.2437 20.1174 10.1391 20.3708 10.1391 20.635C10.1391 20.8992 10.2437 21.1526 10.4299 21.34C10.6173 21.5263 10.8707 21.6308 11.1349 21.6308C11.3991 21.6308 11.6525 21.5263 11.8399 21.34L21.4599 11.73C21.6187 11.5707 21.7078 11.3549 21.7078 11.13C21.7078 10.9051 21.6187 10.6893 21.4599 10.53V10.53Z"]],template:function(n,i){if(1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1"),e._uU(3,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,w,10,10,"a",3),e.ALo(6,"paginate"),e.qZA(),e.TgZ(7,"pagination-template",4,5),e.NdJ("pageChange",function(C){return i.pageChange(C)}),e.YNc(9,Z,6,5,"div",6),e.qZA()()()),2&n){const o=e.MAs(8);e.xp6(5),e.Q6J("ngForOf",e.xi3(6,2,i.news,e.WLB(5,M,i.itemsPerPage,i.currentPage))),e.xp6(4),e.Q6J("ngIf",o.pages.length>1)}},dependencies:[p.sg,p.O5,c.yS,_.tk,p.uU,_._s]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(x),c.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,g.m,T,_.JX]}),t})()}}]);