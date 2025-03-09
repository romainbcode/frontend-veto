import{a as _e,b as Ce,c as he,d as ge,e as we,f as Se,g as Me}from"./chunk-OAYQEB3L.js";import{a as fe}from"./chunk-NCZL3VKO.js";import{a as J,b as K,c as Q,d as U,e as X,f as Y,g as Z,h as ee,i as te,j as ie,k as ne,l as re,m as me,n as le}from"./chunk-3DAEMDKI.js";import{a as B,b as W,c as G,d as O,e as L,f as q,h as z,i as ae,j as oe}from"./chunk-HPZP44YZ.js";import{b as ue,d as v}from"./chunk-GWJNBV46.js";import"./chunk-WS7OEYDR.js";import{a as ce,c as se,g as pe,n as de}from"./chunk-JOFQLKKD.js";import{N as j,R as $,g as P}from"./chunk-YSJNSMYB.js";import{Fb as E,Gb as c,Hb as M,Ib as D,Jb as b,Lb as N,Mb as k,Nb as V,Pb as A,Sa as a,Ta as x,ca as y,ha as S,jb as d,lb as l,mc as R,nc as F,oc as H,pa as h,pb as n,pc as I,qa as g,qb as o,rb as s,sb as f,tb as u,vb as T,xb as _,yb as w}from"./chunk-BEANJWLH.js";var Ae=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=S({type:e,selectors:[["app-card-owner"]],inputs:{firstName:"firstName",lastName:"lastName",email:"email"},standalone:!0,features:[A],decls:5,vars:3,consts:[[1,"fw-normal","mb-1"],[1,"fw-light"]],template:function(r,i){r&1&&(n(0,"div")(1,"div",0),c(2),o(),n(3,"div",1),c(4),o()()),r&2&&(a(2),b("",i.lastName," ",i.firstName,""),a(2),M(i.email))},encapsulation:2})}}return e})();function Te(e,m){e&1&&(n(0,"th",21),c(1,"Nom"),o())}function ve(e,m){if(e&1&&(n(0,"td",22),c(1),o()),e&2){let t=m.$implicit;a(),M(t.nom)}}function ye(e,m){e&1&&(n(0,"th",21),c(1,"Type"),o())}function Ee(e,m){e&1&&s(0,"img",28)}function De(e,m){e&1&&s(0,"img",29)}function be(e,m){e&1&&s(0,"img",30)}function Ne(e,m){e&1&&(n(0,"span"),c(1,"Autre"),o())}function ke(e,m){if(e&1&&(n(0,"td",22),f(1,23),d(2,Ee,1,0,"img",24)(3,De,1,0,"img",25)(4,be,1,0,"img",26)(5,Ne,2,0,"span",27),u(),o()),e&2){let t=m.$implicit;a(),l("ngSwitch",t.type.id),a(),l("ngSwitchCase",1),a(),l("ngSwitchCase",2),a(),l("ngSwitchCase",3)}}function Ve(e,m){e&1&&(n(0,"th",21),c(1,"Date de naissance"),o())}function Re(e,m){if(e&1&&(n(0,"td",22),c(1),o()),e&2){let t=m.$implicit;a(),D(" ",t.dateNaissance,"")}}function Fe(e,m){e&1&&(n(0,"th",21),c(1,"Propri\xE9taire"),o())}function He(e,m){if(e&1&&(n(0,"td",22),s(1,"app-card-owner",31),o()),e&2){let t=m.$implicit;a(),l("firstName",t.proprietaire.prenom)("lastName",t.proprietaire.nom)("email",t.proprietaire.email)}}function Ie(e,m){e&1&&s(0,"th",32)}function Pe(e,m){if(e&1){let t=T();n(0,"td",22)(1,"button",33),_("click",function(i){return h(t),g(i.stopPropagation())}),s(2,"fa-icon",34),o(),n(3,"mat-menu",null,0)(5,"button",35),_("click",function(i){let p=h(t).$implicit;return w().deleteAnimal(p.id),g(i.stopPropagation())}),s(6,"fa-icon",36),n(7,"span"),c(8,"Supprimer"),o()(),n(9,"button",35),_("click",function(i){let p=h(t).$implicit;return w().editAnimal(p.id),g(i.stopPropagation())}),s(10,"fa-icon",37),n(11,"span"),c(12,"Modifier"),o()()()()}if(e&2){let t=E(4),r=w();a(),l("matMenuTriggerFor",t),a(),l("icon",r.faEllipsisVertical),a(4),l("icon",r.faTrash),a(4),l("icon",r.faEdit)}}function je(e,m){e&1&&s(0,"tr",38)}function $e(e,m){if(e&1){let t=T();n(0,"tr",39),_("click",function(){let i=h(t).$implicit,p=w();return g(p.showAnimal(i.id))}),o()}}var pt=(()=>{class e{constructor(t,r){this.animalService=t,this.router=r,this.dialog=y(j),this.faTrash=W,this.faEdit=B,this.faCheck=z,this.faHourglass=G,this.faPlus=q,this.faEllipsisVertical=O,this.faMagnifyingGlass=L,this.displayedColumns=["Nom","DateNaissance","Type","Propri\xE9taire","Actions"],this.searchTerm=""}filterAnimaux(){this.animalService.findAnimalWithFilter(this.searchTerm)}deleteAnimal(t){this.dialog.open(le,{width:"500px"}).afterClosed().subscribe(i=>{i&&this.animalService.deleteAnimalById(t).subscribe()})}createAnimal(){this.dialog.open(v,{width:"500px"})}editAnimal(t){this.dialog.open(v,{width:"500px",data:{id:t}})}showAnimal(t){this.dialog.open(fe,{width:"500px",data:{id:t}})}static{this.\u0275fac=function(r){return new(r||e)(x(ue),x(P))}}static{this.\u0275cmp=S({type:e,selectors:[["app-animal"]],standalone:!0,features:[A],decls:29,vars:6,consts:[["menu","matMenu"],[1,"p-3"],[1,"d-flex","justify-content-end","align-items-center"],[1,"d-flex","align-items-center","input-group","me-2",2,"width","20%"],[1,"input-group-prepend"],[1,"input-group-text"],[3,"icon"],["type","text","placeholder","Rechercher...",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-dark",3,"click"],[1,"me-2",3,"icon"],["mat-table","","matSort","",2,"table-layout","auto","width","100%",3,"dataSource"],["matColumnDef","Nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Type"],["matColumnDef","DateNaissance"],["matColumnDef","Propri\xE9taire"],["matColumnDef","Actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[3,"ngSwitch"],["src","./assets/tete-de-chien.png","alt","Chien","class","img-logo",4,"ngSwitchCase"],["src","./assets/tete-de-chat.png","alt","Chat","class","img-logo",4,"ngSwitchCase"],["src","./assets/cameleon.png","alt","NAC","class","img-logo",4,"ngSwitchCase"],[4,"ngSwitchDefault"],["src","./assets/tete-de-chien.png","alt","Chien",1,"img-logo"],["src","./assets/tete-de-chat.png","alt","Chat",1,"img-logo"],["src","./assets/cameleon.png","alt","NAC",1,"img-logo"],[3,"firstName","lastName","email"],["mat-header-cell",""],["mat-button","",3,"click","matMenuTriggerFor"],[2,"color","black",3,"icon"],["mat-menu-item","",3,"click"],[1,"me-2",2,"color","red",3,"icon"],[1,"me-2",2,"color","blue",3,"icon"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(r,i){r&1&&(n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"span",5),s(5,"fa-icon",6),o()(),n(6,"input",7),V("ngModelChange",function(C){return k(i.searchTerm,C)||(i.searchTerm=C),C}),_("ngModelChange",function(){return i.filterAnimaux()}),o()(),n(7,"button",8),_("click",function(){return i.createAnimal()}),s(8,"fa-icon",9),n(9,"span"),c(10,"Ajouter un animal"),o()()(),n(11,"table",10),f(12,11),d(13,Te,2,0,"th",12)(14,ve,2,1,"td",13),u(),f(15,14),d(16,ye,2,0,"th",12)(17,ke,6,4,"td",13),u(),f(18,15),d(19,Ve,2,0,"th",12)(20,Re,2,1,"td",13),u(),f(21,16),d(22,Fe,2,0,"th",12)(23,He,2,3,"td",13),u(),f(24,17),d(25,Ie,1,0,"th",18)(26,Pe,13,4,"td",13),u(),d(27,je,1,0,"tr",19)(28,$e,1,0,"tr",20),o()()),r&2&&(a(5),l("icon",i.faMagnifyingGlass),a(),N("ngModel",i.searchTerm),a(2),l("icon",i.faPlus),a(3),l("dataSource",i.animalService.animaux()),a(16),l("matHeaderRowDef",i.displayedColumns),a(),l("matRowDefColumns",i.displayedColumns))},dependencies:[ne,J,Q,Z,U,K,ee,X,Y,te,ie,I,R,F,H,oe,ae,ge,Ce,_e,he,me,re,$,de,ce,se,pe,Me,we,Se,Ae],encapsulation:2})}}return e})();export{pt as AnimalComponent};
