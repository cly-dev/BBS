webpackJsonp([10],{

/***/ "DB+V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Follow.vue
var Follow = __webpack_require__("hVmv");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-61338622","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Follow.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"follow_header"},[_c('div',{staticClass:"follow_nav"},[_c('ul',{on:{"click":_vm.handleClick}},[_c('li',[_vm._v("关注我的")]),_vm._v(" "),_c('li',[_vm._v("我关注的")])])])]),_vm._v(" "),_c('div',{staticClass:"follow_container"},[_c('div',{staticClass:"my_care"},[(_vm.MycareData != '')?_c('div',{staticClass:"care_container"},_vm._l((_vm.MycareData),function(value,key){return _c('div',{key:key,staticClass:"care_user"},[_c('el-popover',{attrs:{"placement":"right-end","width":"200","trigger":"hover"}},[_c('div',{staticClass:"core_info"},[_c('span',[_vm._v("邮箱:"+_vm._s(value.email))]),_vm._v(" "),_c('span',[_vm._v("性别:"+_vm._s(value.sex))]),_vm._v(" "),_c('span',[_vm._v("生日:"+_vm._s(value.birthday))]),_vm._v(" "),_c('span',[_vm._v("注册时间:"+_vm._s(value.createTime))])]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_c('img',{staticClass:"user_img",attrs:{"src":__webpack_require__("FRVW"),"alt":"请检查网络"}}),_vm._v(" "),_c('span',{staticClass:"user_name"},[_vm._v("用户名:"+_vm._s(value.userName))])])]),_vm._v(" "),_c('div',{staticClass:"user_operation"},[_c('el-button',{attrs:{"size":"mini"}},[_vm._v("访问")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){return _vm.handleCancel(value,key)}}},[_vm._v("取消关注")])],1)],1)}),0):_c('div',{staticClass:"mycare_null"},[_c('span',[_vm._v("空空如也")])]),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{"current-page":_vm.currentPage1,"page-size":8,"layout":"total, prev, pager, next","total":100},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1),_vm._v(" "),_c('div',{staticClass:"care_my"},[(_vm.CaremyData != '')?_c('div',{staticClass:"care_container"},_vm._l((_vm.CaremyData),function(value,key){return _c('div',{key:key,staticClass:"care_user"},[_c('el-popover',{attrs:{"placement":"right-end","width":"200","trigger":"hover"}},[_c('div',{staticClass:"core_info"},[_c('span',[_vm._v("邮箱:"+_vm._s(value.email))]),_vm._v(" "),_c('span',[_vm._v("性别:"+_vm._s(value.sex))]),_vm._v(" "),_c('span',[_vm._v("生日:"+_vm._s(value.birthday))]),_vm._v(" "),_c('span',[_vm._v("注册时间:"+_vm._s(value.createTime))])]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_c('img',{staticClass:"user_img",attrs:{"src":__webpack_require__("FRVW"),"alt":"请检查网络"}}),_vm._v(" "),_c('span',{staticClass:"user_name"},[_vm._v("用户名:"+_vm._s(value.userName))])])]),_vm._v(" "),_c('div',{staticClass:"user_operation",staticStyle:{"padding-left":"10px"}},[_c('el-button',{attrs:{"size":"mini"}},[_vm._v("访问")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){return _vm.handleSupport(value)}}},[_vm._v("关注ta")])],1)],1)}),0):_c('div',{staticClass:"mycare_null"},[_c('span',[_vm._v("空空如也")])]),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center","margin-top":"20px","position":"bottom:0"},attrs:{"current-page":_vm.currentPage2,"page-size":8,"layout":"total, prev, pager, next","total":100},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage2=$event},"update:current-page":function($event){_vm.currentPage2=$event}}})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Follow = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Follow.vue
function injectStyle (ssrContext) {
  __webpack_require__("uWgb")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61338622"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Follow["a" /* default */],
  Bbs_Follow,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Follow = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FRVW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/cablecar.ca2424a.jpg";

/***/ }),

/***/ "hVmv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_data__ = __webpack_require__("Foau");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      //我关注的页码
      currentPage2: 1,
      //关注我的页码
      currentPage1: 1,
      //标识事件状态
      PageEnum: false,
      //我关注的
      MycareData: [{
        userId: "528de48c-7fa8-467d-8fe4-cd60820b80c6",
        studentId: "1550888880",
        password: null,
        userName: "阿勇",
        realName: null,
        sex: null,
        birthday: null,
        enterSchoolTime: null,
        major: null,
        mobilePhone: null,
        email: null,
        selfImage: null,
        createTime: null,
        status: 1,
        idolSum: 2,
        fansSum: 0
      }, {
        userId: "e257c2f7-30df-4235-a5c4-6d0f7dd5df66",
        studentId: "15503077799003",
        password: null,
        userName: null,
        realName: null,
        sex: null,
        birthday: null,
        enterSchoolTime: null,
        major: null,
        mobilePhone: null,
        email: null,
        selfImage: null,
        createTime: null,
        status: 1,
        idolSum: 1,
        fansSum: 0
      }],
      //关注我的
      CaremyData: [{
        userId: "528de48c-7fa8-467d-8fe4-cd60820b80c6",
        studentId: "1550888880",
        password: null,
        userName: "阿勇",
        realName: null,
        sex: "男",
        birthday: "2000",
        enterSchoolTime: null,
        major: null,
        mobilePhone: null,
        email: "266311",
        selfImage: null,
        createTime: "2021/3/21",
        status: 1,
        idolSum: 2,
        fansSum: 0
      }, {
        userId: "e257c2f7-30df-4235-a5c4-6d0f7dd5df66",
        studentId: "15503077799003",
        password: null,
        userName: null,
        realName: null,
        sex: null,
        birthday: null,
        enterSchoolTime: null,
        major: null,
        mobilePhone: null,
        email: null,
        selfImage: null,
        createTime: null,
        status: 1,
        idolSum: 1,
        fansSum: 0
      }]
    };
  },

  methods: {
    //取消关注
    handleCancel: function handleCancel(value, index) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["b" /* CancelFocus */])({
                  userId: value.userId
                });

              case 2:
                result = _context.sent;

                if (result["data"].code == "200") {
                  _this.$message({
                    message: "已取消",
                    type: 'success',
                    offset: 100
                  });
                  _this.MycareData.splice(index, 1);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //关注关注我的人
    handleSupport: function handleSupport(value) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["k" /* FocusOther */])({
                  userId: value.userId
                });

              case 2:
                result = _context2.sent;


                if (result["data"].code == "200") {
                  _this2.$message({
                    type: "success",
                    message: "关注成功",
                    offset: 100
                  });
                  _this2.MycareData.unshift({
                    userId: value.userId,
                    studentId: value.studentId,
                    userName: value.userName,
                    sex: value.sex,
                    birthday: value.birthday,
                    email: value.email,
                    selfImage: null,
                    createTime: value.createTime,
                    status: 1,
                    idolSum: 2,
                    fansSum: 0
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    handleClick: function handleClick(e) {
      $(".follow_nav li").css("border-bottom", "none");
      $(".follow_nav li").css("color", "#606266");
      e.target.style.borderBottom = "2px solid #409EFF";
      e.target.style.color = "#409EFF";
      if (e.target.innerText == "关注我的") {
        this.PageEnum = false;
        $(".care_my").fadeIn();
        $(".my_care").fadeOut();
      } else {
        this.PageEnum = true;
        $(".my_care").fadeIn();
        $(".care_my").fadeOut();
      }
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log("\u6BCF\u9875 " + val + " \u6761");
    },

    //分页查询
    handleCurrentChange: function handleCurrentChange(val) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = void 0;

                if (_this3.PageEnum) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["w" /* ShowFocusByPage */])({
                  pageNum: val,
                  pageSize: 8
                });

              case 4:
                result = _context3.sent;

                _this3.CaremyData = result["data"].date;
                _context3.next = 12;
                break;

              case 8:
                _context3.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["u" /* ShowFansByPage */])({
                  pageNum: val,
                  pageSize: 8
                });

              case 10:
                result = _context3.sent;

                _this3.MycareData = result["data"].date;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  },
  created: function created() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
      var Focus = function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
          var result;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["v" /* ShowFocus */])();

                case 2:
                  result = _context4.sent;
                  return _context4.abrupt("return", result);

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function Focus() {
          return _ref.apply(this, arguments);
        };
      }();

      var Fans = function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
          var result;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["t" /* ShowFans */])();

                case 2:
                  result = _context5.sent;
                  return _context5.abrupt("return", result);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function Fans() {
          return _ref2.apply(this, arguments);
        };
      }();

      var p1, p2;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              p1 = Focus();
              p2 = Fans();


              __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([p1, p2]).then(function (res) {
                console.log(res);
              });

              // let that = this;
              // function getMyCare() {
              //   return that.$axios.post("/fans/showFans");
              // }
              // function getCareMy() {
              //   return that.$axios.post("/fans/showFocus");
              // }
              // this.$axios.all([getMyCare(), getCareMy()]).then(
              //   this.$axios.spread((acct, perms) => {
              //     // this.MycareData=acct.data.date;
              //     // this.CaremyData=perms.data.date;
              //   })
              // );

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, _this4);
    }))();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "uWgb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=10.06cb429fa072b9006900.js.map