import{A as Xt,B as Wt,C as $t,D as Kt,E as K,F as qt,G as Gt,H as q,I as Zt,J as Jt,m as Lt,n as Vt,t as Bt,v as Yt,w as zt,x as Ut,y as $,z as Qt}from"./chunk-4O6QZ7WQ.js";import{$ as A,$a as bt,$b as f,Ab as Q,Ac as m,B as P,Bb as N,C as Y,Cb as lt,Cc as a,Db as xt,Dc as l,Eb as X,Ec as G,Fb as W,Fc as d,Gc as te,Hb as Ft,Hc as ee,I as et,K as _t,Kb as Ot,Qb as Ht,Rb as R,S as it,Sa as u,T as ft,Ta as s,U as nt,Va as vt,Y as Dt,Yb as E,Z as rt,a as J,b as St,bb as Et,ca as gt,da as Ct,e as tt,ea as At,fb as O,fc as Nt,ga as c,ha as k,ia as ot,j as C,ja as st,jb as z,kb as w,l as It,lb as S,m as ut,nb as U,oa as kt,ob as Pt,p as pt,pa as M,pb as at,qa as y,qb as h,ra as Tt,rb as p,rc as jt,sb as H,wa as x,wb as ct,xa as F,ya as Rt,yb as T,zb as _,zc as g}from"./chunk-CN6GV3UQ.js";var xe=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["app-card-vet"]],inputs:{firstName:"firstName",lastName:"lastName"},standalone:!0,features:[R],decls:3,vars:2,consts:[[1,"fw-normal","mb-1"]],template:function(e,i){e&1&&(h(0,"div")(1,"div",0),Ft(2),p()()),e&2&&(u(2),Ot("",i.lastName," ",i.firstName,""))},encapsulation:2})}}return n})();var pe=["mat-menu-item",""],_e=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],fe=["mat-icon, [matMenuItemIcon]","*"];function ge(n,Z){n&1&&(Tt(),h(0,"svg",2),H(1,"polygon",3),p())}var ve=["*"];function be(n,Z){if(n&1){let t=ct();h(0,"div",0),T("keydown",function(i){M(t);let r=_();return y(r._handleKeydown(i))})("click",function(){M(t);let i=_();return y(i.closed.emit("click"))})("@transformMenu.start",function(i){M(t);let r=_();return y(r._onAnimationStart(i))})("@transformMenu.done",function(i){M(t);let r=_();return y(r._onAnimationDone(i))}),h(1,"div",1),N(2),p()()}if(n&2){let t=_();Pt(t._classList),S("id",t.panelId)("@transformMenu",t._panelAnimationState),w("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var yt=new A("MAT_MENU_PANEL"),Mt=(()=>{class n{constructor(t,e,i,r,o){this._elementRef=t,this._document=e,this._focusMonitor=i,this._parentMenu=r,this._changeDetectorRef=o,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new C,this._focused=new C,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static{this.\u0275fac=function(e){return new(e||n)(s(x),s(Nt),s(K),s(yt,8),s(E))}}static{this.\u0275cmp=k({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(e,i){e&1&&T("click",function(o){return i._checkDisabled(o)})("mouseenter",function(){return i._handleMouseEnter()}),e&2&&(w("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),U("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[c.HasDecoratorInputTransform,"disabled","disabled",f],disableRipple:[c.HasDecoratorInputTransform,"disableRipple","disableRipple",f]},exportAs:["matMenuItem"],standalone:!0,features:[O,R],attrs:pe,ngContentSelectors:fe,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,i){e&1&&(Q(_e),N(0),h(1,"span",0),N(2,1),p(),H(3,"div",1),z(4,ge,2,0,":svg:svg",2)),e&2&&(u(3),S("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),u(),at(4,i._triggersSubmenu?4:-1))},dependencies:[Zt],encapsulation:2,changeDetection:0})}}return n})();var Me=new A("MatMenuContent");var mt={transformMenu:g("transformMenu",[l("void",a({opacity:0,transform:"scale(0.8)"})),d("void => enter",m("120ms cubic-bezier(0, 0, 0.2, 1)",a({opacity:1,transform:"scale(1)"}))),d("* => void",m("100ms 25ms linear",a({opacity:0})))]),fadeInItems:g("fadeInItems",[l("showing",a({opacity:1})),d("void => *",[a({opacity:0}),m("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},hi=mt.fadeInItems,ui=mt.transformMenu,ye=0,we=new A("mat-menu-default-options",{providedIn:"root",factory:Se});function Se(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var dt=(()=>{class n{get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}set panelClass(t){let e=this._previousPanelClass,i=J({},this._classList);e&&e.length&&e.split(" ").forEach(r=>{i[r]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(r=>{i[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}get classList(){return this.panelClass}set classList(t){this.panelClass=t}constructor(t,e,i,r){this._elementRef=t,this._ngZone=e,this._changeDetectorRef=r,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new Rt,this._classList={},this._panelAnimationState="void",this._animationDone=new C,this.closed=new F,this.close=this.closed,this.panelId=`mat-menu-panel-${ye++}`,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Wt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(it(this._directDescendantItems),ft(t=>P(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let i=t.toArray(),r=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[r]&&!i[r].disabled?e.setActiveItem(r):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe(it(this._directDescendantItems),ft(e=>P(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:zt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}t.stopPropagation()}focusFirstItem(t="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(et(1)).subscribe(()=>{let e=null;if(this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){let e=Math.min(this._baseElevation+t,24),i=`${this._elevationPrefix}${e}`,r=Object.keys(this._classList).find(o=>o.startsWith(this._elevationPrefix));if(!r||r===this._previousElevation){let o=J({},this._classList);this._previousElevation&&(o[this._previousElevation]=!1),o[i]=!0,this._previousElevation=i,this._classList=o}}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=St(J({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(t){this._animationDone.next(t),this._isAnimating=!1}_onAnimationStart(t){this._isAnimating=!0,t.toState==="enter"&&this._keyManager.activeItemIndex===0&&(t.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(it(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static{this.\u0275fac=function(e){return new(e||n)(s(x),s(bt),s(we),s(E))}}static{this.\u0275cmp=k({type:n,selectors:[["mat-menu"]],contentQueries:function(e,i,r){if(e&1&&(lt(r,Me,5),lt(r,Mt,5),lt(r,Mt,4)),e&2){let o;X(o=W())&&(i.lazyContent=o.first),X(o=W())&&(i._allItems=o),X(o=W())&&(i.items=o)}},viewQuery:function(e,i){if(e&1&&xt(vt,5),e&2){let r;X(r=W())&&(i.templateRef=r.first)}},hostVars:3,hostBindings:function(e,i){e&2&&w("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[c.None,"aria-label","ariaLabel"],ariaLabelledby:[c.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[c.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[c.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",f],hasBackdrop:[c.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",t=>t==null?null:f(t)],panelClass:[c.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[Ht([{provide:yt,useExisting:n}]),O,R],ngContentSelectors:ve,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(e,i){e&1&&(Q(),z(0,be,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[mt.transformMenu,mt.fadeInItems]},changeDetection:0})}}return n})(),ce=new A("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=gt($);return()=>n.scrollStrategies.reposition()}});function Ie(n){return()=>n.scrollStrategies.reposition()}var De={provide:ce,deps:[$],useFactory:Ie},ne=Lt({passive:!0});var pi=(()=>{class n{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(t,e,i,r,o,v,D,b,L){this._overlay=t,this._element=e,this._viewContainerRef=i,this._menuItemInstance=v,this._dir=D,this._focusMonitor=b,this._ngZone=L,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=tt.EMPTY,this._hoverSubscription=tt.EMPTY,this._menuCloseSubscription=tt.EMPTY,this._changeDetectorRef=gt(E),this._handleTouchStart=V=>{Kt(V)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new F,this.onMenuOpen=this.menuOpened,this.menuClosed=new F,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=o instanceof dt?o:void 0,e.nativeElement.addEventListener("touchstart",this._handleTouchStart,ne)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,ne),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let t=this.menu;if(this._menuOpen||!t)return;let e=this._createOverlay(t),i=e.getConfig(),r=i.positionStrategy;this._setPosition(t,r),i.hasBackdrop=t.hasBackdrop==null?!this.triggersSubmenu():t.hasBackdrop,e.attach(this._getPortal(t)),t.lazyContent&&t.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(t),t instanceof dt&&(t._startAnimation(),t._directDescendantItems.changes.pipe(nt(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(t){if(!this._overlayRef||!this.menuOpen)return;let e=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,e instanceof dt?(e._resetAnimation(),e.lazyContent?e._animationDone.pipe(Y(i=>i.toState==="void"),et(1),nt(e.lazyContent._attached)).subscribe({next:()=>e.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),e?.lazyContent?.detach())}_initMenu(t){t.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,this._setMenuElevation(t),t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(t){if(t.setElevation){let e=0,i=t.parentMenu;for(;i;)e++,i=i.parentMenu;t.setElevation(e)}}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=this._overlay.create(e),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(t){return new Ut({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{let r=i.connectionPair.overlayX==="start"?"after":"before",o=i.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>t.setPositionClasses(r,o)):t.setPositionClasses(r,o)})}_setPosition(t,e){let[i,r]=t.xPosition==="before"?["end","start"]:["start","end"],[o,v]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[D,b]=[o,v],[L,V]=[i,r],B=0;if(this.triggersSubmenu()){if(V=i=t.xPosition==="before"?"start":"end",r=L=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let wt=this._parentMaterialMenu.items.first;this._parentInnerPadding=wt?wt._getHostElement().offsetTop:0}B=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(D=o==="top"?"bottom":"top",b=v==="top"?"bottom":"top");e.withPositions([{originX:i,originY:D,overlayX:L,overlayY:o,offsetY:B},{originX:r,originY:D,overlayX:V,overlayY:o,offsetY:B},{originX:i,originY:b,overlayX:L,overlayY:v,offsetY:-B},{originX:r,originY:b,overlayX:V,overlayY:v,offsetY:-B}])}_menuClosingActions(){let t=this._overlayRef.backdropClick(),e=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:pt(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Y(o=>o!==this._menuItemInstance),Y(()=>this._menuOpen)):pt();return P(t,i,r,e)}_handleMousedown(t){$t(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(Y(t=>t===this._menuItemInstance&&!t.disabled),_t(0,ut)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof dt&&this.menu._isAnimating?this.menu._animationDone.pipe(et(1),_t(0,ut),nt(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Yt(t.templateRef,this._viewContainerRef)),this._portal}static{this.\u0275fac=function(e){return new(e||n)(s($),s(x),s(Et),s(ce),s(yt,8),s(Mt,10),s(Vt,8),s(K),s(bt))}}static{this.\u0275dir=st({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,i){e&1&&T("click",function(o){return i._handleClick(o)})("mousedown",function(o){return i._handleMousedown(o)})("keydown",function(o){return i._handleKeydown(o)}),e&2&&w("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[c.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[c.None,"matMenuTriggerFor","menu"],menuData:[c.None,"matMenuTriggerData","menuData"],restoreFocus:[c.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0})}}return n})(),_i=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=ot({type:n})}static{this.\u0275inj=rt({providers:[De],imports:[jt,Jt,q,Qt,Bt,q]})}}return n})();var Ce=["mat-sort-header",""],Ae=["*"];function ke(n,Z){if(n&1){let t=ct();h(0,"div",2),T("@arrowPosition.start",function(){M(t);let i=_();return y(i._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){M(t);let i=_();return y(i._disableViewStateAnimation=!1)}),H(1,"div",3),h(2,"div",4),H(3,"div",5)(4,"div",6)(5,"div",7),p()()}if(n&2){let t=_();S("@arrowOpacity",t._getArrowViewState())("@arrowPosition",t._getArrowViewState())("@allowChildren",t._getArrowDirectionState()),u(2),S("@indicator",t._getArrowDirectionState()),u(),S("@leftPointer",t._getArrowDirectionState()),u(),S("@rightPointer",t._getArrowDirectionState())}}var le=new A("MAT_SORT_DEFAULT_OPTIONS"),Te=(()=>{class n{get direction(){return this._direction}set direction(t){this._direction=t}constructor(t){this._defaultOptions=t,this._initializedStream=new It(1),this.sortables=new Map,this._stateChanges=new C,this.start="asc",this._direction="",this.disabled=!1,this.sortChange=new F,this.initialized=this._initializedStream}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=Re(t.start||this.start,e),r=i.indexOf(this.direction)+1;return r>=i.length&&(r=0),i[r]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static{this.\u0275fac=function(e){return new(e||n)(s(le,8))}}static{this.\u0275dir=st({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[c.None,"matSortActive","active"],start:[c.None,"matSortStart","start"],direction:[c.None,"matSortDirection","direction"],disableClear:[c.HasDecoratorInputTransform,"matSortDisableClear","disableClear",f],disabled:[c.HasDecoratorInputTransform,"matSortDisabled","disabled",f]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],standalone:!0,features:[O,kt]})}}return n})();function Re(n,Z){let t=["asc","desc"];return n=="desc"&&t.reverse(),Z||t.push(""),t}var I=Gt.ENTERING+" "+qt.STANDARD_CURVE,j={indicator:g("indicator",[l("active-asc, asc",a({transform:"translateY(0px)"})),l("active-desc, desc",a({transform:"translateY(10px)"})),d("active-asc <=> active-desc",m(I))]),leftPointer:g("leftPointer",[l("active-asc, asc",a({transform:"rotate(-45deg)"})),l("active-desc, desc",a({transform:"rotate(45deg)"})),d("active-asc <=> active-desc",m(I))]),rightPointer:g("rightPointer",[l("active-asc, asc",a({transform:"rotate(45deg)"})),l("active-desc, desc",a({transform:"rotate(-45deg)"})),d("active-asc <=> active-desc",m(I))]),arrowOpacity:g("arrowOpacity",[l("desc-to-active, asc-to-active, active",a({opacity:1})),l("desc-to-hint, asc-to-hint, hint",a({opacity:.54})),l("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",a({opacity:0})),d("* => asc, * => desc, * => active, * => hint, * => void",m("0ms")),d("* <=> *",m(I))]),arrowPosition:g("arrowPosition",[d("* => desc-to-hint, * => desc-to-active",m(I,G([a({transform:"translateY(-25%)"}),a({transform:"translateY(0)"})]))),d("* => hint-to-desc, * => active-to-desc",m(I,G([a({transform:"translateY(0)"}),a({transform:"translateY(25%)"})]))),d("* => asc-to-hint, * => asc-to-active",m(I,G([a({transform:"translateY(25%)"}),a({transform:"translateY(0)"})]))),d("* => hint-to-asc, * => active-to-asc",m(I,G([a({transform:"translateY(0)"}),a({transform:"translateY(-25%)"})]))),l("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",a({transform:"translateY(0)"})),l("hint-to-desc, active-to-desc, desc",a({transform:"translateY(-25%)"})),l("hint-to-asc, active-to-asc, asc",a({transform:"translateY(25%)"}))]),allowChildren:g("allowChildren",[d("* <=> *",[ee("@*",te(),{optional:!0})])])},ht=(()=>{class n{constructor(){this.changes=new C}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=Dt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Ee(n){return n||new ht}var Pe={provide:ht,deps:[[new Ct,new At,ht]],useFactory:Ee},Ei=(()=>{class n{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}constructor(t,e,i,r,o,v,D,b){this._intl=t,this._changeDetectorRef=e,this._sort=i,this._columnDef=r,this._focusMonitor=o,this._elementRef=v,this._ariaDescriber=D,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this.disabled=!1,this._sortActionDescription="Sort",b?.arrowPosition&&(this.arrowPosition=b?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=!!t;e!==this._showIndicatorHint&&(this._setIndicatorHintVisible(e),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t||{},this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(t){!this._isDisabled()&&(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){let t=this._viewState.fromState;return(t?`${t}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}_handleStateChanges(){this._rerenderSubscription=P(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}static{this.\u0275fac=function(e){return new(e||n)(s(ht),s(E),s(Te,8),s("MAT_SORT_HEADER_COLUMN_DEF",8),s(K),s(x),s(Xt,8),s(le,8))}}static{this.\u0275cmp=k({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(e,i){e&1&&T("click",function(){return i._handleClick()})("keydown",function(o){return i._handleKeydown(o)})("mouseenter",function(){return i._setIndicatorHintVisible(!0)})("mouseleave",function(){return i._setIndicatorHintVisible(!1)}),e&2&&(w("aria-sort",i._getAriaSortAttribute()),U("mat-sort-header-disabled",i._isDisabled()))},inputs:{id:[c.None,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[c.HasDecoratorInputTransform,"disabled","disabled",f],sortActionDescription:"sortActionDescription",disableClear:[c.HasDecoratorInputTransform,"disableClear","disableClear",f]},exportAs:["matSortHeader"],standalone:!0,features:[O,R],attrs:Ce,ngContentSelectors:Ae,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(e,i){e&1&&(Q(),h(0,"div",0)(1,"div",1),N(2),p(),z(3,ke,6,6,"div",2),p()),e&2&&(U("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before"),w("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),u(3),at(3,i._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[j.indicator,j.leftPointer,j.rightPointer,j.arrowOpacity,j.arrowPosition,j.allowChildren]},changeDetection:0})}}return n})(),Pi=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=ot({type:n})}static{this.\u0275inj=rt({providers:[Pe],imports:[q]})}}return n})();export{xe as a,Mt as b,dt as c,pi as d,_i as e,Te as f,Ei as g,Pi as h};
