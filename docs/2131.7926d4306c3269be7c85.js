(self.webpackChunkBacExams=self.webpackChunkBacExams||[]).push([[2131],{2131:(n,e,t)=>{"use strict";t.r(e),t.d(e,{ViewsModule:()=>L});var o=t(6274),i=t(4988),s=t(3991);class a{constructor(n,e,t,o,i,s){this.index=n,this.type=e,this.title=t,this.parent=o,this.children=i,this.content=s}}const{parse:c}=JSON,{keys:r}=Object,l=String,u={},p="object",m=(n,e)=>e,g=n=>n instanceof l?l(n):n,h=(n,e)=>"string"==typeof e?new l(e):e,x=(n,e,t,o)=>{const i=[];for(let s=r(t),{length:a}=s,c=0;c<a;c++){const a=s[c],r=t[a];if(r instanceof l){const s=n[r];typeof s!==p||e.has(s)?t[a]=o.call(t,a,s):(e.add(s),t[a]=u,i.push({k:a,a:[n,e,s,o]}))}else t[a]!==u&&(t[a]=o.call(t,a,r))}for(let{length:s}=i,a=0;a<s;a++){const{k:n,a:e}=i[a];t[n]=o.call(t,n,x.apply(null,e))}return t};var f=t(3606);const S={sm:["Examen national 2016 \u2013 SM \u2013 Session normale","Examen national 2016 \u2013 SM \u2013 Session rattrapage","Examen national 2017 \u2013 SM \u2013 Session normale","Examen national 2017 \u2013 SM \u2013 Session rattrapage","Examen national 2018 \u2013 SM \u2013 Session normale","Examen national 2018\u2013 SM \u2013 Session rattrapage","Examen national 2019 \u2013 SM \u2013 Session normale","Examen national 2019 \u2013 SM \u2013 Session rattrapage","Examen national 2020 \u2013 SM \u2013 Session normale","Examen national 2020 \u2013 SM \u2013 Session rattrapage","Examen national 2021 \u2013 SM \u2013 Session normale"],sp:["Examen national 2016 \u2013 SP \u2013 Session normale","Examen national 2016 \u2013 SP \u2013 Session rattrapage","Examen national 2017 \u2013 SP \u2013 Session normale","Examen national 2017 \u2013 SP \u2013 Session rattrapage","Examen national 2018 \u2013 SP \u2013 Session normale","Examen national 2018 \u2013 SP \u2013 Session rattrapage","Examen national 2019 \u2013 SP \u2013 Session normale","Examen national 2019 \u2013 SP \u2013 Session rattrapage","Examen national 2020 \u2013 SP \u2013 Session normale","Examen national 2020 \u2013 SP \u2013 Session rattrapage","Examen national 2021 \u2013 SP \u2013 Session normale"],svt:["Examen national 2016 \u2013 SVT \u2013 Session normale","Examen national 2016 \u2013 SVT \u2013 Session rattrapage","Examen national 2017 \u2013 SVT \u2013 Session normale","Examen national 2017 \u2013 SVT \u2013 Session rattrapage","Examen national 2018 \u2013 SVT \u2013 Session normale","Examen national 2018 \u2013 SVT \u2013 Session rattrapage","Examen national 2019 \u2013 SVT \u2013 Session normale","Examen national 2019 \u2013 SVT \u2013 Session rattrapage","Examen national 2020 \u2013 SVT \u2013 Session normale","Examen national 2020 \u2013 SVT \u2013 Session rattrapage","Examen national 2021 \u2013 SVT \u2013 Session normale"]};var d=t(1887);let v=(()=>{class n{constructor(n){this.http=n,this.baseUrl="assets/exams/",this.branch="",this.examName=""}getAllExams(n){return S[n]}getExam(){return this.http.get(this.baseUrl+this.branch+"/"+this.examName+".json")}}return n.\u0275fac=function(e){return new(e||n)(f.LFG(d.eN))},n.\u0275prov=f.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var w=t(5401);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=f.Xpm({type:n,selectors:[["simple-content-view"]],inputs:{content:"content"},decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(n,e){1&n&&f._UZ(0,"ion-card-content",0),2&n&&f.Q6J("innerHTML",e.content.content,f.oJD)},directives:[w.FN],encapsulation:2}),n})(),y=(()=>{class n{constructor(n){this.examServerService=n}imgSrc(){return this.examServerService.baseUrl+this.examServerService.branch+"/figures/"+this.examServerService.examName+"/"+this.content.content+".png"}alt(){const n=this.examServerService.exam.title;return n.substr(4,n.length-9)+" "+this.content.content}}return n.\u0275fac=function(e){return new(e||n)(f.Y36(v))},n.\u0275cmp=f.Xpm({type:n,selectors:[["figure-view"]],inputs:{content:"content"},decls:3,vars:3,consts:[[1,"figure"],["target","_blank",3,"href"],[3,"src","alt"]],template:function(n,e){1&n&&(f.TgZ(0,"ion-card-content",0),f.TgZ(1,"a",1),f._UZ(2,"img",2),f.qZA(),f.qZA()),2&n&&(f.xp6(1),f.Q6J("href",e.imgSrc(),f.LSH),f.xp6(1),f.Q6J("src",e.imgSrc(),f.LSH)("alt",e.alt()))},directives:[w.FN],encapsulation:2}),n})();function E(n,e){if(1&n&&f._UZ(0,"simple-content-view",3),2&n){const n=f.oxw();f.Q6J("content",n.content)}}function T(n,e){if(1&n&&f._UZ(0,"figure-view",3),2&n){const n=f.oxw();f.Q6J("content",n.content)}}function A(n,e){if(1&n&&(f.ynx(0),f._UZ(1,"content-view",3),f.BQk()),2&n){const n=e.$implicit;f.xp6(1),f.Q6J("content",n)}}function Q(n,e){if(1&n&&(f.ynx(0),f.YNc(1,A,2,1,"ng-container",4),f.BQk()),2&n){const n=f.oxw();f.xp6(1),f.Q6J("ngForOf",n.content.children)}}function k(n,e){if(1&n){const n=f.EpF();f.ynx(0),f._UZ(1,"simple-content-view",3),f.TgZ(2,"ion-button",5),f.NdJ("click",function(){return f.CHM(n),f.oxw().presentModal()}),f._uU(3,"\xc9l\xe9ments de r\xe9ponse"),f.qZA(),f.BQk()}if(2&n){const n=f.oxw();f.xp6(1),f.Q6J("content",n.content.children[0])}}function b(n,e){if(1&n&&(f.ynx(0),f._UZ(1,"content-view",3),f.BQk()),2&n){const n=e.$implicit;f.xp6(1),f.Q6J("content",n)}}function J(n,e){if(1&n){const n=f.EpF();f.ynx(0),f.TgZ(1,"div"),f.TgZ(2,"ion-button",6),f.NdJ("click",function(){return f.CHM(n),f.oxw().dismissModal()}),f._UZ(3,"ion-icon",7),f.qZA(),f.YNc(4,b,2,1,"ng-container",4),f.qZA(),f.BQk()}if(2&n){const n=f.oxw();f.xp6(4),f.Q6J("ngForOf",n.content.children)}}let F=(()=>{class n{constructor(n,e){this.modalController=n,this.examsService=e}presentModal(){return e=this,void 0,o=function*(){const e=yield this.modalController.create({component:n,componentProps:{content:this.content.children[1]}});yield e.present(),this.examsService.answerModal=e},new((t=void 0)||(t=Promise))(function(n,i){function s(n){try{c(o.next(n))}catch(e){i(e)}}function a(n){try{c(o.throw(n))}catch(e){i(e)}}function c(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t(function(n){n(o)})).then(s,a)}c((o=o.apply(e,[])).next())});var e,t,o}dismissModal(){this.examsService.answerModal&&this.examsService.answerModal.dismiss().then(()=>{this.examsService.answerModal=null})}}return n.\u0275fac=function(e){return new(e||n)(f.Y36(w.IN),f.Y36(v))},n.\u0275cmp=f.Xpm({type:n,selectors:[["content-view"]],inputs:{content:"content"},decls:6,vars:6,consts:[[3,"ngSwitch"],[3,"content",4,"ngSwitchCase"],[4,"ngSwitchCase"],[3,"content"],[4,"ngFor","ngForOf"],["expand","full",3,"click"],["size","small","expand","full","color","light",3,"click"],["name","close-outline"]],template:function(n,e){1&n&&(f.ynx(0,0),f.YNc(1,E,1,1,"simple-content-view",1),f.YNc(2,T,1,1,"figure-view",1),f.YNc(3,Q,2,1,"ng-container",2),f.YNc(4,k,4,1,"ng-container",2),f.YNc(5,J,5,1,"ng-container",2),f.BQk()),2&n&&(f.Q6J("ngSwitch",e.content.type),f.xp6(1),f.Q6J("ngSwitchCase","SimpleContent"),f.xp6(1),f.Q6J("ngSwitchCase","Figure"),f.xp6(1),f.Q6J("ngSwitchCase","Activity"),f.xp6(1),f.Q6J("ngSwitchCase","ActivityQuestion"),f.xp6(1),f.Q6J("ngSwitchCase","ActivityAnswer"))},directives:[o.RF,o.n9,Z,y,o.sg,n,w.YG,w.gu],encapsulation:2}),n})();function M(n,e){1&n&&f._UZ(0,"ion-icon",7)}function N(n,e){1&n&&f._UZ(0,"ion-icon",8)}function C(n,e){if(1&n){const n=f.EpF();f.TgZ(0,"ion-button",4),f.NdJ("click",function(){return f.CHM(n),f.oxw().onCollapsButtonClick()}),f.YNc(1,M,1,0,"ion-icon",5),f.YNc(2,N,1,0,"ion-icon",6),f.qZA()}if(2&n){const n=f.oxw();f.xp6(1),f.Q6J("ngIf",!n.collapsed),f.xp6(1),f.Q6J("ngIf",n.collapsed)}}function Y(n,e){if(1&n&&f._UZ(0,"section-view",13),2&n){const n=f.oxw().$implicit;f.Q6J("section",n)}}function U(n,e){if(1&n&&f._UZ(0,"content-view",14),2&n){const n=f.oxw().$implicit;f.Q6J("content",n)}}function q(n,e){if(1&n&&(f.TgZ(0,"ion-card",10),f.YNc(1,Y,1,1,"section-view",11),f.YNc(2,U,1,1,"ng-template",null,12,f.W1O),f.qZA()),2&n){const n=e.$implicit,t=f.MAs(3);f.xp6(1),f.Q6J("ngIf","Section"==n.type)("ngIfElse",t)}}function B(n,e){if(1&n&&(f.ynx(0),f.YNc(1,q,4,2,"ion-card",9),f.BQk()),2&n){const n=f.oxw();f.xp6(1),f.Q6J("ngForOf",n.section.children)}}let _=(()=>{class n{constructor(){this.collapsed=!1}ngOnInit(){}onCollapsButtonClick(){this.collapsed=!this.collapsed}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=f.Xpm({type:n,selectors:[["section-view"]],inputs:{section:"section"},decls:4,vars:3,consts:[[2,"position","sticky","top","0","z-index","99"],["fill","clear","color","dark","style","position:absolute;top:-8px;right: -15px;z-index: 100;",3,"click",4,"ngIf"],["color","success",3,"innerHTML"],[4,"ngIf"],["fill","clear","color","dark",2,"position","absolute","top","-8px","right","-15px","z-index","100",3,"click"],["name","chevron-up-outline",4,"ngIf"],["name","chevron-down-outline",4,"ngIf"],["name","chevron-up-outline"],["name","chevron-down-outline"],["color","light",4,"ngFor","ngForOf"],["color","light"],[3,"section",4,"ngIf","ngIfElse"],["Content",""],[3,"section"],[3,"content"]],template:function(n,e){1&n&&(f.TgZ(0,"div",0),f.YNc(1,C,3,2,"ion-button",1),f._UZ(2,"ion-item",2),f.qZA(),f.YNc(3,B,2,1,"ng-container",3)),2&n&&(f.xp6(1),f.Q6J("ngIf",e.section.parent),f.xp6(1),f.Q6J("innerHTML",e.section.title,f.oJD),f.xp6(1),f.Q6J("ngIf",!e.collapsed))},directives:[o.O5,w.Ie,w.YG,w.gu,o.sg,w.PM,n,F],encapsulation:2}),n})();function I(n,e){if(1&n&&(f.ynx(0),f._UZ(1,"section-view",5),f.BQk()),2&n){const n=f.oxw();f.xp6(1),f.Q6J("section",n.course)}}let O=(()=>{class n{constructor(n,e,t){this.router=n,this.route=e,this.examServer=t,this.figuresCount=0,this.answersFiguresCount=0}ngOnInit(){this.parseRoute(),this.examServer.getExam().subscribe(n=>{this.course=((n,e)=>{const t=c(n,h).map(g),o=t[0],i=m,s=typeof o===p&&o?x(t,new Set,o,i):o;return i.call({"":s},"",s)})(JSON.stringify(n)),this.examServer.exam=this.course,this.correctQuestionAnsers(this.course),this.figuresCount=0,this.answersFiguresCount=0,this.countFigures(this.course)},n=>{console.log(n),this.router.navigateByUrl("/home")})}parseRoute(){this.examServer.branch||(this.examServer.examName=this.route.snapshot.params.title,this.examServer.branch=this.route.snapshot.params.title.split("-")[1])}countFigures(n){for(let e of n.children)"Figure"===e.type?"ActivityAnswer"===n.type?(this.answersFiguresCount++,e.content="answer"+this.answersFiguresCount):(this.figuresCount++,e.content="figure"+this.figuresCount):this.countFigures(e)}correctQuestionAnsers(n){for(let e of n.children)if("ActivityQuestion"===e.type){let n=e.children[1];if(n){let t=n.children[0];t?"SimpleContent"==t.type&&""==t.content&&(t.type="Figure"):n.children.push(new a(0,"Figure","",e,[],""))}else n=new a(1,"ActivityAnswer","",e,[],""),e.children[1]=n,n.children.push(new a(0,"Figure","",e,[],""))}else this.correctQuestionAnsers(e)}}return n.\u0275fac=function(e){return new(e||n)(f.Y36(s.F0),f.Y36(s.gz),f.Y36(v))},n.\u0275cmp=f.Xpm({type:n,selectors:[["app-home"]],decls:6,vars:1,consts:[[1,"ion-no-border"],["color","warning"],["slot","end"],["defaultHref","home"],[4,"ngIf"],[3,"section"]],template:function(n,e){1&n&&(f.TgZ(0,"ion-header",0),f.TgZ(1,"ion-toolbar",1),f.TgZ(2,"ion-buttons",2),f._UZ(3,"ion-back-button",3),f.qZA(),f.qZA(),f.qZA(),f.TgZ(4,"ion-content",1),f.YNc(5,I,2,1,"ng-container",4),f.qZA()),2&n&&(f.xp6(5),f.Q6J("ngIf",e.course))},directives:[w.Gu,w.sr,w.Sm,w.oU,w.cs,w.W2,o.O5,_],encapsulation:2}),n})();function P(n,e){if(1&n){const n=f.EpF();f.TgZ(0,"ion-card",5),f.NdJ("click",function(){const e=f.CHM(n).$implicit;return f.oxw().navigateToExam(e)}),f.TgZ(1,"ion-card-header"),f.TgZ(2,"ion-card-title",6),f._uU(3),f.qZA(),f.qZA(),f.qZA()}if(2&n){const n=e.$implicit;f.xp6(3),f.hij(" ",n," ")}}let z=(()=>{class n{constructor(n,e,t){this.router=n,this.route=e,this.examsServer=t,this.exams=t.getAllExams(this.route.snapshot.paramMap.get("branch"))}navigateToExam(n){this.examsServer.examName=this.parseExamName(n),this.router.navigateByUrl("exam/"+this.examsServer.examName)}parseExamName(n){return n.split("\u2013").map(n=>n.trim().split(" ").filter((n,e,t)=>t.length-1==e)).map(n=>n[0].toLowerCase()).join("-")}}return n.\u0275fac=function(e){return new(e||n)(f.Y36(s.F0),f.Y36(s.gz),f.Y36(v))},n.\u0275cmp=f.Xpm({type:n,selectors:[["ng-component"]],decls:6,vars:1,consts:[[1,"ion-no-border"],["color","warning"],["slot","end"],["defaultHref","home"],["color","dark","style","cursor:pointer;",3,"click",4,"ngFor","ngForOf"],["color","dark",2,"cursor","pointer",3,"click"],[2,"font-weight","bolder"]],template:function(n,e){1&n&&(f.TgZ(0,"ion-header",0),f.TgZ(1,"ion-toolbar",1),f.TgZ(2,"ion-buttons",2),f._UZ(3,"ion-back-button",3),f.qZA(),f.qZA(),f.qZA(),f.TgZ(4,"ion-content",1),f.YNc(5,P,4,1,"ion-card",4),f.qZA()),2&n&&(f.xp6(5),f.Q6J("ngForOf",e.exams))},directives:[w.Gu,w.sr,w.Sm,w.oU,w.cs,w.W2,o.sg,w.PM,w.Zi,w.gZ],encapsulation:2}),n})();class H{constructor(n,e){this.key=n,this.name=e}}const V=[new H("svt","Sciences de la Vie et de la Terre"),new H("sp","Sciences Physiques"),new H("sm","Sciences Math\xe9matiques")];function X(n,e){if(1&n){const n=f.EpF();f.TgZ(0,"div",9),f.TgZ(1,"ion-button",10),f.NdJ("click",function(){const e=f.CHM(n).$implicit;return f.oxw().navigateTo(e.key)}),f._uU(2),f.qZA(),f.qZA()}if(2&n){const n=e.$implicit;f.xp6(2),f.hij(" ",n.name," ")}}const $=[{path:"home",component:(()=>{class n{constructor(n,e){this.router=n,this.examService=e,this.allBranches=V}navigateTo(n){this.examService.branch=n,this.router.navigateByUrl("exams/"+n)}}return n.\u0275fac=function(e){return new(e||n)(f.Y36(s.F0),f.Y36(v))},n.\u0275cmp=f.Xpm({type:n,selectors:[["ng-component"]],decls:11,vars:1,consts:[[1,"ion-no-border"],["color","warning",2,"padding","20px"],["lines","none","color","warning"],[2,"text-align","center","font-weight","bolder","font-size","3em","margin","0"],["color","warning"],[1,"xc","fullheight","ion-text-center",2,"padding","20px 0 20px 0"],["name","school",2,"font-size","10em"],[2,"font-size","1.5em","margin","0","line-height","2em","padding","20px"],["class","ion-text-center","ion-padding","",4,"ngFor","ngForOf"],["ion-padding","",1,"ion-text-center"],["color","dark",3,"click"]],template:function(n,e){1&n&&(f.TgZ(0,"ion-header",0),f.TgZ(1,"ion-toolbar",1),f.TgZ(2,"ion-item",2),f.TgZ(3,"ion-title",3),f._uU(4," BAC EXAMS "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(5,"ion-content",4),f.TgZ(6,"div",5),f._UZ(7,"ion-icon",6),f.TgZ(8,"p",7),f._uU(9," R\xe9visez vos cours et entrainez-vous au BAC avec cette collection d'examens nationaux avec leurs corrections. "),f.qZA(),f.YNc(10,X,3,1,"div",8),f.qZA(),f.qZA()),2&n&&(f.xp6(10),f.Q6J("ngForOf",e.allBranches))},directives:[w.Gu,w.sr,w.Ie,w.wd,w.W2,w.gu,o.sg,w.YG],encapsulation:2}),n})()},{path:"exams/:branch",component:z},{path:"exam/:title",component:O},{path:"",redirectTo:"/home",pathMatch:"full"}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[s.Bz.forChild($)],s.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[w.Pc,o.ez,j,i.u5,i.UX]]}),n})()}}]);