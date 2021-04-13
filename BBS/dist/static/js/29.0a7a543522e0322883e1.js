webpackJsonp([29],{

/***/ "RBvE":
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/MyQuesition.vue


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
//


/* harmony default export */ var MyQuesition = ({
  data: function data() {
    return {
      currentPage1: 1,
      tableData: []
    };
  },

  methods: {
    comeBack: function comeBack() {
      this.$router.push({
        name: "collection"
      });
    },
    handleWatch: function handleWatch(index, row) {
      localStorage.setItem("questionId", row.questionId);
      this.$router.push({
        name: 'questdetail', params: { title: row.questionId }
      });
    },
    handleEdit: function handleEdit(index, row) {
      localStorage.setItem("questionId", row.questionId);
      this.$router.push({
        name: "Revisequestion", params: { questionId: row.questionId }
      });
    },

    //删除文章
    handleDelete: function handleDelete(index, row) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(data["h" /* DeleteQuestion */])({ questionId: row.questionId });

              case 2:
                result = _context.sent;

                if (result["data"].code == "200") {
                  _this.$message({
                    type: "success",
                    message: "删除成功",
                    offset: 100
                  });
                  _this.tableData.splice(index, 1);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    handleSizeChange: function handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
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
                return Object(data["r" /* ShowAllQuestionByPage */])("6cae95a3-6052-4bcd-b55f-4ef36312c7cd/" + val + "/6");

              case 2:
                result = _context2.sent;

                _this2.tableData = result["data"].date;

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
              return Object(data["r" /* ShowAllQuestionByPage */])("6cae95a3-6052-4bcd-b55f-4ef36312c7cd/1/6");

            case 2:
              result = _context3.sent;

              _this3.tableData = result["data"].date;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-38553341","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/MyQuesition.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"CollectionArticle_mainer"},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"align":"center","label":"问题名","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticStyle:{"margin-left":"10px"}},[_vm._v(_vm._s(scope.row.title))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"发布时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n          "+_vm._s(scope.row.createTime)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"回答数","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.allAnswerLikeNum)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{attrs:{"content":"查看详情","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-search","circle":"","size":"medium"},on:{"click":function($event){return _vm.handleWatch(scope.$index, scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"编辑","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-edit","circle":"","size":"medium","type":"primary"},on:{"click":function($event){return _vm.handleEdit(scope.$index, scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"删除该问题","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-delete","circle":"","size":"medium","type":"danger"}})],1)]}}])})],1),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.currentPage1,"page-size":6,"layout":"total, prev, pager, next","total":_vm.tableData.length},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MyQuesition_header"},[_c('span',[_vm._v("我提问的")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_MyQuesition = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/MyQuesition.vue
function injectStyle (ssrContext) {
  __webpack_require__("fI/B")
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
  MyQuesition,
  Bbs_MyQuesition,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_MyQuesition = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fI/B":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=29.0a7a543522e0322883e1.js.map