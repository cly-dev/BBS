webpackJsonp([8],{

/***/ "AXw+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_data__ = __webpack_require__("Foau");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minxin_uploadImg__ = __webpack_require__("Lt+z");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var activityTime = [];
var enrollTime = [];


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__minxin_uploadImg__["a" /* default */]],
  data: function data() {
    return {
      filetype: "activity",
      value1: "",
      //图片
      active: 1,
      ruleForm: {
        name: "",
        region: "",
        place: "",
        date1: [],
        date2: [],
        num: null,
        type: [],
        desc: ""
      },
      rules: {
        that: this,
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }, {
          min: 5,
          max: 20,
          message: "长度在 5 到 20 个字符",
          trigger: "blur"
        }],
        region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
        place: [{ required: true, message: "请输入详细地址", trigger: "blur" }],
        num: [{
          type: "number",
          message: "请输入人数",
          required: true,
          trigger: "blur"
        }, {
          pattern: /^(5|[5-9]\d?|100)$/,
          message: "人数在5 到100 以内",
          trigger: "blur"
        }],
        //  data1: [
        //   {
        //     type: "array",
        //     required: true,
        //     trigger: "change",
        //     validator(rule,value,callback){
        //       if(value==null){
        //         callback("请输入日期");
        //       }else{
        //           let date1=value[0];
        //           let data_Arr1=date1.split(" ");
        //           let date_Arr2=data_Arr1[0].split("-");
        //           let date_Arr3=data_Arr1[1].split(":");
        //           DateFlay(date_Arr2,date_Arr3,callback)
        //           let date2=value[1];

        //           let dateEnd=date2.split(" ");

        //           let date_Arr4=dateEnd[0].split("-");
        //           if(date_Arr4[1]==date_Arr2[1]){
        //             if(date_Arr4[2]-date_Arr2[2]>15){
        //               callback("活动时间最多为15天");
        //             }
        //           }else{
        //             if((date_Arr4[2]+30)-date_Arr2[2]>15){
        //               callback("活动时间最多为15天");
        //               }
        //           }
        //         if(enrollTime!=""){
        //         let enrollStart=enrollTime[1].split(" ");
        //         let enroll_Arr1=enrollStart[0].split("-");
        //         let enroll_Arr2=enrollStart[1].split(":");
        //         if(date_Arr2[1]<enroll_Arr1[1]){
        //           callback("活动参与时间不能小于报名时间");
        //         }else if(date_Arr2[1]==enroll_Arr1[1]){
        //           if(date_Arr2[2]<enroll_Arr1[2]){
        //             callback("活动参与时间不能小于报名截止时间");
        //           }else if (date_Arr2[2]==enroll_Arr1[2]) {
        //             if(date_Arr3[0]<enroll_Arr2[0]){
        //             callback("活动参与时间不能小于报名截止时间");
        //           }else if(date_Arr3[0]==enroll_Arr2[0]){
        //             if(date_Arr3[1]<enroll_Arr2[1]){
        //               callback("活动参与时间不能小于报名截止时间");
        //             }else if(date_Arr3[1]==enroll_Arr2[1]){
        //               if(date_Arr3[2]<enroll_Arr2[2]){
        //                 callback("活动参与时间不能小于报名截止时间");
        //               }
        //             }
        //           }
        //           }

        //         }
        //       }
        //        activityTime=value[0];
        //       }
        //     }
        //   },
        // ],
        // data2: [
        //   {
        //     type: "array",
        //     required: true,
        //     trigger: "change",
        //     validator(rule,value,callback){
        //       console.log(value);
        //        if(value==null){
        //         callback("请输入日期");
        //       }else{
        //           let date1=value[0];
        //           let data_Arr1=date1.split(" ");
        //           let date_Arr2=data_Arr1[0].split("-");
        //           let date_Arr3=data_Arr1[1].split(":");

        //           let date2=value[1];
        //           let date_Arr4=date2.split(" ");
        //           let date_Arr5=date_Arr4[0].split("-");
        //           let date_Arr6=date_Arr4[1].split(":");
        //           DateFlay(date_Arr2,date_Arr3,callback);
        //           enrollTime=value;
        //           if(activityTime!="") {
        //             let activityStart=activityTime.split(" ");
        //             let activity_Arr1=activityStart[0].split("-");
        //             let activity_Arr2=activityStart[1].split(":")
        //             if(date_Arr5[1]>activity_Arr1[1]){
        //               callback("报名截止时间不能大于活动开始时间");
        //             }else if(date_Arr5[1]==activity_Arr1[1]){
        //               if(date_Arr5[2]>activity_Arr1[2]){
        //                 callback("报名截止时间不能大于活动开始时间");
        //               }else if(date_Arr5[2]==activity_Arr1[2]){
        //                 if (date_Arr6[0]>activity_Arr2[0]) {
        //                     callback("报名截止时间不能大于活动开始时间");
        //                 }else if(date_Arr6[0]==activity_Arr2[0]){
        //                    if (date_Arr6[1]>activity_Arr2[1]) {
        //                     callback("报名截止时间不能大于活动开始时间");
        //                 }else if(date_Arr6[1]==activity_Arr2[1]){
        //                     if (date_Arr6[2]>activity_Arr2[2]) {
        //                     callback("报名截止时间不能大于活动开始时间");
        //                 }
        //                 }
        //                 }
        //               }
        //             }
        //           }
        //       }
        //     }
        //   },
        // ],
        type: [{
          type: "array",
          required: true,
          len: 1,
          message: "请至少选择一个活动性质",
          trigger: "change"
        }],
        resource: [{ required: true, message: "请选择活动资源", trigger: "change" }],
        desc: [{ required: true, message: "请填写活动", trigger: "blur" }]
      }
    };
  },

  watch: {
    value1: function value1(newV, orderV) {
      console.log(newV);
      console.log(orderV);
    }
  },
  methods: {
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        //成功提交
        if (valid) {
          var addActivity = function () {
            var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ruleForm, image) {
              var result;
              return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(__WEBPACK_IMPORTED_MODULE_2__api_data__["a" /* AddActivity */])({
                        activityTitle: ruleForm.name,
                        activityContent: ruleForm.desc,
                        activityImage: image,
                        activityStartTime: ruleForm.date1[0],
                        activityEndTime: ruleForm.date1[1],
                        activityObject: "自愿报名",
                        recruitStartTime: ruleForm.date2[0],
                        recruitEndTime: ruleForm.date2[1],
                        totalNum: ruleForm.num,
                        joinNum: 0,
                        activityPlace: ruleForm.region,
                        activityAddress: ruleForm.place,
                        activityType: ruleForm.type
                      });

                    case 2:
                      result = _context.sent;
                      return _context.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function addActivity(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }();

          console.log("提交");

          var result = addActivity(_this.ruleForm, _this.image);
          result.then(function (res) {
            console.log(res);
          }).catch(function (err) {
            console.log(err);
          });
        } else {

          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted: function mounted() {
    $(".el-step.is-vertical .el-step__line").css("top", "20px");
  }
});
function DateFlay(date_Arr2, date_Arr3, callback) {
  var date = new Date();
  //判断年月日
  if (date_Arr2[0] < date.getFullYear() || date_Arr2[0] > date.getFullYear() + 1) {
    callback("年份错误");
  } else {
    if (date_Arr2[1] == date.getMonth() + 1) {
      if (date_Arr2[2] < date.getDate()) {
        callback("日期错误");
      } else {
        if (date_Arr2[2] == date.getDate()) {
          if (date_Arr3[0] < date.getHours()) {
            callback("选择时间小于当前时间:小时错误");
          } else if (date_Arr3[0] == date.getHours()) {
            if (date_Arr3[1] < date.getMinutes()) {
              callback("选择时间小于当前时间:分钟错误");
            } else if (date_Arr3[1] == date.getMinutes()) {
              if (date_Arr3[2] < date.getSeconds()) {
                callback("选择时间小于当前时间:秒数错误");
              }
            }
          }
        }
      }
    } else if (date_Arr2[1] < date.getMonth() + 1) {
      callback("选择月份小于当前月份");
    } else if (date_Arr2[1] > date.getMonth() + 2) {
      callback("只能选择最近1个月");
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "Lt+z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imageUrl: "",
      image: []
    };
  },

  methods: {
    //上传事件
    CoverImgUpload: function CoverImgUpload(e) {
      var _this = this;

      var Formdata = new FormData();
      // Formdata.append('type',this.filetype);
      Formdata.append("file", e.file);
      console.log(e);
      this.$axios({
        url: e.action,
        params: {
          type: this.filetype
        },
        data: Formdata,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        console.log(res);
        _this.image.push(res.data.date);
      }).catch(function (err) {
        console.log(err);
      });
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var isJPG = file.type === "image/jpeg";
      var isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
});

/***/ }),

/***/ "NVfg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TEvr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Department/CreateAcvitity.vue
var CreateAcvitity = __webpack_require__("AXw+");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2bee30a6","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Department/CreateAcvitity.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity_container"},[_c('span',{staticClass:"container_title"},[_vm._v("发布活动")]),_vm._v(" "),_c('div',{staticClass:"activity_form"},[_c('div',{staticStyle:{"width":"60%","margin-left":"20px"}},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"100px","size":"medium"}},[_c('el-form-item',{attrs:{"label":"活动名称","prop":"name"}},[_c('el-input',{model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动区域","prop":"region"}},[_c('el-select',{attrs:{"placeholder":"请选择活动区域"},model:{value:(_vm.ruleForm.region),callback:function ($$v) {_vm.$set(_vm.ruleForm, "region", $$v)},expression:"ruleForm.region"}},[_c('el-option',{attrs:{"label":"教学楼","value":"shanghai"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"综合楼","value":"beijing"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"篮球场","value":"beijing"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细地址","prop":"place"}},[_c('el-input',{model:{value:(_vm.ruleForm.place),callback:function ($$v) {_vm.$set(_vm.ruleForm, "place", $$v)},expression:"ruleForm.place"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动时间","prop":"data1"}},[_c('div',{staticClass:"block activity_time"},[_c('el-date-picker',{attrs:{"format":"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","type":"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.ruleForm.data1),callback:function ($$v) {_vm.$set(_vm.ruleForm, "data1", $$v)},expression:"ruleForm.data1"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"报名时间","prop":"data2"}},[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"validate-event":"","format":"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","type":"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.ruleForm.data2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "data2", $$v)},expression:"ruleForm.data2"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"限制人数","prop":"num"}},[_c('el-input',{model:{value:(_vm.ruleForm.num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "num", _vm._n($$v))},expression:"ruleForm.num"}})],1),_vm._v(" "),_c('div',{staticClass:"activity_coverimg"},[_c('span',{staticStyle:{"color":"#606266"}},[_vm._v("活动封面")]),_vm._v(" "),_c('div',{staticClass:"upload_container"},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"limit":1,"list-type":"picture-card","multiple":"","action":"/image/uploadImageSingle","show-file-list":true,"before-upload":_vm.beforeAvatarUpload,"http-request":_vm.CoverImgUpload}},[(_vm.imageUrl)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.imageUrl}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"margin":"-20px"}})])],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动性质","prop":"type"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-checkbox',{attrs:{"label":"日常聚会","name":"type"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"部门面试","name":"type","disabled":""}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"线下主题活动","name":"type"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动描述","prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.ruleForm.desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "desc", $$v)},expression:"ruleForm.desc"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm('ruleForm')}}},[_vm._v("立即创建")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){return _vm.resetForm('ruleForm')}}},[_vm._v("重置")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"Activity_step"},[_c('div',{staticStyle:{"height":"300px","top":"-20px","margin-top":"50px"}},[_c('el-steps',{attrs:{"active":_vm.active,"direction":"vertical","finish-status":"success"}},[_c('el-step',{attrs:{"title":"第1步","description":"发布活动"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"第2步","description":"审核成功"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"第3步","description":"成功发布"}})],1)],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Department_CreateAcvitity = (esExports);
// CONCATENATED MODULE: ./src/components/Department/CreateAcvitity.vue
function injectStyle (ssrContext) {
  __webpack_require__("NVfg")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2bee30a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  CreateAcvitity["a" /* default */],
  Department_CreateAcvitity,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Department_CreateAcvitity = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=8.5a0ca3e350b7ac1b6a41.js.map