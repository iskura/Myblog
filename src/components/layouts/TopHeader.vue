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
    <div class="main">
      <el-input v-model="input" placeholder="搜索框" />
      <div class="search" v-show="input">
        <ul>
          <li v-for="item in searchdata" :key="item">
            <a :href="'#/' + item.id"
              >{{ item.title }}
              <p>{{ item.content.substring(0, 12) + "..." }}</p></a
            >
          </li>
          <li v-if="searchdata == undefind">
            <a
              >Error
              <p>没有搜索到相关关键词</p></a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="other">
      <!-- 个人统计数据按钮 -->
      <el-button id="myself"
        ><el-icon><Edit /></el-icon
      ></el-button>
      <!-- 待开发 音乐播放器 -->
      <!-- 闲言碎语 -->
      <el-button id="dropdown"
        ><el-icon><Share /></el-icon
      ></el-button>
    </div>
  </div>
</template>

<script>
import { Edit, Share } from "@element-plus/icons";
import { ref } from "vue";

export default {
  name: "TopHeader",
  components: { Edit, Share },
  data() {
    return {
      input: ref(""),
      searchdata: [],
    };
  },
  watch: {
    input(newval, oldval) {
      this.$http({
        method: "GET",
        url: "/api/blog/list",
        params: {
          search: newval,
        },
      }).then((response) => {
        this.searchdata = response.data.data.content;
        console.log(oldval, "searchdata", this.searchdata);
      });
    },
  },
};
</script>
<style lang="less" scoped>
/* 顶部导航栏 */
.TopHeadder {
  font-weight: 320;
  background-color: #f9f9f9;
  z-index: 3;
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
  img {
    width: 50px;
    height: 50px;
  }
}
.log {
  height: 50px;
  margin: 0px 80px;
}
.main {
  display: flex;
  position: relative;
  min-width: 300px;
  padding: 5px;
  margin: 0 auto;
}
.search {
  position: absolute;
  width: 375px;
  height: auto;
  top: 48px;
  ul {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 4px 1px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 5px;
    max-height: 500px;
    padding: 4px 0;
    li {
      padding-left: 10px;
      height: 60px;
      list-style: none;
      a {
        text-decoration: none;
        word-break: break-all;
        color: #000000;
        line-height: 1.42857143;
        p {
          font-size: 14px;
        }
      }
    }
    li:hover {
      background-color: #a09e9e;
    }
  }
}
.other {
  right: 0px;
  padding: 5px;
  min-width: 220px;

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
@media screen and (max-width: 770px) {
  .main {
    display: none;
  }

  .zhazhayu {
    width: auto;
    margin: 0 auto;
  }
}
</style>
