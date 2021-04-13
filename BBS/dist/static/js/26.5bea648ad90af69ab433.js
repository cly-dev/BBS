webpackJsonp([26],{

/***/ "YkKr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/api/data.js + 2 modules
var data = __webpack_require__("Foau");

// EXTERNAL MODULE: ./src/eventBus.js
var eventBus = __webpack_require__("O6e2");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Hotlist.vue



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
//
//
//
//
//
//



var num = 1;
/* harmony default export */ var Hotlist = ({
  name: "hotlist",
  data: function data() {
    return {
      data: [],
      index: 0,
      color: "#ff5500",
      activeName: 'second'
    };
  },
  created: function created() {
    var _this = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var result;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(data["F" /* getHomepage */])();

            case 2:
              result = _context.sent;

              _this.data = result["data"].date;
              console.log(_this.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: {
    stylecolor: function stylecolor() {
      //计算属性只能参数只能通过闭包读取
      return function (index) {
        if (index > 2) {
          return { 'color': 'gray' };
        }
      };
    }
  },
  methods: {
    handleClick: function handleClick(tab, event) {
      if (tab.label == "关注") {
        this.$router.push({
          name: "follow"
        });
      } else if (tab.label == "热榜") {
        this.$router.push({
          name: 'hoslist'
        }).catch(function (err) {
          alert("已在当前页");
        });
      }
    },

    //点击跳转事件
    toArticledetail: function toArticledetail(item) {
      localStorage.setItem("questionId", item.questionId);
      localStorage.setItem("question", stringify_default()({
        questionname: item.title,
        desc: item.content
      }));
      eventBus["a" /* default */].$emit('sentTitle', item.title);
      this.$router.push({
        name: 'questdetail', params: { title: item.questionId }
      });
    }
  },
  watch: {
    index: function index(newV, orderV) {
      console.log(newV);
      console.log(orderV);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-60732188","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Hotlist.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',_vm._l((_vm.data),function(item,index){return _c('div',{key:index,staticClass:"campus_list",on:{"click":function($event){return _vm.toArticledetail(item)}}},[_c('div',{staticClass:"list_index",style:(_vm.stylecolor(index))},[_vm._v("\n                "+_vm._s(index+1)+"\n               ")]),_vm._v(" "),_c('div',{staticClass:"list_des",class:{'blod':item.questionImage==null}},[_c('h3',[_vm._v(" "+_vm._s(item.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(item.content)}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.allAnswerLikeNum)+"热度")])]),_vm._v(" "),(item.questionImage!=null)?_c('div',{staticClass:"list_img"},[_c('div',[_c('el-image',{staticStyle:{"text-align":"center"},attrs:{"src":item.questionImage,"lazy":""}})],1)]):_vm._e()])}),0)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Hotlist = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Hotlist.vue
function injectStyle (ssrContext) {
  __webpack_require__("cxJy")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60732188"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Hotlist,
  Bbs_Hotlist,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Hotlist = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "cxJy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=26.5bea648ad90af69ab433.js.map