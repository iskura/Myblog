<template>
  <!-- 页头 和 通知 -->
  <div class="main">
    <h2>炸炸鱼的博客</h2>
    <h4>江枫渔火对愁眠</h4>
  </div>
  <!-- 头条 -->
  <div class="top" v-if="pagecount == 1" v-bind="TipData">
    <span class="title"
      ><router-link :to="{ name: 'Id', params: { id: 1 } }">{{
        TipData.title
      }}</router-link></span
    >
    <div class="content">{{ TipData.content }}</div>
  </div>
  <!-- 文章页 -->
  <div
    v-for="item in getData.slice(
      (pagecount - 1) * pagesize,
      pagecount * pagesize
    )"
    :key="item.id"
    class="box"
  >
    <img
      style="width: 280px; height: 220px; flex-direction: column"
      :src="item.url"
    />

    <div class="box1">
      <span class="title"
        ><router-link :to="{ name: 'Id', params: { id: item.id } }">{{
          item.title
        }}</router-link></span
      >
      <span class="content">{{ item.content.substring(0, 130) }}</span>
      <el-divider style="top: 10px"></el-divider>
      <div class="createauthor">
        <el-icon size="12"><Avatar /></el-icon
        ><span class="author">{{ item.author }}</span>
        <el-icon size="12"><clock /></el-icon>
        <span class="createtime">{{ timeFormater(item.createtime) }}</span>
      </div>
    </div>
  </div>
  <!-- 分页 -->
  <el-pagination
    background
    :page-size="pagesize"
    :pager-count="pagecount"
    layout="prev, pager, next"
    :total="getData.length"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
  <!-- 回到顶部按钮 -->
  <el-backtop />
</template>

<script>
import { defineComponent } from "vue";
import { Avatar, Clock } from "@element-plus/icons";

import dayjs from "dayjs";

export default defineComponent({
  components: { Avatar, Clock },
  // props: {
  //   articleList: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  data() {
    return {
      loading: true,
      pagesize: 8,
      pagecount: 1,
      TipData: [],
      getData: [],
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.pagecount = val;
    },
    timeFormater(value) {
      let time = dayjs(value).format("YYYY-MM-DD");
      return time;
    },
  },

  mounted() {
    //Axios请求
    this.$http({
      method: "GET",
      url: "/api/blog/list",
    }).then((response) => {
      this.getData = response.data.data;
    });
    //zhiding
    this.$http({
      method: "GET",
      url: "/api/blog/detail",
      params: {
        id: 1,
      },
    }).then((response) => {
      this.TipData = response.data.data;
    });
  },
});
</script>

<style scoped lang="less">
.main {
  margin: 0;
  width: 100%;
  height: 110px;
  background-color: #f9f9f9;
  h2 {
    font-weight: 350;
    line-height: 42px;
    padding-top: 18px;
    text-align: center;
  }
  h4 {
    margin-top: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    color: #a0a0a0;
  }
}
a {
  color: inherit;
  display: inline-flex;
  text-decoration: none;
  word-break: break-all;
}
.box {
  background-color: #ffffff;
  width: auto;
  display: flex;
  margin: 16px;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
  .box1 {
    font-weight: 300;
    width: auto;
    display: flex;
    flex-direction: column;
    margin: 15px;
    margin-left: 22px;
  }
  .title {
    width: 100%;
    display: block;
    font-size: 19px;
    font-weight: 500;
  }
  .content {
    margin-top: 8px;
    height: 130px;
  }
  .createauthor {
    font-size: 13px;
    .createtime {
      margin: 10px;
    }
    .author {
      margin: 10px;
    }
  }
}
.top {
  height: 200px;
  background-image: url("https://upyun.mcloc.cn/usr/uploads/2021/08/1958042363.jpg");
  background-repeat: no-repeat;
  background-position: 50% 65%;
  background-size: cover;
  margin: 16px;
  height: 230px;
  border-radius: 4px;
  overflow: hidden;
  color: #ffffff;
  .title {
    font-size: 22px;
    line-height: 24.2px;
    margin-top: 100px;
    display: block;
    text-align: center;
  }
  .content {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
  }
}

@media screen and (max-width: 680px) {
  img {
    display: none;
  }
}
</style>
