<template>
  <div class="page">
    <h2 class="title">{{ getData.title }}</h2>
    <div class="msg">
      <div class="createtime">
        <el-icon size="12"><clock /></el-icon>
        {{ timeFormater(getData.createtime) }}
      </div>
      <div class="author">
        <el-icon size="12"><avatar /></el-icon> {{ getData.author }}
      </div>
      <div class="length" v-if="this.length">
        <el-icon size="12"><notebook /></el-icon>{{ length }}字数
      </div>
      <span :id="'/' + this.path" class="leancloud_visitors">
        <em class="seenumber">阅读量</em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <!-- 首页正文页头 -->

    <el-page-header :icon="ArrowLeft" content="detail" />
    <!-- 正文 -->
    <div class="main">
      <el-alert
        class="alert"
        title="请注意"
        type="info"
        show-icon
        :closable="false"
        >本文编写于
        {{ timeFormater(getData.createtime) }}
        ,最后更新于{{
          timeFormater(getData.updatetime)
        }}其中某些信息可能已经过时.
      </el-alert>
      <md-editor class="content" v-model="getData.content" previewOnly />
      <div id="vcomments"></div>
      <Comment :postid="this.$route.params.id" />
    </div>

    <el-backtop />
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import Comment from "../tools/comment.vue";
// import Valine from "valine";
import { Avatar, Clock, Notebook } from "@element-plus/icons";
import dayjs from "dayjs";
export default {
  components: { MdEditor, Avatar, Clock, Notebook, Comment },
  data() {
    return {
      getData: [],
      length: "",
    };
  },
  methods: {
    timeFormater(value) {
      let time = new dayjs(value).format("YYYY-MM-DD:HH:mm:ss");
      return time;
    },
    // createValine() {
    //   let path = this.$route.params.id;
    //   console.log("path", path);
    //   new Valine({
    //     el: "#vcomments",
    //     appId: "UCfTwCsTUwcXbbnnvxxlhP14-gzGzoHsz",
    //     appKey: "519A2JkOR4002zpi0XlpfBPD",
    //     visitor: true,
    //     avatar: "monsterid",
    //     path: "/" + this.path,
    //     placeholder: "欢迎留言与我分享您的想法...",
    //   });
    //   this.valineRefresh = true;
    // },
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {
          //重新刷新valine
          // this.createValine();
        }, 300);
      }
    },
  },
  mounted() {
    this.$http({
      method: "GET",
      url: "/api/blog/detail",
      params: {
        id: this.$route.params.id,
      },
    }).then((response) => {
      console.log(response.data.data);
      this.getData = response.data.data;
      this.length = this.getData.content.length;
    });
    // this.createValine();
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: normal;
  font-weight: 300;
  padding: 10px;
  background-color: #ffff;
}
.title {
  background-color: #ffff;
  line-height: 3rem;
  font-weight: normal;
  width: auto;
  height: 50px;
}
.author,
.seenumber,
.length {
  padding-left: 11px;
}
.msg {
  margin: 0 auto;
  display: flex;
}
.alert {
  font-size: 30px;
}
.content {
  background-color: #f4f4f5;
  flex-direction: column;
  text-align: left;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
}
#vcomments {
  margin-top: 10px;
}
</style>
