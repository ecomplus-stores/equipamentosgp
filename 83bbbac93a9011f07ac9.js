(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{255:function(e,t,s){var r=s(320);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,s(110).default)("3e50ba3e",r,!0,{})},319:function(e,t,s){"use strict";var r=s(255);s.n(r).a},320:function(e,t,s){(t=s(109)(!1)).push([e.i,".ec-search__popover{max-width:calc(100vw - 2rem);max-height:calc(100vh - 200px);margin-top:10px;overflow-y:auto;box-shadow:0 0 .75rem rgba(0,0,0,.075)}@media (min-width:576px){.ec-search__popover{min-width:400px}}@media (min-width:850px){.ec-search__popover{max-height:calc(100vh - 100px)}}@media (min-width:1200px){.ec-search__popover{max-width:1100px;min-width:800px}}.ec-search__head{display:flex;justify-content:space-between;align-items:flex-start}.ec-search__close{padding:0 .25rem}.ec-search__close:focus{box-shadow:none}.ec-search__history,.ec-search__info{font-weight:300;margin-bottom:.25rem;font-size:1.15rem;overflow-x:auto;white-space:nowrap;color:var(--gray)}.ec-search__info em{color:var(--secondary);margin-right:.5rem}.ec-search__info span{display:inline-block}.ec-search__history__link{margin-left:.5rem}.ec-search__items{display:flex;overflow-x:auto}@media (min-width:992px){.ec-search__items{margin-top:1rem;width:850px}}.ec-search__item{padding-right:1rem}.ec-search__item:last-child{padding-right:0}@media (max-width:849.98px){.ec-search__item{width:200px;flex:0 0 200px}}@media (min-width:850px){.ec-search__item{width:25%}}.ec-search__item .btn,.ec-search__item button{display:none}.ec-search__item .ec-prices{height:auto;white-space:normal}",""]),e.exports=t},359:function(e,t,s){"use strict";s.r(t);var r=s(30),a=(s(164),s(49),s(13),s(1)),i=s(168);const c={did_you_mean:{en_us:"Did you mean",pt_br:"Você quis dizer"},no_results_for:{en_us:"No results for",pt_br:"Nenhum produto encontrado para"},total_results_for:{en_us:"products found for",pt_br:"produtos encontrados para"},see_all:{en_us:"See all",pt_br:"Ver todos"}};var o={name:"EcSearch",components:{EcProductCard:s(192).a},props:{lang:{type:String,default:a.a.get("lang")},storeId:{type:Number,default:a.a.get("store_id")},term:{type:String,default:""},maxItems:{type:Number,default:4},autoFixScore:{type:[Number,Boolean],default:.83},popoverPlacement:{type:String,default:"bottom"}},data(){return{ecomSearch:new i.a(this.storeId),searchTerm:this.term,searchedTerm:null,searching:!1,suggestedItems:[],suggestedTerm:"",totalSearchResults:0,elInput:null,showPopover:!1}},computed:{history(){return this.ecomSearch.history.filter(e=>e.length>2&&-1===this.searchTerm.indexOf(e)).slice(0,5)}},methods:{dictionary:function(e,t){return t||(t=this&&this.lang||"en_us"),c[e]&&c[e][t]||""},setSearchTerm(e){this.elInput.value=e;const t=this.$el.parentElement;t&&"FORM"===t.tagName?t.submit():this.searchTerm=e},checkCurrentTerm(e){return!e&&!this.elInput.value||this.elInput.value===e},handleSuggestions(e){let t=e,s=!1;this.suggestedTerm="",this.ecomSearch.getTermSuggestions().forEach(({options:r,text:a})=>{if(r.length){const i=r[0];!this.totalSearchResults&&this.autoFixScore>0&&i.score>=this.autoFixScore&&-1===i.text.indexOf(e)&&(s=!0),t=t.replace(a,i.text)}}),t!==e&&(s?this.elInput.value=this.searchTerm=t:this.suggestedTerm=t,this.ecomSearch.history.shift())},fetchItems(e){const{ecomSearch:t}=this;!1!==e?(e||(e=this.searchTerm),t.setSearchTerm(e)):t.reset().setPageSize(this.maxItems),this.searching=!0,t.fetch().then(()=>{if(this.checkCurrentTerm(e)){const{getItems:s,getTotalCount:r}=t;this.searchedTerm=e,this.suggestedItems=s(),this.totalSearchResults=r(),this.handleSuggestions(e)}}).catch(e=>{console.error(e)}).finally(()=>{this.searching=!1})},instantSearch(e){null===this.searchedTerm?this.fetchItems(e):this.searchedTerm!==e&&(this.showPopover=!1,setTimeout(()=>{this.checkCurrentTerm(e)&&this.fetchItems(e),setTimeout(()=>{this.checkCurrentTerm(e)&&(this.showPopover=!0)},100)},400))}},created(){let e,t=window.pageYOffset;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{Math.abs(window.pageYOffset-t)>50&&this.elInput===document.activeElement&&this.elInput.blur(),t=window.pageYOffset},50)}),this.ecomSearch.setPageSize(this.maxItems)},mounted(){let e;for(let t=0;t<this.$el.childNodes.length;t++)if("INPUT"===this.$el.childNodes[0].tagName){e=this.$el.childNodes[0];break}e?(e.addEventListener("keyup",t=>{this.searchTerm=e.value,this.showPopover||(this.showPopover=!0)}),e.addEventListener("focus",e=>{this.totalSearchResults||this.instantSearch(!1)}),this.term?this.fetchItems():this.searchTerm=e.value,e.setAttribute("autocomplete","off"),this.elInput=e):this.fetchItems()},watch:{searchTerm(e){e?e.length>2&&this.instantSearch(e):this.instantSearch(!1)}}},n=(s(319),s(61)),h=Object(n.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-search"},[e._t("input",[s("input",{staticClass:"form-control",attrs:{type:"search"}})]),e.elInput?[s("b-popover",{attrs:{triggers:"focus","custom-class":"ec-search__popover",target:e.elInput.id,show:e.showPopover,placement:e.popoverPlacement,"fallback-placement":[e.popoverPlacement]},on:{"update:show":function(t){e.showPopover=t}}},[s("div",{staticClass:"ec-search__head"},[s("div",[e.searching?s("div",{staticClass:"spinner-border m-4",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[!e.searching&&e.searchedTerm?s("div",{staticClass:"ec-search__info"},[e.suggestedTerm?[e._v(" "+e._s(e.dictionary("did_you_mean"))+" "),s("a",{staticClass:"ec-search__suggestion",attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.suggestedTerm)}}}),e._v(" ? ")]:e._e(),e.totalSearchResults?s("span",{staticClass:"ec-search__count-results"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.dictionary("total_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))]),e.totalSearchResults>e.maxItems?s("a",{attrs:{href:"#"},domProps:{textContent:e._s("+"+e.dictionary("see_all"))},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.searchedTerm)}}}):e._e()]):s("span",{staticClass:"ec-search__no-results"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))])])],2):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInLeft"}},[e.history.length?s("div",{staticClass:"ec-search__history"},[s("i",{staticClass:"fas fa-history"}),e._l(e.history,(function(t){return s("a",{staticClass:"ec-search__history__link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):e._e()])],1),s("button",{staticClass:"btn ec-search__close",attrs:{type:"button"},on:{click:function(t){e.showPopover=!1}}},[s("i",{staticClass:"fas fa-times"})])]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slow"}},[!e.searching&&e.suggestedItems.length?s("div",{staticClass:"ec-search__items"},e._l(e.suggestedItems,(function(t){return s("ec-product-card",{key:t._id,staticClass:"ec-search__item",attrs:{lang:e.lang,storeId:e.storeId,product:t}})})),1):e._e()])],1)]:e._e()],2)}),[],!1,null,null,null).exports;t.default=(e={},t="search-input")=>{const s=document.getElementById(t);if(s){const t={};for(let e=s.attributes.length-1;e>=0;e--){const{name:r,value:a}=s.attributes[e];t[r]=a}new r.default({render:s=>s(h,{props:e.props,scopedSlots:{input:()=>s("input",{attrs:t})}})}).$mount(s)}}}}]);
//# sourceMappingURL=83bbbac93a9011f07ac9.js.map