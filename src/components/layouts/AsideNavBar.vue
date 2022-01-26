<template>
  <div class="aside">
    <el-scrollbar style="heigth: 100%">
      <el-row class="tac">
        <el-tag type="info" color="#0000">导航</el-tag>
        <el-col :span="24">
          <el-menu router default-active="1" class="main">
            <el-menu-item index="/">
              <el-icon><House /></el-icon><span>首页</span></el-menu-item
            >

            <el-menu-item index="Sample">
              <el-icon><files /></el-icon>
              <span>作品</span>
            </el-menu-item>
            <el-menu-item index="Box">
              <el-icon><document /></el-icon>
              <span>仓库</span>
            </el-menu-item>
            <el-menu-item index="Music">
              <el-icon><cherry /></el-icon>
              <span>音乐</span>
            </el-menu-item>
            <el-menu-item index="File">
              <el-icon><timer /></el-icon>
              <span>归档</span>
            </el-menu-item>
            <el-menu-item index="Message">
              <el-icon><chat-dot-square /></el-icon>
              <span>留言</span>
            </el-menu-item>
            <el-menu-item index="Something">
              <el-icon><message-box /></el-icon>
              <span>一些盒子</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-tag type="info" color="#0000"> 组成</el-tag>

        <el-col :span="24">
          <el-menu
            class="main"
            @open="handleOpen"
            router
            @close="handleClose"
            @unique-opened="true"
          >
            <el-sub-menu :index="path">
              <template #title="">
                <el-icon><location /></el-icon>
                <span>分类</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="'1-1'">前端</el-menu-item>
                <el-menu-item index="1-2">闲谈</el-menu-item>
                <el-menu-item index="1-3">笔记</el-menu-item>
                <el-menu-item index="1-4">设计</el-menu-item>
                <el-menu-item index="1-5">一周记录</el-menu-item>
                <el-menu-item index="1-6">技术</el-menu-item>
                <el-menu-item index="1-7">生活</el-menu-item>
                <el-menu-item index="1-8">匣子</el-menu-item>
                <el-menu-item index="1-9">新世界的大门</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title="">
                <el-icon><icon-menu /></el-icon>
                <span>页面</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">项目</el-menu-item>
                <el-menu-item index="2-2">归档</el-menu-item>
                <el-menu-item index="2-3">时光机</el-menu-item>
                <el-menu-item index="2-4">留言板</el-menu-item>
                <el-menu-item index="2-5">BILIBILI</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item index="3">
              <el-icon><document /></el-icon>
              <span>一些有用的连接</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  House,
  Files,
  Document,
  Cherry,
  Timer,
  ChatDotSquare,
  MessageBox,
} from "@element-plus/icons";
export default defineComponent({
  components: {
    House,
    Files,
    Cherry,
    Document,
    Timer,
    ChatDotSquare,
    MessageBox,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
  data() {
    return {
      name: "Something",
    };
  },
});
// 组件信息
</script>

<style lang="less" scoped>
.aside {
  float: left;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: 50px;
  width: 217px;
  overflow: hidden;
  background-color: #f9f9f9;
  .main {
    background-color: #f9f9f9;
  }
}
.tac {
  flex-direction: column;
}
</style>
