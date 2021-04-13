webpackJsonp([22],{

/***/ "1/XB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/minxin/upload.js
var upload = __webpack_require__("lQEl");

// EXTERNAL MODULE: ./src/api/data.js + 2 modules
var data = __webpack_require__("Foau");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Article.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Article = ({
  name: "FuncFormsEdit",
  mixins: [upload["a" /* default */]],
  components: {
    quillEditor: function quillEditor() {
      return __webpack_require__.e/* import() */(37/* duplicate */).then(__webpack_require__.bind(null, "JI8q"));
    }
  },
  data: function data() {
    return {
      //富文本纯文字
      text: "",
      //文章字数限制
      num: 400,
      dialogImageUrl: "",
      dialogVisible: false,
      //存储表单数据
      formdata: {
        title: "",
        subtitle: "",
        content: "",
        type: []
      },
      //上传地址
      url: '/article/uploadArticleImage',
      //文章封面
      //控制副标题提示信息显示
      warnSTitleFlag: false,
      //控制主标题提示信息显示
      warnTitleFlag: false,
      //控制类型提示信息显示
      NatureFlag: false,
      //主标题提示信息
      titleWarn: {
        msg: "",
        color: "red",
        result: 200,
        icon: ""
      },
      //副标题提示信息
      subtitleWarn: {
        msg: "",
        color: "",
        result: 200,
        icon: ""
      },
      //文章性质提示消息
      natureWarn: {
        msg: "",
        color: "",
        icon: ""
      },
      //主标题
      mainTitle: "",
      //副标题
      subTitle: "",
      //文章性质
      nature: [],
      percentage: 20,
      preview: false,
      Promptinput: false,
      //文章内容
      content: null
    };
  },

  watch: {
    content: function content(newV, orderV) {
      console.log(newV);
    },
    $route: function $route(to, from) {
      // console.log(to);
      // console.log("1");
    }
  },
  methods: {
    //封面图片上传
    input: function input(content) {
      this.formdata.content = content;
    },

    //判断图片类型
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
    },

    //获取文章纯文本
    handText: function handText(text) {
      this.text = text;
    },

    //校验主标题
    TitleCheck: function TitleCheck() {
      if (this.formdata.title.trim().length >= 5 && this.formdata.title.length < 20) {
        this.$store.commit("nocanQuit");
        this.titleWarn.msg = "正确";
        this.titleWarn.color = "#67C23A";
        this.titleWarn.icon = "el-icon-success";
        return true;
      } else if (this.formdata.title.trim() == "") {
        this.$store.commit("canQuit");
        this.warnTitleFlag = true;
        this.titleWarn.color = "#F56C6C";
        this.titleWarn.msg = "标题不能为空";
        this.titleWarn.icon = "el-icon-error";
        return false;
      } else {
        this.$store.commit("nocanQuit");
        this.titleWarn.msg = "标题长度在5~20之间!";
        this.warnTitleFlag = true;
        this.titleWarn.color = "#F56C6C";
        this.titleWarn.icon = "el-icon-error";
        return false;
      }
    },

    //校验副标题
    // subTitleCheck() {
    //   if (this.formdata.subtitle.trim().length < 20 && this.formdata.subtitle.trim().length > 5) {
    //     this.$store.commit("nocanQuit");
    //     this.subtitleWarn.msg = "正确";
    //     this.subtitleWarn.color = "#67C23A";
    //     this.subtitleWarn.icon = "el-icon-success";
    //     return true;
    //   } else if (this.formdata.subtitle.trim() == "") {
    //     this.$store.commit("canQuit");
    //     this.subtitleWarn.msg = "副标题不能为空!";
    //     this.warnSTitleFlag = true;
    //     this.subtitleWarn.color = "#F56C6C";
    //     this.subtitleWarn.icon = "el-icon-error";
    //     return false;
    //   } else {
    //     this.$store.commit("nocanQuit");
    //     this.subtitleWarn.msg = "副标题长度在5~20之间!";
    //     this.warnSTitleFlag = true;
    //     this.subtitleWarn.color = "#F56C6C";
    //     this.subtitleWarn.icon = "el-icon-error";
    //     return false;
    //   }
    // },
    //校验类型选择
    NatureCheck: function NatureCheck() {
      if (this.formdata.type.length == 0) {
        this.NatureFlag = true;
        this.natureWarn.msg = "至少选择一个类型";
        this.natureWarn.icon = "el-icon-error";
        this.natureWarn.color = "#F56C6C";
        return false;
      } else if (this.formdata.type.length >= 5) {
        this.NatureFlag = true;
        this.natureWarn.msg = "至多选择四个类型";
        this.natureWarn.icon = "el-icon-error";
        this.natureWarn.color = "#F56C6C";
        return false;
      } else {
        this.natureWarn.msg = "正确";
        this.natureWarn.icon = "el-icon-success";
        this.natureWarn.color = "#67C23A";
        return true;
      }
    },

    //发布文章
    publishing: function publishing() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.TitleCheck() && _this.formdata.content != null && _this.NatureCheck()) {
                  _context.next = 6;
                  break;
                }

                console.log(_this.formdata);
                _this.$message({
                  type: "error",
                  message: "请检查输入的内容",
                  offset: 100
                });
                if (_this.content != "") {
                  _this.$store.commit("nocanQuit");
                }
                _context.next = 10;
                break;

              case 6:
                _context.next = 8;
                return Object(data["B" /* UploadArticle */])({
                  title: _this.formdata.title,
                  content: _this.formdata.content,
                  article_image: _this.image,
                  label1: _this.formdata.type[0],
                  label2: _this.formdata.type[1],
                  label3: _this.formdata.type[2],
                  label4: _this.formdata.type[3] });

              case 8:
                result = _context.sent;

                if (result["data"].code == "200") {
                  _this.$message({
                    message: "发表成功",
                    type: "success",
                    offset: 100
                  });
                  _this.$store.commit("canQuit");
                  _this.$router.push({
                    name: "articledetails", params: { id: result["data"].date }
                  });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.Promptinput = true;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bc01542e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Article.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"article_main"},[_c('div',{staticClass:"article_title",staticStyle:{"padding-left":"20px"}},[_c('label',{attrs:{"for":"articleTitle"}},[_c('span',{staticStyle:{"color":"#606266"}},[_c('font',{attrs:{"color":"red"}},[_vm._v("*")]),_vm._v("文章标题:")],1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formdata.title),expression:"formdata.title"}],staticClass:"title_input",attrs:{"type":"search","name":"articleTitle","autocomplete":"off","placeholder":"请输入标题","required":"required"},domProps:{"value":(_vm.formdata.title)},on:{"keyup":function($event){return _vm.TitleCheck()},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formdata, "title", $event.target.value)}}})]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeInDown"}},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.warnTitleFlag),expression:"warnTitleFlag"}],staticClass:"title_warn",style:({ color: _vm.titleWarn.color })},[_c('span',{class:_vm.titleWarn.icon}),_vm._v(_vm._s(_vm.titleWarn.msg)+"\n        ")])])],1),_vm._v(" "),_c('div',{staticClass:"article_coverimg"},[_c('span',{staticStyle:{"color":"#606266"}},[_vm._v("文章封面:")]),_vm._v(" "),_c('el-upload',{staticClass:"avatar-uploader",attrs:{"limit":2,"list-type":"picture-card","multiple":"","action":"/article/uploadArticleImage","show-file-list":true,"before-upload":_vm.beforeAvatarUpload,"http-request":_vm.CoverImgUpload}},[(_vm.imageUrl)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.imageUrl}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"margin":"-20px"}})])],1),_vm._v(" "),_c('div',{staticClass:"article_nature"},[_c('span',{staticStyle:{"color":"#606266"}},[_c('font',{attrs:{"color":"red"}},[_vm._v("*")]),_vm._v("文章类型:")],1),_vm._v(" "),_c('div',{staticClass:"check_container"},[_c('el-checkbox-group',{attrs:{"max":4,"min":1},model:{value:(_vm.formdata.type),callback:function ($$v) {_vm.$set(_vm.formdata, "type", $$v)},expression:"formdata.type"}},[_c('el-checkbox',{attrs:{"label":"学习"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"感情"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"考试"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"生活"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"自然"}})],1)],1),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.NatureFlag),expression:"NatureFlag"}],staticClass:"nature_wran",style:({color:_vm.natureWarn.color})},[_c('span',{class:_vm.natureWarn.icon}),_vm._v(_vm._s(_vm.natureWarn.msg))])]),_vm._v(" "),_c('div',{staticClass:"article_content"},[_c('span',{staticStyle:{"color":"#606266","margin-left":"-25px"}},[_vm._v("文章内容:")]),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"70px","margin-top":"-24px"}},[_c('quillEditor',{staticStyle:{"margin":"-20px"},attrs:{"num":_vm.num,"text":_vm.text,"url":_vm.url,"height":'450px'},on:{"update:text":function($event){_vm.text=$event},"editor":_vm.input}})],1)])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"温馨提示","visible":_vm.Promptinput,"width":"30%"},on:{"update:visible":function($event){_vm.Promptinput=$event}}},[_c('span',[_vm._v("\n      亲爱的创作者,创作不能出现故意辱骂、网暴、贬低他人或者他人家属，不能出现破坏社会的过激和敏感言论,本平台不承担任何法律责任，\n      一切后果由本人承担,净化网络环境，人人有责\n    ")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.Promptinput = false}}},[_vm._v("我已知晓")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"预览","visible":_vm.preview,"width":"50%","center":""},on:{"update:visible":function($event){_vm.preview=$event}}},[_c('div',{staticClass:"preview ql-editor"},[_c('h1',{attrs:{"align":"center"}},[_vm._v("标题:"+_vm._s(_vm.formdata.title))]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.formdata.content)}})])]),_vm._v(" "),_c('div',{staticClass:"fun_btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.preview = true}}},[_vm._v("预览")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success"},on:{"click":_vm.publishing}},[_vm._v("发表")])],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article_header"},[_c('span',[_vm._v("文章")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Article = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Article.vue
function injectStyle (ssrContext) {
  __webpack_require__("JQio")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bc01542e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Article,
  Bbs_Article,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Article = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JQio":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=22.e10285fd313e68a039dd.js.map