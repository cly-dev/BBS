webpackJsonp([32],{

/***/ "H5fL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/CollectionArticle.vue
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

/* harmony default export */ var CollectionArticle = ({
  data: function data() {
    return {
      currentPage1: 5,
      tableData: [{
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      }, {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      }, {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      }, {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }]
    };
  },

  methods: {
    comeBack: function comeBack() {
      this.$router.push({
        name: "collection"
      });
    },
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log("\u6BCF\u9875 " + val + " \u6761");
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log("\u5F53\u524D\u9875: " + val);
    }
  },
  created: function created() {
    this.$axios({
      url: "/collectionArticle/show/76f09dda-fdcf-45d6-aea4-5feb3e3c9a65",
      method: "GET"
    }).then(function (res) {
      console.log(res);
    }).catch(function (err) {
      console.log(err);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2d71bb42","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/CollectionArticle.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CollectionArticle_container"},[_c('div',{staticClass:"CollectionArticle_header"},[_c('span',{on:{"click":_vm.comeBack}},[_vm._v("返回")]),_vm._v(" "),_c('span',[_vm._v("我收藏的文章")])]),_vm._v(" "),(_vm.tableData.lenth!='')?_c('div',{staticClass:"CollectionArticle_mainer"},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"align":"center","label":"文章名","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"el-icon-time"}),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"10px"}},[_vm._v(_vm._s(scope.row.date))])]}}],null,false,1846363197)}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"作者","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[_c('el-tag',{attrs:{"size":"medium"}},[_vm._v(_vm._s(scope.row.name))])],1)]}}],null,false,3547087485)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{attrs:{"content":"查看详情","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-search","circle":"","size":"medium"},on:{"click":function($event){return _vm.handleEdit(scope.$index, scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"取消收藏","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-delete","circle":"","size":"medium","type":"danger"},on:{"click":function($event){return _vm.handleDelete(scope.$index, scope.row)}}})],1)]}}],null,false,3596625405)})],1),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.currentPage1,"page-size":6,"layout":"total, prev, pager, next","total":_vm.tableData.length},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1):_c('div',{staticClass:"CollectionArticle_null"},[_c('span',[_vm._v("还未收藏任何文章呢")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/campus/square"}},[_vm._v("去逛逛")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_CollectionArticle = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/CollectionArticle.vue
function injectStyle (ssrContext) {
  __webpack_require__("vTrA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d71bb42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  CollectionArticle,
  Bbs_CollectionArticle,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_CollectionArticle = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vTrA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=32.3c196ae013a3ade187b4.js.map