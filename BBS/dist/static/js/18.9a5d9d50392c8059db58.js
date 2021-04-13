webpackJsonp([18],{

/***/ "/mog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minxin_upload__ = __webpack_require__("lQEl");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0__minxin_upload__["a" /* default */]],
  data: function data() {
    return {
      ruleForm: {
        name: '',
        grade: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        grade: [{ required: true, message: '请输入年级', trigger: 'blur' }]
      },
      activeName: ["1"],
      centerDialogVisible: false,
      activeNames: ["1"],
      //学生会主要职位
      post: ["学生会主席", "学生会副主席"],
      //部门名
      department: ["艺术团", "体育部", "宣传部"],

      charge: ["第一负责人", "第二负责人", "干事"]
    };
  },

  methods: {
    handleChange: function handleChange(val) {
      console.log(val);
    },
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


    //核心职位
    handMainIdent: function handMainIdent(value) {
      console.log(value);
      $(".el-dialog__title").text(value + '\u8BA4\u8BC1');
      this.centerDialogVisible = true;
    },

    //显示认证职位
    Identifacationling: function Identifacationling(item, value) {
      console.log(item, value);
      $(".el-dialog__title").text('' + item + value + '\u8BA4\u8BC1');
      this.centerDialogVisible = true;
    }
  },
  mounted: function mounted() {
    $(".first .el-collapse-item__header").eq(0).css("font-size", "18px");
    $(".second .el-collapse-item__header").eq(0).css("font-size", "18px");
    $(".thead .el-collapse-item__header").eq(0).css("font-size", "18px");
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "1VoG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "t2Bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Department/Identification.vue
var Identification = __webpack_require__("/mog");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-399c4ccc","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Department/Identification.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"Identification_header"},[_vm._v("认证")]),_vm._v(" "),_c('div',{staticClass:"Identification_container"},[_c('el-collapse',{attrs:{"accordion":""},on:{"change":_vm.handleChange},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('el-collapse-item',{staticClass:"first",attrs:{"title":"学生会 Student-union","name":"1"}},[_vm._l((_vm.post),function(value,key){return _c('div',{key:key,staticClass:"Department_post"},[_vm._v("\n          "+_vm._s(value)+"\n          "),_c('div',{staticClass:"Identification_btn"},[_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":function($event){return _vm.handMainIdent(value)}}},[_vm._v("去认证")])],1)])}),_vm._v(" "),_c('el-collapse',{attrs:{"accordion":""},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.department),function(item,index){return _c('el-collapse-item',{key:index,attrs:{"title":item,"name":index+1}},_vm._l((_vm.charge),function(value,key){return _c('div',{key:key,staticClass:"Department_post"},[_vm._v("\n              "+_vm._s(value)+"\n              "),_c('div',{staticClass:"Identification_btn"},[_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":function($event){return _vm.Identifacationling(item,value)}}},[_vm._v("去认证")])],1)])}),0)}),1)],2),_vm._v(" "),_c('el-collapse-item',{staticClass:"second",attrs:{"title":"团委 League-committee","name":"2"}},[_c('div',[_vm._v("\n          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；\n        ")]),_vm._v(" "),_c('div',[_vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]),_vm._v(" "),_c('el-collapse-item',{staticClass:"thead",attrs:{"title":"自律办 SelfdisciplineAssociation","name":"3"}},[_c('div',[_vm._v("简化流程：设计简洁直观的操作流程；")]),_vm._v(" "),_c('div',[_vm._v("\n          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；\n        ")]),_vm._v(" "),_c('div',[_vm._v("\n          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\n        ")])])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"认证","visible":_vm.centerDialogVisible,"width":"40%","center":""},on:{"update:visible":function($event){_vm.centerDialogVisible=$event}}},[_c('div',{staticClass:"Identification_form"},[_c('div',{staticStyle:{"width":"80%"}},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"姓名:","prop":"name"}},[_c('el-input',{model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"年级:","prop":"grade"}},[_c('el-input',{model:{value:(_vm.ruleForm.grade),callback:function ($$v) {_vm.$set(_vm.ruleForm, "grade", $$v)},expression:"ruleForm.grade"}})],1),_vm._v(" "),_c('div',{staticClass:"Identification_img"},[_c('span',{staticStyle:{"color":"#606266"}},[_vm._v("工作证照:")]),_vm._v(" "),_c('div',{staticClass:"upload_container"},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"limit":2,"list-type":"picture-card","multiple":"","action":"/article/uploadArticleImage","show-file-list":true,"before-upload":_vm.beforeAvatarUpload,"http-request":_vm.CoverImgUpload}},[(_vm.imageUrl)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.imageUrl}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"margin":"-20px"}})])],1)]),_vm._v(" "),_c('span',{staticStyle:{"text-indent":"100px","display":"block","margin-top":"10px","color":"red"}},[_vm._v("注:上传照片需要工作证正反面")])],1)],1)]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.centerDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm('ruleForm')}}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Department_Identification = (esExports);
// CONCATENATED MODULE: ./src/components/Department/Identification.vue
function injectStyle (ssrContext) {
  __webpack_require__("1VoG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-399c4ccc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Identification["a" /* default */],
  Department_Identification,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Department_Identification = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=18.9a5d9d50392c8059db58.js.map