(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{232:function(t,e,i){var s=i(291);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(110).default)("47fe50f4",s,!0,{})},290:function(t,e,i){"use strict";var s=i(232);i.n(s).a},291:function(t,e,i){(e=i(109)(!1)).push([t.i,".ec-summary__item{display:flex;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.ec-summary__item a{color:inherit}.ec-summary__item img{flex:0 0 50px;height:auto;margin-right:.5rem}.ec-summary__item small{line-height:1.3;display:inline-block}.ec-summary__amount{margin:1.5rem 0;padding:.75rem 0;border-top:1px dotted var(--gray)}.ec-summary__amount:last-child{margin-bottom:0;padding-bottom:0}.ec-summary__amount__row{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}.ec-summary__amount__row>span{font-weight:300}.ec-summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.ec-summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.ec-summary__amount__row--total>div{font-weight:700}.ec-summary__amount__row--total strong{color:var(--secondary)}",""]),t.exports=e},293:function(t,e,i){var s=i(342);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(110).default)("0b8169a8",s,!0,{})},294:function(t,e,i){var s=i(344);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(110).default)("0cb08df4",s,!0,{})},300:function(t,e,i){"use strict";i(49);var s=i(36),a=i(73),n=i(6),r=i(99),o=i(233),c={name:"EcShippingLine",props:{shippingLine:{type:Object,required:!0},financialStatus:String},computed:{i19afterApproval:()=>Object(s.a)(o.f),i19days:()=>Object(s.a)(o.m).toLowerCase(),i19noNumber:()=>Object(s.a)(o.w),i19postingDeadline:()=>Object(s.a)(o.A),i19recipient:()=>Object(s.a)(o.C),i19shippingAddress:()=>Object(s.a)(o.F),i19shippingMethod:()=>Object(s.a)(o.G),i19trackingCodes:()=>Object(s.a)(o.L),i19willReceiveMsg:()=>Object(s.a)(o.N),i19workingDays:()=>Object(s.a)(o.O).toLowerCase(),isDeliveryPending(){if(this.shippingLine.status)switch(this.shippingLine.status.current){case"delivered":case"returned_for_exchange":case"received_for_exchange":case"returned":return!1}return!0},shippingTime(){const{shippingLine:t}=this;let e=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(e+=t.delivery_time.days),e},isShippingTimeWorkingDays(){const{shippingLine:t}=this;return t.delivery_time&&t.delivery_time.working_days||t.posting_deadline&&t.posting_deadline.working_days}}},l=(i(341),i(61)),_={name:"EcOrderInfo",components:{EcShippingLine:Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-shipping-line"},[t.isDeliveryPending?i("div",[t.shippingLine.status?i("div",{staticClass:"ec-shipping-line__info"},[t.shippingLine.posting_deadline?i("div",[t._v(" "+t._s(t.i19postingDeadline)+": "+t._s(t.shippingLine.posting_deadline.days)+" "),t.shippingLine.posting_deadline.working_days?[t._v(" "+t._s(t.i19workingDays)+" ")]:[t._v(" "+t._s(t.i19days)+" ")],"paid"!==t.financialStatus&&t.shippingLine.posting_deadline.after_approval?i("span",[t._v(" "+t._s(t.i19afterApproval)+" ")]):t._e()],2):t._e(),t.shippingLine.delivery_time?i("div",[t._v(" "+t._s(t.i19postingDeadline)+": "+t._s(t.shippingLine.delivery_time.days)+" "),t.shippingLine.delivery_time.working_days?[t._v(" "+t._s(t.i19workingDays)+" ")]:[t._v(" "+t._s(t.i19days)+" ")]],2):t._e()]):i("div",{staticClass:"ec-shipping-line__deadline"},[t._v(" "+t._s(t.i19willReceiveMsg)+" "+t._s(t.shippingTime)+" "+t._s(t.isShippingTimeWorkingDays?t.i19workingDays:t.i19days)+" "),t.shippingLine.posting_deadline&&t.shippingLine.posting_deadline.after_approval?i("span",[t._v(" "+t._s(t.i19afterApproval)+" ")]):t._e()]),i("div",{staticClass:"ec-shipping-line__method"},[t._v(" "+t._s(t.i19shippingMethod)+": "+t._s(t.shippingLine.app.label||t.shippingLine.shipping_method_label)+" "),t.shippingLine.tracking_codes?i("div",{staticClass:"ec-shipping-line__tracking"},[t._v(" "+t._s(t.i19trackingCodes)+": "),t._l(t.shippingLine.tracking_codes,(function(e){return i("div",[e.link?i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):i("strong",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e()]),i("div",{staticClass:"ec-shipping-line__address"},[i("h5",[i("i",{staticClass:"fas fa-map-marker-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),t.shippingLine.to.name?i("p",[t._v(" "+t._s(t.i19recipient)+": "+t._s(t.shippingLine.to.name)+" ")]):t._e(),t._v(" "+t._s(t.shippingLine.to.street+", "+(t.shippingLine.to.number||t.i19noNumber)+(t.shippingLine.to.complement?" - "+t.shippingLine.to.complement:"")+(t.shippingLine.to.borough?", "+t.shippingLine.to.borough:""))+" "),t.shippingLine.to.city?i("div",[t._v(" "+t._s(t.shippingLine.to.city)+" / "+t._s(t.shippingLine.to.province_code||t.shippingLine.to.province)+" ")]):t._e(),i("div",[t._v(t._s(t.shippingLine.to.zip))])])]):t._e()])}),[],!1,null,null,null).exports,EcSummary:i(301).a},props:{ecomPassport:{type:Object,default:()=>r.a},order:{type:Object,required:!0},isNew:{type:Boolean},skipDataLoad:{type:Boolean},skipFirstDataLoad:{type:Boolean},skipCustomerUpdate:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"}},data(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order}},computed:{i19cancelOrder:()=>"Cancelar pedido",i19codeCopied:()=>Object(s.a)(o.i),i19copyCode:()=>Object(s.a)(o.k),i19copyErrorMsg:()=>Object(s.a)(o.l),i19doPaymentMsg:()=>Object(s.a)(o.p),i19myOrders:()=>Object(s.a)(o.v),i19of:()=>Object(s.a)(o.x),i19orderConfirmationMsg:()=>Object(s.a)(o.y),i19orderNumber:()=>Object(s.a)(o.z),i19printBillet:()=>Object(s.a)(o.B),i19redirectToPayment:()=>Object(s.a)(o.D),i19referenceCode:()=>Object(s.a)(o.E),i19reopenOrder:()=>"Reabrir pedido",i19transactionCode:()=>Object(s.a)(o.M),i19ticketCode:()=>Object(s.a)(o.J),i19orderObservations:()=>"Observações do pedido",localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this,i=t.financial_status&&t.financial_status.current;return i||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null}},methods:{formatMoney:a.a,i19FinancialStatus:t=>Object(s.a)(o.a)[t],i19FulfillmentStatus:t=>Object(s.a)(o.b)[t],i19OrderStatus:t=>Object(s.a)(o.c)[t],toClipboard(t){this.$copyText(t).then(()=>{this.$bvToast.toast(t,{title:this.i18n("CodeCopied"),variant:"success",solid:!0,autoHideDelay:1500})},e=>{console.error(e),this.$bvToast.toast("Oops",{title:"".concat(this.i18n("copyErrorMsg"),": ").concat(t),variant:"warning",solid:!0})})},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e&&e.checkAuthorization()&&e.requestApi("/me.json").then(({data:i})=>{const s=i.orders||[],a={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach(e=>{t[e]&&(a[e]=t[e])});const n=s.findIndex(({_id:e,number:i})=>e===t._id||i===t.number);n>-1?Object.assign(s[n],a):s.push(a),e.requestApi("/me.json","patch",{orders:s})})},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};r.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then(()=>{this.localOrder={...this.localOrder,...t}}).finally(()=>{this.isUpdating=!1})}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=()=>Object(n.e)({url:"/orders/".concat(this.order._id,".json")}).then(({data:t})=>{this.localOrder={...this.localOrder,...t}}).catch(t=>{console.error(t)});this.reloadInterval=setInterval(t,9e3),this.skipFirstDataLoad||setTimeout(()=>{t().finally(()=>{this.loaded=!0})},this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},d=(i(343),Object(l.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-order-info py-4"},[t.isNew?i("div",{staticClass:"ec-order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.loaded?i("div",{key:"loaded"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-7"},[i("p",{staticClass:"ec-order-info__number"},[t._v(" "+t._s(t.i19orderNumber)+": "),i("span",{staticClass:"h4"},[t._v(t._s(t.localOrder.number))])]),i("transition-group",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isUpdating?i("div",{key:"updating"},[i("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):i("article",{key:"uptodate"},[t.status?i("div",{staticClass:"ec-order-info__status",class:"ec-order-info__status--"+t.status},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" ")]):t._e(),t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?i("div",{staticClass:"ec-order-info__billet"},[i("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),t.transaction.banking_billet.code?[i("p",[t._v(" "+t._s(t.i19ticketCode)+": "),i("br"),i("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),i("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[i("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?i("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[i("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?i("div",{staticClass:"ec-order-info__redirect"},[i("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),i("a",{staticClass:"btn btn-lg btn-primary",attrs:{target:"_blank",href:t.transaction.payment_link}},[i("i",{staticClass:"fas fa-arrow-right"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),i("div",{staticClass:"row ec-order-info__details"},[i("div",{staticClass:"col-12 col-md-6"},[t._t("payment",[i("div",{staticClass:"ec-order-info__payment"},[i("div",{staticClass:"ec-order-info__financial-status",class:"ec-order-info__financial-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")]),t._l(t.localOrder.transactions,(function(e){return i("div",[i("p",{staticClass:"ec-order-info__payment-value"},[t._v(" "+t._s(e.payment_method.name||t.localOrder.payment_method_label)+": "),e.installments&&e.installments.value?i("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):i("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")])]),e.credit_card?i("p",{staticClass:"ec-order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?i("span",[e.credit_card.company?t._e():i("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?i("div",{staticClass:"ec-order-info__transaction-code"},[i("small",[t._v(t._s(t.i19transactionCode))]),i("br"),t._v(" "+t._s(e.intermediator.transaction_code)+" ")]):t._e(),e.intermediator.transaction_reference?i("div",{staticClass:"ec-order-info__transaction-reference"},[i("small",[t._v(t._s(t.i19referenceCode))]),i("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction})],2),i("div",{staticClass:"col-12 col-md-6"},[t._t("shipping",[i("div",{staticClass:"ec-order-info__shipping"},[t.fulfillmentStatus?i("div",{staticClass:"ec-order-info__fulfillment-status",class:"ec-order-info__fulfillment-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):t._e(),t.localOrder.shipping_lines?t._l(t.localOrder.shipping_lines,(function(e){return i("ec-shipping-line",{key:e._id,attrs:{"shipping-line":e,financialStatus:t.financialStatus}})})):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress})],2)]),t.localOrder.notes?i("div",{staticClass:"row ec-order-info__notes"},[i("div",{staticClass:"col-12 col-lg-7"},[i("p",[i("span",{staticClass:"h5"},[t._v(t._s(t.i19orderObservations)+":")])]),i("p",[i("span",[t._v(t._s(t.localOrder.notes))])])])]):t._e()],2)])],1),t.localOrder.amount?i("div",{staticClass:"col-12 col-lg-5"},[i("div",{staticClass:"ec-order-info__summary card"},[i("div",{staticClass:"card-body"},[i("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating?t._e():["open"===t.status?[t.fulfillmentStatus?t._e():i("button",{staticClass:"ec-order-info__toggle btn btn-danger btn-sm",on:{click:t.toggle}},[i("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]:"closed"!==t.status||"delivered"!==t.fulfillmentStatus?i("button",{staticClass:"ec-order-info__toggle btn btn-sm",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[i("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()]],2):t._e()])]):i("div",{key:"loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.isNew&&t.accountOrdersUrl?i("a",{staticClass:"ec-order-info__orders-link btn btn-sm btn-light",attrs:{href:t.accountOrdersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null));e.a=d.exports},301:function(t,e,i){"use strict";var s=i(36),a=i(84),n=i(20),r=i(37),o=i(73),c=i(82),l=i(233),_={name:"EcSummary",props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object},computed:{i19buyer:()=>Object(s.a)(l.g),i19contactPhone:()=>Object(s.a)(l.j),i19discount:()=>Object(s.a)(l.n),i19docNumber:()=>Object(s.a)(l.q),i19freight:()=>Object(s.a)(l.s),i19myAccount:()=>Object(s.a)(l.u),i19subtotal:()=>Object(s.a)(l.H),i19summary:()=>Object(s.a)(l.I),i19total:()=>Object(s.a)(l.K),buyerName(){if(!this.buyer)return"";const{name:t}=this.buyer;return"".concat(t.given_name," ").concat(t.middle_name||""," ").concat(t.family_name)},buyerPhone(){return Object(a.a)(this.buyer)}},methods:{name:n.a,price:r.a,formatMoney:o.a,img:t=>Object(c.a)(t,null,"small")}},d=(i(290),i(61)),p=Object(d.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"ec-summary"},[i("h5",{staticClass:"ec-summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",[t.items?i("div",{staticClass:"ec-summary__list"},t._l(t.items,(function(e){return i("div",{staticClass:"ec-summary__item"},[t.img(e)?i("img",{attrs:{src:t.img(e).url,alt:t.img(e).alt}}):t._e(),i("div",[i("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "+t._s(t.formatMoney(t.price(e)))+" "),i("br"),e.slug?i("a",{attrs:{href:"/"+e.slug,target:"_blank"}},[i("small",[t._v(t._s(t.name(e)))])]):i("small",[t._v(t._s(t.name(e)))])])])})),0):t._e()]),t._t("amount",[i("div",{staticClass:"ec-summary__amount"},[i("div",{staticClass:"ec-summary__amount__row"},[i("span",[t._v(t._s(t.i19subtotal))]),i("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),i("div",{staticClass:"ec-summary__amount__row"},[i("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?i("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e()],2):t._e()]),i("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?i("div",{staticClass:"ec-summary__amount__row"},[i("span",[t._v(t._s(t.i19discount))]),i("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),i("div",{staticClass:"ec-summary__amount__row ec-summary__amount__row--total"},[i("span",[t._v(t._s(t.i19total))]),i("div",[t._v(t._s(t.formatMoney(t.amount.total)))])])])]),t._t("default"),t._t("buyer",[t.buyer?i("div",{staticClass:"ec-summary__buyer"},[i("h5",[t._v(t._s(t.i19buyer))]),i("p",[t._v(" "+t._s(t.buyerName)+" "),i("br"),i("small",[t._v(t._s(t.i19docNumber)+":")]),t._v(" "+t._s(t.buyer.doc_number)+" "),i("br"),i("small",[t._v(t._s(t.i19contactPhone)+":")]),t._v(" "+t._s(t.buyerPhone)+" ")]),i("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[i("i",{staticClass:"fas fa-pencil-alt mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()])],2)}),[],!1,null,null,null);e.a=p.exports},341:function(t,e,i){"use strict";var s=i(293);i.n(s).a},342:function(t,e,i){(e=i(109)(!1)).push([t.i,".ec-shipping-line__address{margin-top:1rem}",""]),t.exports=e},343:function(t,e,i){"use strict";var s=i(294);i.n(s).a},344:function(t,e,i){(e=i(109)(!1)).push([t.i,".ec-order-info__new{text-align:center;color:var(--success);font-size:1.4rem;margin-bottom:2rem}.ec-order-info__orders-link{margin-top:1.5rem}.ec-order-info__number{color:var(--gray)}.ec-order-info__number span{display:block;color:var(--secondary)}.ec-order-info__details{margin-top:.75rem;margin-bottom:1.5rem}.ec-order-info__financial-status,.ec-order-info__status{font-weight:700;font-size:1.15rem;margin:1rem 0}.ec-order-info__status--open{color:var(--info)}.ec-order-info__status--cancelled{color:var(--danger)}.ec-order-info__status--closed{color:var(--success)}.ec-order-info__financial-status--pending{color:var(--warning)}.ec-order-info__financial-status--under_analysis{color:var(--info)}.ec-order-info__financial-status--in_dispute,.ec-order-info__financial-status--unauthorized,.ec-order-info__financial-status--voided{color:var(--danger)}.ec-order-info__financial-status--paid{color:var(--success)}.ec-order-info__summary{background:var(--light)}.ec-order-info__toggle{display:block;margin-left:auto;margin-top:1.5rem}",""]),t.exports=e}}]);
//# sourceMappingURL=f8e54745e0b3484a481b.js.map