webpackJsonp([19],{

/***/ "6KNY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "hotlist",
  data: function data() {
    return {
      activeName: 'hoslist'
    };
  },

  methods: {},
  watch: {
    index: function index(newV, orderV) {
      console.log(newV);
      console.log(orderV);
    }
    // activeName:(newV,orderV)=>{
    //   console.log(newV);
    //   console.log(orderV);
    // }
  },
  created: function created() {
    var _this = this;

    // this.$nextTick(()=>{
    //   if(!localStorage.getItem("campusmenu") || localStorage.getItem("campusmenu")=="" ){
    //     this.activeName='second';
    //     console.log(111);
    //   }else{
    //       console.log(11);
    //      this.activeName=localStorage.getItem("campusmenu");
    //      localStorage.setItem("campusmenu","");
    //   }
    // })
    console.log(this.$route.name);
    this.$nextTick(function () {
      _this.activeName = _this.$route.name;
    });
  },
  mounted: function mounted() {
    $(".menu_nav li").on("click", function (e) {
      $(".menu_nav li").css("color", "");
      e.target.style.color = "#409EFF";
      // if(e.target.innerText === "广场"){
      //   console.log(3);
      //    this.$router.push({
      //           name:'square'
      //         })
      // }else if(e.target.innerText === "热榜"){
      //   console.log(2);

      //   this.$router.push({
      //         name:'hoslist'
      //       })
      // }else{
      //   console.log(1);
      //    this.$router.push({
      //         name:"follow"
      //       })
      // }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "JJtI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Campus_Menu.vue
var Campus_Menu = __webpack_require__("6KNY");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-20d9b974","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Campus_Menu.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu_container"},[_c('div',{staticClass:"menu_nav"},[_c('ul',[_c('router-link',{attrs:{"to":"/campus/follow"}},[_c('li',{class:{actives:this.$route.name==='follow'}},[_vm._v("关注")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/campus/hotlist"}},[_c('li',{class:{actives:this.$route.name==='hotlist'}},[_vm._v("热榜")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/campus/square"}},[_c('li',{class:{actives:this.$route.name==='square'}},[_vm._v("广场")])])],1)]),_vm._v(" "),_c('keep-alive',[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Campus_Menu = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Campus_Menu.vue
function injectStyle (ssrContext) {
  __webpack_require__("U3eH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Campus_Menu["a" /* default */],
  Bbs_Campus_Menu,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Campus_Menu = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "U3eH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=19.131189610b8ab3ecf6d1.js.map