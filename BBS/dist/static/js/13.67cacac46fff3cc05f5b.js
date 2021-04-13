webpackJsonp([13],{

/***/ "7ZTI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/clouds.0febc59.jpg";

/***/ }),

/***/ "Aq4j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/minxin/upload.js
var upload = __webpack_require__("lQEl");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Department/AdminDepartment.vue
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


/* harmony default export */ var AdminDepartment = ({
  mixins: [upload["a" /* default */]],
  data: function data() {
    return {
      modifyDialogVisible: false,
      currentPage1: 5,
      //查看人数显示框
      centerDialogVisible: false,

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      ruleForm: {
        name: '宣传部',
        belong: '学生会',
        desc: '来'
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
        type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }

    };
  },

  methods: {
    submitForm: function submitForm(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log('\u6BCF\u9875 ' + val + ' \u6761');
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log('\u5F53\u524D\u9875: ' + val);
    }
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;

    //   this.$router.beforeEach((to, from, next) => {
    //         console.log(to.name);
    //         next();          
    //   })
    //判断认证信息
    this.$nextTick(function () {
      if (_this.$store.state.identity == "user") {
        _this.$message({
          message: "还未认证,自动跳转到认证界面",
          type: "warning",
          offset: 100
        });
        setTimeout(function () {
          _this.$router.push({
            name: "部门/认证"
          });
        }, 2000);
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56ed5a22","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Department/AdminDepartment.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"AdminDapartment_header"},[_vm._v("部门管理")]),_vm._v(" "),_c('div',{staticClass:"AdminDepartment_container"},[_c('span',[_vm._v("宣传部")]),_vm._v(" "),_c('span',{on:{"click":function($event){_vm.modifyDialogVisible = true}}},[_vm._v("修改部门信息")]),_vm._v(" "),_c('span',{on:{"click":function($event){_vm.centerDialogVisible = true}}},[_vm._v("查看部门人数")]),_vm._v(" "),_c('span',[_vm._v("发起部门活动")]),_vm._v(" "),_c('span',[_vm._v("查看近期活动")])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改信息","visible":_vm.modifyDialogVisible,"width":"30%","center":""},on:{"update:visible":function($event){_vm.modifyDialogVisible=$event}}},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"部门名称"}},[_c('el-input',{attrs:{"readonly":""},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"部门所属"}},[_c('el-input',{attrs:{"readonly":""},model:{value:(_vm.ruleForm.belong),callback:function ($$v) {_vm.$set(_vm.ruleForm, "belong", $$v)},expression:"ruleForm.belong"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"部门图片"}},[_c('div',{staticClass:"department_imgcontainer"},[_c('span',{staticClass:"el-icon-delete"}),_vm._v(" "),_c('img',{staticClass:"department_img",attrs:{"src":__webpack_require__("7ZTI"),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"department_imgcontainer"},[_c('span',{staticClass:"el-icon-delete"}),_vm._v(" "),_c('img',{staticClass:"department_img",attrs:{"src":__webpack_require__("7ZTI"),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"department_imgcontainer"},[_c('span',{staticClass:"el-icon-delete"}),_vm._v(" "),_c('img',{staticClass:"department_img",attrs:{"src":__webpack_require__("7ZTI"),"alt":""}})])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"上传图片"}},[_c('div',{staticClass:"article_coverimg"},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"limit":2,"list-type":"picture-card","multiple":"","action":"/article/uploadArticleImage","show-file-list":true,"before-upload":_vm.beforeAvatarUpload,"http-request":_vm.CoverImgUpload}},[(_vm.imageUrl)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.imageUrl}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"margin":"-20px"}})])],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"部门描述","prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.ruleForm.desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "desc", $$v)},expression:"ruleForm.desc"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.modifyDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.modifyDialogVisible = false}}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"部门人数","visible":_vm.centerDialogVisible,"width":"40%","center":""},on:{"update:visible":function($event){_vm.centerDialogVisible=$event}}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"align":"center","label":"姓名","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticStyle:{"margin-left":"10px"}},[_vm._v(_vm._s(scope.row.date))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"职位","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.name)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{attrs:{"content":"查看","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"circle":"","icon":"el-icon-search","size":"mini"},on:{"click":function($event){return _vm.handleEdit(scope.$index, scope.row)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"移除","placement":"top","effect":"light"}},[_c('el-button',{attrs:{"icon":"el-icon-delete","circle":"","size":"mini","type":"danger"},on:{"click":function($event){return _vm.handleDelete(scope.$index, scope.row)}}})],1)]}}])})],1),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.currentPage1,"page-size":100,"layout":"total, prev, pager, next","total":1000},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}}),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.centerDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.centerDialogVisible = false}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Department_AdminDepartment = (esExports);
// CONCATENATED MODULE: ./src/components/Department/AdminDepartment.vue
function injectStyle (ssrContext) {
  __webpack_require__("LCcz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56ed5a22"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AdminDepartment,
  Department_AdminDepartment,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Department_AdminDepartment = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LCcz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=13.67cacac46fff3cc05f5b.js.map