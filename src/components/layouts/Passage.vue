<template>
  <div>
    <!-- 页头 和 通知 -->
    <div class="main">
      <h1>炸炸鱼的博客</h1>
      <h4 v-show="!type">月落乌啼霜满天，江枫渔火对愁眠。</h4>
      <h4 v-show="type">分类{{ pagename[type - 1] }}下的文章</h4>
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
          <div class="content">{{ item.content }}</div>
          <el-divider style="top: 15px; margin-top: -10px"></el-divider>
          <div class="createauthor">
            <el-icon><Avatar /></el-icon
            ><span class="author">{{ item.author }}</span>
            <el-icon><clock /></el-icon>
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
  props: {
    type: {
      //文章分类
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      pagename: ["闲谈", "笔记", "设计", "一周记录", "技术", "生活", "技术"],
      pagesize: 8,
      pagecount: 1,
      TipData: [],
      getData: [],
    };
  },
  watch: {
    pagetype(to, from) {
      console.log(to, from);
      console.log(this.pagetype);
    },
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
      params: {
        type: this.type,
      },
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
    line-height: 42px;
    padding-top: 18px;
    text-align: center;
  }
  h4 {
    margin-top: 8px;
    text-align: center;
    font-size: 14px;
    color: #a0a0a0;
  }
}
a {
  display: inline-flex;
  font-weight: 500 !important;
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
  }
  .content {
    color: #8f8f8f;
    margin-top: 8px;
    height: 70%;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
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
  }
  .top {
    height: 170px;
  }
  .box {
    height: 145px;
    .box1 {
      margin: 8px;
      margin-left: 13px;
      a {
        font-size: 14px !important;
      }
    }
    .content {
      font-size: 13px;
      height: 72%;
    }
  }
}
</style>
