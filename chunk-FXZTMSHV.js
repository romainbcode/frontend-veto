import{a as ee,b as te,c as ie,d as oe,e as ne,f as re,g as me,h as ae,i as ce,j as le,k as se,n as de}from"./chunk-3DAEMDKI.js";import{a as Q,b as W,f as Y,g as Z,i as R,j}from"./chunk-HPZP44YZ.js";import{a as pe,b as y,c as ue,d as fe,e as A,f as _,h as he,i as De,j as Ce,n as V,o as B}from"./chunk-JOFQLKKD.js";import{L as I,M as E,N as J,O as K,R as k,a as z,g as T}from"./chunk-YSJNSMYB.js";import{Gb as m,Ib as G,Pb as D,Sa as c,Ta as a,V as f,Y as $,ba as U,ca as L,db as X,ha as h,jb as g,lb as l,p as P,pa as w,pb as r,pc as C,qa as b,qb as n,rb as p,sb as S,tb as M,v as F,vb as H,xb as u,yb as x}from"./chunk-BEANJWLH.js";var v=(()=>{class t{constructor(e){this.httpClient=e,this.documents=X([]),this.reloadDocuments().subscribe()}getDocuments(){return P([{id:1,titre:"Consignes sorties extraction chien",type:"Consignes Post-Op\xE9ratoire"},{id:2,titre:"Consignes sorties extraction chat",type:"Consignes Post-Op\xE9ratoire"}])}reloadDocuments(){return this.getDocuments().pipe(f(e=>this.documents.set(e)))}findDocumentById(e){return P({id:1,titre:"Consignes sorties extraction chien",type:"Consignes Post-Op\xE9ratoire"})}deleteDocumentById(e){return this.httpClient.request("DELETE","/document/"+e).pipe(F(()=>this.reloadDocuments()))}editDocumentById(e,i){return this.httpClient.request("PATCH","/document/"+e,{body:i}).pipe(F(()=>this.reloadDocuments()))}createDocument(e){let i={};return this.httpClient.request("POST","/document",{body:i}).pipe(F(()=>this.reloadDocuments()))}static{this.\u0275fac=function(i){return new(i||t)(U(z))}}static{this.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var N=(()=>{class t{constructor(e,i,o,d){this.documentService=e,this.router=i,this.dialogRef=o,this.data=d,this.myForm=new A({titre:new _("",[y.required]),type:new _("",[y.required])})}ngOnInit(){this.data?.id&&this.loadDocumentFormById(this.data.id).subscribe()}cancel(){this.dialogRef.close(!1)}confirm(){this.dialogRef.close(!0)}loadDocumentFormById(e){return this.documentService.findDocumentById(e).pipe(f(i=>{this.myForm.patchValue({titre:i.titre,type:i.type})}))}onSubmit(){let e=this.myForm.value;this.myForm.valid?this.documentService.createDocument(e).subscribe(()=>{this.router.navigate(["/document"])}):console.log("erreur, formulaire pas valid\xE9")}get titreFc(){return this.myForm.get("titre")}get typeFc(){return this.myForm.get("type")}static{this.\u0275fac=function(i){return new(i||t)(a(v),a(T),a(I),a(E))}}static{this.\u0275cmp=h({type:t,selectors:[["app-document-form"]],standalone:!0,features:[D],decls:2,vars:0,template:function(i,o){i&1&&(r(0,"p"),m(1,"document-form works!"),n())},dependencies:[V,B,C,k],encapsulation:2})}}return t})();var ye=(()=>{class t{constructor(e,i,o){this.documentService=e,this.dialogRef=i,this.data=o,this.faXmark=Z,this.myForm=new A({titre:new _("",[y.required]),type:new _("",[y.required])})}ngOnInit(){this.loadDocumentFormById(this.data.id).subscribe()}loadDocumentFormById(e){return this.documentService.findDocumentById(e).pipe(f(i=>{this.myForm.patchValue({titre:i.titre,type:i.type,infosComp:""}),this.myForm.disable(),this.myForm.get("infosComp")?.enable()}))}close(){this.dialogRef.close(!1)}static{this.\u0275fac=function(i){return new(i||t)(a(v),a(I),a(E))}}static{this.\u0275cmp=h({type:t,selectors:[["app-document-fiche"]],standalone:!0,features:[D],decls:17,vars:2,consts:[[3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],["mat-dialog-title",""],[1,"btn",3,"click"],[1,"me-2",3,"icon"],[1,"px-4","pb-4"],[1,"d-flex","flex-row"],[1,"d-flex","flex-column","justify-content-center"],[1,"form-group","me-2"],["type","text","id","titre","formControlName","titre",1,"form-control"],[1,"form-group"],["for","statut"],["type","text","id","infosComp","formControlName","infosComp",1,"form-control"]],template:function(i,o){i&1&&(r(0,"form",0)(1,"div",1)(2,"h4",2),m(3,"D\xE9tails du document"),n(),r(4,"button",3),u("click",function(){return o.close()}),p(5,"fa-icon",4),n()(),r(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label"),m(11,"Titre"),n(),p(12,"input",9),n()()(),r(13,"div",10)(14,"label",11),m(15,"Informations compl\xE9mentaires"),n(),p(16,"input",12),n()()()),i&2&&(l("formGroup",o.myForm),c(5),l("icon",o.faXmark))},dependencies:[V,he,pe,ue,fe,B,De,Ce,C,k,K,j,R],encapsulation:2})}}return t})();function Fe(t,s){t&1&&(r(0,"th",12),m(1,"Titre"),n())}function we(t,s){if(t&1&&(r(0,"td",13),m(1),n()),t&2){let e=s.$implicit;c(),G(" ",e.titre,"")}}function be(t,s){t&1&&(r(0,"th",12),m(1,"Type"),n())}function Se(t,s){if(t&1&&(r(0,"td",13),m(1),n()),t&2){let e=s.$implicit;c(),G(" ",e.type,"")}}function Me(t,s){t&1&&(r(0,"th",12),m(1,"Actions"),n())}function Te(t,s){if(t&1){let e=H();r(0,"td",13)(1,"button",14),u("click",function(o){let d=w(e).$implicit;return x().deleteDocument(d.id),b(o.stopPropagation())}),p(2,"fa-icon",15),n(),r(3,"button",16),u("click",function(o){let d=w(e).$implicit;return x().editDocument(d.id),b(o.stopPropagation())}),p(4,"fa-icon",15),n()()}if(t&2){let e=x();c(2),l("icon",e.faTrash),c(2),l("icon",e.faEdit)}}function Ie(t,s){t&1&&p(0,"tr",17)}function Ee(t,s){if(t&1){let e=H();r(0,"tr",18),u("click",function(){let o=w(e).$implicit,d=x();return b(d.showDocument(o.id))}),n()}}var rt=(()=>{class t{constructor(e,i){this.documentService=e,this.router=i,this.dialog=L(J),this.faTrash=W,this.faEdit=Q,this.faPlus=Y,this.displayedColumns=["Titre","Type","Actions"]}deleteDocument(e){this.dialog.open(de,{width:"500px"}).afterClosed().subscribe(o=>{o&&this.documentService.deleteDocumentById(e).subscribe()})}createDocument(){this.dialog.open(N,{width:"500px"})}editDocument(e){this.dialog.open(N,{width:"500px",data:{id:e}})}showDocument(e){this.dialog.open(ye,{width:"500px",data:{id:e}})}static{this.\u0275fac=function(i){return new(i||t)(a(v),a(T))}}static{this.\u0275cmp=h({type:t,selectors:[["app-document"]],standalone:!0,features:[D],decls:18,vars:4,consts:[[1,"p-3"],[1,"d-flex","justify-content-end","align-items-center"],[1,"btn","btn-dark",3,"click"],[1,"me-2",3,"icon"],["mat-table","",3,"dataSource"],["matColumnDef","Titre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Type"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"btn","btn-danger",3,"click"],[2,"color","white",3,"icon"],[1,"btn","btn-primary",3,"click"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(i,o){i&1&&(r(0,"div",0)(1,"div",1)(2,"button",2),u("click",function(){return o.createDocument()}),p(3,"fa-icon",3),r(4,"span"),m(5,"Ajouter un document"),n()()(),r(6,"table",4),S(7,5),g(8,Fe,2,0,"th",6)(9,we,2,1,"td",7),M(),S(10,8),g(11,be,2,0,"th",6)(12,Se,2,1,"td",7),M(),S(13,9),g(14,Me,2,0,"th",6)(15,Te,5,2,"td",7),M(),g(16,Ie,1,0,"tr",10)(17,Ee,1,0,"tr",11),n()()),i&2&&(c(3),l("icon",o.faPlus),c(3),l("dataSource",o.documentService.documents()),c(10),l("matHeaderRowDef",o.displayedColumns),c(),l("matRowDefColumns",o.displayedColumns))},dependencies:[se,ee,ie,me,oe,te,ae,ne,re,ce,le,C,j,R],encapsulation:2})}}return t})();export{rt as DocumentComponent};
