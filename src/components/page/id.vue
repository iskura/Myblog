<template>
  <div class="page">
    <h2 class="title">{{ $route.params.title }}</h2>
    <div class="msg">
      <div class="createtime">{{ $route.params.createtime }}</div>
      <div class="author">{{ $route.params.author }}</div>
    </div>
    <!-- 首页正文 -->
    <div>首页/正文</div>
    <div class="content">
      <div class="tip">
        请注意,本文编写于{{
          $route.params.createtime
        }}天前,其中某些信息可能已经过时.
      </div>
      <div class="content">
        文章的内容是:<md-editor v-model="$route.params.content" previewOnly />
      </div>
    </div>
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default {
  components: { MdEditor },
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
}
.title {
  background-color: coral;
  line-height: 3rem;
  width: auto;
  height: 50px;
}
.msg {
  margin: 0 auto;
  display: flex;
}
.content {
  flex-direction: column;
  text-align: left;
}
</style>
