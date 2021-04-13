webpackJsonp([15],{

/***/ "OHYp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_data__ = __webpack_require__("Foau");



/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        //校验学号
        checkStudnetId: function checkStudnetId() {
            if (this.formData.studentId.trim() == "") {
                $(".Register_number .input_error").text("学号不能为空").fadeIn();
                return false;
            } else {
                if (this.formData.studentId.length != 10) {
                    $(".Register_number .input_error").text("学号个数应为10位,请检查").fadeIn();
                    return false;
                } else {
                    $(".Register_number .input_error").fadeOut();
                    return true;
                }
            }
        },

        //校验用户名
        checkUsername: function checkUsername() {
            if (this.formData.username.trim() == "") {
                $(".Register_name .input_error").text("用户名不能为空").fadeIn();
                return false;
            } else if (this.formData.username.trim().length < 3 || this.formData.username.trim().length > 10) {
                $(".Register_name .input_error").text("用户名字数在3~10位之间").fadeIn();
                return false;
            } else if (this.formData.username.trim().length > 3 && this.formData.username.trim().length < 10) {
                var parrern = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/gim;
                var reg = /^[0-9]*$/g;
                if (parrern.test(this.formData.username)) {
                    $(".Register_name .input_error").text("用户名不能含有特殊符号").fadeIn();
                    return false;
                } else if (reg.test(this.formData.username)) {
                    $(".Register_name .input_error").text("用户名不能全部为数字").fadeIn();
                } else {
                    $(".Register_name .input_error").fadeOut();
                    return true;
                }
            }
        },

        //校验密码
        checkPassword: function checkPassword() {
            if (this.formData.password.trim() == "") {
                $(".Register_psd .input_error").text("密码不能为空").fadeIn().css("color", "#F56C6C");
                return false;
            } else {
                var reg = /^(?=.*\d)(?=.*[a-z])[a-z0-9]{6,16}$/g;
                var patternStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_].{6,16}$/g;
                if (reg.test(this.formData.password)) {
                    $(".Register_psd .input_error").text("当前密码强度:弱").fadeIn().css("color", "#67C23A");
                    return true;
                } else if (patternStrong.test(this.formData.password)) {
                    $(".Register_psd .input_error").text("当前密码强度:强").fadeIn().css("color", "#67C23A");
                    return true;
                } else {
                    $(".Register_psd .input_error").text("密码必须由数字、字母组成,且在6~16位").fadeIn().css("color", "#F56C6C");
                    return false;
                }
            }
        },

        //校验确认密码
        checkComfirmPsd: function checkComfirmPsd() {
            if (this.formData.comfirmPassword.trim() == "") {
                $(".Register_comfirmpsd .input_error").text("确认密码不能为空").fadeIn();
                return false;
            } else {
                if (this.formData.comfirmPassword != this.formData.password) {
                    $(".Register_comfirmpsd .input_error").text("两次输入的密码不一致").fadeIn();
                    return false;
                } else {
                    $(".Register_comfirmpsd .input_error").fadeOut();
                    return true;
                }
            }
        },

        //校验真实用户名
        checkRealname: function checkRealname() {
            if (this.formData.realname.trim() == "") {
                $(".Register_realname .input_error").text("真实名字不能为空").fadeIn();
                return false;
            } else {
                if (this.formData.realname.trim().length > 10) {
                    $(".Register_realname .input_error").text("名字过长,特殊情况请联系管理员").fadeIn();
                    return false;
                } else {
                    $(".Register_realname .input_error").fadeOut();
                    return true;
                }
            }
        },

        //校验电话号码
        checkPhone: function checkPhone() {
            if (this.formData.phone.trim() == "") {
                $(".Register_phone .input_error").text("电话号码不能为空").fadeIn();
                return false;
            } else {
                var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
                if (!reg.test(this.formData.phone)) {
                    $(".Register_phone .input_error").text("电话号码格式错误").fadeIn();
                    return false;
                } else {
                    $(".Register_phone .input_error").fadeOut();
                    return true;
                }
            }
        },

        //校验进行学校时间
        checkEnterTime: function checkEnterTime() {
            if (this.formData.enterShoolTime == "") {
                $(".Register_enterSchool .input_error").text("进入学校时间不能为空").fadeIn();
                return false;
            } else {
                $(".Register_enterSchool .input_error").fadeOut();
                return true;
            }
        },

        //校验邮箱
        checkEmail: function checkEmail() {
            if (this.formData.email == "") {
                $(".Register_email .input_error").text("邮箱不能为空").fadeIn();
                return false;
            } else {
                var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
                if (reg.test(this.formData.email)) {
                    $(".Register_email .input_error").fadeOut();
                    return true;
                } else {
                    $(".Register_email .input_error").text("邮箱格式错误").fadeIn();
                    return false;
                }
            }
        },

        // 校验年级
        checkMajor: function checkMajor() {
            if (this.formData.grade.trim() == "") {
                $(".Register_grade .input_error").text("专业年级不能为空").fadeIn();
                return false;
            } else {
                $(".Register_grade .input_error").fadeOut();
                return true;
            }
        },

        //校验生日
        checkBrithday: function checkBrithday() {
            if (this.formData.birthday == "") {
                $(".Register_birthday .input_error").text("出生日期不能为空").fadeIn();
                return false;
            } else {
                $(".Register_birthday .input_error").fadeOut();
                return true;
            }
        },

        //查看密码
        handleText: function handleText() {
            $(".icon").removeClass("icon-zhengyan").addClass("icon-biyan");
            $(".Register_psd input").attr("type", "text");
        },

        //屏蔽密码
        handlePsd: function handlePsd() {
            $(".icon").removeClass("icon-biyan").addClass("icon-zhengyan");
            $(".Register_psd input").attr("type", "password");
        },

        //查看确认密码
        handleComfirmText: function handleComfirmText() {
            $(".icon").removeClass("icon-zhengyan").addClass("icon-biyan");
            $(".Register_comfirmpsd input").attr("type", "text");
        },

        //屏蔽确认密码
        handleComfirmPsd: function handleComfirmPsd() {
            $(".icon").removeClass("icon-biyan").addClass("icon-zhengyan");
            $(".Register_comfirmpsd input").attr("type", "password");
        },

        //点击下一步
        nextStep: function nextStep() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var result;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(_this.step == 1)) {
                                    _context.next = 4;
                                    break;
                                }

                                if (_this.checkStudnetId() && _this.checkUsername() && _this.checkPassword() && _this.checkComfirmPsd()) {
                                    _this.step++;
                                } else {
                                    _this.message("warning", "请检查输入数据");
                                }
                                _context.next = 14;
                                break;

                            case 4:
                                if (!(_this.step == 2)) {
                                    _context.next = 14;
                                    break;
                                }

                                if (!(_this.checkRealname() && _this.checkPhone() && _this.checkMajor() && _this.checkEmail() && _this.checkBrithday())) {
                                    _context.next = 13;
                                    break;
                                }

                                _context.next = 8;
                                return Object(__WEBPACK_IMPORTED_MODULE_2__api_data__["n" /* Register */])({
                                    studentId: _this.formData.studentId,
                                    password: _this.formData.password,
                                    userName: _this.formData.username,
                                    realName: _this.formData.realname,
                                    sex: _this.formData.sex,
                                    birthday: _this.formData.birthday,
                                    major: _this.formData.birthday,
                                    email: _this.formData.email,
                                    mobilePhone: _this.formData.phone,
                                    enterSchoolTime: _this.formData.enterShoolTime
                                });

                            case 8:
                                result = _context.sent;

                                _this.loadingFlay = true;
                                if (_this.result["data"].code == "200") {
                                    _this.step++;
                                    _this.loadingFlay = false;
                                    _this.message("注册", "success");
                                    setTimeout(function () {
                                        _this.$router.push({
                                            name: 'login'
                                        });
                                    });
                                }
                                _context.next = 14;
                                break;

                            case 13:
                                _this.message("warning", "请检查输入数据");

                            case 14:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "h68M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zGR/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/minxin/register.js
var register = __webpack_require__("OHYp");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/public/Register.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Register = ({
    mixins: [register["a" /* default */]],
    data: function data() {
        return {
            loadingFlay: false,
            //记录步骤                
            step: 1,
            //注册信息
            formData: {
                studentId: '',
                username: '',
                password: '',
                comfirmPassword: '',
                realname: '',
                email: '',
                birthday: '',
                grade: '',
                phone: '',
                sex: '男',
                enterShoolTime: ''
            }
        };
    },

    computed: {
        //判断当前步骤
        disabledFlay: function disabledFlay() {
            if (this.step == 1) {
                return true;
            } else if (this.step > 1) {
                return false;
            }
        },

        //判断是否到最后一步
        lastFlay: function lastFlay() {
            if (this.step == 3) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {},
    watch: {
        birthday: function birthday(orderV, newV) {
            console.log(orderV);
            console.log(newV);
        }
    }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-068131b2","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/public/Register.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"}},[_c('main',[_c('section',{staticClass:"Register_container"},[_c('h2',{staticStyle:{"margin-top":"20px"}},[_vm._v("注册页面")]),_vm._v(" "),_c('section',{staticClass:"Register_step"},[_c('el-steps',{staticStyle:{"margin-top":"20px"},attrs:{"active":_vm.step,"finish-status":"success","simple":""}},[_c('el-step',{attrs:{"title":"填写账号信息"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"填写个人基本信息"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"注册成功"}})],1)],1),_vm._v(" "),_c('form',{staticClass:"Register_form"},[(_vm.step==1)?_c('section',{staticClass:"first_step"},[_c('section',{staticClass:"Register_number"},[_c('span',{staticClass:"iconfont icon-shenfenzhenghaoma",staticStyle:{"font-size":"24px","color":"#409EFF"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.studentId),expression:"formData.studentId"}],attrs:{"type":"text","autocomplete":"off","placeholder":"学号/手机号/账号","required":""},domProps:{"value":(_vm.formData.studentId)},on:{"blur":_vm.checkStudnetId,"keyup":_vm.checkStudnetId,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "studentId", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_name"},[_c('span',{staticClass:"iconfont icon-yonghu",staticStyle:{"color":"#F56C6C"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.username),expression:"formData.username"}],attrs:{"type":"text","autocomplete":"off","placeholder":"请输入用户名","required":""},domProps:{"value":(_vm.formData.username)},on:{"blur":_vm.checkUsername,"keyup":_vm.checkUsername,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "username", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_psd"},[_c('span',{staticClass:"iconfont icon-mimasuo",staticStyle:{"color":"#909399"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.password),expression:"formData.password"}],attrs:{"type":"password","autocomplete":"off","placeholder":"密码","required":""},domProps:{"value":(_vm.formData.password)},on:{"keyup":_vm.checkPassword,"blur":_vm.checkPassword,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "password", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"iconfont icon-zhengyan icon",on:{"mousedown":_vm.handleText,"mouseup":_vm.handlePsd}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_comfirmpsd"},[_c('span',{staticClass:"iconfont icon-querenmima",staticStyle:{"color":"#67C23A","font-size":"24px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.comfirmPassword),expression:"formData.comfirmPassword"}],attrs:{"type":"password","autocomplete":"off","placeholder":"确认密码","required":""},domProps:{"value":(_vm.formData.comfirmPassword)},on:{"click":_vm.checkComfirmPsd,"blur":_vm.checkComfirmPsd,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "comfirmPassword", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"iconfont icon-zhengyan icon",on:{"mousedown":_vm.handleComfirmText,"mouseup":_vm.handleComfirmPsd}}),_vm._v(" "),_c('span',{staticClass:"input_error"})])]):(_vm.step==2)?_c('section',{staticClass:"second_step"},[_c('section',{staticClass:"Register_realname"},[_c('span',{staticClass:"iconfont icon-shenfenzhenghaoma",staticStyle:{"color":"#409EFF","font-size":"24px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.realname),expression:"formData.realname"}],attrs:{"type":"text","autocomplete":"off","placeholder":"请输入真实姓名","required":""},domProps:{"value":(_vm.formData.realname)},on:{"blur":_vm.checkRealname,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "realname", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_sex"},[_c('span',{staticClass:"iconfont icon-xingbie",staticStyle:{"color":"#E6A23C","font-size":"20px"}}),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.sex),expression:"formData.sex"}],attrs:{"name":"sex"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "sex", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"男","selected":""}},[_vm._v("男生")]),_vm._v(" "),_c('option',{attrs:{"value":"女"}},[_vm._v("女生")])])]),_vm._v(" "),_c('section',{staticClass:"Register_phone"},[_c('span',{staticClass:"iconfont icon-shouji",staticStyle:{"color":"#67C23A","font-size":"22px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.phone),expression:"formData.phone"}],attrs:{"type":"text","autocomplete":"off","placeholder":"请输入电话号码","required":""},domProps:{"value":(_vm.formData.phone)},on:{"blur":_vm.checkPhone,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "phone", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_enterSchool"},[_c('span',{staticClass:"iconfont icon-canjiagongzuoshijian",staticStyle:{"color":"#67C23A","font-size":"22px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.enterShoolTime),expression:"formData.enterShoolTime"}],attrs:{"type":"date","autocomplete":"off","required":""},domProps:{"value":(_vm.formData.enterShoolTime)},on:{"change":_vm.checkEnterTime,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "enterShoolTime", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_email"},[_c('span',{staticClass:"iconfont icon-icon-mail",staticStyle:{"color":"#F56C6C","font-size":"17px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.email),expression:"formData.email"}],attrs:{"type":"email","autocomplete":"off","placeholder":"请输入电子邮箱","required":""},domProps:{"value":(_vm.formData.email)},on:{"blur":_vm.checkEmail,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "email", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_grade"},[_c('span',{staticClass:"iconfont icon-zhuanye",staticStyle:{"color":"#E6A23C","font-size":"18px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.grade),expression:"formData.grade"}],attrs:{"type":"text","autocomplete":"off","placeholder":"请输入专业年级","required":""},domProps:{"value":(_vm.formData.grade)},on:{"blur":_vm.checkMajor,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "grade", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})]),_vm._v(" "),_c('section',{staticClass:"Register_birthday"},[_c('span',{staticClass:"iconfont icon-shengrix",staticStyle:{"color":"#F56C6C","font-size":"20px"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.birthday),expression:"formData.birthday"}],attrs:{"type":"date","autocomplete":"off","placeholder":"请输入生日","required":""},domProps:{"value":(_vm.formData.birthday)},on:{"change":_vm.checkBrithday,"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "birthday", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input_error"})])]):_c('section',[_c('h1',[_vm._v("注册成功")])])]),_vm._v(" "),_c('section',{staticClass:"Registe_btn"},[_c('el-button',{attrs:{"disabled":_vm.disabledFlay},on:{"click":function($event){_vm.step--}}},[_vm._v("上一步")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","disabled":_vm.lastFlay,"loading":_vm.loadingFlay},on:{"click":_vm.nextStep}},[_vm._v("下一步")])],1),_vm._v(" "),_c('section',{staticClass:"login_btn"},[_c('span',[_vm._v("已有账号? "),_c('router-link',{attrs:{"to":"/login"}},[_vm._v("去登陆")])],1)])]),_vm._v(" "),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"Register_footer"},[_c('span',[_vm._v("权归所有:国之重才团队©")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var public_Register = (esExports);
// CONCATENATED MODULE: ./src/components/public/Register.vue
function injectStyle (ssrContext) {
  __webpack_require__("h68M")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-068131b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Register,
  public_Register,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_public_Register = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=15.5fdc07a9d0e3d9fe68f8.js.map