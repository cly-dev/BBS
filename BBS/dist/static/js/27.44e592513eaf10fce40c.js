webpackJsonp([27],{

/***/ "CWXC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/CollectionQuest.vue
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

/* harmony default export */ var CollectionQuest = ({
  data: function data() {
    return {
      currentPage1: 5,
      tableData: []
    };
  },

  methods: {
    //返回
    comeBack: function comeBack() {
      this.$router.push({
        name: "collection"
      });
    },

    //跳转详情事件
    handleWatch: function handleWatch(index, row) {
      console.log(index, row);
      this.$router.push({
        name: "questdetail", params: { title: row.questionId }
      });
    },

    //q取消收藏事件
    handleDelete: function handleDelete(index, row) {
      var _this = this;

      console.log(index, row);
      this.$axios({
        url: "/collectionQuestion/delete",
        method: "POST",
        params: {
          questionId: row.questionId
        }
      }).then(function (res) {
        if (res.data.code == "200") {
          _this.$message({
            type: "success",
            message: "取消收藏成功",
            offset: 100
          });
        }
      });
    },

    //
    handleSizeChange: function handleSizeChange(val) {
      console.log("\u6BCF\u9875 " + val + " \u6761");
    },

    //切换页码事件
    handleCurrentChange: function handleCurrentChange(val) {
      this.$axios({
        url: "/collectionQuestion/showByPage/6cae95a3-6052-4bcd-b55f-4ef36312c7cd/" + val + "/6",
        method: "GET"
      }).then(function (res) {
        console.log(res);
      });
      console.log("\u5F53\u524D\u9875: " + val);
    }
  },
  created: function created() {
    var _this2 = this;

    this.$axios({
      url: "/collectionQuestion/show/76f09dda-fdcf-45d6-aea4-5feb3e3c9a65",
      method: 'GET'
    }).then(function (res) {
      console.log(res);
      _this2.tableData = res.data.date;
    }).catch(function (err) {
      console.log(err);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-53a1912f","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/CollectionQuest.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CollectionQuest_container"},[_c('div',{staticClass:"CollectionQuest_header"},[_c('span',{on:{"click":_vm.comeBack}},[_vm._v("返回")]),_vm._v(" "),_c('span',[_vm._v("我收藏的问题")])]),_vm._v(" "),(_vm.tableData!='')?_c('div',{staticClass:"CollectionQuest_mainer"},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"align":"center","label":"问题名","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticStyle:{"margin-left":"10px"}},[_vm._v(_vm._s(scope.row.title))])]}}],null,false,1398263620)}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"提问时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n            "+_vm._s(scope.row.createTime)+"\n        ")]}}],null,false,2046066604)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{attrs:{"content":"查看详情","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-search","circle":"","size":"medium"},on:{"click":function($event){return _vm.handleWatch(scope.$index, scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"取消收藏","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-delete","circle":"","size":"medium","type":"danger"},on:{"click":function($event){return _vm.handleDelete(scope.$index, scope.row)}}})],1)]}}],null,false,2872326504)})],1),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.currentPage1,"page-size":6,"layout":"total, prev, pager, next","total":_vm.tableData.length},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1):_c('div',{staticClass:"CollectionQuest_null"},[_c('span',[_vm._v("还未收藏任何问题呢")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/campus/square"}},[_vm._v("去逛逛")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_CollectionQuest = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/CollectionQuest.vue
function injectStyle (ssrContext) {
  __webpack_require__("UiIq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53a1912f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  CollectionQuest,
  Bbs_CollectionQuest,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_CollectionQuest = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "UiIq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=27.44e592513eaf10fce40c.js.map