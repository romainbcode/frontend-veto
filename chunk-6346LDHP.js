import{h as W,j as X,k as H}from"./chunk-67J2RLPG.js";import{a as L,b as f,c as U,d as $,e as z,f as h,h as J,i as K,j as Q,k as Y,l as Z,m as ee,n as te,o as ie}from"./chunk-6XM4JLLI.js";import{L as B,M as G,O as R,R as P,a as q}from"./chunk-LCZBXWVK.js";import{Gb as D,Hb as m,Jb as w,Rb as O,Sa as a,Sb as F,Ta as u,V as p,Y as _,ba as v,db as E,ha as S,jb as y,lb as c,nc as j,oc as A,p as C,pa as x,qa as b,qb as o,rb as n,sb as d,sc as k,v as l,vb as T,wb as M,yb as N,zb as V}from"./chunk-6ZEQ7G7Q.js";var oe=(()=>{class t{constructor(e){this.httpClient=e,this.documents=E([]),this.reloadDocuments().subscribe()}getDocuments(){return C([{id:1,titre:"Consignes sorties extraction chien",type:"Consignes Post-Op\xE9ratoire",content:"Content....1"},{id:2,titre:"Consignes sorties extraction chat",type:"Consignes Post-Op\xE9ratoire",content:"Content....2"}])}reloadDocuments(){return this.getDocuments().pipe(p(e=>this.documents.set(e)))}findDocumentById(e){return C({id:1,titre:"Consignes sorties extraction chien",type:"Consignes Post-Op\xE9ratoire",content:"Content....1"})}deleteDocumentById(e){return this.httpClient.request("DELETE","/document/"+e).pipe(l(()=>this.reloadDocuments()))}editDocumentById(e,i){return this.httpClient.request("PATCH","/document/"+e,{body:i}).pipe(l(()=>this.reloadDocuments()))}createDocument(e){let i={};return this.httpClient.request("POST","/document",{body:i}).pipe(l(()=>this.reloadDocuments()))}static{this.\u0275fac=function(i){return new(i||t)(v(q))}}static{this.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function me(t,s){t&1&&T(0)}function ce(t,s){t&1&&(o(0,"div",9)(1,"label",12),m(2,"Titre"),o(3,"span",13),m(4,"*"),n()(),d(5,"input",14),n())}function ae(t,s){if(t&1&&(o(0,"option",17),m(1),n()),t&2){let e=s.$implicit;c("ngValue",e.id),a(),w(" ",e.titre," ")}}function se(t,s){if(t&1&&(o(0,"div",9)(1,"label",12),m(2,"Titre"),o(3,"span",13),m(4,"*"),n()(),o(5,"select",15),y(6,ae,2,2,"option",16),n()()),t&2){let e=V();a(6),c("ngForOf",e.documentService.documents())}}var Se=(()=>{class t{constructor(e,i,r){this.documentService=e,this.dialogRef=i,this.data=r,this.faXmark=W,this.myForm=new z({titre:new h("",[f.required]),type:new h("",[f.required]),infosComp:new h("",[f.required])})}ngOnInit(){this.data?.id?this.loadDocumentFormById(this.data.id).subscribe():this.data===null&&(console.log("dans else"),this.myForm.get("titre")?.valueChanges.subscribe(e=>{this.updateInfosComp(e)}))}updateInfosComp(e){let i=this.documentService.documents().find(r=>r.id===e);i&&this.myForm.get("infosComp")?.setValue(i.content)}loadDocumentFormById(e){return this.documentService.findDocumentById(e).pipe(p(i=>{this.myForm.patchValue({titre:i.titre,type:i.type,infosComp:i.content}),this.myForm.disable(),this.myForm.get("infosComp")?.enable()}))}close(){this.dialogRef.close(!1)}static{this.\u0275fac=function(i){return new(i||t)(u(oe),u(B),u(G))}}static{this.\u0275cmp=S({type:t,selectors:[["app-document-fiche"]],standalone:!0,features:[O],decls:16,vars:5,consts:[["documentWithId",""],["documentWithoutId",""],[3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],["mat-dialog-title",""],[1,"btn",3,"click"],[1,"me-2",3,"icon"],[1,"px-4","pb-4"],[4,"ngIf","ngIfThen","ngIfElse"],[1,"form-group"],["for","statut"],["type","text","id","infosComp","formControlName","infosComp",1,"form-control"],["for","titre"],[2,"color","red"],["type","text","id","titre","formControlName","titre",1,"form-control"],["formControlName","titre",1,"form-select"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"]],template:function(i,r){if(i&1){let g=M();o(0,"form",2)(1,"div",3)(2,"h4",4),m(3,"D\xE9tails du document"),n(),o(4,"button",5),N("click",function(){return x(g),b(r.close())}),d(5,"fa-icon",6),n()(),o(6,"div",7),y(7,me,1,0,"ng-container",8)(8,ce,6,0,"ng-template",null,0,F)(10,se,7,1,"ng-template",null,1,F),o(12,"div",9)(13,"label",10),m(14,"Informations compl\xE9mentaires"),n(),d(15,"input",11),n()()()}if(i&2){let g=D(9),I=D(11);c("formGroup",r.myForm),a(5),c("icon",r.faXmark),a(2),c("ngIf",r.data==null?null:r.data.id)("ngIfThen",g)("ngIfElse",I)}},dependencies:[te,J,Z,ee,L,Y,U,$,ie,K,Q,k,j,A,P,R,H,X],encapsulation:2})}}return t})();export{oe as a,Se as b};
