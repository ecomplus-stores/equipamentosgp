(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{246:function(e,t,s){var n=s(294);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s(110).default)("4443f98a",n,!0,{})},293:function(e,t,s){"use strict";var n=s(246);s.n(n).a},294:function(e,t,s){(t=s(109)(!0)).push([e.i,".ec-search__popover{max-width:calc(100vw - 2rem);max-height:calc(100vh - 200px);margin-top:10px;overflow-y:auto;box-shadow:0 0 .75rem rgba(0,0,0,.075)}@media (min-width:576px){.ec-search__popover{min-width:400px}}@media (min-width:850px){.ec-search__popover{max-height:calc(100vh - 100px)}}@media (min-width:1200px){.ec-search__popover{max-width:1100px;min-width:800px}}.ec-search__head{display:flex;justify-content:space-between;align-items:flex-start}.ec-search__close{padding:0 .25rem}.ec-search__close:focus{box-shadow:none}.ec-search__history,.ec-search__info{font-weight:300;margin-bottom:.25rem;font-size:1.15rem;overflow-x:auto;white-space:nowrap;color:var(--gray)}.ec-search__info em{color:var(--secondary);margin-right:.5rem}.ec-search__info span{display:inline-block}.ec-search__history__link{margin-left:.5rem}.ec-search__items{display:flex;overflow-x:auto}@media (min-width:992px){.ec-search__items{margin-top:1rem;width:850px}}.ec-search__item{padding-right:1rem}.ec-search__item:last-child{padding-right:0}@media (max-width:849.98px){.ec-search__item{width:200px;flex:0 0 200px}}@media (min-width:850px){.ec-search__item{width:25%}}.ec-search__item .btn,.ec-search__item button{display:none}.ec-search__item .ec-prices{height:auto;white-space:normal}","",{version:3,sources:["EcSearch.scss"],names:[],mappings:"AAIE,oBACE,4BAA6B,CAC7B,8BAA+B,CAC/B,eAAgB,CAChB,eAAgB,CAChB,sCAA0C,CAE1C,yBAPF,oBAQI,eAAgB,CAWnB,CARC,yBAXF,oBAYI,8BAA+B,CAOlC,CAJC,0BAfF,oBAgBI,gBAAiB,CACjB,eAAgB,CAEnB,CAED,iBACE,YAAa,CACb,6BAA8B,CAC9B,sBAAuB,CACxB,kBAGC,gBAAiB,CADlB,wBAIG,eAAgB,CACjB,qCAKD,eAAgB,CAChB,oBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,kBAAmB,CACnB,iBAAkB,CACnB,oBAIG,sBAAuB,CACvB,kBAAmB,CAHtB,sBAOG,oBAAqB,CACtB,0BAID,iBAAkB,CACnB,kBAGC,YAAa,CACb,eAAgB,CAEhB,yBAJF,kBAKI,eAAgB,CAChB,WAAY,CAEf,CAED,iBACE,kBAAmB,CADpB,4BAIG,eAAgB,CACjB,4BALH,iBAQI,WAAY,CACZ,cAAe,CAgBlB,CAbC,yBAZF,iBAaI,SAAU,CAYb,CAzBA,8CAkBG,YAAa,CAlBhB,4BAsBG,WAAY,CACZ,kBAAmB",file:"EcSearch.scss",sourcesContent:["$primary: #e60014; $secondary: #cecece; $settings-theme: (\n  bootswatch: _\n); \n.ec-search {\n  &__popover {\n    max-width: calc(100vw - 2rem);\n    max-height: calc(100vh - 200px);\n    margin-top: 10px;\n    overflow-y: auto;\n    box-shadow: 0 0 .75rem rgba(0, 0, 0, .075);\n\n    @media (min-width: 576px) {\n      min-width: 400px;\n    }\n\n    @media (min-width: 850px) {\n      max-height: calc(100vh - 100px);\n    }\n\n    @media (min-width: 1200px) {\n      max-width: 1100px;\n      min-width: 800px;\n    }\n  }\n\n  &__head {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  &__close {\n    padding: 0 .25rem;\n\n    &:focus {\n      box-shadow: none;\n    }\n  }\n\n  &__info,\n  &__history {\n    font-weight: 300;\n    margin-bottom: .25rem;\n    font-size: 1.15rem;\n    overflow-x: auto;\n    white-space: nowrap;\n    color: var(--gray);\n  }\n\n  &__info {\n    em {\n      color: var(--secondary);\n      margin-right: .5rem;\n    }\n\n    span {\n      display: inline-block;\n    }\n  }\n\n  &__history__link {\n    margin-left: .5rem;\n  }\n\n  &__items {\n    display: flex;\n    overflow-x: auto;\n\n    @media (min-width: 992px) {\n      margin-top: 1rem;\n      width: 850px;\n    }\n  }\n\n  &__item {\n    padding-right: 1rem;\n\n    &:last-child {\n      padding-right: 0;\n    }\n\n    @media (max-width: 849.98px) {\n      width: 200px;\n      flex: 0 0 200px;\n    }\n\n    @media (min-width: 850px) {\n      width: 25%;\n    }\n\n    button,\n    .btn {\n      display: none;\n    }\n\n    .ec-prices {\n      height: auto;\n      white-space: normal;\n    }\n  }\n}\n"]}]),e.exports=t},333:function(e,t,s){"use strict";s.r(t);var n=s(30),a=(s(164),s(49),s(13),s(1)),r=s(168);const i={did_you_mean:{en_us:"Did you mean",pt_br:"Você quis dizer"},no_results_for:{en_us:"No results for",pt_br:"Nenhum produto encontrado para"},total_results_for:{en_us:"products found for",pt_br:"produtos encontrados para"},see_all:{en_us:"See all",pt_br:"Ver todos"}};var o={name:"EcSearch",components:{EcProductCard:s(192).a},props:{lang:{type:String,default:a.a.get("lang")},storeId:{type:Number,default:a.a.get("store_id")},term:{type:String,default:""},maxItems:{type:Number,default:4},autoFixScore:{type:[Number,Boolean],default:.83},popoverPlacement:{type:String,default:"bottom"}},data(){return{ecomSearch:new r.a(this.storeId),searchTerm:this.term,searchedTerm:null,searching:!1,suggestedItems:[],suggestedTerm:"",totalSearchResults:0,elInput:null,showPopover:!1}},computed:{history(){return this.ecomSearch.history.filter(e=>e.length>2&&-1===this.searchTerm.indexOf(e)).slice(0,5)}},methods:{dictionary:function(e,t){return t||(t=this&&this.lang||"en_us"),i[e]&&i[e][t]||""},setSearchTerm(e){this.elInput.value=e;const t=this.$el.parentElement;t&&"FORM"===t.tagName?t.submit():this.searchTerm=e},checkCurrentTerm(e){return!e&&!this.elInput.value||this.elInput.value===e},handleSuggestions(e){let t=e,s=!1;this.suggestedTerm="",this.ecomSearch.getTermSuggestions().forEach(({options:n,text:a})=>{if(n.length){const r=n[0];!this.totalSearchResults&&this.autoFixScore>0&&r.score>=this.autoFixScore&&-1===r.text.indexOf(e)&&(s=!0),t=t.replace(a,r.text)}}),t!==e&&(s?this.elInput.value=this.searchTerm=t:this.suggestedTerm=t,this.ecomSearch.history.shift())},fetchItems(e){const{ecomSearch:t}=this;!1!==e?(e||(e=this.searchTerm),t.setSearchTerm(e)):t.reset().setPageSize(this.maxItems),this.searching=!0,t.fetch().then(()=>{if(this.checkCurrentTerm(e)){const{getItems:s,getTotalCount:n}=t;this.searchedTerm=e,this.suggestedItems=s(),this.totalSearchResults=n(),this.handleSuggestions(e)}}).catch(e=>{console.error(e)}).finally(()=>{this.searching=!1})},instantSearch(e){null===this.searchedTerm?this.fetchItems(e):this.searchedTerm!==e&&(this.showPopover=!1,setTimeout(()=>{this.checkCurrentTerm(e)&&this.fetchItems(e),setTimeout(()=>{this.checkCurrentTerm(e)&&(this.showPopover=!0)},100)},400))}},created(){let e,t=window.pageYOffset;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{Math.abs(window.pageYOffset-t)>50&&this.elInput===document.activeElement&&this.elInput.blur(),t=window.pageYOffset},50)}),this.ecomSearch.setPageSize(this.maxItems)},mounted(){let e;for(let t=0;t<this.$el.childNodes.length;t++)if("INPUT"===this.$el.childNodes[0].tagName){e=this.$el.childNodes[0];break}e?(e.addEventListener("keyup",t=>{this.searchTerm=e.value,this.showPopover||(this.showPopover=!0)}),e.addEventListener("focus",e=>{this.totalSearchResults||this.instantSearch(!1)}),this.term?this.fetchItems():this.searchTerm=e.value,e.setAttribute("autocomplete","off"),this.elInput=e):this.fetchItems()},watch:{searchTerm(e){e?e.length>2&&this.instantSearch(e):this.instantSearch(!1)}}},c=(s(293),s(61)),h=Object(c.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-search"},[e._t("input",[s("input",{staticClass:"form-control",attrs:{type:"search"}})]),e.elInput?[s("b-popover",{attrs:{triggers:"focus","custom-class":"ec-search__popover",target:e.elInput.id,show:e.showPopover,placement:e.popoverPlacement,"fallback-placement":[e.popoverPlacement]},on:{"update:show":function(t){e.showPopover=t}}},[s("div",{staticClass:"ec-search__head"},[s("div",[e.searching?s("div",{staticClass:"spinner-border m-4",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[!e.searching&&e.searchedTerm?s("div",{staticClass:"ec-search__info"},[e.suggestedTerm?[e._v(" "+e._s(e.dictionary("did_you_mean"))+" "),s("a",{staticClass:"ec-search__suggestion",attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.suggestedTerm)}}}),e._v(" ? ")]:e._e(),e.totalSearchResults?s("span",{staticClass:"ec-search__count-results"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.dictionary("total_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))]),e.totalSearchResults>e.maxItems?s("a",{attrs:{href:"#"},domProps:{textContent:e._s("+"+e.dictionary("see_all"))},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.searchedTerm)}}}):e._e()]):s("span",{staticClass:"ec-search__no-results"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))])])],2):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInLeft"}},[e.history.length?s("div",{staticClass:"ec-search__history"},[s("i",{staticClass:"fas fa-history"}),e._l(e.history,(function(t){return s("a",{staticClass:"ec-search__history__link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):e._e()])],1),s("button",{staticClass:"btn ec-search__close",attrs:{type:"button"},on:{click:function(t){e.showPopover=!1}}},[s("i",{staticClass:"fas fa-times"})])]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slow"}},[!e.searching&&e.suggestedItems.length?s("div",{staticClass:"ec-search__items"},e._l(e.suggestedItems,(function(t){return s("ec-product-card",{key:t._id,staticClass:"ec-search__item",attrs:{lang:e.lang,storeId:e.storeId,product:t}})})),1):e._e()])],1)]:e._e()],2)}),[],!1,null,null,null).exports;t.default=(e={},t="search-input")=>{const s=document.getElementById(t);if(s){const t={};for(let e=s.attributes.length-1;e>=0;e--){const{name:n,value:a}=s.attributes[e];t[n]=a}new n.default({render:s=>s(h,{props:e.props,scopedSlots:{input:()=>s("input",{attrs:t})}})}).$mount(s)}}}}]);
//# sourceMappingURL=dd924890668b91068ba1.js.map