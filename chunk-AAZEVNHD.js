import{a as S,b as ie}from"./chunk-6346LDHP.js";import{a as B,b as q,c as G,d as O,e as U,f as L,g as z,h as J,i as K,j as N,k as Q,n as Y}from"./chunk-KJJDTYKH.js";import{b as H,c as P,g as $,j as W,k as X}from"./chunk-67J2RLPG.js";import{b as M,e as Z,f as F,n as ee,o as te}from"./chunk-6XM4JLLI.js";import{L as I,M as j,N as A,R as V,g}from"./chunk-LCZBXWVK.js";import{Hb as a,Jb as b,Rb as w,Sa as m,Ta as d,V as E,ca as R,ha as D,jb as f,lb as u,pa as h,qa as C,qb as o,rb as r,sb as s,sc as x,tb as y,ub as v,wb as T,yb as p,zb as _}from"./chunk-6ZEQ7G7Q.js";var k=(()=>{class t{constructor(e,i,n,l){this.documentService=e,this.router=i,this.dialogRef=n,this.data=l,this.myForm=new Z({titre:new F("",[M.required]),type:new F("",[M.required])})}ngOnInit(){this.data?.id&&this.loadDocumentFormById(this.data.id).subscribe()}cancel(){this.dialogRef.close(!1)}confirm(){this.dialogRef.close(!0)}loadDocumentFormById(e){return this.documentService.findDocumentById(e).pipe(E(i=>{this.myForm.patchValue({titre:i.titre,type:i.type})}))}onSubmit(){let e=this.myForm.value;this.myForm.valid?this.documentService.createDocument(e).subscribe(()=>{this.router.navigate(["/document"])}):console.log("erreur, formulaire pas valid\xE9")}get titreFc(){return this.myForm.get("titre")}get typeFc(){return this.myForm.get("type")}static{this.\u0275fac=function(i){return new(i||t)(d(S),d(g),d(I),d(j))}}static{this.\u0275cmp=D({type:t,selectors:[["app-document-form"]],standalone:!0,features:[w],decls:2,vars:0,template:function(i,n){i&1&&(o(0,"p"),a(1,"document-form works!"),r())},dependencies:[ee,te,x,V],encapsulation:2})}}return t})();function ae(t,c){t&1&&(o(0,"th",13),a(1,"Titre"),r())}function ce(t,c){if(t&1&&(o(0,"td",14),a(1),r()),t&2){let e=c.$implicit;m(),b(" ",e.titre,"")}}function le(t,c){t&1&&(o(0,"th",13),a(1,"Type"),r())}function de(t,c){if(t&1&&(o(0,"td",14),a(1),r()),t&2){let e=c.$implicit;m(),b(" ",e.type,"")}}function ue(t,c){t&1&&(o(0,"th",13),a(1,"Actions"),r())}function se(t,c){if(t&1){let e=T();o(0,"td",14)(1,"button",15),p("click",function(n){let l=h(e).$implicit;return _().deleteDocument(l.id),C(n.stopPropagation())}),s(2,"fa-icon",16),r(),o(3,"button",17),p("click",function(n){let l=h(e).$implicit;return _().editDocument(l.id),C(n.stopPropagation())}),s(4,"fa-icon",16),r()()}if(t&2){let e=_();m(2),u("icon",e.faTrash),m(2),u("icon",e.faEdit)}}function pe(t,c){t&1&&s(0,"tr",18)}function fe(t,c){if(t&1){let e=T();o(0,"tr",19),p("click",function(){let n=h(e).$implicit,l=_();return C(l.showDocument(n.id))}),r()}}var je=(()=>{class t{constructor(e,i){this.documentService=e,this.router=i,this.dialog=R(A),this.faTrash=P,this.faEdit=H,this.faPlus=$,this.displayedColumns=["Titre","Type","Actions"]}deleteDocument(e){this.dialog.open(Y,{width:"500px"}).afterClosed().subscribe(n=>{n&&this.documentService.deleteDocumentById(e).subscribe()})}createTypeDocument(){}createDocument(){this.dialog.open(k,{width:"500px"})}editDocument(e){this.dialog.open(k,{width:"500px",data:{id:e}})}showDocument(e){this.dialog.open(ie,{width:"500px",data:{id:e}})}static{this.\u0275fac=function(i){return new(i||t)(d(S),d(g))}}static{this.\u0275cmp=D({type:t,selectors:[["app-document"]],standalone:!0,features:[w],decls:22,vars:5,consts:[[1,"p-3"],[1,"d-flex","justify-content-end","align-items-center"],[1,"btn","btn-secondary","me-2",3,"click"],[1,"me-2",3,"icon"],[1,"btn","btn-dark",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","Titre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Type"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"btn","btn-danger",3,"click"],[2,"color","white",3,"icon"],[1,"btn","btn-primary",3,"click"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"button",2),p("click",function(){return n.createTypeDocument()}),s(3,"fa-icon",3),o(4,"span"),a(5,"Ajouter un type de consultation"),r()(),o(6,"button",4),p("click",function(){return n.createDocument()}),s(7,"fa-icon",3),o(8,"span"),a(9,"Ajouter un document"),r()()(),o(10,"table",5),y(11,6),f(12,ae,2,0,"th",7)(13,ce,2,1,"td",8),v(),y(14,9),f(15,le,2,0,"th",7)(16,de,2,1,"td",8),v(),y(17,10),f(18,ue,2,0,"th",7)(19,se,5,2,"td",8),v(),f(20,pe,1,0,"tr",11)(21,fe,1,0,"tr",12),r()()),i&2&&(m(3),u("icon",n.faPlus),m(4),u("icon",n.faPlus),m(3),u("dataSource",n.documentService.documents()),m(10),u("matHeaderRowDef",n.displayedColumns),m(),u("matRowDefColumns",n.displayedColumns))},dependencies:[Q,B,G,z,O,q,J,U,L,K,N,x,X,W],encapsulation:2})}}return t})();export{je as DocumentComponent};
