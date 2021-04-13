webpackJsonp([5,21],{

/***/ "0T20":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/department_propaganda.ce0a3e7.jpg";

/***/ }),

/***/ "28Lj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/SlideHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SlideHeader = ({
  name: 'slideHeader',
  inject: ['reload'],
  data: function data() {
    return {};
  },

  methods: {
    to_hotlist: function to_hotlist() {
      localStorage.setItem("campusmenu", "second");
      this.reload();
      this.$router.push({
        name: "hotlist"
      });
    },
    to_follow: function to_follow() {
      localStorage.setItem("campusmenu", "first");
      this.reload();
      this.$router.push({
        name: "follow"
      });
    },
    to_square: function to_square() {
      localStorage.setItem("campusmenu", "three");
      this.reload();
      this.$router.push({
        name: "square"
      });
    }
  },
  computed: {},

  mounted: function mounted() {},
  created: function created() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-702adba4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/SlideHeader.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slideHeader"},[_c('div',{staticClass:"slideHeader_header"},[_c('ul',[_c('li',[_vm._v("logo")]),_vm._v(" "),_c('li',{class:{actives:this.$route.name==='follow'},on:{"click":_vm.to_follow}},[_vm._v("关注")]),_vm._v(" "),_c('li',{class:{actives:this.$route.name==='hotlist'},on:{"click":_vm.to_hotlist}},[_vm._v("热榜 ")]),_vm._v(" "),_c('li',{class:{actives:this.$route.name==='square'},on:{"click":_vm.to_square}},[_vm._v("广场")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_SlideHeader = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/SlideHeader.vue
function injectStyle (ssrContext) {
  __webpack_require__("eDfH")
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
  SlideHeader,
  Bbs_SlideHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_SlideHeader = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "7Otq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ }),

/***/ "Jppc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KRZu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "P9ay":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cnxd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/HeaderForum.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var searchlist = [{ title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词知", number: 100, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }];
var hotdata = [{ title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词知", number: 100, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词知", number: 100, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }, { title: "我是今日热词知", number: 100, id: 1111111 }, { title: "我是今日热词", number: 2220, id: 1111111 }];
var datalist = [{ type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "user", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "user", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "user", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }];
/* harmony default export */ var HeaderForum = ({
  name: 'headerForum',
  inject: ['reload'],
  data: function data() {
    return {
      //侦听输入框获得焦点事件
      focusflag: '',
      //控制当搜索为空时
      result_null: false,
      //搜索结果数据
      searchlist: "",
      //控制搜索等待
      result_loading: false,
      //搜索显示框
      search_result: false,
      classlist: ["el-icon-message", "el-icon-suitcase-1", "el-icon-user", "active", "msg_centent", "el-icon-bell", "information_details", "details_title", "details_centent", "information_type", "btn_see", "details_btn"],
      //当信息为空时
      msg_null: false,
      //等待信息加载
      loading_show: true,
      //保存信息数据
      msglist: "",
      current: 0,
      msg_title: ["el-icon-message", "el-icon-setting", "el-icon-user"],
      show: false,
      //搜索框输入内容
      result: '',
      detail_show: false,
      detaillist: '',
      listindex: '',
      loading: "",
      P: '',
      //接收搜素热词数据
      hot_search: "",
      //接收热词promise对象
      Hot_P: ''
    };
  },

  computed: {
    identification: function identification() {
      return function (identity) {
        if (identity == "system") {
          return "el-icon-setting";
        } else {
          return "el-icon-user-solid";
        }
      };
    },

    //根据次序给颜色
    judgefront: function judgefront() {
      return function (index) {
        if (index <= 2) {
          return {
            "background-color": "#f85d00"
          };
        } else {
          return {
            "background-color": "#d5d5d5"
          };
        }
      };
    },

    //根据热度给背景色
    judgingwordBgc: function judgingwordBgc() {
      return function (value) {
        if (value.number > 1000) {
          return {
            "background": "#ff9406"
          };
        } else if (value.number < 1000 && value.number >= 500) {
          return {
            "background": "#ff3852"
          };
        } else if (value.number > 2000) {
          return {
            "background": "#f86400"
          };
        } else {
          return {
            "background": "#00b7ee"
          };
        }
      };
    },

    //根据热度给状态词
    judgingWord: function judgingWord() {
      return function (value) {
        if (value.number >= 1000) {
          return "热";
        } else if (value.number < 1000 && value.number >= 500) {
          return "新";
        } else if (value.number > 2000) {
          return "爆";
        } else {
          return "平";
        }
      };
    }
  },
  methods: {
    To_hotlist: function To_hotlist() {
      localStorage.setItem("campusmenu", "second");
      this.$router.push({
        path: "/campus/hotlist"
      });
      this.reload();
    },


    //搜索结果点击事件
    searchData: function searchData(value) {
      this.result = value.title;
      localStorage.setItem("title", value.title);
      this.search_result = false;
      this.$router.push({
        name: 'articledetails',
        params: { title: value.id }
      });
      //重新加载组件
      this.reload();
    },

    //点击热词跳转到详情页
    jumptodetails: function jumptodetails(value) {
      this.result = value.title;
      localStorage.setItem("title", value.title);
      this.search_result = false;
      this.search_result = false;
      this.$router.push({
        name: 'articledetails',
        params: { title: value.id }
      });
      this.reload();
    },

    //输入框查询
    seeking: function seeking() {
      var _this = this;

      if (this.result != "") {
        // this.$axios({
        //   url:"",
        //   method:"get",
        //   data:{
        //     result:this.result
        //   }
        // }).then(res=>{
        //   console.log(res);
        // }).catch(err=>{
        //   console.log(err);
        // })

        this.searchlist = "";
        this.focusflag = false;
        this.result_loading = true;
        setTimeout(function () {
          _this.result_loading = false;
          _this.searchlist = searchlist;
        }, 2000);
        this.search_result = true;
      } else {
        this.focusflag = true;
      }
    },

    //删除信息
    deletemsg: function deletemsg() {
      this.loading = true;
      this.deletesuccess();
      console.log(this.detaillist);
      this.msglist.splice(this.listindex, 1);
      if (this.msglist.length == 0) {
        this.msg_null = true;
      }
      // this.$message.error('错了哦，这是一条错误消息');
    },

    //
    reader: function reader() {
      this.detail_show = false;
    },

    //获取信息
    getshow: function getshow() {
      var _this2 = this;

      this.P.then(function (res) {
        _this2.loading_show = false;
        console.log(res);
        if (res == "") {
          _this2.msg_null = true;
        } else {
          _this2.msglist = res;
        }
      });
    },

    //信息详情
    detailshowing: function detailshowing(index) {
      this.detail_show = true;
      this.detaillist = this.msglist[index];
      this.listindex = index;
      console.log(this.detaillist);
    },

    //
    deletesuccess: function deletesuccess() {
      this.$message({
        message: '删除成功',
        type: 'success'
      });
      this.detail_show = false;
      this.loading = false;
    },
    doActive: function doActive(index) {
      var divs = document.querySelectorAll("[class^='centent_']");
      console.log(divs);
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }
      divs[index].style.display = "block";
      this.current = index;
    },

    //输入框焦点事件
    hotsearchfocus: function hotsearchfocus() {
      var _this3 = this;

      if (this.result == "") {
        this.Hot_P.then(function (res) {
          _this3.hot_search = res;
        });
        this.search_result = true;
        this.focusflag = true;
      } else {
        this.seeking();
      }
    },
    hotsearchblur: function hotsearchblur() {
      this.search_result = false;
    }
  },
  watch: {
    // result:(newV,orderV)=>{
    //   if(newV!=""){
    //    this.search_result=true;
    //   }
    //   console.log(newV);
    // }
  },
  mounted: function mounted() {
    var search_div = document.querySelector(".nav_result");
    var search_input = document.getElementsByName("navsearch");
    var msg_icon = document.querySelector(".el-icon-chat-dot-round");
    var msg_div = document.querySelector(".person_msg");
    var msg_centent = document.querySelector(".msg_cen");
    console.log(msg_centent);
    search_input[0].addEventListener('click', function (event) {
      event = event || window.event;
      search_div.style.display = "block";
      msg_div.style.display = "none";
      event.stopPropagation();
    });
    document.addEventListener('click', function (event) {
      event = event || window.event;
      msg_div.style.display = "none";
      search_div.style.display = "none";
      event.stopPropagation();
    });
    search_div.addEventListener('click', function (event) {
      event = event || window.event;
      search_div.style.display = "block";
      event.stopPropagation();
    });
    msg_icon.addEventListener("click", function (event) {
      event = event || window.event;
      msg_div.style.display = "block";
      search_div.style.display = "none";
      event.stopPropagation();
    });
    msg_div.addEventListener("click", function (event) {
      event = event || window.event;
      msg_div.style.display = "block";
      event.stopPropagation();
    });
    msg_centent.addEventListener("click", function (event) {
      event = event || window.event;
      msg_div.style.display = "block";
      event.stopPropagation();
    });
  },
  created: function created() {
    this.$nextTick(function () {
      localStorage.setItem("campusmenu", 'second');
    });

    this.P = new promise_default.a(function (resolve, reject) {
      setTimeout(function () {
        resolve(datalist);
      }, 2000);
    });
    this.Hot_P = new promise_default.a(function (resolve, reject) {
      setTimeout(function () {
        resolve(hotdata);
      }, 2000);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c0580bce","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/HeaderForum.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"campus_header"},[_c('div',{staticClass:"campus_nav"},[_c('div',{staticClass:"nav_field"},[_c('ul',[_c('li',[_c('router-link',{attrs:{"to":"/index"}},[_vm._v("\n              logo+名字\n            ")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/hotlist"}},[_vm._v("首页")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/follow"}},[_vm._v("关注\n              \n         ")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/squre"}},[_vm._v("\n            广场\n          ")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/"}},[_vm._v("\n            下载app\n             ")]),_vm._v(" "),_vm._m(0)],1)])]),_vm._v(" "),_c('div',{staticClass:"nav_search"},[_c('el-input',{attrs:{"placeholder":"请输入内容","prefix-icon":"el-icon-search","clearable":"","name":"navsearch"},on:{"input":_vm.seeking,"focus":_vm.hotsearchfocus},model:{value:(_vm.result),callback:function ($$v) {_vm.result=$$v},expression:"result"}}),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.search_result),expression:"search_result"}],staticClass:"nav_result"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.result_loading),expression:"result_loading"}],staticClass:"el-icon-loading"}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.result_null),expression:"result_null"}],staticClass:"result_null"},[_vm._v("无匹配结果")]),_vm._v(" "),_c('div',{staticClass:"result_content"},[_c('div',{staticClass:"result_list"},[_c('ul',[_vm._l((_vm.hot_search),function(value,index){return _c('li',{key:index},[(_vm.focusflag==true)?_c('div',[_c('div',{staticClass:"hotsearch_list"},[_c('span',{staticClass:"hotseach_number",style:(_vm.judgefront(index))},[_vm._v(_vm._s(index+1))]),_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.jumptodetails(value)}}},[_vm._v(_vm._s(value.title))]),_vm._v(" "),_c('span',{staticClass:"hotseach_status",style:(_vm.judgingwordBgc(value))},[_vm._v(_vm._s(_vm.judgingWord(value)))])]),_vm._v(" "),(index==8)?_c('div',{staticClass:"hotsearch_tocomplete hotsearch_list"},[_c('router-link',{attrs:{"to":"/campus/hoslist"}},[_vm._v("查看所有榜单\n                                "),_c('span',{staticClass:"el-icon-d-arrow-right",staticStyle:{"color":"#000000"}})])],1):_vm._e()]):_vm._e()])}),_vm._v(" "),_vm._l((_vm.searchlist),function(value,index){return _c('li',{key:index + '1',staticClass:"result_data",on:{"click":function($event){return _vm.searchData(value)}}},[(_vm.focusflag!=true)?_c('div',[_c('span',[_vm._v(_vm._s(index+1))]),_vm._v("\n                        "+_vm._s(value.title)+"\n                        ")]):_vm._e()])})],2)])])])])],1),_vm._v(" "),_c('div',{staticClass:"nav_person"},[_c('ul',{staticClass:"person_fun"},[_c('li',[_c('el-tooltip',{attrs:{"content":"暂无消息","placement":"bottom","effect":"light"}},[_c('i',{staticClass:"el-icon-chat-dot-round",on:{"click":function($event){return _vm.getshow()}}})]),_vm._v(" "),_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"person_msg"},[_c('div',[_c('ul',{staticClass:"msg_header"},_vm._l((_vm.msg_title),function(title,index){return _c('li',{key:index,class:{active:_vm.current==index},on:{"click":function($event){return _vm.doActive(index)}}},[_c('i',{class:title})])}),0)]),_vm._v(" "),_c('div',{staticClass:"msg_centent"},[_c('div',{staticClass:"centent_natice"},_vm._l((_vm.msglist),function(list,index){return _c('div',{key:index,staticClass:"natice_information"},[_c('div',{staticClass:"information_type"},[_c('i',{class:_vm.identification(list.type)})]),_vm._v(" "),_c('div',{staticClass:"information_details"},[_c('span',[_vm._v("来自"),_c('ins',{staticStyle:{"pointer-events":"none"}},[_vm._v(_vm._s(list.title))]),_vm._v("的消息")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v(_vm._s(list.centent))])]),_vm._v(" "),_c('div',{staticClass:"details_btn"},[_c('a',{staticClass:"btn_see",attrs:{"type":"text"},on:{"click":function($event){return _vm.detailshowing(index)}}},[_vm._v("详情")])])])}),0),_vm._v(" "),_c('div',{staticClass:"centent_letter"}),_vm._v(" "),_c('div',{staticClass:"centent_follow"},[_vm._v("\n                      2\n                    ")]),_vm._v(" "),_c('div',{staticClass:"msg_loading"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading_show),expression:"loading_show"}],staticClass:"coffee_cup"})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.msg_null),expression:"msg_null"}],staticClass:"msg_null"},[_c('p',[_vm._v("暂无信息")])])])])])],1),_vm._v(" "),_c('li',[_c('el-popover',{attrs:{"placement":"bottom","width":"50","trigger":"click"}},[_c('div',{staticClass:"person_setting"},[_c('ul',[_c('li',[_vm._v("我的主页")]),_vm._v(" "),_c('li',[_vm._v("退出")])])]),_vm._v(" "),_c('img',{staticClass:"person_photo",attrs:{"slot":"reference","src":__webpack_require__("HdUg"),"alt":"请检查网络"},slot:"reference"})])],1)])]),_vm._v(" "),_c('el-dialog',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"width":"100%"},attrs:{"title":"信息","visible":_vm.detail_show,"width":"40%","center":"","data":_vm.detaillist,"modal-append-to-body":false,"custom-class":"msg_cen"},on:{"update:visible":function($event){_vm.detail_show=$event}}},[_c('div',{staticClass:"details_centent"},[_c('div',{staticClass:"centent_source"},[_c('h3',[_vm._v("来源:"+_vm._s(_vm.detaillist.title))])]),_vm._v(" "),_c('div',{staticClass:"centnet_information"},[_c('p',[_vm._v("内容:"+_vm._s(_vm.detaillist.centent))])]),_vm._v(" "),_c('p',[_vm._v("时间:"+_vm._s(_vm.detaillist.time))])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-popconfirm',{attrs:{"confirm-button-text":"好的","cancel-button-text":"不用了","icon":"el-icon-info","icon-color":"red","title":"确认删除这条信息？"},on:{"confirm":_vm.deletemsg}},[_c('el-button',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  删除\n              ")])],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.reader}},[_vm._v("已读")])],1)])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"extension"},[_c('p',[_vm._v("\n                请大大扫码下载吧\n              ")]),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__("PFgU"),"alt":"请检查网络"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_HeaderForum = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/HeaderForum.vue
function injectStyle (ssrContext) {
  __webpack_require__("ejN1")
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
  HeaderForum,
  Bbs_HeaderForum,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_HeaderForum = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "eDfH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ejN1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jym2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__QuestHeader_vue__ = __webpack_require__("khQB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HeaderForum_vue__ = __webpack_require__("cnxd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SlideHeader_vue__ = __webpack_require__("28Lj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DetailHeader_vue__ = __webpack_require__("lx+p");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var datalist = [{ type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "system", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }, { type: "user", title: "系统通知", centent: "恭喜你", time: "2020-12-11 10:36:12" }];
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'campus',
  provide: function provide() {
    return {
      reload: this.reload
    };
  },
  data: function data() {
    return {
      //控制组件是否重新加载
      isRouterShow: true,
      //检查是否在详情页
      router: localStorage.getItem("articledetails"),
      //控制动态组件
      assembly: "headerForum",

      listindex: '',
      loading: "",
      //
      detail_show: false,
      // 消息详情
      detaillist: '',
      //存储信息
      msglist: "",
      //控制没有信息时的情况
      msg_null: false,
      //控制loding
      loading_show: true,
      //功能类名
      msg_title: ["el-icon-message", "el-icon-setting", "el-icon-user"],
      //识别区域类名
      classlist: ["el-icon-message", "el-icon-suitcase-1", "el-icon-user", "active", "msg_centent", "el-icon-bell", "information_details", "details_title", "details_centent", "information_type", "btn_see", "details_btn"],
      //存储index
      current: 0,
      routerlist: ['hoslist', 'follow'],
      centerDialogVisible: false,
      activeName: 'second',
      //功能
      server: [{ title: "提问", img: "../../../static/images/question.png", router: 'questions' }, { title: "文章", img: "../../../static/images/campus_article.png", router: 'article' }, { title: "回答", img: "../../../static/images/answer.png", router: 'answer' }],
      data: [{ title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }, { title: "333342323", des: "哈哈哈111111111111111111111111111111", imgsrc: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", num: 1111 }],
      result: '',
      show: false,
      dialogVisible: false,
      //存储promise对象
      P: ''
    };
  },

  methods: {
    reload: function reload() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isRouterShow = false;
                _context.next = 3;
                return _this.$nextTick();

              case 3:
                _this.isRouterShow = true;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    handleClick: function handleClick(tab, event) {
      if (tab.label == "关注") {
        this.$router.push({
          name: "follow"
        });
      } else if (tab.label == "热榜") {
        this.$router.push({
          name: 'hoslist'
        }).catch(function (err) {
          alert("已在当前页");
        });
      }
    },
    handleClose: function handleClose(done) {
      this.$confirm('确认关闭？').then(function (_) {
        done();
      }).catch(function (_) {});
    },

    //tabs切换事件
    doActive: function doActive(index) {
      var divs = document.querySelectorAll("[class^='centent_']");
      console.log(divs);
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }
      divs[index].style.display = "block";
      this.current = index;
    },
    getshow: function getshow() {
      var _this2 = this;

      this.show = !this.show;
      this.P.then(function (res) {
        _this2.loading_show = false;
        console.log(res);
        if (res == "") {
          _this2.msg_null = true;
        } else {
          _this2.msglist = res;
        }
      });
    },

    //
    detailshowing: function detailshowing(index) {
      this.detail_show = true;
      this.detaillist = this.msglist[index];
      this.listindex = index;
      console.log(this.detaillist);
    },

    //删除信息动作
    deletemsg: function deletemsg() {
      this.loading = true;
      this.deletesuccess();
      console.log(this.detaillist);
      this.msglist.splice(this.listindex, 1);
      if (this.msglist.length == 0) {
        this.msg_null = true;
      }
      // this.$message.error('错了哦，这是一条错误消息');
    },

    //删除成功
    deletesuccess: function deletesuccess() {
      this.$message({
        message: '删除成功',
        type: 'success'
      });
      this.detail_show = false;
      this.loading = false;
    },
    reader: function reader() {
      this.show = true;
      this.detail_show = false;
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      //侧边保持不动事件
      $(document).on("scroll", function () {
        if ($(document).scrollTop() > 300) {
          $(".information").css({ top: $(document).scrollTop() + 30, right: "60px" });
          // console.log(1111);
        } else {
          $(".information").css({ "position": "absolute", top: "220px" });
          // console.log(11111);
        }
        // console.log($(".information").offset().top);
      });
    });
    //头部切换事件
    window.addEventListener("scroll", function (e) {
      if (localStorage.getItem("router") == "") {
        _this3.assembly = "headerForum";
      } else if (localStorage.getItem("router") == "campus") {
        if (window.pageYOffset > 100) {
          _this3.assembly = "slideHeader";
        } else {
          _this3.assembly = "headerForum";
        }
      } else if (localStorage.getItem("router") == 'questdetail') {
        if (window.pageYOffset > 100) {
          _this3.assembly = "questHeader";
        } else {
          _this3.assembly = "headerForum";
        }
      } else {
        if (window.pageYOffset > 100) {
          _this3.assembly = "detailHeaader";
        } else {
          _this3.assembly = "headerForum";
        }
      }
    });
  },
  created: function created() {
    this.P = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      setTimeout(function () {
        resolve(datalist);
      }, 2000);
    });
  },

  computed: {
    identification: function identification() {
      return function (identity) {
        if (identity == "system") {
          return "el-icon-setting";
        } else {
          return "el-icon-user-solid";
        }
      };
    }
  },
  watch: {
    msglist: function msglist(newV, orderV) {
      if (newV.length == 0) {}
      console.log(newV.length);
    }
  },
  components: {
    headerForum: __WEBPACK_IMPORTED_MODULE_4__HeaderForum_vue__["default"],
    slideHeader: __WEBPACK_IMPORTED_MODULE_5__SlideHeader_vue__["a" /* default */],
    detailHeaader: __WEBPACK_IMPORTED_MODULE_6__DetailHeader_vue__["a" /* default */],
    questHeader: __WEBPACK_IMPORTED_MODULE_3__QuestHeader_vue__["a" /* default */]
  }

});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "kSUz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Campus.vue
var Campus = __webpack_require__("jym2");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-afa1a046","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Campus.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[_c(_vm.assembly,{tag:"component"})],1),_vm._v(" "),_c('div',{staticClass:"campus"},[_c('div',{staticClass:"subject"},[(_vm.isRouterShow)?_c('router-view'):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"my"},[_vm._l((_vm.server),function(item,index){return _c('div',{key:index,staticClass:"campus_fun"},[_c('router-link',{attrs:{"to":{name:item.router}}},[_c('img',{attrs:{"src":item.img,"alt":"请等待加载"}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.title))])])],1)}),_vm._v(" "),_c('div',{staticClass:"campus_fun_mine"},[_c('div',[_c('router-link',{attrs:{"to":"/campus/My-questision"}},[_c('h4',[_vm._v("我提问的")])])],1),_vm._v(" "),_c('div',[_c('router-link',{attrs:{"to":"/campus/My-propose"}},[_c('h4',[_vm._v("我创作的")])])],1)])],2),_vm._v(" "),_c('div',{staticClass:"information"},[_c('div',{staticClass:"information_operation"},[_c('ul',[_c('li',[_c('router-link',{attrs:{"to":"/campus/collection"}},[_vm._v("我的收藏")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/track"}},[_vm._v("我的足迹")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/collection"}},[_vm._v("我的权益")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/collection"}},[_vm._v("帮助中心")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/campus/collection"}},[_vm._v("关于我们")])],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1)])]),_vm._v(" "),_c('el-backtop',{attrs:{"bottom":100}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"information_recommend"},[_c('div',{staticClass:"recommend_title"},[_vm._v("\n              猜你喜欢\n          ")]),_vm._v(" "),_c('div',{staticClass:"recommed_content"},[_c('div',{staticClass:"content_detail"},[_c('img',{attrs:{"src":__webpack_require__("7Otq")}}),_vm._v(" "),_c('div',{staticClass:"detail_information"},[_c('span',[_vm._v("\n                    wewe\n                  ")]),_vm._v(" "),_c('span',[_vm._v("\n                    阿勇\n                  ")]),_vm._v(" "),_c('span',[_vm._v("\n                    2222人浏览过\n                  ")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"information_advert"},[_c('img',{attrs:{"src":__webpack_require__("0T20"),"alt":"检测网络"}}),_vm._v(" "),_c('span',[_vm._v("广告")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Campus = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Campus.vue
function injectStyle (ssrContext) {
  __webpack_require__("KRZu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-afa1a046"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Campus["a" /* default */],
  Bbs_Campus,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Campus = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "khQB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/eventBus.js
var eventBus = __webpack_require__("O6e2");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/QuestHeader.vue
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var QuestHeader = ({
  data: function data() {
    return {
      title: ""
    };
  },

  methods: {
    editor: function editor() {
      eventBus["a" /* default */].$emit('editor', true);
    }
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;

    eventBus["a" /* default */].$on("sentTitle", function (val) {
      _this.title = val;
    });
    if (this.$route.params.question != "") {
      this.title = JSON.parse(localStorage.getItem("question")).questionname;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-de28873e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/QuestHeader.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"questheader_contain"},[_c('div',{staticClass:"questheader_content"},[_c('span',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"questheader_btn"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-edit"},on:{"click":_vm.editor}},[_vm._v("写答案")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_QuestHeader = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/QuestHeader.vue
function injectStyle (ssrContext) {
  __webpack_require__("P9ay")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-de28873e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  QuestHeader,
  Bbs_QuestHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_QuestHeader = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lx+p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/eventBus.js
var eventBus = __webpack_require__("O6e2");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/DetailHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var DetailHeader = ({
  name: 'detailHeader',
  data: function data() {
    return {
      SupportFlay: true,
      //标题
      title: '',
      artlicleId: "",
      //支持图片路劲
      SupportImg: '../../../static/images/campus/detail/article_beforesupport.png',
      //踩图片路径
      StampImg: '../../../static/images/campus/detail/article_beforestamp.png'
    };
  },
  methods: {
    SupportClick: function SupportClick() {
      var _this = this;

      if (this.SupportFlay) {
        this.$axios({
          url: "/article/likeArticle",
          method: "POST",
          params: {
            articleId: this.articleId
          }
        }).then(function (res) {
          console.log(res);
          if (res.data.code == "200") {
            _this.$message({
              type: "success",
              message: "点赞成功",
              offset: 100
            });
            _this.SupportFlay = false;
            _this.SupportImg = "../../../static/images/campus/detail/article_aftersupport.png";
            _this.StampImg = "../../../static/images/campus/detail/article_beforestamp.png";
          }
        });
      } else {
        console.log(this.articleId);
        this.$axios({
          url: "/article/cancelLikeArticle",
          method: "POST",
          params: {
            articleId: this.articleId
          }
        }).then(function (res) {
          console.log(res);
          if (res.data.code == "200") {
            _this.$message({
              type: "success",
              message: "取消点赞成功",
              offset: 100
            });
            _this.SupportFlay = true;
            _this.SupportImg = "../../../static/images/campus/detail/article_beforesupport.png";
          }
        });
      }
    },
    StampClick: function StampClick() {
      this.SupportImg = "../../../static/images/campus/detail/article_beforesupport.png";
      this.StampImg = "../../../static/images/campus/detail/article_afterstamp.png";
    }
  },
  created: function created() {
    var _this2 = this;

    this.title = JSON.parse(localStorage.getItem("article")).title;
    this.articleId = JSON.parse(localStorage.getItem("article")).articleId;
    this.$axios({
      url: "/article/isLikeArticle",
      method: "POST",
      params: {
        articleId: this.articleId
      }
    }).then(function (res) {
      console.log(res);
      if (res.data.code == "200") {
        _this2.SupportFlay = false;
        _this2.SupportImg = " .../../../static/images/campus/detail/article_aftersupport.png";
      } else if (res.data.code == "500") {
        _this2.SupportImg = " .../../../static/images/campus/detail/article_beforesupport.png";
      }
    });
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7930b0ac","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/DetailHeader.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detailHeaader_header"},[_c('div',{staticClass:"detailHeaader_nav"},[_c('div',{staticClass:"article_title"},[_c('span',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"article_browse"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"写的很好","placement":"top"}},[_c('img',{staticClass:"article_support",attrs:{"src":_vm.SupportImg,"alt":"请检查网络"},on:{"click":function($event){return _vm.SupportClick()}}})]),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"写的不行","placement":"top"}},[_c('img',{staticClass:"article_stamp",attrs:{"src":_vm.StampImg,"alt":"请检查网络"},on:{"click":function($event){return _vm.StampClick()}}})])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_DetailHeader = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/DetailHeader.vue
function injectStyle (ssrContext) {
  __webpack_require__("Jppc")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7930b0ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  DetailHeader,
  Bbs_DetailHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_DetailHeader = __webpack_exports__["a"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=5.bc60e25040b101082cd6.js.map