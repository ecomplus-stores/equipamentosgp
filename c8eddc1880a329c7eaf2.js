(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{288:function(e,r,t){var o=t(342);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(137).default)("186892f1",o,!0,{})},341:function(e,r,t){"use strict";var o=t(288);t.n(o).a},342:function(e,r,t){(r=t(136)(!0)).push([e.i,".ec-order{min-height:300px}","",{version:3,sources:["/home/runner/work/equipamentosgp/equipamentosgp/node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss"],names:[],mappings:"AAGA,UACE,gBAAiB",file:"EcOrder.scss",sourcesContent:["$primary: #e60014; $secondary: #cecece; $settings-theme: (\n  bootswatch: _\n); \n.ec-order {\n  min-height: 300px;\n}\n"]}]),e.exports=r},352:function(e,r,t){"use strict";t.r(r);var o=t(138),n=t(10),s=t(125);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d={name:"EcOrder",components:{EcOrderInfo:t(293).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>s.a}},data(){return{isReady:this.skipDataLoad,orderBody:c({_id:""},this.order)}},computed:{localOrder:{get(){return this.orderBody},set(e){this.orderBody=e,this.$emit("update:order",e)}}},methods:{fetchOrder(){const e="/orders/".concat(this.orderBody._id,".json");(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(e):Object(n.e)({url:e})).then(({data:e})=>{this.localOrder=e,this.isReady=!0})}},watch:{"order._id"(e){e&&e!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id"(e){e&&!this.skipDataLoad&&this.fetchOrder()}},created(){this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then(e=>{this.localOrder=e.find(({number:e})=>e===this.order.number)||{}}))}},u=(t(341),t(72));function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var h={name:"order",components:{EcOrder:Object(u.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("article",{staticClass:"ec-order"},[t("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[e.isReady?t("ec-order-info",{key:"info",attrs:{order:e.localOrder,"skip-first-data-load":""},on:{"update:order":function(r){e.localOrder=r}}}):t("div",{key:"loading"},[t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[e._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:l(l({},Object(o.c)(["orders"])),{},{number(){const e=this.$route.params.number;return/^[0-9]+$/.test(e)&&parseInt(e,10)},order(){const e=this.orders.find(({_id:e,number:r})=>this.number===r||this.$route.params.number===e);if(!e){const{number:e}=this;return e?{_id:this.$route.params.id,number:e}:{_id:this.$route.params.number}}return e}})},b=Object(u.a)(h,(function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"order"}},[r("ec-order",{attrs:{order:this.order}})],1)}),[],!1,null,null,null);r.default=b.exports}}]);
//# sourceMappingURL=c8eddc1880a329c7eaf2.js.map