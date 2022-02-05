<template>
  <div>
    <!-- 页头 和 通知 -->
    <div class="main">
      <h1>炸炸鱼的博客</h1>
      <h4>月落乌啼霜满天，江枫渔火对愁眠。</h4>
    </div>
    <!-- 头条 -->
    <div class="top" v-if="pagecount == 1" v-bind="TipData">
      <a class="title" href="#/1">{{ TipData.title }}</a>
      <div class="content">{{ TipData.content }}</div>
    </div>
    <!-- 文章页 -->
    <div id="hv">
      <div
        v-for="item in getData.slice(
          (pagecount - 1) * pagesize,
          pagecount * pagesize
        )"
        :key="item.id"
        class="box"
      >
        <a :href="'#/' + item.id">
          <div
            class="img"
            :style="{ backgroundImage: 'url(' + item.url + ')' }"
          ></div>
        </a>

        <div class="box1">
          <span class="title"
            ><router-link :to="{ name: 'Id', params: { id: item.id } }">{{
              item.title
            }}</router-link></span
          >
          <span class="content">{{
            item.content.substring(0, 130) + "..."
          }}</span>
          <el-divider style="top: 15px; margin-top: -10px"></el-divider>
          <div class="createauthor">
            <el-icon size="12"><Avatar /></el-icon
            ><span class="author">{{ item.author }}</span>
            <el-icon size="12"><clock /></el-icon>
            <span class="createtime">{{ timeFormater(item.createtime) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <nav class="pagecut">
      <el-pagination
        :page-size="pagesize"
        :page-count="Math.floor(getData.length / pagesize) + 1"
        layout="prev, pager, next,jumper"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </nav>

    <!-- 回到顶部按钮 -->
    <el-backtop />
  </div>
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
  height: 100px;
  background-color: #f9f9f9;
  h1 {
    font-weight: 300;
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
  color: #000000;
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
  transition: 0.5s;
  .img {
    max-width: 220px;
    width: 30vw;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .box1 {
    font-weight: 300;
    width: auto;
    display: flex;
    flex-direction: column;
    margin: 13px;
    margin-left: 20px;
  }
  .title {
    width: 100%;
    display: block;
    font-size: 19px;
    font-weight: 500;
  }
  .content {
    color: #8f8f8f;
    margin-top: 8px;
    height: 70%;
    overflow: hidden;
  }
  .createauthor {
    color: #8f8f8f;
    font-size: 13px;
    bottom: 0px;
    .createtime {
      margin: 10px;
    }
    .author {
      margin: 10px;
    }
  }
}
.box:hover {
  box-shadow: 0px 0px 10px #ccc;
  transform: scale(1.002) translateX(3px) translateY(-3px);
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
    margin-top: 70px;
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
.pagecut {
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  justify-content: center;
}
@media screen and (max-width: 680px) {
  .img {
    width: 30%;

    flex-direction: column;
    background-position: center;
  }
  .top {
    height: 170px;
  }
  .box {
    height: 145px;
    .box1 {
      margin: 8px;
      margin-left: 13px;
    }
    .title {
      font-size: 14px;
    }
    .content {
      font-size: 13px;
      height: 72%;
    }
  }
}
</style>
