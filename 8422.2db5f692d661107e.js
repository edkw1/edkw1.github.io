"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8422],{8422:(k,u,o)=>{o.r(u),o.d(u,{MainModule:()=>J});var l=o(1779),a=o(3071),e=o(6738),p=o(7827),g=o(8630),v=o(5437),m=o(946),h=o(4314),c=o(6895),f=o(9224),w=o(5458);const Z=["bannersList"],M=["promotionsList"];function S(t,n){if(1&t&&(e.TgZ(0,"div",12,13)(2,"a",14)(3,"div",15),e._UZ(4,"img",16),e.ALo(5,"appImageSecure"),e.qZA(),e._UZ(6,"div",17)(7,"div",18),e.TgZ(8,"div",19),e.O4$(),e.TgZ(9,"svg",20),e._UZ(10,"path",21)(11,"path",22),e.qZA()()()()),2&t){const i=n.$implicit;e.xp6(4),e.Q6J("src",e.lcZ(5,3,i.fimg_url),e.LSH),e.xp6(2),e.Q6J("innerHTML",i.title.rendered,e.oJD),e.xp6(1),e.Q6J("innerHTML",i.content.rendered,e.oJD)}}const L=function(){return["/personal","delivery"]};function C(t,n){if(1&t&&(e.TgZ(0,"div",12)(1,"a",23),e._UZ(2,"img",16),e.ALo(3,"appImageSecure"),e.TgZ(4,"div",24),e._uU(5,"\u0422\u043e\u0432\u0430\u0440\u044b \u0432 \u043f\u0443\u0442\u0438"),e.qZA()()()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("routerLink",e.DdM(4,L)),e.xp6(1),e.Q6J("src",e.lcZ(3,2,null==i.options||null==i.options.acf?null:i.options.acf.opt_noimg_prodway),e.LSH)}}const b=function(){return["/catalog"]},y=function(t){return{category_id:t}};function T(t,n){if(1&t&&(e.TgZ(0,"div",12)(1,"a",25),e._UZ(2,"img",16),e.ALo(3,"appImageSecure"),e.TgZ(4,"div",24),e._uU(5),e.qZA()()()),2&t){const i=n.$implicit;e.xp6(1),e.Q6J("routerLink",e.DdM(6,b))("queryParams",e.VKq(7,y,i.id)),e.xp6(1),e.Q6J("src",e.lcZ(3,4,i.photo),e.LSH),e.xp6(3),e.Oqu(i.title)}}function P(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",12,26)(2,"div",27),e.NdJ("linkClicked",function(r){e.CHM(i);const d=e.oxw();return e.KtG(d.promotionClick(r))}),e.qZA()()}if(2&t){const i=n.$implicit;e.xp6(2),e.Q6J("product",i)}}const A=[{path:"",component:(()=>{class t{constructor(i,s,r,d,x,F){this.api=i,this.categoryService=s,this.loaderService=r,this.authService=d,this.optionsService=x,this.router=F,this.promotionsProducts=[]}ngOnInit(){this.loadSlides(),this.loadCategories(),this.loadPromotionsProducts(),this.subscribeToOptions()}ngAfterViewInit(){this.configureBannersSlider(),this.configureCategoriesSlider(),this.configureProductsSlider()}configureBannersSlider(){this.bannersList.changes.subscribe(()=>{new Swiper(".banner-slider",{loop:!0,pagination:{el:".banner-slider .swiper-pagination",clickable:!0},breakpoints:{280:{slidesPerView:1.2,spaceBetween:10},767:{slidesPerView:1.5,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:20}}})})}configureCategoriesSlider(){new Swiper(".categories-slider",{pagination:{el:".categories-slider .swiper-pagination",clickable:!0},breakpoints:{280:{slidesPerView:1.2,spaceBetween:25},768:{slidesPerView:3,spaceBetween:25},1024:{slidesPerView:4,spaceBetween:25}}})}configureProductsSlider(){this.promotionsList.changes.subscribe(()=>{new Swiper(".products-slider",{pagination:{el:".products-slider .swiper-pagination",clickable:!0},breakpoints:{280:{slidesPerView:1.2,spaceBetween:10},767:{slidesPerView:2.5,spaceBetween:10},1199:{slidesPerView:4,spaceBetween:10},1439:{slidesPerView:5,spaceBetween:10}}})})}authorized(){return this.authService.isAuthorized}promotionClick(i){this.router.navigate(["/catalog"],{queryParams:{category_id:i.category_id,sort:"by_discount_amount"}})}loadCategories(){this.loaderService.setLoading(!0),this.categoryService.categories.subscribe(i=>{this.categories=i,this.loaderService.setLoading(!1)},()=>this.loaderService.setLoading(!1))}loadPromotionsProducts(){this.api.getCachedPromotionsProducts().subscribe(i=>{this.promotionsProducts=i.slice(0,5)})}loadSlides(){this.loaderService.setLoading(!0),this.api.getSlides().subscribe(i=>{i&&(this.slides=i),this.loaderService.setLoading(!1)},()=>this.loaderService.setLoading(!1))}subscribeToOptions(){this.optionsService.getOptions().subscribe(i=>this.options=i)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.s),e.Y36(g.H),e.Y36(v.D),e.Y36(m.e),e.Y36(h.I),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-page"]],viewQuery:function(i,s){if(1&i&&(e.Gf(Z,5),e.Gf(M,5)),2&i){let r;e.iGM(r=e.CRH())&&(s.bannersList=r),e.iGM(r=e.CRH())&&(s.promotionsList=r)}},decls:25,vars:4,consts:[[1,"banner"],[1,"container"],[1,"swiper","banner-slider"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-pagination"],[1,"categories"],[1,"section-head"],[1,"swiper","categories-slider"],["class","swiper-slide",4,"ngIf"],[1,"popular"],[1,"swiper","products-slider"],[1,"swiper-slide"],["bannersList",""],["href","#",1,"banner-slide"],[1,"banner-slide__img"],["alt","",3,"src"],[1,"banner-slide__name",3,"innerHTML"],[1,"banner-slide__descr",3,"innerHTML"],[1,"banner-slide__icon"],["xmlns","http://www.w3.org/2000/svg","width","15","height","15","viewBox","0 0 15 15","fill","none"],["d","M1 1H14V14","stroke-width","2","stroke-miterlimit","10"],["d","M0.799988 14.2L14 1","stroke-width","2","stroke-miterlimit","10"],["href","",1,"category",3,"routerLink"],[1,"category__name"],["href","",1,"category",3,"routerLink","queryParams"],["promotionsList",""],["app-product","",3,"product","linkClicked"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,S,12,5,"div",4),e.qZA(),e._UZ(5,"div",5),e.qZA()()(),e.TgZ(6,"section",6)(7,"div",1)(8,"div",7)(9,"h2"),e._uU(10,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),e.qZA()(),e.TgZ(11,"div",8)(12,"div",3),e.YNc(13,C,6,5,"div",9),e.YNc(14,T,6,9,"div",4),e.qZA(),e._UZ(15,"div",5),e.qZA()()(),e.TgZ(16,"section",10)(17,"div",1)(18,"div",7)(19,"h2"),e._uU(20,"\u0410\u043a\u0446\u0438\u0438"),e.qZA()(),e.TgZ(21,"div",11)(22,"div",3),e.YNc(23,P,3,1,"div",4),e.qZA(),e._UZ(24,"div",5),e.qZA()()()),2&i&&(e.xp6(4),e.Q6J("ngForOf",s.slides),e.xp6(9),e.Q6J("ngIf",s.authorized()),e.xp6(1),e.Q6J("ngForOf",s.categories),e.xp6(9),e.Q6J("ngForOf",s.promotionsProducts))},dependencies:[c.sg,c.O5,f.F,a.yS,w.H]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(A),a.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,l.m,B]}),t})()}}]);