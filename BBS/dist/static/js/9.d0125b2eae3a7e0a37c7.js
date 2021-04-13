webpackJsonp([9],{

/***/ "HKBd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Questiondetail.vue
var Questiondetail = __webpack_require__("r6H7");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-72f5d11a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Questiondetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"questdetail_contain"},[_c('div',{staticClass:"questdetail_content"},[_c('h2',{staticClass:"question_title",attrs:{"align":"left"}},[_vm._v(_vm._s(_vm.questionData.title))]),_vm._v(" "),_c('div',{staticClass:"question_info"},[_c('span',[_vm._v("回答数:")]),_vm._v(" "),_c('span',{},[_vm._v(_vm._s(_vm.questionData.answer))]),_vm._v(" "),_c('span',[_vm._v("浏览数:")]),_vm._v(" "),_c('span',{},[_vm._v(_vm._s(_vm.questionData.browse))])]),_vm._v(" "),_c('span',{staticClass:"question_content",domProps:{"innerHTML":_vm._s(_vm.questionData.content)}}),_vm._v(" "),_c('div',{staticClass:"question_operation"},[_c('ul',[_c('li',[_c('el-button',{attrs:{"type":"primary","plain":"","icon":"el-icon-edit"},on:{"click":_vm.editorInput}},[_vm._v("写答案")])],1),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.handSupport(_vm.value)}}},[_c('img',{staticClass:"question_support",class:{ active: _vm.questionData.hasCollection },attrs:{"src":__webpack_require__("vy/8")}}),_vm._v("好问题\n        ")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.handCollection(_vm.questionData.questionId)}}},[_vm._v("收藏")]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.dialogVisible = true}}},[_vm._v("举报")]),_vm._v(" "),_c('li',[_c('el-checkbox',{model:{value:(_vm.anonymous),callback:function ($$v) {_vm.anonymous=$$v},expression:"anonymous"}},[_vm._v("使用匿名身份回答")])],1),_vm._v(" "),_c('li',[_c('span',{staticClass:"question_user"},[_vm._v("提问人:"),_c('router-link',{attrs:{"to":"#"}},[_vm._v("阿22222勇")])],1)])])])]),_vm._v(" "),(_vm.editorState)?_c('div',{staticClass:"answer_contain"},[_c('quillEditor',{attrs:{"url":'answer/uploadAnswerImage',"height":'300px',"num":_vm.num,"text":_vm.text},on:{"editor":_vm.input,"update:text":function($event){_vm.text=$event}}}),_vm._v(" "),_c('div',{staticClass:"reply_contain"},[_vm._m(0)],1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"answerdata_contain"},[_c('div',{staticClass:"contain_content"},[_c('div',{staticClass:"contain_title"},[_c('span',[_vm._v(_vm._s(_vm.answerFlay(_vm.answerNum)))])]),_vm._v(" "),_vm._l((_vm.answerData),function(value,key){return _c('div',{key:key,staticClass:"reply_data"},[_c('div',{staticClass:"reply_user"},[_c('img',{attrs:{"src":__webpack_require__("HdUg"),"alt":"请检查网络"}}),_vm._v(" "),_c('span',[_vm._v("阿勇")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(value.createTime))])]),_vm._v(" "),_c('div',{staticClass:"reply_content"},[_c('span',{domProps:{"innerHTML":_vm._s(value.content)}})]),_vm._v(" "),_c('div',{staticClass:"reply_operation"},[_c('ul',[_c('li',{class:{ activer: value.hasLike },on:{"click":function($event){return _vm.handAnswerSupport(value, key)}}},[_vm._v("\n              赞同\n            ")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.handAnswerStamp(value, key)}}},[_vm._v("踩")]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.dialogVisible = true}}},[_vm._v("举报")]),_vm._v(" "),_c('li',[_c('el-popconfirm',{attrs:{"title":"要删除此条回复嘛","offset":"100"},on:{"confirm":function($event){return _vm.deleteReply(value, key)}}},[_c('span',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("删除")])])],1)])])])}),_vm._v(" "),_c('div',{staticClass:"block",attrs:{"align":"center"}},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage1,"page-size":6,"layout":"total, prev, pager, next","total":_vm.answerNum},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1)],2)]),_vm._v(" "),_c('el-dialog',{attrs:{"center":"","visible":_vm.dialogVisible,"width":"20%"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('h2',[_vm._v("举报")]),_vm._v(" "),_c('p',{staticStyle:{"color":"#c0c4cc"}},[_vm._v("(请选择理由)")])]),_vm._v(" "),_c('div',{staticStyle:{"width":"106%"}},[_c('el-checkbox-group',{attrs:{"max":3},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_c('el-checkbox',{attrs:{"label":"垃圾广告"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"不实信息"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"有害信息"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"涉嫌侵权"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"诱导赞同、关注等行为"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"辱骂、人身攻击等不友善行为"}})],1),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reportContent),expression:"reportContent"}],staticClass:"report_input",attrs:{"cols":"30","rows":"10","placeholder":"请输入详细理由(选填)"},domProps:{"value":(_vm.reportContent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.reportContent=$event.target.value}}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("举报")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-button',{staticClass:"reply_btn",attrs:{"type":"primary"},on:{"click":_vm.replySubmit}},[_vm._v("提交答案")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Questiondetail = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Questiondetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("qCwy")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72f5d11a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Questiondetail["a" /* default */],
  Bbs_Questiondetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Questiondetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qCwy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "r6H7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_data__ = __webpack_require__("Foau");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventBus_js__ = __webpack_require__("O6e2");





var _data$computed$method;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = (_data$computed$method = {
  data: function data() {
    var _ref;

    return _ref = {
      numFlay: true,
      //是否收标识
      CollectionFlay: false,
      //是否点赞标识
      SupportFlay: false,
      //存储答案数据
      answerData: [],
      answerNum: 0,
      //富文本纯文字
      text: "",
      //回答字数限制
      num: 200,
      //存储文章信息
      questionData: {
        title: "",
        content: "",
        answer: 0,
        browse: 0,
        questionId: "",
        hasCollection: false,
        hasFocus: false
      },
      url: "answer/uploadAnswerImage",
      //举报内容
      reportContent: "",
      //页码
      currentPage1: 1,
      //
      dialogVisible: false,
      //举报内容
      checkList: [],
      //富文本
      editorState: false
    }, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "url", ""), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "content", ""), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "anonymous", false), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, "support", false), _ref;
  },
  computed: {},
  methods: {
    answerFlay: function answerFlay(num) {
      if (num == 0) {
        return "暂无回答,马上去回答";
      } else {
        return num + "\u6761\u56DE\u7B54";
      }
    },

    //取消答案点赞事件
    handAnswerStamp: function handAnswerStamp(value, key) {
      $(".reply_operation").eq(key).find("li").css("color", "");
      $(".reply_operation").eq(key).find("li:nth-of-type(2)").css("color", "#F56C6C");
    },

    //点赞答案事件
    handAnswerSupport: function handAnswerSupport(value, key) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result, _result;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(value);
                console.log(key);
                console.log($(".question_operation").eq(key));
                _this.SupportFlay = value.hasLike;

                if (!value.hasLike) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["E" /* getCancelLikeAnswer */])({ answerId: value.answerId });

              case 7:
                result = _context.sent;

                if (result["data"].code == "200") {
                  _this.$message({
                    type: "success",
                    message: "已取消",
                    offset: 100
                  });
                  value.hasLike = false;
                  //  $(".question_operation").eq(key).find("li:nth-of-type(1)").css("color","#616161");
                }
                _context.next = 15;
                break;

              case 11:
                _context.next = 13;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["D" /* getAnswerSupport */])({ answerId: value.answerId });

              case 13:
                _result = _context.sent;

                if (_result["data"].code == "200") {
                  _this.$message({
                    type: "success",
                    message: "点赞成功",
                    offset: 100
                  });
                  value.hasLike = true;
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //收藏事件
    handCollection: function handCollection(questionId) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result, _result2;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.CollectionFlay) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["H" /* getQuestCollectionDelete */])({ questionId: questionId });

              case 3:
                result = _context2.sent;

                if (result["data"].code == "200") {
                  _this2.$message({
                    type: "success",
                    message: "已取消",
                    offset: 100
                  });
                  $(".question_operation li:nth-of-type(3)").css("color", "#909399").text("收藏");
                  _this2.CollectionFlay = false;
                }
                _context2.next = 11;
                break;

              case 7:
                _context2.next = 9;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["G" /* getQuestCollection */])({ questionId: questionId });

              case 9:
                _result2 = _context2.sent;

                if (_result2["data"].code == "200") {
                  _this2.$message({
                    type: "success",
                    message: "收藏成功",
                    offset: 100
                  });
                  $(".question_operation li:nth-of-type(3)").css("color", "#F56C6C").text("取消收藏");
                  _this2.CollectionFlay = true;
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    //点赞事件
    handSupport: function handSupport() {
      if (!this.support) {
        $(".question_operation li:nth-of-type(2)").css("color", "#32a4e0");
        $(".question_support").attr("src", "../../../static/images/campus/detail/article_aftersupport.png");
        this.support = true;
      } else {
        $(".question_operation li:nth-of-type(2)").css("color", "#909399");
        $(".question_support").attr("src", "../../../static/images/campus/detail/article_beforesupport.png");
        this.support = false;
      }
    },

    //获取输入框内容
    input: function input(content) {
      this.content = content;
    },

    //显示输入框
    editorInput: function editorInput() {
      this.editorState = true;
      $(document).scrollTop($(".answer_contain").scrollTop() + 170);
    },

    //提交答案
    replySubmit: function replySubmit() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var result, time;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.content.trim() == "")) {
                  _context3.next = 4;
                  break;
                }

                _this3.$message({
                  message: "请输入内容!",
                  type: "warning",
                  offset: "100"
                });
                _context3.next = 13;
                break;

              case 4:
                if (!(_this3.text.trim().length > _this3.num)) {
                  _context3.next = 8;
                  break;
                }

                _this3.$message({
                  message: "超过字数,请检查输入!",
                  type: "warning",
                  offset: "100"
                });
                _context3.next = 13;
                break;

              case 8:
                _context3.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["A" /* UploadAnswer */])({
                  questionId: _this3.questionData.questionId,
                  content: _this3.content
                });

              case 10:
                result = _context3.sent;

                console.log(result["data"].date);
                if (result["data"].code == "200") {
                  _this3.$message({
                    type: "success",
                    message: "回答成功",
                    offset: 100
                  });

                  time = new Date().getFullYear().toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

                  if (_this3.answerData.length < 6) {
                    _this3.answerData.unshift({
                      answerId: result["data"].date,
                      content: _this3.content,
                      createTime: time,
                      hasLike: false
                    });
                  } else {
                    _this3.answerData.pop();
                    _this3.answerData.unshift({
                      answerId: result["data"].date,
                      content: _this3.content,
                      createTime: time,
                      hasLike: false
                    });
                  }
                  _this3.answerNum++;
                  _this3.content = "";
                  $(".ql-editor").text("");
                }

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    //数据消失并请求数据
    handAnswerList: function handAnswerList() {
      $(".answer_num").slideUp();
    },

    // 切换页码事件
    handleSizeChange: function handleSizeChange(val) {},
    handleCurrentChange: function handleCurrentChange(val) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["z" /* ShowQuestionByPage */])("" + _this4.questionData.articleId, val);

              case 2:
                result = _context4.sent;

                if (result["data"].code == "200") {
                  _this4.answerData = result["data"].date;
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },

    //删除回答
    deleteReply: function deleteReply(value, key) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["e" /* DeleteAnswer */])({ answerId: value.answerId });

              case 2:
                result = _context5.sent;

                if (result["data"].code == "200") {
                  _this5.answerData.splice(key, 1);
                  _this5.$message({
                    type: "success",
                    message: "删除成功",
                    offset: 100
                  });
                  _this5.answerNum--;
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  }
}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_data$computed$method, "computed", {}), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_data$computed$method, "components", {
  quillEditor: function quillEditor() {
    return __webpack_require__.e/* import() */(37/* duplicate */).then(__webpack_require__.bind(null, "JI8q"));
  },
  Eyeloading: function Eyeloading() {
    return __webpack_require__.e/* import() */(38).then(__webpack_require__.bind(null, "usp/"));
  }
}), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_data$computed$method, "watch", {
  content: function content(ordV, newV) {
    // console.log(ordV);
  }
}), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_data$computed$method, "created", function created() {
  var _this6 = this;

  return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
    var data, result, _result3;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(_this6.$route.params.router == "question")) {
              _context6.next = 7;
              break;
            }

            data = JSON.parse(localStorage.getItem("question"));

            _this6.questionData.title = data.questionname;
            _this6.questionData.content = data.desc;
            _this6.questionData.browse++;
            _context6.next = 29;
            break;

          case 7:
            if (!(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_this6.$route.params) === "{}")) {
              _context6.next = 19;
              break;
            }

            _context6.next = 10;
            return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["I" /* getQuestion */])("" + localStorage.getItem("questionId"));

          case 10:
            result = _context6.sent;

            _this6.questionData = result["data"].date[0];
            _this6.answerData = result["data"].date[1];
            _this6.answerNum = result["data"].date[1].length;
            _this6.SupportFlay = result["data"].date[1].hasLike;
            if (result["data"].date[0].hasCollection) {
              $(".question_operation li:nth-of-type(3)").css("color", "#F56C6C").text("取消收藏");
              _this6.CollectionFlay = true;
            }
            if (result["data"].date[0].hasFocus) {
              $(".question_operation li:nth-of-type(1)").css("color", "#409EFF");
              $(".question_support").attr("src", "../../../static/images/campus/detail/article_aftersupport.png");
            }
            _context6.next = 29;
            break;

          case 19:
            _context6.next = 21;
            return Object(__WEBPACK_IMPORTED_MODULE_4__api_data__["I" /* getQuestion */])("" + _this6.$route.params.title);

          case 21:
            _result3 = _context6.sent;

            console.log(_result3);
            _this6.questionData = _result3["data"].date[0];
            _this6.answerData = _result3["data"].date[1];
            _this6.answerNum = _result3["data"].date[1].length;
            _this6.SupportFlay = _result3["data"].date[1].hasLike;
            if (_result3["data"].date[0].hasCollection) {
              $(".question_operation li:nth-of-type(3)").css("color", "#F56C6C").text("取消收藏");
              _this6.CollectionFlay = true;
            }
            if (_result3["data"].date[0].hasFocus) {
              $(".question_operation li:nth-of-type(1)").css("color", "#409EFF");
              $(".question_support").attr("src", "../../../static/images/campus/detail/article_aftersupport.png");
            }

          case 29:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, _this6);
  }))();
}), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_data$computed$method, "mounted", function mounted() {
  var _this7 = this;

  __WEBPACK_IMPORTED_MODULE_5__eventBus_js__["a" /* default */].$on("editor", function (val) {
    _this7.editorState = val;
    $(document).scrollTop($(".answer_contain").scrollTop() + 20);
  });
}), _data$computed$method);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "vy/8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

});
//# sourceMappingURL=9.d0125b2eae3a7e0a37c7.js.map