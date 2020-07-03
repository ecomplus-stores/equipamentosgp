/*! For license information please see bc45dd287fdaba1dc4af.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{245:function(t,e,n){var i=n(267);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(137).default)("022cc939",i,!0,{})},253:function(t,e,n){"use strict";const i={shopping_cart:{en_us:"Shopping cart",pt_br:"Carrinho de compras"},my_cart:{en_us:"My cart",pt_br:"Meu carrinho"},close:{en_us:"Close",pt_br:"Fechar"},remove:{en_us:"Remove",pt_br:"Remover"},checkout:{en_us:"Checkout",pt_br:"Finalizar compra"},see_cart:{en_us:"See shopping cart",pt_br:"Ver carrinho"},empty_cart:{en_us:"Your shopping cart is empty",pt_br:"Seu carrinho de compras está vazio"},continue_shopping:{en_us:"Continue shopping",pt_br:"Continuar comprando"}};e.a=function(t,e){return e||(e=this&&this.lang||"en_us"),i[t]&&i[t][e]||""}},255:function(t,e,n){"use strict";var i=n(31),a=n(46),r=n(106),s=n(96),o=n(253),c={name:"EcCartItem",props:{lang:{type:String,default:i.$ecomConfig.get("lang")},item:{type:Object,required:!0},inputType:{type:String,default:"select"},resetQnt:{type:Boolean}},data:()=>({quantity:1,skipSelect:!1}),computed:{price(){return Object(a.a)(this.item)},img(){return Object(r.a)(this.item,null,"small")}},methods:{dictionary:o.a,formatMoney:s.a,updateQnt(){this.quantity=this.item.quantity,this.skipSelect=!Number.isInteger(this.item.quantity)||this.item.quantity>10}},created(){this.updateQnt()},watch:{quantity(t,e){("number"!=typeof t||isNaN(t))&&(this.quantity=0),this.quantity!==this.item.quantity&&(this.$emit("increase",this.quantity-e),this.quantity=this.item.quantity),t>10&&e<=10&&(this.skipSelect=!0,setTimeout(()=>{this.$refs.input.focus()},300))},resetQnt(t){t&&this.updateQnt()}}},m=(n(266),n(72)),l=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ec-cart-item"},[n("div",{staticClass:"ec-cart-item__name"},[t.item.slug?n("a",{attrs:{href:"/"+t.item.slug}},[t._v(" "+t._s(t.item.name)+" ")]):[t._v(" "+t._s(t.item.name)+" ")]],2),n("div",{staticClass:"ec-cart-item__row"},[t.item.picture&&Object.keys(t.item.picture).length?n(t.item.slug?"a":"span",{tag:"component",attrs:{href:"/"+t.item.slug}},[n("img",{staticClass:"ec-cart-item__picture",attrs:{src:t.img.url,alt:t.img.alt||t.item.name}})]):t._e(),n("div",{staticClass:"ec-cart-item__edit"},[t.skipSelect||"select"!==t.inputType?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],ref:"input",staticClass:"ec-cart-item__quantity form-control",attrs:{type:t.inputType&&"select"!==t.inputType?t.inputType:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}):n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var n="_value"in e?e._value:e.value;return t._n(n)}));t.quantity=e.target.multiple?n:n[0]}}},[t._l(t.item.max_quantity||10,(function(e){return n("option",{domProps:{value:e,selected:e===t.quantity}},[t._v(" "+t._s(e)+" ")])})),n("option",{domProps:{value:11}},[t._v(" 11+ ")])],2),n("a",{staticClass:"ec-cart-item__remove",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("remove")}}},[t._v(" "+t._s(t.dictionary("remove"))+" ")])]),n("div",{staticClass:"ec-cart-item__prices"},[t.item.quantity>1?n("div",{staticClass:"ec-cart-item__price-un"},[t._v(" "+t._s(t.formatMoney(t.price))+" "),n("small",[t._v("/un")])]):t._e(),t._v(" "+t._s(t.formatMoney(t.price*t.item.quantity))+" ")])],1)])}),[],!1,null,null,null);e.a=l.exports},266:function(t,e,n){"use strict";var i=n(245);n.n(i).a},267:function(t,e,n){(e=n(136)(!0)).push([t.i,".ec-cart-item{margin-bottom:1rem}.ec-cart-item__name{font-size:.88rem;line-height:1.2;margin-bottom:.25rem}.ec-cart-item__row{display:flex;align-items:center}.ec-cart-item__picture{max-width:90px;margin-right:1rem}.ec-cart-item__edit{margin-right:.25rem}.ec-cart-item__quantity{display:inline-block;width:75px}.ec-cart-item__remove{display:block;text-align:center;margin-top:.15rem;color:var(--danger);font-size:.85rem;text-transform:lowercase}.ec-cart-item__remove:hover{color:var(--danger)}.ec-cart-item__prices{text-align:right;flex-grow:1;overflow:hidden}.ec-cart-item__price-un{font-size:.83rem;color:var(--gray)}","",{version:3,sources:["EcCartItem.scss"],names:[],mappings:"AAGA,cACE,kBAAmB,CAEnB,oBACE,gBAAiB,CACjB,eAAgB,CAChB,oBAAqB,CACtB,mBAGC,YAAa,CACb,kBAAmB,CACpB,uBAGC,cAAe,CACf,iBAAkB,CACnB,oBAGC,mBAAoB,CACrB,wBAGC,oBAAqB,CACrB,UAAW,CACZ,sBAGC,aAAc,CACd,iBAAkB,CAClB,iBAAkB,CAClB,mBAAoB,CACpB,gBAAiB,CACjB,wBAAyB,CAN1B,4BASG,mBAAoB,CACrB,sBAID,gBAAiB,CACjB,WAAY,CACZ,eAAgB,CACjB,wBAGC,gBAAiB,CACjB,iBAAkB",file:"EcCartItem.scss",sourcesContent:["$primary: #e60014; $secondary: #cecece; $settings-theme: (\n  bootswatch: _\n); \n.ec-cart-item {\n  margin-bottom: 1rem;\n\n  &__name {\n    font-size: .88rem;\n    line-height: 1.2;\n    margin-bottom: .25rem;\n  }\n\n  &__row {\n    display: flex;\n    align-items: center;\n  }\n\n  &__picture {\n    max-width: 90px;\n    margin-right: 1rem;\n  }\n\n  &__edit {\n    margin-right: .25rem;\n  }\n\n  &__quantity {\n    display: inline-block;\n    width: 75px;\n  }\n\n  &__remove {\n    display: block;\n    text-align: center;\n    margin-top: .15rem;\n    color: var(--danger);\n    font-size: .85rem;\n    text-transform: lowercase;\n\n    &:hover {\n      color: var(--danger);\n    }\n  }\n\n  &__prices {\n    text-align: right;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n\n  &__price-un {\n    font-size: .83rem;\n    color: var(--gray);\n  }\n}\n"]}]),t.exports=e},268:function(t,e,n){var i=n(316);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(137).default)("145f9bb9",i,!0,{})},315:function(t,e,n){"use strict";var i=n(268);n.n(i).a},316:function(t,e,n){(e=n(136)(!0)).push([t.i,".ec-minicart{display:inline}.ec-minicart__button{position:relative}.ec-minicart__button .badge{position:absolute;top:-.2rem;right:-.2rem;font-size:.8rem}.ec-minicart__sidebar{position:fixed;width:330px;max-width:100%;height:100%;top:0;right:0;z-index:1100;border-radius:0}.ec-minicart__sidebar>article{overflow-y:auto}.ec-minicart__summary{color:var(--gray);display:flex;align-items:center;justify-content:space-between;padding-bottom:1rem}.ec-minicart__subtotal{color:var(--secondary)}","",{version:3,sources:["EcMinicart.scss"],names:[],mappings:"AAGA,aACE,cAAe,CAEf,qBACE,iBAAkB,CADnB,4BAIG,iBAAkB,CAClB,UAAW,CACX,YAAa,CACb,eAAgB,CACjB,sBAID,cAAe,CACf,WAAY,CACZ,cAAe,CACf,WAAY,CACZ,KAAM,CACN,OAAQ,CACR,YAAa,CACb,eAAgB,CARjB,8BAWG,eAAgB,CACjB,sBAID,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,6BAA8B,CAC9B,mBAAoB,CACrB,uBAGC,sBAAuB",file:"EcMinicart.scss",sourcesContent:["$primary: #e60014; $secondary: #cecece; $settings-theme: (\n  bootswatch: _\n); \n.ec-minicart {\n  display: inline;\n\n  &__button {\n    position: relative;\n\n    .badge {\n      position: absolute;\n      top: -.2rem;\n      right: -.2rem;\n      font-size: .8rem;\n    }\n  }\n\n  &__sidebar {\n    position: fixed;\n    width: 330px;\n    max-width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    z-index: 1100;\n    border-radius: 0;\n\n    > article {\n      overflow-y: auto;\n    }\n  }\n\n  &__summary {\n    color: var(--gray);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 1rem;\n  }\n\n  &__subtotal {\n    color: var(--secondary);\n  }\n}\n"]}]),t.exports=e},358:function(t,e,n){"use strict";n.r(e);var i=n(38),a=(n(183),n(31)),r=n(96),s=n(20),o=n(253),c={name:"EcMinicart",components:{EcCartItem:n(255).a},props:{lang:{type:String,default:a.$ecomConfig.get("lang")},ecomCart:{type:Object,default:()=>s.a},showCart:{type:Boolean,default:!1},showOnItemAdded:{type:Boolean,default:!0},checkoutUrl:{type:String,default:"/app/#/checkout"},cartUrl:{type:String,default:"/app/#/cart"}},computed:{cart(){return this.ecomCart.data}},methods:{dictionary:o.a,formatMoney:r.a,show(){this.$emit("update:showCart",!0)},hide(){this.$emit("update:showCart",!1)}},created(){this.showOnItemAdded&&s.a.on("addItem",({data:t})=>{this.$set(this.ecomCart,"data",t),this.show()})},mounted(){document.querySelector("body").appendChild(this.$refs.sidebar)}},m=(n(315),n(72)),l=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ec-minicart"},[t._t("button",[n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ec-minicart__button btn btn-lg btn-light",attrs:{type:"button",title:t.dictionary("shopping_cart")},on:{click:t.show}},[n("i",{staticClass:"fas fa-shopping-bag"}),n("span",{staticClass:"badge badge-sm badge-primary"},[t._v(" "+t._s(t.cart.items.length)+" ")])])]),n("div",{ref:"sidebar"},[n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[n("aside",{directives:[{name:"show",rawName:"v-show",value:t.showCart,expression:"showCart"}],staticClass:"ec-minicart__sidebar card shadow"},[t._t("header",[n("header",{staticClass:"card-header"},[t._v(" "+t._s(t.dictionary("my_cart"))+" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":t.dictionary("close")},on:{click:t.hide}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),n("article",{staticClass:"card-body"},[n("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[t.cart.items.length?n("div",{key:"list",staticClass:"ec-minicart__list"},[t._t("list",[n("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp faster"}},t._l(t.cart.items,(function(e){return n("ec-cart-item",{key:e._id,attrs:{item:e,resetQnt:t.showCart},on:{increase:function(n){return t.ecomCart.increaseItemQnt(e._id,n)},remove:function(n){return t.ecomCart.removeItem(e._id)}}})})),1)],null,{items:t.cart.items})],2):n("div",{key:"empty",staticClass:"ec-minicart__empty"},[t._t("empty",[n("p",{staticClass:"lead text-muted"},[t._v(" "+t._s(t.dictionary("empty_cart"))+" ... ")]),n("a",{staticClass:"btn btn-block btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.hide(e)}}},[n("span",{staticClass:"mr-1"},[n("i",{staticClass:"fas fa-arrow-left"})]),t._v(" "+t._s(t.dictionary("continue_shopping"))+" ")])])],2)])],1),t._t("footer",[t.cart.subtotal||t.cart.items.length?n("footer",{staticClass:"card-footer"},[n("div",{staticClass:"ec-minicart__summary"},[n("span",[t._v("Subtotal")]),n("strong",{staticClass:"ec-minicart__subtotal"},[t._v(" "+t._s(t.formatMoney(t.cart.subtotal))+" ")])]),n("a",{staticClass:"ec-minicart__btn-checkout btn btn-block btn-primary",attrs:{role:"button",href:t.checkoutUrl}},[n("span",{staticClass:"mr-1"},[n("i",{staticClass:"fas fa-check"})]),t._v(" "+t._s(t.dictionary("checkout"))+" ")]),n("a",{staticClass:"ec-minicart__btn-cart btn btn-block btn-outline-secondary",attrs:{role:"button",href:t.cartUrl}},[t._v(" "+t._s(t.dictionary("see_cart"))+" ")])]):t._e()])],2)])],1)],2)}),[],!1,null,null,null).exports;function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=(t={},e="cart-button")=>{const n=document.getElementById(e);if(n){const{$overlay:a}=window.storefront;new i.default({data:{showCart:!1},render(n){const i=this;return n(l,{attrs:{id:e},props:p(p({},t.props),{},{showCart:i.showCart}),on:{"update:showCart"(t){i.showCart=t,a&&(t?(a.show(),a.once("hide",()=>{i.showCart=!1})):a.hide())}}})}}).$mount(n)}}}}]);
//# sourceMappingURL=bc45dd287fdaba1dc4af.js.map