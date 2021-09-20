<template>
  <div>
    <!-- 头部 -->
    <header>
      <!-- 导航 -->
      <nav>
        <!-- 过渡效果 -->
        <div>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="2" :xs="6" :sm="4" :md="2" :lg="3" :xl="2"
              ><div class="logo-content">
                <router-link to="/index">
                  <img src="../../../static/images/logo.png" class="logo" />
                  <span>1楼2楼</span>
                </router-link>
              </div></el-col
            >
            <el-col :span="7" :xs="6" :sm="8" :md="10" :lg="9" :xl="9">
              <div class="grid-content">
                <ul class="nav">
                  <li>
                    <router-link to="/index"> 首页 </router-link>
                  </li>
                  <li>
                    <router-link to="/department"> 部门 </router-link>
                  </li>
                  <li>
                    <router-link to="/"> 跳蚤市场 </router-link>
                  </li>
                  <li>
                    <router-link to="/campus/hotlist"> 微论坛 </router-link>
                  </li>
                  <li>
                    <router-link to="/"> 下载app </router-link>
                    <div class="extension">
                      <p>请大大扫码下载吧</p>
                      <img
                        src="../../../static/images/extension.jpg"
                        alt="请检查网络"
                      />
                    </div>
                  </li>
                </ul></div
            ></el-col>
            <el-col :span="8" :xs="8" :sm="8" :md="8" :lg="9" :xl="8"
              ><div class="grid-content">
                <div class="nav_search">
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content hidden-md-and-down">
                        <el-input
                          placeholder="请输入内容"
                          v-model="dep_name"
                          style="width: 100%"
                        >
                          <el-button
                            slot="append"
                            icon="el-icon-search"
                            style="background-color: #00c758; color: white"
                          ></el-button>
                        </el-input>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content nav_msg hidden-sm-and-down">
                        <ul>
                          <li class="unlogin" v-if="loginstatus">
                            <router-link to="/login">登陆</router-link
                            ><router-link to="/register">注册</router-link>
                          </li>
                          <li v-else>
                            <span>{{ user.userName }}</span>
                          </li>
                          <li>
                            <router-link to="#">关于我们</router-link>
                          </li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </nav>
    </header>
    <br />
    <!-- 主体 -->
    <main>
      <div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="20"
            ><div class="grid-content bg-purple">
              <div class="nag">
                <ul>
                  <li>
                    <i class="el-icon-hot-water" style="font-size: 25px"></i>
                    <strong>今日话题</strong>
                  </li>
                  <li v-for="(item, index) in name" :key="index">
                    <p>{{ index + 1 }}</p>
                    <p>
                      <router-link to="/campus/hotlist">{{
                        item.title
                      }}</router-link>
                    </p>
                  </li>
                </ul>
              </div>
              <!-- 菜单 -->
              <div class="block">
                <span class="demonstration"></span>
                <el-carousel height="400px">
                  <el-carousel-item
                    v-for="(item, index) in imgsrc"
                    :key="index"
                  >
                    <h3 class="small">
                      <img :src="item" />
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="person">
                <img
                  :src="
                    !user.selfImage
                      ? '../../../static/images/user.png'
                      : user.selfImage
                  "
                  alt="请检查网络"
                  class="person_photo"
                />
                <div class="loginless" v-if="loginstatus">
                  <p>登录即可享受更多服务</p>
                </div>
                <div class="person_msg" v-else>
                  <p>{{ user.userName }}</p>
                  <!-- <img
                    :src=""
                    alt="请检查网络"
                    id="psn_grade"
                    style="
                      width: 20px;
                      height: 20px;
                      float: left;
                      margin-left: 50px;
                      margin-top: 2px;
                      display: inline-block;
                    "
                  /> -->
                  <p style="font-size: 18px; float: left; width: 60%">
                    <!-- 等级:{{  }} -->
                  </p>
                  <div class="person_server">
                    <ul>
                      <!-- 菜单 -->
                      <li
                        v-for="item in servername"
                        :key="item.id"
                        @click="hanleClick(item)"
                      >
                        <router-link :to="{ name: item.to }">
                          <img :src="item.img" alt="" />
                          <p>{{ item.sname }}</p>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style="clear: both"></div>
              <list :data="data" :ranklist="ranklist"></list>

              <know></know>
              <department
                :departmentlist="departmentlist"
                :associationlist="associationlist"
                :hotlist="hotlist"
                v-bind="this.$attrs"
              ></department>
            </div>
          </el-col>
        </el-row>
      </div>
    </main>
    <el-backtop :bottom="100"></el-backtop>
    <footer>
      <div>
        <h1>关于我们</h1>
      </div>
    </footer>
  </div>
</template>
<script>
import list from "./List.vue";
import know from "./Knowledge.vue";
import department from "./Department.vue";
import { getHomepage } from "../../api/data";
export default {
  data() {
    return {
      //部门名称
      dep_name: "",
      sign: "12",
      //显示
      show: true,
      //登录状态
      loginstatus: false,
      //模拟话题数据
      name: [
        "8个安全出行忠告",
        "全新领克01 ",
        "拜登受伤后首次公开545",
        "	韩国N号房主犯提起上诉",
        "	韩国N号房主犯提起上诉",
        "	韩国N号房主犯提起上诉",
        "	韩国N号房主犯提起上诉",
        "韩国N号房主犯提起上诉",
        "	韩国N号房主犯提起上诉"
      ],
      //等级
      psn_grade: "",
      //照片
      imgsrc: [
        "../../../static/images/bridge.jpg",
        "../../../static/images/cablecar.jpg",
        "../../../static/images/extension.jpg"
      ],
      user: {},
      //用户功能静态
      servername: [
        {
          id: 1,
          sname: "个人中心",
          img: "../../../static/images/person.png",
          to: ""
        },
        {
          id: 2,
          sname: "我的部门",
          img: "../../../static/images/department.png",
          to: ""
        },
        {
          id: 3,
          sname: "微论坛",
          img: "../../../static/images/community.png",
          to: ""
        },
        {
          id: 4,
          sname: "我的审核",
          img: "../../../static/images/examine.png",
          to: ""
        },
        {
          id: 5,
          sname: "我的消息",
          img: "../../../static/images/msg.png",
          to: ""
        },
        { id: 6, sname: "退出", img: "../../../static/images/out.png", to: "" }
      ],
      //模拟跳蚤市场
      data: [
        {
          img: "../../../static/images/user.png",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/user.png",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/bridge.jpg",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/bridge.jpg",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/bridge.jpg",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/bridge.jpg",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/bridge.jpg",
          user: "瀑布流",
          liked: "www",
          num: 5
        },
        {
          img: "../../../static/images/bridge.jpg",
          user: "瀑布流",
          liked: "www",
          num: 5
        }
      ],
      //模拟用户排名
      ranklist: [
        {
          img: "../../../static/images/user.png",
          name: "我吃西红柿",
          num: "25"
        },
        {
          img: "../../../static/images/user.png",
          name: "我吃西红柿",
          num: "25"
        },
        {
          img: "../../../static/images/user.png",
          name: "我吃西红柿",
          num: "25"
        },
        {
          img: "../../../static/images/user.png",
          name: "我吃西红柿",
          num: "25"
        },
        {
          img: "../../../static/images/user.png",
          name: "我吃西红柿",
          num: "25"
        },
        {
          img: "../../../static/images/user.png",
          name: "我吃西红柿",
          num: "25"
        }
      ],
      //模拟部门排名
      departmentlist: [
        {
          name: "工学院设",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "工学院设计部",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "工学院设计部",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "工学院设计部",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "工学院设计部",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "工学院设计部",
          active: 222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        }
      ],
      //模拟协会排行
      associationlist: [
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        }
      ],
      //模拟活跃排行
      hotlist: [
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 22222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        },
        {
          name: "魔术协会",
          active: 222,
          imgsrc: "../../../static/images/department_propaganda.jpg"
        }
      ]
    };
  },
  computed: {},
  async created() {
    if (this.$store.state.loginstatus) {
      this.loginstatus = false;
    } else {
      if (this.$store.state.user == null) {
        this.loginstatus = true;
      } else {
        console.log(111);
        this.loginstatus = false;
      }
    }
    if (this.$store.state.user) {
      this.user = this.$store.state.user;
    }
    console.log(this.user);
    if (!this.loginstatus) {
      $(".person_photo").attr("src", this.user.selfImage);
    }
    let result = await getHomepage();
    this.name = result["data"].result;
    let login = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
    login.then(res => {
      let nag = document.querySelector(".nag");
      let server = document.querySelector(".person_msg");
      let a = document.querySelectorAll("a");
      //  this.loginstate=res;
      if (!res) {
        for (let i = 0; i < a.length; i++) {
          a[i].style.pointerEvents = "auto";
        }
      } else {
        for (let i = 0; i < a.length; i++) {
          a[i].style.pointerEvents = "painted";
        }
        p.then(res => {
          if (res == 1) {
            this.psn_grade = require("../../../static/images/grade/用户_等级2.png");
          }
        });
      }
    });
  },
  methods: {
    hanleClick(item) {
      console.log(item);
      if (item.id == 1) {
        this.$router.push({ name: "my" });
      }
      if (item.id == 6) {
        localStorage.clear();
        sessionStorage.clear();
        this.$store.commit("handleCancel");
        window.location.reload();
      }
    }
  },
  components: {
    list,
    know,
    department
  }
};
</script>
<style lang="less" scoped>
@import "../../../static/less/index.less";
@import "../../../static/less/first.less";

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
