<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-06 23:49:32
-->
<template>
  <div>
    <div class="top">
      <h1>
        <span class="title"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path></svg></span
        >项目展示
      </h1>
    </div>
    <div class="main">
      <!-- image -->
      <div class="img"></div>
      <!-- 卡片盒子 -->
      <el-row :gutter="36" class="row">
        <el-col
          :span="12"
          v-for="item in githubData"
          :key="item.id"
          class="cardbox"
        >
          <el-card shadow="hover" class="card" :body-style="{ padding: '4px' }">
            <h3>{{ item.name }}</h3>
            <div class="starinfo">
              <el-icon class="icon"
                ><star /><span>{{ item.stargazers_count }} /</span></el-icon
              >
              <el-icon class="icon"
                ><star-filled /><span> {{ item.forks }}</span></el-icon
              >
            </div>

            <div class="descrip">{{ item.description }}</div>
            <a :href="item.html_url"
              ><el-button color="#626aef" size="small" plain>Go</el-button></a
            >

            <div class="lan">{{ item.language }}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Star, StarFilled } from "@element-plus/icons-vue";
export default {
  components: { Star, StarFilled },
  data() {
    return {
      githubData: [],
    };
  },
  mounted() {
    this.$http({
      method: "GET",
      url: "https://api.github.com/users/iskura/repos",
    }).then((response) => {
      console.log(response.data);
      this.githubData = response.data;
    });
  },
};
</script>

<style lang="less" scoped>
.top {
  background-color: #f9f9f9;
  height: 83px;
  h1 {
    font-weight: 300;
    padding: 20px;
  }
}
.main {
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  background-color: #ffffff;
}
.row {
  margin: 0 !important;
  // max-height: 200px;
  .cardbox {
    font-weight: 300;
    padding: 10px;
    h3 {
      font-weight: 400;
    }
    .card {
      margin-top: 20px;
      text-align: center;
      background: #fcfcfc;

      .starinfo {
        font-size: 15px;
        padding-top: 7px;
        width: auto;
        span {
          margin-left: 10px;
          font-size: 15px;
          vertical-align: top;
        }
        .icon {
          display: inline;
          margin-left: 5px;
        }
      }
    }
    .descrip {
      padding-top: 3px;
      height: 70px;
      color: #afafaff8;
    }
    .lan {
      text-align: end;
      vertical-align: -100%;
      color: rgb(199, 138, 138);
    }
  }
}
// basecode图片
.img {
  width: auto;
  height: 280px;
  background-image: url("https://upyun.mcloc.cn/usr/uploads/2020/09/2017671113.jpg");

  overflow: hidden;
}
</style>
