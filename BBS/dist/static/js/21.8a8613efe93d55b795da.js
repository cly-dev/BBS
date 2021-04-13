webpackJsonp([21],{

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

/***/ "ejN1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=21.8a8613efe93d55b795da.js.map