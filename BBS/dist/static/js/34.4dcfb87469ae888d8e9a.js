webpackJsonp([34],{

/***/ "XHas":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "o9z8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/api/data.js + 2 modules
var data = __webpack_require__("Foau");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Track.vue


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


/* harmony default export */ var Track = ({
  data: function data() {
    return {
      currentPage1: 1,
      list: [{ time: "2021", data: "kakak", scanHistoryId: "222" }]
    };
  },

  methods: {
    handleDelete: function handleDelete(id, key) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(data["g" /* DeleteHistory */])({ scanHistoryId: id });

              case 2:
                result = _context.sent;

                if (result["data"].code == "200") {
                  _this.$message({
                    type: "success",
                    message: "删除成功",
                    offset: "100"
                  });
                  _this.list.splice(key, 1);
                }
                console.log(id);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log("\u6BCF\u9875 " + val + " \u6761");
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var result;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(data["q" /* ShowAllLimitTimeByPage */])(val);

              case 2:
                result = _context2.sent;

                _this2.list = result["data"].date;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var result;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(data["q" /* ShowAllLimitTimeByPage */])(1);

            case 2:
              result = _context3.sent;

              _this3.list = result["data"].date;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0967b337","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Track.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),(this.list!='')?_c('div',{staticClass:"Track_container"},[_c('span',{staticClass:"Track_tis"},[_vm._v("只显示最近3天浏览记录")]),_vm._v(" "),_vm._l((_vm.list),function(value,key){return _c('div',{key:key,staticClass:"Track_main"},[_c('span',[_vm._v(_vm._s(key + 1))]),_vm._v(" "),_c('span'),_vm._v(" "),_c('span',[_vm._v(_vm._s(value.time)+"浏览了"+_vm._s(value.data))]),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"删除","placement":"top","effect":"light"}},[_c('span',{staticClass:"el-icon-delete",on:{"click":function($event){return _vm.handleDelete(value.scanHistoryId,key)}}})])],1)}),_vm._v(" "),_c('div',{staticClass:"Delete_btn"},[_c('el-button',{attrs:{"size":"mini","icon":"el-icon-delete"}},[_vm._v("删除全部")])],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.currentPage1,"page-size":10,"layout":"total, prev, pager, next","total":1000},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1)],2):_c('div',{staticClass:"Track_null"},[_c('span',[_vm._v("空空如也 ")]),_c('router-link',{attrs:{"to":"/campus/hotlist"}},[_vm._v("去逛逛")])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Track_header"},[_c('span',[_vm._v("我的足迹")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Track = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Track.vue
function injectStyle (ssrContext) {
  __webpack_require__("XHas")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0967b337"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Track,
  Bbs_Track,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Track = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=34.4dcfb87469ae888d8e9a.js.map