<template>
  <div class="TopHeadder">
    <span class="zhazhayu">
      <a href="https://www.angoykeith.xyz"
        ><img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F20%2F52%2F5b64f2eead44f_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639748821&t=2b412dced511b418b5a814aadb04fd6a"
          class="log"
      /></a>
    </span>
    <!-- 搜索框 -->
    <span class="main">
      <el-input v-model="input" type="number" placeholder="搜索框" />

      <el-button circle style="margin-left: 5px"
        ><el-icon><Search /></el-icon> </el-button
    ></span>
    <div class="other">
      <!-- 个人统计数据按钮 -->
      <el-button id="myself"
        ><el-icon><Edit /></el-icon
      ></el-button>
      <!-- <_Search/> -->
      <!-- 待开发 音乐播放器 -->
      <!-- 闲言碎语 -->
      <el-button id="dropdown"
        ><el-icon><Share /></el-icon
      ></el-button>
    </div>
  </div>
</template>

<script>
// import _Search from "../page/_search.vue";
import { Edit, Share, Search } from "@element-plus/icons";
import { ref } from "vue";

export default {
  name: "TopHeader",
  components: { Edit, Share, Search },
  data() {
    return {
      input: ref(""),
      input1: "",
    };
  },
  watch: {
    input(newval, oldval) {
      this.$http({
        method: "GET",
        url: "/api/blog/detail",
        params: {
          id: newval,
        },
      }).then((response) => {
        this.input1 = response.data.data.content;
        console.log(oldval);
      });
    },
  },
};
</script>
<style scoped>
/* 顶部导航栏 */
.TopHeadder {
  background-color: #f9f9f9;
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 4px 1px;
}
/* 图标 首页 */
.zhazhayu {
  height: 50px;
  width: 217px;
  background: #f9f9f9;
}
.log {
  height: 50px;
  margin: 0px 80px;
}
.main {
  margin-left: 80px;
  min-width: 400px;
  padding: 5px;
  display: flex;
}
#search-form {
  margin-left: 3px;
  margin-top: 0px;
}
.other {
  right: 0px;
  padding: 5px;
  min-width: 220px;
  position: absolute;
  height: auto;
}
/* 数据统计按钮 */

/* 个人简介 */
#myself {
  margin-left: 50px;
}
/* 闲言碎语 */
#dropdowm {
  right: 50px;
  float: right;
}
#search-form {
  margin-top: 5px;
}
@media screen and (max-width: 1127px) {
  .other {
    display: none;
  }
}
@media screen and (max-width: 850px) {
  .main {
    display: none;
  }
  .zhazhayu {
    width: auto;
    margin: 0 auto;
  }
}
</style>
