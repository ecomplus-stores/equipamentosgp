(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{359:function(e,r,t){"use strict";t.r(r);t(36);var o=t(138),n=t(20),s=t(125),a=t(192);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var u={name:"confirmation",components:{EcOrderInfo:t(293).a},data:()=>({canUpsertCart:!0}),computed:c(c({},Object(o.c)(["orders","customer"])),{},{orderId(){return this.$route.params.id},order:{get(){return this.orders.find(({_id:e})=>e===this.orderId)||{_id:this.orderId}},set(e){if(e&&e._id===this.orderId){const r=this.orders.concat(),t=r.find(({_id:r})=>r===e._id);t?Object.assign(t,e):r.push(e),this.setOrders(r)}}}}),methods:c(c(c({},Object(o.d)(["addOrder","setOrders","resetCart"])),Object(o.b)(["saveCustomer"])),{},{handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:e}=this.order;e&&"cancelled"!==e&&(n.a.data.completed=!0,this.orderId&&(n.a.data.orders||(n.a.data.orders=[]),n.a.data.orders.push(this.orderId)),Object(a.c)().then(this.resetCart))}}}),created(){const{customer:e}=this;s.a.checkAuthorization()||e.main_email&&e.doc_number&&s.a.fetchLogin(e.main_email,e.doc_number).then(()=>{this.saveCustomer({ecomPassport:s.a}),this.handleUpsertCart()})},mounted(){s.a.checkAuthorization()&&this.handleUpsertCart()}},h=t(72),p=Object(h.a)(u,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"confirmation"}},[t("ec-order-info",{attrs:{order:e.order,isNew:!0},on:{"update:order":function(r){e.order=r}}})],1)}),[],!1,null,null,null);r.default=p.exports}}]);
//# sourceMappingURL=1aed1e749c2be54ec3a2.js.map