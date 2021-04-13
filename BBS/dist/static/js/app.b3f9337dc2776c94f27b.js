webpackJsonp([36],{

/***/ "+708":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-particles/src/vue-particles/vue-particles.vue

/* harmony default export */ var vue_particles = ({
  name: 'vue-particles',
  props: {
    color: {
      type: String,
      default: '#dedede'
    },
    particleOpacity: {
      type: Number,
      default: 0.7
    },
    particlesNumber: {
      type: Number,
      default: 80
    },
    shapeType: {
      type: String,
      default: 'circle'
    },
    particleSize: {
      type: Number,
      default: 4
    },
    linesColor: {
      type: String,
      default: '#dedede'
    },
    linesWidth: {
      type: Number,
      default: 1
    },
    lineLinked: {
      type: Boolean,
      default: true
    },
    lineOpacity: {
      type: Number,
      default: 0.4
    },
    linesDistance: {
      type: Number,
      default: 150
    },
    moveSpeed: {
      type: Number,
      default: 3
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    hoverMode: {
      type: String,
      default: 'grab'
    },
    clickEffect: {
      type: Boolean,
      default: true
    },
    clickMode: {
      type: String,
      default: 'push'
    }
  },
  mounted: function mounted() {
    var _this = this;

    __webpack_require__("JAHf");
    this.$nextTick(function () {
      _this.initParticleJS(_this.color, _this.particleOpacity, _this.particlesNumber, _this.shapeType, _this.particleSize, _this.linesColor, _this.linesWidth, _this.lineLinked, _this.lineOpacity, _this.linesDistance, _this.moveSpeed, _this.hoverEffect, _this.hoverMode, _this.clickEffect, _this.clickMode);
    });
  },

  methods: {
    initParticleJS: function initParticleJS(color, particleOpacity, particlesNumber, shapeType, particleSize, linesColor, linesWidth, lineLinked, lineOpacity, linesDistance, moveSpeed, hoverEffect, hoverMode, clickEffect, clickMode) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": particlesNumber,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": color
          },
          "shape": {
            "type": shapeType,
            "stroke": {
              "width": 0,
              "color": "#192231"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": particleOpacity,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": particleSize,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": lineLinked,
            "distance": linesDistance,
            "color": linesColor,
            "opacity": lineOpacity,
            "width": linesWidth
          },
          "move": {
            "enable": true,
            "speed": moveSpeed,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": hoverEffect,
              "mode": hoverMode
            },
            "onclick": {
              "enable": clickEffect,
              "mode": clickMode
            },
            "onresize": {

              "enable": true,
              "density_auto": true,
              "density_area": 400

            }
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ededfff","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-particles/src/vue-particles/vue-particles.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"particles-js","color":_vm.color,"particleOpacity":_vm.particleOpacity,"linesColor":_vm.linesColor,"particlesNumber":_vm.particlesNumber,"shapeType":_vm.shapeType,"particleSize":_vm.particleSize,"linesWidth":_vm.linesWidth,"lineLinked":_vm.lineLinked,"lineOpacity":_vm.lineOpacity,"linesDistance":_vm.linesDistance,"moveSpeed":_vm.moveSpeed,"hoverEffect":_vm.hoverEffect,"hoverMode":_vm.hoverMode,"clickEffect":_vm.clickEffect,"clickMode":_vm.clickMode}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var vue_particles_vue_particles = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-particles/src/vue-particles/vue-particles.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  vue_particles,
  vue_particles_vue_particles,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_vue_particles_vue_particles = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2e2cac09","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("d0o7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e2cac09"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./src/router/index.js


vue_esm["default"].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/',
    name: 'index',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "seJV"));
    }
  },
  //登录
  {
    path: '/login',
    name: 'login',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "fiWk"));
    }
  },
  //首页
  {
    path: '/index',
    name: 'index',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "seJV"));
    },
    meta: {
      auth: false
    }
  }, {
    path: "/register",
    name: 'register',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "zGR/"));
    }
  },
  //论坛
  {
    path: '/campus',
    name: 'campus',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "kSUz"));
    },
    redirect: {
      name: 'hoslist'
    },
    children: [{
      path: '/campus/menu',
      name: "menu",
      component: function component() {
        return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "JJtI"));
      },
      children: [{
        path: '/campus/hotlist',
        name: 'hotlist',
        component: function component() {
          return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "YkKr"));
        }
      }, {
        path: '/campus/follow',
        name: 'follow',
        component: function component() {
          return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "DB+V"));
        }
      }, {
        path: '/campus/square',
        name: 'square',
        component: function component() {
          return __webpack_require__.e/* import() */(25).then(__webpack_require__.bind(null, "qcU5"));
        }
      }]
    }, {
      path: '/campus/hotlist/articledetails',
      name: 'articledetails',
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "I4I5"));
      }
    }, {
      path: '/campus/quest/questdetail',
      name: 'questdetail',
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "HKBd"));
      }
    }, {
      path: "/campus/questions",
      name: 'questions',
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "vj4m"));
      }
    }, {
      path: "/campus/article",
      name: 'article',
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "1/XB"));
      },
      meta: {
        edit: false
      }
    }, {
      path: "/campus/collection",
      name: "collection",
      component: function component() {
        return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "cVTi"));
      }
    }, {
      path: "/campus/collection-article",
      name: "collection-article",
      component: function component() {
        return __webpack_require__.e/* import() */(32).then(__webpack_require__.bind(null, "H5fL"));
      }
    }, {
      path: "/campus/collection-question",
      name: "collection-question",
      component: function component() {
        return __webpack_require__.e/* import() */(27).then(__webpack_require__.bind(null, "CWXC"));
      }
    }, {
      path: "/campus/track",
      name: "track",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, "o9z8"));
      }
    }, {
      path: "/campus/My-questision",
      name: "Myquestision",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, "RBvE"));
      }
    }, {
      path: "/campus/My-propose",
      name: "Mypropose",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "M9Kd"));
      }
    }, {
      path: "/campus/Revise-acticle",
      name: "Revuseacticle",
      component: function component() {
        return __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, "WxtU"));
      }
    }, {
      path: "/campus/Revise-question",
      name: "Revisequestion",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "fWnt"));
      }
    }]
  }, {
    path: '/headerForum',
    name: 'headerForum',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "cnxd"));
    }
  },

  //部门
  {
    path: '/department',
    name: '部门主页',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "Mhxw"));
    },
    redirect: {
      name: '部门首页'
    },
    children: [{
      path: "/department/index",
      name: '部门首页',
      component: function component() {
        return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "VT62"));
      }
    }, {
      path: "/department/createactivity",
      name: '活动/发布活动',
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "TEvr"));
      }
    }, {
      path: "/department/createdepartment",
      name: '添加部门',
      component: function component() {
        return __webpack_require__.e/* import() */(30).then(__webpack_require__.bind(null, "GbmC"));
      }
    }, {
      path: "/department/my-activity",
      name: "活动/我的活动",
      component: function component() {
        return __webpack_require__.e/* import() */(28).then(__webpack_require__.bind(null, "XaYJ"));
      }
    }, {
      path: "/department/take-activity",
      name: "活动/我的活动/我参加的",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "9dCE"));
      }
    }, {
      path: "/department/release-activity",
      name: "活动/我的活动/我发布的",
      component: function component() {
        return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "xQGE"));
      }
    }, {
      path: "/department/watch-activity",
      name: "活动/全部活动",
      component: function component() {
        return __webpack_require__.e/* import() */(33).then(__webpack_require__.bind(null, "KqiU"));
      }
    }, {
      path: "/department/detail-activity",
      name: "活动/活动详情",
      component: function component() {
        return __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, "PgDl"));
      }
    }, {
      path: "/department/my-department",
      name: "部门/我的部门",
      component: function component() {
        return __webpack_require__.e/* import() */(31).then(__webpack_require__.bind(null, "Fxan"));
      }
    }, {
      path: "/department/admin-department",
      name: "部门/管理部门",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "Aq4j"));
      }
    }, {
      path: "/department/identification",
      name: "部门/认证",
      component: function component() {
        return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "t2Bb"));
      }
    }]
  }, {
    path: '*',
    name: '404',
    component: function component() {
      return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "thLP"));
    }
  }],
  //路由滚动事件
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        y: 0
      };
    }
  }
}));

var VueRouterPush = vue_router_esm["a" /* default */].prototype.push;
vue_router_esm["a" /* default */].prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(function (err) {
    return err;
  });
};
// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("tvR6");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// EXTERNAL MODULE: ./static/css/gobal.css
var gobal = __webpack_require__("g3WT");
var gobal_default = /*#__PURE__*/__webpack_require__.n(gobal);

// EXTERNAL MODULE: ./node_modules/less/dist/less.js
var less = __webpack_require__("nrAE");
var less_default = /*#__PURE__*/__webpack_require__.n(less);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__("Y81h");
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// CONCATENATED MODULE: ./src/config/progress.js

nprogress_default.a.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
});
// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress_nprogress = __webpack_require__("UVIz");
var nprogress_nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/display.css
var display = __webpack_require__("sfy8");
var display_default = /*#__PURE__*/__webpack_require__.n(display);

// EXTERNAL MODULE: ./static/css/style.css
var style = __webpack_require__("rqsT");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./src/store/index.js


var _state;



vue_esm["default"].use(vuex_esm["a" /* default */]);
var store = new vuex_esm["a" /* default */].Store({
  state: (_state = {
    //登录状态
    loginstatus: false,
    faroutername: 'home'
  }, defineProperty_default()(_state, 'loginstatus', false), defineProperty_default()(_state, 'quitFlag', true), defineProperty_default()(_state, 'identity', 'user'), _state),
  mutations: {
    handleLogin: function handleLogin(state) {
      state.loginstatus = true;
    },
    increment: function increment(state) {
      state.count++;
    },
    nocanQuit: function nocanQuit(state) {
      state.quitFlag = false;
    },
    canQuit: function canQuit(state) {
      state.quitFlag = true;
    }
  }
});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./static/css/animate.css
var animate = __webpack_require__("yS2L");
var animate_default = /*#__PURE__*/__webpack_require__.n(animate);

// EXTERNAL MODULE: ./static/css/iconfont.css
var iconfont = __webpack_require__("XlLT");
var iconfont_default = /*#__PURE__*/__webpack_require__.n(iconfont);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("7t+N");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./src/api/router.js




router.beforeEach(function (to, from, next) {
  nprogress_default.a.start();
  next();
  //   if(to.name=="register"){
  //     next();
  //   }else{
  //   if(to.name!="index"){
  //   if(!store.state.loginstatus){
  //     if((localStorage.getItem("token"))){
  //         next();
  //     }else{
  //         if(!from.meta.auth){
  //           if(to.name=="login"){
  //             next()
  //           }else{
  //           next("/login");
  //           }
  //         }
  //     }
  //     handleEdit(to,from);
  //     next();
  //   }else{
  //     handleEdit(to,from);
  //         next();
  //     }
  //   }else{
  //     console.log(111);
  //     handleEdit(to,from);
  //     next();
  //   }
  // if(to.name=="articledetails"){
  //     localStorage.setItem("router","articledetails");
  // }else if(to.name=='hotlist' || to.name=='follow' || to.name=='square'){
  //     localStorage.setItem("router","campus");
  // }else if(to.name=="questdetail"){
  //   localStorage.setItem("router","questdetail");
  // }else{
  //   localStorage.setItem("router","");
  // }
  //   }
});
router.afterEach(function () {
  // 在即将进入新的页面组件前，关闭掉进度条
  nprogress_default.a.done();
});

function handleEdit(to, from) {
  if (to.name != "article") {
    if (from.meta.edit == false) {
      if (src_store.state.quitFlag == false) {
        if (confirm("当前文字为发布是否离开?")) {
          nprogress_default.a.start();
        }
      } else {
        nprogress_default.a.start();
      }
    } else {
      nprogress_default.a.start();
    }
  }
}
// EXTERNAL MODULE: ./node_modules/vue-particles/src/vue-particles/index.js
var vue_particles = __webpack_require__("mM94");

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


















vue_esm["default"].use(vue_particles["a" /* default */]);
vue_esm["default"].config.productionTip = false;
vue_esm["default"].prototype.$axios = axios_default.a;
vue_esm["default"].prototype.message = function (type, msg) {
  element_ui_common_default.a.Message({
    type: type,
    message: msg,
    offset: 100
  });
};
// axios.defaults.baseURL='http://www.tuling123.com/openapi/'
vue_esm["default"].use(less_default.a);
vue_esm["default"].use(element_ui_common_default.a);
vue_esm["default"].use(animate_default.a);
/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  axios: axios_default.a,
  router: router,
  store: src_store,
  components: { App: src_App },
  template: '<App/>'
});

axios_default.a.defaults.baseURL = "http://localhost:9090";

/***/ }),

/***/ "UVIz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XlLT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "d0o7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g3WT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rqsT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sfy8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yS2L":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.b3f9337dc2776c94f27b.js.map