<template>
  <div class="aside">
    <el-row class="tac">
      <el-tag type="info">导航</el-tag>
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title="">
              <el-icon><location /></el-icon>
              <span>首页</span>
            </template>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>XXXX</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>仓库</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>音乐</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><setting /></el-icon>
            <span>归档</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><setting /></el-icon>
            <span>留言</span>
          </el-menu-item>
          <el-menu-item index="7">
            <el-icon><setting /></el-icon>
            <span>一些盒子</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-tag type="info"> 组成</el-tag>

      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title="">
              <el-icon><location /></el-icon>
              <span>分类</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">前端</el-menu-item>
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons";
export default defineComponent({
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
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
});
// 组件信息
</script>

<style scope>
.aside {
  float: left;
  position: relative;
  padding-top: 50px;
  width: 217px;
}
.tac {
  flex-direction: column;
}
</style>
